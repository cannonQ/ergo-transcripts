import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Filter, Loader2 } from 'lucide-react';
import CallCard from '../components/CallCard';
import { useData } from '../contexts/DataContext';

export default function Calls() {
  const { calls, isLoading } = useData();
  const [filterType, setFilterType] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('newest');
  const [selectedSpeakers, setSelectedSpeakers] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const allSpeakers = Array.from(
    new Set(calls.flatMap(call => call.speakers))
  ).filter(Boolean).sort();

  const filteredCalls = calls
    .filter(call => {
      if (filterType !== 'all' && call.type !== filterType) return false;
      if (selectedSpeakers.length > 0) {
        const hasSelectedSpeaker = call.speakers.some(speaker =>
          selectedSpeakers.includes(speaker)
        );
        if (!hasSelectedSpeaker) return false;
      }
      return true;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'oldest':
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case 'most-qa':
          return b.stats.qa_pairs - a.stats.qa_pairs;
        case 'most-decisions':
          return b.stats.decisions - a.stats.decisions;
        default: // newest
          return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
    });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-ergo-orange animate-spin mx-auto mb-4" />
          <p className="font-mono text-ergo-muted">Loading calls...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet><title>Calls Archive — Ergo Knowledge Base</title></Helmet>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold font-mono text-gradient mb-2">
          Calls Archive
        </h1>
        <p className="text-ergo-muted font-mono">
          Browse {calls.length} indexed community calls
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <aside className={`lg:w-64 ${showFilters ? 'block' : 'hidden lg:block'}`}>
          <div className="bg-ergo-dark border border-ergo-orange/20 rounded-lg p-6 sticky top-24">
            <h3 className="font-mono font-semibold text-ergo-orange mb-4">Filters</h3>

            {/* Type Filter */}
            <div className="mb-6">
              <label className="block text-sm font-mono text-ergo-muted mb-2">
                Call Type
              </label>
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="w-full bg-ergo-darker border border-ergo-orange/30 rounded px-3 py-2 font-mono text-sm focus:outline-none focus:border-ergo-orange"
              >
                <option value="all">All Types</option>
                <option value="community_chat">Community Chat</option>
                <option value="ama">AMA</option>
                <option value="tutorial">Tutorial</option>
                <option value="special_event">Special Event</option>
              </select>
            </div>

            {/* Speaker Filter */}
            <div className="mb-6">
              <label className="block text-sm font-mono text-ergo-muted mb-2">
                Speakers
              </label>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {allSpeakers.map(speaker => (
                  <label key={speaker} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedSpeakers.includes(speaker)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedSpeakers([...selectedSpeakers, speaker]);
                        } else {
                          setSelectedSpeakers(selectedSpeakers.filter(s => s !== speaker));
                        }
                      }}
                      className="rounded border-ergo-orange/30 bg-ergo-darker text-ergo-orange focus:ring-ergo-orange"
                    />
                    <span className="text-sm font-mono">{speaker}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Clear Filters */}
            {(filterType !== 'all' || selectedSpeakers.length > 0) && (
              <button
                onClick={() => {
                  setFilterType('all');
                  setSelectedSpeakers([]);
                }}
                className="w-full py-2 bg-ergo-orange/20 hover:bg-ergo-orange/30 rounded font-mono text-sm transition-colors"
              >
                Clear Filters
              </button>
            )}
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          {/* Sort Options */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 bg-ergo-dark border border-ergo-orange/30 rounded font-mono text-sm"
            >
              <Filter className="w-4 h-4" />
              {showFilters ? 'Hide' : 'Show'} Filters
            </button>

            <div className="flex items-center gap-4">
              <label className="text-sm font-mono text-ergo-muted">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-ergo-dark border border-ergo-orange/30 rounded px-3 py-2 font-mono text-sm focus:outline-none focus:border-ergo-orange"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="most-qa">Most Q&A</option>
                <option value="most-decisions">Most Decisions</option>
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="font-mono text-sm text-ergo-muted">
              Showing {filteredCalls.length} of {calls.length} calls
            </p>
          </div>

          {/* Call Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {filteredCalls.map(call => (
              <CallCard key={call.id} call={call} />
            ))}
          </div>

          {filteredCalls.length === 0 && (
            <div className="text-center py-12">
              <p className="font-mono text-ergo-muted">No calls match your filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
