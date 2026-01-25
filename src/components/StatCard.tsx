import React from 'react';

interface StatCardProps {
  label: string;
  value: string | number;
  loading?: boolean;
}

export default function StatCard({ label, value, loading = false }: StatCardProps) {
  return (
    <div className="font-mono text-term-green text-sm">
      <span className="terminal-prompt">{label}</span>
      <span className="ml-2">
        {Array(Math.max(0, 25 - label.length)).fill('.').join('')}
      </span>
      <span className="ml-2 text-term-amber">
        {loading ? (
          <span className="animate-pulse">...</span>
        ) : (
          value
        )}
      </span>
    </div>
  );
}
