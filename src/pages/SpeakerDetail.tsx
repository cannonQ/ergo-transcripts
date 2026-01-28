import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { User, Mic, Gavel, Hash, Quote, Calendar, ArrowLeft, Loader2 } from 'lucide-react';
import CorrectionButton from '../components/CorrectionButton';
import { useData } from '../contexts/DataContext';

export default function SpeakerDetail() {
  const { name } = useParams<{ name: string }>();
  const { speakers, calls, isLoading } = useData();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-ergo-orange animate-spin mx-auto mb-4" />
          <p className="font-mono text-ergo-muted">Loading speaker...</p>
        </div>
      </div>
    );
  }

  const decodedName = decodeURIComponent(name || '');
  const speaker = speakers.find(s => s.name.toLowerCase() === decodedName.toLowerCase());

  if (!speaker) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-12">
          <User className="w-16 h-16 text-ergo-muted mx-auto mb-4" />
          <h1 className="text-2xl font-mono font-bold mb-2">Speaker Not Found</h1>
          <p className="text-ergo-muted mb-4">Could not find speaker: {decodedName}</p>
          <Link to="/speakers" className="text-ergo-orange hover:underline font-mono">
            Back to Speakers
          </Link>
        </div>
      </div>
    );
  }

  // Find calls that include this speaker
  const speakerCalls = calls.filter(call =>
    call.speakers.some(s => s.toLowerCase() === speaker.name.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet><title>{speaker.name} — Ergo Knowledge Base</title></Helmet>
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
            <div className="flex items-center gap-4 mb-4">
              <p className="text-xl text-ergo-orange font-mono">{speaker.role}</p>
              <CorrectionButton pageType="Speaker" pageTitle={speaker.name} />
            </div>
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
        {speaker.top_topics.length > 0 && (
          <div className="mt-6 pt-6 border-t border-ergo-orange/20">
            <h3 className="font-mono text-sm text-ergo-muted mb-3">Top Topics</h3>
            <div className="flex flex-wrap gap-2">
              {speaker.top_topics.map(topic => (
                <Link
                  key={topic}
                  to={`/topics/${topic.toLowerCase().replace(/\s+/g, '-')}`}
                  className="px-3 py-1 bg-ergo-orange/20 hover:bg-ergo-orange/30 text-ergo-orange rounded font-mono text-sm transition-colors"
                >
                  #{topic}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Recent Calls */}
      <div>
        <h2 className="text-2xl font-bold font-mono mb-4 flex items-center gap-2">
          <Mic className="w-6 h-6 text-term-cyan" />
          Call Appearances ({speakerCalls.length})
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {speakerCalls.map(call => (
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
              <div className="mt-2 flex gap-2 text-xs font-mono">
                <span className="text-term-cyan">[{call.stats.qa_pairs} Q&A]</span>
                <span className="text-term-green">[{call.stats.decisions} Decisions]</span>
              </div>
            </Link>
          ))}
          {speakerCalls.length === 0 && (
            <p className="text-ergo-muted font-mono text-sm col-span-2 text-center py-8">No calls found for this speaker</p>
          )}
        </div>
      </div>
    </div>
  );
}
