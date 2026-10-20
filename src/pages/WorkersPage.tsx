import React, { useState } from 'react';
import { PageType, WorkerSpec } from '../types';
import { AI_WORKERS } from '../data/retailData';
import { 
  Bot, 
  ShieldCheck, 
  AlertTriangle, 
  ArrowRight, 
  CheckCircle2, 
  HelpCircle, 
  Sparkles, 
  Play, 
  MessageSquare, 
  RefreshCw, 
  Megaphone, 
  UserCheck, 
  Activity, 
  LineChart,
  ChevronRight,
  Database
} from 'lucide-react';

interface WorkersPageProps {
  onNavigate: (page: PageType) => void;
  onOpenDemo: () => void;
}

export const WorkersPage: React.FC<WorkersPageProps> = ({ onNavigate, onOpenDemo }) => {
  const [selectedWorkerId, setSelectedWorkerId] = useState<string>('customer-support');
  const [interactiveQuery, setInteractiveQuery] = useState('');
  const [interactiveResult, setInteractiveResult] = useState<string | null>(null);

  const selectedWorker = AI_WORKERS.find((w) => w.id === selectedWorkerId) || AI_WORKERS[0];

  const handleRunInteractiveDemo = (promptText: string) => {
    setInteractiveQuery(promptText);
    setInteractiveResult('Executing query against verified demonstration dataset...');
    setTimeout(() => {
      if (selectedWorker.id === 'business-intelligence') {
        if (promptText.includes('most') || promptText.includes('sold')) {
          setInteractiveResult(
            'Query Period: Oct 13 - Oct 19 (Past 7 Days). Total Revenue: K34,800.\n' +
            '1. Smart Watch Series 4 — 24 units • K14,400\n' +
            '2. Leather Messenger Bag — 16 units • K10,400\n' +
            '3. Wireless Earbuds — 20 units • K5,000\n' +
            'Cost of Goods Sold (COGS): K19,200. Estimated Gross Profit: K15,600 (44.8% margin).\n' +
            'Source: Validated sales transactions table.'
          );
        } else if (promptText.includes('low') || promptText.includes('stock')) {
          setInteractiveResult(
            'Inventory Threshold Scan: Items with < 5 units in stock:\n' +
            '• Low Canvas Sneakers (SKU-SNK-11): 3 units remaining at Downtown Lusaka.\n' +
            '• Ankara Travel Duffel (SKU-BAG-09): 8 units remaining at Ndola Branch (Velocity high: 5 sold this week).\n' +
            'Recommended Action: Restock Canvas Sneakers.'
          );
        } else {
          setInteractiveResult(
            'Operational Financial Summary:\n' +
            '• Recorded Gross Sales: K12,450 (18 orders)\n' +
            '• Recorded COGS: K7,200\n' +
            '• Estimated Gross Profit: K5,250 (42.1%)\n' +
            'Unpaid/Pending Mobile Money Inquiries: 2 transactions.'
          );
        }
      } else {
        setInteractiveResult(selectedWorker.sampleOutput);
      }
    }, 400);
  };

  const getWorkerIcon = (id: string) => {
    switch (id) {
      case 'customer-support': return <MessageSquare className="w-5 h-5 text-emerald-600" />;
      case 'catalog-management': return <RefreshCw className="w-5 h-5 text-[#B85F45]" />;
      case 'marketing': return <Megaphone className="w-5 h-5 text-amber-600" />;
      case 'sales-followup': return <UserCheck className="w-5 h-5 text-blue-600" />;
      case 'business-operations': return <Activity className="w-5 h-5 text-purple-600" />;
      case 'business-intelligence': return <LineChart className="w-5 h-5 text-indigo-600" />;
      default: return <Bot className="w-5 h-5 text-[#B85F45]" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F5F0]">
      {/* Workers Hero */}
      <section className="pt-14 pb-16 border-b border-[#E4DCD3] bg-[#F8F5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <span className="text-xs uppercase font-bold tracking-wider text-[#B85F45] bg-[#EDE4D9] px-3 py-1 rounded-full">
              Controlled Delegation
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#191817] tracking-tight">
              AI workers for the work that keeps your business busy.
            </h1>
            <p className="text-lg text-[#817B75] leading-relaxed">
              Customer questions. Product updates. Marketing tasks. Follow-ups. Operational reporting.
            </p>
            <p className="text-base text-[#191817] font-medium leading-relaxed">
              Mupezeni is designed to help you delegate defined business tasks to AI workers that use authorized information and approved tools to get work done. You set the boundaries. The workers handle the work they are permitted to perform.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenDemo}
                className="px-6 py-3 rounded-xl bg-[#B85F45] hover:bg-[#97442F] text-white font-bold text-sm flex items-center gap-2 shadow-sm transition-all"
              >
                <span>Discuss Your Business Workflows</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* WORKERS DEEP DIVE SECTION */}
      <section className="py-16 bg-white border-b border-[#E4DCD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <h2 className="text-3xl font-extrabold text-[#191817] tracking-tight mb-2">
              The AI Worker Roster
            </h2>
            <p className="text-sm text-[#817B75]">
              Select any worker below to inspect its operational task, authorized data sources, approved actions, and required human approvals.
            </p>
          </div>

          {/* Worker Selectors Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
            {AI_WORKERS.map((worker) => {
              const isSelected = selectedWorker.id === worker.id;
              return (
                <button
                  key={worker.id}
                  onClick={() => {
                    setSelectedWorkerId(worker.id);
                    setInteractiveResult(null);
                    setInteractiveQuery('');
                  }}
                  className={`p-3.5 rounded-xl border text-left flex flex-col justify-between transition-all ${
                    isSelected
                      ? 'bg-[#F8F5F0] border-[#B85F45] shadow-sm ring-2 ring-[#B85F45]/20'
                      : 'bg-white border-[#D9CEBF] hover:border-[#B85F45]/50'
                  }`}
                >
                  <div className="mb-3">{getWorkerIcon(worker.id)}</div>
                  <div>
                    <h4 className={`text-xs font-bold ${isSelected ? 'text-[#B85F45]' : 'text-[#191817]'}`}>
                      {worker.name}
                    </h4>
                    <span className="text-[10px] text-[#817B75] block truncate mt-0.5">
                      {worker.role.split('&')[0]}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected Worker Specification Panel */}
          <div className="bg-[#F8F5F0] rounded-2xl p-6 sm:p-8 border border-[#E4DCD3] shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Spec, Scope, Guardrails (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono font-bold text-[#B85F45] bg-[#EDE4D9] px-2.5 py-0.5 rounded">
                      WORKER SPECIFICATION
                    </span>
                    <span className="text-xs text-[#817B75]">• {selectedWorker.role}</span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#191817] mb-1">
                    {selectedWorker.name}
                  </h3>
                  <p className="text-sm font-semibold text-[#B85F45]">
                    {selectedWorker.tagline}
                  </p>
                  <p className="text-sm text-[#817B75] mt-2 leading-relaxed">
                    {selectedWorker.description}
                  </p>
                </div>

                {/* Defined Task */}
                <div className="bg-white p-4 rounded-xl border border-[#E4DCD3]">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#191817] mb-1">
                    Assigned Operational Task
                  </h4>
                  <p className="text-xs text-[#817B75] leading-relaxed">
                    {selectedWorker.task}
                  </p>
                </div>

                {/* 3 Pillars of Controlled Delegation */}
                <div className="space-y-4">
                  {/* Authorized Information Used */}
                  <div className="bg-white p-4 rounded-xl border border-[#E4DCD3] space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#191817]">
                      <Database className="w-4 h-4 text-emerald-600" />
                      <span>1. Authorized Information Used</span>
                    </div>
                    <ul className="text-xs text-[#817B75] space-y-1 list-disc list-inside">
                      {selectedWorker.informationUsed.map((info, i) => (
                        <li key={i}>{info}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions Taken */}
                  <div className="bg-white p-4 rounded-xl border border-[#E4DCD3] space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#191817]">
                      <CheckCircle2 className="w-4 h-4 text-blue-600" />
                      <span>2. Actions It Can Take Autonomously</span>
                    </div>
                    <ul className="text-xs text-[#817B75] space-y-1 list-disc list-inside">
                      {selectedWorker.actionsTaken.map((act, i) => (
                        <li key={i}>{act}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Human Approval Required */}
                  <div className="bg-white p-4 rounded-xl border border-[#E4DCD3] space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#191817]">
                      <ShieldCheck className="w-4 h-4 text-[#B85F45]" />
                      <span>3. What Requires Human Approval (Guardrails)</span>
                    </div>
                    <ul className="text-xs text-[#817B75] space-y-1 list-disc list-inside">
                      {selectedWorker.humanApprovalRequired.map((app, i) => (
                        <li key={i}>{app}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Fallback Behavior */}
                  <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-xs space-y-1 text-amber-950">
                    <div className="flex items-center gap-2 font-bold text-amber-900">
                      <AlertTriangle className="w-4 h-4 text-amber-700" />
                      <span>What Happens When Information Cannot Be Verified:</span>
                    </div>
                    <p className="leading-relaxed text-[#817B75]">
                      {selectedWorker.fallbackBehavior}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Sandbox & Demonstration (5 cols) */}
              <div className="lg:col-span-5 bg-[#191817] text-white rounded-2xl p-6 border border-[#312E2B] shadow-md space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#2C2926] text-xs">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <Sparkles className="w-4 h-4 text-[#B85F45]" />
                    <span className="font-mono">Worker Sandbox Simulator</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#817B75] bg-[#24211E] px-2 py-0.5 rounded">
                    SAMPLE DATA
                  </span>
                </div>

                <div className="text-xs text-[#D9CEBF]">
                  Test a scenario to see how {selectedWorker.name} operates within authorized data boundaries:
                </div>

                {/* Pre-configured Quick Prompts */}
                <div className="space-y-2">
                  <div className="text-[11px] uppercase font-bold text-[#817B75]">
                    Select a Test Interaction:
                  </div>

                  {selectedWorker.id === 'customer-support' && (
                    <div className="space-y-2">
                      <button
                        onClick={() => handleRunInteractiveDemo('Customer: "Do you have size 42 black Chelsea boots in stock?"')}
                        className="w-full text-left p-2.5 rounded-lg bg-[#24211E] hover:bg-[#312E2B] border border-[#3A3632] text-xs text-[#EDE4D9] transition-colors"
                      >
                        "Do you have size 42 black Chelsea boots in stock?"
                      </button>
                      <button
                        onClick={() => handleRunInteractiveDemo('Customer: "Can you give me 50% discount on 1 pair?"')}
                        className="w-full text-left p-2.5 rounded-lg bg-[#24211E] hover:bg-[#312E2B] border border-[#3A3632] text-xs text-[#EDE4D9] transition-colors"
                      >
                        "Can you give me 50% discount on 1 pair?" (Boundary Check)
                      </button>
                    </div>
                  )}

                  {selectedWorker.id === 'business-intelligence' && (
                    <div className="space-y-2">
                      <button
                        onClick={() => handleRunInteractiveDemo('Which products sold the most this week?')}
                        className="w-full text-left p-2.5 rounded-lg bg-[#24211E] hover:bg-[#312E2B] border border-[#3A3632] text-xs text-[#EDE4D9] transition-colors"
                      >
                        "Which products sold the most this week?"
                      </button>
                      <button
                        onClick={() => handleRunInteractiveDemo('Which products are running low in stock?')}
                        className="w-full text-left p-2.5 rounded-lg bg-[#24211E] hover:bg-[#312E2B] border border-[#3A3632] text-xs text-[#EDE4D9] transition-colors"
                      >
                        "Which products are running low in stock?"
                      </button>
                      <button
                        onClick={() => handleRunInteractiveDemo('What is our estimated gross profit today?')}
                        className="w-full text-left p-2.5 rounded-lg bg-[#24211E] hover:bg-[#312E2B] border border-[#3A3632] text-xs text-[#EDE4D9] transition-colors"
                      >
                        "What is our estimated gross profit today?"
                      </button>
                    </div>
                  )}

                  {selectedWorker.id !== 'customer-support' && selectedWorker.id !== 'business-intelligence' && (
                    <button
                      onClick={() => handleRunInteractiveDemo(selectedWorker.sampleInput)}
                      className="w-full text-left p-2.5 rounded-lg bg-[#24211E] hover:bg-[#312E2B] border border-[#3A3632] text-xs text-[#EDE4D9] transition-colors"
                    >
                      Run: {selectedWorker.sampleInput.slice(0, 65)}...
                    </button>
                  )}
                </div>

                {/* Input Display */}
                {interactiveQuery && (
                  <div className="p-3 bg-[#24211E] rounded-lg border border-[#3A3632] text-xs font-mono text-[#D9CEBF]">
                    <span className="text-[#817B75] text-[10px] block uppercase font-bold">Input Trigger:</span>
                    {interactiveQuery}
                  </div>
                )}

                {/* Execution Output Box */}
                <div className="p-4 bg-[#141312] rounded-xl border border-[#2D2A27] min-h-[160px] text-xs font-mono">
                  <div className="flex items-center justify-between text-[10px] text-[#817B75] uppercase font-bold mb-2">
                    <span>Worker System Output:</span>
                    <span className="text-emerald-400">Deterministic & Audited</span>
                  </div>
                  {interactiveResult ? (
                    <div className="text-emerald-300 whitespace-pre-line leading-relaxed">
                      {interactiveResult}
                    </div>
                  ) : (
                    <div className="text-[#817B75] italic">
                      Select one of the test triggers above to execute an authorized worker simulation.
                    </div>
                  )}
                </div>

                <div className="pt-2 text-[11px] text-[#817B75] flex items-center justify-between">
                  <span>Audit status: Logged #WKR-772</span>
                  <span className="text-[#B85F45] font-semibold">100% Boundary Enforced</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL WORKER CTA */}
      <section className="py-16 bg-[#F8F5F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className="text-3xl font-extrabold text-[#191817] tracking-tight">
            Give repetitive work a defined workflow.
          </h2>
          <p className="text-base text-[#817B75] max-w-xl mx-auto">
            Instead of treating AI like a novelty chatbot, Mupezeni equips workers with authorized access to inventory, sales records, and catalogs to perform useful retail tasks.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenDemo}
              className="px-8 py-3.5 rounded-xl bg-[#B85F45] hover:bg-[#97442F] text-white font-bold text-base inline-flex items-center gap-2 shadow-sm transition-all"
            >
              <span>Talk to Mupezeni</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
