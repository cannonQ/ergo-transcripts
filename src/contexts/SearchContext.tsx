import React, { createContext, useContext, useState, useEffect } from 'react';
import Fuse from 'fuse.js';
import { mockCalls, mockQA, mockDecisions, mockTopics } from '../data/mockData';

interface SearchResult {
  type: 'call' | 'qa' | 'decision' | 'topic';
  item: any;
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
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [fuse, setFuse] = useState<any>(null);

  useEffect(() => {
    // Initialize Fuse.js with all searchable data
    const searchableData = [
      ...mockCalls.map(item => ({ type: 'call', ...item })),
      ...mockQA.map(item => ({ type: 'qa', ...item })),
      ...mockDecisions.map(item => ({ type: 'decision', ...item })),
      ...mockTopics.map(item => ({ type: 'topic', ...item })),
    ];

    const fuseInstance = new Fuse(searchableData, {
      keys: ['title', 'summary', 'question', 'answer', 'description', 'name', 'content'],
      threshold: 0.3,
      includeScore: true,
    });

    setFuse(fuseInstance);
  }, []);

  const search = (searchQuery: string) => {
    if (!fuse || !searchQuery.trim()) {
      setResults([]);
      return;
    }

    setIsSearching(true);
    const searchResults = fuse.search(searchQuery);
    
    setResults(
      searchResults.map((result: any) => ({
        type: result.item.type,
        item: result.item,
        score: result.score,
      }))
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
