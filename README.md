# Ergo Knowledge Base
## *The Public Meetings of Ergo*

**[Visit the live site →](https://ergo-transcripts.vercel.app/)**

Transcribing Ergo ecosystem videos into searchable, discoverable knowledge. Community calls, AMAs, technical discussions, and conference talks—from 2019 to present.

**Roadmap as of January 2026**

---

## The Problem

Years of valuable Ergo content is locked in video format. Developers can't search for technical explanations. Community members can't fact-check what was decided. Newcomers can't find learning paths. 

Most blockchain ecosystems have this same problem. Research shows only Bitcoin (1,000+ transcripts covering 70+ sources since 2014) and Ethereum (360+ core dev meeting transcripts) have built comprehensive transcription infrastructure. Ergo is building the third.

---

## The Website

<img width="641" height="360" alt="landing page" src="https://github.com/user-attachments/assets/5a07358b-05d1-42b5-83ad-96306eac6538" />

**What's live:** A React + TypeScript single-page application on Vercel with 50 transcripts (31 hours of content from 2025-2026).

**Features:**
- **Fuzzy search** (Fuse.js) with type filter pills and refine-within-results capability
- **Decision & commitment tracker** with status, type, and significance filters
- **Speaker directory** with stats, cross-linked to calls and topics they've discussed
- **Topic browser** showing related calls and key speakers for each topic
- **Clickable YouTube timestamps** in every transcript for instant video verification
- **Community correction system** that creates GitHub Issues directly from the site (no GitHub account required, honeypot bot prevention included). Issues trigger GitHub Actions that use Claude to review corrections and either approve with suggested changes, reject, or flag for human review. Approved corrections still require manual PR creation to prevent automated spam.
<img width="370" height="180" alt="issues being resolved by claude + github actions" src="https://github.com/user-attachments/assets/9d49173a-9bdc-4ecb-a8d2-c0eef7a880d4" />

- **FAQ database** aggregated from all transcribed calls
- Code-split routes, error boundaries, per-page SEO optimization, Open Graph tags

**Technical:** React + Vite + TypeScript SPA with a serverless API endpoint (`api/correction.js`) for GitHub issue creation. Not a static site generator—it's a proper web application.

---

## MCP Server (AI Assistant Integration)

**[Setup instructions →](https://ergo-transcripts.vercel.app/mcp)**

An MCP (Model Context Protocol) server that lets any AI assistant search across the full community knowledge base — 138 video call transcripts, 153 months of Telegram discussions, 677 forum posts, and 394 blog articles.

**Quick setup (Claude.ai):** Go to [claude.ai/customize/connectors](https://claude.ai/customize/connectors), click **+**, and add:
```
https://ergo-transcripts.vercel.app/api/mcp
```

**Available tools:**

| Tool | Description |
|------|-------------|
| `search_conversations` | Semantic vector search across all community content |
| `get_video` | Full video call summary, Q&A, decisions by title/date |
| `get_telegram_summary` | Weekly or monthly Telegram summaries |
| `get_forum_topic` | Search and retrieve ErgoForum topics |
| `timeline` | Cross-source digest for a date range |
| `list_content` | Browse available content by source/year |

Works with Claude, Gemini CLI, Codex CLI, VS Code/Copilot, Cursor, Windsurf, and Cline. See the [setup page](https://ergo-transcripts.vercel.app/mcp) for client-specific configuration.

**Companion server:** For curated developer docs (ErgoScript reference, contract analyses, EIPs, security audits), add the [Ergo Knowledge Base MCP](https://ergo-knowledge-base.vercel.app/api/mcp) alongside this one.

---

## The Pipeline

**What works right now:**

50 transcripts processed and live, with additional batches processed weekly. Total cost: ~$0.55 per hour of content ($17 for 31 hours).

**Processing workflow:**
1. **yt-dlp** downloads audio from YouTube
2. **WhisperX** transcribes with speaker diarization
3. **Claude API** identifies speakers (with human approval checkpoint)
4. **Claude API** processes full transcript: glossary-based cleanup, summary, metadata, Q&A extraction
5. **Output** to React SPA data files

**Glossary-driven accuracy:**

300+ term glossary that grows with each transcript. Every new video adds corrections for missed technical terms, speaker names, and Ergo-specific vocabulary. Strategic decision to start with recent content (2025-2026) built a relevant, modern glossary quickly. Now processing in both directions—new content forward, historical backfill to 2019—so the mature glossary improves accuracy on older material.

**Cost control:**
- Batch API for non-urgent processing
- Prompt caching for repeated glossary/instructions  
- Smart chunking to stay under context limits
- Currently running ~$0.55 per hour of video

---

## Roadmap

### Q1 2026

- Process additional recent content batches from 2024-2025
- Begin historical backfill to 2019 using mature glossary
- Community review of early transcripts (processed before glossary matured)
- Structure data for vector search and AI retrieval
- Reach 150 total transcripts
- Begin integrating Twitter Spaces
- Scope AI assistant prototype

### Q2 2026

- 150-200 transcripts covering recent content plus key historical material back to 2019
- Find one off presentations that aren't on "ergo youtube" account (e.g. Kushti on Vlad Kosta, Joe on Catalyst Proposal Show)
- Launch production AI assistant with semantic search
- Contributor indexes and cross-reference linking
- Documentation for developers building on transcript corpus
- Process community corrections, continue glossary refinement

### Q3-Q4 2026

- 250-300+ transcripts (near-complete historical coverage)
- Multi-platform bots (Discord, Telegram, API)
- Advanced discovery features: topic clustering, decision timelines, proposal tracking
- Launch bounty program for community contributions
- Reference implementation for other blockchain ecosystems to fork

### 2027+

- Real-time transcription (24-48 hours after new content publishes)
- Comprehensive archive of all public Ergo video and audio content
- Sustainable funding model (grants, bounties, or protocol integration)
- Cross-chain knowledge exchange model

---

## Prior Art

**Bitcoin Transcripts** (btctranscripts.com):
- 1,000+ transcripts from 70+ sources since 2014
- Lightning Network bounties for contributors
- Integrated with bitcoinsearch.xyz and chat.bitcoinsearch.xyz
- 235 forks, 87 contributors

**Ethereum Cat Herders:**
- 360+ core dev meeting transcripts since 2019
- Grant-funded (Moloch DAO, ESP, Gitcoin)
- Registered non-profit for sustainability

**Others:**
- Cardano: HoskSaid.com (founder AMAs only, narrow scope)
- Solana: Monthly ecosystem call recaps ($50 bounties)
- Most top-50 blockchains: nothing

We're learning from Bitcoin's contributor model and Ethereum's governance focus while adapting to Ergo's ecosystem size and culture.

---

## Contributing

**Current needs:**

**AI/ML:**
- Chatbot interface for natural language search
- Vector embedding optimization for transcript data
- RAG system design for accurate information retrieval with source citations

**Content Quality:**
- Review early batch transcripts (processed before glossary matured to 300+ terms)
- Review historical backfill content (2019-2023) as it gets processed
- **Submit corrections via the website:** Click "Suggest Correction" on any transcript page. This creates a GitHub Issue (no account required). GitHub Actions automatically triggers Claude to review your correction. Claude will either: (1) approve with suggested changes, (2) reject with reasoning, or (3) flag for human review. Approved corrections still require manual PR creation—this prevents automated spam while streamlining the review process.
- **Direct edits:** Fork the repo and submit PRs for transcript/Q&A/metadata changes if you prefer full control
- Flag edge case technical terms not yet in glossary
- Improve speaker identification accuracy

**Infrastructure:**
- Processing pipeline optimization
- Search performance improvements
- Quality metrics and monitoring dashboards

**UX:**
- Advanced search interface design
- Data visualization (topic networks, decision timelines, contributor graphs)
- Mobile experience optimization

Check the Issues tab for specific tasks. For questions or collaboration, open a discussion or reach out via [Discord/Telegram/etc—add before publishing].

---

## Repository Structure

```
/
├── api/                    # Serverless functions (MCP, OAuth, corrections)
│   ├── mcp.ts             # MCP endpoint (6 tools, semantic search)
│   ├── authorize.js       # No-op OAuth for MCP protocol compliance
│   ├── token.js           # No-op OAuth token endpoint
│   └── correction.js      # GitHub issue creation for corrections
├── data/                   # Vector index (bundled with serverless functions)
│   ├── vectors.bin        # Pre-computed embeddings (9,086 chunks)
│   └── metadata.json      # Chunk text + metadata
├── lib/                    # Shared server-side code
│   └── search.ts          # Vector search engine (cosine similarity)
├── public/
│   └── data/              # Content files (video, telegram, forum, blog)
├── src/                   # React application source
├── scripts/               # Processing pipeline (transcription, embeddings, etc.)
├── glossary/              # 300+ term reference for Claude processing
└── docs/                  # Implementation specs, quality guidelines
```

---

## Technical Philosophy

**AI-assisted, not AI-only.** Use automation for tedious work (transcription, speaker identification, formatting) but preserve human validation where accuracy matters most.

**Quality over speed.** Better to process one video correctly than ten videos with errors requiring community cleanup.

**Sustainable costs.** Batch processing and prompt caching keep the project economically viable at scale.

---

## Questions?

This is a volunteer-run project still figuring out governance, funding, and long-term structure. Open a discussion in this repo or reach out via [add contact method before publishing].

---

## License

[AGPL-3.0](https://www.gnu.org/licenses/agpl-3.0.html). Goal is to make this reusable by other blockchain ecosystems.
