import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ServicesPage from './components/ServicesPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import FAQPage from './components/FAQPage';
import AGBPage from './components/AGBPage';
import ImpressumPage from './components/ImpressumPage';
import type { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [contactSubject, setContactSubject] = useState('');

  const handleSetPage = useCallback((page: Page, subject: string = '') => {
    setCurrentPage(page);
    setContactSubject(subject);
    window.scrollTo(0, 0);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleSetPage} />;
      case 'services':
        return <ServicesPage onNavigate={handleSetPage} />;
      case 'about':
        return <AboutPage />;
      case 'faq':
        return <FAQPage />;
      case 'agb':
        return <AGBPage />;
      case 'impressum':
        return <ImpressumPage />;
      case 'contact':
        return <ContactPage initialSubject={contactSubject} />;
      default:
        return <HomePage onNavigate={handleSetPage} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-brand-light font-sans text-brand-dark">
      <Header currentPage={currentPage} onNavigate={handleSetPage} />
      <main className="flex-grow">
        <div key={currentPage} className="page-transition-enter">
          {renderPage()}
        </div>
      </main>
      <Footer onNavigate={handleSetPage} />
    </div>
  );
};

export default App;
