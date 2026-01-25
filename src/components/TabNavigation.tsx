import React from 'react';

interface Tab {
  id: string;
  label: string;
  count?: number;
}

interface TabNavigationProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export default function TabNavigation({ tabs, activeTab, onTabChange }: TabNavigationProps) {
  return (
    <div className="border-b border-ergo-orange/20">
      <nav className="flex space-x-8 overflow-x-auto">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`
              py-3 px-1 font-mono text-sm whitespace-nowrap border-b-2 transition-all
              ${activeTab === tab.id 
                ? 'border-ergo-orange text-ergo-orange' 
                : 'border-transparent text-ergo-muted hover:text-ergo-light hover:border-ergo-orange/50'
              }
            `}
          >
            {tab.label}
            {tab.count !== undefined && (
              <span className="ml-2 text-xs text-ergo-muted">({tab.count})</span>
            )}
          </button>
        ))}
      </nav>
    </div>
  );
}
