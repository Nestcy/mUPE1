import React, { useState } from 'react';
import { PageType } from '../types';
import { 
  Clock, 
  FileText, 
  Settings, 
  CheckCircle2, 
  Rocket, 
  ShieldCheck, 
  ArrowRight,
  MessageCircle,
  HelpCircle,
  ChevronRight
} from 'lucide-react';

interface HowItWorksPageProps {
  onNavigate: (page: PageType) => void;
  onOpenDemo: () => void;
}

export const HowItWorksPage: React.FC<HowItWorksPageProps> = ({ onNavigate, onOpenDemo }) => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '01',
      title: 'Understand the Business',
      timeline: 'Weeks 1–2',
      tagline: 'Operational Discovery & Tool Mapping',
      description: 'We learn how your business handles products, sales, stock, customer conversations and operational records. We identify the relevant workflows, existing tools and supported integrations.',
      deliverables: [
        'Detailed map of sales channels (WhatsApp, walk-ins, online storefront)',
        'Inventory audit & SKU taxonomy (sizes, branches, warehouse stock)',
        'Review of current mobile money and payment recording workflows',
        'Identification of repetitive customer questions and tasks'
      ],
      checkpoint: 'Agreement signed before implementation begins. No payment due yet.'
    },
    {
      number: '02',
      title: 'Prepare the System',
      timeline: 'Weeks 2–4',
      tagline: 'Database Setup & Workflow Configuration',
      description: 'We configure Mupezeni for your business workflows, connect supported systems and prepare the data required for implementation.',
      deliverables: [
        'Central product catalog setup with verified prices and COGS',
        'Multi-branch stock allocation & safety threshold rules',
        'Connection to authorized WhatsApp Business API and storefronts',
        'Configuration of AI workers with strict permission boundaries'
      ],
      checkpoint: 'Implementation team configures all system endpoints.'
    },
    {
      number: '03',
      title: 'Test the Workflows',
      timeline: 'Weeks 4–5',
      tagline: 'End-to-End Simulation & Verification',
      description: 'We verify the important workflows, including how data moves between relevant components and how exceptions are handled. Where external integrations are involved, we test the supported actions and verify their outcomes.',
      deliverables: [
        'Test WhatsApp orders verifying inventory auto-decrement',
        'Test stock lookups ensuring AI workers retrieve verified counts',
        'Test catalog price updates verifying synchronization receipts',
        'Staff walkthrough and practical operations training'
      ],
      checkpoint: 'Verified verification check with store owner approval.'
    },
    {
      number: '04',
      title: 'Launch',
      timeline: 'Week 5–6',
      tagline: 'Live Deployment in Your Store',
      description: 'We launch Mupezeni for your business within the agreed implementation process. Your first month\'s K1,000 payment is due at launch.',
      deliverables: [
        'Switchover to live customer conversations and sales recording',
        'Mupezeni operational dashboard active on store computers & phones',
        'Daily operational margin and gross profit calculations running',
        'Direct priority engineering support channel via WhatsApp'
      ],
      checkpoint: 'First month payment of K1,000 due upon live launch.'
    },
    {
      number: '05',
      title: 'Evaluate',
      timeline: 'Days 1–30 Post-Launch',
      tagline: '30-Day Money-Back Guarantee Evaluation',
      description: 'You have a 30-day money-back guarantee under the terms provided in the agreement. The agreement explains when the guarantee starts, how a refund is requested, what the refund covers and how the monthly subscription continues after the guarantee period.',
      deliverables: [
        '30 days of live operational use to measure real time savings',
        'Weekly check-in to adjust worker boundaries or add SKUs',
        'Transparent refund terms if Mupezeni does not meet stated scope',
        'Smooth continuation at K1,000/month if satisfied'
      ],
      checkpoint: '100% money-back guarantee protected under written terms.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F5F0]">
      {/* Hero */}
      <section className="pt-14 pb-16 border-b border-[#E4DCD3] bg-[#F8F5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <span className="text-xs uppercase font-bold tracking-wider text-[#B85F45] bg-[#EDE4D9] px-3 py-1 rounded-full">
              4–6 Week Implementation
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#191817] tracking-tight">
              From disconnected operations to a connected retail system.
            </h1>
            <p className="text-lg text-[#817B75] leading-relaxed">
              We implement and launch Mupezeni for your business within 4–6 weeks.
            </p>
            <div className="p-4 rounded-xl bg-white border border-[#E4DCD3] text-sm text-[#191817] space-y-2">
              <div className="font-bold flex items-center gap-2 text-[#B85F45]">
                <ShieldCheck className="w-4 h-4" />
                <span>Our Clear Commercial Commitment</span>
              </div>
              <p className="text-xs text-[#817B75] leading-relaxed">
                You sign an agreement before implementation begins. You pay <strong>K1,000 for your first month when we launch the solution</strong>, with a 30-day money-back guarantee. No upfront implementation fee.
              </p>
            </div>
            <div className="pt-2">
              <button
                onClick={onOpenDemo}
                className="px-6 py-3 rounded-xl bg-[#B85F45] hover:bg-[#97442F] text-white font-bold text-sm flex items-center gap-2 shadow-sm transition-all"
              >
                <span>Start a Conversation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* IMPLEMENTATION TIMELINE SECTION */}
      <section className="py-16 bg-white border-b border-[#E4DCD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <h2 className="text-3xl font-extrabold text-[#191817] tracking-tight mb-2">
              The 5-Step Implementation Journey
            </h2>
            <p className="text-sm text-[#817B75]">
              Explore each milestone from operational discovery to live launch and the 30-day evaluation period.
            </p>
          </div>

          {/* Desktop Horizontal Timeline / Mobile Vertical Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-10">
            {steps.map((step, idx) => {
              const isSelected = activeStep === idx;
              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className={`p-4 rounded-xl border text-left flex flex-col justify-between transition-all ${
                    isSelected
                      ? 'bg-[#B85F45] text-white border-[#B85F45] shadow-md'
                      : 'bg-[#F8F5F0] text-[#191817] border-[#D9CEBF] hover:border-[#B85F45]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-mono text-xs font-bold ${isSelected ? 'text-white/80' : 'text-[#817B75]'}`}>
                      STEP {step.number}
                    </span>
                    <span className={`text-[10px] px-2 py-0.5 rounded font-mono font-semibold ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-[#EDE4D9] text-[#817B75]'
                    }`}>
                      {step.timeline}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm leading-snug">{step.title}</h4>
                    <p className={`text-[11px] truncate mt-1 ${isSelected ? 'text-white/90' : 'text-[#817B75]'}`}>
                      {step.tagline}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Expanded Step Detail Box */}
          <div className="bg-[#F8F5F0] rounded-2xl p-6 sm:p-8 border border-[#E4DCD3]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-[#B85F45] bg-[#EDE4D9] px-2.5 py-1 rounded">
                    STEP {steps[activeStep].number} • {steps[activeStep].timeline}
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold text-[#191817]">
                  {steps[activeStep].title}: {steps[activeStep].tagline}
                </h3>
                <p className="text-sm text-[#817B75] leading-relaxed">
                  {steps[activeStep].description}
                </p>

                <div className="bg-white p-5 rounded-xl border border-[#E4DCD3] space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#191817]">
                    Key Activities & Deliverables
                  </h4>
                  <ul className="text-xs text-[#817B75] space-y-2">
                    {steps[activeStep].deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Commercial Terms & Guarantee Checkpoint */}
              <div className="lg:col-span-5 bg-[#191817] text-white p-6 rounded-xl border border-[#312E2B] space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#B85F45]">
                  <ShieldCheck className="w-4 h-4" />
                  <span>COMMERCIAL CHECKPOINT</span>
                </div>
                <h4 className="text-lg font-bold text-white">
                  {steps[activeStep].number === '01' && 'No Upfront Fee Required'}
                  {steps[activeStep].number === '02' && 'Configuration in Progress'}
                  {steps[activeStep].number === '03' && 'Owner Review & Testing'}
                  {steps[activeStep].number === '04' && 'First Payment at Launch (K1,000)'}
                  {steps[activeStep].number === '05' && '30-Day Money-Back Guarantee'}
                </h4>
                <p className="text-xs text-[#D9CEBF] leading-relaxed">
                  {steps[activeStep].checkpoint}
                </p>

                <div className="p-3.5 rounded-lg bg-[#24211E] border border-[#3A3632] text-[11px] text-[#A89F95]">
                  <strong>Policy:</strong> An agreement is signed prior to work commencing. If you cancel prior to launch, you pay nothing. The 30-day money-back guarantee applies immediately upon launch.
                </div>

                <button
                  onClick={onOpenDemo}
                  className="w-full py-2.5 rounded-lg bg-[#B85F45] hover:bg-[#97442F] text-white text-xs font-bold transition-colors text-center"
                >
                  Book Initial Operational Discovery
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
