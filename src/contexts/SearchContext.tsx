import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import Fuse from 'fuse.js';
import { useData } from './DataContext';

import type { CallSummary, Topic, Speaker } from '../types';

type SearchableItem =
  | (CallSummary & { searchType: 'call' })
  | (Topic & { searchType: 'topic' })
  | (Speaker & { searchType: 'speaker' });

interface SearchResult extends Record<string, unknown> {
  searchType: 'call' | 'topic' | 'speaker';
  score?: number;
}

interface SearchContextType {
  query: string;
  setQuery: (query: string) => void;
  results: SearchResult[];
  isSearching: boolean;
  search: (query: string) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const { calls, topics, speakers, isInitialized } = useData();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  // Create Fuse instance when data is ready
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

  const search = (searchQuery: string) => {
    if (!fuse || !searchQuery.trim()) {
      setResults([]);
      return;
    }

    setIsSearching(true);
    const searchResults = fuse.search(searchQuery);

    setResults(
      searchResults.map((result) => ({
        ...result.item,
        score: result.score,
      } as SearchResult))
    );
    setIsSearching(false);
  };

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      search(query);
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [query, fuse]);

  return (
    <SearchContext.Provider value={{ query, setQuery, results, isSearching, search }}>
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
