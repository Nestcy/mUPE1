import React, { useState } from 'react';
import { PageType } from '../types';
import { 
  Check, 
  ArrowRight, 
  ShieldCheck, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  MessageCircle, 
  Calendar,
  AlertCircle
} from 'lucide-react';

interface PricingPageProps {
  onNavigate: (page: PageType) => void;
  onOpenDemo: () => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onNavigate, onOpenDemo }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: 'Do I pay before implementation begins?',
      a: 'No. You sign the agreement before implementation begins to confirm scope and expectations, but your first monthly payment of K2,000 is due only when Mupezeni launches live for your business.'
    },
    {
      q: 'How long does implementation take?',
      a: 'The expected implementation period is 4–6 weeks, subject to the agreed scope, data preparation, and third-party channel credentials.'
    },
    {
      q: 'What happens if Mupezeni isn\'t right for my business?',
      a: 'A 30-day money-back guarantee applies after launch, subject to the written terms of your agreement. If you evaluate the system during those 30 days and conclude it is not a fit, you can request a refund.'
    },
    {
      q: 'Does Mupezeni work with every platform?',
      a: 'No. Available capabilities depend on the integrations that have been implemented, tested and authorized. We will clarify the supported workflows relevant to your business during our initial operational discovery.'
    },
    {
      q: 'Does Mupezeni replace my accountant?',
      a: 'Mupezeni can provide operational financial information (such as sales revenue, recorded COGS, and gross profit margins) from available business records. It should not be treated as a substitute for professional accounting, tax advice, or statutory reporting unless those specific capabilities are explicitly established.'
    },
    {
      q: 'Can I use Mupezeni if my business sells through WhatsApp?',
      a: 'Yes. Mupezeni is specifically designed to support connected retail workflows involving WhatsApp and digital channels. The specific WhatsApp features available depend on the configured and authorized integration.'
    }
  ];

  const includedItems = [
    'Digital sales and order management workflows',
    'Product catalog and multi-branch inventory tracking',
    'Operational financial reporting (COGS and gross margins)',
    'Supported digital-channel integrations (WhatsApp & Web)',
    'Configured AI-worker workflows with strict boundary controls',
    'Relevant business reporting and operational summaries',
    'End-to-end implementation, configuration and staff onboarding',
    'Applicable continuous support and direct engineering contact'
  ];

  return (
    <div className="min-h-screen bg-[#F8F5F0]">
      {/* Pricing Hero */}
      <section className="pt-14 pb-16 border-b border-[#E4DCD3] bg-[#F8F5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase font-bold tracking-wider text-[#B85F45] bg-[#EDE4D9] px-3 py-1 rounded-full">
              Transparent Pricing
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#191817] tracking-tight">
              A more connected way to run your retail business.
            </h1>
            <p className="text-lg text-[#817B75] leading-relaxed">
              Mupezeni brings your relevant retail workflows, business information and supported AI-worker capabilities into one connected operating system.
            </p>
          </div>
        </div>
      </section>

      {/* THE PRICING CARD & DETAILS */}
      <section className="py-16 bg-white border-b border-[#E4DCD3]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#191817] text-white rounded-3xl p-8 sm:p-12 border border-[#312E2B] shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2D2622] text-[#B85F45] text-xs font-bold border border-[#483B33]">
                  <span>STANDARD RETAIL PACKAGE</span>
                </div>

                <div className="space-y-1">
                  <div className="font-mono text-5xl sm:text-6xl font-extrabold text-white">
                    K2,000 <span className="text-lg font-normal text-[#817B75]">/ month</span>
                  </div>
                  <p className="text-xs text-[#D9CEBF] pt-1">
                    First month's payment is due <strong className="text-white underline">when we launch</strong> for your business.
                  </p>
                </div>

                <p className="text-sm text-[#D9CEBF] leading-relaxed">
                  We implement and launch Mupezeni within 4–6 weeks. An agreement is signed prior to kickoff. A 30-day money-back guarantee applies after launch, subject to clearly stated terms.
                </p>

                {/* What's included checklist */}
                <div className="space-y-2.5 pt-4 border-t border-[#2C2926]">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#817B75]">
                    What's Included:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {includedItems.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-[#EDE4D9]">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#24211E] border border-[#3A3632] text-[11px] text-[#A89F95]">
                  <strong className="text-[#EDE4D9]">Notice on Scope:</strong> The published package reflects the actual offer. We do not claim that every third-party channel or custom ERP integration is supported without boundary. Workflows are tailored to your store during kickoff.
                </div>
              </div>

              {/* Payment Steps Box */}
              <div className="lg:col-span-5 bg-[#24211E] p-6 sm:p-7 rounded-2xl border border-[#3A3632] space-y-5">
                <h4 className="font-bold text-white text-base">How Payment Works:</h4>

                <div className="space-y-4 text-xs font-sans">
                  <div className="flex items-start gap-3">
                    <span className="font-mono font-bold text-[#B85F45] bg-[#332520] px-2 py-0.5 rounded">01</span>
                    <div>
                      <strong className="text-white block">Sign the Agreement</strong>
                      <span className="text-[#817B75]">Establishes commercial terms & milestones before implementation begins.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="font-mono font-bold text-[#B85F45] bg-[#332520] px-2 py-0.5 rounded">02</span>
                    <div>
                      <strong className="text-white block">We Implement & Configure</strong>
                      <span className="text-[#817B75]">Takes 4–6 weeks to prepare catalogs, workflows and staff access.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="font-mono font-bold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded">03</span>
                    <div>
                      <strong className="text-white block">Pay at Launch</strong>
                      <span className="text-[#817B75]">Your first K2,000 monthly subscription is due when Mupezeni goes live.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="font-mono font-bold text-amber-400 bg-amber-950 px-2 py-0.5 rounded">04</span>
                    <div>
                      <strong className="text-white block">Evaluate for 30 Days</strong>
                      <span className="text-[#817B75]">The 30-day money-back guarantee applies according to written terms.</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={onOpenDemo}
                  className="w-full py-3.5 rounded-xl bg-[#B85F45] hover:bg-[#97442F] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <span>Discuss Your Business</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="py-16 bg-[#F8F5F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-[#191817] tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-[#817B75] mt-2">
              Straightforward answers about Mupezeni, implementation, and commercial terms.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-xl border border-[#E4DCD3] overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-5 text-left font-bold text-sm sm:text-base text-[#191817] flex items-center justify-between gap-4 hover:bg-[#F8F5F0]"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp className="w-5 h-5 text-[#B85F45] shrink-0" /> : <ChevronDown className="w-5 h-5 text-[#817B75] shrink-0" />}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-sm text-[#817B75] leading-relaxed border-t border-[#F0EAE1]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Have another question? */}
          <div className="mt-12 text-center bg-white p-6 rounded-2xl border border-[#E4DCD3]">
            <h3 className="font-bold text-[#191817] text-base mb-1">
              Have another question?
            </h3>
            <p className="text-xs text-[#817B75] mb-4">
              We are happy to answer any questions about your specific retail software, POS, or WhatsApp setup.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://wa.me/260776091393?text=Hi%20Mupezeni%2C%20I'd%20like%20to%20learn%20how%20Mupezeni%20could%20help%20my%20retail%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Ask on WhatsApp (+260 776 091 393)</span>
              </a>
              <a
                href="mailto:hello.mupezeni@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#F8F5F0] border border-[#D9CEBF] text-[#191817] text-xs font-semibold hover:bg-[#EDE4D9] transition-colors"
              >
                <span>Email hello.mupezeni@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
