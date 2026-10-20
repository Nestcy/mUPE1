import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  RefreshCw, 
  MessageSquare, 
  ShoppingBag, 
  Database, 
  Layers, 
  AlertTriangle, 
  Play, 
  Pause, 
  RotateCcw,
  Sparkles,
  ShieldCheck,
  Check
} from 'lucide-react';

export const WorkflowSimulation: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<'sale' | 'support' | 'catalog'>('sale');
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Reset step when changing demo tab
  const handleTabChange = (demo: 'sale' | 'support' | 'catalog') => {
    setActiveDemo(demo);
    setCurrentStep(0);
    setIsPlaying(false);
  };

  // Auto-play timer
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev >= 3) {
            setIsPlaying(false);
            return 3;
          }
          return prev + 1;
        });
      }, 2600);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-b border-[#E4DCD3]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDE4D9] text-[#B85F45] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Demonstrated Workflows • Clearly Labelled Sample Data</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#191817] tracking-tight mb-4">
            See what happens when your retail operations talk to each other.
          </h2>
          <p className="text-base sm:text-lg text-[#817B75] leading-relaxed">
            Real workflows instead of generic AI buzzwords. Compare the friction of manual coordination with how information moves through Mupezeni.
          </p>
        </div>

        {/* Demo Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-10">
          <button
            onClick={() => handleTabChange('sale')}
            className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 border ${
              activeDemo === 'sale'
                ? 'bg-[#B85F45] text-white border-[#B85F45] shadow-sm'
                : 'bg-[#F8F5F0] text-[#191817] border-[#D9CEBF] hover:border-[#B85F45]'
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Demo 1: A Sale Becomes a Business Record</span>
          </button>

          <button
            onClick={() => handleTabChange('support')}
            className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 border ${
              activeDemo === 'support'
                ? 'bg-[#B85F45] text-white border-[#B85F45] shadow-sm'
                : 'bg-[#F8F5F0] text-[#191817] border-[#D9CEBF] hover:border-[#B85F45]'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>Demo 2: Customer Enquiry to Verified Stock Answer</span>
          </button>

          <button
            onClick={() => handleTabChange('catalog')}
            className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 border ${
              activeDemo === 'catalog'
                ? 'bg-[#B85F45] text-white border-[#B85F45] shadow-sm'
                : 'bg-[#F8F5F0] text-[#191817] border-[#D9CEBF] hover:border-[#B85F45]'
            }`}
          >
            <RefreshCw className="w-4 h-4" />
            <span>Demo 3: One Central Product Record, Fewer Repeated Updates</span>
          </button>
        </div>

        {/* Interactive Playback Container */}
        <div className="bg-[#F8F5F0] rounded-2xl border border-[#E4DCD3] p-6 sm:p-8 shadow-xs">
          {/* Header row with playback controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-[#E4DCD3] gap-4">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#B85F45] font-bold">
                {activeDemo === 'sale' && 'Workflow: Sale & Inventory Synchronization'}
                {activeDemo === 'support' && 'Workflow: AI Support with Verified Database Check'}
                {activeDemo === 'catalog' && 'Workflow: Central Catalog Distribution'}
              </span>
              <h3 className="text-xl font-bold text-[#191817]">
                {activeDemo === 'sale' && 'How a recorded sale updates inventory and business reporting'}
                {activeDemo === 'support' && 'How an AI worker answers using actual business records'}
                {activeDemo === 'catalog' && 'How a price revision coordinates across supported channels'}
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                disabled={currentStep === 0}
                className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-white border border-[#D9CEBF] text-[#191817] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#EDE4D9]"
              >
                Previous Step
              </button>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#B85F45] text-white hover:bg-[#97442F]"
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span>{isPlaying ? 'Pause' : 'Auto Play'}</span>
              </button>
              <button
                onClick={() => setCurrentStep(Math.min(3, currentStep + 1))}
                disabled={currentStep === 3}
                className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-white border border-[#D9CEBF] text-[#191817] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#EDE4D9]"
              >
                Next Step
              </button>
              <button
                onClick={() => { setCurrentStep(0); setIsPlaying(false); }}
                title="Reset"
                className="p-1.5 rounded-lg text-[#817B75] hover:bg-[#EDE4D9]"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Stepper Progress Indicator */}
          <div className="grid grid-cols-4 gap-2 mb-8">
            {[0, 1, 2, 3].map((stepIdx) => {
              const isPast = currentStep >= stepIdx;
              const isCurrent = currentStep === stepIdx;
              return (
                <button
                  key={stepIdx}
                  onClick={() => { setCurrentStep(stepIdx); setIsPlaying(false); }}
                  className={`text-left p-2.5 rounded-lg border text-xs transition-all ${
                    isCurrent
                      ? 'bg-white border-[#B85F45] shadow-xs'
                      : isPast
                      ? 'bg-white/60 border-[#D9CEBF] text-[#191817]'
                      : 'bg-transparent border-dashed border-[#D9CEBF] text-[#817B75]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className={`font-mono text-[10px] font-bold ${isCurrent ? 'text-[#B85F45]' : 'text-[#817B75]'}`}>
                      STEP 0{stepIdx + 1}
                    </span>
                    {isPast && <Check className="w-3 h-3 text-emerald-600" />}
                  </div>
                  <div className="font-semibold truncate">
                    {activeDemo === 'sale' && ['Order Received', 'Sale Record Created', 'Stock Decremented', 'Ledger & Dashboard'][stepIdx]}
                    {activeDemo === 'support' && ['WhatsApp Query', 'Database Lookup', 'Record Verified', 'Contextual Response'][stepIdx]}
                    {activeDemo === 'catalog' && ['Price Updated', 'Master Specification', 'Payload Dispatched', 'Sync Status Receipt'][stepIdx]}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Visual Workspace Canvas */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Before vs. Mupezeni Comparison Box (4 cols) */}
            <div className="lg:col-span-4 bg-white rounded-xl p-5 border border-[#E4DCD3] space-y-4">
              <div className="text-xs uppercase font-bold text-[#817B75] tracking-wider pb-2 border-b border-[#F0EAE1]">
                Before vs. With Mupezeni
              </div>

              <div className="space-y-1.5">
                <span className="text-xs font-bold text-rose-800 bg-rose-50 px-2 py-0.5 rounded">
                  Conventional Disconnected Way
                </span>
                <p className="text-xs text-[#817B75] leading-relaxed">
                  {activeDemo === 'sale' && 'An order arrives on WhatsApp. The store clerk has to open a physical notebook or spreadsheet, manually type the customer name, find the stock column, change 14 to 13, and calculate total cash at closing time.'}
                  {activeDemo === 'support' && 'A shopper asks if a size is available. The customer rep switches apps, asks colleagues in a staff group, waits 20 minutes, or answers "Yes" without verifying, leading to awkward out-of-stock cancellations.'}
                  {activeDemo === 'catalog' && 'A supplier price increases. The owner edits the price in their Excel sheet, then repeats the typing in WhatsApp Business catalog, website product page, and notifies shop staff manually.'}
                </p>
              </div>

              <div className="pt-2 border-t border-[#F0EAE1] space-y-1.5">
                <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                  With Mupezeni Connected Flow
                </span>
                <p className="text-xs text-[#191817] leading-relaxed">
                  {activeDemo === 'sale' && 'A recorded sale through supported workflows updates the unified sales ledger, automatically decrements the specific branch inventory, and refreshes gross profit metrics instantly.'}
                  {activeDemo === 'support' && 'Authorized AI Customer Support checks the actual database record for the exact branch before replying. It never confirms availability without a verified database count.'}
                  {activeDemo === 'catalog' && 'Updating the master product record triggers the authorized catalog workflow. Status shows whether external endpoints succeeded or require manual check.'}
                </p>
              </div>
            </div>

            {/* Interactive Live Screen Simulation (8 cols) */}
            <div className="lg:col-span-8 bg-[#191817] text-white rounded-xl p-6 border border-[#312E2B] shadow-md font-sans">
              <div className="flex items-center justify-between pb-3 border-b border-[#2C2926] mb-4 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="font-mono text-[#D9CEBF]">Mupezeni Operational Engine • Lusaka Node</span>
                </div>
                <span className="text-[10px] font-semibold bg-[#2D2622] text-[#B85F45] px-2 py-0.5 rounded border border-[#483B33]">
                  SAMPLE DEMONSTRATION DATA
                </span>
              </div>

              {/* DEMO 1: SALE WORKFLOW SIMULATION */}
              {activeDemo === 'sale' && (
                <div className="space-y-4">
                  {currentStep === 0 && (
                    <div className="bg-[#24211E] p-4 rounded-lg border border-[#3A3632] space-y-2 animate-in fade-in">
                      <div className="flex items-center justify-between text-xs text-[#817B75]">
                        <span className="font-mono text-emerald-400">CHANNEL: WhatsApp Business Order #8921</span>
                        <span>Today, 14:20</span>
                      </div>
                      <div className="p-3 bg-[#191817] rounded-md text-xs font-mono text-[#EDE4D9] border border-[#2D2926]">
                        Customer: Chileshe Mulenga (+260 97* *** 892)<br />
                        Item: Leather Chelsea Boots (Black, Size 42) — 1 Unit<br />
                        Payment: K650 via Airtel Money (TxID: AT-9812409) [Verified]
                      </div>
                      <div className="text-[11px] text-[#A89F95]">
                        Status: Order acknowledged. Ready for unified record creation.
                      </div>
                    </div>
                  )}

                  {currentStep === 1 && (
                    <div className="bg-[#24211E] p-4 rounded-lg border border-emerald-900/60 space-y-2 animate-in fade-in">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-emerald-400 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Sales Record Generated (ORD-8921)
                        </span>
                        <span className="text-[10px] text-[#817B75] font-mono">TX-SYNC-201</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-xs font-mono">
                        <div className="bg-[#191817] p-2 rounded">
                          <span className="text-[#817B75] block text-[10px]">Gross Sale</span>
                          <span className="text-white font-bold">K650.00</span>
                        </div>
                        <div className="bg-[#191817] p-2 rounded">
                          <span className="text-[#817B75] block text-[10px]">COGS Cost</span>
                          <span className="text-white font-bold">K380.00</span>
                        </div>
                        <div className="bg-[#191817] p-2 rounded">
                          <span className="text-[#817B75] block text-[10px]">Gross Profit</span>
                          <span className="text-emerald-400 font-bold">+K270.00 (41.5%)</span>
                        </div>
                      </div>
                      <div className="text-[11px] text-[#A89F95]">
                        Logged in unified sales ledger. Triggering inventory decrement protocol...
                      </div>
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div className="bg-[#24211E] p-4 rounded-lg border border-[#B85F45]/60 space-y-2 animate-in fade-in">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-[#B85F45] flex items-center gap-1.5">
                          <Database className="w-3.5 h-3.5" /> Inventory Decrement: Cairo Road Branch
                        </span>
                        <span className="text-[10px] font-mono text-[#D9CEBF]">SKU: ZAM-BT-42</span>
                      </div>
                      <div className="p-3 bg-[#191817] rounded-md flex items-center justify-between text-xs font-mono">
                        <div>
                          <span className="text-white font-bold block">Leather Chelsea Boots (Size 42)</span>
                          <span className="text-[#817B75] text-[10px]">Location: Cairo Road Branch, Lusaka</span>
                        </div>
                        <div className="text-right">
                          <span className="text-[#817B75] line-through text-xs mr-2">14 units</span>
                          <span className="text-emerald-400 font-extrabold text-base">13 units</span>
                          <span className="text-[10px] text-emerald-500 block">(-1 unit committed)</span>
                        </div>
                      </div>
                      <div className="text-[11px] text-[#A89F95]">
                        Safety threshold: 5 units. No re-order triggered. Status: In Stock.
                      </div>
                    </div>
                  )}

                  {currentStep === 3 && (
                    <div className="bg-[#24211E] p-4 rounded-lg border border-[#2D6A4F] space-y-3 animate-in fade-in">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-emerald-400 flex items-center gap-1.5">
                          <ShieldCheck className="w-4 h-4 text-emerald-400" /> Operational Dashboard Updated In Real Time
                        </span>
                        <span className="text-[10px] bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded font-mono">
                          Synced
                        </span>
                      </div>
                      <p className="text-xs text-[#D9CEBF] leading-relaxed">
                        Total Today's Recorded Revenue: <strong className="text-white font-mono">K12,450</strong> (18 orders). Inventory counts, customer transaction logs, and gross margin totals are synchronized across WhatsApp, Web and Storefront without manual double-entry.
                      </p>
                      <div className="pt-2 border-t border-[#3A3632] flex items-center justify-between text-[11px] text-[#A89F95]">
                        <span>Zero human copy-paste required</span>
                        <span className="text-emerald-400 font-mono">Audit Log: #AUD-0891 (Success)</span>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* DEMO 2: AI CUSTOMER SUPPORT SIMULATION */}
              {activeDemo === 'support' && (
                <div className="space-y-4">
                  {currentStep === 0 && (
                    <div className="bg-[#24211E] p-4 rounded-lg border border-[#3A3632] space-y-2 animate-in fade-in">
                      <div className="flex items-center justify-between text-xs text-[#817B75]">
                        <span className="font-mono text-emerald-400">WhatsApp Incoming Customer Message</span>
                        <span>15:02</span>
                      </div>
                      <div className="p-3 bg-[#191817] rounded-md text-xs font-sans text-white border border-[#2D2926] max-w-sm">
                        <p className="text-emerald-400 text-[10px] font-semibold mb-1">Customer (Mwila):</p>
                        "Hi there! Do you still have the black Chelsea boots in size 42 at Cairo Road?"
                      </div>
                      <div className="text-[11px] text-[#A89F95]">
                        AI Worker trigger: Stock availability enquiry.
                      </div>
                    </div>
                  )}

                  {currentStep === 1 && (
                    <div className="bg-[#24211E] p-4 rounded-lg border border-amber-900/60 space-y-2 animate-in fade-in">
                      <div className="flex items-center justify-between text-xs text-amber-400">
                        <span className="font-semibold flex items-center gap-1.5">
                          <Database className="w-3.5 h-3.5" /> Querying Authorized Inventory Records...
                        </span>
                        <span className="text-[10px] font-mono text-[#817B75]">SELECT stock FROM inventory</span>
                      </div>
                      <div className="p-3 bg-[#191817] rounded-md text-xs font-mono text-[#D9CEBF] border border-[#2D2926]">
                        {'>'} Searching: category='Footwear' AND color='Black' AND size='42'<br />
                        {'>'} Location filter: 'Cairo Road, Lusaka'<br />
                        {'>'} System status: Live query in progress (no assumptions permitted)
                      </div>
                      <div className="text-[11px] text-[#A89F95]">
                        Guardrail active: Worker cannot claim availability before positive record return.
                      </div>
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div className="bg-[#24211E] p-4 rounded-lg border border-emerald-900/60 space-y-2 animate-in fade-in">
                      <div className="flex items-center justify-between text-xs text-emerald-400">
                        <span className="font-semibold flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Record Retrieved & Verified
                        </span>
                        <span className="text-[10px] font-mono text-[#817B75]">SKU: ZAM-BT-42-BLK</span>
                      </div>
                      <div className="p-3 bg-[#191817] rounded-md text-xs font-mono text-white border border-[#2D2926] space-y-1">
                        <div>Product: Leather Chelsea Boots</div>
                        <div>Available Count: <span className="text-emerald-400 font-bold">3 pairs</span> at Cairo Road</div>
                        <div>Official Price: <span className="text-emerald-400 font-bold">K650.00</span></div>
                        <div>Delivery options: Same-day Lusaka (K40) or in-store collection</div>
                      </div>
                      <div className="text-[11px] text-[#A89F95]">
                        Verification complete. Constructing authorized response draft.
                      </div>
                    </div>
                  )}

                  {currentStep === 3 && (
                    <div className="bg-[#24211E] p-4 rounded-lg border border-[#2D6A4F] space-y-3 animate-in fade-in">
                      <div className="flex items-center justify-between text-xs text-emerald-400">
                        <span className="font-semibold flex items-center gap-1.5">
                          <ShieldCheck className="w-4 h-4 text-emerald-400" /> WhatsApp Response Dispatched With Context
                        </span>
                        <span className="text-[10px] text-[#817B75] font-mono">Channel: WhatsApp API</span>
                      </div>
                      <div className="p-3.5 bg-[#1F2C24] border border-[#2D6A4F]/60 rounded-md text-xs text-white max-w-md ml-auto">
                        <p className="text-emerald-300 text-[10px] font-bold mb-1">Mupezeni Support Worker:</p>
                        "Hello Mwila! Yes, we have 3 pairs of Black Chelsea Boots (Size 42) in stock right now at our Cairo Road branch, priced at K650. Would you like us to reserve a pair for you to collect this afternoon, or would you prefer same-day Lusaka delivery?"
                      </div>
                      <div className="pt-2 border-t border-[#3A3632] flex items-center justify-between text-[11px] text-[#A89F95]">
                        <span>Response time: 4 seconds</span>
                        <span className="text-emerald-400">Zero staff distraction</span>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* DEMO 3: CENTRAL CATALOG UPDATE SIMULATION */}
              {activeDemo === 'catalog' && (
                <div className="space-y-4">
                  {currentStep === 0 && (
                    <div className="bg-[#24211E] p-4 rounded-lg border border-[#3A3632] space-y-2 animate-in fade-in">
                      <div className="flex items-center justify-between text-xs text-[#817B75]">
                        <span className="font-mono text-[#B85F45]">Action: Price Adjustment</span>
                        <span>Inventory Admin</span>
                      </div>
                      <div className="p-3 bg-[#191817] rounded-md text-xs font-mono text-[#EDE4D9] border border-[#2D2926]">
                        Product: Linen Button-down Shirt (SKU-SH-04)<br />
                        Previous Retail Price: <span className="line-through text-[#817B75]">K350.00</span><br />
                        New Retail Price: <strong className="text-emerald-400 font-bold">K380.00</strong><br />
                        Reason: Supplier fabric tariff adjustment
                      </div>
                      <div className="text-[11px] text-[#A89F95]">
                        Central change submitted. Initiating channel synchronization manifest...
                      </div>
                    </div>
                  )}

                  {currentStep === 1 && (
                    <div className="bg-[#24211E] p-4 rounded-lg border border-amber-900/60 space-y-2 animate-in fade-in">
                      <div className="flex items-center justify-between text-xs text-amber-400">
                        <span className="font-semibold flex items-center gap-1.5">
                          <Layers className="w-3.5 h-3.5" /> Master Specification Synchronized
                        </span>
                        <span className="text-[10px] font-mono text-[#817B75]">REV: 1048-A</span>
                      </div>
                      <p className="text-xs text-[#D9CEBF] leading-relaxed">
                        Master catalog record updated in core database. Downstream channels identified:
                        1. WhatsApp Business Catalog (API Webhook), 2. Web Storefront (Storefront CDN).
                      </p>
                      <div className="text-[11px] text-[#A89F95]">
                        Integrations preparing channel-specific payloads...
                      </div>
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div className="bg-[#24211E] p-4 rounded-lg border border-blue-900/60 space-y-2 animate-in fade-in">
                      <div className="flex items-center justify-between text-xs text-blue-400">
                        <span className="font-semibold flex items-center gap-1.5">
                          <RefreshCw className="w-3.5 h-3.5 animate-spin" /> Dispatching Channel Updates
                        </span>
                        <span className="text-[10px] font-mono text-[#817B75]">HTTP POST</span>
                      </div>
                      <div className="space-y-1.5 text-xs font-mono">
                        <div className="flex justify-between items-center bg-[#191817] p-2 rounded">
                          <span className="text-[#D9CEBF]">WhatsApp Business Catalog:</span>
                          <span className="text-emerald-400">Payload Sent (200 OK)</span>
                        </div>
                        <div className="flex justify-between items-center bg-[#191817] p-2 rounded">
                          <span className="text-[#D9CEBF]">Mupezeni Web Storefront:</span>
                          <span className="text-emerald-400">Cache Invalidation (Complete)</span>
                        </div>
                      </div>
                      <div className="text-[11px] text-[#A89F95]">
                        Verifying endpoint confirmation before marking task complete.
                      </div>
                    </div>
                  )}

                  {currentStep === 3 && (
                    <div className="bg-[#24211E] p-4 rounded-lg border border-[#2D6A4F] space-y-3 animate-in fade-in">
                      <div className="flex items-center justify-between text-xs text-emerald-400">
                        <span className="font-semibold flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Synchronization Confirmed
                        </span>
                        <span className="text-[10px] bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded font-mono">
                          All Channels Unified
                        </span>
                      </div>
                      <p className="text-xs text-[#D9CEBF] leading-relaxed">
                        One edit updated both WhatsApp catalog and storefront records. If an external channel encounters a temporary timeout, Mupezeni flags "Attention Required" rather than silently failing or pretending the sync completed.
                      </p>
                      <div className="pt-2 border-t border-[#3A3632] flex items-center justify-between text-[11px] text-[#A89F95]">
                        <span>Zero manual re-typing across platforms</span>
                        <span className="text-emerald-400 font-mono">Central Audit ID: #CAT-4902</span>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
