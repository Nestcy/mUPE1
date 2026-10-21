import React, { useState, useEffect } from 'react';
import { PageType } from '../types';
import { Calculator } from '../components/Calculator';
import { WorkflowSimulation } from '../components/WorkflowSimulation';
import { SystemDiagram } from '../components/SystemDiagram';
import { AI_WORKERS } from '../data/retailData';
import { 
  ArrowRight, 
  MessageCircle, 
  Layers, 
  CheckCircle2, 
  Bot, 
  Clock, 
  ShieldCheck, 
  TrendingUp, 
  Boxes, 
  FileSpreadsheet,
  Smartphone,
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Users,
  Store,
  HelpCircle,
  AlertCircle,
  Maximize2,
  X
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageType) => void;
  onOpenDemo: () => void;
}

const DEMO_SCREENS = [
  {
    id: 'demo1',
    title: 'Connected Core',
    shortLabel: 'Overview',
    subtitle: 'The Connected Retail Business',
    image: '/demo1.png',
    badge: 'Operations Hub',
    description: 'Centralized sales tracking, live inventory valuation, POS events, and synchronized business systems.'
  },
  {
    id: 'demo2',
    title: 'AI Workforce & CRM',
    shortLabel: 'AI CRM',
    subtitle: 'Every Conversation Has Potential',
    image: '/demo2.png',
    badge: 'WhatsApp Assistant',
    description: 'WhatsApp AI sales assistants check live inventory, take orders, and feed structured CRM follow-up pipelines.'
  },
  {
    id: 'demo3',
    title: 'Connected Sales Cycle',
    shortLabel: 'Sales Cycle',
    subtitle: 'From First Inquiry to Next Opportunity',
    image: '/demo3.png',
    badge: 'End-to-End Flow',
    description: 'Omnichannel customer acquisition through WhatsApp & Web, CRM lead tracking, automatic POS updates, and marketing briefs.'
  }
];

const TYPEWRITER_PHRASES = [
  "Mupezeni • The Intelligent Operating System for Retail",
  "Mupezeni • Connect Sales, Inventory, POS & WhatsApp",
  "Mupezeni • Grow Your Retail Business While You Sleep",
  "Mupezeni • Built in Zambia for African Retail",
];

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenDemo }) => {
  const [activeDemoIndex, setActiveDemoIndex] = useState(0);
  const [isZoomModalOpen, setIsZoomModalOpen] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = TYPEWRITER_PHRASES[phraseIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting && displayedText === currentPhrase) {
      // Pause after typing full phrase
      timer = setTimeout(() => setIsDeleting(true), 2400);
    } else if (isDeleting && displayedText === '') {
      // Done deleting, advance to next phrase
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % TYPEWRITER_PHRASES.length);
    } else {
      // Typing or backspacing
      const speed = isDeleting ? 24 : 52;
      timer = setTimeout(() => {
        setDisplayedText((prev) =>
          isDeleting
            ? currentPhrase.substring(0, prev.length - 1)
            : currentPhrase.substring(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, phraseIndex]);

  return (
    <div className="min-h-screen">
      {/* SECTION 1: THE CINEMATIC OPENING & HERO */}
      <section className="relative overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-24 border-b border-[#E4DCD3] bg-[#F8F5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Copy Column (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EDE4D9] text-[#B85F45] text-xs font-bold tracking-wider uppercase shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#B85F45] animate-pulse shrink-0"></span>
                <span className="font-mono min-h-[1.25rem] inline-flex items-center">
                  <span>{displayedText}</span>
                  <span className="inline-block w-1.5 h-3.5 bg-[#B85F45] ml-1 animate-pulse"></span>
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#191817] tracking-tight leading-[1.08]">
                Your retail business runs on disconnected systems. <br />
                <span className="text-[#B85F45] underline decoration-[#EDE4D9] decoration-4">It doesn't have to.</span>
              </h1>

              <p className="text-lg text-[#817B75] leading-relaxed max-w-xl">
                Your sales are in one place. Your inventory is somewhere else. Customer conversations are scattered across WhatsApp and other channels. And you're still the person making everything work together.
              </p>

              <p className="text-base font-medium text-[#191817] leading-relaxed">
                Mupezeni connects your retail operations and gives AI workers the tools and business information they need to help you run them.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  onClick={onOpenDemo}
                  className="px-6 py-3.5 rounded-xl bg-[#B85F45] hover:bg-[#97442F] text-white font-bold text-base flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <span>Book a Demo</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <button
                  onClick={() => onNavigate('how-it-works')}
                  className="px-6 py-3.5 rounded-xl bg-white hover:bg-[#EDE4D9] text-[#191817] font-semibold text-base border border-[#D9CEBF] flex items-center justify-center gap-2 transition-all"
                >
                  <span>See How It Works</span>
                  <ChevronRight className="w-4 h-4 text-[#817B75]" />
                </button>
              </div>

              {/* Value Pillar Bar */}
              <div className="pt-4 border-t border-[#E4DCD3] space-y-2">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold uppercase tracking-wider text-[#191817]">
                  <span>Sales</span>
                  <span className="text-[#817B75]">•</span>
                  <span>Inventory</span>
                  <span className="text-[#817B75]">•</span>
                  <span>Finances</span>
                  <span className="text-[#817B75]">•</span>
                  <span>Digital Channels</span>
                  <span className="text-[#817B75]">•</span>
                  <span className="text-[#B85F45]">AI Workers</span>
                </div>
                <div className="text-xs text-[#817B75]">
                  One connected retail operation. <em className="text-[#191817] font-medium not-italic">Built in Zambia, with African retail businesses in mind.</em>
                </div>
              </div>
            </div>

            {/* Visual Interface Column: Cinematic Reveal of Connected Retail (6 cols) */}
            <div className="lg:col-span-6">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                {/* Decorative background glow */}
                <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#B85F45]/20 to-[#EDE4D9] rounded-3xl blur-xl opacity-70"></div>

                {/* Main Operating System Window */}
                <div className="relative rounded-2xl bg-[#191817] border border-[#3A3632] shadow-2xl p-4 sm:p-5 text-white font-sans overflow-hidden">
                  {/* Window Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#2C2926] mb-3 text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <img src="/logo.png" alt="Mupezeni" className="h-4.5 w-auto object-contain shrink-0" />
                      <span className="font-bold text-[#EDE4D9] text-[11px] sm:text-xs">MUPEZENI OS • LIVE PREVIEW</span>
                    </div>

                    <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-950 text-emerald-400 border border-emerald-900/60 font-semibold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      SYSTEM LIVE
                    </span>
                  </div>

                  {/* Tab Selector Buttons for demo1, demo2, demo3 */}
                  <div className="flex items-center gap-1.5 p-1 bg-[#24211E] rounded-xl border border-[#332E2A] mb-3">
                    {DEMO_SCREENS.map((demo, idx) => (
                      <button
                        key={demo.id}
                        onClick={() => setActiveDemoIndex(idx)}
                        className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
                          activeDemoIndex === idx
                            ? 'bg-[#B85F45] text-white shadow-sm'
                            : 'text-[#817B75] hover:text-[#EDE4D9] hover:bg-[#2C2926]'
                        }`}
                      >
                        <span className="w-4 h-4 rounded-full text-[10px] flex items-center justify-center font-mono font-bold bg-black/30">
                          {idx + 1}
                        </span>
                        <span className="truncate">{demo.shortLabel}</span>
                      </button>
                    ))}
                  </div>

                  {/* Screenshot Display Frame */}
                  <div className="relative group rounded-xl overflow-hidden border border-[#332E2A] bg-[#141312] aspect-[3/2] shadow-inner">
                    <img
                      src={DEMO_SCREENS[activeDemoIndex].image}
                      alt={DEMO_SCREENS[activeDemoIndex].title}
                      className="w-full h-full object-cover sm:object-contain bg-[#F8F5F0] transition-transform duration-300 group-hover:scale-[1.01]"
                    />

                    {/* Left / Right Nav Arrows */}
                    <button
                      onClick={() => setActiveDemoIndex((prev) => (prev === 0 ? DEMO_SCREENS.length - 1 : prev - 1))}
                      className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/85 text-white backdrop-blur-xs opacity-80 hover:opacity-100 transition-all shadow-md"
                      aria-label="Previous demo image"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setActiveDemoIndex((prev) => (prev === DEMO_SCREENS.length - 1 ? 0 : prev + 1))}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/85 text-white backdrop-blur-xs opacity-80 hover:opacity-100 transition-all shadow-md"
                      aria-label="Next demo image"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>

                    {/* Expand Button */}
                    <button
                      onClick={() => setIsZoomModalOpen(true)}
                      className="absolute top-2 right-2 px-2.5 py-1 rounded-lg bg-black/70 hover:bg-black text-white text-[11px] font-medium backdrop-blur-xs flex items-center gap-1.5 shadow-sm opacity-90 hover:opacity-100 transition-all border border-white/10"
                      title="Enlarge image"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Enlarge</span>
                    </button>

                    {/* Screen Badge */}
                    <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-xs border border-white/10 text-white text-[10px] font-mono flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B85F45]"></span>
                      <span className="text-[#EDE4D9] font-medium">{DEMO_SCREENS[activeDemoIndex].badge}</span>
                      <span className="text-[#817B75]">•</span>
                      <span className="text-[#817B75]">Screen {activeDemoIndex + 1} of 3</span>
                    </div>
                  </div>

                  {/* Caption & Navigation Link */}
                  <div className="mt-3 pt-2.5 border-t border-[#2C2926] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                    <div className="text-[11px] text-[#A89F95]">
                      <strong className="text-white font-semibold">{DEMO_SCREENS[activeDemoIndex].title}: </strong>
                      <span>{DEMO_SCREENS[activeDemoIndex].description}</span>
                    </div>
                    <button
                      onClick={() => onNavigate('platform')}
                      className="text-[#B85F45] hover:text-[#DC836A] font-semibold flex items-center gap-1 shrink-0 text-xs self-end sm:self-auto"
                    >
                      <span>Explore Platform</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: MAKE THE PROBLEM TANGIBLE */}
      <section className="py-20 bg-white border-b border-[#E4DCD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs uppercase font-bold tracking-wider text-[#B85F45] bg-[#F6EDE9] px-3 py-1 rounded-full">
              The Operational Reality
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#191817] tracking-tight mt-3 mb-4">
              Your business is growing. Why is running it getting harder?
            </h2>
            <p className="text-base sm:text-lg text-[#817B75] leading-relaxed">
              Every new order creates work. Someone has to confirm availability, update records, respond to the customer, track payment and make sure the numbers still add up. When your tools don't communicate, the work falls back on you and your team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="p-7 rounded-2xl bg-[#F8F5F0] border border-[#E4DCD3] flex flex-col justify-between hover:border-[#B85F45]/60 transition-all group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-[#D9CEBF] flex items-center justify-center text-[#B85F45] font-mono font-bold text-lg mb-6 shadow-xs group-hover:bg-[#B85F45] group-hover:text-white transition-colors">
                  01
                </div>
                <h3 className="text-xl font-bold text-[#191817] mb-3 leading-snug">
                  Your customers are in the chat. Your business records are somewhere else.
                </h3>
                <p className="text-sm text-[#817B75] leading-relaxed mb-6">
                  Orders and enquiries arrive through WhatsApp, but the information may still need to be entered into inventory, sales records or another application.
                </p>
              </div>

              {/* Visual fragment representation */}
              <div className="p-3.5 rounded-xl bg-white border border-[#E4DCD3] text-xs font-mono space-y-2">
                <div className="flex justify-between items-center text-[#817B75]">
                  <span>WhatsApp Chat</span>
                  <span className="text-rose-600">Disconnected</span>
                </div>
                <div className="text-[11px] text-[#191817] bg-[#F8F5F0] p-2 rounded">
                  "I want to buy the black boots" → Requires manual copy to notebook
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-7 rounded-2xl bg-[#F8F5F0] border border-[#E4DCD3] flex flex-col justify-between hover:border-[#B85F45]/60 transition-all group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-[#D9CEBF] flex items-center justify-center text-[#B85F45] font-mono font-bold text-lg mb-6 shadow-xs group-hover:bg-[#B85F45] group-hover:text-white transition-colors">
                  02
                </div>
                <h3 className="text-xl font-bold text-[#191817] mb-3 leading-snug">
                  Your team spends time moving information instead of acting on it.
                </h3>
                <p className="text-sm text-[#817B75] leading-relaxed mb-6">
                  Updating products, checking stock, reconciling sales and answering repetitive questions can turn routine work into a chain of manual tasks.
                </p>
              </div>

              {/* Visual fragment representation */}
              <div className="p-3.5 rounded-xl bg-white border border-[#E4DCD3] text-xs font-mono space-y-2">
                <div className="flex justify-between items-center text-[#817B75]">
                  <span>3 Separate Tabs</span>
                  <span className="text-amber-600">Friction</span>
                </div>
                <div className="text-[11px] text-[#191817] bg-[#F8F5F0] p-2 rounded">
                  WhatsApp ↔ Excel Stock ↔ Mobile Money SMS
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-7 rounded-2xl bg-[#F8F5F0] border border-[#E4DCD3] flex flex-col justify-between hover:border-[#B85F45]/60 transition-all group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-[#D9CEBF] flex items-center justify-center text-[#B85F45] font-mono font-bold text-lg mb-6 shadow-xs group-hover:bg-[#B85F45] group-hover:text-white transition-colors">
                  03
                </div>
                <h3 className="text-xl font-bold text-[#191817] mb-3 leading-snug">
                  You cannot make confident decisions from disconnected information.
                </h3>
                <p className="text-sm text-[#817B75] leading-relaxed mb-6">
                  If your sales, product costs, expenses and inventory records are incomplete or inconsistent, understanding business performance becomes harder.
                </p>
              </div>

              {/* Visual fragment representation */}
              <div className="p-3.5 rounded-xl bg-white border border-[#E4DCD3] text-xs font-mono space-y-2">
                <div className="flex justify-between items-center text-[#817B75]">
                  <span>True Margins</span>
                  <span className="text-rose-600">Unknown</span>
                </div>
                <div className="text-[11px] text-[#191817] bg-[#F8F5F0] p-2 rounded">
                  Cash in hand ≠ True gross profit without COGS
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE QUANTIFIABLE PROBLEM (INTERACTIVE CALCULATOR) */}
      <Calculator onOpenDemo={onOpenDemo} />

      {/* SECTION 4: INTRODUCE THE SOLUTION (5 PILLARS CONNECTED SYSTEM) */}
      <SystemDiagram />

      {/* SECTION 5: DEMONSTRATE THE PRODUCT (3 WORKFLOW SIMULATIONS) */}
      <WorkflowSimulation />

      {/* SECTION 6: MEET THE AI WORKERS */}
      <section className="py-20 bg-[#F8F5F0] border-b border-[#E4DCD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <span className="text-xs uppercase font-bold tracking-wider text-[#B85F45] bg-[#EDE4D9] px-3 py-1 rounded-full">
                AI Workers with Controlled Permissions
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#191817] tracking-tight mt-3 mb-3">
                Give the repetitive work somewhere to go.
              </h2>
              <p className="text-base text-[#817B75] leading-relaxed">
                Mupezeni is designed to help businesses delegate defined tasks to AI workers that operate with controlled access to business information and approved tools. Each worker has a job. Each job has boundaries.
              </p>
            </div>

            <button
              onClick={() => onNavigate('workers')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#191817] text-white text-sm font-semibold hover:bg-[#312E2B] transition-colors self-start md:self-auto shrink-0"
            >
              <span>Explore All 6 Workers</span>
              <ArrowRight className="w-4 h-4 text-[#B85F45]" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AI_WORKERS.map((worker) => (
              <div 
                key={worker.id}
                className="bg-white rounded-2xl p-6 border border-[#E4DCD3] shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-[#B85F45] bg-[#F6EDE9] px-2.5 py-1 rounded">
                      Worker Spec
                    </span>
                    <Bot className="w-4 h-4 text-[#817B75] group-hover:text-[#B85F45] transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-[#191817] mb-1">{worker.name}</h3>
                  <p className="text-xs text-[#B85F45] font-semibold mb-3">{worker.tagline}</p>
                  <p className="text-xs text-[#817B75] leading-relaxed mb-4">{worker.description}</p>
                </div>

                <div className="pt-4 border-t border-[#F0EAE1] space-y-2">
                  <div className="text-[11px] text-[#817B75]">
                    <strong className="text-[#191817]">Boundaries:</strong> Requires human approval for non-standard actions. Never makes false claims without database lookup.
                  </div>
                  <button
                    onClick={() => onNavigate('workers')}
                    className="text-xs font-bold text-[#B85F45] hover:text-[#97442F] flex items-center gap-1 mt-2"
                  >
                    <span>View sandbox & sample query</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: WHO MUPEZENI IS FOR */}
      <section className="py-20 bg-white border-b border-[#E4DCD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs uppercase font-bold tracking-wider text-[#B85F45] bg-[#F6EDE9] px-3 py-1 rounded-full">
              Target Audience
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#191817] tracking-tight mt-3 mb-4">
              Built for retailers tired of holding everything together manually.
            </h2>
            <p className="text-base text-[#817B75] leading-relaxed">
              Mupezeni is initially focused on digital retail operations. It is not being presented as a complete replacement for every accounting package, physical point-of-sale terminal or business application. We clearly identify which workflows and integrations are supported for each implementation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#F8F5F0] border border-[#E4DCD3]">
              <div className="w-10 h-10 rounded-xl bg-[#EDE4D9] text-[#B85F45] flex items-center justify-center mb-4">
                <Store className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-[#191817] text-base mb-2">Retail & E-commerce</h3>
              <p className="text-xs text-[#817B75] leading-relaxed">
                Connect the operational work behind online orders, customer conversations and inventory without manual duplication.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8F5F0] border border-[#E4DCD3]">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
                <MessageCircle className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-[#191817] text-base mb-2">Selling via WhatsApp</h3>
              <p className="text-xs text-[#817B75] leading-relaxed">
                Make product information, order handling, customer support and payment receipt tracking more connected.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8F5F0] border border-[#E4DCD3]">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-[#191817] text-base mb-2">Multi-Channel Retailers</h3>
              <p className="text-xs text-[#817B75] leading-relaxed">
                Reduce unnecessary duplication between branch records and supported digital storefronts and social catalogs.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8F5F0] border border-[#E4DCD3]">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-[#191817] text-base mb-2">Growing Businesses</h3>
              <p className="text-xs text-[#817B75] leading-relaxed">
                Build more consistent operating workflows without relying on the owner to personally supervise every repeated task.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: THE IMPLEMENTATION OFFER */}
      <section className="py-20 bg-[#F8F5F0] border-b border-[#E4DCD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#191817] text-white rounded-3xl p-8 sm:p-12 border border-[#312E2B] shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs uppercase font-bold tracking-wider text-[#B85F45] bg-[#2D2622] px-3 py-1 rounded-md border border-[#483B33]">
                  Commercial Implementation Offer
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Get Mupezeni running in your business in 4–6 weeks.
                </h2>
                <p className="text-sm sm:text-base text-[#D9CEBF] leading-relaxed">
                  We implement and launch Mupezeni for your business within 4–6 weeks. You sign an agreement before implementation begins. You pay <strong>K1,000 for your first month when we launch the solution</strong>, with a 30-day money-back guarantee.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                  <div className="bg-[#24211E] p-4 rounded-xl border border-[#3A3632]">
                    <div className="text-xs font-mono font-bold text-[#B85F45] mb-1">STEP 01</div>
                    <div className="text-sm font-bold text-white mb-1">Understand Operations</div>
                    <p className="text-[11px] text-[#817B75]">We audit sales, products, stock, customer enquiries and financial tools.</p>
                  </div>

                  <div className="bg-[#24211E] p-4 rounded-xl border border-[#3A3632]">
                    <div className="text-xs font-mono font-bold text-[#B85F45] mb-1">STEP 02</div>
                    <div className="text-sm font-bold text-white mb-1">Configure & Build</div>
                    <p className="text-[11px] text-[#817B75]">We configure Mupezeni, set data flows, and connect supported channels.</p>
                  </div>

                  <div className="bg-[#24211E] p-4 rounded-xl border border-[#3A3632]">
                    <div className="text-xs font-mono font-bold text-emerald-400 mb-1">STEP 03</div>
                    <div className="text-sm font-bold text-white mb-1">Launch & Evaluate</div>
                    <p className="text-[11px] text-[#817B75]">First K1,000 payment due at launch. 30-day money-back guarantee starts.</p>
                  </div>
                </div>
              </div>

              {/* Price Callout */}
              <div className="lg:col-span-5 bg-[#24211E] p-7 rounded-2xl border border-[#3A3632] text-center space-y-4">
                <span className="text-xs uppercase font-bold text-[#817B75] tracking-wider block">
                  All-Inclusive Retail Monthly
                </span>
                <div className="font-mono text-5xl font-extrabold text-white">
                  K1,000 <span className="text-base font-normal text-[#817B75]">/ month</span>
                </div>
                <div className="text-xs text-[#D9CEBF] space-y-1">
                  <div>✓ Implementation and launch within 4–6 weeks</div>
                  <div>✓ First month payment due ONLY at launch</div>
                  <div>✓ 30-day money-back guarantee under stated terms</div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={onOpenDemo}
                    className="w-full py-3.5 px-4 rounded-xl bg-[#B85F45] hover:bg-[#97442F] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
                  >
                    <span>Let's talk about your business</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: CLOSING STATEMENT */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-12 h-12 rounded-2xl bg-[#B85F45] text-white flex items-center justify-center font-bold text-2xl mx-auto">
            M
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#191817] tracking-tight leading-tight">
            Your business should not depend on you remembering every little thing.
          </h2>
          <p className="text-base sm:text-lg text-[#817B75] max-w-2xl mx-auto leading-relaxed">
            Connect your operations. Reduce repetitive work. Give your team better access to business information. Build a retail business that can do more without making every task your responsibility.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenDemo}
              className="px-8 py-3.5 rounded-xl bg-[#B85F45] hover:bg-[#97442F] text-white font-bold text-base flex items-center gap-2 shadow-sm transition-all"
            >
              <span>Talk to Mupezeni</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="https://wa.me/260776091393?text=Hi%20Mupezeni%2C%20I'd%20like%20to%20learn%20how%20Mupezeni%20could%20help%20my%20retail%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl border border-[#2D6A4F] text-[#2D6A4F] bg-emerald-50/50 hover:bg-emerald-100/50 text-base font-semibold flex items-center gap-2 transition-all"
            >
              <MessageCircle className="w-5 h-5 text-emerald-600" />
              <span>WhatsApp: +260 776 091 393</span>
            </a>
          </div>

          <div className="text-xs text-[#817B75] pt-4">
            Email: <a href="mailto:hello.mupezeni@gmail.com" className="text-[#191817] font-medium underline">hello.mupezeni@gmail.com</a>
          </div>
        </div>
      </section>

      {/* Zoom / Lightbox Modal for Screenshots */}
      {isZoomModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setIsZoomModalOpen(false)}
        >
          <div 
            className="relative w-full max-w-6xl max-h-[92vh] flex flex-col bg-[#191817] rounded-2xl border border-[#3A3632] shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 bg-[#211E1C] border-b border-[#332E2A] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src="/logo.png" alt="Mupezeni" className="h-7 w-auto object-contain shrink-0" />
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white">
                    {DEMO_SCREENS[activeDemoIndex].title} — {DEMO_SCREENS[activeDemoIndex].subtitle}
                  </h3>
                  <p className="text-xs text-[#817B75] hidden sm:block">
                    {DEMO_SCREENS[activeDemoIndex].description}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {/* 1, 2, 3 Switchers inside modal */}
                <div className="flex items-center gap-1 bg-[#141312] p-1 rounded-lg border border-[#2C2926]">
                  {DEMO_SCREENS.map((demo, idx) => (
                    <button
                      key={demo.id}
                      onClick={() => setActiveDemoIndex(idx)}
                      className={`px-2.5 py-1 rounded text-xs font-semibold transition-all ${
                        activeDemoIndex === idx
                          ? 'bg-[#B85F45] text-white'
                          : 'text-[#817B75] hover:text-white'
                      }`}
                    >
                      {demo.shortLabel}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setIsZoomModalOpen(false)}
                  className="p-1.5 rounded-lg bg-[#2C2926] text-[#817B75] hover:text-white hover:bg-[#3A3632] transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Image Display */}
            <div className="relative flex-1 overflow-auto bg-[#141312] p-2 sm:p-4 flex items-center justify-center">
              <img
                src={DEMO_SCREENS[activeDemoIndex].image}
                alt={DEMO_SCREENS[activeDemoIndex].title}
                className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-lg border border-[#2C2926]"
              />

              <button
                onClick={() => setActiveDemoIndex((prev) => (prev === 0 ? DEMO_SCREENS.length - 1 : prev - 1))}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/70 hover:bg-black text-white shadow-xl backdrop-blur-xs transition-transform active:scale-95"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setActiveDemoIndex((prev) => (prev === DEMO_SCREENS.length - 1 ? 0 : prev + 1))}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/70 hover:bg-black text-white shadow-xl backdrop-blur-xs transition-transform active:scale-95"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
