import React, { useState } from 'react';
import { PageType } from '../types';
import { SAMPLE_PRODUCTS } from '../data/retailData';
import { 
  ShoppingBag, 
  Boxes, 
  BarChart3, 
  Smartphone, 
  Bot, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Database, 
  Layers, 
  AlertCircle,
  Clock,
  Sparkles,
  ChevronRight,
  Search,
  ExternalLink
} from 'lucide-react';

interface PlatformPageProps {
  onNavigate: (page: PageType) => void;
  onOpenDemo: () => void;
}

export const PlatformPage: React.FC<PlatformPageProps> = ({ onNavigate, onOpenDemo }) => {
  const [activeSection, setActiveSection] = useState<'sales' | 'inventory' | 'finance' | 'channels' | 'workers'>('inventory');
  const [selectedProduct, setSelectedProduct] = useState(SAMPLE_PRODUCTS[0]);
  const [workflowStep, setWorkflowStep] = useState(0);

  const workflowSteps = [
    { title: 'Product Info', desc: 'Central master spec created with SKU, size variants, retail price & COGS.', auto: false, approval: 'Owner sets base price & margin' },
    { title: 'Inventory Stock', desc: 'Branch counts allocated (e.g. Cairo Road & East Park). Reorder safety limit defined.', auto: true, approval: 'Automatic once received' },
    { title: 'Digital Catalog', desc: 'Authorized endpoints receive payload (WhatsApp Business & Web Storefront).', auto: true, approval: 'Automatic verification' },
    { title: 'Customer Enquiry', desc: 'Shopper asks about size 42. AI Support retrieves live stock record and verifies count.', auto: true, approval: 'Within standard boundaries' },
    { title: 'Sale Recorded', desc: 'Order confirmed with Airtel/MTN mobile money TxID. Stock decrements immediately.', auto: true, approval: 'Requires valid payment TxID' },
    { title: 'Business Records', desc: 'Sales ledger credited, gross profit calculated from COGS, and daily report refreshed.', auto: true, approval: 'Automatic ledger entry' },
  ];

  return (
    <div className="min-h-screen bg-[#F8F5F0]">
      {/* Platform Hero */}
      <section className="pt-14 pb-16 border-b border-[#E4DCD3] bg-[#F8F5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <span className="text-xs uppercase font-bold tracking-wider text-[#B85F45] bg-[#EDE4D9] px-3 py-1 rounded-full">
              The Architecture
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#191817] tracking-tight">
              Your retail operations, connected.
            </h1>
            <p className="text-lg text-[#817B75] leading-relaxed">
              Mupezeni connects the information and workflows behind your retail business, from digital sales and inventory to finances, customer conversations and AI-powered operations.
            </p>
            <p className="text-base text-[#191817] font-medium leading-relaxed">
              The goal is simple: less manual coordination, better-connected information and more capacity to serve your customers.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={onOpenDemo}
                className="px-6 py-3 rounded-xl bg-[#B85F45] hover:bg-[#97442F] text-white font-bold text-sm flex items-center gap-2 shadow-sm transition-all"
              >
                <span>See the Platform in Action</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('workers')}
                className="px-6 py-3 rounded-xl bg-white hover:bg-[#EDE4D9] text-[#191817] font-semibold text-sm border border-[#D9CEBF] transition-all"
              >
                <span>Explore AI Workers</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: THE FOUNDATION (Sticky Side Nav on Desktop / Horizontal on Mobile) */}
      <section className="py-16 border-b border-[#E4DCD3] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <h2 className="text-3xl font-extrabold text-[#191817] tracking-tight mb-2">
              The Five Foundation Pillars
            </h2>
            <p className="text-sm text-[#817B75]">
              Select a foundational capability to examine its role in the retail operating system.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Sticky Navigation Sidebar (4 cols) */}
            <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-2 bg-[#F8F5F0] p-3 rounded-2xl border border-[#E4DCD3]">
              <button
                onClick={() => setActiveSection('sales')}
                className={`w-full text-left p-3.5 rounded-xl text-sm font-bold flex items-center justify-between transition-all ${
                  activeSection === 'sales'
                    ? 'bg-[#B85F45] text-white shadow-xs'
                    : 'text-[#191817] hover:bg-[#EDE4D9]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <ShoppingBag className="w-4 h-4" />
                  <span>Sales & Order Management</span>
                </div>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setActiveSection('inventory')}
                className={`w-full text-left p-3.5 rounded-xl text-sm font-bold flex items-center justify-between transition-all ${
                  activeSection === 'inventory'
                    ? 'bg-[#B85F45] text-white shadow-xs'
                    : 'text-[#191817] hover:bg-[#EDE4D9]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Boxes className="w-4 h-4" />
                  <span>Inventory Management</span>
                </div>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setActiveSection('finance')}
                className={`w-full text-left p-3.5 rounded-xl text-sm font-bold flex items-center justify-between transition-all ${
                  activeSection === 'finance'
                    ? 'bg-[#B85F45] text-white shadow-xs'
                    : 'text-[#191817] hover:bg-[#EDE4D9]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <BarChart3 className="w-4 h-4" />
                  <span>Financial Visibility</span>
                </div>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setActiveSection('channels')}
                className={`w-full text-left p-3.5 rounded-xl text-sm font-bold flex items-center justify-between transition-all ${
                  activeSection === 'channels'
                    ? 'bg-[#B85F45] text-white shadow-xs'
                    : 'text-[#191817] hover:bg-[#EDE4D9]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Smartphone className="w-4 h-4" />
                  <span>Digital Channels</span>
                </div>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setActiveSection('workers')}
                className={`w-full text-left p-3.5 rounded-xl text-sm font-bold flex items-center justify-between transition-all ${
                  activeSection === 'workers'
                    ? 'bg-[#B85F45] text-white shadow-xs'
                    : 'text-[#191817] hover:bg-[#EDE4D9]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Bot className="w-4 h-4" />
                  <span>AI Workers</span>
                </div>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Dynamic Content Panel (8 cols) */}
            <div className="lg:col-span-8 bg-[#F8F5F0] rounded-2xl p-6 sm:p-8 border border-[#E4DCD3]">
              {activeSection === 'sales' && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-mono font-bold text-[#B85F45] uppercase">Foundation 01</span>
                    <h3 className="text-2xl font-bold text-[#191817] mt-1">Sales and Order Management</h3>
                    <p className="text-sm text-[#817B75] mt-2 leading-relaxed">
                      Keep digital sales and order information organized. The objective is to maintain a consistent record of orders, their status and their relationship to the rest of the business.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="bg-white p-4 rounded-xl border border-[#E4DCD3]">
                      <h4 className="font-bold text-[#191817] mb-1">Unified Order Ledger</h4>
                      <p className="text-[#817B75]">Captures customer name, phone, order item, delivery address, and payment method in one place.</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-[#E4DCD3]">
                      <h4 className="font-bold text-[#191817] mb-1">Mobile Money Integration</h4>
                      <p className="text-[#817B75]">Records Airtel Money & MTN Mobile Money transaction references to verify payments before fulfillment.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-[#E4DCD3] text-xs font-mono">
                    <div className="text-[#817B75] mb-2 font-bold uppercase">Sample Sales Entry:</div>
                    <div className="text-[#191817]">ORD-8921 • Customer: Chileshe Mulenga • Airtel MoMo (TxID: AT-9812409) • Status: Confirmed</div>
                  </div>
                </div>
              )}

              {activeSection === 'inventory' && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-mono font-bold text-[#B85F45] uppercase">Foundation 02</span>
                    <h3 className="text-2xl font-bold text-[#191817] mt-1">Inventory Management</h3>
                    <p className="text-sm text-[#817B75] mt-2 leading-relaxed">
                      Manage product information, stock levels, stock movements and availability. Inventory records reflect the sales, adjustments and other stock movements recorded through supported workflows.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="bg-white p-4 rounded-xl border border-[#E4DCD3]">
                      <h4 className="font-bold text-[#191817] mb-1">Multi-Branch Awareness</h4>
                      <p className="text-[#817B75]">Know exactly which branch (e.g. Cairo Road, East Park, Ndola) holds which sizes to avoid false sales.</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-[#E4DCD3]">
                      <h4 className="font-bold text-[#191817] mb-1">Automated Stock Movement</h4>
                      <p className="text-[#817B75]">When a sale is recorded, the specific branch stock automatically drops without manual notebook reconciliation.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-[#E4DCD3] text-xs font-mono">
                    <div className="text-[#817B75] mb-2 font-bold uppercase">Sample Inventory State:</div>
                    <div className="text-[#191817]">SKU: ZAM-BT-42 • Total Units: 13 • Cairo Road: 3 • East Park: 6 • Ndola: 4 • Status: Active</div>
                  </div>
                </div>
              )}

              {activeSection === 'finance' && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-mono font-bold text-[#B85F45] uppercase">Foundation 03</span>
                    <h3 className="text-2xl font-bold text-[#191817] mt-1">Financial Visibility</h3>
                    <p className="text-sm text-[#817B75] mt-2 leading-relaxed">
                      Bring relevant sales, costs and expenses into clearer operational reporting. Understand sales revenue, estimated cost of goods sold, gross profit and other available business indicators.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <div>
                      <strong>Honest Scope Clarification:</strong> These reports depend on accurate source records. They should not be described as a complete statutory accounting or tax filing system unless those specific capabilities are implemented.
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="bg-white p-4 rounded-xl border border-[#E4DCD3]">
                      <h4 className="font-bold text-[#191817] mb-1">Estimated Cost of Goods Sold (COGS)</h4>
                      <p className="text-[#817B75]">Pairs purchase cost per SKU with sales to calculate true gross profit rather than just cash throughput.</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-[#E4DCD3]">
                      <h4 className="font-bold text-[#191817] mb-1">Daily Operational Margin</h4>
                      <p className="text-[#817B75]">Gives the retail owner an instant view of gross margins without manual calculator totaling at closing.</p>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'channels' && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-mono font-bold text-[#B85F45] uppercase">Foundation 04</span>
                    <h3 className="text-2xl font-bold text-[#191817] mt-1">Digital Channels</h3>
                    <p className="text-sm text-[#817B75] mt-2 leading-relaxed">
                      Connect the business information used across supported storefronts, catalogs and customer channels. The purpose is to reduce repeated work and prevent disconnected product information from becoming a constant operational problem.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="bg-white p-4 rounded-xl border border-[#E4DCD3]">
                      <h4 className="font-bold text-[#191817] mb-1">WhatsApp Business Synchronization</h4>
                      <p className="text-[#817B75]">Keep catalog cards, prices, and stock indicators aligned with the core inventory database.</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-[#E4DCD3]">
                      <h4 className="font-bold text-[#191817] mb-1">Web Storefront Integration</h4>
                      <p className="text-[#817B75]">Ensures online shoppers see the exact same availability as WhatsApp customer chat.</p>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'workers' && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-mono font-bold text-[#B85F45] uppercase">Foundation 05</span>
                    <h3 className="text-2xl font-bold text-[#191817] mt-1">AI Workers with Scoped Access</h3>
                    <p className="text-sm text-[#817B75] mt-2 leading-relaxed">
                      Give designated AI workers access to the specific business data and external integrations they need for their assigned jobs. Business-data permissions and external-platform permissions are configured and enforced separately.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-[#E4DCD3] text-xs space-y-2">
                    <div className="font-bold text-[#191817]">Boundary & Security Matrix:</div>
                    <ul className="space-y-1.5 text-[#817B75] list-disc list-inside">
                      <li>Read-only permissions for product specs & stock numbers</li>
                      <li>Mandatory human sign-off on promotions, bulk discounts, and refunds</li>
                      <li>Full audit logging for every message drafted or sent</li>
                    </ul>
                  </div>

                  <button
                    onClick={() => onNavigate('workers')}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B85F45] hover:underline"
                  >
                    <span>View all worker specifications & boundaries</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: SHOW THE CONNECTED WORKFLOW */}
      <section className="py-16 border-b border-[#E4DCD3] bg-[#F8F5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs uppercase font-bold tracking-wider text-[#B85F45] bg-[#EDE4D9] px-3 py-1 rounded-full">
              The Product Journey
            </span>
            <h2 className="text-3xl font-extrabold text-[#191817] tracking-tight mt-3 mb-2">
              A change in one place should not create five more jobs elsewhere.
            </h2>
            <p className="text-sm text-[#817B75]">
              Click through the lifecycle of an item to see what is automated, where human approval is required, and how data moves between systems.
            </p>
          </div>

          {/* Stepper Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-6">
            {workflowSteps.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setWorkflowStep(idx)}
                className={`p-3 rounded-xl border text-left text-xs transition-all ${
                  workflowStep === idx
                    ? 'bg-[#B85F45] text-white border-[#B85F45] shadow-xs'
                    : 'bg-white border-[#D9CEBF] text-[#191817] hover:border-[#B85F45]'
                }`}
              >
                <div className="font-mono text-[10px] font-bold mb-1 opacity-80">
                  STEP 0{idx + 1}
                </div>
                <div className="font-bold truncate">{step.title}</div>
              </button>
            ))}
          </div>

          {/* Expanded Step Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E4DCD3] shadow-xs">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-8 space-y-3">
                <span className="text-xs font-mono font-bold text-[#B85F45]">
                  STAGE 0{workflowStep + 1} OF 06: {workflowSteps[workflowStep].title}
                </span>
                <h3 className="text-xl font-bold text-[#191817]">
                  {workflowSteps[workflowStep].title} in the Connected Lifecycle
                </h3>
                <p className="text-sm text-[#817B75] leading-relaxed">
                  {workflowSteps[workflowStep].desc}
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-4 text-xs">
                  <div className="flex items-center gap-1.5 font-semibold text-[#191817]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Mode: {workflowSteps[workflowStep].auto ? 'Automated Flow' : 'Human Configured'}</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-semibold text-[#817B75]">
                    <ShieldCheck className="w-4 h-4 text-[#B85F45]" />
                    <span>Checkpoint: {workflowSteps[workflowStep].approval}</span>
                  </div>
                </div>
              </div>

              <div className="md:col-span-4 bg-[#F8F5F0] p-4 rounded-xl border border-[#E4DCD3] text-xs font-mono space-y-2">
                <div className="text-[#817B75] text-[10px] uppercase font-bold">Data Payload:</div>
                <div className="text-[#191817] break-all">
                  {workflowStep === 0 && '{"sku": "ZAM-BT-42", "price": 650, "cogs": 380, "status": "active"}'}
                  {workflowStep === 1 && '{"branch_id": "cairo_rd", "stock_allocated": 14, "safety_min": 5}'}
                  {workflowStep === 2 && '{"sync_endpoints": ["whatsapp_meta_api", "web_cdn"], "state": "synced"}'}
                  {workflowStep === 3 && '{"query": "size_42", "verified_stock": 3, "response_dispatched": true}'}
                  {workflowStep === 4 && '{"order_id": "ORD-8921", "payment": "airtel_money", "stock_delta": -1}'}
                  {workflowStep === 5 && '{"sales_ledger": "+650", "cogs_debit": "-380", "gross_profit": "+270"}'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: A SHARED SOURCE OF TRUTH */}
      <section className="py-16 border-b border-[#E4DCD3] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs uppercase font-bold tracking-wider text-[#B85F45] bg-[#F6EDE9] px-3 py-1 rounded-full">
              Single Master Record
            </span>
            <h2 className="text-3xl font-extrabold text-[#191817] tracking-tight mt-3 mb-2">
              Your business information should have a home.
            </h2>
            <p className="text-sm text-[#817B75] leading-relaxed">
              Mupezeni is designed around a central source of business information. Products, stock, sales and relevant financial records should not become independent versions of reality. Connected channels and AI workers use authorized information from the appropriate business records.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Master Product Record Visualizer (6 cols) */}
            <div className="lg:col-span-6 bg-[#F8F5F0] rounded-2xl p-6 border border-[#E4DCD3] space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#E4DCD3]">
                <div className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-[#B85F45]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#191817]">Master Product Specification</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold">
                  CENTRAL TRUTH
                </span>
              </div>

              {/* Product Selector */}
              <div className="flex gap-2 pb-2 overflow-x-auto">
                {SAMPLE_PRODUCTS.map((prod) => (
                  <button
                    key={prod.id}
                    onClick={() => setSelectedProduct(prod)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                      selectedProduct.id === prod.id
                        ? 'bg-[#B85F45] text-white'
                        : 'bg-white text-[#191817] border border-[#D9CEBF]'
                    }`}
                  >
                    {prod.name}
                  </button>
                ))}
              </div>

              {/* Master Record Details Table */}
              <div className="bg-white rounded-xl p-4 border border-[#E4DCD3] space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-[#F0EAE1]">
                  <span className="text-[#817B75]">Product Name:</span>
                  <span className="font-bold text-[#191817]">{selectedProduct.name}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#F0EAE1]">
                  <span className="text-[#817B75]">SKU Identifier:</span>
                  <span className="font-mono font-bold text-[#B85F45]">{selectedProduct.sku}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#F0EAE1]">
                  <span className="text-[#817B75]">Official Retail Price:</span>
                  <span className="font-mono font-bold text-[#191817]">K{selectedProduct.price}.00</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#F0EAE1]">
                  <span className="text-[#817B75]">Recorded Cost (COGS):</span>
                  <span className="font-mono font-semibold text-[#817B75]">K{selectedProduct.cost}.00</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#F0EAE1]">
                  <span className="text-[#817B75]">Available Stock Count:</span>
                  <span className="font-mono font-bold text-emerald-600">{selectedProduct.stock} units</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#F0EAE1]">
                  <span className="text-[#817B75]">Assigned Branch:</span>
                  <span className="font-medium text-[#191817]">{selectedProduct.branch}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#817B75]">Mapped Channels:</span>
                  <span className="font-medium text-[#191817]">{selectedProduct.channels.join(', ')}</span>
                </div>
              </div>

              <div className="text-[11px] text-[#817B75] italic">
                External platforms may experience their own synchronization delays; Mupezeni logs receipt confirmations.
              </div>
            </div>

            {/* Downstream Consumers (6 cols) */}
            <div className="lg:col-span-6 space-y-4">
              <h3 className="text-lg font-bold text-[#191817]">
                How Downstream Systems Use This Same Record:
              </h3>

              <div className="p-4 rounded-xl bg-[#F8F5F0] border border-[#E4DCD3] space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-[#191817]">
                  <Smartphone className="w-4 h-4 text-emerald-600" />
                  <span>1. WhatsApp Digital Catalog</span>
                </div>
                <p className="text-xs text-[#817B75]">
                  Fetches title, price (<span className="text-[#191817] font-semibold">K{selectedProduct.price}</span>), and availability directly from the master record. No manual re-typing into Meta Business Manager.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F8F5F0] border border-[#E4DCD3] space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-[#191817]">
                  <Bot className="w-4 h-4 text-[#B85F45]" />
                  <span>2. AI Customer Support Worker</span>
                </div>
                <p className="text-xs text-[#817B75]">
                  Queries this exact SKU before responding to customers. Informs customer that <span className="text-[#191817] font-semibold">{selectedProduct.stock} units</span> are located at <span className="text-[#191817] font-semibold">{selectedProduct.branch}</span>.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F8F5F0] border border-[#E4DCD3] space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-[#191817]">
                  <BarChart3 className="w-4 h-4 text-amber-700" />
                  <span>3. Financial Gross Margin Reporting</span>
                </div>
                <p className="text-xs text-[#817B75]">
                  Matches the sale price (K{selectedProduct.price}) against the recorded unit cost (K{selectedProduct.cost}) to compute gross margin (<span className="text-emerald-600 font-bold">K{selectedProduct.price - selectedProduct.cost}</span> / unit).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: HUMAN CONTROL */}
      <section className="py-16 bg-[#F8F5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#191817] text-white rounded-3xl p-8 sm:p-12 border border-[#312E2B]">
            <div className="max-w-3xl space-y-4 mb-8">
              <span className="text-xs uppercase font-bold tracking-wider text-[#B85F45] bg-[#2D2622] px-3 py-1 rounded-md border border-[#483B33]">
                Governance & Security
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Automation should give you more control, not less.
              </h2>
              <p className="text-sm sm:text-base text-[#D9CEBF] leading-relaxed">
                Mupezeni's AI workers operate within defined permissions. Important actions are logged in a human-readable audit trail, and workers verify results instead of assuming an action succeeded.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
              <div className="bg-[#24211E] p-4 rounded-xl border border-[#3A3632]">
                <div className="font-bold text-emerald-400 mb-1">✓ Authorized Stock Reading</div>
                <p className="text-[#817B75]">Workers can query live product counts across branches to answer customer availability questions instantly.</p>
              </div>

              <div className="bg-[#24211E] p-4 rounded-xl border border-[#3A3632]">
                <div className="font-bold text-amber-400 mb-1">! Approval for Discounts</div>
                <p className="text-[#817B75]">Workers cannot grant unauthorized discounts or price cuts without explicit store owner sign-off.</p>
              </div>

              <div className="bg-[#24211E] p-4 rounded-xl border border-[#3A3632]">
                <div className="font-bold text-white mb-1">✓ Transparent Audit Trail</div>
                <p className="text-[#817B75]">Every query made, response drafted, and catalog sync action is logged with exact timestamp and system ID.</p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#312E2B] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#817B75]">
                Ready to configure your retail workflows?
              </span>
              <button
                onClick={onOpenDemo}
                className="px-6 py-3 rounded-xl bg-[#B85F45] hover:bg-[#97442F] text-white font-bold text-sm flex items-center gap-2 shadow-sm transition-all"
              >
                <span>Book Platform Walkthrough</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
