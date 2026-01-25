import type {
  Index,
  CallMeta,
  QAData,
  DecisionsData,
  Topic,
  Speaker,
  AggregatedDecision,
  AggregatedQA
} from '../types';

// Simple in-memory cache
const cache = new Map<string, any>();

async function fetchWithCache<T>(key: string, fetcher: () => Promise<T>): Promise<T> {
  if (cache.has(key)) {
    return cache.get(key) as T;
  }
  const data = await fetcher();
  cache.set(key, data);
  return data;
}

// Fetch the main index
export async function fetchIndex(): Promise<Index> {
  return fetchWithCache('index', async () => {
    const response = await fetch('/data/index.json');
    if (!response.ok) throw new Error('Failed to fetch index');
    return response.json();
  });
}

// Fetch speakers list
export async function fetchSpeakers(): Promise<Speaker[]> {
  return fetchWithCache('speakers', async () => {
    const response = await fetch('/data/speakers.json');
    if (!response.ok) throw new Error('Failed to fetch speakers');
    return response.json();
  });
}

// Fetch topics list
export async function fetchTopics(): Promise<Topic[]> {
  return fetchWithCache('topics', async () => {
    const response = await fetch('/data/topics.json');
    if (!response.ok) throw new Error('Failed to fetch topics');
    return response.json();
  });
}

// Fetch individual call metadata
export async function fetchCallMeta(filePrefix: string): Promise<CallMeta> {
  const key = `call-meta-${filePrefix}`;
  return fetchWithCache(key, async () => {
    const response = await fetch(`/data/calls/${filePrefix}_meta.json`);
    if (!response.ok) throw new Error(`Failed to fetch call meta: ${filePrefix}`);
    return response.json();
  });
}

// Fetch call summary markdown
export async function fetchCallSummary(filePrefix: string): Promise<string> {
  const key = `call-summary-${filePrefix}`;
  return fetchWithCache(key, async () => {
    const response = await fetch(`/data/calls/${filePrefix}_summary.md`);
    if (!response.ok) throw new Error(`Failed to fetch call summary: ${filePrefix}`);
    return response.text();
  });
}

// Fetch call transcript
export async function fetchCallTranscript(filePrefix: string): Promise<string> {
  const key = `call-transcript-${filePrefix}`;
  return fetchWithCache(key, async () => {
    const response = await fetch(`/data/calls/${filePrefix}_transcript.txt`);
    if (!response.ok) throw new Error(`Failed to fetch transcript: ${filePrefix}`);
    return response.text();
  });
}

// Fetch call Q&A
export async function fetchCallQA(filePrefix: string): Promise<QAData> {
  const key = `call-qa-${filePrefix}`;
  return fetchWithCache(key, async () => {
    const response = await fetch(`/data/calls/${filePrefix}_qa.json`);
    if (!response.ok) throw new Error(`Failed to fetch call Q&A: ${filePrefix}`);
    return response.json();
  });
}

// Fetch call decisions
export async function fetchCallDecisions(filePrefix: string): Promise<DecisionsData> {
  const key = `call-decisions-${filePrefix}`;
  return fetchWithCache(key, async () => {
    const response = await fetch(`/data/calls/${filePrefix}_decisions.json`);
    if (!response.ok) throw new Error(`Failed to fetch decisions: ${filePrefix}`);
    return response.json();
  });
}

// Fetch call marketing content
export async function fetchCallMarketing(filePrefix: string): Promise<string> {
  const key = `call-marketing-${filePrefix}`;
  return fetchWithCache(key, async () => {
    const response = await fetch(`/data/calls/${filePrefix}_marketing.md`);
    if (!response.ok) throw new Error(`Failed to fetch marketing: ${filePrefix}`);
    return response.text();
  });
}

// Fetch call topics JSON
export async function fetchCallTopics(filePrefix: string): Promise<string[]> {
  const key = `call-topics-${filePrefix}`;
  return fetchWithCache(key, async () => {
    const response = await fetch(`/data/calls/${filePrefix}_topics.json`);
    if (!response.ok) throw new Error(`Failed to fetch topics: ${filePrefix}`);
    const data = await response.json();
    // The topics file might be an array or object with topics property
    return Array.isArray(data) ? data : (data.topics || []);
  });
}

// Aggregate all Q&A from all calls
export async function fetchAllQA(): Promise<AggregatedQA[]> {
  const cacheKey = 'all-qa';
  if (cache.has(cacheKey)) {
    return cache.get(cacheKey) as AggregatedQA[];
  }

  const index = await fetchIndex();
  const allQA: AggregatedQA[] = [];

  await Promise.all(
    index.calls.map(async (call) => {
      try {
        const qaData = await fetchCallQA(call.file_prefix);
        qaData.qa_pairs.forEach((qa) => {
          allQA.push({
            id: `${call.id}-qa-${qa.qa_id}`,
            question: qa.question,
            answer: qa.answer,
            asker: qa.asker,
            responder: qa.responder,
            call_id: call.id,
            call_title: call.title,
            file_prefix: call.file_prefix,
            date: call.date,
            timestamp: qa.timestamp,
            category: qa.category,
            difficulty: qa.difficulty,
          });
        });
      } catch (e) {
        // Skip calls without Q&A
      }
    })
  );

  // Sort by date (newest first)
  allQA.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  cache.set(cacheKey, allQA);
  return allQA;
}

// Aggregate all decisions from all calls
export async function fetchAllDecisions(): Promise<AggregatedDecision[]> {
  const cacheKey = 'all-decisions';
  if (cache.has(cacheKey)) {
    return cache.get(cacheKey) as AggregatedDecision[];
  }

  const index = await fetchIndex();
  const allDecisions: AggregatedDecision[] = [];

  await Promise.all(
    index.calls.map(async (call) => {
      try {
        const decisionsData = await fetchCallDecisions(call.file_prefix);

        // Add decisions
        decisionsData.decisions?.forEach((d) => {
          allDecisions.push({
            id: `${call.id}-decision-${d.id}`,
            type: 'decision',
            title: d.decision,
            content: d.quote || d.decision,
            context: d.context,
            speaker: d.speaker,
            date: call.date,
            call_id: call.id,
            call_title: call.title,
            file_prefix: call.file_prefix,
            topic: d.topic,
            significance: d.significance,
            status: 'active',
            quote: d.quote,
          });
        });

        // Add commitments
        decisionsData.commitments?.forEach((c) => {
          allDecisions.push({
            id: `${call.id}-commitment-${c.id}`,
            type: 'commitment',
            title: c.commitment,
            content: c.quote || c.commitment,
            speaker: c.owner,
            owner: c.owner,
            timeline: c.timeline,
            date: call.date,
            call_id: call.id,
            call_title: call.title,
            file_prefix: call.file_prefix,
            topic: c.topic,
            significance: 'minor',
            status: 'pending',
            quote: c.quote,
          });
        });

        // Add open questions
        decisionsData.open_questions?.forEach((q) => {
          allDecisions.push({
            id: `${call.id}-question-${q.id}`,
            type: 'open_question',
            title: q.question,
            content: q.context,
            context: q.context,
            speaker: q.raised_by,
            date: call.date,
            call_id: call.id,
            call_title: call.title,
            file_prefix: call.file_prefix,
            topic: q.topic,
            significance: 'minor',
            status: 'unresolved',
          });
        });
      } catch (e) {
        // Skip calls without decisions
      }
    })
  );

  // Sort by date (newest first)
  allDecisions.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  cache.set(cacheKey, allDecisions);
  return allDecisions;
}

// Find a call by ID
export async function findCallById(id: string): Promise<{ call: CallMeta; filePrefix: string } | null> {
  const index = await fetchIndex();
  const callSummary = index.calls.find(c => c.id === id);

  if (!callSummary) return null;

  const callMeta = await fetchCallMeta(callSummary.file_prefix);
  return { call: callMeta, filePrefix: callSummary.file_prefix };
}

// Clear cache (useful for development)
export function clearCache(): void {
  cache.clear();
}
