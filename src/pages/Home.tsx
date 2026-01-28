import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Activity, Loader2, ChevronDown } from 'lucide-react';
import CallCard from '../components/CallCard';
import StatCard from '../components/StatCard';
import TopicTag from '../components/TopicTag';
import { useData } from '../contexts/DataContext';

export default function Home() {
  const { stats, calls, topics, isLoading, isInitialized, loadAllDecisions, allDecisions } = useData();
  const [typedText, setTypedText] = useState('');
  const [decisionsLoading, setDecisionsLoading] = useState(false);
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

  // Load decisions for the recent decisions section
  useEffect(() => {
    if (isInitialized && !allDecisions) {
      setDecisionsLoading(true);
      loadAllDecisions().finally(() => setDecisionsLoading(false));
    }
  }, [isInitialized, allDecisions, loadAllDecisions]);

  const recentCalls = calls.slice(0, 4);
  const recentDecisions = allDecisions?.slice(0, 4) || [];
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

      {/* Recent Calls */}
      <section className="container mx-auto px-4 pt-4 pb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold font-mono text-ergo-orange">
            Recent Calls
          </h2>
          <Link
            to="/calls"
            className="flex items-center gap-2 text-sm font-mono text-ergo-muted hover:text-ergo-orange transition-colors"
          >
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {recentCalls.map(call => (
            <CallCard key={call.id} call={call} />
          ))}
        </div>
      </section>

      {/* Recent Decisions */}
      <section className="container mx-auto px-4 pt-4 pb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold font-mono text-ergo-orange">
            Recent Decisions
          </h2>
          <Link
            to="/decisions"
            className="flex items-center gap-2 text-sm font-mono text-ergo-muted hover:text-ergo-orange transition-colors"
          >
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {decisionsLoading ? (
          <div className="flex items-center justify-center py-8">
            <Loader2 className="w-6 h-6 text-ergo-orange animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {recentDecisions.map(decision => (
              <div
                key={decision.id}
                className="bg-ergo-dark border border-ergo-orange/20 rounded-lg p-6 hover:border-ergo-orange/50 transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className={`
                    text-xs font-mono px-2 py-1 rounded
                    ${decision.type === 'decision' ? 'bg-blue-500/20 text-blue-400' : ''}
                    ${decision.type === 'commitment' ? 'bg-green-500/20 text-green-400' : ''}
                    ${decision.type === 'open_question' ? 'bg-yellow-500/20 text-yellow-400' : ''}
                  `}>
                    {decision.type.toUpperCase().replace('_', ' ')}
                  </span>
                  <span className="text-xs font-mono text-ergo-muted">{decision.date}</span>
                </div>

                <Link to={`/calls/${decision.call_id}`}>
                  <h3 className="font-mono text-lg font-semibold text-ergo-orange hover:text-orange-400 transition-colors mb-2">
                    {decision.title}
                  </h3>
                </Link>

                <p className="text-sm text-ergo-light/80 mb-3 line-clamp-2">
                  {decision.content}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-ergo-muted">
                    {decision.speaker} | Topic: {decision.topic}
                  </span>
                  <Link
                    to={`/calls/${decision.call_id}`}
                    className="text-xs font-mono text-ergo-orange hover:text-orange-400"
                  >
                    View source
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Activity Feed */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center gap-2 mb-8">
          <Activity className="w-6 h-6 text-ergo-orange" />
          <h2 className="text-2xl font-bold font-mono text-ergo-orange">
            Live Activity Feed
          </h2>
        </div>

        <div className="bg-ergo-dark/50 border border-ergo-orange/20 rounded-lg p-6 font-mono text-sm">
          <div className="space-y-3">
            {recentCalls[0] && (
              <div className="flex items-center gap-3">
                <span className="text-term-green">●</span>
                <span className="text-ergo-muted">{new Date(recentCalls[0].date).toLocaleDateString()}</span>
                <span>New call indexed: "{recentCalls[0].title}"</span>
              </div>
            )}
            {stats && (
              <div className="flex items-center gap-3">
                <span className="text-term-amber">●</span>
                <span className="text-ergo-muted">Total</span>
                <span>{stats.total_qa} Q&A pairs across {stats.total_calls} calls</span>
              </div>
            )}
            {trendingTopics[0] && (
              <div className="flex items-center gap-3">
                <span className="text-term-cyan">●</span>
                <span className="text-ergo-muted">Trending</span>
                <span>Topic "{trendingTopics[0].name}" ({trendingTopics[0].mention_count} mentions)</span>
              </div>
            )}
            {stats && (
              <div className="flex items-center gap-3">
                <span className="text-term-green">●</span>
                <span className="text-ergo-muted">Archive</span>
                <span>{stats.total_hours}+ hours of community knowledge indexed</span>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
