import React, { useState } from 'react';
import { PageType } from '../types';
import { 
  User, 
  MessageCircle, 
  Mail, 
  MapPin, 
  ArrowRight, 
  Play, 
  Pause, 
  ShieldCheck, 
  Code2, 
  Sparkles, 
  CheckCircle2,
  Terminal
} from 'lucide-react';

interface FounderPageProps {
  onNavigate: (page: PageType) => void;
  onOpenDemo: () => void;
}

export const FounderPage: React.FC<FounderPageProps> = ({ onNavigate, onOpenDemo }) => {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8F5F0]">
      {/* Hero */}
      <section className="pt-14 pb-16 border-b border-[#E4DCD3] bg-[#F8F5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Founder Narrative (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EDE4D9] text-[#B85F45] text-xs font-bold tracking-wider uppercase">
                <span>Founder Profile</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold text-[#191817] tracking-tight leading-tight">
                Building a more connected future for African retail.
              </h1>

              <div className="flex items-center gap-3 pt-1 pb-1">
                <div className="w-12 h-12 rounded-full bg-[#B85F45] text-white flex items-center justify-center font-bold text-xl shadow-xs">
                  EZ
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#191817]">Ernest Zimba</h3>
                  <p className="text-xs text-[#817B75] font-medium">Founder & Lead Engineer, Mupezeni</p>
                </div>
              </div>

              <p className="text-base sm:text-lg text-[#817B75] leading-relaxed">
                I'm building Mupezeni around a problem that deserves more attention: the amount of manual work retail businesses take on because their systems don't work together.
              </p>

              <p className="text-base text-[#191817] leading-relaxed">
                A business can have customers messaging on WhatsApp, products in a catalog, sales in one application and inventory in another. But someone still has to connect those pieces. That person is often the business owner.
              </p>

              <div className="p-4 rounded-xl bg-white border border-[#E4DCD3] text-sm font-semibold text-[#B85F45]">
                “I want to help change that. I'm building Mupezeni one real business problem at a time.”
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="https://wa.me/260776091393?text=Hi%20Ernest%2C%20I'd%20like%20to%20learn%20more%20about%20Mupezeni%20and%20discuss%20my%20retail%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs inline-flex items-center gap-2 shadow-xs transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Message Ernest on WhatsApp (+260 776 091 393)</span>
                </a>

                <a
                  href="mailto:hello.mupezeni@gmail.com"
                  className="px-4 py-2.5 rounded-xl bg-white hover:bg-[#EDE4D9] text-[#191817] font-semibold text-xs border border-[#D9CEBF] inline-flex items-center gap-1.5 transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#B85F45]" />
                  <span>hello.mupezeni@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Founder Visual & Video Simulation (5 cols) */}
            <div className="lg:col-span-5">
              <div className="bg-[#191817] text-white rounded-3xl p-6 sm:p-7 border border-[#312E2B] shadow-xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#2C2926] text-xs font-mono">
                  <span className="text-[#B85F45] font-bold">FOUNDER STATEMENT</span>
                  <span className="text-[#817B75]">Lusaka, Zambia</span>
                </div>

                {/* Video Preview Card */}
                <div className="relative aspect-video rounded-2xl bg-[#24211E] border border-[#3A3632] overflow-hidden flex flex-col justify-between p-4 group">
                  <div className="flex justify-between items-center text-xs">
                    <span className="px-2 py-0.5 rounded bg-black/60 text-[#D9CEBF] font-mono text-[10px]">
                      DIRECT MESSAGE • 1:12 MIN
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  </div>

                  <div className="text-center my-auto">
                    <button
                      onClick={() => setIsPlayingVideo(!isPlayingVideo)}
                      className="w-12 h-12 rounded-full bg-[#B85F45] hover:bg-[#97442F] text-white flex items-center justify-center mx-auto shadow-md transition-transform active:scale-95"
                      aria-label="Play Founder Video Statement"
                    >
                      {isPlayingVideo ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                    </button>
                    <span className="text-xs text-[#EDE4D9] font-medium block mt-2">
                      {isPlayingVideo ? 'Playing Statement...' : 'Listen to Ernest\'s Direct Vision'}
                    </span>
                  </div>

                  <div className="text-[11px] text-[#A89F95] font-mono truncate">
                    "Retail owners spend too much time connecting systems that should work together."
                  </div>
                </div>

                {/* Founder Transcript */}
                <div className="p-4 rounded-xl bg-[#24211E] border border-[#3A3632] text-xs font-sans text-[#D9CEBF] space-y-2">
                  <div className="font-bold text-white flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#B85F45]" />
                    <span>Founder Quote & Thesis:</span>
                  </div>
                  <blockquote className="italic border-l-2 border-[#B85F45] pl-3 text-[#A89F95] text-xs leading-relaxed">
                    “I'm Ernest Zimba, founder of Mupezeni. We're building an intelligent operating system for retail businesses, starting in Zambia. The problem we're focused on is simple: business owners are still spending too much time connecting systems that should work together.”
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED FOUNDER ESSAY SECTIONS */}
      <section className="py-16 bg-white border-b border-[#E4DCD3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Why Mupezeni */}
          <div className="space-y-4">
            <span className="text-xs font-mono font-bold text-[#B85F45] uppercase">
              Section 01
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191817]">
              Why Mupezeni?
            </h2>
            <p className="text-sm sm:text-base text-[#817B75] leading-relaxed">
              My focus is on building practical AI systems that can do useful work inside real business operations. For retail, that means more than adding a chatbot to a website.
            </p>
            <p className="text-sm sm:text-base text-[#817B75] leading-relaxed">
              It means connecting business information, creating dependable workflows and giving AI workers access to the tools and information they need to perform defined tasks.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs">
              <div className="p-4 rounded-xl bg-[#F8F5F0] border border-[#E4DCD3]">
                <strong className="text-[#191817] block mb-1">Customer Support Worker</strong>
                <span className="text-[#817B75]">Able to use authorized product information rather than hallucinating stock.</span>
              </div>
              <div className="p-4 rounded-xl bg-[#F8F5F0] border border-[#E4DCD3]">
                <strong className="text-[#191817] block mb-1">Catalog Workflow</strong>
                <span className="text-[#817B75]">Understands where product specifications and prices originate.</span>
              </div>
              <div className="p-4 rounded-xl bg-[#F8F5F0] border border-[#E4DCD3]">
                <strong className="text-[#191817] block mb-1">Operational Reporting</strong>
                <span className="text-[#817B75]">Grounded in actual business transaction records and true COGS.</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-[#191817]">
              The technology matters, but so does the way it fits into the business.
            </p>
          </div>

          <hr className="border-[#E4DCD3]" />

          {/* What I'm Building */}
          <div className="space-y-4">
            <span className="text-xs font-mono font-bold text-[#B85F45] uppercase">
              Section 02
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191817]">
              What I'm Building
            </h2>
            <p className="text-sm sm:text-base text-[#817B75] leading-relaxed">
              Mupezeni is being developed as an intelligent operating system for retail, bringing sales, inventory, operational finances, digital channels and AI workers into a more connected environment.
            </p>
            <p className="text-sm sm:text-base text-[#817B75] leading-relaxed">
              I'm approaching this from the ground up: understanding retail workflows, building the technology and testing whether it solves problems businesses are willing to pay to solve.
            </p>
            <div className="p-4 rounded-xl bg-[#EDE4D9]/50 border border-[#D9CEBF] text-xs text-[#191817] font-medium">
              The goal is not to automate everything simply because automation is possible. The goal is to make the business easier to operate.
            </div>
          </div>

          <hr className="border-[#E4DCD3]" />

          {/* The Bigger Ambition */}
          <div className="space-y-4">
            <span className="text-xs font-mono font-bold text-[#B85F45] uppercase">
              Section 03
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191817]">
              The Bigger Ambition
            </h2>
            <p className="text-sm sm:text-base text-[#817B75] leading-relaxed">
              Mupezeni starts in Zambia. The longer-term ambition is to build practical technology for retail businesses across Africa, grounded in how those businesses actually operate rather than forcing them into disconnected workflows.
            </p>
            <p className="text-sm sm:text-base text-[#817B75] leading-relaxed">
              That starts with listening to business owners, testing our assumptions and building systems that earn their place in everyday operations.
            </p>

            <div className="pt-6">
              <div className="bg-[#191817] text-white p-6 rounded-2xl border border-[#312E2B] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="text-base font-bold text-white">Want to discuss your retail business with Ernest?</h4>
                  <p className="text-xs text-[#D9CEBF] mt-0.5">We are currently onboarding early retail partners in Zambia.</p>
                </div>
                <button
                  onClick={onOpenDemo}
                  className="px-5 py-2.5 rounded-xl bg-[#B85F45] hover:bg-[#97442F] text-white text-xs font-bold shrink-0 transition-colors"
                >
                  Schedule A Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
