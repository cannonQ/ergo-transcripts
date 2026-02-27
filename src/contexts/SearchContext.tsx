import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import Fuse from 'fuse.js';
import { useData } from './DataContext';
import { fetchTelegramSearchIndex } from '../services/dataService';

import type { CallSummary, Topic, Speaker, TelegramSearchEntry } from '../types';

type SearchableItem =
  | (CallSummary & { searchType: 'call' })
  | (Topic & { searchType: 'topic' })
  | (Speaker & { searchType: 'speaker' });

export interface SearchResult extends Record<string, unknown> {
  searchType: 'call' | 'topic' | 'speaker' | 'telegram';
  score?: number;
}

export type TelegramSearchResult = TelegramSearchEntry & {
  searchType: 'telegram';
  score?: number;
};

interface SearchContextType {
  query: string;
  setQuery: (query: string) => void;
  results: SearchResult[];
  telegramResults: TelegramSearchResult[];
  isSearching: boolean;
  search: (query: string) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const { calls, topics, speakers, isInitialized } = useData();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [telegramResults, setTelegramResults] = useState<TelegramSearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [telegramSearchIndex, setTelegramSearchIndex] = useState<TelegramSearchEntry[] | null>(null);

  // Create Fuse instance for calls/topics/speakers when data is ready
  const fuse = useMemo(() => {
    if (!isInitialized) return null;

    const searchableData = [
      ...calls.map(item => ({ ...item, searchType: 'call' as const })),
      ...topics.map(item => ({ ...item, searchType: 'topic' as const })),
      ...speakers.map(item => ({ ...item, searchType: 'speaker' as const })),
    ];

    return new Fuse(searchableData, {
      keys: [
        'title',
        'name',
        'description',
        'role',
        'bio',
        { name: 'speakers', weight: 0.5 },
        { name: 'topics', weight: 0.5 },
        { name: 'top_topics', weight: 0.5 },
        { name: 'key_speakers', weight: 0.5 },
      ],
      threshold: 0.3,
      includeScore: true,
    });
  }, [calls, topics, speakers, isInitialized]);

  // Fuse instance for telegram entries (lazy — built when index is loaded)
  const telegramFuse = useMemo(() => {
    if (!telegramSearchIndex) return null;
    return new Fuse(telegramSearchIndex, {
      keys: [
        { name: 'topics', weight: 0.8 },
        { name: 'key_terms', weight: 0.7 },
        { name: 'participants', weight: 0.6 },
        { name: 'excerpt', weight: 0.4 },
        { name: 'period', weight: 0.3 },
      ],
      threshold: 0.3,
      includeScore: true,
    });
  }, [telegramSearchIndex]);

  const search = (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      setTelegramResults([]);
      return;
    }

    setIsSearching(true);

    // Search calls/topics/speakers immediately
    if (fuse) {
      const searchResults = fuse.search(searchQuery);
      setResults(
        searchResults.map((result) => ({
          ...result.item,
          score: result.score,
        } as SearchResult))
      );
    }

    // Search telegram entries if index is loaded, otherwise kick off load
    if (telegramFuse) {
      const tResults = telegramFuse.search(searchQuery);
      setTelegramResults(
        tResults.map((result) => ({
          ...result.item,
          searchType: 'telegram' as const,
          score: result.score,
        }))
      );
    } else if (!telegramSearchIndex) {
      // Load telegram search index in background on first search
      fetchTelegramSearchIndex().then((index) => {
        setTelegramSearchIndex(index);
        // Results will re-run via telegramFuse useMemo → useEffect below
      }).catch(console.error);
    }

    setIsSearching(false);
  };

  // Re-run telegram search when the index becomes available
  useEffect(() => {
    if (telegramFuse && query.trim()) {
      const tResults = telegramFuse.search(query);
      setTelegramResults(
        tResults.map((result) => ({
          ...result.item,
          searchType: 'telegram' as const,
          score: result.score,
        }))
      );
    }
  }, [telegramFuse, query]);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      search(query);
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [query, fuse]);

  return (
    <SearchContext.Provider value={{ query, setQuery, results, telegramResults, isSearching, search }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
}
