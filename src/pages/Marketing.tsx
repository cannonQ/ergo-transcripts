import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Megaphone,
  Quote,
  TrendingUp, 
  Copy, 
  Check, 
  Twitter, 
  MessageCircle,
  FileText,
  Sparkles,
  Target,
  Users,
  Zap
} from 'lucide-react';
import { mockDecisions, mockQA, mockStats } from '../data/mockData';

const marketingSnippets = [
  {
    id: 1,
    type: 'stat',
    title: 'Community Engagement',
    content: `${mockStats.total_calls}+ community calls with ${mockStats.total_hours}+ hours of discussions`,
    category: 'engagement'
  },
  {
    id: 2,
    type: 'stat',
    title: 'Knowledge Base',
    content: `${mockStats.total_qa}+ Q&A pairs answered by core developers`,
    category: 'education'
  },
  {
    id: 3,
    type: 'stat',
    title: 'Governance',
    content: `${mockStats.total_decisions}+ documented decisions and commitments`,
    category: 'governance'
  },
  {
    id: 4,
    type: 'quote',
    title: 'On eUTXO',
    content: 'eUTXO extends the UTXO model with data storage and scripts attached to each box, enabling complex smart contracts while maintaining the security and predictability of UTXO.',
    author: 'kushti',
    category: 'technical'
  },
  {
    id: 5,
    type: 'quote',
    title: 'On Security',
    content: 'Rosen Bridge V2 uses threshold signatures instead of traditional multisig, requiring k-of-n watchers to sign transactions. This provides security through redundancy while avoiding single points of failure.',
    author: 'armeanio',
    category: 'security'
  }
];

const tweetTemplates = [
  {
    id: 1,
    title: 'Community Stats',
    template: `🔶 @eraborplatform community in numbers:\n\n📹 ${mockStats.total_calls}+ calls\n❓ ${mockStats.total_qa}+ Q&As answered\n⚖️ ${mockStats.total_decisions}+ decisions documented\n\nTransparency in action. #Ergo #Blockchain`
  },
  {
    id: 2,
    title: 'Knowledge Base Promo',
    template: `Looking to learn about @ergoplatform?\n\nOur community knowledge base has:\n• ${mockStats.total_hours}+ hours of discussions\n• Expert answers from core devs\n• Full decision history\n\nAll searchable, all transparent. 🔍\n\n#Ergo #Crypto`
  },
  {
    id: 3,
    title: 'Governance Highlight',
    template: `How does @ergoplatform make decisions?\n\n✅ Open community calls\n✅ Documented commitments\n✅ Transparent reversals\n✅ Public Q&A sessions\n\nReal decentralization means real accountability.\n\n#Ergo #Governance`
  }
];

export default function Marketing() {
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'snippets' | 'tweets' | 'assets'>('snippets');

  const copyToClipboard = (text: string, id: number) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet><title>Marketing — Ergo Knowledge Base</title></Helmet>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold font-mono text-gradient mb-2">
          Marketing Hub
        </h1>
        <p className="text-ergo-muted font-mono">
          Ready-to-use content, stats, and quotes for promoting Ergo
        </p>
      </div>

      {/* Quick Stats Banner */}
      <div className="bg-gradient-to-r from-ergo-orange/20 to-term-cyan/20 border border-ergo-orange/30 rounded-lg p-6 mb-8">
        <h2 className="font-mono font-semibold text-lg mb-4 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-ergo-orange" />
          Quick Stats for Social Media
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <span className="text-3xl font-bold font-mono text-ergo-orange">{mockStats.total_calls}+</span>
            <span className="block text-sm text-ergo-muted">Community Calls</span>
          </div>
          <div className="text-center">
            <span className="text-3xl font-bold font-mono text-term-cyan">{mockStats.total_qa}+</span>
            <span className="block text-sm text-ergo-muted">Q&As Answered</span>
          </div>
          <div className="text-center">
            <span className="text-3xl font-bold font-mono text-term-green">{mockStats.total_decisions}+</span>
            <span className="block text-sm text-ergo-muted">Decisions Made</span>
          </div>
          <div className="text-center">
            <span className="text-3xl font-bold font-mono text-term-amber">{mockStats.total_hours}+</span>
            <span className="block text-sm text-ergo-muted">Hours of Content</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-8 border-b border-ergo-orange/20">
        <button
          onClick={() => setActiveTab('snippets')}
          className={`px-4 py-3 font-mono text-sm transition-all border-b-2 -mb-px ${
            activeTab === 'snippets'
              ? 'border-ergo-orange text-ergo-orange'
              : 'border-transparent text-ergo-muted hover:text-ergo-light'
          }`}
        >
          <FileText className="w-4 h-4 inline mr-2" />
          Content Snippets
        </button>
        <button
          onClick={() => setActiveTab('tweets')}
          className={`px-4 py-3 font-mono text-sm transition-all border-b-2 -mb-px ${
            activeTab === 'tweets'
              ? 'border-ergo-orange text-ergo-orange'
              : 'border-transparent text-ergo-muted hover:text-ergo-light'
          }`}
        >
          <Twitter className="w-4 h-4 inline mr-2" />
          Tweet Templates
        </button>
        <button
          onClick={() => setActiveTab('assets')}
          className={`px-4 py-3 font-mono text-sm transition-all border-b-2 -mb-px ${
            activeTab === 'assets'
              ? 'border-ergo-orange text-ergo-orange'
              : 'border-transparent text-ergo-muted hover:text-ergo-light'
          }`}
        >
          <Target className="w-4 h-4 inline mr-2" />
          Key Messages
        </button>
      </div>

      {/* Content Snippets */}
      {activeTab === 'snippets' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {marketingSnippets.map(snippet => (
            <div
              key={snippet.id}
              className="bg-ergo-dark border border-ergo-orange/20 rounded-lg p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className={`text-xs font-mono px-2 py-1 rounded ${
                    snippet.type === 'stat' ? 'bg-term-cyan/20 text-term-cyan' : 'bg-term-magenta/20 text-term-magenta'
                  }`}>
                    {snippet.type.toUpperCase()}
                  </span>
                  <h3 className="font-mono font-semibold mt-2">{snippet.title}</h3>
                </div>
                <button
                  onClick={() => copyToClipboard(snippet.content, snippet.id)}
                  className="p-2 hover:bg-ergo-orange/20 rounded transition-colors"
                >
                  {copiedId === snippet.id ? (
                    <Check className="w-4 h-4 text-term-green" />
                  ) : (
                    <Copy className="w-4 h-4 text-ergo-muted" />
                  )}
                </button>
              </div>
              <p className="text-ergo-light/80 mb-3">{snippet.content}</p>
              {snippet.author && (
                <p className="text-sm text-ergo-muted font-mono">— {snippet.author}</p>
              )}
              <span className="inline-block mt-3 text-xs font-mono text-ergo-orange bg-ergo-orange/10 px-2 py-1 rounded">
                #{snippet.category}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Tweet Templates */}
      {activeTab === 'tweets' && (
        <div className="space-y-6">
          {tweetTemplates.map(tweet => (
            <div
              key={tweet.id}
              className="bg-ergo-dark border border-ergo-orange/20 rounded-lg p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-mono font-semibold flex items-center gap-2">
                  <Twitter className="w-4 h-4 text-[#1DA1F2]" />
                  {tweet.title}
                </h3>
                <button
                  onClick={() => copyToClipboard(tweet.template, tweet.id + 100)}
                  className="flex items-center gap-2 px-3 py-1 bg-ergo-orange/20 hover:bg-ergo-orange/30 rounded font-mono text-sm transition-colors"
                >
                  {copiedId === tweet.id + 100 ? (
                    <>
                      <Check className="w-4 h-4 text-term-green" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy
                    </>
                  )}
                </button>
              </div>
              <pre className="bg-ergo-darker p-4 rounded font-mono text-sm whitespace-pre-wrap text-ergo-light/90">
                {tweet.template}
              </pre>
              <p className="mt-3 text-xs text-ergo-muted font-mono">
                {tweet.template.length}/280 characters
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Key Messages */}
      {activeTab === 'assets' && (
        <div className="space-y-6">
          <div className="bg-ergo-dark border border-ergo-orange/20 rounded-lg p-6">
            <h3 className="font-mono font-semibold text-lg mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-ergo-orange" />
              Core Value Propositions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-ergo-darker p-4 rounded">
                <Zap className="w-8 h-8 text-term-amber mb-3" />
                <h4 className="font-mono font-semibold mb-2">Transparency</h4>
                <p className="text-sm text-ergo-light/70">
                  Every decision, discussion, and commitment is documented and searchable.
                </p>
              </div>
              <div className="bg-ergo-darker p-4 rounded">
                <Users className="w-8 h-8 text-term-cyan mb-3" />
                <h4 className="font-mono font-semibold mb-2">Community-Driven</h4>
                <p className="text-sm text-ergo-light/70">
                  {mockStats.total_calls}+ calls with direct community participation and Q&A.
                </p>
              </div>
              <div className="bg-ergo-darker p-4 rounded">
                <TrendingUp className="w-8 h-8 text-term-green mb-3" />
                <h4 className="font-mono font-semibold mb-2">Institutional Memory</h4>
                <p className="text-sm text-ergo-light/70">
                  Complete history of project evolution, decisions, and rationale.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-ergo-dark border border-ergo-orange/20 rounded-lg p-6">
            <h3 className="font-mono font-semibold text-lg mb-4 flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-ergo-orange" />
              Talking Points
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-ergo-orange font-mono">→</span>
                <span className="text-ergo-light/80">
                  Ergo maintains one of the most comprehensive public records of any blockchain project
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-ergo-orange font-mono">→</span>
                <span className="text-ergo-light/80">
                  Core developers regularly engage directly with the community in open calls
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-ergo-orange font-mono">→</span>
                <span className="text-ergo-light/80">
                  Decision reversals are documented with full context, showing intellectual honesty
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-ergo-orange font-mono">→</span>
                <span className="text-ergo-light/80">
                  New community members can quickly understand project history and rationale
                </span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
