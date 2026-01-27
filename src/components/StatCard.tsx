import React from 'react';

interface StatCardProps {
  label: string;
  value: string | number;
  loading?: boolean;
}

export default function StatCard({ label, value, loading = false }: StatCardProps) {
  return (
    <div className="font-mono text-term-green text-sm flex items-baseline gap-1 overflow-hidden">
      <span className="terminal-prompt shrink-0">{label}</span>
      <span className="flex-1 overflow-hidden whitespace-nowrap text-term-green/40">
        {'·'.repeat(50)}
      </span>
      <span className="text-term-amber shrink-0">
        {loading ? (
          <span className="animate-pulse">...</span>
        ) : (
          value
        )}
      </span>
    </div>
  );
}
