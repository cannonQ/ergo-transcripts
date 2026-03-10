#!/usr/bin/env python3
"""
Generate vector embeddings for ergo-transcripts conversation content.

Chunks all content (video summaries, Telegram segments, forum posts, blog posts),
embeds via OpenAI text-embedding-3-small, and outputs vectors.json for the MCP server.

Usage:
    python scripts/generate_embeddings.py --dry-run    # Preview chunks, no API calls
    python scripts/generate_embeddings.py              # Generate vectors.json
"""

import argparse
import hashlib
import json
import os
import re
import struct
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).parent.parent.resolve()
DATA_DIR = REPO_ROOT / "public" / "data"
OUTPUT_DIR = REPO_ROOT / "public" / "data"

EMBED_DIM = 1024
MAX_CHUNK_TOKENS = 1200
# OpenAI text-embedding-3-small has 8192 token limit; cap text to stay safe
# Real ratio is ~3.2 chars/token for mixed content, so 24000 chars ≈ 7500 tokens
MAX_EMBED_CHARS = 24000


def estimate_tokens(text: str) -> int:
    return len(text) // 4


def content_hash(text: str) -> str:
    return hashlib.sha256(text.encode()).hexdigest()[:16]


def parse_frontmatter(text: str) -> dict:
    """Extract YAML frontmatter from markdown text."""
    if not text.startswith("---"):
        return {}
    end = text.find("\n---", 3)
    if end == -1:
        return {}
    fm_block = text[3:end].strip()
    meta = {}
    for line in fm_block.split("\n"):
        m = re.match(r"^(\w[\w_-]*)\s*:\s*(.+)$", line)
        if m:
            key, val = m.group(1), m.group(2).strip()
            if (val.startswith('"') and val.endswith('"')) or \
               (val.startswith("'") and val.endswith("'")):
                val = val[1:-1]
            if val.startswith("[") and val.endswith("]"):
                val = [v.strip().strip("'\"") for v in val[1:-1].split(",") if v.strip()]
            meta[key] = val
    return meta


def strip_frontmatter(text: str) -> str:
    if not text.startswith("---"):
        return text
    end = text.find("\n---", 3)
    if end == -1:
        return text
    return text[end + 4:].lstrip("\n")


def chunk_by_headers(text: str) -> list[str]:
    """Split markdown into chunks at H2 boundaries."""
    body = strip_frontmatter(text)
    parts = re.split(r"(?=^## )", body, flags=re.MULTILINE)
    chunks = []

    for part in parts:
        part = part.strip()
        if not part:
            continue
        tokens = estimate_tokens(part)
        if tokens <= MAX_CHUNK_TOKENS:
            chunks.append(part)
        else:
            sub_parts = re.split(r"(?=^### )", part, flags=re.MULTILINE)
            current = ""
            for sp in sub_parts:
                if estimate_tokens(current + sp) > MAX_CHUNK_TOKENS and current:
                    chunks.append(current.strip())
                    current = sp
                else:
                    current += sp
            if current.strip():
                chunks.append(current.strip())

    return chunks if chunks else [body] if body.strip() else []


# ---------------------------------------------------------------------------
# Content collectors — one per source type
# ---------------------------------------------------------------------------

def collect_video_chunks() -> list[dict]:
    """Chunk video summaries. Also embed Q&A pairs and decisions as separate chunks."""
    calls_dir = DATA_DIR / "calls"
    if not calls_dir.exists():
        return []

    chunks = []

    for summary_path in sorted(calls_dir.glob("*_summary.md")):
        prefix = summary_path.name.replace("_summary.md", "")
        text = summary_path.read_text(encoding="utf-8", errors="ignore")
        fm = parse_frontmatter(text)

        title = fm.get("title", prefix)
        date = fm.get("date", "")
        source_url = fm.get("source_url", "")
        speakers = fm.get("speakers", [])
        if isinstance(speakers, str):
            speakers = [speakers]

        # Context header for search relevance
        header = f"[Video: {title} | {date} | Speakers: {', '.join(speakers[:5])}]"

        # Chunk the summary markdown
        body_chunks = chunk_by_headers(text)
        for i, chunk_text in enumerate(body_chunks):
            full_text = f"{header}\n\n{chunk_text}"
            chunks.append({
                "id": f"video/{prefix}#summary-{i}",
                "text": full_text,
                "title": title,
                "source": "youtube",
                "source_url": source_url,
                "date": date,
                "type": "video_summary",
                "tokens": estimate_tokens(full_text),
            })

        # Embed Q&A pairs as individual chunks
        qa_path = calls_dir / f"{prefix}_qa.json"
        if qa_path.exists():
            try:
                qa_data = json.loads(qa_path.read_text(encoding="utf-8"))
                for qa in qa_data.get("qa_pairs", []):
                    q = qa.get("question", "")
                    a = qa.get("answer", "")
                    responder = qa.get("responder", "")
                    qa_text = f"{header}\n\nQ: {q}\nA ({responder}): {a}"
                    chunks.append({
                        "id": f"video/{prefix}#qa-{qa.get('qa_id', 0)}",
                        "text": qa_text,
                        "title": title,
                        "source": "youtube",
                        "source_url": source_url,
                        "date": date,
                        "type": "video_qa",
                        "tokens": estimate_tokens(qa_text),
                    })
            except (json.JSONDecodeError, KeyError):
                pass

        # Embed decisions as individual chunks
        decisions_path = calls_dir / f"{prefix}_decisions.json"
        if decisions_path.exists():
            try:
                dec_data = json.loads(decisions_path.read_text(encoding="utf-8"))
                for d in dec_data.get("decisions", []):
                    dec_text = f"{header}\n\nDecision: {d.get('decision', '')}\nContext: {d.get('context', '')}\nSpeaker: {d.get('speaker', '')}"
                    if d.get("quote"):
                        dec_text += f'\nQuote: "{d["quote"]}"'
                    chunks.append({
                        "id": f"video/{prefix}#decision-{d.get('id', 0)}",
                        "text": dec_text,
                        "title": title,
                        "source": "youtube",
                        "source_url": source_url,
                        "date": date,
                        "type": "video_decision",
                        "tokens": estimate_tokens(dec_text),
                    })
            except (json.JSONDecodeError, KeyError):
                pass

    return chunks


def collect_telegram_chunks() -> list[dict]:
    """Chunk Telegram weekly segments and monthly summaries."""
    chunks = []

    for channel in ["general", "developer"]:
        # Weekly segments
        seg_dir = DATA_DIR / "telegram" / channel / "segments"
        if seg_dir.exists():
            for summary_path in sorted(seg_dir.glob("*_summary.md")):
                text = summary_path.read_text(encoding="utf-8", errors="ignore")
                fm = parse_frontmatter(text)

                title = fm.get("title", summary_path.stem)
                week = fm.get("week", "")
                date_start = fm.get("date_start", "")

                header = f"[Telegram {channel.title()}: {title}]"
                body_chunks = chunk_by_headers(text)

                for i, chunk_text in enumerate(body_chunks):
                    full_text = f"{header}\n\n{chunk_text}"
                    chunks.append({
                        "id": f"telegram/{channel}/weekly/{summary_path.stem}#{i}",
                        "text": full_text,
                        "title": title,
                        "source": "telegram",
                        "source_url": "",
                        "date": date_start,
                        "type": f"telegram_weekly_{channel}",
                        "tokens": estimate_tokens(full_text),
                    })

        # Monthly summaries
        sum_dir = DATA_DIR / "telegram" / channel / "summaries"
        if sum_dir.exists():
            for summary_path in sorted(sum_dir.glob("*.md")):
                text = summary_path.read_text(encoding="utf-8", errors="ignore")
                fm = parse_frontmatter(text)

                title = fm.get("title", summary_path.stem)
                date_range = fm.get("date_range", [])
                date = date_range[0] if isinstance(date_range, list) and date_range else ""

                header = f"[Telegram {channel.title()} Monthly: {title}]"
                body_chunks = chunk_by_headers(text)

                for i, chunk_text in enumerate(body_chunks):
                    full_text = f"{header}\n\n{chunk_text}"
                    chunks.append({
                        "id": f"telegram/{channel}/monthly/{summary_path.stem}#{i}",
                        "text": full_text,
                        "title": title,
                        "source": "telegram",
                        "source_url": "",
                        "date": date,
                        "type": f"telegram_monthly_{channel}",
                        "tokens": estimate_tokens(full_text),
                    })

    return chunks


def collect_forum_chunks() -> list[dict]:
    """Chunk ErgoForum posts."""
    forum_dir = DATA_DIR / "forum"
    if not forum_dir.exists():
        return []

    chunks = []
    for md_path in sorted(forum_dir.rglob("*.md")):
        if md_path.name.startswith("forum-index"):
            continue
        text = md_path.read_text(encoding="utf-8", errors="ignore")
        fm = parse_frontmatter(text)

        title = fm.get("title", md_path.stem.replace("-", " ").title())
        source_url = fm.get("source_url", "")
        date = fm.get("created", fm.get("date", ""))
        category = fm.get("forum_category", fm.get("category", ""))

        header = f"[ErgoForum: {title} | {category}]"

        # Smaller forum posts: whole file as one chunk
        body = strip_frontmatter(text)
        if estimate_tokens(body) <= MAX_CHUNK_TOKENS:
            full_text = f"{header}\n\n{body}"
            chunks.append({
                "id": f"forum/{md_path.stem}#0",
                "text": full_text,
                "title": title,
                "source": "forum",
                "source_url": source_url,
                "date": date,
                "type": "forum_post",
                "tokens": estimate_tokens(full_text),
            })
        else:
            body_chunks = chunk_by_headers(text)
            for i, chunk_text in enumerate(body_chunks):
                full_text = f"{header}\n\n{chunk_text}"
                chunks.append({
                    "id": f"forum/{md_path.stem}#{i}",
                    "text": full_text,
                    "title": title,
                    "source": "forum",
                    "source_url": source_url,
                    "date": date,
                    "type": "forum_post",
                    "tokens": estimate_tokens(full_text),
                })

    return chunks


def collect_blog_chunks() -> list[dict]:
    """Chunk Ergo Platform blog posts."""
    blog_dir = DATA_DIR / "blog"
    if not blog_dir.exists():
        return []

    chunks = []
    for md_path in sorted(blog_dir.rglob("*.md")):
        if md_path.name.startswith("blog-index"):
            continue
        text = md_path.read_text(encoding="utf-8", errors="ignore")
        fm = parse_frontmatter(text)

        title = fm.get("title", md_path.stem.replace("-", " ").title())
        source_url = fm.get("source_url", "")
        date = fm.get("date", "")

        header = f"[Ergo Blog: {title} | {date}]"

        body = strip_frontmatter(text)
        if estimate_tokens(body) <= MAX_CHUNK_TOKENS:
            full_text = f"{header}\n\n{body}"
            chunks.append({
                "id": f"blog/{md_path.stem}#0",
                "text": full_text,
                "title": title,
                "source": "blog",
                "source_url": source_url,
                "date": date,
                "type": "blog_post",
                "tokens": estimate_tokens(full_text),
            })
        else:
            body_chunks = chunk_by_headers(text)
            for i, chunk_text in enumerate(body_chunks):
                full_text = f"{header}\n\n{chunk_text}"
                chunks.append({
                    "id": f"blog/{md_path.stem}#{i}",
                    "text": full_text,
                    "title": title,
                    "source": "blog",
                    "source_url": source_url,
                    "date": date,
                    "type": "blog_post",
                    "tokens": estimate_tokens(full_text),
                })

    return chunks


# ---------------------------------------------------------------------------
# Embedding
# ---------------------------------------------------------------------------

def embed_openai(texts: list[str], model: str = "text-embedding-3-small",
                 dimensions: int = EMBED_DIM) -> list[list[float]]:
    """Embed texts using OpenAI's embedding API."""
    try:
        from openai import OpenAI
    except ImportError:
        sys.exit("openai package required: pip install openai")

    api_key = os.environ.get("OPENAI_API_KEY")
    if not api_key:
        sys.exit("OPENAI_API_KEY environment variable required")

    import time as _time

    client = OpenAI(api_key=api_key)
    embeddings = []
    batch_size = 100

    for i in range(0, len(texts), batch_size):
        truncate_at = MAX_EMBED_CHARS
        batch = [t[:truncate_at] for t in texts[i:i + batch_size]]
        for attempt in range(5):
            try:
                response = client.embeddings.create(
                    model=model,
                    input=batch,
                    dimensions=dimensions,
                )
                break
            except Exception as e:
                err_str = str(e)
                if "rate_limit" in err_str.lower() or "429" in err_str:
                    wait = 2 ** attempt
                    print(f"  rate limited, waiting {wait}s...")
                    _time.sleep(wait)
                elif "maximum context length" in err_str or "400" in err_str:
                    # Truncate more aggressively and retry
                    truncate_at = int(truncate_at * 0.7)
                    batch = [t[:truncate_at] for t in texts[i:i + batch_size]]
                    print(f"  token limit hit, truncating to {truncate_at} chars...")
                else:
                    raise
        batch_embeddings = [item.embedding for item in response.data]
        embeddings.extend(batch_embeddings)
        done = min(i + batch_size, len(texts))
        print(f"  embedded {done}/{len(texts)}")

    return embeddings


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main() -> None:
    parser = argparse.ArgumentParser(description="Generate embeddings for conversation content")
    parser.add_argument("--dry-run", action="store_true", help="Chunk and report stats, no API calls")
    args = parser.parse_args()

    print("Collecting chunks...\n")

    video_chunks = collect_video_chunks()
    print(f"  Video: {len(video_chunks)} chunks")

    telegram_chunks = collect_telegram_chunks()
    print(f"  Telegram: {len(telegram_chunks)} chunks")

    forum_chunks = collect_forum_chunks()
    print(f"  Forum: {len(forum_chunks)} chunks")

    blog_chunks = collect_blog_chunks()
    print(f"  Blog: {len(blog_chunks)} chunks")

    all_chunks = video_chunks + telegram_chunks + forum_chunks + blog_chunks
    total_tokens = sum(c["tokens"] for c in all_chunks)
    print(f"\nTotal: {len(all_chunks)} chunks, ~{total_tokens:,} tokens")

    # Type breakdown
    by_type = {}
    for c in all_chunks:
        t = c["type"]
        by_type[t] = by_type.get(t, 0) + 1
    print("\nChunks by type:")
    for t, count in sorted(by_type.items(), key=lambda x: -x[1]):
        print(f"  {t}: {count}")

    if args.dry_run:
        # Estimate embedding cost
        cost = (total_tokens / 1_000_000) * 0.02  # $0.02 per 1M tokens for text-embedding-3-small
        print(f"\nEstimated OpenAI embedding cost: ${cost:.2f}")
        return

    # Embed
    texts = [c["text"] for c in all_chunks]
    print(f"\nEmbedding {len(texts)} chunks with OpenAI text-embedding-3-small...")
    vectors = embed_openai(texts)
    print(f"Embedding complete. Dimension: {len(vectors[0])}")

    # Output vectors.bin (raw Float32) + metadata.json
    vectors_path = OUTPUT_DIR / "vectors.bin"
    metadata_path = OUTPUT_DIR / "metadata.json"

    # Write binary vectors
    with open(vectors_path, "wb") as f:
        for vec in vectors:
            f.write(struct.pack(f"{EMBED_DIM}f", *vec))

    # Write metadata (everything except the embedding)
    metadata = []
    for chunk in all_chunks:
        metadata.append({
            "id": chunk["id"],
            "text": chunk["text"],
            "title": chunk["title"],
            "source": chunk["source"],
            "source_url": chunk["source_url"],
            "date": chunk["date"],
            "type": chunk["type"],
        })

    with open(metadata_path, "w") as f:
        json.dump(metadata, f, separators=(",", ":"))

    vec_size = os.path.getsize(vectors_path) / 1024 / 1024
    meta_size = os.path.getsize(metadata_path) / 1024 / 1024
    print(f"\nvectors.bin: {vec_size:.1f} MB")
    print(f"metadata.json: {meta_size:.1f} MB")
    print(f"Total: {vec_size + meta_size:.1f} MB")
    print("Done.")


if __name__ == "__main__":
    main()
