import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Activity, Loader2, ChevronDown, MessageSquare } from 'lucide-react';
import CallCard from '../components/CallCard';
import StatCard from '../components/StatCard';
import TopicTag from '../components/TopicTag';
import { useData } from '../contexts/DataContext';
import type { TelegramMonthEntry } from '../types';

function monthLabel(period: string): string {
  const [year, month] = period.split('-');
  const d = new Date(parseInt(year), parseInt(month) - 1, 1);
  return d.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
}

export default function Home() {
  const { stats, calls, topics, isLoading, isInitialized, loadTelegramIndex } = useData();
  const [recentGeneralChat, setRecentGeneralChat] = useState<TelegramMonthEntry[]>([]);
  const [recentDevChat, setRecentDevChat] = useState<TelegramMonthEntry[]>([]);
  const [totalChatWeeks, setTotalChatWeeks] = useState(0);
  const [totalChatMonths, setTotalChatMonths] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [statsOpen, setStatsOpen] = useState(false);
  const [trendingOpen, setTrendingOpen] = useState(false);
  const fullText = 'The public meetings of Ergo';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  // Load telegram index for stats + recent chat section
  useEffect(() => {
    if (!isInitialized) return;
    loadTelegramIndex().then(idx => {
      const gMonths = idx.general?.months ?? [];
      const dMonths = idx.developer?.months ?? [];
      setTotalChatWeeks((idx.general?.weeks.length ?? 0) + (idx.developer?.weeks.length ?? 0));
      setTotalChatMonths(gMonths.length + dMonths.length);

      setRecentGeneralChat([...gMonths].slice(-4).reverse());
      setRecentDevChat([...dMonths].slice(-4).reverse());
    }).catch(console.error);
  }, [isInitialized]);

  const recentCalls = calls.slice(0, 4);
  const trendingTopics = [...topics].sort((a, b) => b.mention_count - a.mention_count).slice(0, 10);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-ergo-orange animate-spin mx-auto mb-4" />
          <p className="font-mono text-ergo-muted">Loading knowledge base...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <Helmet><title>Ergo Knowledge Base</title></Helmet>
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-5 pointer-events-none"></div>

      {/* Scan Line Effect */}
      <div className="scan-line"></div>

      {/* Hero Section */}
      <section className="relative container mx-auto px-4 pt-16 pb-6">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold font-mono mb-4">
            <span className="text-gradient">ERGO KNOWLEDGE BASE</span>
          </h1>
          <p className="text-xl text-ergo-muted font-mono">
            {typedText}
            <span className="animate-blink">_</span>
          </p>
        </div>

        {/* Stats + Trending Topics Row */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 lg:gap-4">
          {/* Stats - 50% mobile, 60% desktop */}
          <div className="col-span-1 lg:col-span-3 bg-ergo-dark/80 backdrop-blur border border-ergo-orange/30 rounded-lg p-3 lg:p-6 glow-orange">
            {/* Mobile toggle header */}
            <button
              onClick={() => setStatsOpen(!statsOpen)}
              className="lg:hidden flex items-center justify-between w-full"
            >
              <span className="text-xs font-bold font-mono text-ergo-orange">System Stats</span>
              <ChevronDown className={`w-4 h-4 text-ergo-orange transition-transform ${statsOpen ? 'rotate-180' : ''}`} />
            </button>
            {/* Content: toggled on mobile, always visible on desktop */}
            <div className={`${statsOpen ? 'mt-3' : 'hidden'} lg:block`}>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <StatCard label="CALLS INDEXED" value={stats?.total_calls || 0} />
                <StatCard label="Q&A PAIRS" value={(stats?.total_qa || 0).toLocaleString()} />
                <StatCard label="DECISIONS TRACKED" value={stats?.total_decisions || 0} />
                <StatCard label="SPEAKERS" value={stats?.total_speakers || 0} />
                <StatCard label="HOURS OF CONTENT" value={`${stats?.total_hours || 0}+`} />
                <StatCard label="CHAT WEEKS" value={totalChatWeeks || '—'} />
                <StatCard label="CHAT MONTHS" value={totalChatMonths || '—'} />
                <StatCard label="CHAT COVERAGE" value={totalChatWeeks ? '2017–2026' : '—'} />
                <StatCard label="LAST SYNC" value="LIVE" />
              </div>
            </div>
          </div>

          {/* Trending Topics - 50% mobile, 40% desktop */}
          <div className="col-span-1 lg:col-span-2 bg-ergo-dark/50 border border-ergo-orange/20 rounded-lg p-3 lg:p-4">
            {/* Mobile toggle header */}
            <button
              onClick={() => setTrendingOpen(!trendingOpen)}
              className="lg:hidden flex items-center justify-between w-full"
            >
              <span className="text-xs font-bold font-mono text-ergo-orange flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                Trending
              </span>
              <ChevronDown className={`w-4 h-4 text-ergo-orange transition-transform ${trendingOpen ? 'rotate-180' : ''}`} />
            </button>
            {/* Desktop header (always visible) */}
            <div className="hidden lg:flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold font-mono text-ergo-orange flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Trending Topics
              </h3>
              <Link
                to="/topics"
                className="text-xs font-mono text-ergo-muted hover:text-ergo-orange transition-colors"
              >
                View all
              </Link>
            </div>
            {/* Content: toggled on mobile, always visible on desktop */}
            <div className={`${trendingOpen ? 'mt-3' : 'hidden'} lg:block`}>
              <div className="flex flex-wrap gap-2">
                {trendingTopics.slice(0, 8).map(topic => (
                  <TopicTag
                    key={topic.slug}
                    topic={topic.name}
                    count={topic.mention_count}
                    size="sm"
                  />
                ))}
              </div>
              <Link
                to="/topics"
                className="lg:hidden block text-xs font-mono text-ergo-muted hover:text-ergo-orange transition-colors mt-2"
              >
                View all →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Calls + Recent Chat — 50/50 split */}
      <section className="container mx-auto px-4 pt-4 pb-8">
        {/* Column headers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold font-mono text-ergo-orange">Recent Calls</h2>
            <Link to="/calls" className="flex items-center gap-2 text-sm font-mono text-ergo-muted hover:text-ergo-orange transition-colors">
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold font-mono text-ergo-orange flex items-center gap-2">
              <MessageSquare className="w-6 h-6" />
              Recent Chat
            </h2>
            <Link to="/telegram" className="flex items-center gap-2 text-sm font-mono text-ergo-muted hover:text-ergo-orange transition-colors">
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Content row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* LEFT: Recent Calls stacked */}
          <div className="flex flex-col gap-4">
            {recentCalls.map(call => (
              <CallCard key={call.id} call={call} />
            ))}
          </div>

          {/* RIGHT: General + Developer split 50/50 */}
          <div className="grid grid-cols-2 gap-3">
            {/* General column */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-mono text-ergo-orange/70 uppercase tracking-wider">General</span>
              {recentGeneralChat.map(entry => (
                <Link
                  key={entry.period}
                  to={`/telegram/general/${entry.period}`}
                  className="block bg-ergo-dark border border-ergo-orange/20 rounded-lg p-3 hover:border-ergo-orange/50 transition-colors"
                >
                  <div className="text-xs font-mono text-ergo-muted mb-1">{entry.period}</div>
                  <div className="font-mono text-sm font-semibold text-ergo-light leading-snug mb-1">
                    {monthLabel(entry.period)}
                  </div>
                  <div className="text-xs font-mono text-ergo-muted">
                    {entry.total_messages.toLocaleString()} msgs
                  </div>
                </Link>
              ))}
            </div>

            {/* Developer column */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-mono text-ergo-orange/70 uppercase tracking-wider">Developer</span>
              {recentDevChat.map(entry => (
                <Link
                  key={entry.period}
                  to={`/telegram/developer/${entry.period}`}
                  className="block bg-ergo-dark border border-ergo-orange/20 rounded-lg p-3 hover:border-ergo-orange/50 transition-colors"
                >
                  <div className="text-xs font-mono text-ergo-muted mb-1">{entry.period}</div>
                  <div className="font-mono text-sm font-semibold text-ergo-light leading-snug mb-1">
                    {monthLabel(entry.period)}
                  </div>
                  <div className="text-xs font-mono text-ergo-muted">
                    {entry.total_messages.toLocaleString()} msgs
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Activity Feed */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center gap-2 mb-8">
          <Activity className="w-6 h-6 text-ergo-orange" />
          <h2 className="text-2xl font-bold font-mono text-ergo-orange">
            Live Activity Feed
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 font-mono text-sm">
          {/* Video */}
          <div className="bg-ergo-dark/50 border border-ergo-orange/20 rounded-lg p-5">
            <div className="text-xs text-ergo-orange/70 uppercase tracking-wider mb-3">Video</div>
            <div className="space-y-3">
              {recentCalls[0] && (
                <div className="flex items-start gap-3">
                  <span className="text-term-green mt-0.5">●</span>
                  <div>
                    <span className="text-ergo-muted">{new Date(recentCalls[0].date).toLocaleDateString()} · </span>
                    <span>New call: "{recentCalls[0].title}"</span>
                  </div>
                </div>
              )}
              {stats && (
                <div className="flex items-start gap-3">
                  <span className="text-term-amber mt-0.5">●</span>
                  <span>{stats.total_qa} Q&A pairs across {stats.total_calls} calls</span>
                </div>
              )}
              {trendingTopics[0] && (
                <div className="flex items-start gap-3">
                  <span className="text-term-cyan mt-0.5">●</span>
                  <span>Trending: "{trendingTopics[0].name}" ({trendingTopics[0].mention_count} mentions)</span>
                </div>
              )}
              {stats && (
                <div className="flex items-start gap-3">
                  <span className="text-term-green mt-0.5">●</span>
                  <span>{stats.total_hours}+ hours of community knowledge indexed</span>
                </div>
              )}
            </div>
          </div>

          {/* Chat */}
          <div className="bg-ergo-dark/50 border border-ergo-orange/20 rounded-lg p-5">
            <div className="text-xs text-ergo-orange/70 uppercase tracking-wider mb-3">Chat</div>
            <div className="space-y-3">
              {recentGeneralChat[0] && (
                <div className="flex items-start gap-3">
                  <span className="text-term-green mt-0.5">●</span>
                  <div>
                    <span className="text-ergo-muted">{recentGeneralChat[0].period} · </span>
                    <span>General: {recentGeneralChat[0].total_messages.toLocaleString()} messages archived</span>
                  </div>
                </div>
              )}
              {recentDevChat[0] && (
                <div className="flex items-start gap-3">
                  <span className="text-term-amber mt-0.5">●</span>
                  <div>
                    <span className="text-ergo-muted">{recentDevChat[0].period} · </span>
                    <span>Developer: {recentDevChat[0].total_messages.toLocaleString()} messages archived</span>
                  </div>
                </div>
              )}
              {totalChatWeeks > 0 && (
                <div className="flex items-start gap-3">
                  <span className="text-term-cyan mt-0.5">●</span>
                  <span>{totalChatWeeks} weekly segments across {totalChatMonths} months (2017–2026)</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
