import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Boxes, 
  BarChart3, 
  Smartphone, 
  Bot, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Layers,
  ShieldCheck,
  TrendingUp,
  Cpu
} from 'lucide-react';

export const SystemDiagram: React.FC = () => {
  const [activePillar, setActivePillar] = useState<'sales' | 'inventory' | 'finance' | 'channels' | 'workers'>('inventory');

  const pillars = [
    {
      id: 'sales' as const,
      name: 'Sales & Orders',
      icon: <ShoppingBag className="w-5 h-5" />,
      tagline: 'Order Capture & Transaction Ledger',
      description: 'Records sales from WhatsApp, physical walk-ins, and online storefronts into a single clean ledger with payment method tracking (Airtel, MTN, Cash, Card).',
      sampleFlow: 'A customer pays K650 for boots -> Receipt generated -> Linked to inventory SKU -> Sales ledger credited instantly.'
    },
    {
      id: 'inventory' as const,
      name: 'Real-Time Inventory',
      icon: <Boxes className="w-5 h-5" />,
      tagline: 'Multi-Branch Stock Synchronization',
      description: 'Tracks product variations (size, color, branch location) in real time. Automatically decrements upon sales, triggers re-order notices, and prevents selling out-of-stock items.',
      sampleFlow: 'Sale recorded -> Cairo Road branch stock count drops from 14 to 13 -> Availability status mirrored to WhatsApp catalog instantly.'
    },
    {
      id: 'finance' as const,
      name: 'Financial Visibility',
      icon: <BarChart3 className="w-5 h-5" />,
      tagline: 'COGS, Revenue & Gross Profit Margins',
      description: 'Calculates true gross margin by matching sales against recorded item cost prices. Replaces manual calculator reconciliation at the end of the day.',
      sampleFlow: 'Daily sales K12,450 - Recorded COGS K7,200 = K5,250 Gross Margin (42.1%). Direct operational numbers without spreadsheet formulas.'
    },
    {
      id: 'channels' as const,
      name: 'Digital Channels',
      icon: <Smartphone className="w-5 h-5" />,
      tagline: 'WhatsApp Business & Web Storefronts',
      description: 'Connects the customer-facing places where Zambian buyers interact. Reduces manual re-typing and keeps product prices and availability in sync.',
      sampleFlow: 'WhatsApp order details parse directly into order queue -> Web catalog updates -> Delivery notes dispatch to rider.'
    },
    {
      id: 'workers' as const,
      name: 'AI Workers',
      icon: <Bot className="w-5 h-5" />,
      tagline: 'Controlled Delegation with Clear Boundaries',
      description: 'Specialized AI workers with authorized, read-only or scoped access to operational data. They answer customer questions, draft campaigns, and summarize activity with human approvals.',
      sampleFlow: 'Customer asks for Size 42 boots -> Support Worker queries verified inventory -> Responds with exact stock count & price in 4 seconds.'
    }
  ];

  const current = pillars.find((p) => p.id === activePillar)!;

  return (
    <div className="bg-[#EDE4D9]/40 py-16 px-4 sm:px-6 lg:px-8 border-b border-[#E4DCD3]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDE4D9] text-[#B85F45] text-xs font-semibold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>The Connected Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#191817] tracking-tight mb-4">
            One connected system. A more capable business.
          </h2>
          <p className="text-base sm:text-lg text-[#817B75] leading-relaxed">
            Mupezeni brings the core parts of retail operations together. Instead of treating every task as a separate process, your business operates as a connected system.
          </p>
        </div>

        {/* 5-Pillar Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
          {pillars.map((pillar) => {
            const isSelected = activePillar === pillar.id;
            return (
              <button
                key={pillar.id}
                onClick={() => setActivePillar(pillar.id)}
                className={`p-4 rounded-xl text-left border transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white border-[#B85F45] shadow-md ring-2 ring-[#B85F45]/20'
                    : 'bg-[#F8F5F0] border-[#D9CEBF] hover:bg-white hover:border-[#B85F45]/50'
                }`}
              >
                <div className={`p-2.5 rounded-lg w-fit mb-3 ${
                  isSelected ? 'bg-[#B85F45] text-white' : 'bg-[#EDE4D9] text-[#191817]'
                }`}>
                  {pillar.icon}
                </div>
                <div>
                  <h4 className={`text-sm font-bold ${isSelected ? 'text-[#B85F45]' : 'text-[#191817]'}`}>
                    {pillar.name}
                  </h4>
                  <p className="text-[11px] text-[#817B75] truncate mt-0.5">
                    {pillar.tagline}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Central Interactive Hub Display */}
        <div className="bg-white rounded-2xl border border-[#E4DCD3] p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left description (6 cols) */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-lg bg-[#F6EDE9] text-[#B85F45]">
                  {current.icon}
                </span>
                <div>
                  <span className="text-[11px] font-mono uppercase font-bold text-[#B85F45]">
                    Connected Component
                  </span>
                  <h3 className="text-2xl font-bold text-[#191817]">{current.name}</h3>
                </div>
              </div>

              <p className="text-sm text-[#817B75] leading-relaxed">
                {current.description}
              </p>

              <div className="p-4 rounded-xl bg-[#F8F5F0] border border-[#E4DCD3] space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#191817]">
                  <Sparkles className="w-3.5 h-3.5 text-[#B85F45]" />
                  <span>How This Workflow Operates in Mupezeni:</span>
                </div>
                <p className="text-xs font-mono text-[#817B75] bg-white p-3 rounded-lg border border-[#EDE4D9]">
                  {current.sampleFlow}
                </p>
              </div>

              <div className="flex items-center gap-4 text-xs text-[#817B75] pt-2">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Shared source of truth</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#B85F45]" />
                  <span>Configured permissions</span>
                </div>
              </div>
            </div>

            {/* Right visual interface preview (6 cols) */}
            <div className="lg:col-span-6 bg-[#191817] text-white rounded-xl p-5 border border-[#312E2B] shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-[#2C2926] mb-4 text-xs font-mono">
                <div className="flex items-center gap-2 text-emerald-400">
                  <Cpu className="w-4 h-4 text-[#B85F45]" />
                  <span>Mupezeni Unified Data Core</span>
                </div>
                <span className="text-[10px] text-[#D9CEBF] bg-[#24211E] px-2 py-0.5 rounded">
                  Status: Active
                </span>
              </div>

              {activePillar === 'sales' && (
                <div className="space-y-3 font-mono text-xs">
                  <div className="bg-[#24211E] p-3 rounded border border-[#3A3632]">
                    <div className="text-[10px] text-[#817B75] uppercase">Live Orders Ingestion</div>
                    <div className="text-emerald-400 font-bold mt-1">ORD-8921 • K650.00 • Airtel Money</div>
                    <div className="text-[#D9CEBF] text-[11px] mt-0.5">Customer: Chileshe Mulenga • Black Chelsea Boots</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div className="bg-[#24211E] p-2.5 rounded">
                      <span className="text-[#817B75] block">Today's Sales</span>
                      <span className="text-white font-bold">K12,450 (18 orders)</span>
                    </div>
                    <div className="bg-[#24211E] p-2.5 rounded">
                      <span className="text-[#817B75] block">Pending Dispatch</span>
                      <span className="text-amber-400 font-bold">2 orders</span>
                    </div>
                  </div>
                </div>
              )}

              {activePillar === 'inventory' && (
                <div className="space-y-3 font-mono text-xs">
                  <div className="bg-[#24211E] p-3 rounded border border-[#3A3632] space-y-1.5">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-bold">Leather Chelsea Boots (ZAM-BT-42)</span>
                      <span className="text-emerald-400 font-bold">13 in stock</span>
                    </div>
                    <div className="text-[11px] text-[#817B75] flex justify-between">
                      <span>Cairo Road: 3 • East Park: 6 • Ndola: 4</span>
                      <span className="text-emerald-400">Sync: OK</span>
                    </div>
                  </div>
                  <div className="bg-[#24211E] p-3 rounded border border-[#3A3632] space-y-1.5">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-bold">Linen Button-down Shirt (ZAM-SH-04)</span>
                      <span className="text-emerald-400 font-bold">22 in stock</span>
                    </div>
                    <div className="text-[11px] text-[#817B75] flex justify-between">
                      <span>All variations mapped</span>
                      <span className="text-emerald-400">Sync: OK</span>
                    </div>
                  </div>
                </div>
              )}

              {activePillar === 'finance' && (
                <div className="space-y-3 font-mono text-xs">
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-[#24211E] p-2.5 rounded">
                      <span className="text-[10px] text-[#817B75]">Total Revenue</span>
                      <span className="text-white font-bold block text-sm">K12,450</span>
                    </div>
                    <div className="bg-[#24211E] p-2.5 rounded">
                      <span className="text-[10px] text-[#817B75]">Recorded COGS</span>
                      <span className="text-white font-bold block text-sm">K7,200</span>
                    </div>
                    <div className="bg-[#24211E] p-2.5 rounded">
                      <span className="text-[10px] text-[#817B75]">Gross Profit</span>
                      <span className="text-emerald-400 font-bold block text-sm">+K5,250</span>
                    </div>
                  </div>
                  <div className="p-3 bg-[#24211E] rounded text-[11px] text-[#D9CEBF] border border-[#3A3632]">
                    Calculated from actual completed transactions. Replaces manual paper reconciliation with transparent operational margins.
                  </div>
                </div>
              )}

              {activePillar === 'channels' && (
                <div className="space-y-2.5 font-mono text-xs">
                  <div className="flex items-center justify-between p-2.5 bg-[#24211E] rounded border border-[#3A3632]">
                    <span className="text-emerald-400">WhatsApp Business API:</span>
                    <span className="text-white">Connected (2,410 conversations)</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 bg-[#24211E] rounded border border-[#3A3632]">
                    <span className="text-[#D9CEBF]">Online Web Storefront:</span>
                    <span className="text-white">Active (Catalog Synced)</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 bg-[#24211E] rounded border border-[#3A3632]">
                    <span className="text-[#D9CEBF]">In-Store Counter Point:</span>
                    <span className="text-white">Connected</span>
                  </div>
                </div>
              )}

              {activePillar === 'workers' && (
                <div className="space-y-2.5 font-mono text-xs">
                  <div className="p-3 bg-[#24211E] rounded border border-[#3A3632] space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-bold">AI Support Worker #01</span>
                      <span className="text-emerald-400 text-[10px]">Permission: Read-Only Stock</span>
                    </div>
                    <p className="text-[11px] text-[#817B75]">
                      Boundaries: Answers product & branch stock queries. Cannot alter prices or issue unauthorized refunds.
                    </p>
                  </div>
                  <div className="p-2.5 bg-[#1F2C24] border border-[#2D6A4F]/60 rounded text-[11px] text-emerald-300">
                    Audit Status: 100% of AI worker actions logged in human-accessible audit trail.
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
