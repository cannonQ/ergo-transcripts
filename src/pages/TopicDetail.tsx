import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { Hash, Users, GitBranch, Calendar, ChevronRight, Loader2 } from 'lucide-react';
import CallCard from '../components/CallCard';
import TopicTag from '../components/TopicTag';
import CorrectionButton from '../components/CorrectionButton';
import { useData } from '../contexts/DataContext';

export default function TopicDetail() {
  const { slug } = useParams();
  const { topics, calls, isLoading } = useData();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-ergo-orange animate-spin mx-auto mb-4" />
          <p className="font-mono text-ergo-muted">Loading topic...</p>
        </div>
      </div>
    );
  }

  const topic = topics.find(t => t.slug === slug);

  if (!topic) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-mono text-ergo-orange mb-4">Topic not found</h1>
        <Link to="/topics" className="text-ergo-muted hover:text-ergo-orange font-mono">
          Back to Topics
        </Link>
      </div>
    );
  }

  // Find related calls (this is a simplified approach)
  const relatedCalls = calls.slice(0, 5); // In a real app, filter by topic

  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet><title>{topic.name} — Ergo Knowledge Base</title></Helmet>
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm font-mono text-ergo-muted mb-6">
        <Link to="/topics" className="hover:text-ergo-orange">Topics</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-ergo-light">{topic.name}</span>
      </div>

      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Hash className="w-8 h-8 text-ergo-orange" />
          <h1 className="text-4xl font-bold font-mono text-gradient">
            {topic.name.toUpperCase()}
          </h1>
          <CorrectionButton pageType="Topic" pageTitle={topic.name} className="ml-auto" />
        </div>
        <p className="text-lg text-ergo-light/80 mb-6">
          {topic.description}
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-ergo-dark border border-ergo-orange/20 rounded-lg p-4">
            <div className="text-2xl font-bold font-mono text-term-cyan">
              {topic.mention_count}
            </div>
            <div className="text-xs font-mono text-ergo-muted">mentions</div>
          </div>
          <div className="bg-ergo-dark border border-ergo-orange/20 rounded-lg p-4">
            <div className="text-2xl font-bold font-mono text-term-green">
              {topic.call_count}
            </div>
            <div className="text-xs font-mono text-ergo-muted">calls</div>
          </div>
          <div className="bg-ergo-dark border border-ergo-orange/20 rounded-lg p-4">
            <div className="text-2xl font-bold font-mono text-term-amber">
              {topic.key_speakers.length}
            </div>
            <div className="text-xs font-mono text-ergo-muted">speakers</div>
          </div>
          <div className="bg-ergo-dark border border-ergo-orange/20 rounded-lg p-4">
            <div className="text-2xl font-bold font-mono text-ergo-orange">
              {topic.related_topics.length}
            </div>
            <div className="text-xs font-mono text-ergo-muted">related</div>
          </div>
        </div>

        {/* Key Speakers */}
        {topic.key_speakers.length > 0 && (
          <div className="bg-ergo-dark border border-ergo-orange/20 rounded-lg p-6 mb-6">
            <h3 className="font-mono font-semibold text-ergo-orange mb-3 flex items-center gap-2">
              <Users className="w-4 h-4" />
              Key Speakers
            </h3>
            <div className="flex flex-wrap gap-3">
              {topic.key_speakers.map(speaker => (
                <Link
                  key={speaker}
                  to={`/speakers/${encodeURIComponent(speaker)}`}
                  className="px-3 py-1 bg-ergo-darker border border-ergo-orange/30 rounded font-mono text-sm hover:border-ergo-orange transition-colors"
                >
                  {speaker}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Related Topics */}
        {topic.related_topics.length > 0 && (
          <div className="bg-ergo-dark border border-ergo-orange/20 rounded-lg p-6">
            <h3 className="font-mono font-semibold text-ergo-orange mb-3 flex items-center gap-2">
              <GitBranch className="w-4 h-4" />
              Related Topics
            </h3>
            <div className="flex flex-wrap gap-2">
              {topic.related_topics.map(related => (
                <TopicTag key={related} topic={related} />
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Timeline */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold font-mono text-ergo-orange mb-6 flex items-center gap-2">
          <Calendar className="w-6 h-6" />
          Recent Calls
        </h2>
        <div className="space-y-6">
          {relatedCalls.map(call => (
            <CallCard key={call.id} call={call} />
          ))}
        </div>
        {relatedCalls.length === 0 && (
          <p className="text-ergo-muted font-mono text-center py-8">No calls found for this topic.</p>
        )}
      </section>
    </div>
  );
}
