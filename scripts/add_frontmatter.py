#!/usr/bin/env python3
"""
Add YAML frontmatter to video summaries and Telegram weekly segments.
Reads companion JSON files (_meta.json, _topics.json) for metadata.

Usage:
    python scripts/add_frontmatter.py              # dry run
    python scripts/add_frontmatter.py --write       # actually write files
"""

import argparse
import json
import os
import re
import sys
from datetime import datetime, timedelta
from pathlib import Path

DATA_DIR = Path(__file__).parent.parent / "public" / "data"


def week_to_date_range(week_str: str) -> tuple[str, str]:
    """Convert YYYY-WNN to (start_date, end_date) strings."""
    year, week = week_str.split("-W")
    year = int(year)
    week = int(week)
    # ISO week: Monday of week 1 contains Jan 4
    jan4 = datetime(year, 1, 4)
    start_of_week1 = jan4 - timedelta(days=jan4.weekday())
    start = start_of_week1 + timedelta(weeks=week - 1)
    end = start + timedelta(days=6)
    return start.strftime("%Y-%m-%d"), end.strftime("%Y-%m-%d")


def make_yaml_list(items: list) -> str:
    """Format a list for YAML frontmatter."""
    if not items:
        return "[]"
    escaped = []
    for item in items:
        s = str(item)
        if any(c in s for c in ":#{}[]|>&*!?,"):
            escaped.append(f'"{s}"')
        else:
            escaped.append(s)
    return "[" + ", ".join(escaped) + "]"


def process_video_summaries(write: bool) -> int:
    """Add frontmatter to video _summary.md files using _meta.json."""
    calls_dir = DATA_DIR / "calls"
    if not calls_dir.exists():
        print("  No calls/ directory found")
        return 0

    summary_files = sorted(calls_dir.glob("*_summary.md"))
    count = 0
    skipped = 0

    for summary_path in summary_files:
        content = summary_path.read_text(encoding="utf-8")

        # Skip if already has frontmatter
        if content.startswith("---"):
            skipped += 1
            continue

        # Find companion meta.json
        prefix = summary_path.name.replace("_summary.md", "")
        meta_path = calls_dir / f"{prefix}_meta.json"

        if not meta_path.exists():
            print(f"  WARN: No meta.json for {summary_path.name}")
            continue

        meta = json.loads(meta_path.read_text(encoding="utf-8"))

        # Build frontmatter
        title = meta.get("title", "Untitled")
        # Escape quotes in title
        title = title.replace('"', '\\"')
        date = meta.get("date", prefix[:4] + "-" + prefix[4:6] + "-" + prefix[6:8])
        video_id = meta.get("id", prefix.split("_", 1)[1] if "_" in prefix else "")
        speakers = meta.get("speakers", [])
        topics = meta.get("topics", [])
        call_type = meta.get("type", "community_chat")
        duration = meta.get("duration_minutes", 0)
        youtube_url = meta.get("media", {}).get("youtube", f"https://youtube.com/watch?v={video_id}")

        # Detect companion files
        companion_files = []
        for suffix in ["_transcript.txt", "_qa.json", "_decisions.json", "_topics.json"]:
            if (calls_dir / f"{prefix}{suffix}").exists():
                companion_files.append(f"{prefix}{suffix}")

        frontmatter = f"""---
title: "{title}"
date: "{date}"
type: video_summary
call_type: {call_type}
source: youtube
source_url: {youtube_url}
video_id: {video_id}
duration_minutes: {duration}
speakers: {make_yaml_list(speakers)}
topics: {make_yaml_list(topics[:15])}
companion_files: {make_yaml_list(companion_files)}
---
"""
        new_content = frontmatter + content

        if write:
            summary_path.write_text(new_content, encoding="utf-8")
        count += 1

    print(f"  Video summaries: {count} updated, {skipped} already had frontmatter")
    return count


def process_telegram_weekly(write: bool) -> int:
    """Add frontmatter to Telegram weekly _summary.md files using _topics.json."""
    count = 0
    skipped = 0

    for channel in ["general", "developer"]:
        seg_dir = DATA_DIR / "telegram" / channel / "segments"
        if not seg_dir.exists():
            continue

        summary_files = sorted(seg_dir.glob("*_summary.md"))

        for summary_path in summary_files:
            content = summary_path.read_text(encoding="utf-8")

            # Skip if already has frontmatter
            if content.startswith("---"):
                skipped += 1
                continue

            # Extract week from filename: 2024-W01_summary.md or 2024-W01a_summary.md
            fname = summary_path.name
            match = re.match(r"(\d{4}-W\d{2})[a-z]?_summary\.md", fname)
            if not match:
                print(f"  WARN: Can't parse week from {fname}")
                continue

            week_str = match.group(1)
            # Check for part suffix (a, b, c for oversized weeks)
            part_match = re.match(r"\d{4}-W\d{2}([a-z])_summary\.md", fname)
            part = part_match.group(1) if part_match else None

            try:
                start_date, end_date = week_to_date_range(week_str)
            except Exception:
                start_date, end_date = "", ""

            # Try to load companion topics.json
            topics_path = seg_dir / fname.replace("_summary.md", "_topics.json")
            topic_titles = []
            categories = []
            key_terms = []
            message_count = 0

            if topics_path.exists():
                try:
                    raw = topics_path.read_text(encoding="utf-8")
                    try:
                        topics_data = json.loads(raw)
                    except json.JSONDecodeError:
                        # Some files are truncated — try to salvage the topics array
                        topics_data = {}
                        topics_match = re.search(r'"topics"\s*:\s*\[', raw)
                        if topics_match:
                            # Find balanced array
                            depth = 0
                            start_idx = topics_match.end() - 1
                            for i in range(start_idx, len(raw)):
                                if raw[i] == '[':
                                    depth += 1
                                elif raw[i] == ']':
                                    depth -= 1
                                    if depth == 0:
                                        try:
                                            topics_data["topics"] = json.loads(raw[start_idx:i+1])
                                        except json.JSONDecodeError:
                                            pass
                                        break
                    for t in topics_data.get("topics", []):
                        topic_titles.append(t.get("title", ""))
                        cat = t.get("category", "")
                        if cat and cat not in categories:
                            categories.append(cat)
                        for kt in t.get("key_terms", []):
                            if kt not in key_terms:
                                key_terms.append(kt)
                    message_count = topics_data.get("message_count", 0)
                except Exception:
                    pass

            title = f"Ergo {channel.title()} Chat — {week_str}"
            if part:
                title += f" (Part {part.upper()})"

            frontmatter = f"""---
title: "{title}"
date_start: "{start_date}"
date_end: "{end_date}"
type: telegram_weekly
channel: {channel}
week: "{week_str}"
{f'part: "{part}"' + chr(10) if part else ''}source: telegram
message_count: {message_count}
categories: {make_yaml_list(categories[:10])}
key_terms: {make_yaml_list(key_terms[:20])}
---
"""
            new_content = frontmatter + content

            if write:
                summary_path.write_text(new_content, encoding="utf-8")
            count += 1

    print(f"  Telegram weekly: {count} updated, {skipped} already had frontmatter")
    return count


def main():
    parser = argparse.ArgumentParser(description="Add frontmatter to content files")
    parser.add_argument("--write", action="store_true", help="Actually write files (default: dry run)")
    args = parser.parse_args()

    mode = "WRITING" if args.write else "DRY RUN"
    print(f"=== Add Frontmatter ({mode}) ===\n")

    total = 0
    print("Processing video summaries...")
    total += process_video_summaries(args.write)

    print("\nProcessing Telegram weekly segments...")
    total += process_telegram_weekly(args.write)

    print(f"\n{'Wrote' if args.write else 'Would write'} {total} files total")


if __name__ == "__main__":
    main()
