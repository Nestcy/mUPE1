import React from 'react';
import { PageType } from '../types';
import { 
  Building2, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  User, 
  Globe2 
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageType) => void;
  onOpenDemo: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenDemo }) => {
  return (
    <div className="min-h-screen bg-[#F8F5F0]">
      {/* Hero */}
      <section className="pt-14 pb-16 border-b border-[#E4DCD3] bg-[#F8F5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <span className="text-xs uppercase font-bold tracking-wider text-[#B85F45] bg-[#EDE4D9] px-3 py-1 rounded-full">
              Our Mission
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#191817] tracking-tight">
              Retail businesses deserve better systems.
            </h1>
            <p className="text-lg text-[#817B75] leading-relaxed">
              Mupezeni is building an intelligent operating system for retail businesses, beginning in Zambia and looking toward the wider African market.
            </p>
            <p className="text-base text-[#191817] font-medium leading-relaxed">
              We believe business owners should not have to spend their days manually connecting information that should already work together.
            </p>
            <p className="text-sm text-[#817B75] leading-relaxed">
              Sales, stock, finances, digital channels and customer conversations are different parts of the same business. They should operate with a shared understanding of what is happening. Mupezeni exists to help make that possible.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION: THE PROBLEM WE SEE */}
      <section className="py-16 bg-white border-b border-[#E4DCD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono font-bold text-[#B85F45] uppercase">
                The Core Friction
              </span>
              <h2 className="text-3xl font-extrabold text-[#191817] tracking-tight">
                The owner becomes the operating system.
              </h2>
              <p className="text-sm sm:text-base text-[#817B75] leading-relaxed">
                A customer sends a message on WhatsApp. Someone checks inventory. A sale gets recorded somewhere else. A catalog needs updating. The owner still has to make sure every piece agrees.
              </p>
              <p className="text-sm sm:text-base text-[#817B75] leading-relaxed">
                As the business grows, these small manual tasks accumulate. The problem is not necessarily that a business lacks software.
              </p>
              <div className="p-4 rounded-xl bg-[#F8F5F0] border-l-4 border-[#B85F45] text-base font-bold text-[#191817]">
                “The problem is that its software may not work together.”
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#F8F5F0] p-6 rounded-2xl border border-[#E4DCD3] space-y-3 font-mono text-xs">
              <div className="text-[#817B75] font-bold uppercase text-[10px]">
                The Fragmented Loop Today:
              </div>
              <div className="p-3 bg-white rounded-lg border border-[#E4DCD3] text-[#191817]">
                Step 1: WhatsApp Customer Chat
              </div>
              <div className="text-center text-[#817B75] text-[10px]">↓ Manual human bridge</div>
              <div className="p-3 bg-white rounded-lg border border-[#E4DCD3] text-[#191817]">
                Step 2: Paper notebook or Excel stock column
              </div>
              <div className="text-center text-[#817B75] text-[10px]">↓ Manual human bridge</div>
              <div className="p-3 bg-white rounded-lg border border-[#E4DCD3] text-[#191817]">
                Step 3: Mobile Money SMS checking
              </div>
              <div className="text-center text-[#817B75] text-[10px]">↓ Manual human bridge</div>
              <div className="p-3 bg-[#191817] text-white rounded-lg font-bold">
                Owner spends evening reconciling numbers
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: OUR APPROACH */}
      <section className="py-16 bg-[#F8F5F0] border-b border-[#E4DCD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs uppercase font-bold tracking-wider text-[#B85F45] bg-[#EDE4D9] px-3 py-1 rounded-full">
              Philosophy
            </span>
            <h2 className="text-3xl font-extrabold text-[#191817] tracking-tight mt-3 mb-3">
              Connect first. Automate responsibly.
            </h2>
            <p className="text-base text-[#817B75] leading-relaxed">
              We approach retail operations as a connected system. That means organizing business information, establishing dependable workflows and using AI workers where they can perform defined tasks safely and usefully.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div className="bg-white p-6 rounded-2xl border border-[#E4DCD3] space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#F6EDE9] text-[#B85F45] flex items-center justify-center font-bold mb-3">
                1
              </div>
              <h3 className="font-bold text-[#191817] text-sm">Defined Boundaries</h3>
              <p className="text-[#817B75] leading-relaxed">
                Automation should not guess. AI workers only perform tasks they are authorized to perform, with read-only scopes on master records.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E4DCD3] space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold mb-3">
                2
              </div>
              <h3 className="font-bold text-[#191817] text-sm">Verifiable Actions</h3>
              <p className="text-[#817B75] leading-relaxed">
                Every customer message sent and catalog update dispatched is confirmed via API receipts and logged in human-accessible audit trails.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E4DCD3] space-y-2">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold mb-3">
                3
              </div>
              <h3 className="font-bold text-[#191817] text-sm">Owner Remains in Control</h3>
              <p className="text-[#817B75] leading-relaxed">
                Price cuts, promotions, refunds, and supplier orders always pause for store manager sign-off before execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: OUR DIRECTION */}
      <section className="py-16 bg-white border-b border-[#E4DCD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs uppercase font-bold tracking-wider text-[#B85F45] bg-[#F6EDE9] px-3 py-1 rounded-full">
                Regional Focus
              </span>
              <h2 className="text-3xl font-extrabold text-[#191817] tracking-tight">
                Built in Zambia. Designed with African retail in mind.
              </h2>
              <p className="text-sm text-[#817B75] leading-relaxed">
                Mupezeni is starting with the operational realities of retailers in Zambia. We want to understand how businesses sell, manage products, serve customers and make decisions, then build practical technology around those needs.
              </p>
              <p className="text-sm text-[#817B75] leading-relaxed">
                Our ambition is to help retail businesses increase their operational capacity without making every additional sale create an equal amount of additional administrative work.
              </p>
            </div>

            <div className="lg:col-span-6 bg-[#F8F5F0] p-6 rounded-2xl border border-[#E4DCD3] space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#191817]">
                What We Are Building:
              </h3>
              <ul className="space-y-2 text-xs text-[#817B75]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>A connected foundation for retail operations (sales, stock, finances)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Practical AI workers for defined business tasks</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Better connections between business information and digital channels</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Clearer operational reporting and true margin visibility</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Systems that can grow alongside the businesses using them</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING STATEMENT */}
      <section className="py-16 bg-[#F8F5F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className="text-3xl font-extrabold text-[#191817] tracking-tight">
            We are building technology that gives retail businesses more room to grow.
          </h2>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-3 bg-white p-1.5 pr-4 rounded-full border border-[#D9CEBF] shadow-xs">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-[#B85F45] shrink-0 bg-[#EDE4D9]">
                <img src="/ernest.jpg" alt="Ernest Zimba" className="w-full h-full object-cover object-top" />
              </div>
              <div className="text-left">
                <span className="font-bold text-xs text-[#191817] block">Ernest Zimba</span>
                <span className="text-[10px] text-[#817B75]">Founder, Mupezeni</span>
              </div>
            </div>

            <button
              onClick={() => onNavigate('founder')}
              className="px-6 py-3 rounded-xl bg-[#191817] hover:bg-[#312E2B] text-white font-bold text-sm inline-flex items-center gap-2 shadow-sm transition-all"
            >
              <span>Read Founder's Vision</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
