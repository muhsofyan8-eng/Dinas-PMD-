
import React, { Suspense, lazy, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AIChatBot from './components/AIChatBot';

// Helper to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Profile = lazy(() => import('./pages/Profile'));
const News = lazy(() => import('./pages/News'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));
const PPID = lazy(() => import('./pages/PPID'));
const Regulations = lazy(() => import('./pages/Regulations'));
const DataDesa = lazy(() => import('./pages/DataDesa'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Agenda = lazy(() => import('./pages/Agenda'));
const Announcements = lazy(() => import('./pages/Announcements'));

const Loading = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="flex flex-col items-center space-y-4">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-900"></div>
      <p className="text-blue-900 font-bold animate-pulse">Memuat Halaman...</p>
    </div>
  </div>
);

function App() {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith('/admin');

  return (
    <div className="flex flex-col min-h-screen">
      {!isAdminPage && <Header />}
      <ScrollToTop />
      <main className="flex-grow">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/news" element={<News />} />
            <Route path="/services" element={<Services />} />
            <Route path="/ppid" element={<PPID />} />
            <Route path="/regulations" element={<Regulations />} />
            <Route path="/data-desa" element={<DataDesa />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/agenda" element={<Agenda />} />
            <Route path="/announcements" element={<Announcements />} />
          </Routes>
        </Suspense>
      </main>
      {!isAdminPage && <Footer />}
      {!isAdminPage && <AIChatBot />}
    </div>
  );
}

// Wrapper to provide location context to App
const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
