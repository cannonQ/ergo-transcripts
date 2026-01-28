import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, Users, Youtube, ExternalLink, Copy, ChevronRight, Loader2 } from 'lucide-react';
import TabNavigation from '../components/TabNavigation';
import TopicTag from '../components/TopicTag';
import CorrectionButton from '../components/CorrectionButton';
import { useData } from '../contexts/DataContext';
import type { CallMeta, QAData, DecisionsData } from '../types';

export default function CallDetail() {
  const { id } = useParams();
  const { calls, getCallById, loadCallSummary, loadCallTranscript, loadCallQA, loadCallDecisions, loadCallMarketing } = useData();

  const [activeTab, setActiveTab] = useState('summary');
  const [copied, setCopied] = useState(false);

  // Call metadata
  const [callMeta, setCallMeta] = useState<CallMeta | null>(null);
  const [filePrefix, setFilePrefix] = useState<string>('');
  const [isLoadingMeta, setIsLoadingMeta] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Tab content (lazy loaded)
  const [summary, setSummary] = useState<string | null>(null);
  const [transcript, setTranscript] = useState<string | null>(null);
  const [qaData, setQAData] = useState<QAData | null>(null);
  const [decisionsData, setDecisionsData] = useState<DecisionsData | null>(null);
  const [marketing, setMarketing] = useState<string | null>(null);

  // Loading states per tab
  const [loadingTab, setLoadingTab] = useState<string | null>(null);

  // Load call metadata
  useEffect(() => {
    if (!id) return;

    async function loadCall() {
      setIsLoadingMeta(true);
      setError(null);
      try {
        const result = await getCallById(id);
        if (result) {
          setCallMeta(result.call);
          setFilePrefix(result.filePrefix);
        } else {
          setError('Call not found');
        }
      } catch (e) {
        setError('Failed to load call');
      } finally {
        setIsLoadingMeta(false);
      }
    }
    loadCall();
  }, [id, getCallById]);

  // Load tab content when tab changes
  useEffect(() => {
    if (!filePrefix) return;

    async function loadTabContent() {
      setLoadingTab(activeTab);
      try {
        switch (activeTab) {
          case 'summary':
            if (!summary) {
              const data = await loadCallSummary(filePrefix);
              setSummary(data);
            }
            break;
          case 'transcript':
            if (!transcript) {
              const data = await loadCallTranscript(filePrefix);
              setTranscript(data);
            }
            break;
          case 'qa':
            if (!qaData) {
              const data = await loadCallQA(filePrefix);
              setQAData(data);
            }
            break;
          case 'decisions':
            if (!decisionsData) {
              const data = await loadCallDecisions(filePrefix);
              setDecisionsData(data);
            }
            break;
          case 'marketing':
            if (!marketing) {
              const data = await loadCallMarketing(filePrefix);
              setMarketing(data);
            }
            break;
        }
      } catch (e) {
        console.error(`Failed to load ${activeTab}:`, e);
      } finally {
        setLoadingTab(null);
      }
    }
    loadTabContent();
  }, [activeTab, filePrefix, summary, transcript, qaData, decisionsData, marketing,
      loadCallSummary, loadCallTranscript, loadCallQA, loadCallDecisions, loadCallMarketing]);

  const handleCopy = () => {
    if (!callMeta) return;
    const citation = `${callMeta.title} - Ergo Community Call (${callMeta.date}). Available at: https://ergokb.org/calls/${callMeta.id}`;
    navigator.clipboard.writeText(citation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (isLoadingMeta) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-ergo-orange animate-spin mx-auto mb-4" />
          <p className="font-mono text-ergo-muted">Loading call...</p>
        </div>
      </div>
    );
  }

  if (error || !callMeta) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-mono text-ergo-orange mb-4">Call not found</h1>
        <Link to="/calls" className="text-ergo-muted hover:text-ergo-orange font-mono">
          Back to Calls
        </Link>
      </div>
    );
  }

  const youtubeUrl = callMeta.media?.youtube || `https://youtube.com/watch?v=${callMeta.id}`;
  const speakersList = [...new Set(callMeta.speakers.filter(Boolean))];
  const topicsList = callMeta.topics || [];

  // Get related calls (other recent calls)
  const relatedCalls = calls.filter(c => c.id !== id).slice(0, 3);

  const tabs = [
    { id: 'summary', label: 'Summary' },
    { id: 'topics', label: 'Topics', count: topicsList.length },
    { id: 'qa', label: 'Q&A', count: callMeta.stats.qa_pairs },
    { id: 'decisions', label: 'Decisions', count: callMeta.stats.decisions + callMeta.stats.commitments },
    { id: 'transcript', label: 'Transcript' },
    { id: 'marketing', label: 'Marketing' },
  ];

  const renderTabContent = () => {
    if (loadingTab === activeTab) {
      return (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="w-8 h-8 text-ergo-orange animate-spin" />
        </div>
      );
    }

    switch (activeTab) {
      case 'summary':
        return (
          <div className="prose prose-invert max-w-none">
            <div className="bg-ergo-dark border border-ergo-orange/20 rounded-lg p-6">
              <h3 className="text-xl font-mono text-ergo-orange mb-4">Summary</h3>
              {summary ? (
                <div className="text-ergo-light/90 leading-relaxed whitespace-pre-wrap">
                  {summary}
                </div>
              ) : (
                <p className="text-ergo-muted">Loading summary...</p>
              )}
            </div>
          </div>
        );

      case 'topics':
        return (
          <div className="space-y-4">
            {topicsList.length === 0 ? (
              <p className="text-ergo-muted font-mono text-center py-8">No topics found</p>
            ) : (
              topicsList.map((topic, index) => (
                <div key={topic} className="bg-ergo-dark border border-ergo-orange/20 rounded-lg p-4 hover:border-ergo-orange/50 transition-all">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <h4 className="font-mono font-semibold text-ergo-orange">{topic}</h4>
                    </div>
                    <Link
                      to={`/topics/${topic.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-sm font-mono text-ergo-muted hover:text-ergo-orange"
                    >
                      View topic
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>
        );

      case 'qa':
        return (
          <div className="space-y-6">
            {qaData?.qa_pairs && qaData.qa_pairs.length > 0 ? (
              qaData.qa_pairs.map((qa, idx) => (
                <div key={qa.qa_id || idx} className="bg-ergo-dark border border-ergo-orange/20 rounded-lg p-6">
                  <div className="mb-3">
                    <span className="text-sm font-mono text-term-cyan">Q:</span>
                    <p className="mt-1 font-medium">{qa.question}</p>
                  </div>
                  <div className="mb-3">
                    <span className="text-sm font-mono text-term-green">A:</span>
                    <p className="mt-1 text-ergo-light/90">{qa.answer}</p>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono text-ergo-muted">
                    <span>{qa.responder} {qa.timestamp && `@ ${qa.timestamp}`}</span>
                    <span className="px-2 py-1 bg-ergo-darker rounded">
                      [{qa.category}]
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-ergo-muted font-mono text-center py-8">No Q&A pairs found</p>
            )}
          </div>
        );

      case 'decisions':
        return (
          <div className="space-y-4">
            {/* Decisions */}
            {decisionsData?.decisions?.map((decision) => (
              <div key={`decision-${decision.id}`} className="bg-ergo-dark border border-ergo-orange/20 rounded-lg p-6">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs font-mono px-2 py-1 rounded bg-blue-500/20 text-blue-400">
                    {decision.significance === 'major' ? 'MAJOR ' : ''}DECISION
                  </span>
                  <span className="text-xs font-mono text-ergo-muted">{decision.timestamp}</span>
                </div>
                <h3 className="font-mono font-semibold text-ergo-orange mb-2">{decision.decision}</h3>
                {decision.context && (
                  <p className="text-sm text-ergo-muted mb-2">Context: {decision.context}</p>
                )}
                {decision.quote && (
                  <blockquote className="text-sm text-ergo-light/80 border-l-2 border-ergo-orange/50 pl-3 mb-2 italic">
                    "{decision.quote}"
                  </blockquote>
                )}
                <div className="text-xs font-mono text-ergo-muted">
                  {decision.speaker} | Topic: {decision.topic}
                </div>
              </div>
            ))}

            {/* Commitments */}
            {decisionsData?.commitments?.map((commitment) => (
              <div key={`commitment-${commitment.id}`} className="bg-ergo-dark border border-ergo-orange/20 rounded-lg p-6">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs font-mono px-2 py-1 rounded bg-green-500/20 text-green-400">
                    COMMITMENT
                  </span>
                  <span className="text-xs font-mono text-ergo-muted">{commitment.timeline}</span>
                </div>
                <h3 className="font-mono font-semibold text-ergo-orange mb-2">{commitment.commitment}</h3>
                <div className="text-xs font-mono text-ergo-muted">
                  Owner: {commitment.owner} | Topic: {commitment.topic}
                </div>
              </div>
            ))}

            {/* Open Questions */}
            {decisionsData?.open_questions?.map((question) => (
              <div key={`question-${question.id}`} className="bg-ergo-dark border border-ergo-orange/20 rounded-lg p-6">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs font-mono px-2 py-1 rounded bg-yellow-500/20 text-yellow-400">
                    OPEN QUESTION
                  </span>
                </div>
                <h3 className="font-mono font-semibold text-ergo-orange mb-2">{question.question}</h3>
                <p className="text-sm text-ergo-muted mb-2">{question.context}</p>
                <div className="text-xs font-mono text-ergo-muted">
                  Raised by: {question.raised_by} | Topic: {question.topic}
                </div>
              </div>
            ))}

            {(!decisionsData?.decisions?.length && !decisionsData?.commitments?.length && !decisionsData?.open_questions?.length) && (
              <p className="text-ergo-muted font-mono text-center py-8">No decisions or commitments found</p>
            )}
          </div>
        );

      case 'transcript':
        return (
          <div className="bg-ergo-dark border border-ergo-orange/20 rounded-lg p-6">
            <div className="mb-4 p-3 bg-yellow-500/10 border border-yellow-500/30 rounded">
              <p className="text-sm font-mono text-yellow-400">
                Full transcript available. Click timestamps to jump to video.
              </p>
            </div>
            {transcript ? (
              <div className="font-mono text-sm whitespace-pre-wrap text-ergo-light/90 max-h-[600px] overflow-y-auto">
                {transcript.split(/(\[\d{1,2}:\d{2}(?::\d{2})?\])/).map((part, i) => {
                  const match = part.match(/^\[(\d{1,2}):(\d{2})(?::(\d{2}))?\]$/);
                  if (match) {
                    const mins = parseInt(match[1]);
                    const secs = parseInt(match[2]);
                    const hours = match[3] ? mins : 0;
                    const totalSeconds = match[3]
                      ? hours * 3600 + secs * 60 + parseInt(match[3])
                      : mins * 60 + secs;
                    return (
                      <a
                        key={i}
                        href={`${youtubeUrl}${youtubeUrl.includes('?') ? '&' : '?'}t=${totalSeconds}s`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-term-cyan hover:text-cyan-300 hover:underline cursor-pointer"
                      >
                        {part}
                      </a>
                    );
                  }
                  return <span key={i}>{part}</span>;
                })}
              </div>
            ) : (
              <p className="text-ergo-muted font-mono">Loading transcript...</p>
            )}
          </div>
        );

      case 'marketing':
        return (
          <div className="bg-ergo-dark border border-ergo-orange/20 rounded-lg p-6">
            <h3 className="text-lg font-mono text-ergo-orange mb-4">Marketing Content</h3>
            {marketing ? (
              <div className="prose prose-invert max-w-none whitespace-pre-wrap text-ergo-light/90">
                {marketing}
              </div>
            ) : (
              <p className="text-ergo-muted font-mono">Loading marketing content...</p>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet><title>{callMeta.title} — Ergo Knowledge Base</title></Helmet>
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm font-mono text-ergo-muted mb-6">
        <Link to="/calls" className="hover:text-ergo-orange">Calls</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-ergo-light line-clamp-1">{callMeta.title}</span>
      </div>

      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold font-mono text-gradient mb-4">
          {callMeta.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-sm font-mono text-ergo-muted mb-4">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {callMeta.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {callMeta.duration_minutes} minutes
          </span>
          <span className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            {speakersList.length || 0} speakers
          </span>
        </div>

        {/* Media Links */}
        <div className="flex flex-wrap gap-3 mb-6">
          <a
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 border border-red-500/50 rounded font-mono text-sm transition-colors"
          >
            <Youtube className="w-4 h-4" />
            YouTube
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Speakers */}
        {speakersList.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {speakersList.map(speaker => (
              <Link
                key={speaker}
                to={`/speakers/${encodeURIComponent(speaker)}`}
                className="px-3 py-1 bg-ergo-dark border border-ergo-orange/30 rounded font-mono text-sm hover:border-ergo-orange transition-colors"
              >
                {speaker}
              </Link>
            ))}
          </div>
        )}
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <TabNavigation tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
          <div className="mt-6">
            {renderTabContent()}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-1">
          <div className="sticky top-24 space-y-6">
            {/* Topics */}
            {topicsList.length > 0 && (
              <div className="bg-ergo-dark border border-ergo-orange/20 rounded-lg p-6">
                <h3 className="font-mono font-semibold text-ergo-orange mb-4">Topics</h3>
                <div className="flex flex-wrap gap-2">
                  {topicsList.map(topic => (
                    <TopicTag key={topic} topic={topic} />
                  ))}
                </div>
              </div>
            )}

            {/* Community Corrections */}
            <div className="bg-ergo-dark border border-term-green/30 rounded-lg p-6">
              <h3 className="font-mono font-semibold text-term-green mb-2">Community</h3>
              <p className="text-xs text-ergo-muted mb-3">Spot something wrong? Help us improve.</p>
              <CorrectionButton pageType="Call" pageTitle={callMeta.title} />
            </div>

            {/* Cite This Call */}
            <div className="bg-ergo-dark border border-ergo-orange/20 rounded-lg p-6">
              <h3 className="font-mono font-semibold text-ergo-orange mb-4">Cite This Call</h3>
              <button
                onClick={handleCopy}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-ergo-orange/20 hover:bg-ergo-orange/30 border border-ergo-orange/50 rounded font-mono text-sm transition-colors"
              >
                <Copy className="w-4 h-4" />
                {copied ? 'Copied!' : 'Copy Citation'}
              </button>
            </div>

            {/* Related Calls */}
            {relatedCalls.length > 0 && (
              <div className="bg-ergo-dark border border-ergo-orange/20 rounded-lg p-6">
                <h3 className="font-mono font-semibold text-ergo-orange mb-4">Related Calls</h3>
                <div className="space-y-3">
                  {relatedCalls.map(relatedCall => (
                    <Link
                      key={relatedCall.id}
                      to={`/calls/${relatedCall.id}`}
                      className="block text-sm hover:text-ergo-orange transition-colors"
                    >
                      <p className="font-mono line-clamp-2">{relatedCall.title}</p>
                      <p className="text-xs text-ergo-muted mt-1">{relatedCall.date}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}
