import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Hash, TrendingUp, Grid, List, Loader2 } from 'lucide-react';
import { useData } from '../contexts/DataContext';

export default function Topics() {
  const { topics, isLoading } = useData();
  const [viewMode, setViewMode] = useState<'cloud' | 'list' | 'trending'>('cloud');

  const sortedByMentions = [...topics].sort((a, b) => b.mention_count - a.mention_count);
  const sortedAlphabetically = [...topics].sort((a, b) => a.name.localeCompare(b.name));

  // Calculate max mentions for scaling
  const maxMentions = sortedByMentions[0]?.mention_count || 1;

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-ergo-orange animate-spin mx-auto mb-4" />
          <p className="font-mono text-ergo-muted">Loading topics...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet><title>Topics — Ergo Knowledge Base</title></Helmet>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold font-mono text-gradient mb-2">
          Topics Browser
        </h1>
        <p className="text-ergo-muted font-mono">
          Explore {topics.length} topics across all community calls
        </p>
      </div>

      {/* View Mode Toggle */}
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={() => setViewMode('cloud')}
          className={`flex items-center gap-2 px-4 py-2 rounded font-mono text-sm transition-all ${
            viewMode === 'cloud'
              ? 'bg-ergo-orange text-ergo-darker'
              : 'bg-ergo-dark border border-ergo-orange/30 hover:border-ergo-orange'
          }`}
        >
          <Grid className="w-4 h-4" />
          Tag Cloud
        </button>
        <button
          onClick={() => setViewMode('list')}
          className={`flex items-center gap-2 px-4 py-2 rounded font-mono text-sm transition-all ${
            viewMode === 'list'
              ? 'bg-ergo-orange text-ergo-darker'
              : 'bg-ergo-dark border border-ergo-orange/30 hover:border-ergo-orange'
          }`}
        >
          <List className="w-4 h-4" />
          List View
        </button>
        <button
          onClick={() => setViewMode('trending')}
          className={`flex items-center gap-2 px-4 py-2 rounded font-mono text-sm transition-all ${
            viewMode === 'trending'
              ? 'bg-ergo-orange text-ergo-darker'
              : 'bg-ergo-dark border border-ergo-orange/30 hover:border-ergo-orange'
          }`}
        >
          <TrendingUp className="w-4 h-4" />
          Trending
        </button>
      </div>

      {/* Tag Cloud View */}
      {viewMode === 'cloud' && (
        <div className="bg-ergo-dark border border-ergo-orange/20 rounded-lg p-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {sortedByMentions.map(topic => {
              const ratio = topic.mention_count / maxMentions;
              const size = ratio > 0.7 ? 'text-3xl' :
                           ratio > 0.5 ? 'text-2xl' :
                           ratio > 0.3 ? 'text-xl' : 'text-lg';

              return (
                <Link
                  key={topic.slug}
                  to={`/topics/${topic.slug}`}
                  className={`font-mono hover:text-ergo-orange transition-all ${size}`}
                  style={{
                    opacity: Math.max(0.5, ratio)
                  }}
                >
                  #{topic.name}
                  <span className="text-xs ml-1 text-ergo-muted">({topic.mention_count})</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* List View */}
      {viewMode === 'list' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sortedAlphabetically.map(topic => (
            <div
              key={topic.slug}
              className="bg-ergo-dark border border-ergo-orange/20 rounded-lg p-6 hover:border-ergo-orange/50 transition-all"
            >
              <Link to={`/topics/${topic.slug}`}>
                <h3 className="font-mono text-lg font-semibold text-ergo-orange mb-2 flex items-center gap-2">
                  <Hash className="w-4 h-4" />
                  {topic.name}
                </h3>
              </Link>
              <p className="text-sm text-ergo-light/80 mb-4">
                {topic.description}
              </p>
              <div className="space-y-2 text-xs font-mono">
                <div className="flex items-center justify-between">
                  <span className="text-ergo-muted">Mentions:</span>
                  <span className="text-term-cyan">{topic.mention_count}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-ergo-muted">Calls:</span>
                  <span className="text-term-green">{topic.call_count}</span>
                </div>
                {topic.key_speakers.length > 0 && (
                  <div className="flex items-center justify-between">
                    <span className="text-ergo-muted">Key Speakers:</span>
                    <span className="text-term-amber">{topic.key_speakers.slice(0, 3).join(', ')}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Trending View */}
      {viewMode === 'trending' && (
        <div className="space-y-4">
          {sortedByMentions.map((topic, index) => (
            <div
              key={topic.slug}
              className="bg-ergo-dark border border-ergo-orange/20 rounded-lg p-6 hover:border-ergo-orange/50 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl font-bold font-mono text-ergo-orange/50">
                  #{index + 1}
                </div>
                <div className="flex-1">
                  <Link to={`/topics/${topic.slug}`}>
                    <h3 className="font-mono text-xl font-semibold text-ergo-orange mb-2">
                      {topic.name.toUpperCase()}
                    </h3>
                  </Link>
                  <p className="text-sm text-ergo-light/80 mb-4">
                    {topic.description}
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono">
                    <div>
                      <span className="text-ergo-muted block">Mentions</span>
                      <span className="text-lg text-term-cyan">{topic.mention_count}</span>
                    </div>
                    <div>
                      <span className="text-ergo-muted block">Calls</span>
                      <span className="text-lg text-term-green">{topic.call_count}</span>
                    </div>
                    <div>
                      <span className="text-ergo-muted block">Speakers</span>
                      <span className="text-sm">{topic.key_speakers.length}</span>
                    </div>
                    <div>
                      <span className="text-ergo-muted block">Related</span>
                      <span className="text-sm">{topic.related_topics.length}</span>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <Link
                      to={`/topics/${topic.slug}`}
                      className="px-3 py-1 bg-ergo-orange/20 hover:bg-ergo-orange/30 border border-ergo-orange/50 rounded font-mono text-xs transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {topics.length === 0 && (
        <div className="text-center py-12">
          <p className="font-mono text-ergo-muted">No topics found.</p>
        </div>
      )}
    </div>
  );
}
