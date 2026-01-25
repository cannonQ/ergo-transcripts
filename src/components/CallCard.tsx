import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Users, Youtube } from 'lucide-react';
import type { CallSummary, CallMeta } from '../types';

interface CallCardProps {
  call: CallSummary | CallMeta;
}

export default function CallCard({ call }: CallCardProps) {
  // Get YouTube URL - either from meta's media object or construct from ID
  const youtubeUrl = 'media' in call && call.media?.youtube
    ? call.media.youtube
    : `https://youtube.com/watch?v=${call.id}`;

  const speakersList = call.speakers.filter(Boolean).join(', ') || 'Community';

  return (
    <div className="bg-ergo-dark border border-ergo-orange/20 rounded-lg p-6 hover:border-ergo-orange/50 transition-all duration-300 group">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Thumbnail */}
        <Link to={`/calls/${call.id}`} className="lg:w-48 h-32 lg:h-28 bg-ergo-darker rounded overflow-hidden flex-shrink-0 block">
          <img
            src={call.thumbnail}
            alt={call.title}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
            onError={(e) => {
              (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${call.id}/mqdefault.jpg`;
            }}
          />
        </Link>

        {/* Content */}
        <div className="flex-1">
          <Link to={`/calls/${call.id}`}>
            <h3 className="font-mono text-lg font-semibold text-ergo-orange hover:text-orange-400 transition-colors mb-2">
              {call.title}
            </h3>
          </Link>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-ergo-muted mb-3">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {call.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {call.duration_minutes} min
            </span>
            <span className="flex items-center gap-1">
              <Users className="w-3 h-3" />
              {speakersList}
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-xs font-mono">
              <span className="text-term-cyan">[{call.stats.topics} Topics]</span>
              <span className="text-term-green">[{call.stats.qa_pairs} Q&A]</span>
              <span className="text-term-amber">[{call.stats.decisions} Decisions]</span>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 bg-ergo-darker rounded hover:bg-ergo-orange/20 transition-colors"
                title="Watch on YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
