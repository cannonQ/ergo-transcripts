import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './contexts/ThemeContext';
import { DataProvider } from './contexts/DataContext';
import { SearchProvider } from './contexts/SearchContext';
import ErrorBoundary from './components/ErrorBoundary';
import Layout from './components/Layout';
import Home from './pages/Home';

// Lazy-loaded routes for code splitting
const Calls = lazy(() => import('./pages/Calls'));
const CallDetail = lazy(() => import('./pages/CallDetail'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Topics = lazy(() => import('./pages/Topics'));
const TopicDetail = lazy(() => import('./pages/TopicDetail'));
const Decisions = lazy(() => import('./pages/Decisions'));
const Speakers = lazy(() => import('./pages/Speakers'));
const SpeakerDetail = lazy(() => import('./pages/SpeakerDetail'));
const Marketing = lazy(() => import('./pages/Marketing'));
const Learn = lazy(() => import('./pages/Learn'));
const SearchResults = lazy(() => import('./pages/SearchResults'));

function PageLoader() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="text-center">
        <div className="w-8 h-8 border-2 border-ergo-orange border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="font-mono text-sm text-ergo-muted">Loading...</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <HelmetProvider>
    <ThemeProvider>
      <DataProvider>
        <SearchProvider>
          <Router>
            <ErrorBoundary>
              <Layout>
                <Suspense fallback={<PageLoader />}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/calls" element={<Calls />} />
                    <Route path="/calls/:id" element={<CallDetail />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/topics" element={<Topics />} />
                    <Route path="/topics/:slug" element={<TopicDetail />} />
                    <Route path="/decisions" element={<Decisions />} />
                    <Route path="/speakers" element={<Speakers />} />
                    <Route path="/speakers/:name" element={<SpeakerDetail />} />
                    <Route path="/marketing" element={<Marketing />} />
                    <Route path="/learn" element={<Learn />} />
                    <Route path="/search" element={<SearchResults />} />
                  </Routes>
                </Suspense>
              </Layout>
            </ErrorBoundary>
          </Router>
        </SearchProvider>
      </DataProvider>
    </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
