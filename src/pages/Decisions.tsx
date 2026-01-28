import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Gavel, GitBranch, HelpCircle, Filter, Calendar, User, Loader2 } from 'lucide-react';
import CorrectionButton from '../components/CorrectionButton';
import { useData } from '../contexts/DataContext';
import type { AggregatedDecision } from '../types';

const typeConfig: Record<string, { icon: any; color: string; bg: string; label: string }> = {
  decision: { icon: Gavel, color: 'text-term-green', bg: 'bg-term-green/20', label: 'Decision' },
  commitment: { icon: GitBranch, color: 'text-term-cyan', bg: 'bg-term-cyan/20', label: 'Commitment' },
  open_question: { icon: HelpCircle, color: 'text-term-amber', bg: 'bg-term-amber/20', label: 'Open Question' },
};

const statusConfig: Record<string, { color: string; bg: string }> = {
  active: { color: 'text-term-green', bg: 'bg-term-green/20' },
  completed: { color: 'text-term-cyan', bg: 'bg-term-cyan/20' },
  pending: { color: 'text-term-amber', bg: 'bg-term-amber/20' },
  superseded: { color: 'text-ergo-muted', bg: 'bg-ergo-muted/20' },
  unresolved: { color: 'text-term-magenta', bg: 'bg-term-magenta/20' },
};

export default function Decisions() {
  const { loadAllDecisions, allDecisions, isLoading } = useData();
  const [decisionsList, setDecisionsList] = useState<AggregatedDecision[]>([]);
  const [isLoadingDecisions, setIsLoadingDecisions] = useState(true);

  const [filterType, setFilterType] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [filterSignificance, setFilterSignificance] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('newest');
  const [showFilters, setShowFilters] = useState(false);

  // Load all decisions on mount
  useEffect(() => {
    if (allDecisions) {
      setDecisionsList(allDecisions);
      setIsLoadingDecisions(false);
    } else {
      setIsLoadingDecisions(true);
      loadAllDecisions().then(data => {
        setDecisionsList(data);
        setIsLoadingDecisions(false);
      }).catch(() => {
        setIsLoadingDecisions(false);
      });
    }
  }, [allDecisions, loadAllDecisions]);

  const filteredDecisions = decisionsList
    .filter(decision => {
      if (filterType !== 'all' && decision.type !== filterType) return false;
      if (filterStatus !== 'all' && decision.status !== filterStatus) return false;
      if (filterSignificance !== 'all' && decision.significance !== filterSignificance) return false;
      return true;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'oldest':
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case 'speaker':
          return a.speaker.localeCompare(b.speaker);
        case 'topic':
          return a.topic.localeCompare(b.topic);
        default:
          return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
    });

  const stats = {
    decisions: decisionsList.filter(d => d.type === 'decision').length,
    commitments: decisionsList.filter(d => d.type === 'commitment').length,
    openQuestions: decisionsList.filter(d => d.type === 'open_question').length,
  };

  if (isLoading || isLoadingDecisions) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-ergo-orange animate-spin mx-auto mb-4" />
          <p className="font-mono text-ergo-muted">Loading decisions...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet><title>Decisions — Ergo Knowledge Base</title></Helmet>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold font-mono text-gradient mb-2">
          Decisions & Commitments
        </h1>
        <p className="text-ergo-muted font-mono">
          Track governance decisions, commitments, and open questions from community calls
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-ergo-dark border border-term-green/30 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Gavel className="w-5 h-5 text-term-green" />
            <span className="font-mono text-sm text-ergo-muted">Decisions</span>
          </div>
          <span className="text-2xl font-bold font-mono text-term-green">{stats.decisions}</span>
        </div>
        <div className="bg-ergo-dark border border-term-cyan/30 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <GitBranch className="w-5 h-5 text-term-cyan" />
            <span className="font-mono text-sm text-ergo-muted">Commitments</span>
          </div>
          <span className="text-2xl font-bold font-mono text-term-cyan">{stats.commitments}</span>
        </div>
        <div className="bg-ergo-dark border border-term-amber/30 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <HelpCircle className="w-5 h-5 text-term-amber" />
            <span className="font-mono text-sm text-ergo-muted">Open Questions</span>
          </div>
          <span className="text-2xl font-bold font-mono text-term-amber">{stats.openQuestions}</span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <aside className={`lg:w-64 ${showFilters ? 'block' : 'hidden lg:block'}`}>
          <div className="bg-ergo-dark border border-ergo-orange/20 rounded-lg p-6 sticky top-24">
            <h3 className="font-mono font-semibold text-ergo-orange mb-4 flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Filters
            </h3>

            {/* Type Filter */}
            <div className="mb-6">
              <label className="block text-sm font-mono text-ergo-muted mb-2">Type</label>
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="w-full bg-ergo-darker border border-ergo-orange/30 rounded px-3 py-2 font-mono text-sm focus:outline-none focus:border-ergo-orange"
              >
                <option value="all">All Types</option>
                <option value="decision">Decisions</option>
                <option value="commitment">Commitments</option>
                <option value="open_question">Open Questions</option>
              </select>
            </div>

            {/* Status Filter */}
            <div className="mb-6">
              <label className="block text-sm font-mono text-ergo-muted mb-2">Status</label>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full bg-ergo-darker border border-ergo-orange/30 rounded px-3 py-2 font-mono text-sm focus:outline-none focus:border-ergo-orange"
              >
                <option value="all">All Statuses</option>
                <option value="active">Active</option>
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
                <option value="unresolved">Unresolved</option>
              </select>
            </div>

            {/* Significance Filter */}
            <div className="mb-6">
              <label className="block text-sm font-mono text-ergo-muted mb-2">Significance</label>
              <select
                value={filterSignificance}
                onChange={(e) => setFilterSignificance(e.target.value)}
                className="w-full bg-ergo-darker border border-ergo-orange/30 rounded px-3 py-2 font-mono text-sm focus:outline-none focus:border-ergo-orange"
              >
                <option value="all">All</option>
                <option value="major">Major</option>
                <option value="minor">Minor</option>
              </select>
            </div>

            {/* Clear Filters */}
            {(filterType !== 'all' || filterStatus !== 'all' || filterSignificance !== 'all') && (
              <button
                onClick={() => {
                  setFilterType('all');
                  setFilterStatus('all');
                  setFilterSignificance('all');
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
          {/* Sort & Mobile Filter Toggle */}
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
                <option value="speaker">Speaker</option>
                <option value="topic">Topic</option>
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="font-mono text-sm text-ergo-muted">
              Showing {filteredDecisions.length} of {decisionsList.length} items
            </p>
          </div>

          {/* Decision Cards */}
          <div className="space-y-4">
            {filteredDecisions.map(decision => {
              const config = typeConfig[decision.type] || typeConfig.decision;
              const TypeIcon = config.icon;
              const typeStyle = config;
              const statusStyle = statusConfig[decision.status] || statusConfig.active;

              return (
                <div
                  key={decision.id}
                  className="bg-ergo-dark border border-ergo-orange/20 rounded-lg p-6 hover:border-ergo-orange/40 transition-all"
                >
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded ${typeStyle.bg}`}>
                        <TypeIcon className={`w-5 h-5 ${typeStyle.color}`} />
                      </div>
                      <div>
                        <span className={`text-xs font-mono ${typeStyle.color} uppercase`}>
                          {typeStyle.label}
                        </span>
                        {decision.significance === 'major' && (
                          <span className="ml-2 text-xs font-mono text-ergo-orange bg-ergo-orange/20 px-2 py-0.5 rounded">
                            MAJOR
                          </span>
                        )}
                      </div>
                    </div>
                    <span className={`text-xs font-mono px-2 py-1 rounded ${statusStyle.bg} ${statusStyle.color}`}>
                      {decision.status.toUpperCase()}
                    </span>
                  </div>

                  {/* Title & Content */}
                  <h3 className="font-mono text-lg font-semibold mb-2">{decision.title}</h3>
                  <p className="text-ergo-light/80 mb-4">{decision.content}</p>

                  {decision.context && (
                    <div className="bg-ergo-darker border-l-2 border-ergo-orange/50 p-3 mb-4">
                      <p className="text-sm text-ergo-muted italic">{decision.context}</p>
                    </div>
                  )}

                  {decision.quote && (
                    <blockquote className="bg-ergo-darker border-l-2 border-term-green/50 p-3 mb-4">
                      <p className="text-sm text-ergo-light/80 italic">"{decision.quote}"</p>
                    </blockquote>
                  )}

                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-4 text-sm font-mono text-ergo-muted">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <Link
                        to={`/speakers/${encodeURIComponent(decision.speaker)}`}
                        className="hover:text-ergo-orange transition-colors"
                      >
                        {decision.speaker}
                      </Link>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(decision.date).toLocaleDateString()}</span>
                    </div>
                    {decision.topic && (
                      <Link
                        to={`/topics/${decision.topic.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-ergo-orange hover:underline"
                      >
                        #{decision.topic}
                      </Link>
                    )}
                    <Link
                      to={`/calls/${decision.call_id}`}
                      className="text-term-cyan hover:underline"
                    >
                      View Call
                    </Link>
                    <CorrectionButton pageType="Decision" pageTitle={decision.title} />
                  </div>

                  {/* Owner & Timeline for commitments */}
                  {(decision.owner || decision.timeline) && (
                    <div className="mt-4 pt-4 border-t border-ergo-orange/10 flex flex-wrap gap-4 text-sm font-mono">
                      {decision.owner && (
                        <div>
                          <span className="text-ergo-muted">Owner: </span>
                          <span className="text-term-green">{decision.owner}</span>
                        </div>
                      )}
                      {decision.timeline && (
                        <div>
                          <span className="text-ergo-muted">Timeline: </span>
                          <span className="text-term-amber">{decision.timeline}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {filteredDecisions.length === 0 && (
            <div className="text-center py-12">
              <p className="font-mono text-ergo-muted">No items match your filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
