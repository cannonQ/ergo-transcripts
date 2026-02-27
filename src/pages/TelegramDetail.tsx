import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Calendar, Hash, Loader2, MessageSquare, Tag, Users } from 'lucide-react';
import { useData } from '../contexts/DataContext';
import CorrectionButton from '../components/CorrectionButton';
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

function shortWeekLabel(period: string): string {
  const m = period.match(/^(\d{4})-W(\d+)([a-z]?)$/);
  if (!m) return period;
  return `W${parseInt(m[2])}${m[3] ? m[3].toUpperCase() : ''}`;
}

const CATEGORY_COLORS: Record<string, string> = {
  technical:  'bg-blue-500/20 text-blue-400 border-blue-500/30',
  governance: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  defi:       'bg-green-500/20 text-green-400 border-green-500/30',
  bridges:    'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  mining:     'bg-orange-500/20 text-orange-400 border-orange-500/30',
  wallet:     'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
  nft:        'bg-pink-500/20 text-pink-400 border-pink-500/30',
  marketing:  'bg-red-500/20 text-red-400 border-red-500/30',
  ecosystem:  'bg-teal-500/20 text-teal-400 border-teal-500/30',
  community:  'bg-gray-500/20 text-gray-400 border-gray-500/30',
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
  const [activeTab, setActiveTab] = useState<string>('summary');

  const [summary, setSummary] = useState<string | null>(null);
  const [topics, setTopics] = useState<TelegramTopicItem[] | null>(null);
  const [weekEntry, setWeekEntry] = useState<TelegramWeekEntry | null>(null);
  const [monthEntry, setMonthEntry] = useState<TelegramMonthEntry | null>(null);
  const [isLoadingSummary, setIsLoadingSummary] = useState(true);
  const [isLoadingTopics, setIsLoadingTopics] = useState(false);

  // Cache for lazy-loaded week tab summaries
  const [weekTabSummaries, setWeekTabSummaries] = useState<Record<string, string>>({});
  const [weekTabLoading, setWeekTabLoading] = useState<string | null>(null);

  // Reset per-period state when navigating to a different period
  useEffect(() => {
    setTopics(null);
    setWeekEntry(null);
    setMonthEntry(null);
    setActiveTab('summary');
    setWeekTabSummaries({});
    setWeekTabLoading(null);
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

  // Load monthly summary markdown
  useEffect(() => {
    if (!period) return;
    const summaryFile = isMonthly
      ? `${ch}/summaries/${period}.md`
      : `${ch}/segments/${period}_summary.md`;

    setIsLoadingSummary(true);
    fetchTelegramSummary(summaryFile)
      .then(text => {
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

  // Load weekly topics when Topics tab selected
  useEffect(() => {
    if (activeTab !== 'topics' || isMonthly || !period || !weekEntry?.topics_file) return;
    if (topics !== null) return;

    setIsLoadingTopics(true);
    fetchTelegramTopicsFile(weekEntry.topics_file)
      .then(data => setTopics(data.topics))
      .catch(() => setTopics([]))
      .finally(() => setIsLoadingTopics(false));
  }, [activeTab, isMonthly, period, weekEntry, topics]);

  // Lazy-load week tab summaries for monthly pages
  useEffect(() => {
    if (!isMonthly || !activeTab.match(/^\d{4}-W/)) return;
    if (weekTabSummaries[activeTab] !== undefined) return;
    if (weekTabLoading === activeTab) return;

    setWeekTabLoading(activeTab);
    fetchTelegramSummary(`${ch}/segments/${activeTab}_summary.md`)
      .then(text => {
        let content = text;
        if (content.startsWith('---')) {
          const end = content.indexOf('---', 3);
          if (end !== -1) content = content.slice(end + 3).trimStart();
        }
        setWeekTabSummaries(prev => ({ ...prev, [activeTab]: content }));
      })
      .catch(() => setWeekTabSummaries(prev => ({ ...prev, [activeTab]: 'Summary not available.' })))
      .finally(() => setWeekTabLoading(null));
  }, [activeTab, isMonthly, ch, weekTabSummaries, weekTabLoading]);

  const title = isMonthly
    ? `${monthLabel(period ?? '')} — ${ch === 'general' ? 'General' : 'Developer'} Chat`
    : `${weekLabel(period ?? '')} — ${ch === 'general' ? 'General' : 'Developer'} Chat`;

  const correctionTitle = `${ch === 'general' ? 'General' : 'Developer'} Chat · ${period ?? ''}`;

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
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
                {monthEntry.weeks.length} week{monthEntry.weeks.length !== 1 ? 's' : ''}
              </span>
            </>
          )}
          {!isMonthly && weekEntry && (
            <span className="flex items-center gap-1">
              <Hash className="w-3 h-3" />
              {weekEntry.message_count.toLocaleString()} messages
            </span>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-6 border-b border-ergo-orange/20 overflow-x-auto">
        <button
          onClick={() => setActiveTab('summary')}
          className={`px-4 py-2 font-mono text-sm transition-colors border-b-2 -mb-px whitespace-nowrap ${
            activeTab === 'summary'
              ? 'border-ergo-orange text-ergo-orange'
              : 'border-transparent text-ergo-muted hover:text-ergo-light'
          }`}
        >
          Summary
        </button>

        {/* Weekly: Topics tab */}
        {!isMonthly && weekEntry?.topics_file && (
          <button
            onClick={() => setActiveTab('topics')}
            className={`px-4 py-2 font-mono text-sm transition-colors border-b-2 -mb-px flex items-center gap-1 whitespace-nowrap ${
              activeTab === 'topics'
                ? 'border-ergo-orange text-ergo-orange'
                : 'border-transparent text-ergo-muted hover:text-ergo-light'
            }`}
          >
            <Tag className="w-3 h-3" />
            Topics
          </button>
        )}

        {/* Monthly: one tab per constituent week */}
        {isMonthly && monthEntry?.weeks.map(week => (
          <button
            key={week}
            onClick={() => setActiveTab(week)}
            className={`px-4 py-2 font-mono text-sm transition-colors border-b-2 -mb-px whitespace-nowrap ${
              activeTab === week
                ? 'border-purple-400 text-purple-300'
                : 'border-transparent text-ergo-muted hover:text-ergo-light'
            }`}
          >
            {shortWeekLabel(week)}
          </button>
        ))}
      </div>

      {/* Main content + sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-8">

        {/* Left: tab content */}
        <div>
          {/* Summary tab */}
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

          {/* Topics tab (weekly only) */}
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

          {/* Week tabs (monthly only) */}
          {isMonthly && activeTab.match(/^\d{4}-W/) && (
            <div className="bg-ergo-dark border border-purple-500/20 rounded-lg p-6">
              <div className="font-mono text-xs text-purple-400/70 uppercase tracking-wider mb-4">
                {weekLabel(activeTab)}
              </div>
              {weekTabLoading === activeTab ? (
                <div className="flex items-center gap-2 text-ergo-muted font-mono text-sm">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Loading...
                </div>
              ) : (
                <div className="text-ergo-light/90 leading-relaxed whitespace-pre-wrap font-sans text-sm">
                  {weekTabSummaries[activeTab] ?? ''}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right: sidebar */}
        <div className="space-y-4">
          {/* Weekly: parent month + sibling parts */}
          {!isMonthly && weekEntry && (
            <div className="bg-ergo-dark border border-ergo-orange/20 rounded-lg p-4">
              <h3 className="font-mono text-xs text-ergo-orange uppercase tracking-wider mb-3">Part of</h3>
              <Link
                to={`/telegram/${ch}/${weekEntry.month}`}
                className="font-mono text-sm text-ergo-light hover:text-ergo-orange transition-colors"
              >
                {monthLabel(weekEntry.month)}
              </Link>
              {weekEntry.sibling_parts.length > 0 && (
                <div className="mt-3">
                  <h3 className="font-mono text-xs text-ergo-orange uppercase tracking-wider mb-2">Other parts</h3>
                  <div className="flex flex-wrap gap-2">
                    {weekEntry.sibling_parts.map(sibling => (
                      <Link
                        key={sibling}
                        to={`/telegram/${ch}/${sibling}`}
                        className="font-mono text-xs px-2 py-1 bg-ergo-darker border border-ergo-orange/30 rounded hover:border-ergo-orange transition-colors"
                      >
                        {shortWeekLabel(sibling)}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Community */}
          <div className="bg-ergo-dark border border-term-green/20 rounded-lg p-4">
            <h3 className="font-mono text-sm font-semibold text-term-green mb-2">Community</h3>
            <p className="text-xs text-ergo-muted mb-3">Spot something wrong? Help us improve.</p>
            <CorrectionButton pageType="Chat" pageTitle={correctionTitle} />
          </div>
        </div>
      </div>
    </div>
  );
}
