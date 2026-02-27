import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MessageSquare, Loader2, Calendar, Hash } from 'lucide-react';
import { useData } from '../contexts/DataContext';
import type { TelegramChannel, TelegramWeekEntry, TelegramMonthEntry } from '../types';

type ViewMode = 'monthly' | 'weekly';

function monthLabel(period: string): string {
  // "2024-01" → "January 2024"
  const [year, month] = period.split('-');
  const date = new Date(parseInt(year), parseInt(month) - 1, 1);
  return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
}

function weekLabel(period: string): string {
  // "2024-W01" → "Week 1 · 2024"
  const m = period.match(/^(\d{4})-W(\d+)/);
  if (!m) return period;
  return `Week ${parseInt(m[2])} · ${m[1]}`;
}

interface MonthCardProps {
  entry: TelegramMonthEntry;
  channel: TelegramChannel;
}
function MonthCard({ entry, channel }: MonthCardProps) {
  return (
    <Link
      to={`/telegram/${channel}/${entry.period}`}
      className="block bg-ergo-dark border border-ergo-orange/20 rounded-lg p-5 hover:border-ergo-orange/50 transition-colors"
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <span className="font-mono text-xs text-ergo-orange/60 uppercase tracking-wider">
            {channel === 'general' ? 'General' : 'Developer'} · Monthly
          </span>
          <h3 className="font-mono font-semibold text-ergo-light mt-1">
            {monthLabel(entry.period)}
          </h3>
        </div>
        <span className="font-mono text-xs text-ergo-muted">
          {entry.period}
        </span>
      </div>
      <div className="flex items-center gap-4 text-sm font-mono text-ergo-muted">
        <span className="flex items-center gap-1">
          <Hash className="w-3 h-3" />
          {entry.total_messages.toLocaleString()} msgs
        </span>
        <span className="flex items-center gap-1">
          <Calendar className="w-3 h-3" />
          {entry.weeks.length} week{entry.weeks.length !== 1 ? 's' : ''}
        </span>
      </div>
    </Link>
  );
}

interface WeekCardProps {
  entry: TelegramWeekEntry;
  channel: TelegramChannel;
}
function WeekCard({ entry, channel }: WeekCardProps) {
  return (
    <Link
      to={`/telegram/${channel}/${entry.period}`}
      className="block bg-ergo-dark border border-ergo-orange/20 rounded-lg p-5 hover:border-ergo-orange/50 transition-colors"
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <span className="font-mono text-xs text-ergo-orange/60 uppercase tracking-wider">
            {channel === 'general' ? 'General' : 'Developer'} · Weekly
          </span>
          <h3 className="font-mono font-semibold text-ergo-light mt-1">
            {weekLabel(entry.period)}
          </h3>
        </div>
        <span className="font-mono text-xs text-ergo-muted">
          {entry.period}
        </span>
      </div>
      {entry.top_topics.length > 0 && (
        <ul className="mb-3 space-y-1">
          {entry.top_topics.map((topic, i) => (
            <li key={i} className="text-xs font-mono text-ergo-light/70 truncate">
              · {topic}
            </li>
          ))}
        </ul>
      )}
      <div className="flex items-center gap-4 text-sm font-mono text-ergo-muted">
        <span className="flex items-center gap-1">
          <Hash className="w-3 h-3" />
          {entry.message_count.toLocaleString()} msgs
        </span>
        {entry.sibling_parts.length > 0 && (
          <span className="text-ergo-orange/60">
            Part of split week
          </span>
        )}
      </div>
    </Link>
  );
}

export default function Telegram() {
  const { loadTelegramIndex } = useData();
  const [channel, setChannel] = useState<TelegramChannel>('general');
  const [view, setView] = useState<ViewMode>('monthly');
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [isLoading, setIsLoading] = useState(true);
  const [telegramIndex, setTelegramIndexState] = useState<Awaited<ReturnType<typeof loadTelegramIndex>> | null>(null);

  useEffect(() => {
    loadTelegramIndex()
      .then(setTelegramIndexState)
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, []);

  const channelData = telegramIndex?.[channel];

  const years = useMemo(() => {
    if (!channelData) return [];
    const yearSet = new Set<string>();
    if (view === 'monthly') {
      channelData.months.forEach(m => yearSet.add(m.period.split('-')[0]));
    } else {
      channelData.weeks.forEach(w => yearSet.add(w.period.split('-')[0]));
    }
    return Array.from(yearSet).sort().reverse();
  }, [channelData, view]);

  const filteredMonths = useMemo((): TelegramMonthEntry[] => {
    if (!channelData) return [];
    return channelData.months
      .filter(m => selectedYear === 'all' || m.period.startsWith(selectedYear))
      .slice()
      .reverse(); // newest first
  }, [channelData, selectedYear]);

  const filteredWeeks = useMemo((): TelegramWeekEntry[] => {
    if (!channelData) return [];
    return channelData.weeks
      .filter(w => selectedYear === 'all' || w.period.startsWith(selectedYear))
      .slice()
      .reverse();
  }, [channelData, selectedYear]);

  const totalMonths = telegramIndex
    ? (telegramIndex.general?.months.length ?? 0) + (telegramIndex.developer?.months.length ?? 0)
    : 0;
  const totalWeeks = telegramIndex
    ? (telegramIndex.general?.weeks.length ?? 0) + (telegramIndex.developer?.weeks.length ?? 0)
    : 0;

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-ergo-orange animate-spin mx-auto mb-4" />
          <p className="font-mono text-ergo-muted">Loading chat archive...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet><title>Chat Archive — Ergo Knowledge Base</title></Helmet>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <MessageSquare className="w-8 h-8 text-ergo-orange" />
          <h1 className="text-4xl font-bold font-mono text-gradient">Chat Archive</h1>
        </div>
        <p className="text-ergo-muted font-mono">
          {totalMonths} monthly summaries · {totalWeeks} weekly segments · 2017–2026
        </p>
      </div>

      {/* Channel Tabs */}
      <div className="flex gap-2 mb-6">
        {(['general', 'developer'] as TelegramChannel[]).map(ch => (
          <button
            key={ch}
            onClick={() => { setChannel(ch); setSelectedYear('all'); }}
            className={`px-5 py-2 rounded font-mono text-sm transition-colors ${
              channel === ch
                ? 'bg-ergo-orange text-ergo-darker'
                : 'bg-ergo-dark border border-ergo-orange/30 hover:border-ergo-orange/60'
            }`}
          >
            {ch === 'general' ? 'General Chat' : 'Developer Chat'}
            <span className="ml-2 text-xs opacity-70">
              ({ch === 'general'
                ? telegramIndex?.general?.months.length ?? 0
                : telegramIndex?.developer?.months.length ?? 0} months)
            </span>
          </button>
        ))}
      </div>

      {/* Controls Row */}
      <div className="flex flex-wrap items-center gap-4 mb-8">
        {/* View Toggle */}
        <div className="flex rounded overflow-hidden border border-ergo-orange/30">
          {(['monthly', 'weekly'] as ViewMode[]).map(v => (
            <button
              key={v}
              onClick={() => { setView(v); setSelectedYear('all'); }}
              className={`px-4 py-2 font-mono text-sm transition-colors ${
                view === v
                  ? 'bg-ergo-orange/20 text-ergo-orange'
                  : 'hover:bg-ergo-orange/10'
              }`}
            >
              {v.charAt(0).toUpperCase() + v.slice(1)}
            </button>
          ))}
        </div>

        {/* Year Filter */}
        <select
          value={selectedYear}
          onChange={e => setSelectedYear(e.target.value)}
          className="bg-ergo-dark border border-ergo-orange/30 rounded px-3 py-2 font-mono text-sm focus:outline-none focus:border-ergo-orange"
        >
          <option value="all">All Years</option>
          {years.map(y => (
            <option key={y} value={y}>{y}</option>
          ))}
        </select>

        {/* Result count */}
        <span className="font-mono text-sm text-ergo-muted ml-auto">
          {view === 'monthly'
            ? `${filteredMonths.length} month${filteredMonths.length !== 1 ? 's' : ''}`
            : `${filteredWeeks.length} week${filteredWeeks.length !== 1 ? 's' : ''}`}
        </span>
      </div>

      {/* Cards Grid */}
      {view === 'monthly' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredMonths.map(entry => (
            <MonthCard key={entry.period} entry={entry} channel={channel} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredWeeks.map(entry => (
            <WeekCard key={entry.period} entry={entry} channel={channel} />
          ))}
        </div>
      )}

      {(view === 'monthly' ? filteredMonths : filteredWeeks).length === 0 && (
        <div className="text-center py-16">
          <p className="font-mono text-ergo-muted">No entries found.</p>
        </div>
      )}
    </div>
  );
}
