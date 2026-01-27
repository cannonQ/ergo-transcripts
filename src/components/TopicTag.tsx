import React from 'react';
import { Link } from 'react-router-dom';
import { Hash } from 'lucide-react';

interface TopicTagProps {
  topic: string;
  count?: number;
  size?: 'sm' | 'md' | 'lg';
}

export default function TopicTag({ topic, count, size = 'sm' }: TopicTagProps) {
  const sizeClasses = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-3 py-1.5',
    lg: 'text-base px-4 py-2',
  };

  const slug = topic.toLowerCase().replace(/\s+/g, '-');

  return (
    <Link
      to={`/topics/${slug}`}
      className={`inline-flex items-center gap-1 bg-ergo-dark/50 border border-ergo-orange/30 rounded font-mono hover:border-ergo-orange hover:bg-ergo-orange/10 transition-all ${sizeClasses[size]}`}
    >
      <Hash className="w-3 h-3 text-ergo-orange" />
      <span>{topic}</span>
      {count && (
        <span className="text-ergo-muted ml-1">({count})</span>
      )}
    </Link>
  );
}
