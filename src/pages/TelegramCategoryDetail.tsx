import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Loader2, MessageSquare, Hash, ArrowUpDown } from 'lucide-react';
import { fetchTelegramTopicsIndex, fetchTelegramSearchIndex } from '../services/dataService';
import type { TelegramCategoryData, TelegramSearchEntry } from '../types';

function periodLabel(period: string): string {
  const monthly = /^\d{4}-\d{2}$/.test(period);
  if (monthly) {
    const [year, month] = period.split('-');
    const d = new Date(parseInt(year), parseInt(month) - 1, 1);
    return d.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  }
  const m = period.match(/^(\d{4})-W(\d+)([a-z]?)$/);
  if (!m) return period;
  return `Week ${parseInt(m[2])} · ${m[1]}${m[3] ? ` (${m[3].toUpperCase()})` : ''}`;
}

export default function TelegramCategoryDetail() {
  const { category } = useParams<{ category: string }>();
  const [searchParams] = useSearchParams();

  const [catData, setCatData] = useState<TelegramCategoryData | null>(null);
  const [searchEntries, setSearchEntries] = useState<TelegramSearchEntry[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTerms, setSelectedTerms] = useState<Set<string>>(() => {
    const term = searchParams.get('term');
    return term ? new Set([term.toLowerCase()]) : new Set();
  });
  const [sortDir, setSortDir] = useState<'desc' | 'asc'>('desc');
  const [channelFilter, setChannelFilter] = useState<'both' | 'general' | 'developer'>('both');

  useEffect(() => {
    if (!category) return;
    Promise.all([
      fetchTelegramTopicsIndex(),
      fetchTelegramSearchIndex(),
    ]).then(([idx, entries]) => {
      const cat = idx.categories[category] ?? null;
      setCatData(cat);
      setSearchEntries(entries);
      // Clear pre-selected terms that don't actually appear in any segment
      if (cat) {
        const catTerms = new Set(cat.key_terms.map((t: string) => t.toLowerCase()));
        const inSegments = new Set(
          entries
            .filter((e: { key_terms: string[] }) => e.key_terms.some((t: string) => catTerms.has(t.toLowerCase())))
            .flatMap((e: { key_terms: string[] }) => e.key_terms.map((t: string) => t.toLowerCase()))
        );
        setSelectedTerms(prev => new Set([...prev].filter(t => inSegments.has(t))));
      }
    }).catch(console.error)
      .finally(() => setIsLoading(false));
  }, [category]);

  // Build lowercase lookup set of this category's key_terms
  const catTermsLower = useMemo(() => {
    if (!catData) return new Set<string>();
    return new Set(catData.key_terms.map(t => t.toLowerCase()));
  }, [catData]);

  // Filter entries: must share at least one key_term with the category
  const matchingEntries = useMemo(() => {
    if (!searchEntries || !catData) return [];
    return searchEntries.filter(e => e.key_terms.some(t => catTermsLower.has(t.toLowerCase())));
  }, [searchEntries, catData, catTermsLower]);

  // Only show chips for terms that actually appear in matching segments
  const usableTerms = useMemo(() => {
    if (!catData) return [];
    const inSegments = new Set(matchingEntries.flatMap(e => e.key_terms.map(t => t.toLowerCase())));
    return catData.key_terms.filter(t => inSegments.has(t.toLowerCase()));
  }, [catData, matchingEntries]);

  // Apply term filter, channel filter, and sort
  const filteredEntries = useMemo(() => {
    let entries = matchingEntries;
    if (selectedTerms.size > 0) {
      entries = entries.filter(e => e.key_terms.some(t => selectedTerms.has(t.toLowerCase())));
    }
    if (channelFilter !== 'both') {
      entries = entries.filter(e => e.channel === channelFilter);
    }
    return [...entries].sort((a, b) =>
      sortDir === 'desc'
        ? b.period.localeCompare(a.period)
        : a.period.localeCompare(b.period)
    );
  }, [matchingEntries, selectedTerms, channelFilter, sortDir]);

  const toggleTerm = (term: string) => {
    const lower = term.toLowerCase();
    setSelectedTerms(prev => {
      const next = new Set(prev);
      next.has(lower) ? next.delete(lower) : next.add(lower);
      return next;
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-ergo-orange animate-spin" />
      </div>
    );
  }

  if (!catData) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="font-mono text-ergo-muted">Category not found.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <Helmet><title>{catData.label} — Chat Topics — Ergo Knowledge Base</title></Helmet>

      <Link
        to="/topics"
        className="inline-flex items-center gap-2 font-mono text-sm text-ergo-muted hover:text-ergo-orange transition-colors mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Topics Browser
      </Link>

      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1">
          <MessageSquare className="w-5 h-5 text-purple-400" />
          <span className="font-mono text-xs text-purple-400/70 uppercase tracking-wider">Chat Category</span>
        </div>
        <h1 className="text-3xl font-bold font-mono text-purple-300 mb-2">{catData.label}</h1>
        <p className="font-mono text-sm text-ergo-muted">
          {matchingEntries.length} segment{matchingEntries.length !== 1 ? 's' : ''} · {catData.topic_count} discussions ·{' '}
          {catData.channels.join(', ')}
        </p>
      </div>

      {/* Key terms filter chips */}
      <div className="bg-ergo-dark border border-purple-500/20 rounded-lg p-4 mb-6">
        <div className="flex items-center gap-2 mb-3">
          <Hash className="w-4 h-4 text-purple-400" />
          <span className="font-mono text-xs text-purple-400 uppercase tracking-wider">Filter by key term</span>
          {selectedTerms.size > 0 && (
            <button
              onClick={() => setSelectedTerms(new Set())}
              className="ml-auto text-xs font-mono text-ergo-muted hover:text-ergo-light transition-colors"
            >
              Clear ({selectedTerms.size})
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {usableTerms.map(term => {
            const active = selectedTerms.has(term.toLowerCase());
            return (
              <button
                key={term}
                onClick={() => toggleTerm(term)}
                className={`text-xs font-mono px-2.5 py-1 rounded border transition-all ${
                  active
                    ? 'bg-purple-500/30 text-purple-200 border-purple-500/60'
                    : 'bg-ergo-darker text-ergo-muted border-ergo-orange/10 hover:border-purple-500/40 hover:text-ergo-light'
                }`}
              >
                {term}
              </button>
            );
          })}
        </div>
      </div>

      {/* Controls: channel toggle + sort */}
      <div className="flex flex-wrap items-center gap-3 mb-4">
        {/* Channel filter */}
        <div className="flex rounded overflow-hidden border border-ergo-orange/30 text-xs font-mono">
          {(['both', 'general', 'developer'] as const).map(ch => (
            <button
              key={ch}
              onClick={() => setChannelFilter(ch)}
              className={`px-3 py-1.5 transition-colors ${
                channelFilter === ch
                  ? 'bg-purple-500/40 text-purple-200'
                  : 'hover:bg-ergo-orange/10 text-ergo-muted'
              }`}
            >
              {ch === 'both' ? 'Both' : ch.charAt(0).toUpperCase() + ch.slice(1)}
            </button>
          ))}
        </div>

        {/* Sort direction */}
        <button
          onClick={() => setSortDir(d => d === 'desc' ? 'asc' : 'desc')}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded border border-ergo-orange/30 text-xs font-mono text-ergo-muted hover:text-ergo-light hover:border-ergo-orange/60 transition-colors"
        >
          <ArrowUpDown className="w-3.5 h-3.5" />
          {sortDir === 'desc' ? 'Newest first' : 'Oldest first'}
        </button>
      </div>

      {/* Results count */}
      <p className="font-mono text-xs text-ergo-muted mb-4">
        {selectedTerms.size > 0
          ? `Showing ${filteredEntries.length} of ${matchingEntries.length} segments`
          : `${matchingEntries.length} matching segments`}
      </p>

      {/* Entry grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {filteredEntries.map(entry => (
          <Link
            key={entry.id}
            to={`/telegram/${entry.channel}/${entry.period}`}
            className="block bg-ergo-dark border border-purple-500/15 rounded-lg p-4 hover:border-purple-500/40 transition-colors"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-ergo-muted uppercase">{entry.channel} · {entry.type}</span>
              <span className="text-xs font-mono text-ergo-muted">{entry.period}</span>
            </div>
            <div className="font-mono text-sm font-semibold text-purple-200 mb-2 leading-snug">
              {periodLabel(entry.period)}
            </div>
            {entry.excerpt && (
              <p className="text-xs text-ergo-light/60 line-clamp-2 mb-3">{entry.excerpt}</p>
            )}
            <div className="flex flex-wrap gap-1">
              {entry.key_terms
                .filter(t => catTermsLower.has(t.toLowerCase()))
                .slice(0, 5)
                .map(t => (
                  <span key={t} className={`text-xs font-mono px-1.5 py-0.5 rounded ${
                    selectedTerms.has(t.toLowerCase())
                      ? 'bg-purple-500/30 text-purple-200'
                      : 'bg-ergo-darker text-ergo-muted'
                  }`}>
                    {t}
                  </span>
                ))}
            </div>
          </Link>
        ))}
      </div>

      {filteredEntries.length === 0 && (
        <div className="text-center py-12">
          <p className="font-mono text-ergo-muted">No segments match the selected terms.</p>
        </div>
      )}
    </div>
  );
}
