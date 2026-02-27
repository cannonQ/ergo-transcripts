import React, { useEffect, useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useSearchParams } from 'react-router-dom';
import { Search, Mic, User, Hash, ArrowLeft, Filter, MessageSquare } from 'lucide-react';
import { useSearch } from '../contexts/SearchContext';
import type { TelegramSearchResult } from '../contexts/SearchContext';

const TYPE_CONFIG: Record<string, { label: string; icon: typeof Mic; color: string; activeColor: string }> = {
  speaker: { label: 'Speaker', icon: User,          color: 'text-term-green',  activeColor: 'bg-term-green/20 border-term-green/50 text-term-green' },
  call:    { label: 'Call',    icon: Mic,            color: 'text-term-cyan',   activeColor: 'bg-term-cyan/20 border-term-cyan/50 text-term-cyan' },
  topic:   { label: 'Topic',   icon: Hash,           color: 'text-ergo-orange', activeColor: 'bg-ergo-orange/20 border-ergo-orange/50 text-ergo-orange' },
  chat:    { label: 'Chat',    icon: MessageSquare,  color: 'text-purple-400',  activeColor: 'bg-purple-500/20 border-purple-500/50 text-purple-400' },
};

function monthLabel(period: string): string {
  const [year, month] = period.split('-');
  const d = new Date(parseInt(year), parseInt(month) - 1, 1);
  return d.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
}
function weekLabel(period: string): string {
  const m = period.match(/^(\d{4})-W(\d+)([a-z]?)$/);
  if (!m) return period;
  return `Week ${parseInt(m[2])} · ${m[1]}${m[3] ? ` (${m[3].toUpperCase()})` : ''}`;
}

function TelegramResultCard({ result }: { result: TelegramSearchResult }) {
  const isMonthly = /^\d{4}-\d{2}$/.test(result.period);
  const title = isMonthly ? monthLabel(result.period) : weekLabel(result.period);
  return (
    <Link
      to={`/telegram/${result.channel}/${result.period}`}
      className="block bg-ergo-dark border border-purple-500/20 rounded-lg p-4 hover:border-purple-500/50 transition-all"
    >
      <div className="flex items-center gap-2 mb-2">
        <div className="p-1.5 bg-ergo-darker rounded">
          <MessageSquare className="w-4 h-4 text-purple-400" />
        </div>
        <span className="text-xs font-mono text-ergo-muted uppercase">
          {result.channel} · {result.type}
        </span>
        <span className="text-xs font-mono text-ergo-muted ml-auto">{result.period}</span>
      </div>
      <h3 className="font-mono text-sm font-semibold text-purple-300 mb-2 line-clamp-2">{title}</h3>
      {result.excerpt && (
        <p className="text-ergo-light/60 text-xs line-clamp-2 mb-2">{result.excerpt}</p>
      )}
      {result.participants.length > 0 && (
        <p className="text-xs font-mono text-ergo-muted line-clamp-1">
          {result.participants.slice(0, 4).join(', ')}
        </p>
      )}
    </Link>
  );
}

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const { results, telegramResults, isSearching, setQuery } = useSearch();
  const [activeTypes, setActiveTypes] = useState<Set<string>>(new Set());
  const [refineQuery, setRefineQuery] = useState('');

  // Sync URL query param to search context
  useEffect(() => {
    if (query) {
      setQuery(query);
    }
  }, [query, setQuery]);

  // Reset filters when global query changes
  useEffect(() => {
    setActiveTypes(new Set());
    setRefineQuery('');
  }, [query]);

  // Count results per type (before filtering)
  const typeCounts = useMemo(() => {
    const counts: Record<string, number> = { speaker: 0, call: 0, topic: 0, chat: telegramResults.length };
    for (const r of results) {
      const t = r.searchType;
      if (t in counts) counts[t]++;
    }
    return counts;
  }, [results, telegramResults]);

  // Apply type filter + refine query
  const filteredResults = useMemo(() => {
    let filtered = results;

    if (activeTypes.size > 0) {
      filtered = filtered.filter(r => activeTypes.has(r.searchType));
    }

    if (refineQuery.trim()) {
      const q = refineQuery.toLowerCase();
      filtered = filtered.filter(r => {
        const rec = r as Record<string, unknown>;
        const fields = [rec.title, rec.name, rec.description, rec.role, rec.bio, rec.question];
        const speakers = rec.speakers as string[] | undefined;
        const text = fields.filter(Boolean).map(String).join(' ')
          + (speakers ? ' ' + speakers.join(' ') : '');
        return text.toLowerCase().includes(q);
      });
    }

    return filtered;
  }, [results, activeTypes, refineQuery]);

  const toggleType = (type: string) => {
    setActiveTypes(prev => {
      const next = new Set(prev);
      if (next.has(type)) {
        next.delete(type);
      } else {
        next.add(type);
      }
      return next;
    });
  };

  const getIcon = (searchType: string) => {
    switch (searchType) {
      case 'call': return <Mic className="w-5 h-5 text-term-cyan" />;
      case 'topic': return <Hash className="w-5 h-5 text-ergo-orange" />;
      case 'speaker': return <User className="w-5 h-5 text-term-green" />;
      default: return <Search className="w-5 h-5 text-ergo-muted" />;
    }
  };

  const getLink = (result: Record<string, unknown>) => {
    switch (result.searchType) {
      case 'call': return `/calls/${result.id}`;
      case 'topic': return `/topics/${result.slug || result.id}`;
      case 'speaker': return `/speakers/${encodeURIComponent(String(result.name || result.id))}`;
      default: return '#';
    }
  };

  const getLabel = (result: Record<string, unknown>) => {
    if (result.searchType === 'call') return String(result.type || 'call').replace(/_/g, ' ');
    return String(result.searchType);
  };

  const hasActiveFilters = activeTypes.size > 0 || refineQuery.trim().length > 0;

  // Chat section visible when: no type filter active (show all), or 'chat' explicitly selected
  const showChatSection = telegramResults.length > 0 &&
    (activeTypes.size === 0 || activeTypes.has('chat'));

  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet><title>{query ? `"${query}" — Search` : 'Search'} — Ergo Knowledge Base</title></Helmet>
      {/* Back Link */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-ergo-muted hover:text-ergo-orange font-mono text-sm mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-4xl font-bold font-mono text-gradient mb-2">
          Search Results
        </h1>
        {query && !isSearching && (
          <p className="text-ergo-muted font-mono">
            {hasActiveFilters
              ? `Showing ${filteredResults.length} of ${results.length + telegramResults.length} results for "${query}"`
              : `Found ${results.length + telegramResults.length} results for "${query}"`}
          </p>
        )}
      </div>

      {/* Filter bar — only show when there are results */}
      {!isSearching && query && (results.length > 0 || telegramResults.length > 0) && (
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          {/* Type pills */}
          <div className="flex flex-wrap gap-2">
            {Object.entries(TYPE_CONFIG).map(([type, cfg]) => {
              const count = typeCounts[type] || 0;
              if (count === 0) return null;
              const Icon = cfg.icon;
              const isActive = activeTypes.has(type);
              return (
                <button
                  key={type}
                  onClick={() => toggleType(type)}
                  className={`
                    inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border font-mono text-xs transition-all
                    ${isActive
                      ? cfg.activeColor
                      : 'border-ergo-orange/20 text-ergo-muted hover:border-ergo-orange/40 hover:text-ergo-light'}
                  `}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {cfg.label}
                  <span className={`${isActive ? 'opacity-80' : 'text-ergo-muted'}`}>({count})</span>
                </button>
              );
            })}
          </div>

          {/* Refine within results */}
          <div className="relative sm:ml-auto sm:w-64">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ergo-muted" />
            <input
              type="text"
              placeholder="Refine results..."
              value={refineQuery}
              onChange={e => setRefineQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 bg-ergo-dark border border-ergo-orange/20 rounded-full font-mono text-xs focus:outline-none focus:border-ergo-orange transition-colors"
            />
          </div>
        </div>
      )}

      {/* No Query */}
      {!query && (
        <div className="text-center py-12">
          <Search className="w-16 h-16 text-ergo-muted mx-auto mb-4" />
          <p className="font-mono text-ergo-muted">Enter a search query to find content</p>
        </div>
      )}

      {/* Loading */}
      {isSearching && (
        <div className="text-center py-12">
          <div className="animate-spin w-8 h-8 border-2 border-ergo-orange border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="font-mono text-ergo-muted">Searching...</p>
        </div>
      )}

      {/* Results - 4 column grid */}
      {!isSearching && query && filteredResults.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {filteredResults.map((result, index) => {
            const r = result as Record<string, unknown>;
            const speakers = r.speakers as string[] | undefined;
            return (
              <Link
                key={`${result.searchType}-${r.id || r.slug || r.name}-${index}`}
                to={getLink(result)}
                className="block bg-ergo-dark border border-ergo-orange/20 rounded-lg p-4 hover:border-ergo-orange/50 transition-all"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1.5 bg-ergo-darker rounded">
                    {getIcon(result.searchType)}
                  </div>
                  <span className="text-xs font-mono text-ergo-muted uppercase">
                    {getLabel(result)}
                  </span>
                  {r.date && (
                    <span className="text-xs font-mono text-ergo-muted ml-auto">
                      {String(r.date)}
                    </span>
                  )}
                </div>
                <h3 className="font-mono text-sm font-semibold text-ergo-orange mb-2 line-clamp-2">
                  {String(r.title || r.name || r.question || '')}
                </h3>
                {(r.description || r.role || r.bio) && (
                  <p className="text-ergo-light/60 text-xs line-clamp-2">
                    {String(r.description || r.role || r.bio)}
                  </p>
                )}
                {speakers && speakers.length > 0 && (
                  <p className="text-xs font-mono text-ergo-muted mt-2 line-clamp-1">
                    {speakers.filter(Boolean).join(', ')}
                  </p>
                )}
              </Link>
            );
          })}
        </div>
      )}

      {/* No Results — from search or from filtering */}
      {!isSearching && query && results.length > 0 && filteredResults.length === 0 && !showChatSection && (
        <div className="text-center py-12">
          <Filter className="w-12 h-12 text-ergo-muted mx-auto mb-4" />
          <h2 className="text-xl font-mono font-semibold mb-2">No matching results</h2>
          <p className="text-ergo-muted font-mono mb-4">
            Try adjusting your filters or refine text
          </p>
          <button
            onClick={() => { setActiveTypes(new Set()); setRefineQuery(''); }}
            className="px-4 py-2 bg-ergo-orange/20 hover:bg-ergo-orange/30 border border-ergo-orange/50 rounded font-mono text-sm transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* No Results — from search itself */}
      {!isSearching && query && results.length === 0 && telegramResults.length === 0 && (
        <div className="text-center py-12">
          <Search className="w-16 h-16 text-ergo-muted mx-auto mb-4" />
          <h2 className="text-xl font-mono font-semibold mb-2">No results found</h2>
          <p className="text-ergo-muted font-mono mb-6">
            Try different keywords or browse by category
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/calls"
              className="px-4 py-2 bg-ergo-dark border border-ergo-orange/30 rounded font-mono text-sm hover:border-ergo-orange transition-colors"
            >
              Browse Calls
            </Link>
            <Link
              to="/topics"
              className="px-4 py-2 bg-ergo-dark border border-ergo-orange/30 rounded font-mono text-sm hover:border-ergo-orange transition-colors"
            >
              Browse Topics
            </Link>
            <Link
              to="/telegram"
              className="px-4 py-2 bg-ergo-dark border border-ergo-orange/30 rounded font-mono text-sm hover:border-ergo-orange transition-colors"
            >
              Browse Chat Archive
            </Link>
          </div>
        </div>
      )}

      {/* Chat Archive Results */}
      {!isSearching && query && showChatSection && (
        <div className="mt-8">
          <div className="flex items-center gap-3 mb-4">
            <MessageSquare className="w-5 h-5 text-purple-400" />
            <h2 className="text-xl font-bold font-mono text-purple-400">Chat Archive</h2>
            <span className="font-mono text-sm text-ergo-muted">
              {telegramResults.length} result{telegramResults.length !== 1 ? 's' : ''}
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {telegramResults.slice(0, 20).map((result, i) => (
              <TelegramResultCard key={`tg-${result.id}-${i}`} result={result} />
            ))}
          </div>
          {telegramResults.length > 20 && (
            <p className="mt-4 text-sm font-mono text-ergo-muted text-center">
              Showing 20 of {telegramResults.length} chat results.{' '}
              <Link to="/telegram" className="text-purple-400 hover:text-purple-300">Browse Chat Archive →</Link>
            </p>
          )}
        </div>
      )}

    </div>
  );
}
