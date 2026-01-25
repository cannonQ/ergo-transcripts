import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { User, Mic, Gavel, Hash, Quote, Calendar, ArrowLeft, ExternalLink } from 'lucide-react';
import { mockSpeakers, mockCalls, mockDecisions, mockQA } from '../data/mockData';

export default function SpeakerDetail() {
  const { name } = useParams<{ name: string }>();
  const decodedName = decodeURIComponent(name || '');
  
  const speaker = mockSpeakers.find(s => s.name.toLowerCase() === decodedName.toLowerCase());
  
  if (!speaker) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-12">
          <User className="w-16 h-16 text-ergo-muted mx-auto mb-4" />
          <h1 className="text-2xl font-mono font-bold mb-2">Speaker Not Found</h1>
          <p className="text-ergo-muted mb-4">Could not find speaker: {decodedName}</p>
          <Link to="/speakers" className="text-ergo-orange hover:underline font-mono">
            ← Back to Speakers
          </Link>
        </div>
      </div>
    );
  }

  const speakerCalls = mockCalls.filter(call => call.speakers.includes(speaker.name));
  const speakerDecisions = mockDecisions.filter(d => d.speaker === speaker.name);
  const speakerQA = mockQA.filter(qa => qa.responder === speaker.name);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Link */}
      <Link
        to="/speakers"
        className="inline-flex items-center gap-2 text-ergo-muted hover:text-ergo-orange font-mono text-sm mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Speakers
      </Link>

      {/* Header */}
      <div className="bg-ergo-dark border border-ergo-orange/20 rounded-lg p-8 mb-8">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          {/* Avatar */}
          {speaker.avatar ? (
            <img
              src={speaker.avatar}
              alt={speaker.name}
              className="w-32 h-32 rounded-full object-cover border-4 border-ergo-orange/30"
            />
          ) : (
            <div className="w-32 h-32 rounded-full bg-ergo-orange/20 flex items-center justify-center border-4 border-ergo-orange/30">
              <User className="w-16 h-16 text-ergo-orange" />
            </div>
          )}

          {/* Info */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold font-mono text-gradient mb-2">{speaker.name}</h1>
            <p className="text-xl text-ergo-orange font-mono mb-4">{speaker.role}</p>
            {speaker.bio && (
              <p className="text-ergo-light/80 mb-6">{speaker.bio}</p>
            )}

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-ergo-darker rounded-lg p-4 text-center">
                <Mic className="w-6 h-6 text-term-cyan mx-auto mb-2" />
                <span className="text-2xl font-bold font-mono text-term-cyan block">{speaker.stats.calls}</span>
                <span className="text-xs text-ergo-muted">Call Appearances</span>
              </div>
              <div className="bg-ergo-darker rounded-lg p-4 text-center">
                <Gavel className="w-6 h-6 text-term-green mx-auto mb-2" />
                <span className="text-2xl font-bold font-mono text-term-green block">{speaker.stats.decisions}</span>
                <span className="text-xs text-ergo-muted">Decisions Made</span>
              </div>
              <div className="bg-ergo-darker rounded-lg p-4 text-center">
                <Hash className="w-6 h-6 text-term-amber mx-auto mb-2" />
                <span className="text-2xl font-bold font-mono text-term-amber block">{speaker.stats.topics}</span>
                <span className="text-xs text-ergo-muted">Topics Covered</span>
              </div>
              <div className="bg-ergo-darker rounded-lg p-4 text-center">
                <Quote className="w-6 h-6 text-term-magenta mx-auto mb-2" />
                <span className="text-2xl font-bold font-mono text-term-magenta block">{speaker.stats.quotes}</span>
                <span className="text-xs text-ergo-muted">Notable Quotes</span>
              </div>
            </div>
          </div>
        </div>

        {/* Top Topics */}
        <div className="mt-6 pt-6 border-t border-ergo-orange/20">
          <h3 className="font-mono text-sm text-ergo-muted mb-3">Top Topics</h3>
          <div className="flex flex-wrap gap-2">
            {speaker.top_topics.map(topic => (
              <Link
                key={topic}
                to={`/topics/${topic}`}
                className="px-3 py-1 bg-ergo-orange/20 hover:bg-ergo-orange/30 text-ergo-orange rounded font-mono text-sm transition-colors"
              >
                #{topic}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Calls */}
        <div>
          <h2 className="text-2xl font-bold font-mono mb-4 flex items-center gap-2">
            <Mic className="w-6 h-6 text-term-cyan" />
            Recent Calls
          </h2>
          <div className="space-y-4">
            {speakerCalls.slice(0, 5).map(call => (
              <Link
                key={call.id}
                to={`/calls/${call.id}`}
                className="block bg-ergo-dark border border-ergo-orange/20 rounded-lg p-4 hover:border-ergo-orange/50 transition-all"
              >
                <h3 className="font-mono font-semibold mb-2 line-clamp-1">{call.title}</h3>
                <div className="flex items-center gap-4 text-sm text-ergo-muted font-mono">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(call.date).toLocaleDateString()}
                  </span>
                  <span>{call.duration_minutes} min</span>
                </div>
              </Link>
            ))}
            {speakerCalls.length === 0 && (
              <p className="text-ergo-muted font-mono text-sm">No calls found</p>
            )}
          </div>
        </div>

        {/* Decisions & Commitments */}
        <div>
          <h2 className="text-2xl font-bold font-mono mb-4 flex items-center gap-2">
            <Gavel className="w-6 h-6 text-term-green" />
            Decisions & Commitments
          </h2>
          <div className="space-y-4">
            {speakerDecisions.slice(0, 5).map(decision => (
              <div
                key={decision.id}
                className="bg-ergo-dark border border-ergo-orange/20 rounded-lg p-4"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-xs font-mono px-2 py-0.5 rounded ${
                    decision.type === 'decision' ? 'bg-term-green/20 text-term-green' :
                    decision.type === 'commitment' ? 'bg-term-cyan/20 text-term-cyan' :
                    'bg-term-amber/20 text-term-amber'
                  }`}>
                    {decision.type.replace('_', ' ').toUpperCase()}
                  </span>
                  <span className="text-xs text-ergo-muted font-mono">
                    {new Date(decision.date).toLocaleDateString()}
                  </span>
                </div>
                <h3 className="font-mono font-semibold mb-2">{decision.title}</h3>
                <p className="text-sm text-ergo-light/70 line-clamp-2">{decision.content}</p>
              </div>
            ))}
            {speakerDecisions.length === 0 && (
              <p className="text-ergo-muted font-mono text-sm">No decisions found</p>
            )}
          </div>
        </div>
      </div>

      {/* Q&A Responses */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold font-mono mb-4 flex items-center gap-2">
          <Quote className="w-6 h-6 text-term-magenta" />
          Q&A Responses
        </h2>
        <div className="space-y-4">
          {speakerQA.slice(0, 5).map(qa => (
            <div
              key={qa.id}
              className="bg-ergo-dark border border-ergo-orange/20 rounded-lg p-6"
            >
              <div className="mb-4">
                <span className="text-xs font-mono text-ergo-muted">Question:</span>
                <p className="font-mono text-ergo-orange">{qa.question}</p>
              </div>
              <div className="bg-ergo-darker border-l-2 border-term-green p-4 rounded">
                <p className="text-ergo-light/90">{qa.answer}</p>
              </div>
              <div className="mt-3 flex items-center gap-4 text-xs font-mono text-ergo-muted">
                <span>{new Date(qa.date).toLocaleDateString()}</span>
                {qa.timestamp && <span>@ {qa.timestamp}</span>}
                <Link to={`/calls/${qa.call_id}`} className="text-term-cyan hover:underline">
                  View Call →
                </Link>
              </div>
            </div>
          ))}
          {speakerQA.length === 0 && (
            <p className="text-ergo-muted font-mono text-sm">No Q&A responses found</p>
          )}
        </div>
      </div>
    </div>
  );
}
