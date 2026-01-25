import React from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../contexts/SearchContext';

interface SearchBarProps {
  placeholder?: string;
  className?: string;
  autoFocus?: boolean;
}

export default function SearchBar({ 
  placeholder = "Search calls, decisions, Q&A...", 
  className = "",
  autoFocus = false 
}: SearchBarProps) {
  const { query, setQuery } = useSearch();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ergo-muted" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          autoFocus={autoFocus}
          className="w-full pl-12 pr-4 py-3 bg-ergo-dark border border-ergo-orange/30 rounded-lg font-mono text-sm placeholder-ergo-muted/50 focus:outline-none focus:border-ergo-orange focus:ring-1 focus:ring-ergo-orange/50 transition-all"
        />
        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-ergo-muted/50 font-mono">
          Press Enter
        </div>
      </div>
    </form>
  );
}
