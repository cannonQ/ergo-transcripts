import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Search, FileText, Mic, User, Hash, Gavel, ArrowLeft } from 'lucide-react';
import { useSearch } from '../contexts/SearchContext';

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const { results, isSearching } = useSearch();

  const getIcon = (type: string) => {
    switch (type) {
      case 'call': return <Mic className="w-5 h-5 text-term-cyan" />;
      case 'qa': return <FileText className="w-5 h-5 text-term-green" />;
      case 'decision': return <Gavel className="w-5 h-5 text-term-amber" />;
      case 'topic': return <Hash className="w-5 h-5 text-ergo-orange" />;
      case 'speaker': return <User className="w-5 h-5 text-term-magenta" />;
      default: return <Search className="w-5 h-5 text-ergo-muted" />;
    }
  };

  const getLink = (result: any) => {
    switch (result.type) {
      case 'call': return `/calls/${result.id}`;
      case 'qa': return `/faq#${result.id}`;
      case 'decision': return `/decisions#${result.id}`;
      case 'topic': return `/topics/${result.slug || result.id}`;
      case 'speaker': return `/speakers/${encodeURIComponent(result.name || result.id)}`;
      default: return '#';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Link */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-ergo-muted hover:text-ergo-orange font-mono text-sm mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold font-mono text-gradient mb-2">
          Search Results
        </h1>
        {query && (
          <p className="text-ergo-muted font-mono">
            {isSearching ? 'Searching...' : `Found ${results.length} results for "${query}"`}
          </p>
        )}
      </div>

      {/* No Query */}
      {!query && (
        <div className="text-center py-12">
          <Search className="w-16 h-16 text-ergo-muted mx-auto mb-4" />
          <p className="font-mono text-ergo-muted">Enter a search query to find content</p>
        </div>
      )}

      {/* Loading */}
      {isSearching && (
        <div className="text-center py-12">
          <div className="animate-spin w-8 h-8 border-2 border-ergo-orange border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="font-mono text-ergo-muted">Searching...</p>
        </div>
      )}

      {/* Results */}
      {!isSearching && query && results.length > 0 && (
        <div className="space-y-4">
          {results.map((result, index) => (
            <Link
              key={`${result.type}-${result.id}-${index}`}
              to={getLink(result)}
              className="block bg-ergo-dark border border-ergo-orange/20 rounded-lg p-6 hover:border-ergo-orange/50 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-ergo-darker rounded">
                  {getIcon(result.type)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono text-ergo-muted uppercase">
                      {result.type}
                    </span>
                    {result.date && (
                      <span className="text-xs font-mono text-ergo-muted">
                        • {new Date(result.date).toLocaleDateString()}
                      </span>
                    )}
                  </div>
                  <h3 className="font-mono text-lg font-semibold mb-2">
                    {result.title || result.name || result.question}
                  </h3>
                  {(result.summary || result.content || result.answer || result.description) && (
                    <p className="text-ergo-light/70 text-sm line-clamp-2">
                      {result.summary || result.content || result.answer || result.description}
                    </p>
                  )}
                  {result.topics && result.topics.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {result.topics.slice(0, 3).map((topic: string) => (
                        <span
                          key={topic}
                          className="text-xs font-mono px-2 py-1 bg-ergo-orange/10 text-ergo-orange rounded"
                        >
                          #{topic}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* No Results */}
      {!isSearching && query && results.length === 0 && (
        <div className="text-center py-12">
          <Search className="w-16 h-16 text-ergo-muted mx-auto mb-4" />
          <h2 className="text-xl font-mono font-semibold mb-2">No results found</h2>
          <p className="text-ergo-muted font-mono mb-6">
            Try different keywords or browse by category
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/calls"
              className="px-4 py-2 bg-ergo-dark border border-ergo-orange/30 rounded font-mono text-sm hover:border-ergo-orange transition-colors"
            >
              Browse Calls
            </Link>
            <Link
              to="/topics"
              className="px-4 py-2 bg-ergo-dark border border-ergo-orange/30 rounded font-mono text-sm hover:border-ergo-orange transition-colors"
            >
              Browse Topics
            </Link>
            <Link
              to="/faq"
              className="px-4 py-2 bg-ergo-dark border border-ergo-orange/30 rounded font-mono text-sm hover:border-ergo-orange transition-colors"
            >
              Browse FAQ
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
