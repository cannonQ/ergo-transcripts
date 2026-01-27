import React from 'react';

interface StatCardProps {
  label: string;
  value: string | number;
  loading?: boolean;
}

export default function StatCard({ label, value, loading = false }: StatCardProps) {
  const displayValue = loading ? <span className="animate-pulse">...</span> : value;

  return (
    <>
      {/* Mobile: stacked label + value */}
      <div className="md:hidden font-mono text-term-green">
        <div className="text-[10px] leading-tight truncate opacity-70">{label}</div>
        <div className="text-term-amber text-sm font-bold">{displayValue}</div>
      </div>
      {/* Desktop: horizontal with dot leaders */}
      <div className="hidden md:flex font-mono text-term-green text-sm items-baseline gap-1 overflow-hidden">
        <span className="terminal-prompt shrink-0">{label}</span>
        <span className="flex-1 overflow-hidden whitespace-nowrap text-term-green/40">
          {'·'.repeat(50)}
        </span>
        <span className="text-term-amber shrink-0">{displayValue}</span>
      </div>
    </>
  );
}
