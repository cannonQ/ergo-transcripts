import { Helmet } from 'react-helmet-async';
import { Terminal, Zap, Search, Calendar, BookOpen, MessageSquare, Video, FileText, Copy, Check } from 'lucide-react';
import { useState } from 'react';

const MCP_URL = 'https://ergo-transcripts.vercel.app/api/mcp';

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
      className="absolute top-2 right-2 p-1.5 rounded bg-ergo-darker/80 hover:bg-ergo-orange/20 transition-colors"
      title="Copy"
    >
      {copied ? <Check size={14} className="text-ergo-green" /> : <Copy size={14} className="text-ergo-muted" />}
    </button>
  );
}

function CodeBlock({ children, copyText }: { children: string; copyText?: string }) {
  return (
    <div className="relative group">
      <pre className="bg-ergo-darker border border-ergo-orange/10 rounded-lg p-4 overflow-x-auto text-sm font-mono text-term-green">
        {children}
      </pre>
      <CopyButton text={copyText ?? children} />
    </div>
  );
}

const tools = [
  { name: 'search_conversations', icon: Search, desc: 'Semantic vector search across all community content — video calls, Telegram chats, forum posts, blog articles' },
  { name: 'get_video', icon: Video, desc: 'Retrieve full video call summary, Q&A pairs, decisions, and commitments by title or date' },
  { name: 'get_telegram_summary', icon: MessageSquare, desc: 'Get Telegram weekly or monthly summaries from General and Developer channels' },
  { name: 'get_forum_topic', icon: FileText, desc: 'Search and retrieve ErgoForum topics with full post content' },
  { name: 'timeline', icon: Calendar, desc: 'Cross-source digest of community discussions during a date range' },
  { name: 'list_content', icon: BookOpen, desc: 'Browse available content filtered by source type and/or year' },
];

const clients = [
  {
    name: 'Claude.ai (Web)',
    steps: [
      <>Go to <a href="https://claude.ai/customize/connectors" target="_blank" rel="noopener noreferrer" className="text-ergo-orange hover:text-ergo-green transition-colors underline">claude.ai/customize/connectors</a></>,
      <>Click <span className="text-ergo-orange font-bold">+</span> and set the URL to the MCP endpoint below</>,
      <>Click through the auth prompt (no-op OAuth — public data, no credentials needed)</>,
    ],
  },
  {
    name: 'Claude Code',
    config: { file: '~/.claude/mcp.json', json: { mcpServers: { 'ergo-community': { url: MCP_URL } } } },
  },
  {
    name: 'Gemini CLI',
    note: 'Free tier: 1,000 requests/day with a Google account.',
    config: { file: '~/.gemini/settings.json', json: { mcpServers: { 'ergo-community': { url: MCP_URL } } } },
  },
  {
    name: 'OpenAI Codex CLI',
    config: { file: '~/.codex/mcp.json', json: { mcpServers: { 'ergo-community': { url: MCP_URL } } } },
  },
  {
    name: 'VS Code / Copilot',
    config: { file: '.vscode/mcp.json', json: { servers: { 'ergo-community': { url: MCP_URL } } } },
  },
  {
    name: 'Cursor',
    steps: [
      <>Go to <span className="text-ergo-orange">Settings &gt; MCP</span> and add the server URL</>,
    ],
  },
  {
    name: 'Windsurf',
    config: { file: '~/.windsurf/mcp.json', json: { mcpServers: { 'ergo-community': { url: MCP_URL } } } },
  },
  {
    name: 'Cline',
    steps: [
      <>Open Cline settings and add a remote MCP server with the URL below</>,
    ],
  },
];

export default function MCP() {
  return (
    <div className="relative">
      <Helmet>
        <title>MCP Server — Ergo Community Knowledge</title>
        <meta name="description" content="Connect your AI assistant to Ergo community knowledge — video calls, Telegram chats, forum posts, and blog articles via MCP." />
      </Helmet>

      <div className="absolute inset-0 grid-bg opacity-5 pointer-events-none"></div>
      <div className="scan-line"></div>

      {/* Hero */}
      <section className="container mx-auto px-4 pt-16 pb-8">
        <div className="flex items-center gap-3 mb-4">
          <Terminal className="text-ergo-orange" size={36} />
          <h1 className="text-4xl lg:text-5xl font-bold font-mono text-gradient">
            MCP Server
          </h1>
        </div>
        <p className="text-lg text-ergo-muted font-mono max-w-3xl">
          Connect any AI assistant to 7+ years of Ergo community knowledge — 138 video call transcripts,
          153 months of Telegram discussions, 677 forum posts, and 394 blog articles.
        </p>
        <p className="text-sm text-ergo-muted/70 font-mono mt-2">
          Works with Claude, Gemini, Codex, Cursor, VS Code, Windsurf, Cline, and any MCP-compatible client.
        </p>
      </section>

      {/* MCP URL */}
      <section className="container mx-auto px-4 pb-8">
        <div className="bg-ergo-dark border border-ergo-orange/30 rounded-lg p-6">
          <div className="flex items-center gap-2 mb-3">
            <Zap className="text-ergo-orange" size={18} />
            <span className="text-sm font-mono text-ergo-orange uppercase tracking-wider">Endpoint</span>
          </div>
          <div className="relative">
            <code className="block bg-ergo-darker border border-ergo-orange/10 rounded-lg p-4 font-mono text-term-green text-lg break-all">
              {MCP_URL}
            </code>
            <CopyButton text={MCP_URL} />
          </div>
        </div>
      </section>

      {/* Setup Instructions */}
      <section className="container mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold font-mono text-ergo-orange mb-6">Setup</h2>
        <div className="space-y-4">
          {clients.map((client) => (
            <details
              key={client.name}
              className="bg-ergo-dark border border-ergo-orange/20 rounded-lg overflow-hidden group"
            >
              <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-ergo-orange/5 transition-colors">
                <span className="font-mono font-bold text-ergo-light">{client.name}</span>
                <span className="text-ergo-muted group-open:rotate-90 transition-transform">▶</span>
              </summary>
              <div className="px-4 pb-4 space-y-3">
                {client.steps && (
                  <ol className="list-decimal list-inside space-y-1 text-sm font-mono text-ergo-light/80">
                    {client.steps.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ol>
                )}
                {client.config && (
                  <>
                    <p className="text-sm font-mono text-ergo-muted">
                      Edit <code className="text-ergo-orange bg-ergo-darker px-1.5 py-0.5 rounded">{client.config.file}</code>:
                    </p>
                    <CodeBlock copyText={JSON.stringify(client.config.json, null, 2)}>
                      {JSON.stringify(client.config.json, null, 2)}
                    </CodeBlock>
                  </>
                )}
                {client.note && (
                  <p className="text-xs font-mono text-ergo-muted/70">{client.note}</p>
                )}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Available Tools */}
      <section className="container mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold font-mono text-ergo-orange mb-6">Available Tools</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="bg-ergo-dark border border-ergo-orange/20 rounded-lg p-5 hover:border-ergo-orange/50 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-2">
                <tool.icon size={16} className="text-ergo-orange" />
                <span className="font-mono font-bold text-term-green text-sm">{tool.name}</span>
              </div>
              <p className="text-sm text-ergo-muted font-mono">{tool.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Example Queries */}
      <section className="container mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold font-mono text-ergo-orange mb-6">Example Queries</h2>
        <div className="bg-ergo-dark border border-ergo-orange/20 rounded-lg p-6 space-y-4">
          {[
            'What has been discussed about AVL trees and games?',
            'Summarize Ergo\'s storage rent discussions across all sources',
            'What decisions were made in the last 3 months about the node?',
            'Find forum posts about Babel fees',
            'What did kushti say about soft forks in 2024?',
          ].map((q, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="text-ergo-orange font-mono text-sm mt-0.5">{'>'}</span>
              <span className="font-mono text-sm text-ergo-light/80">{q}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Data Sources */}
      <section className="container mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold font-mono text-ergo-orange mb-6">Data Sources</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Video Calls', count: '138', range: '2019–2026', icon: Video },
            { label: 'Telegram', count: '153 months', range: '2017–2026', icon: MessageSquare },
            { label: 'Forum Posts', count: '677', range: '2019–2025', icon: FileText },
            { label: 'Blog Articles', count: '394', range: '2019–2025', icon: BookOpen },
          ].map((src) => (
            <div key={src.label} className="bg-ergo-dark border border-ergo-orange/20 rounded-lg p-4 text-center">
              <src.icon size={24} className="text-ergo-orange mx-auto mb-2" />
              <div className="font-mono font-bold text-ergo-light text-lg">{src.count}</div>
              <div className="font-mono text-ergo-orange text-sm">{src.label}</div>
              <div className="font-mono text-ergo-muted text-xs mt-1">{src.range}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Companion Server */}
      <section className="container mx-auto px-4 pb-16">
        <div className="bg-ergo-dark border border-ergo-green/20 rounded-lg p-6">
          <h3 className="font-mono font-bold text-ergo-green mb-2">Companion: Ergo Developer Knowledge Base</h3>
          <p className="text-sm font-mono text-ergo-muted mb-3">
            For curated developer docs — ErgoScript reference, contract analyses, 65 ecosystem projects,
            EIPs, and security audit tools — add the EKB MCP server alongside this one.
          </p>
          <CodeBlock>https://ergo-knowledge-base.vercel.app/api/mcp</CodeBlock>
        </div>
      </section>

      {/* Footer note */}
      <section className="container mx-auto px-4 pb-8">
        <p className="text-xs font-mono text-ergo-muted/50 text-center">
          Source: <a href="https://github.com/cannonQ/ergo-transcripts" className="text-ergo-orange/50 hover:text-ergo-orange transition-colors">cannonQ/ergo-transcripts</a> · Licensed under{' '}
          <a href="https://www.gnu.org/licenses/agpl-3.0.html" className="text-ergo-orange/50 hover:text-ergo-orange transition-colors">AGPL-3.0</a> ·
          9,086 embedded chunks · Powered by OpenAI embeddings + MCP Protocol
        </p>
      </section>
    </div>
  );
}
