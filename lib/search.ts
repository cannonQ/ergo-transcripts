import OpenAI from "openai";
import fs from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "public", "data");
const EMBED_MODEL = "text-embedding-3-small";
const EMBED_DIM = 1024;

// In-memory index — loaded once on cold start
let vectors: Float32Array | null = null;
let metadata: ChunkMeta[] | null = null;
let openaiClient: OpenAI | null = null;

interface ChunkMeta {
  id: string;
  text: string;
  title: string;
  source: string; // youtube, telegram, forum, blog
  source_url: string;
  date: string;
  type: string; // video_summary, video_qa, video_decision, telegram_weekly_*, telegram_monthly_*, forum_post, blog_post
}

function loadIndex(): { vectors: Float32Array; metadata: ChunkMeta[] } {
  if (vectors && metadata) {
    return { vectors, metadata };
  }

  const vectorsBuf = fs.readFileSync(path.join(DATA_DIR, "vectors.bin"));
  vectors = new Float32Array(
    vectorsBuf.buffer,
    vectorsBuf.byteOffset,
    vectorsBuf.byteLength / 4
  );

  const metaJson = fs.readFileSync(
    path.join(DATA_DIR, "metadata.json"),
    "utf-8"
  );
  metadata = JSON.parse(metaJson);

  const numChunks = metadata!.length;
  console.log(
    `Loaded ${numChunks} chunks (${(vectorsBuf.byteLength / 1024 / 1024).toFixed(1)} MB vectors)`
  );

  return { vectors, metadata: metadata! };
}

function getOpenAI(): OpenAI {
  if (!openaiClient) {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      throw new Error("OPENAI_API_KEY environment variable required");
    }
    openaiClient = new OpenAI({ apiKey });
  }
  return openaiClient;
}

async function embedQuery(query: string): Promise<Float32Array> {
  const client = getOpenAI();
  const response = await client.embeddings.create({
    model: EMBED_MODEL,
    input: query,
    dimensions: EMBED_DIM,
  });
  return new Float32Array(response.data[0].embedding);
}

function cosineSim(
  query: Float32Array,
  allVectors: Float32Array,
  index: number
): number {
  const offset = index * EMBED_DIM;
  let dot = 0;
  for (let j = 0; j < EMBED_DIM; j++) {
    dot += query[j] * allVectors[offset + j];
  }
  return dot;
}

export interface SearchResult {
  id: string;
  text: string;
  title: string;
  source: string;
  source_url: string;
  date: string;
  type: string;
  similarity: number;
}

/**
 * Semantic search across all conversation content.
 * Optionally filter by source (youtube, telegram, forum, blog) and/or date range.
 */
export async function searchConversations(
  query: string,
  options?: {
    source?: string;
    dateStart?: string;
    dateEnd?: string;
    limit?: number;
  }
): Promise<SearchResult[]> {
  const { vectors: vecs, metadata: meta } = loadIndex();
  const queryVec = await embedQuery(query);
  const numChunks = meta.length;
  const limit = options?.limit ?? 10;

  // Compute similarities
  const scores: { index: number; sim: number }[] = new Array(numChunks);
  for (let i = 0; i < numChunks; i++) {
    scores[i] = { index: i, sim: cosineSim(queryVec, vecs, i) };
  }

  scores.sort((a, b) => b.sim - a.sim);

  // Filter
  let candidates = scores;
  if (options?.source) {
    const src = options.source.toLowerCase();
    candidates = candidates.filter(
      (s) => meta[s.index].source.toLowerCase() === src
    );
  }
  if (options?.dateStart) {
    candidates = candidates.filter(
      (s) => meta[s.index].date >= options.dateStart!
    );
  }
  if (options?.dateEnd) {
    candidates = candidates.filter(
      (s) => meta[s.index].date <= options.dateEnd!
    );
  }

  // Deduplicate: keep best chunk per unique id prefix (same document)
  const seen = new Set<string>();
  const results: SearchResult[] = [];
  for (const s of candidates) {
    const m = meta[s.index];
    const docKey = m.id.split("#")[0]; // e.g., "video/20240628_xxx"
    if (!seen.has(docKey) && results.length < limit) {
      seen.add(docKey);
      results.push({
        id: m.id,
        text: m.text,
        title: m.title,
        source: m.source,
        source_url: m.source_url,
        date: m.date,
        type: m.type,
        similarity: s.sim,
      });
    }
  }

  return results;
}

/**
 * Get content for a specific date range across all sources.
 */
export async function getTimeline(
  dateStart: string,
  dateEnd: string,
  source?: string
): Promise<ChunkMeta[]> {
  const { metadata: meta } = loadIndex();

  let results = meta.filter((m) => m.date >= dateStart && m.date <= dateEnd);

  if (source) {
    results = results.filter(
      (m) => m.source.toLowerCase() === source.toLowerCase()
    );
  }

  // Deduplicate by document
  const seen = new Set<string>();
  const unique: ChunkMeta[] = [];
  for (const m of results) {
    const docKey = m.id.split("#")[0];
    if (!seen.has(docKey)) {
      seen.add(docKey);
      unique.push(m);
    }
  }

  // Sort by date
  unique.sort((a, b) => a.date.localeCompare(b.date));
  return unique;
}

/**
 * List available content by source.
 */
export function listContent(
  source?: string,
  year?: string
): { source: string; type: string; title: string; date: string; id: string }[] {
  const { metadata: meta } = loadIndex();

  // Deduplicate by document
  const seen = new Set<string>();
  const items: {
    source: string;
    type: string;
    title: string;
    date: string;
    id: string;
  }[] = [];

  for (const m of meta) {
    const docKey = m.id.split("#")[0];
    if (seen.has(docKey)) continue;
    seen.add(docKey);

    if (source && m.source.toLowerCase() !== source.toLowerCase()) continue;
    if (year && !m.date.startsWith(year)) continue;

    items.push({
      source: m.source,
      type: m.type,
      title: m.title,
      date: m.date,
      id: m.id,
    });
  }

  items.sort((a, b) => b.date.localeCompare(a.date)); // newest first
  return items;
}

/**
 * Read a specific file from the data directory.
 */
export function readDataFile(filePath: string): string | null {
  const fullPath = path.join(DATA_DIR, filePath);
  // Prevent path traversal
  if (!fullPath.startsWith(DATA_DIR)) return null;
  try {
    return fs.readFileSync(fullPath, "utf-8");
  } catch {
    return null;
  }
}
