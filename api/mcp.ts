import { z } from "zod";
import { createMcpHandler } from "mcp-handler";
import {
  searchConversations,
  getTimeline,
  listContent,
  readDataFile,
} from "../lib/search.js";

function sourceLabel(source: string): string {
  switch (source) {
    case "youtube":
      return "Video";
    case "telegram":
      return "Telegram";
    case "forum":
      return "ErgoForum";
    case "blog":
      return "Ergo Blog";
    default:
      return source;
  }
}

function typeLabel(type: string): string {
  if (type === "video_summary") return "Video Summary";
  if (type === "video_qa") return "Video Q&A";
  if (type === "video_decision") return "Video Decision";
  if (type.startsWith("telegram_weekly")) return `Telegram Weekly (${type.includes("developer") ? "Developer" : "General"})`;
  if (type.startsWith("telegram_monthly")) return `Telegram Monthly (${type.includes("developer") ? "Developer" : "General"})`;
  if (type === "forum_post") return "Forum Post";
  if (type === "blog_post") return "Blog Post";
  return type;
}

const handler = createMcpHandler(
  (server) => {
    // Tool 1: Semantic search across all community content
    server.tool(
      "search_conversations",
      "Semantic search across Ergo community discussions — video calls, Telegram chats, forum posts, and blog articles. " +
        "Returns the most relevant chunks with source attribution. " +
        "Use for questions like 'what has been discussed about AVL trees?' or 'oracle pool updates'.",
      {
        query: z.string().describe("Natural language search query"),
        source: z
          .enum(["youtube", "telegram", "forum", "blog"])
          .optional()
          .describe("Filter by source type"),
        date_start: z
          .string()
          .optional()
          .describe("Filter results after this date (YYYY-MM-DD)"),
        date_end: z
          .string()
          .optional()
          .describe("Filter results before this date (YYYY-MM-DD)"),
        limit: z
          .number()
          .int()
          .min(1)
          .max(20)
          .default(8)
          .describe("Number of results (default 8)"),
      },
      async ({ query, source, date_start, date_end, limit }) => {
        const results = await searchConversations(query, {
          source,
          dateStart: date_start,
          dateEnd: date_end,
          limit,
        });

        if (results.length === 0) {
          return {
            content: [
              {
                type: "text" as const,
                text: "No relevant community discussions found for that query.",
              },
            ],
          };
        }

        const formatted = results
          .map((r, i) => {
            const lines = [
              `### ${i + 1}. ${r.title}`,
              `**Source:** ${sourceLabel(r.source)} | **Type:** ${typeLabel(r.type)} | **Date:** ${r.date || "unknown"}`,
            ];
            if (r.source_url) {
              lines.push(`**Link:** ${r.source_url}`);
            }
            lines.push(`**Relevance:** ${r.similarity.toFixed(3)}`);
            lines.push("");
            // Truncate text to ~800 chars for overview
            const preview =
              r.text.length > 800 ? r.text.slice(0, 800) + "..." : r.text;
            lines.push(preview);
            return lines.join("\n");
          })
          .join("\n\n---\n\n");

        return {
          content: [{ type: "text" as const, text: formatted }],
        };
      }
    );

    // Tool 2: Get a specific video's full content
    server.tool(
      "get_video",
      "Get a specific Ergo video call's summary, Q&A, and decisions. " +
        "Search by title keywords, date, or video ID. " +
        "Returns the full summary with links to companion data (transcript, Q&A, decisions).",
      {
        query: z
          .string()
          .describe(
            "Search term: video title keywords, date (YYYY-MM-DD), or YouTube video ID"
          ),
      },
      async ({ query }) => {
        // Search only video content
        const results = await searchConversations(query, {
          source: "youtube",
          limit: 1,
        });

        if (results.length === 0) {
          return {
            content: [
              {
                type: "text" as const,
                text: "No matching video found. Try different keywords or a date.",
              },
            ],
          };
        }

        const match = results[0];
        // Extract file prefix from id: "video/20240628_uGb4ylD5ISY#summary-0" → "20240628_uGb4ylD5ISY"
        const prefix = match.id.replace("video/", "").split("#")[0];

        // Load the full summary
        const summary = readDataFile(`calls/${prefix}_summary.md`);
        const metaRaw = readDataFile(`calls/${prefix}_meta.json`);
        const qaRaw = readDataFile(`calls/${prefix}_qa.json`);
        const decisionsRaw = readDataFile(`calls/${prefix}_decisions.json`);

        const parts: string[] = [];

        // Meta header
        if (metaRaw) {
          try {
            const meta = JSON.parse(metaRaw);
            parts.push(
              `# ${meta.title}`,
              `**Date:** ${meta.date} | **Duration:** ${meta.duration_minutes} min | **Type:** ${meta.type}`,
              `**Speakers:** ${(meta.speakers || []).join(", ")}`,
              `**YouTube:** ${meta.media?.youtube || ""}`,
              ""
            );
          } catch {
            /* skip */
          }
        }

        // Full summary (strip frontmatter)
        if (summary) {
          let text = summary;
          if (text.startsWith("---")) {
            const end = text.indexOf("---", 3);
            if (end !== -1) text = text.slice(end + 3).trim();
          }
          parts.push("## Summary\n", text, "");
        }

        // Q&A
        if (qaRaw) {
          try {
            const qa = JSON.parse(qaRaw);
            if (qa.qa_pairs?.length > 0) {
              parts.push("## Q&A\n");
              for (const pair of qa.qa_pairs) {
                parts.push(
                  `**Q:** ${pair.question}`,
                  `**A (${pair.responder}):** ${pair.answer}`,
                  ""
                );
              }
            }
          } catch {
            /* skip */
          }
        }

        // Decisions
        if (decisionsRaw) {
          try {
            const dec = JSON.parse(decisionsRaw);
            if (dec.decisions?.length > 0) {
              parts.push("## Decisions\n");
              for (const d of dec.decisions) {
                parts.push(
                  `- **${d.decision}** (${d.speaker})${d.quote ? ` — "${d.quote}"` : ""}`,
                  ""
                );
              }
            }
            if (dec.commitments?.length > 0) {
              parts.push("## Commitments\n");
              for (const c of dec.commitments) {
                parts.push(
                  `- **${c.commitment}** — ${c.owner} (${c.timeline})`,
                  ""
                );
              }
            }
          } catch {
            /* skip */
          }
        }

        return {
          content: [{ type: "text" as const, text: parts.join("\n") }],
        };
      }
    );

    // Tool 3: Get Telegram summary
    server.tool(
      "get_telegram_summary",
      "Get a specific Telegram monthly or weekly summary. " +
        "Specify channel (general or developer) and period (YYYY-MM for monthly, YYYY-WNN for weekly).",
      {
        channel: z
          .enum(["general", "developer"])
          .describe("Telegram channel"),
        period: z
          .string()
          .describe(
            "Time period: YYYY-MM for monthly summary, YYYY-WNN for weekly segment"
          ),
      },
      async ({ channel, period }) => {
        let filePath: string;
        if (/^\d{4}-W\d{2}/.test(period)) {
          // Weekly
          filePath = `telegram/${channel}/segments/${period}_summary.md`;
        } else {
          // Monthly
          filePath = `telegram/${channel}/summaries/${period}.md`;
        }

        const content = readDataFile(filePath);
        if (!content) {
          return {
            content: [
              {
                type: "text" as const,
                text: `No summary found for ${channel} ${period}. Use list_content to see available periods.`,
              },
            ],
          };
        }

        // Strip frontmatter
        let text = content;
        if (text.startsWith("---")) {
          const end = text.indexOf("---", 3);
          if (end !== -1) text = text.slice(end + 3).trim();
        }

        return {
          content: [{ type: "text" as const, text }],
        };
      }
    );

    // Tool 4: Get forum topic
    server.tool(
      "get_forum_topic",
      "Search for and retrieve an ErgoForum topic by keywords. " +
        "Returns the full forum post content with source URL.",
      {
        query: z.string().describe("Search keywords for the forum topic"),
      },
      async ({ query }) => {
        const results = await searchConversations(query, {
          source: "forum",
          limit: 3,
        });

        if (results.length === 0) {
          return {
            content: [
              {
                type: "text" as const,
                text: "No matching forum topics found.",
              },
            ],
          };
        }

        const formatted = results
          .map((r, i) => {
            const lines = [
              `### ${i + 1}. ${r.title}`,
              `**Date:** ${r.date || "unknown"}`,
            ];
            if (r.source_url) {
              lines.push(`**URL:** ${r.source_url}`);
            }
            lines.push("", r.text);
            return lines.join("\n");
          })
          .join("\n\n---\n\n");

        return {
          content: [{ type: "text" as const, text: formatted }],
        };
      }
    );

    // Tool 5: Timeline — what was discussed in a date range
    server.tool(
      "timeline",
      "Get a cross-source digest of what the Ergo community was discussing during a specific time period. " +
        "Returns content from videos, Telegram, forum, and blog for the given date range.",
      {
        start: z.string().describe("Start date (YYYY-MM-DD)"),
        end: z.string().describe("End date (YYYY-MM-DD)"),
        source: z
          .enum(["youtube", "telegram", "forum", "blog"])
          .optional()
          .describe("Optional: filter to a single source"),
      },
      async ({ start, end, source }) => {
        const items = await getTimeline(start, end, source);

        if (items.length === 0) {
          return {
            content: [
              {
                type: "text" as const,
                text: `No content found between ${start} and ${end}.`,
              },
            ],
          };
        }

        // Group by source
        const bySource: Record<string, typeof items> = {};
        for (const item of items) {
          const src = item.source;
          if (!bySource[src]) bySource[src] = [];
          bySource[src].push(item);
        }

        const parts: string[] = [
          `# Community Timeline: ${start} to ${end}`,
          `*${items.length} documents across ${Object.keys(bySource).length} source(s)*`,
          "",
        ];

        for (const [src, srcItems] of Object.entries(bySource)) {
          parts.push(`## ${sourceLabel(src)} (${srcItems.length})`);
          parts.push("");

          // Show up to 15 items per source with title + date
          const display = srcItems.slice(0, 15);
          for (const item of display) {
            const preview =
              item.text.length > 200
                ? item.text.slice(0, 200).replace(/\n/g, " ") + "..."
                : item.text.replace(/\n/g, " ");
            parts.push(`- **${item.date}** — ${item.title}`);
            parts.push(`  ${preview}`);
            if (item.source_url) {
              parts.push(`  Link: ${item.source_url}`);
            }
            parts.push("");
          }

          if (srcItems.length > 15) {
            parts.push(
              `  *...and ${srcItems.length - 15} more ${sourceLabel(src)} items*`
            );
            parts.push("");
          }
        }

        return {
          content: [{ type: "text" as const, text: parts.join("\n") }],
        };
      }
    );

    // Tool 6: List available content
    server.tool(
      "list_content",
      "Browse available content in the Ergo community knowledge base. " +
        "Filter by source type and/or year. Returns titles and dates.",
      {
        source: z
          .enum(["youtube", "telegram", "forum", "blog"])
          .optional()
          .describe("Filter by source type"),
        year: z
          .string()
          .optional()
          .describe("Filter by year (e.g., '2024')"),
        limit: z
          .number()
          .int()
          .min(1)
          .max(100)
          .default(25)
          .describe("Number of items to return (default 25)"),
      },
      async ({ source, year, limit }) => {
        const items = listContent(source, year);
        const display = items.slice(0, limit);

        if (display.length === 0) {
          return {
            content: [
              {
                type: "text" as const,
                text: "No content found matching those filters.",
              },
            ],
          };
        }

        // Count by source
        const counts: Record<string, number> = {};
        for (const item of items) {
          counts[item.source] = (counts[item.source] || 0) + 1;
        }

        const header = [
          `# Available Content${source ? ` (${sourceLabel(source)})` : ""}${year ? ` — ${year}` : ""}`,
          `*${items.length} total documents*`,
          "",
          "**By source:** " +
            Object.entries(counts)
              .map(([s, c]) => `${sourceLabel(s)}: ${c}`)
              .join(" | "),
          "",
        ];

        const rows = display.map(
          (item) =>
            `- **${item.date || "n/a"}** [${sourceLabel(item.source)}] ${item.title}`
        );

        if (items.length > limit) {
          rows.push(
            `\n*Showing ${limit} of ${items.length} — use source/year filters to narrow*`
          );
        }

        return {
          content: [
            { type: "text" as const, text: [...header, ...rows].join("\n") },
          ],
        };
      }
    );
  },
  {
    serverInfo: {
      name: "ergo-community",
      version: "1.0.0",
    },
  },
  {
    basePath: "/api",
  }
);

export { handler as GET, handler as POST, handler as DELETE };
