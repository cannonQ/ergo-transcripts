import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { SearchProvider } from './contexts/SearchContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Calls from './pages/Calls';
import CallDetail from './pages/CallDetail';
import FAQ from './pages/FAQ';
import Topics from './pages/Topics';
import TopicDetail from './pages/TopicDetail';
import Decisions from './pages/Decisions';
import Speakers from './pages/Speakers';
import SpeakerDetail from './pages/SpeakerDetail';
import Marketing from './pages/Marketing';
import Learn from './pages/Learn';
import SearchResults from './pages/SearchResults';

function App() {
  return (
    <ThemeProvider>
      <SearchProvider>
        <Router>
          <Layout>
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
          </Layout>
        </Router>
      </SearchProvider>
    </ThemeProvider>
  );
}

export default App;
