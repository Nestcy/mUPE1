import React from 'react';
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
  Sparkles,
  Users,
  Store,
  HelpCircle,
  AlertCircle
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageType) => void;
  onOpenDemo: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenDemo }) => {
  return (
    <div className="min-h-screen">
      {/* SECTION 1: THE CINEMATIC OPENING & HERO */}
      <section className="relative overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-24 border-b border-[#E4DCD3] bg-[#F8F5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Copy Column (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EDE4D9] text-[#B85F45] text-xs font-bold tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-[#B85F45] animate-pulse"></span>
                <span>Mupezeni • The Intelligent Operating System for Retail</span>
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
                <div className="relative rounded-2xl bg-[#191817] border border-[#3A3632] shadow-2xl p-5 sm:p-6 text-white font-sans overflow-hidden">
                  {/* Window Bar */}
                  <div className="flex items-center justify-between pb-4 border-b border-[#2C2926] mb-4 text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#B85F45]"></div>
                      <span className="font-bold text-[#EDE4D9]">MUPEZENI OS • LUSAKA DISPATCH</span>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-950 text-emerald-400 border border-emerald-900/60 font-semibold">
                      ● ALL 5 SYSTEMS SYNCED
                    </span>
                  </div>

                  {/* Connected Interface Simulation */}
                  <div className="space-y-3.5 text-xs">
                    {/* Live Event 1: WhatsApp incoming query handled by AI worker */}
                    <div className="p-3.5 rounded-xl bg-[#24211E] border border-[#3A3632] flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-emerald-950 text-emerald-400 shrink-0">
                        <MessageCircle className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between text-[11px] mb-1">
                          <span className="font-semibold text-emerald-400">WhatsApp AI Support Worker</span>
                          <span className="text-[#817B75] font-mono">Just now</span>
                        </div>
                        <p className="text-white font-medium truncate">
                          Customer: "Do you have size 42 black Chelsea boots?"
                        </p>
                        <p className="text-[#817B75] text-[11px] mt-0.5">
                          ✓ Verified inventory (3 in stock, Cairo Road) → Replied with price K650.
                        </p>
                      </div>
                    </div>

                    {/* Live Event 2: Sale recorded & inventory deducted */}
                    <div className="p-3.5 rounded-xl bg-[#24211E] border border-[#3A3632] flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-[#3D251E] text-[#B85F45] shrink-0">
                        <Boxes className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between text-[11px] mb-1">
                          <span className="font-semibold text-[#B85F45]">Inventory & Sales Synchronization</span>
                          <span className="text-[#817B75] font-mono">2 mins ago</span>
                        </div>
                        <div className="flex justify-between items-center text-white">
                          <span className="font-medium">Order #ORD-8921 (Airtel MoMo)</span>
                          <span className="font-mono font-bold text-emerald-400">+K650.00</span>
                        </div>
                        <p className="text-[#817B75] text-[11px] mt-0.5">
                          Stock count updated: 14 → 13 units at Cairo Road. Web catalog synced.
                        </p>
                      </div>
                    </div>

                    {/* Live Event 3: Operational numbers summary */}
                    <div className="p-3.5 rounded-xl bg-[#211E1C] border border-[#332E2A] grid grid-cols-3 gap-2 text-center">
                      <div className="p-2 rounded-lg bg-[#191817]">
                        <span className="text-[10px] text-[#817B75] block uppercase">Today's Sales</span>
                        <span className="font-mono font-bold text-white text-sm">K12,450</span>
                      </div>
                      <div className="p-2 rounded-lg bg-[#191817]">
                        <span className="text-[10px] text-[#817B75] block uppercase">Gross Margin</span>
                        <span className="font-mono font-bold text-emerald-400 text-sm">42.1%</span>
                      </div>
                      <div className="p-2 rounded-lg bg-[#191817]">
                        <span className="text-[10px] text-[#817B75] block uppercase">AI Tasks</span>
                        <span className="font-mono font-bold text-[#B85F45] text-sm">34 Done</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#2C2926] flex items-center justify-between text-[11px] text-[#817B75]">
                    <span>Sample demonstration interface</span>
                    <button
                      onClick={() => onNavigate('platform')}
                      className="text-[#B85F45] hover:text-[#DC836A] font-semibold flex items-center gap-1"
                    >
                      <span>Explore full platform architecture</span>
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
                  We implement and launch Mupezeni for your business within 4–6 weeks. You sign an agreement before implementation begins. You pay <strong>K2,000 for your first month when we launch the solution</strong>, with a 30-day money-back guarantee.
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
                    <p className="text-[11px] text-[#817B75]">First K2,000 payment due at launch. 30-day money-back guarantee starts.</p>
                  </div>
                </div>
              </div>

              {/* Price Callout */}
              <div className="lg:col-span-5 bg-[#24211E] p-7 rounded-2xl border border-[#3A3632] text-center space-y-4">
                <span className="text-xs uppercase font-bold text-[#817B75] tracking-wider block">
                  All-Inclusive Retail Monthly
                </span>
                <div className="font-mono text-5xl font-extrabold text-white">
                  K2,000 <span className="text-base font-normal text-[#817B75]">/ month</span>
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
    </div>
  );
};
