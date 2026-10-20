import React, { useState, useEffect } from 'react';
import { PageType } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';
import { HomePage } from './pages/HomePage';
import { PlatformPage } from './pages/PlatformPage';
import { WorkersPage } from './pages/WorkersPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { PricingPage } from './pages/PricingPage';
import { AboutPage } from './pages/AboutPage';
import { FounderPage } from './pages/FounderPage';
import { ContactPage } from './pages/ContactPage';
import { TermsPage } from './pages/TermsPage';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  // Sync hash routing if user pastes or changes URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageType;
      const validPages: PageType[] = [
        'home', 
        'platform', 
        'workers', 
        'how-it-works', 
        'pricing', 
        'about', 
        'founder', 
        'contact', 
        'terms'
      ];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F5F0] text-[#191817] antialiased selection:bg-[#B85F45] selection:text-white">
      {/* Navigation */}
      <Navbar 
        currentPage={currentPage} 
        onNavigate={handleNavigate} 
        onOpenDemo={() => setIsDemoModalOpen(true)} 
      />

      {/* Main Page Render */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage 
            onNavigate={handleNavigate} 
            onOpenDemo={() => setIsDemoModalOpen(true)} 
          />
        )}
        {currentPage === 'platform' && (
          <PlatformPage 
            onNavigate={handleNavigate} 
            onOpenDemo={() => setIsDemoModalOpen(true)} 
          />
        )}
        {currentPage === 'workers' && (
          <WorkersPage 
            onNavigate={handleNavigate} 
            onOpenDemo={() => setIsDemoModalOpen(true)} 
          />
        )}
        {currentPage === 'how-it-works' && (
          <HowItWorksPage 
            onNavigate={handleNavigate} 
            onOpenDemo={() => setIsDemoModalOpen(true)} 
          />
        )}
        {currentPage === 'pricing' && (
          <PricingPage 
            onNavigate={handleNavigate} 
            onOpenDemo={() => setIsDemoModalOpen(true)} 
          />
        )}
        {currentPage === 'about' && (
          <AboutPage 
            onNavigate={handleNavigate} 
            onOpenDemo={() => setIsDemoModalOpen(true)} 
          />
        )}
        {currentPage === 'founder' && (
          <FounderPage 
            onNavigate={handleNavigate} 
            onOpenDemo={() => setIsDemoModalOpen(true)} 
          />
        )}
        {currentPage === 'contact' && (
          <ContactPage 
            onNavigate={handleNavigate} 
            onOpenDemo={() => setIsDemoModalOpen(true)} 
          />
        )}
        {currentPage === 'terms' && (
          <TermsPage 
            onNavigate={handleNavigate} 
            onOpenDemo={() => setIsDemoModalOpen(true)} 
          />
        )}
      </main>

      {/* Persistent Floating WhatsApp Action */}
      <div className="fixed bottom-5 right-5 z-40">
        <a
          href="https://wa.me/260776091393?text=Hi%20Mupezeni%2C%20I'd%20like%20to%20learn%20how%20Mupezeni%20could%20help%20my%20retail%20business."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all active:scale-95 group font-semibold text-xs tracking-wide"
          aria-label="Direct WhatsApp Chat"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="hidden sm:inline font-sans font-bold">Chat with Mupezeni</span>
        </a>
      </div>

      {/* Footer */}
      <Footer 
        onNavigate={handleNavigate} 
        onOpenDemo={() => setIsDemoModalOpen(true)} 
      />

      {/* Interactive Booking & Inquiry Modal */}
      <DemoModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)} 
      />
    </div>
  );
}
