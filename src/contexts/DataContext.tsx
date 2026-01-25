import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import type {
  Index,
  IndexStats,
  CallSummary,
  CallMeta,
  QAData,
  DecisionsData,
  Topic,
  Speaker,
  AggregatedDecision,
  AggregatedQA
} from '../types';
import {
  fetchIndex,
  fetchSpeakers,
  fetchTopics,
  fetchCallMeta,
  fetchCallSummary,
  fetchCallTranscript,
  fetchCallQA,
  fetchCallDecisions,
  fetchCallMarketing,
  fetchAllQA,
  fetchAllDecisions,
  findCallById
} from '../services/dataService';

interface DataContextType {
  // Core data
  index: Index | null;
  stats: IndexStats | null;
  calls: CallSummary[];
  speakers: Speaker[];
  topics: Topic[];

  // Loading states
  isLoading: boolean;
  isInitialized: boolean;
  error: string | null;

  // Aggregated data (lazy loaded)
  allQA: AggregatedQA[] | null;
  allDecisions: AggregatedDecision[] | null;
  loadAllQA: () => Promise<AggregatedQA[]>;
  loadAllDecisions: () => Promise<AggregatedDecision[]>;

  // Call detail loaders
  getCallById: (id: string) => Promise<{ call: CallMeta; filePrefix: string } | null>;
  loadCallSummary: (filePrefix: string) => Promise<string>;
  loadCallTranscript: (filePrefix: string) => Promise<string>;
  loadCallQA: (filePrefix: string) => Promise<QAData>;
  loadCallDecisions: (filePrefix: string) => Promise<DecisionsData>;
  loadCallMarketing: (filePrefix: string) => Promise<string>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({ children }: { children: React.ReactNode }) {
  const [index, setIndex] = useState<Index | null>(null);
  const [speakers, setSpeakers] = useState<Speaker[]>([]);
  const [topics, setTopics] = useState<Topic[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isInitialized, setIsInitialized] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [allQA, setAllQA] = useState<AggregatedQA[] | null>(null);
  const [allDecisions, setAllDecisions] = useState<AggregatedDecision[] | null>(null);

  // Initialize core data on mount
  useEffect(() => {
    async function init() {
      try {
        setIsLoading(true);
        const [indexData, speakersData, topicsData] = await Promise.all([
          fetchIndex(),
          fetchSpeakers(),
          fetchTopics()
        ]);
        setIndex(indexData);
        setSpeakers(speakersData);
        setTopics(topicsData);
        setIsInitialized(true);
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Failed to load data');
        console.error('Failed to initialize data:', e);
      } finally {
        setIsLoading(false);
      }
    }
    init();
  }, []);

  // Lazy load all Q&A
  const loadAllQA = useCallback(async (): Promise<AggregatedQA[]> => {
    if (allQA) return allQA;
    const data = await fetchAllQA();
    setAllQA(data);
    return data;
  }, [allQA]);

  // Lazy load all decisions
  const loadAllDecisions = useCallback(async (): Promise<AggregatedDecision[]> => {
    if (allDecisions) return allDecisions;
    const data = await fetchAllDecisions();
    setAllDecisions(data);
    return data;
  }, [allDecisions]);

  // Get call by ID
  const getCallById = useCallback(async (id: string) => {
    return findCallById(id);
  }, []);

  // Load call summary
  const loadCallSummary = useCallback(async (filePrefix: string) => {
    return fetchCallSummary(filePrefix);
  }, []);

  // Load call transcript
  const loadCallTranscript = useCallback(async (filePrefix: string) => {
    return fetchCallTranscript(filePrefix);
  }, []);

  // Load call Q&A
  const loadCallQA = useCallback(async (filePrefix: string) => {
    return fetchCallQA(filePrefix);
  }, []);

  // Load call decisions
  const loadCallDecisions = useCallback(async (filePrefix: string) => {
    return fetchCallDecisions(filePrefix);
  }, []);

  // Load call marketing
  const loadCallMarketing = useCallback(async (filePrefix: string) => {
    return fetchCallMarketing(filePrefix);
  }, []);

  const value: DataContextType = {
    index,
    stats: index?.stats || null,
    calls: index?.calls || [],
    speakers,
    topics,
    isLoading,
    isInitialized,
    error,
    allQA,
    allDecisions,
    loadAllQA,
    loadAllDecisions,
    getCallById,
    loadCallSummary,
    loadCallTranscript,
    loadCallQA,
    loadCallDecisions,
    loadCallMarketing,
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
}
