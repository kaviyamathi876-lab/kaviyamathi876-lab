import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { WeekPage } from './pages/WeekPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Scroll to top upon navigating to a new route
const ScrollToTopOnRoute = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    // If not navigating with a hash anchor, scroll to top
    if (!window.location.hash.includes('#')) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTopOnRoute />
      <div className="min-h-screen bg-navy-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/protosem/:weekSlug" element={<WeekPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
};

export default App;
