import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Hash, Users, MessageSquare, GitBranch, Calendar, ChevronRight } from 'lucide-react';
import CallCard from '../components/CallCard';
import TopicTag from '../components/TopicTag';
import { mockTopics, mockCalls, mockQA, mockDecisions } from '../data/mockData';

export default function TopicDetail() {
  const { slug } = useParams();
  const topic = mockTopics.find(t => t.slug === slug);

  if (!topic) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-mono text-ergo-orange">Topic not found</h1>
      </div>
    );
  }

  const relatedCalls = mockCalls.filter(call => 
    call.topics.includes(topic.slug)
  );

  const relatedQA = mockQA.filter(qa => 
    qa.category === topic.slug || qa.answer.toLowerCase().includes(topic.name.toLowerCase())
  );

  const relatedDecisions = mockDecisions.filter(d => 
    d.topic === topic.slug
  );

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm font-mono text-ergo-muted mb-6">
        <Link to="/topics" className="hover:text-ergo-orange">Topics</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-ergo-light">{topic.name}</span>
      </div>

      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Hash className="w-8 h-8 text-ergo-orange" />
          <h1 className="text-4xl font-bold font-mono text-gradient">
            {topic.name.toUpperCase()}
          </h1>
        </div>
        <p className="text-lg text-ergo-light/80 mb-6">
          {topic.description}
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-ergo-dark border border-ergo-orange/20 rounded-lg p-4">
            <div className="text-2xl font-bold font-mono text-term-cyan">
              {topic.mention_count}
            </div>
            <div className="text-xs font-mono text-ergo-muted">mentions</div>
          </div>
          <div className="bg-ergo-dark border border-ergo-orange/20 rounded-lg p-4">
            <div className="text-2xl font-bold font-mono text-term-green">
              {topic.call_count}
            </div>
            <div className="text-xs font-mono text-ergo-muted">calls</div>
          </div>
          <div className="bg-ergo-dark border border-ergo-orange/20 rounded-lg p-4">
            <div className="text-2xl font-bold font-mono text-term-amber">
              {relatedQA.length}
            </div>
            <div className="text-xs font-mono text-ergo-muted">Q&A pairs</div>
          </div>
          <div className="bg-ergo-dark border border-ergo-orange/20 rounded-lg p-4">
            <div className="text-2xl font-bold font-mono text-ergo-orange">
              {relatedDecisions.length}
            </div>
            <div className="text-xs font-mono text-ergo-muted">decisions</div>
          </div>
        </div>

        {/* Key Speakers */}
        <div className="bg-ergo-dark border border-ergo-orange/20 rounded-lg p-6 mb-6">
          <h3 className="font-mono font-semibold text-ergo-orange mb-3 flex items-center gap-2">
            <Users className="w-4 h-4" />
            Key Speakers
          </h3>
          <div className="flex flex-wrap gap-3">
            {topic.key_speakers.map(speaker => (
              <Link
                key={speaker}
                to={`/speakers/${speaker}`}
                className="px-3 py-1 bg-ergo-darker border border-ergo-orange/30 rounded font-mono text-sm hover:border-ergo-orange transition-colors"
              >
                🎤 {speaker}
              </Link>
            ))}
          </div>
        </div>

        {/* Related Topics */}
        <div className="bg-ergo-dark border border-ergo-orange/20 rounded-lg p-6">
          <h3 className="font-mono font-semibold text-ergo-orange mb-3 flex items-center gap-2">
            <GitBranch className="w-4 h-4" />
            Related Topics
          </h3>
          <div className="flex flex-wrap gap-2">
            {topic.related_topics.map(related => (
              <TopicTag key={related} topic={related} />
            ))}
          </div>
        </div>
      </header>

      {/* Timeline */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold font-mono text-ergo-orange mb-6 flex items-center gap-2">
          <Calendar className="w-6 h-6" />
          Timeline of Mentions
        </h2>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-ergo-orange/30"></div>
          {relatedCalls.map((call, index) => (
            <div key={call.id} className="relative flex gap-8 mb-8">
              <div className="w-8 h-8 bg-ergo-dark border-2 border-ergo-orange rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-ergo-orange rounded-full"></div>
              </div>
              <div className="flex-1 -mt-1">
                <div className="text-sm font-mono text-ergo-muted mb-1">{call.date}</div>
                <Link
                  to={`/calls/${call.id}`}
                  className="font-mono font-semibold text-ergo-orange hover:text-orange-400"
                >
                  {call.title}
                </Link>
                <p className="text-sm text-ergo-light/70 mt-1">
                  Discussed by {call.speakers.join(', ')}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Related Calls */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold font-mono text-ergo-orange mb-6">
          Calls Mentioning This Topic
        </h2>
        <div className="space-y-6">
          {relatedCalls.slice(0, 3).map(call => (
            <CallCard key={call.id} call={call} />
          ))}
        </div>
      </section>

      {/* Related Q&A */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold font-mono text-ergo-orange mb-6 flex items-center gap-2">
          <MessageSquare className="w-6 h-6" />
          Related Q&A
        </h2>
        <div className="space-y-4">
          {relatedQA.slice(0, 3).map(qa => (
            <div key={qa.id} className="bg-ergo-dark border border-ergo-orange/20 rounded-lg p-6">
              <div className="mb-3">
                <span className="text-sm font-mono text-term-cyan">Q:</span>
                <p className="mt-1 font-medium">{qa.question}</p>
              </div>
              <div className="mb-3">
                <span className="text-sm font-mono text-term-green">A:</span>
                <p className="mt-1 text-sm text-ergo-light/90">{qa.answer}</p>
              </div>
              <div className="flex items-center justify-between text-xs font-mono text-ergo-muted">
                <span>🎤 {qa.responder} • {qa.date}</span>
                <Link
                  to={`/calls/${qa.call_id}`}
                  className="text-ergo-orange hover:text-orange-400"
                >
                  View in context →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Related Decisions */}
      {relatedDecisions.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold font-mono text-ergo-orange mb-6">
            Decisions Related to This Topic
          </h2>
          <div className="space-y-4">
            {relatedDecisions.map(decision => (
              <div key={decision.id} className="bg-ergo-dark border border-ergo-orange/20 rounded-lg p-6">
                <div className="flex items-start justify-between mb-3">
                  <span className={`
                    text-xs font-mono px-2 py-1 rounded
                    ${decision.type === 'decision' ? 'bg-blue-500/20 text-blue-400' : ''}
                    ${decision.type === 'commitment' ? 'bg-green-500/20 text-green-400' : ''}
                    ${decision.type === 'open_question' ? 'bg-yellow-500/20 text-yellow-400' : ''}
                  `}>
                    {decision.type.toUpperCase()}
                  </span>
                  <span className="text-xs font-mono text-ergo-muted">{decision.date}</span>
                </div>
                
                <h3 className="font-mono font-semibold text-ergo-orange mb-2">
                  {decision.title}
                </h3>
                
                <p className="text-sm text-ergo-light/90 mb-3">
                  {decision.content}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-ergo-muted">
                    🎤 {decision.speaker}
                  </span>
                  <Link
                    to={`/calls/${decision.call_id}`}
                    className="text-xs font-mono text-ergo-orange hover:text-orange-400"
                  >
                    View source →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
