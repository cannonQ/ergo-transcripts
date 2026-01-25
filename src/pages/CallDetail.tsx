import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, Users, Youtube, Headphones, ExternalLink, Copy, ChevronRight } from 'lucide-react';
import TabNavigation from '../components/TabNavigation';
import TopicTag from '../components/TopicTag';
import { mockCalls, mockQA, mockDecisions } from '../data/mockData';

export default function CallDetail() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('summary');
  const [copied, setCopied] = useState(false);

  const call = mockCalls.find(c => c.id === id);
  const callQA = mockQA.filter(qa => qa.call_id === id);
  const callDecisions = mockDecisions.filter(d => d.call_id === id);

  if (!call) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-mono text-ergo-orange">Call not found</h1>
      </div>
    );
  }

  const tabs = [
    { id: 'summary', label: 'Summary' },
    { id: 'topics', label: 'Topics', count: call.stats.topics },
    { id: 'qa', label: 'Q&A', count: callQA.length },
    { id: 'decisions', label: 'Decisions', count: callDecisions.length },
    { id: 'transcript', label: 'Transcript' },
    { id: 'marketing', label: 'Marketing' },
  ];

  const handleCopy = () => {
    const citation = `${call.title} - Ergo Community Call (${call.date}). Available at: https://ergokb.org/calls/${call.id}`;
    navigator.clipboard.writeText(citation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm font-mono text-ergo-muted mb-6">
        <Link to="/calls" className="hover:text-ergo-orange">Calls</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-ergo-light">{call.title}</span>
      </div>

      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold font-mono text-gradient mb-4">
          {call.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-sm font-mono text-ergo-muted mb-4">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {call.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {call.duration_minutes} minutes
          </span>
          <span className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            {call.speakers.length} speakers
          </span>
        </div>

        {/* Media Links */}
        <div className="flex flex-wrap gap-3 mb-6">
          {call.media.youtube && (
            <a
              href={call.media.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 border border-red-500/50 rounded font-mono text-sm transition-colors"
            >
              <Youtube className="w-4 h-4" />
              YouTube
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
          {call.media.spotify && (
            <a
              href={call.media.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-green-500/20 hover:bg-green-500/30 border border-green-500/50 rounded font-mono text-sm transition-colors"
            >
              <Headphones className="w-4 h-4" />
              Spotify
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>

        {/* Speakers */}
        <div className="flex flex-wrap gap-2">
          {call.speakers.map(speaker => (
            <Link
              key={speaker}
              to={`/speakers/${speaker}`}
              className="px-3 py-1 bg-ergo-dark border border-ergo-orange/30 rounded font-mono text-sm hover:border-ergo-orange transition-colors"
            >
              🎤 {speaker}
            </Link>
          ))}
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <TabNavigation tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

          <div className="mt-6">
            {/* Summary Tab */}
            {activeTab === 'summary' && (
              <div className="prose prose-invert max-w-none">
                <div className="bg-ergo-dark border border-ergo-orange/20 rounded-lg p-6">
                  <h3 className="text-xl font-mono text-ergo-orange mb-4">Executive Summary</h3>
                  <p className="text-ergo-light/90 leading-relaxed">{call.summary}</p>
                  
                  <div className="mt-6">
                    <h4 className="text-lg font-mono text-ergo-orange mb-3">Key Announcements</h4>
                    <ul className="space-y-2 text-ergo-light/80">
                      <li className="flex items-start gap-2">
                        <span className="text-ergo-green mt-1">▸</span>
                        <span>AI coding tools integration with ErgoScript demonstrated</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-ergo-green mt-1">▸</span>
                        <span>New optimization techniques for contract deployment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-ergo-green mt-1">▸</span>
                        <span>Community feedback on development priorities collected</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Topics Tab */}
            {activeTab === 'topics' && (
              <div className="space-y-4">
                {call.topics.map((topic, index) => (
                  <div key={topic} className="bg-ergo-dark border border-ergo-orange/20 rounded-lg p-4 hover:border-ergo-orange/50 transition-all">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-term-amber font-mono">▶ {(index * 12 + 5).toString().padStart(2, '0')}:23</span>
                        <h4 className="font-mono font-semibold text-ergo-orange">{topic}</h4>
                      </div>
                      <a
                        href={`${call.media.youtube}&t=${index * 12 + 5}m23s`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-mono text-ergo-muted hover:text-ergo-orange"
                      >
                        Jump to video →
                      </a>
                    </div>
                    <p className="text-sm text-ergo-light/80">
                      Discussion about {topic} implementation and best practices in the Ergo ecosystem.
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Q&A Tab */}
            {activeTab === 'qa' && (
              <div className="space-y-6">
                {callQA.map(qa => (
                  <div key={qa.id} className="bg-ergo-dark border border-ergo-orange/20 rounded-lg p-6">
                    <div className="mb-3">
                      <span className="text-sm font-mono text-term-cyan">Q:</span>
                      <p className="mt-1 font-medium">{qa.question}</p>
                    </div>
                    <div className="mb-3">
                      <span className="text-sm font-mono text-term-green">A:</span>
                      <p className="mt-1 text-ergo-light/90">{qa.answer}</p>
                    </div>
                    <div className="flex items-center justify-between text-xs font-mono text-ergo-muted">
                      <span>🎤 {qa.responder} • {qa.timestamp}</span>
                      <span className="px-2 py-1 bg-ergo-darker rounded">
                        [{qa.category}]
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Decisions Tab */}
            {activeTab === 'decisions' && (
              <div className="space-y-4">
                {callDecisions.map(decision => (
                  <div key={decision.id} className="bg-ergo-dark border border-ergo-orange/20 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-3">
                      <span className={`
                        text-xs font-mono px-2 py-1 rounded
                        ${decision.type === 'decision' ? 'bg-blue-500/20 text-blue-400' : ''}
                        ${decision.type === 'commitment' ? 'bg-green-500/20 text-green-400' : ''}
                        ${decision.type === 'open_question' ? 'bg-yellow-500/20 text-yellow-400' : ''}
                      `}>
                        {decision.significance === 'major' ? '🔹 MAJOR ' : ''}{decision.type.toUpperCase()}
                      </span>
                      <span className="text-xs font-mono text-ergo-muted">{decision.date}</span>
                    </div>
                    
                    <h3 className="font-mono font-semibold text-ergo-orange mb-2">
                      {decision.title}
                    </h3>
                    
                    {decision.context && (
                      <p className="text-sm text-ergo-muted mb-2">
                        Context: {decision.context}
                      </p>
                    )}
                    
                    <p className="text-sm text-ergo-light/90 mb-3">
                      {decision.content}
                    </p>
                    
                    <div className="text-xs font-mono text-ergo-muted">
                      🎤 {decision.speaker} • Topic: {decision.topic}
                      {decision.owner && ` • Owner: ${decision.owner}`}
                      {decision.timeline && ` • Timeline: ${decision.timeline}`}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Transcript Tab */}
            {activeTab === 'transcript' && (
              <div className="bg-ergo-dark border border-ergo-orange/20 rounded-lg p-6">
                <div className="mb-4 p-3 bg-yellow-500/10 border border-yellow-500/30 rounded">
                  <p className="text-sm font-mono text-yellow-400">
                    Full transcript available. Click timestamps to jump to video.
                  </p>
                </div>
                <div className="space-y-4 font-mono text-sm">
                  <div>
                    <span className="text-term-amber">[00:00]</span>
                    <span className="text-ergo-orange ml-2">qx:</span>
                    <span className="ml-2">Welcome everyone to today's Ergo Community Chat...</span>
                  </div>
                  <div>
                    <span className="text-term-amber">[00:15]</span>
                    <span className="text-ergo-orange ml-2">kushti:</span>
                    <span className="ml-2">Thanks for having me. Today we'll discuss AI coding...</span>
                  </div>
                  <div>
                    <span className="text-term-amber">[01:23]</span>
                    <span className="text-ergo-orange ml-2">HQ:</span>
                    <span className="ml-2">Let's start with the recent developments in ErgoScript...</span>
                  </div>
                </div>
              </div>
            )}

            {/* Marketing Tab */}
            {activeTab === 'marketing' && (
              <div className="space-y-6">
                <div className="bg-ergo-dark border border-ergo-orange/20 rounded-lg p-6">
                  <h3 className="text-lg font-mono text-ergo-orange mb-4">Twitter Thread</h3>
                  <div className="space-y-3 font-mono text-sm">
                    <p>🧵 1/ Just wrapped up an amazing Ergo Community Chat on AI Coding Revolution!</p>
                    <p>2/ @kushti_ru demonstrated how GPT-4 and Copilot can accelerate ErgoScript development</p>
                    <p>3/ Key takeaway: AI tools can help with boilerplate but always verify contract logic</p>
                  </div>
                  <button className="mt-4 px-4 py-2 bg-ergo-orange/20 hover:bg-ergo-orange/30 border border-ergo-orange/50 rounded font-mono text-sm transition-colors">
                    Copy Thread
                  </button>
                </div>

                <div className="bg-ergo-dark border border-ergo-orange/20 rounded-lg p-6">
                  <h3 className="text-lg font-mono text-ergo-orange mb-4">Quotable Moments</h3>
                  <div className="space-y-3">
                    <blockquote className="border-l-4 border-ergo-orange pl-4">
                      <p className="italic">"AI is not replacing developers, it's amplifying their capabilities"</p>
                      <cite className="text-sm font-mono text-ergo-muted">- kushti</cite>
                    </blockquote>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-1">
          <div className="sticky top-24 space-y-6">
            {/* Topics */}
            <div className="bg-ergo-dark border border-ergo-orange/20 rounded-lg p-6">
              <h3 className="font-mono font-semibold text-ergo-orange mb-4">Topics</h3>
              <div className="flex flex-wrap gap-2">
                {call.topics.map(topic => (
                  <TopicTag key={topic} topic={topic} />
                ))}
              </div>
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
            <div className="bg-ergo-dark border border-ergo-orange/20 rounded-lg p-6">
              <h3 className="font-mono font-semibold text-ergo-orange mb-4">Related Calls</h3>
              <div className="space-y-3">
                {mockCalls.slice(1, 4).map(relatedCall => (
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
          </div>
        </aside>
      </div>
    </div>
  );
}
