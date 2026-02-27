import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Calendar, Hash, Loader2, MessageSquare, Tag, Users } from 'lucide-react';
import { useData } from '../contexts/DataContext';
import {
  fetchTelegramSummary,
  fetchTelegramTopicsFile,
} from '../services/dataService';
import type {
  TelegramChannel,
  TelegramWeekEntry,
  TelegramMonthEntry,
  TelegramTopicItem,
} from '../types';

function isMonthlyPeriod(period: string): boolean {
  // Monthly: "2024-01"  Weekly: "2024-W01" or "2024-W31a"
  return /^\d{4}-\d{2}$/.test(period);
}

function monthLabel(period: string): string {
  const [year, month] = period.split('-');
  const date = new Date(parseInt(year), parseInt(month) - 1, 1);
  return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
}

function weekLabel(period: string): string {
  const m = period.match(/^(\d{4})-W(\d+)([a-z]?)$/);
  if (!m) return period;
  const part = m[3] ? ` (part ${m[3].toUpperCase()})` : '';
  return `Week ${parseInt(m[2])} · ${m[1]}${part}`;
}

const CATEGORY_COLORS: Record<string, string> = {
  technical: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  governance: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  defi: 'bg-green-500/20 text-green-400 border-green-500/30',
  bridges: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  mining: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  wallet: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
  nft: 'bg-pink-500/20 text-pink-400 border-pink-500/30',
  marketing: 'bg-red-500/20 text-red-400 border-red-500/30',
  ecosystem: 'bg-teal-500/20 text-teal-400 border-teal-500/30',
  community: 'bg-gray-500/20 text-gray-400 border-gray-500/30',
};

function CategoryBadge({ category }: { category: string }) {
  const cls = CATEGORY_COLORS[category] ?? 'bg-ergo-orange/20 text-ergo-orange border-ergo-orange/30';
  return (
    <span className={`inline-block text-xs font-mono px-2 py-0.5 rounded border ${cls}`}>
      {category}
    </span>
  );
}

function TopicCard({ topic }: { topic: TelegramTopicItem }) {
  return (
    <div className="bg-ergo-dark border border-ergo-orange/20 rounded-lg p-4">
      <div className="flex items-start justify-between gap-2 mb-2">
        <h4 className="font-mono text-sm font-semibold text-ergo-light leading-snug">
          {topic.title}
        </h4>
        <div className="flex-shrink-0">
          <CategoryBadge category={topic.category} />
          {topic.significance === 'major' && (
            <span className="ml-1 inline-block text-xs font-mono px-2 py-0.5 rounded border bg-ergo-orange/20 text-ergo-orange border-ergo-orange/40">
              major
            </span>
          )}
        </div>
      </div>
      {topic.key_terms.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-2">
          {topic.key_terms.slice(0, 6).map(term => (
            <span key={term} className="text-xs font-mono bg-ergo-darker px-2 py-0.5 rounded text-ergo-muted">
              {term}
            </span>
          ))}
        </div>
      )}
      {topic.participants.length > 0 && (
        <div className="flex items-center gap-1 text-xs font-mono text-ergo-muted">
          <Users className="w-3 h-3" />
          {topic.participants.slice(0, 5).join(', ')}
        </div>
      )}
    </div>
  );
}

export default function TelegramDetail() {
  const { channel, period } = useParams<{ channel: string; period: string }>();
  const { loadTelegramIndex } = useData();

  const isMonthly = isMonthlyPeriod(period ?? '');
  const [activeTab, setActiveTab] = useState<'summary' | 'topics'>('summary');

  const [summary, setSummary] = useState<string | null>(null);
  const [topics, setTopics] = useState<TelegramTopicItem[] | null>(null);
  const [weekEntry, setWeekEntry] = useState<TelegramWeekEntry | null>(null);
  const [monthEntry, setMonthEntry] = useState<TelegramMonthEntry | null>(null);
  const [isLoadingSummary, setIsLoadingSummary] = useState(true);
  const [isLoadingTopics, setIsLoadingTopics] = useState(false);

  // Reset per-period state when navigating to a different period
  useEffect(() => {
    setTopics(null);
    setWeekEntry(null);
    setMonthEntry(null);
    setActiveTab('summary');
  }, [period]);

  const ch = (channel ?? 'general') as TelegramChannel;

  // Load nav index to get entry metadata + links
  useEffect(() => {
    if (!period) return;
    loadTelegramIndex().then(idx => {
      const chData = idx[ch];
      if (!chData) return;
      if (isMonthly) {
        const found = chData.months.find(m => m.period === period);
        setMonthEntry(found ?? null);
      } else {
        const found = chData.weeks.find(w => w.period === period);
        setWeekEntry(found ?? null);
      }
    }).catch(console.error);
  }, [ch, period, isMonthly]);

  // Load summary markdown
  useEffect(() => {
    if (!period) return;
    const summaryFile = isMonthly
      ? `${ch}/summaries/${period}.md`
      : `${ch}/segments/${period}_summary.md`;

    setIsLoadingSummary(true);
    fetchTelegramSummary(summaryFile)
      .then(text => {
        // Strip YAML frontmatter if present
        let content = text;
        if (content.startsWith('---')) {
          const end = content.indexOf('---', 3);
          if (end !== -1) content = content.slice(end + 3).trimStart();
        }
        setSummary(content);
      })
      .catch(() => setSummary('Summary not available.'))
      .finally(() => setIsLoadingSummary(false));
  }, [ch, period, isMonthly]);

  // Load topics when Topics tab is selected (weekly only)
  useEffect(() => {
    if (activeTab !== 'topics' || isMonthly || !period || !weekEntry?.topics_file) return;
    if (topics !== null) return; // already loaded

    setIsLoadingTopics(true);
    fetchTelegramTopicsFile(weekEntry.topics_file)
      .then(data => setTopics(data.topics))
      .catch(() => setTopics([]))
      .finally(() => setIsLoadingTopics(false));
  }, [activeTab, isMonthly, period, weekEntry, topics]);

  const title = isMonthly
    ? `${monthLabel(period ?? '')} — ${ch === 'general' ? 'General' : 'Developer'} Chat`
    : `${weekLabel(period ?? '')} — ${ch === 'general' ? 'General' : 'Developer'} Chat`;

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <Helmet><title>{title} — Ergo Knowledge Base</title></Helmet>

      {/* Back link */}
      <Link
        to="/telegram"
        className="inline-flex items-center gap-2 font-mono text-sm text-ergo-muted hover:text-ergo-orange transition-colors mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Chat Archive
      </Link>

      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1">
          <MessageSquare className="w-5 h-5 text-ergo-orange" />
          <span className="font-mono text-xs text-ergo-orange/70 uppercase tracking-wider">
            {ch === 'general' ? 'General Chat' : 'Developer Chat'} ·{' '}
            {isMonthly ? 'Monthly Summary' : 'Weekly Segment'}
          </span>
        </div>
        <h1 className="text-3xl font-bold font-mono text-gradient">
          {isMonthly ? monthLabel(period ?? '') : weekLabel(period ?? '')}
        </h1>

        {/* Stats row */}
        <div className="flex flex-wrap items-center gap-4 mt-3 text-sm font-mono text-ergo-muted">
          {isMonthly && monthEntry && (
            <>
              <span className="flex items-center gap-1">
                <Hash className="w-3 h-3" />
                {monthEntry.total_messages.toLocaleString()} messages
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {monthEntry.weeks.length} weeks
              </span>
            </>
          )}
          {!isMonthly && weekEntry && (
            <>
              <span className="flex items-center gap-1">
                <Hash className="w-3 h-3" />
                {weekEntry.message_count.toLocaleString()} messages
              </span>
              <Link
                to={`/telegram/${ch}/${weekEntry.month}`}
                className="flex items-center gap-1 hover:text-ergo-orange transition-colors"
              >
                <Calendar className="w-3 h-3" />
                Part of {monthLabel(weekEntry.month)}
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Sibling parts (for split weeks) */}
      {!isMonthly && weekEntry && weekEntry.sibling_parts.length > 0 && (
        <div className="mb-4 flex items-center gap-2 text-sm font-mono">
          <span className="text-ergo-muted">Other parts:</span>
          {weekEntry.sibling_parts.map(sibling => (
            <Link
              key={sibling}
              to={`/telegram/${ch}/${sibling}`}
              className="px-3 py-1 bg-ergo-dark border border-ergo-orange/30 rounded hover:border-ergo-orange transition-colors"
            >
              {sibling}
            </Link>
          ))}
        </div>
      )}

      {/* Monthly: constituent week links */}
      {isMonthly && monthEntry && monthEntry.weeks.length > 0 && (
        <div className="mb-6 bg-ergo-dark border border-ergo-orange/20 rounded-lg p-4">
          <h3 className="font-mono text-sm text-ergo-orange mb-3 flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Weekly Segments
          </h3>
          <div className="flex flex-wrap gap-2">
            {monthEntry.weeks.map(week => (
              <Link
                key={week}
                to={`/telegram/${ch}/${week}`}
                className="font-mono text-sm px-3 py-1 bg-ergo-darker border border-ergo-orange/20 rounded hover:border-ergo-orange/50 transition-colors"
              >
                {week}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Tabs (weekly only shows Topics tab) */}
      <div className="flex gap-1 mb-6 border-b border-ergo-orange/20">
        <button
          onClick={() => setActiveTab('summary')}
          className={`px-4 py-2 font-mono text-sm transition-colors border-b-2 -mb-px ${
            activeTab === 'summary'
              ? 'border-ergo-orange text-ergo-orange'
              : 'border-transparent text-ergo-muted hover:text-ergo-light'
          }`}
        >
          Summary
        </button>
        {!isMonthly && weekEntry?.topics_file && (
          <button
            onClick={() => setActiveTab('topics')}
            className={`px-4 py-2 font-mono text-sm transition-colors border-b-2 -mb-px flex items-center gap-1 ${
              activeTab === 'topics'
                ? 'border-ergo-orange text-ergo-orange'
                : 'border-transparent text-ergo-muted hover:text-ergo-light'
            }`}
          >
            <Tag className="w-3 h-3" />
            Topics
          </button>
        )}
      </div>

      {/* Tab Content */}
      {activeTab === 'summary' && (
        <div className="bg-ergo-dark border border-ergo-orange/20 rounded-lg p-6">
          {isLoadingSummary ? (
            <div className="flex items-center gap-2 text-ergo-muted font-mono text-sm">
              <Loader2 className="w-4 h-4 animate-spin" />
              Loading summary...
            </div>
          ) : (
            <div className="text-ergo-light/90 leading-relaxed whitespace-pre-wrap font-sans text-sm">
              {summary}
            </div>
          )}
        </div>
      )}

      {activeTab === 'topics' && !isMonthly && (
        <div>
          {isLoadingTopics ? (
            <div className="flex items-center gap-2 text-ergo-muted font-mono text-sm">
              <Loader2 className="w-4 h-4 animate-spin" />
              Loading topics...
            </div>
          ) : topics && topics.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {topics.map((topic, i) => (
                <TopicCard key={i} topic={topic} />
              ))}
            </div>
          ) : (
            <p className="font-mono text-sm text-ergo-muted">No topics data available for this week.</p>
          )}
        </div>
      )}
    </div>
  );
}
