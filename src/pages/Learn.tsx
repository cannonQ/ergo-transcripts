import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  Play,
  FileText, 
  Code, 
  Layers, 
  Shield, 
  Coins,
  ArrowRight,
  Clock,
  Star,
  CheckCircle
} from 'lucide-react';

const learningPaths = [
  {
    id: 'beginner',
    title: 'Ergo Fundamentals',
    description: 'Start here if you\'re new to Ergo. Learn the basics of the platform, its unique features, and why it matters.',
    icon: BookOpen,
    color: 'term-green',
    duration: '2-3 hours',
    modules: [
      { title: 'What is Ergo?', completed: false },
      { title: 'Understanding eUTXO', completed: false },
      { title: 'Sigma Protocols Explained', completed: false },
      { title: 'Ergo Ecosystem Overview', completed: false },
    ]
  },
  {
    id: 'developer',
    title: 'ErgoScript Development',
    description: 'Learn to build smart contracts on Ergo using ErgoScript. From basic contracts to advanced patterns.',
    icon: Code,
    color: 'term-cyan',
    duration: '8-10 hours',
    modules: [
      { title: 'ErgoScript Basics', completed: false },
      { title: 'Box Model Deep Dive', completed: false },
      { title: 'Common Contract Patterns', completed: false },
      { title: 'Testing & Deployment', completed: false },
      { title: 'Advanced Techniques', completed: false },
    ]
  },
  {
    id: 'defi',
    title: 'DeFi on Ergo',
    description: 'Explore decentralized finance on Ergo. Learn about ErgoDEX, lending protocols, and yield strategies.',
    icon: Coins,
    color: 'term-amber',
    duration: '4-5 hours',
    modules: [
      { title: 'DeFi Fundamentals', completed: false },
      { title: 'Using ErgoDEX', completed: false },
      { title: 'Liquidity Provision', completed: false },
      { title: 'Yield Farming Strategies', completed: false },
    ]
  },
  {
    id: 'security',
    title: 'Security & Privacy',
    description: 'Deep dive into Ergo\'s security model, privacy features, and best practices for safe usage.',
    icon: Shield,
    color: 'term-magenta',
    duration: '3-4 hours',
    modules: [
      { title: 'Cryptographic Foundations', completed: false },
      { title: 'Wallet Security', completed: false },
      { title: 'Privacy Features', completed: false },
      { title: 'Audit & Verification', completed: false },
    ]
  }
];

const featuredContent = [
  {
    id: 1,
    type: 'video',
    title: 'Introduction to eUTXO Model',
    description: 'kushti explains the extended UTXO model and its advantages',
    duration: '45 min',
    speaker: 'kushti',
    callId: 'H8uXsY6WP3s'
  },
  {
    id: 2,
    type: 'qa',
    title: 'Top 10 Beginner Questions',
    description: 'Most frequently asked questions from community calls',
    count: 10,
  },
  {
    id: 3,
    type: 'tutorial',
    title: 'Your First ErgoScript Contract',
    description: 'Step-by-step guide to writing and deploying a simple contract',
    duration: '30 min',
    callId: 'M4rTyU9kP2w'
  }
];

export default function Learn() {
  const [selectedPath, setSelectedPath] = useState<string | null>(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet><title>Learn — Ergo Knowledge Base</title></Helmet>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold font-mono text-gradient mb-2">
          Learn Ergo
        </h1>
        <p className="text-ergo-muted font-mono">
          Curated learning paths from community calls and expert discussions
        </p>
      </div>

      {/* Learning Paths */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold font-mono mb-6 flex items-center gap-2">
          <Layers className="w-6 h-6 text-ergo-orange" />
          Learning Paths
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {learningPaths.map(path => {
            const IconComponent = path.icon;
            const isSelected = selectedPath === path.id;
            
            return (
              <div
                key={path.id}
                className={`bg-ergo-dark border rounded-lg p-6 cursor-pointer transition-all ${
                  isSelected 
                    ? `border-${path.color} shadow-lg shadow-${path.color}/20` 
                    : 'border-ergo-orange/20 hover:border-ergo-orange/50'
                }`}
                onClick={() => setSelectedPath(isSelected ? null : path.id)}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-${path.color}/20`}>
                    <IconComponent className={`w-8 h-8 text-${path.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-mono text-xl font-semibold mb-2">{path.title}</h3>
                    <p className="text-ergo-light/70 text-sm mb-4">{path.description}</p>
                    <div className="flex items-center gap-4 text-sm font-mono text-ergo-muted">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {path.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <FileText className="w-4 h-4" />
                        {path.modules.length} modules
                      </span>
                    </div>
                  </div>
                </div>

                {/* Expanded Module List */}
                {isSelected && (
                  <div className="mt-6 pt-6 border-t border-ergo-orange/20">
                    <h4 className="font-mono text-sm text-ergo-muted mb-3">Modules:</h4>
                    <ul className="space-y-2">
                      {path.modules.map((module, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono ${
                            module.completed 
                              ? 'bg-term-green/20 text-term-green' 
                              : 'bg-ergo-darker text-ergo-muted'
                          }`}>
                            {module.completed ? <CheckCircle className="w-4 h-4" /> : index + 1}
                          </span>
                          <span className={module.completed ? 'text-ergo-muted line-through' : ''}>
                            {module.title}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <button className={`mt-4 w-full py-2 bg-${path.color}/20 hover:bg-${path.color}/30 border border-${path.color}/50 rounded font-mono text-sm transition-colors flex items-center justify-center gap-2`}>
                      Start Learning
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Featured Content */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold font-mono mb-6 flex items-center gap-2">
          <Star className="w-6 h-6 text-term-amber" />
          Featured Content
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredContent.map(content => (
            <div
              key={content.id}
              className="bg-ergo-dark border border-ergo-orange/20 rounded-lg p-6 hover:border-ergo-orange/50 transition-all"
            >
              <div className="flex items-center gap-2 mb-3">
                {content.type === 'video' && <Play className="w-5 h-5 text-term-cyan" />}
                {content.type === 'qa' && <FileText className="w-5 h-5 text-term-green" />}
                {content.type === 'tutorial' && <Code className="w-5 h-5 text-term-amber" />}
                <span className="text-xs font-mono text-ergo-muted uppercase">{content.type}</span>
              </div>
              <h3 className="font-mono font-semibold mb-2">{content.title}</h3>
              <p className="text-sm text-ergo-light/70 mb-4">{content.description}</p>
              <div className="flex items-center justify-between text-sm font-mono">
                <span className="text-ergo-muted">
                  {content.duration || `${content.count} items`}
                </span>
                {content.callId ? (
                  <Link
                    to={`/calls/${content.callId}`}
                    className="text-ergo-orange hover:underline flex items-center gap-1"
                  >
                    Watch <ArrowRight className="w-4 h-4" />
                  </Link>
                ) : (
                  <Link
                    to="/faq"
                    className="text-ergo-orange hover:underline flex items-center gap-1"
                  >
                    View <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Links */}
      <section>
        <h2 className="text-2xl font-bold font-mono mb-6">Quick Links</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link
            to="/faq"
            className="bg-ergo-dark border border-ergo-orange/20 rounded-lg p-4 hover:border-ergo-orange/50 transition-all text-center"
          >
            <FileText className="w-8 h-8 text-term-green mx-auto mb-2" />
            <span className="font-mono text-sm">FAQ Database</span>
          </Link>
          <Link
            to="/topics/ergoscript"
            className="bg-ergo-dark border border-ergo-orange/20 rounded-lg p-4 hover:border-ergo-orange/50 transition-all text-center"
          >
            <Code className="w-8 h-8 text-term-cyan mx-auto mb-2" />
            <span className="font-mono text-sm">ErgoScript Topics</span>
          </Link>
          <Link
            to="/speakers/kushti"
            className="bg-ergo-dark border border-ergo-orange/20 rounded-lg p-4 hover:border-ergo-orange/50 transition-all text-center"
          >
            <BookOpen className="w-8 h-8 text-term-amber mx-auto mb-2" />
            <span className="font-mono text-sm">From kushti</span>
          </Link>
          <Link
            to="/calls"
            className="bg-ergo-dark border border-ergo-orange/20 rounded-lg p-4 hover:border-ergo-orange/50 transition-all text-center"
          >
            <Play className="w-8 h-8 text-term-magenta mx-auto mb-2" />
            <span className="font-mono text-sm">All Calls</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
