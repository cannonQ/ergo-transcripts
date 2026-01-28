import React, { useRef, useState, useEffect, useCallback } from 'react';

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
  const navRef = useRef<HTMLElement>(null);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = useCallback(() => {
    const el = navRef.current;
    if (!el) return;
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  }, []);

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, [checkScroll]);

  return (
    <div className="relative border-b border-ergo-orange/20">
      <nav
        ref={navRef}
        onScroll={checkScroll}
        className="flex space-x-8 overflow-x-auto scrollbar-hide"
      >
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

      {/* Scroll-aware fade hint */}
      {canScrollRight && (
        <div
          className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-ergo-darker to-transparent pointer-events-none lg:hidden"
          aria-hidden="true"
        />
      )}
    </div>
  );
}
