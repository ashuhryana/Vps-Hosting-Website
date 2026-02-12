
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Pricing } from './pages/Pricing';
import { Services } from './pages/Services';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Dashboard } from './pages/Dashboard';
import { Support } from './pages/Support';
import { About } from './pages/About';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsConditions } from './pages/TermsConditions';
import { RefundPolicy } from './pages/RefundPolicy';
import { Network } from './pages/Network';
import { AuthProvider, useAuth } from './context/AuthContext';

export const navigate = (path: string, e?: React.MouseEvent) => {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  window.location.hash = path;
};

const AppContent: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#/');
  const { isAuthenticated, isLoading } = useAuth();

  useEffect(() => {
    const handleHashChange = () => {
      const newPath = window.location.hash || '#/';
      setCurrentPath(newPath);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Protected Route Logic
  useEffect(() => {
    if (!isLoading && currentPath === '#/dashboard' && !isAuthenticated) {
      navigate('#/login');
    }
  }, [currentPath, isAuthenticated, isLoading]);

  const renderPage = () => {
    if (isLoading) return (
      <div className="min-h-screen flex items-center justify-center bg-[#050505]">
        <div className="w-12 h-12 border-4 border-[#C0392B] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );

    switch (currentPath) {
      case '#/': return <Home />;
      case '#/pricing': return <Pricing />;
      case '#/services': return <Services />;
      case '#/network': return <Network />;
      case '#/login': return <Login />;
      case '#/register': return <Register />;
      case '#/dashboard': return <Dashboard />;
      case '#/support': return <Support />;
      case '#/about': return <About />;
      case '#/privacy': return <PrivacyPolicy />;
      case '#/terms': return <TermsConditions />;
      case '#/refund': return <RefundPolicy />;
      default: return <Home />;
    }
  };

  const isDashboard = currentPath === '#/dashboard';
  const isAuth = currentPath === '#/login' || currentPath === '#/register';

  return (
    <div className="min-h-screen flex flex-col font-jakarta bg-slate-50 dark:bg-[#050505] transition-colors duration-300">
      {!isDashboard && <Navbar currentPath={currentPath} />}
      <main className={`flex-grow ${isDashboard ? '' : 'pt-16'} overflow-hidden`}>
        <div key={currentPath} className="animate-reveal">
          {renderPage()}
        </div>
      </main>
      {!isDashboard && !isAuth && <Footer />}
    </div>
  );
};

const App: React.FC = () => (
  <AuthProvider>
    <AppContent />
  </AuthProvider>
);

export default App;
