import React, { useState } from 'react';
import { PageType } from '../types';
import { 
  Menu, 
  X, 
  ArrowRight, 
  MessageCircle, 
  Layers, 
  Bot, 
  Clock, 
  Tag, 
  Info, 
  User, 
  PhoneCall 
} from 'lucide-react';

interface NavbarProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
  onOpenDemo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenDemo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageType; label: string; icon: React.ReactNode }[] = [
    { id: 'platform', label: 'Platform', icon: <Layers className="w-4 h-4" /> },
    { id: 'workers', label: 'AI Workers', icon: <Bot className="w-4 h-4" /> },
    { id: 'how-it-works', label: 'How It Works', icon: <Clock className="w-4 h-4" /> },
    { id: 'pricing', label: 'Pricing', icon: <Tag className="w-4 h-4" /> },
    { id: 'about', label: 'About', icon: <Info className="w-4 h-4" /> },
    { id: 'founder', label: 'Founder', icon: <User className="w-4 h-4" /> },
    { id: 'contact', label: 'Contact', icon: <PhoneCall className="w-4 h-4" /> },
  ];

  const handleNav = (page: PageType) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#F8F5F0]/90 backdrop-blur-md border-b border-[#E4DCD3] transition-all">
      {/* Top Banner with Zambian Retail Context & Commercial Offer */}
      <div className="bg-[#191817] text-[#EDE4D9] text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B85F45] animate-pulse"></span>
            <span className="font-medium tracking-wide">
              Mupezeni Operating System for African Retail
            </span>
            <span className="hidden md:inline text-[#817B75]">•</span>
            <span className="hidden md:inline text-[#D9CEBF]">
              K2,000 / month • Launch in 4–6 weeks • 30-day money-back guarantee
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a 
              href="https://wa.me/260776091393?text=Hi%20Mupezeni%2C%20I'd%20like%20to%20learn%20how%20Mupezeni%20could%20help%20my%20retail%20business." 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp: +260 776 091 393</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand Logo */}
        <button 
          onClick={() => handleNav('home')} 
          className="flex items-center gap-3 text-left group focus:outline-none"
        >
          {/* Terracotta Monogram */}
          <div className="w-9 h-9 rounded-lg bg-[#B85F45] text-white flex items-center justify-center font-bold text-lg shadow-sm group-hover:bg-[#97442F] transition-colors">
            M
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold tracking-wider text-xl text-[#191817] leading-none">
              MUPEZENI
            </span>
            <span className="text-[10px] tracking-wider text-[#817B75] uppercase font-semibold mt-0.5">
              Retail Operating System
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`px-3.5 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive 
                    ? 'text-[#B85F45] bg-[#EDE4D9]/60 font-semibold' 
                    : 'text-[#191817] hover:text-[#B85F45] hover:bg-[#EDE4D9]/30'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://wa.me/260776091393?text=Hi%20Mupezeni%2C%20I'd%20like%20to%20learn%20how%20Mupezeni%20could%20help%20my%20retail%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-[#2D6A4F] hover:bg-[#EDE4D9]/50 rounded-lg transition-colors flex items-center gap-1.5 text-sm font-medium"
            title="Chat on WhatsApp"
          >
            <MessageCircle className="w-4 h-4 text-[#2D6A4F]" />
            <span className="text-xs">Quick Chat</span>
          </a>

          <button
            onClick={onOpenDemo}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#B85F45] text-white text-sm font-semibold hover:bg-[#97442F] active:scale-[0.98] transition-all shadow-sm"
          >
            <span>Book a Demo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Menu Toggle & WhatsApp button */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href="https://wa.me/260776091393?text=Hi%20Mupezeni%2C%20I'd%20like%20to%20learn%20how%20Mupezeni%20could%20help%20my%20retail%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-emerald-700 bg-emerald-50 rounded-lg border border-emerald-200"
            aria-label="WhatsApp Us"
          >
            <MessageCircle className="w-5 h-5" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#191817] hover:bg-[#EDE4D9] rounded-lg transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E4DCD3] bg-[#F8F5F0] px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-1 mb-4">
            <button
              onClick={() => handleNav('home')}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium ${
                currentPage === 'home' ? 'text-[#B85F45] bg-[#EDE4D9]' : 'text-[#191817]'
              }`}
            >
              <span>Home</span>
            </button>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium ${
                  currentPage === link.id ? 'text-[#B85F45] bg-[#EDE4D9]' : 'text-[#191817]'
                }`}
              >
                {link.icon}
                <span>{link.label}</span>
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-[#E4DCD3] flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="w-full py-3 rounded-lg bg-[#B85F45] text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="https://wa.me/260776091393?text=Hi%20Mupezeni%2C%20I'd%20like%20to%20learn%20how%20Mupezeni%20could%20help%20my%20retail%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-lg border border-[#2D6A4F] text-[#2D6A4F] text-sm font-medium flex items-center justify-center gap-2 bg-emerald-50/50"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp (+260 776 091 393)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
