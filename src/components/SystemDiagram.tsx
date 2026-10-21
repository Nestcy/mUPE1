import React, { useState, useEffect } from 'react';
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
  Cpu,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2
} from 'lucide-react';

export const SystemDiagram: React.FC = () => {
  const [activePillar, setActivePillar] = useState<'sales' | 'inventory' | 'finance' | 'channels' | 'workers'>('inventory');
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

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

  // Handle Escape key to dismiss overlay
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOverlayOpen(false);
      }
    };
    if (isOverlayOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOverlayOpen]);

  const renderConsolePreview = (pillarId: 'sales' | 'inventory' | 'finance' | 'channels' | 'workers') => {
    return (
      <div className="space-y-3 font-mono text-xs">
        {pillarId === 'sales' && (
          <div className="space-y-3">
            <div className="bg-[#24211E] p-3.5 rounded-lg border border-[#3A3632]">
              <div className="text-[10px] text-[#817B75] uppercase">Live Orders Ingestion</div>
              <div className="text-emerald-400 font-bold mt-1 text-sm">ORD-8921 • K650.00 • Airtel Money</div>
              <div className="text-[#D9CEBF] text-[11px] mt-0.5">Customer: Chileshe Mulenga • Black Chelsea Boots</div>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div className="bg-[#24211E] p-2.5 rounded-lg">
                <span className="text-[#817B75] block">Today's Sales</span>
                <span className="text-white font-bold text-sm">K12,450 (18 orders)</span>
              </div>
              <div className="bg-[#24211E] p-2.5 rounded-lg">
                <span className="text-[#817B75] block">Pending Dispatch</span>
                <span className="text-amber-400 font-bold text-sm">2 orders</span>
              </div>
            </div>
          </div>
        )}

        {pillarId === 'inventory' && (
          <div className="space-y-3">
            <div className="bg-[#24211E] p-3 rounded-lg border border-[#3A3632] space-y-1.5">
              <div className="flex justify-between items-center">
                <span className="text-white font-bold">Leather Chelsea Boots (ZAM-BT-42)</span>
                <span className="text-emerald-400 font-bold">13 in stock</span>
              </div>
              <div className="text-[11px] text-[#817B75] flex justify-between">
                <span>Cairo Road: 3 • East Park: 6 • Ndola: 4</span>
                <span className="text-emerald-400">Sync: OK</span>
              </div>
            </div>
            <div className="bg-[#24211E] p-3 rounded-lg border border-[#3A3632] space-y-1.5">
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

        {pillarId === 'finance' && (
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-[#24211E] p-2.5 rounded-lg">
                <span className="text-[10px] text-[#817B75]">Total Revenue</span>
                <span className="text-white font-bold block text-sm">K12,450</span>
              </div>
              <div className="bg-[#24211E] p-2.5 rounded-lg">
                <span className="text-[10px] text-[#817B75]">Recorded COGS</span>
                <span className="text-white font-bold block text-sm">K7,200</span>
              </div>
              <div className="bg-[#24211E] p-2.5 rounded-lg">
                <span className="text-[10px] text-[#817B75]">Gross Profit</span>
                <span className="text-emerald-400 font-bold block text-sm">+K5,250</span>
              </div>
            </div>
            <div className="p-3 bg-[#24211E] rounded-lg text-[11px] text-[#D9CEBF] border border-[#3A3632]">
              Calculated from actual completed transactions. Replaces manual paper reconciliation with transparent operational margins.
            </div>
          </div>
        )}

        {pillarId === 'channels' && (
          <div className="space-y-2.5">
            <div className="flex items-center justify-between p-2.5 bg-[#24211E] rounded-lg border border-[#3A3632]">
              <span className="text-emerald-400">WhatsApp Business API:</span>
              <span className="text-white font-bold">Connected (2,410 conversations)</span>
            </div>
            <div className="flex items-center justify-between p-2.5 bg-[#24211E] rounded-lg border border-[#3A3632]">
              <span className="text-[#D9CEBF]">Online Web Storefront:</span>
              <span className="text-white font-bold">Active (Catalog Synced)</span>
            </div>
            <div className="flex items-center justify-between p-2.5 bg-[#24211E] rounded-lg border border-[#3A3632]">
              <span className="text-[#D9CEBF]">In-Store Counter Point:</span>
              <span className="text-white font-bold">Connected</span>
            </div>
          </div>
        )}

        {pillarId === 'workers' && (
          <div className="space-y-2.5">
            <div className="p-3 bg-[#24211E] rounded-lg border border-[#3A3632] space-y-1">
              <div className="flex justify-between items-center">
                <span className="text-white font-bold">AI Support Worker #01</span>
                <span className="text-emerald-400 text-[10px] px-1.5 py-0.5 rounded bg-emerald-950/70 border border-emerald-900/50">Read-Only Stock</span>
              </div>
              <p className="text-[11px] text-[#817B75]">
                Boundaries: Answers product & branch stock queries. Cannot alter prices or issue unauthorized refunds.
              </p>
            </div>
            <div className="p-2.5 bg-[#1F2C24] border border-[#2D6A4F]/60 rounded-lg text-[11px] text-emerald-300">
              Audit Status: 100% of AI worker actions logged in human-accessible audit trail.
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-[#EDE4D9]/40 py-16 px-4 sm:px-6 lg:px-8 border-b border-[#E4DCD3] relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDE4D9] text-[#B85F45] text-xs font-semibold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>The Connected Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#191817] tracking-tight mb-4">
            One connected system. A more capable business.
          </h2>
          <p className="text-base sm:text-lg text-[#817B75] leading-relaxed">
            Mupezeni brings the core parts of retail operations together. Click any component below to view how it operates directly without scrolling.
          </p>
        </div>

        {/* 5-Pillar Tabs with Direct Overlay Trigger */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
          {pillars.map((pillar) => {
            const isSelected = activePillar === pillar.id;
            return (
              <button
                key={pillar.id}
                onClick={() => {
                  setActivePillar(pillar.id);
                  setIsOverlayOpen(true);
                }}
                className={`p-4 rounded-xl text-left border transition-all flex flex-col justify-between group cursor-pointer text-left relative overflow-hidden ${
                  isSelected
                    ? 'bg-white border-[#B85F45] shadow-md ring-2 ring-[#B85F45]/20'
                    : 'bg-[#F8F5F0] border-[#D9CEBF] hover:bg-white hover:border-[#B85F45]/50 hover:shadow-xs'
                }`}
              >
                <div>
                  <div className={`p-2.5 rounded-lg w-fit mb-3 transition-colors ${
                    isSelected ? 'bg-[#B85F45] text-white' : 'bg-[#EDE4D9] text-[#191817] group-hover:bg-[#B85F45] group-hover:text-white'
                  }`}>
                    {pillar.icon}
                  </div>
                  <div>
                    <h4 className={`text-sm font-bold ${isSelected ? 'text-[#B85F45]' : 'text-[#191817]'}`}>
                      {pillar.name}
                    </h4>
                    <p className="text-[11px] text-[#817B75] mt-1 line-clamp-2 leading-tight">
                      {pillar.tagline}
                    </p>
                  </div>
                </div>

                <div className="mt-3 pt-2.5 border-t border-[#EDE4D9] flex items-center justify-between text-[11px] font-semibold text-[#B85F45]">
                  <span>Click for details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            );
          })}
        </div>

        {/* In-Page Summary Hub Display */}
        <div className="bg-white rounded-2xl border border-[#E4DCD3] p-6 sm:p-8 shadow-xs">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E4DCD3]">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-lg bg-[#F6EDE9] text-[#B85F45]">
                {current.icon}
              </span>
              <div>
                <span className="text-[10px] font-mono uppercase font-bold text-[#B85F45]">
                  Active Selection
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#191817]">{current.name}</h3>
              </div>
            </div>

            <button
              onClick={() => setIsOverlayOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#EDE4D9] hover:bg-[#D9CEBF] text-[#191817] text-xs font-semibold transition-colors"
            >
              <Maximize2 className="w-3.5 h-3.5 text-[#B85F45]" />
              <span>Open in Overlay View</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left description (6 cols) */}
            <div className="lg:col-span-6 space-y-4">
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

              {renderConsolePreview(activePillar)}
            </div>
          </div>
        </div>
      </div>

      {/* OVERLAY MODAL: Appears directly over the component when any card is clicked */}
      {isOverlayOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setIsOverlayOpen(false)}
        >
          <div 
            className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-white rounded-2xl border border-[#E4DCD3] shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="p-4 sm:p-5 bg-[#F8F5F0] border-b border-[#E4DCD3] flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#B85F45] text-white shrink-0">
                  {current.icon}
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase font-bold text-[#B85F45] block">
                    Connected Architecture • {current.tagline}
                  </span>
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#191817]">
                    {current.name}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {/* 5-Pillar Tabs Switcher inside Modal */}
                <div className="flex items-center gap-1 bg-[#EDE4D9] p-1 rounded-xl overflow-x-auto max-w-[280px] sm:max-w-none">
                  {pillars.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setActivePillar(p.id)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                        activePillar === p.id
                          ? 'bg-white text-[#B85F45] shadow-xs'
                          : 'text-[#817B75] hover:text-[#191817]'
                      }`}
                    >
                      {p.name.split(' ')[0]}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setIsOverlayOpen(false)}
                  className="p-2 rounded-lg bg-[#EDE4D9]/80 hover:bg-[#EDE4D9] text-[#817B75] hover:text-[#191817] transition-colors"
                  aria-label="Close overlay"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-5 sm:p-7 overflow-y-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left side details */}
                <div className="lg:col-span-6 space-y-4">
                  <div>
                    <h4 className="text-sm font-bold text-[#191817] mb-1">Operational Purpose</h4>
                    <p className="text-sm text-[#817B75] leading-relaxed">
                      {current.description}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#F8F5F0] border border-[#E4DCD3] space-y-2">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#191817]">
                      <Sparkles className="w-3.5 h-3.5 text-[#B85F45]" />
                      <span>Live Workflow Example in Mupezeni:</span>
                    </div>
                    <p className="text-xs font-mono text-[#817B75] bg-white p-3 rounded-lg border border-[#EDE4D9] leading-relaxed">
                      {current.sampleFlow}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-[#817B75] pt-1">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Zero manual duplicate entry</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#B85F45]" />
                      <span>Real-time cross-system sync</span>
                    </div>
                  </div>
                </div>

                {/* Right side data console preview */}
                <div className="lg:col-span-6 bg-[#191817] text-white rounded-xl p-5 border border-[#312E2B] shadow-lg">
                  <div className="flex items-center justify-between pb-3 border-b border-[#2C2926] mb-4 text-xs font-mono">
                    <div className="flex items-center gap-2 text-emerald-400">
                      <Cpu className="w-4 h-4 text-[#B85F45]" />
                      <span>Mupezeni Unified Core Simulation</span>
                    </div>
                    <span className="text-[10px] text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-900">
                      ● Active
                    </span>
                  </div>

                  {renderConsolePreview(activePillar)}
                </div>
              </div>
            </div>

            {/* Modal Footer Controls */}
            <div className="p-4 bg-[#F8F5F0] border-t border-[#E4DCD3] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    const currentIndex = pillars.findIndex((p) => p.id === activePillar);
                    const prevIndex = (currentIndex - 1 + pillars.length) % pillars.length;
                    setActivePillar(pillars[prevIndex].id);
                  }}
                  className="px-3 py-1.5 rounded-lg border border-[#D9CEBF] bg-white hover:bg-[#EDE4D9] text-[#191817] text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>
                <button
                  onClick={() => {
                    const currentIndex = pillars.findIndex((p) => p.id === activePillar);
                    const nextIndex = (currentIndex + 1) % pillars.length;
                    setActivePillar(pillars[nextIndex].id);
                  }}
                  className="px-3 py-1.5 rounded-lg border border-[#D9CEBF] bg-white hover:bg-[#EDE4D9] text-[#191817] text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={() => setIsOverlayOpen(false)}
                className="px-5 py-2 rounded-xl bg-[#B85F45] hover:bg-[#97442F] text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
              >
                Done Reading
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
