import React from 'react';
import { PageType } from '../types';
import { MessageCircle, Mail, MapPin, ShieldCheck, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageType) => void;
  onOpenDemo: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenDemo }) => {
  const handleNav = (p: PageType) => {
    onNavigate(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#191817] text-[#EDE4D9] pt-16 pb-12 border-t border-[#312E2B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top summary row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#2C2926]">
          {/* Brand Column */}
          <div className="lg:col-span-2 pr-0 lg:pr-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#B85F45] text-white flex items-center justify-center font-bold text-base">
                M
              </div>
              <span className="font-extrabold tracking-wider text-xl text-white">
                MUPEZENI
              </span>
            </div>
            <p className="text-sm text-[#D9CEBF] leading-relaxed mb-4 max-w-md">
              The intelligent operating system for retail. Connect your sales, inventory, finances, digital storefronts and AI workers in one unified platform.
            </p>
            <p className="text-xs font-semibold text-[#B85F45] tracking-wide uppercase mb-6">
              Grow your retail business while you sleep.
            </p>

            <div className="flex flex-col gap-2.5 text-xs text-[#A89F95]">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#B85F45]" />
                <span>Lusaka, Zambia • Built for African Retail Realities</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>30-Day Money-Back Guarantee After Launch</span>
              </div>
            </div>
          </div>

          {/* Platform & Product */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Platform & Features
            </h4>
            <ul className="space-y-2.5 text-xs text-[#D9CEBF]">
              <li>
                <button onClick={() => handleNav('platform')} className="hover:text-white transition-colors">
                  Connected Retail Core
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('platform')} className="hover:text-white transition-colors">
                  Inventory & Multi-Branch
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('platform')} className="hover:text-white transition-colors">
                  WhatsApp Order Flows
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('workers')} className="hover:text-white transition-colors">
                  AI Workers Catalog
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('platform')} className="hover:text-white transition-colors">
                  Financial Visibility (COGS & Margins)
                </button>
              </li>
            </ul>
          </div>

          {/* Company & Process */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Company & Process
            </h4>
            <ul className="space-y-2.5 text-xs text-[#D9CEBF]">
              <li>
                <button onClick={() => handleNav('how-it-works')} className="hover:text-white transition-colors">
                  How It Works (4–6 Weeks)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('pricing')} className="hover:text-white transition-colors">
                  Pricing (K2,000 / month)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-white transition-colors">
                  About Mupezeni Mission
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('founder')} className="hover:text-white transition-colors">
                  Meet the Founder (Ernest Zimba)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('terms')} className="hover:text-white transition-colors">
                  Guarantee & Terms
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Contact Actions */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Direct Contact
            </h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/260776091393?text=Hi%20Mupezeni%2C%20I'd%20like%20to%20learn%20how%20Mupezeni%20could%20help%20my%20retail%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-[#24211E] border border-[#3A3632] hover:border-[#2D6A4F] text-xs transition-colors group"
              >
                <div className="flex items-center gap-2 text-emerald-400">
                  <MessageCircle className="w-4 h-4" />
                  <span className="font-semibold">+260 776 091 393</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#817B75] group-hover:text-emerald-400" />
              </a>

              <a
                href="mailto:hello.mupezeni@gmail.com"
                className="flex items-center justify-between p-2.5 rounded-lg bg-[#24211E] border border-[#3A3632] hover:border-[#B85F45] text-xs transition-colors group"
              >
                <div className="flex items-center gap-2 text-[#D9CEBF]">
                  <Mail className="w-4 h-4 text-[#B85F45]" />
                  <span className="font-medium">hello.mupezeni@gmail.com</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#817B75] group-hover:text-[#B85F45]" />
              </a>

              <button
                onClick={onOpenDemo}
                className="w-full mt-2 py-2 px-3 rounded-lg bg-[#B85F45] hover:bg-[#97442F] text-white text-xs font-semibold text-center transition-colors"
              >
                Book Operational Demo
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright & truth-in-advertising disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#817B75]">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Mupezeni Technologies. Built in Zambia.</span>
            <span>•</span>
            <button onClick={() => handleNav('terms')} className="hover:underline">
              Privacy & Commercial Terms
            </button>
          </div>

          <div className="text-[11px] text-[#A89F95] text-center md:text-right max-w-xl">
            Important rule: We do not invent statistics about Zambian retailers or guarantee fixed savings. All calculator outputs represent illustrative scenarios based on user inputs.
          </div>
        </div>
      </div>
    </footer>
  );
};
