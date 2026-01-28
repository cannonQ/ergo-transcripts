import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { User, Mic, Gavel, Hash, Quote, Search, Grid, List, Loader2 } from 'lucide-react';
import { useData } from '../contexts/DataContext';

export default function Speakers() {
  const { speakers, isLoading } = useData();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'calls' | 'decisions' | 'name'>('calls');

  const totalCalls = speakers.reduce((acc, s) => acc + s.stats.calls, 0);

  const filteredSpeakers = speakers
    .filter(speaker =>
      speaker.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      speaker.role.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'decisions':
          return b.stats.decisions - a.stats.decisions;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return b.stats.calls - a.stats.calls;
      }
    });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-ergo-orange animate-spin mx-auto mb-4" />
          <p className="font-mono text-ergo-muted">Loading speakers...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet><title>Speakers — Ergo Knowledge Base</title></Helmet>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold font-mono text-gradient mb-2">
          Speaker Directory
        </h1>
        <p className="text-ergo-muted font-mono">
          Meet the voices of the Ergo community across {totalCalls}+ call appearances
        </p>
      </div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-ergo-muted" />
          <input
            type="text"
            placeholder="Search speakers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-ergo-dark border border-ergo-orange/30 rounded-lg font-mono focus:outline-none focus:border-ergo-orange"
          />
        </div>

        {/* Sort */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as 'calls' | 'decisions' | 'name')}
          className="px-4 py-3 bg-ergo-dark border border-ergo-orange/30 rounded-lg font-mono focus:outline-none focus:border-ergo-orange"
        >
          <option value="calls">Most Active</option>
          <option value="decisions">Most Decisions</option>
          <option value="name">Alphabetical</option>
        </select>

        {/* View Toggle */}
        <div className="flex gap-2">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-3 rounded-lg transition-all ${
              viewMode === 'grid'
                ? 'bg-ergo-orange text-ergo-darker'
                : 'bg-ergo-dark border border-ergo-orange/30 hover:border-ergo-orange'
            }`}
          >
            <Grid className="w-5 h-5" />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-3 rounded-lg transition-all ${
              viewMode === 'list'
                ? 'bg-ergo-orange text-ergo-darker'
                : 'bg-ergo-dark border border-ergo-orange/30 hover:border-ergo-orange'
            }`}
          >
            <List className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Results Count */}
      <p className="font-mono text-sm text-ergo-muted mb-6">
        Showing {filteredSpeakers.length} speakers
      </p>

      {/* Grid View */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSpeakers.map(speaker => (
            <Link
              key={speaker.name}
              to={`/speakers/${encodeURIComponent(speaker.name)}`}
              className="bg-ergo-dark border border-ergo-orange/20 rounded-lg p-6 hover:border-ergo-orange/50 transition-all group"
            >
              {/* Avatar & Name */}
              <div className="flex items-center gap-4 mb-4">
                {speaker.avatar ? (
                  <img
                    src={speaker.avatar}
                    alt={speaker.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-ergo-orange/30 group-hover:border-ergo-orange transition-colors"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-ergo-orange/20 flex items-center justify-center border-2 border-ergo-orange/30">
                    <User className="w-8 h-8 text-ergo-orange" />
                  </div>
                )}
                <div>
                  <h3 className="font-mono text-lg font-semibold group-hover:text-ergo-orange transition-colors">
                    {speaker.name}
                  </h3>
                  <p className="text-sm text-ergo-muted">{speaker.role}</p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-ergo-darker rounded p-2 text-center">
                  <Mic className="w-4 h-4 text-term-cyan mx-auto mb-1" />
                  <span className="text-lg font-bold font-mono text-term-cyan">{speaker.stats.calls}</span>
                  <span className="text-xs text-ergo-muted block">Calls</span>
                </div>
                <div className="bg-ergo-darker rounded p-2 text-center">
                  <Gavel className="w-4 h-4 text-term-green mx-auto mb-1" />
                  <span className="text-lg font-bold font-mono text-term-green">{speaker.stats.decisions}</span>
                  <span className="text-xs text-ergo-muted block">Decisions</span>
                </div>
              </div>

              {/* Top Topics */}
              {speaker.top_topics.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {speaker.top_topics.slice(0, 3).map(topic => (
                    <span
                      key={topic}
                      className="text-xs font-mono px-2 py-1 bg-ergo-orange/10 text-ergo-orange rounded"
                    >
                      #{topic}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
      )}

      {/* List View */}
      {viewMode === 'list' && (
        <div className="space-y-4">
          {filteredSpeakers.map(speaker => (
            <Link
              key={speaker.name}
              to={`/speakers/${encodeURIComponent(speaker.name)}`}
              className="block bg-ergo-dark border border-ergo-orange/20 rounded-lg p-6 hover:border-ergo-orange/50 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                {/* Avatar & Info */}
                <div className="flex items-center gap-4 flex-1">
                  {speaker.avatar ? (
                    <img
                      src={speaker.avatar}
                      alt={speaker.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-ergo-orange/30"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-ergo-orange/20 flex items-center justify-center">
                      <User className="w-6 h-6 text-ergo-orange" />
                    </div>
                  )}
                  <div>
                    <h3 className="font-mono text-lg font-semibold">{speaker.name}</h3>
                    <p className="text-sm text-ergo-muted">{speaker.role}</p>
                  </div>
                </div>

                {/* Stats Row */}
                <div className="flex items-center gap-6 text-sm font-mono">
                  <div className="flex items-center gap-2">
                    <Mic className="w-4 h-4 text-term-cyan" />
                    <span className="text-term-cyan">{speaker.stats.calls}</span>
                    <span className="text-ergo-muted">calls</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Gavel className="w-4 h-4 text-term-green" />
                    <span className="text-term-green">{speaker.stats.decisions}</span>
                    <span className="text-ergo-muted">decisions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Hash className="w-4 h-4 text-term-amber" />
                    <span className="text-term-amber">{speaker.stats.topics}</span>
                    <span className="text-ergo-muted">topics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Quote className="w-4 h-4 text-term-magenta" />
                    <span className="text-term-magenta">{speaker.stats.quotes}</span>
                    <span className="text-ergo-muted">quotes</span>
                  </div>
                </div>
              </div>

              {/* Bio */}
              {speaker.bio && (
                <p className="mt-4 text-sm text-ergo-light/70 line-clamp-2">{speaker.bio}</p>
              )}
            </Link>
          ))}
        </div>
      )}

      {filteredSpeakers.length === 0 && (
        <div className="text-center py-12">
          <User className="w-12 h-12 text-ergo-muted mx-auto mb-4" />
          <p className="font-mono text-ergo-muted">No speakers found matching "{searchQuery}"</p>
        </div>
      )}
    </div>
  );
}
