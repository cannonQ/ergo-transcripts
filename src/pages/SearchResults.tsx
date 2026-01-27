import React, { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Search, Mic, User, Hash, ArrowLeft } from 'lucide-react';
import { useSearch } from '../contexts/SearchContext';

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const { results, isSearching, setQuery } = useSearch();

  // Sync URL query param to search context
  useEffect(() => {
    if (query) {
      setQuery(query);
    }
  }, [query, setQuery]);

  const getIcon = (searchType: string) => {
    switch (searchType) {
      case 'call': return <Mic className="w-5 h-5 text-term-cyan" />;
      case 'topic': return <Hash className="w-5 h-5 text-ergo-orange" />;
      case 'speaker': return <User className="w-5 h-5 text-term-green" />;
      default: return <Search className="w-5 h-5 text-ergo-muted" />;
    }
  };

  const getLink = (result: Record<string, unknown>) => {
    switch (result.searchType) {
      case 'call': return `/calls/${result.id}`;
      case 'topic': return `/topics/${result.slug || result.id}`;
      case 'speaker': return `/speakers/${encodeURIComponent(String(result.name || result.id))}`;
      default: return '#';
    }
  };

  const getLabel = (result: Record<string, unknown>) => {
    if (result.searchType === 'call') return String(result.type || 'call').replace(/_/g, ' ');
    return String(result.searchType);
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

      {/* Results - 4 column grid */}
      {!isSearching && query && results.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {results.map((result, index) => {
            const r = result as Record<string, unknown>;
            const speakers = r.speakers as string[] | undefined;
            return (
              <Link
                key={`${result.searchType}-${r.id || r.slug || r.name}-${index}`}
                to={getLink(result)}
                className="block bg-ergo-dark border border-ergo-orange/20 rounded-lg p-4 hover:border-ergo-orange/50 transition-all"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1.5 bg-ergo-darker rounded">
                    {getIcon(result.searchType)}
                  </div>
                  <span className="text-xs font-mono text-ergo-muted uppercase">
                    {getLabel(result)}
                  </span>
                  {r.date && (
                    <span className="text-xs font-mono text-ergo-muted ml-auto">
                      {String(r.date)}
                    </span>
                  )}
                </div>
                <h3 className="font-mono text-sm font-semibold text-ergo-orange mb-2 line-clamp-2">
                  {String(r.title || r.name || r.question || '')}
                </h3>
                {(r.description || r.role || r.bio) && (
                  <p className="text-ergo-light/60 text-xs line-clamp-2">
                    {String(r.description || r.role || r.bio)}
                  </p>
                )}
                {speakers && speakers.length > 0 && (
                  <p className="text-xs font-mono text-ergo-muted mt-2 line-clamp-1">
                    {speakers.filter(Boolean).join(', ')}
                  </p>
                )}
              </Link>
            );
          })}
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
