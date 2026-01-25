import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';
import { mockQA } from '../data/mockData';

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['technical']);

  const categories = ['all', 'technical', 'beginner', 'governance', 'projects', 'general'];
  const difficulties = ['all', 'beginner', 'intermediate', 'advanced'];

  const filteredQA = mockQA.filter(qa => {
    const matchesSearch = searchQuery === '' || 
      qa.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      qa.answer.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || qa.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'all' || qa.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  const groupedQA = filteredQA.reduce((acc, qa) => {
    if (!acc[qa.category]) {
      acc[qa.category] = [];
    }
    acc[qa.category].push(qa);
    return acc;
  }, {} as Record<string, typeof mockQA>);

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold font-mono text-gradient mb-2">
          FAQ Database
        </h1>
        <p className="text-ergo-muted font-mono">
          {mockQA.length} questions and answers from community calls
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-ergo-dark border border-ergo-orange/20 rounded-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search */}
          <div className="md:col-span-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-ergo-muted" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions..."
                className="w-full pl-10 pr-4 py-3 bg-ergo-darker border border-ergo-orange/30 rounded font-mono text-sm placeholder-ergo-muted/50 focus:outline-none focus:border-ergo-orange"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div>
            <label className="block text-sm font-mono text-ergo-muted mb-2">
              Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full bg-ergo-darker border border-ergo-orange/30 rounded px-3 py-2 font-mono text-sm focus:outline-none focus:border-ergo-orange"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* Difficulty Filter */}
          <div>
            <label className="block text-sm font-mono text-ergo-muted mb-2">
              Difficulty
            </label>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="w-full bg-ergo-darker border border-ergo-orange/30 rounded px-3 py-2 font-mono text-sm focus:outline-none focus:border-ergo-orange"
            >
              {difficulties.map(diff => (
                <option key={diff} value={diff}>
                  {diff.charAt(0).toUpperCase() + diff.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* Results Count */}
          <div className="flex items-end">
            <p className="font-mono text-sm text-ergo-muted">
              Found {filteredQA.length} Q&A pairs
            </p>
          </div>
        </div>
      </div>

      {/* Q&A Cards */}
      {searchQuery || selectedCategory !== 'all' || selectedDifficulty !== 'all' ? (
        <div className="space-y-6">
          {filteredQA.map(qa => (
            <div key={qa.id} className="bg-ergo-dark border border-ergo-orange/20 rounded-lg p-6 hover:border-ergo-orange/50 transition-all">
              <div className="mb-3">
                <span className="text-sm font-mono text-term-cyan">Q:</span>
                <h3 className="mt-1 text-lg font-semibold">{qa.question}</h3>
              </div>
              
              <div className="mb-4">
                <span className="text-sm font-mono text-term-green">A:</span>
                <p className="mt-1 text-ergo-light/90">{qa.answer}</p>
              </div>
              
              <div className="flex items-center justify-between text-xs font-mono text-ergo-muted">
                <span>🎤 {qa.responder} • {qa.date} @ {qa.timestamp}</span>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 bg-ergo-darker rounded">
                    [{qa.category}]
                  </span>
                  <span className="px-2 py-1 bg-ergo-darker rounded">
                    {qa.difficulty}
                  </span>
                </div>
              </div>
              
              <a
                href={`/calls/${qa.call_id}`}
                className="inline-block mt-3 text-xs font-mono text-ergo-orange hover:text-orange-400"
              >
                View in context →
              </a>
            </div>
          ))}
        </div>
      ) : (
        /* Browse by Topic */
        <div className="space-y-4">
          {Object.entries(groupedQA).map(([category, questions]) => (
            <div key={category} className="bg-ergo-dark border border-ergo-orange/20 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleCategory(category)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-ergo-orange/5 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <h3 className="font-mono font-semibold text-ergo-orange">
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </h3>
                  <span className="text-sm font-mono text-ergo-muted">
                    ({questions.length} questions)
                  </span>
                </div>
                {expandedCategories.includes(category) ? (
                  <ChevronUp className="w-5 h-5 text-ergo-muted" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-ergo-muted" />
                )}
              </button>
              
              {expandedCategories.includes(category) && (
                <div className="border-t border-ergo-orange/20 p-6 space-y-6">
                  {questions.map(qa => (
                    <div key={qa.id} className="pb-6 border-b border-ergo-orange/10 last:border-0 last:pb-0">
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
                        <a
                          href={`/calls/${qa.call_id}`}
                          className="text-ergo-orange hover:text-orange-400"
                        >
                          View in context →
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
