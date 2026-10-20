import React from 'react';
import { PageType } from '../types';
import { ShieldCheck, FileText, ArrowRight, Lock, CheckCircle2 } from 'lucide-react';

interface TermsPageProps {
  onNavigate: (page: PageType) => void;
  onOpenDemo: () => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onNavigate, onOpenDemo }) => {
  return (
    <div className="min-h-screen bg-[#F8F5F0]">
      {/* Hero */}
      <section className="pt-14 pb-16 border-b border-[#E4DCD3] bg-[#F8F5F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            <span className="text-xs uppercase font-bold tracking-wider text-[#B85F45] bg-[#EDE4D9] px-3 py-1 rounded-full">
              Commercial & Privacy Governance
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#191817] tracking-tight">
              Privacy, Terms & The 30-Day Guarantee
            </h1>
            <p className="text-base sm:text-lg text-[#817B75] leading-relaxed">
              We believe in transparent terms, clear boundaries, and zero hidden fees. Here is exactly how our commercial agreement, 30-day money-back guarantee, and data policies function.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white border-b border-[#E4DCD3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* 1. Commercial Terms */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#191817] flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-[#B85F45] text-white flex items-center justify-center font-mono text-xs">01</span>
              <span>The Commercial Offer (K2,000 / month)</span>
            </h2>
            <div className="p-4 rounded-xl bg-[#F8F5F0] border border-[#E4DCD3] space-y-2 text-xs text-[#817B75] leading-relaxed">
              <p>
                • <strong>Agreement Before Kickoff:</strong> A commercial agreement defining the implementation scope, catalog integration parameters, and milestones is signed before engineering begins.
              </p>
              <p>
                • <strong>Implementation Period:</strong> Expected implementation and configuration takes 4–6 weeks.
              </p>
              <p>
                • <strong>Zero Upfront Implementation Fee:</strong> You do not pay before or during the build phase. Your first monthly subscription fee of K2,000 is due when Mupezeni launches live for your store.
              </p>
              <p>
                • <strong>Ongoing Subscription:</strong> The monthly subscription of K2,000 covers ongoing platform access, hosting, system maintenance, and authorized AI-worker execution.
              </p>
            </div>
          </div>

          <hr className="border-[#E4DCD3]" />

          {/* 2. 30-Day Money-Back Guarantee */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#191817] flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-emerald-700 text-white flex items-center justify-center font-mono text-xs">02</span>
              <span>The 30-Day Money-Back Guarantee</span>
            </h2>
            <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 text-xs text-emerald-950 space-y-2.5 leading-relaxed">
              <p className="font-semibold text-emerald-900">
                To evaluate Mupezeni with confidence in your live business environment:
              </p>
              <ul className="space-y-1.5 list-disc list-inside text-emerald-900">
                <li>
                  <strong>Start Date:</strong> The 30-day evaluation window begins on the day Mupezeni is officially deployed live and operational for your retail business.
                </li>
                <li>
                  <strong>How to Request:</strong> If you determine within the first 30 days that the connected workflows do not meet the agreed commercial scope, submit a written refund request via email to <em>hello.mupezeni@gmail.com</em> or directly to your assigned implementation manager on WhatsApp.
                </li>
                <li>
                  <strong>Refund Scope:</strong> 100% of the first month's K2,000 subscription fee is refunded promptly without penalty.
                </li>
                <li>
                  <strong>Post-Guarantee:</strong> After the 30-day evaluation period, the standard monthly subscription continues on a month-to-month basis with no long-term lock-in contract.
                </li>
              </ul>
            </div>
          </div>

          <hr className="border-[#E4DCD3]" />

          {/* 3. Data Privacy & Customer Records */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#191817] flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-[#191817] text-white flex items-center justify-center font-mono text-xs">03</span>
              <span>Data Ownership & Retail Privacy</span>
            </h2>
            <p className="text-xs text-[#817B75] leading-relaxed">
              Your business data belongs exclusively to you:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-[#F8F5F0] border border-[#E4DCD3] space-y-1">
                <strong className="text-[#191817] block">Customer Privacy</strong>
                <p className="text-[#817B75]">
                  Customer phone numbers, purchase histories, and WhatsApp chat transcripts are confidential and encrypted. We do not sell or monetize merchant datasets.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[#F8F5F0] border border-[#E4DCD3] space-y-1">
                <strong className="text-[#191817] block">Audit Trails</strong>
                <p className="text-[#817B75]">
                  All worker actions and catalog sync operations are logged with deterministic timestamps. You can inspect all automated activity at any time.
                </p>
              </div>
            </div>
          </div>

          <hr className="border-[#E4DCD3]" />

          {/* 4. Integrity in Advertising & Demonstrations */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#191817] flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-amber-600 text-white flex items-center justify-center font-mono text-xs">04</span>
              <span>Our Truth-in-Advertising Standard</span>
            </h2>
            <p className="text-xs text-[#817B75] leading-relaxed">
              Mupezeni strictly adheres to verifiable claims:
            </p>
            <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 text-xs text-amber-950 space-y-2">
              <p>
                • <strong>No Fabricated Statistics:</strong> We never invent claims about average Zambian retail revenue loss, customer abandonment rates, or guaranteed percentage time savings before collecting verified, empirical baseline measurements.
              </p>
              <p>
                • <strong>Sample Demonstration Data:</strong> All interactive calculators, product catalogs, and worker sandbox simulations on this website use clearly labeled illustrative sample data for instructional purposes.
              </p>
              <p>
                • <strong>Integration Boundaries:</strong> We clearly specify which third-party channels (WhatsApp Business API, storefront webhooks, POS systems) are supported for each retailer's specific tech stack.
              </p>
            </div>
          </div>

          <div className="pt-4 text-center">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 rounded-xl bg-[#B85F45] hover:bg-[#97442F] text-white font-bold text-xs inline-flex items-center gap-2 transition-colors"
            >
              <span>Have a question about terms? Contact us</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
