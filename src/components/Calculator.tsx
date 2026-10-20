import React, { useState } from 'react';
import { CalculatorState } from '../types';
import { 
  Calculator as CalcIcon, 
  Clock, 
  RotateCcw, 
  Sparkles, 
  MessageCircle, 
  Calendar, 
  Coins, 
  CheckCircle2, 
  AlertCircle,
  HelpCircle,
  ArrowRight
} from 'lucide-react';

interface CalculatorProps {
  onOpenDemo: () => void;
}

export const Calculator: React.FC<CalculatorProps> = ({ onOpenDemo }) => {
  const [activeTab, setActiveTab] = useState<'time' | 'whatsapp'>('time');

  // Default values matching the exact example from the redesign strategy
  const defaultState: CalculatorState = {
    dailyWhatsAppOrders: 20,
    minutesPerOrder: 4,
    dailyEnquiries: 30,
    minutesPerEnquiry: 2,
    weeklyCatalogHours: 5,
    weeklyReconciliationHours: 4,
    operatingDaysPerWeek: 6,
    whatsAppOrdersPerWeek: 40,
    averageOrderValueKwacha: 250,
    orderCompletionRatePercent: 70,
    unconvertedEnquiriesWeekly: 35,
  };

  const [state, setState] = useState<CalculatorState>(defaultState);

  // Math computations
  const weeklyOrderProcessingHours = (state.dailyWhatsAppOrders * state.minutesPerOrder * state.operatingDaysPerWeek) / 60;
  const weeklyEnquiryHours = (state.dailyEnquiries * state.minutesPerEnquiry * state.operatingDaysPerWeek) / 60;
  const weeklyCatalogHours = state.weeklyCatalogHours;
  const weeklyReconciliationHours = state.weeklyReconciliationHours;

  const totalWeeklyHours = weeklyOrderProcessingHours + weeklyEnquiryHours + weeklyCatalogHours + weeklyReconciliationHours;
  const averageMonthlyHours = totalWeeklyHours * 4.33; // 4.33 weeks per month standard
  const equivalentWorkingDays = averageMonthlyHours / 8; // 8-hour working days

  // Illustrative connected automation scenario (e.g. 50% & 75% reduction in repetitive manual tasks)
  const conservativeSavedHoursMonthly = averageMonthlyHours * 0.5;
  const optimizedSavedHoursMonthly = averageMonthlyHours * 0.7;

  // WhatsApp panel computations
  const estimatedWeeklyOrderValue = state.whatsAppOrdersPerWeek * state.averageOrderValueKwacha;
  const estimatedMonthlyOrderValue = estimatedWeeklyOrderValue * 4.33;
  const completedWeeklyOrders = Math.round((state.whatsAppOrdersPerWeek * state.orderCompletionRatePercent) / 100);
  const estimatedCompletedWeeklyValue = completedWeeklyOrders * state.averageOrderValueKwacha;

  const resetToExample = () => {
    setState(defaultState);
  };

  return (
    <div id="calculator-section" className="bg-[#F8F5F0] py-16 px-4 sm:px-6 lg:px-8 border-y border-[#E4DCD3]">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading & Copy */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDE4D9] text-[#B85F45] text-xs font-semibold uppercase tracking-wider mb-3">
            <CalcIcon className="w-3.5 h-3.5" />
            <span>Interactive Operational Calculator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#191817] tracking-tight mb-4">
            How much of your week goes into keeping everything connected?
          </h2>
          <p className="text-base sm:text-lg text-[#817B75] leading-relaxed">
            Count the work your business already does. Estimate the time spent handling orders, checking inventory, updating catalogs, recording sales and answering repetitive customer questions. Then see what those tasks add up to over a month.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 bg-[#EDE4D9]/80 rounded-xl border border-[#D9CEBF]">
            <button
              onClick={() => setActiveTab('time')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                activeTab === 'time'
                  ? 'bg-white text-[#191817] shadow-sm'
                  : 'text-[#817B75] hover:text-[#191817]'
              }`}
            >
              <Clock className="w-4 h-4 text-[#B85F45]" />
              <span>1. Manual Operations Time Calculator</span>
            </button>
            <button
              onClick={() => setActiveTab('whatsapp')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                activeTab === 'whatsapp'
                  ? 'bg-white text-[#191817] shadow-sm'
                  : 'text-[#817B75] hover:text-[#191817]'
              }`}
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>2. WhatsApp Order Volume Panel</span>
            </button>
          </div>
        </div>

        {activeTab === 'time' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Input Controls Column (7 cols) */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-[#E4DCD3] shadow-xs">
              <div className="flex items-center justify-between pb-5 mb-6 border-b border-[#F0EAE1]">
                <div>
                  <h3 className="text-lg font-bold text-[#191817]">Your Business Activity Inputs</h3>
                  <p className="text-xs text-[#817B75]">Adjust the sliders or enter figures that describe your weekly routine</p>
                </div>
                <button
                  onClick={resetToExample}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#B85F45] hover:text-[#97442F] bg-[#F6EDE9] px-2.5 py-1.5 rounded-md transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Load Sample Preset</span>
                </button>
              </div>

              <div className="space-y-6">
                {/* 1. Daily WhatsApp / Social Orders */}
                <div>
                  <div className="flex justify-between items-center text-sm mb-2">
                    <label className="font-semibold text-[#191817] flex items-center gap-1.5">
                      <span>WhatsApp & social orders handled daily</span>
                    </label>
                    <span className="font-mono font-bold text-[#B85F45] bg-[#F6EDE9] px-2 py-0.5 rounded text-sm">
                      {state.dailyWhatsAppOrders} orders / day
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    step="1"
                    value={state.dailyWhatsAppOrders}
                    onChange={(e) => setState({ ...state, dailyWhatsAppOrders: Number(e.target.value) })}
                    className="w-full accent-[#B85F45] h-2 bg-[#EDE4D9] rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-[#817B75] mt-1">
                    <span>1 order</span>
                    <span>50 orders</span>
                    <span>100+ orders</span>
                  </div>
                </div>

                {/* 2. Minutes spent per order */}
                <div>
                  <div className="flex justify-between items-center text-sm mb-2">
                    <label className="font-semibold text-[#191817]">
                      Average minutes spent processing each order
                    </label>
                    <span className="font-mono font-bold text-[#191817] bg-[#EDE4D9] px-2 py-0.5 rounded text-sm">
                      {state.minutesPerOrder} minutes
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="15"
                    step="1"
                    value={state.minutesPerOrder}
                    onChange={(e) => setState({ ...state, minutesPerOrder: Number(e.target.value) })}
                    className="w-full accent-[#B85F45] h-2 bg-[#EDE4D9] rounded-lg cursor-pointer"
                  />
                  <p className="text-[11px] text-[#817B75] mt-1">Checking stock, typing account/momo details, verifying proof of payment, writing receipt</p>
                </div>

                {/* 3. Customer enquiries answered daily */}
                <div>
                  <div className="flex justify-between items-center text-sm mb-2">
                    <label className="font-semibold text-[#191817]">
                      Customer enquiries answered daily
                    </label>
                    <span className="font-mono font-bold text-[#B85F45] bg-[#F6EDE9] px-2 py-0.5 rounded text-sm">
                      {state.dailyEnquiries} enquiries / day
                    </span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="150"
                    step="5"
                    value={state.dailyEnquiries}
                    onChange={(e) => setState({ ...state, dailyEnquiries: Number(e.target.value) })}
                    className="w-full accent-[#B85F45] h-2 bg-[#EDE4D9] rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-[#817B75] mt-1">
                    <span>5 enquiries</span>
                    <span>75 enquiries</span>
                    <span>150+ enquiries</span>
                  </div>
                </div>

                {/* 4. Minutes per enquiry */}
                <div>
                  <div className="flex justify-between items-center text-sm mb-2">
                    <label className="font-semibold text-[#191817]">
                      Average minutes per enquiry
                    </label>
                    <span className="font-mono font-bold text-[#191817] bg-[#EDE4D9] px-2 py-0.5 rounded text-sm">
                      {state.minutesPerEnquiry} minutes
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    step="0.5"
                    value={state.minutesPerEnquiry}
                    onChange={(e) => setState({ ...state, minutesPerEnquiry: Number(e.target.value) })}
                    className="w-full accent-[#B85F45] h-2 bg-[#EDE4D9] rounded-lg cursor-pointer"
                  />
                  <p className="text-[11px] text-[#817B75] mt-1">Asking what sizes remain, confirming branch locations, repeating prices</p>
                </div>

                {/* 5. Weekly catalog & stock update hours */}
                <div>
                  <div className="flex justify-between items-center text-sm mb-2">
                    <label className="font-semibold text-[#191817]">
                      Hours spent updating products and stock each week
                    </label>
                    <span className="font-mono font-bold text-[#B85F45] bg-[#F6EDE9] px-2 py-0.5 rounded text-sm">
                      {state.weeklyCatalogHours} hours / week
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="20"
                    step="1"
                    value={state.weeklyCatalogHours}
                    onChange={(e) => setState({ ...state, weeklyCatalogHours: Number(e.target.value) })}
                    className="w-full accent-[#B85F45] h-2 bg-[#EDE4D9] rounded-lg cursor-pointer"
                  />
                  <p className="text-[11px] text-[#817B75] mt-1">Typing prices into spreadsheets, updating catalog pictures, cross-referencing branches</p>
                </div>

                {/* 6. Weekly reconciliation hours */}
                <div>
                  <div className="flex justify-between items-center text-sm mb-2">
                    <label className="font-semibold text-[#191817]">
                      Hours spent reconciling sales and finances each week
                    </label>
                    <span className="font-mono font-bold text-[#B85F45] bg-[#F6EDE9] px-2 py-0.5 rounded text-sm">
                      {state.weeklyReconciliationHours} hours / week
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="20"
                    step="1"
                    value={state.weeklyReconciliationHours}
                    onChange={(e) => setState({ ...state, weeklyReconciliationHours: Number(e.target.value) })}
                    className="w-full accent-[#B85F45] h-2 bg-[#EDE4D9] rounded-lg cursor-pointer"
                  />
                  <p className="text-[11px] text-[#817B75] mt-1">Comparing mobile money SMS statements against notebooks, counting cash, totaling revenue</p>
                </div>

                {/* 7. Days operating */}
                <div>
                  <div className="flex justify-between items-center text-sm mb-2">
                    <label className="font-semibold text-[#191817]">
                      Days the business operates each week
                    </label>
                    <span className="font-mono font-bold text-[#191817] bg-[#EDE4D9] px-2 py-0.5 rounded text-sm">
                      {state.operatingDaysPerWeek} days / week
                    </span>
                  </div>
                  <div className="grid grid-cols-7 gap-1.5">
                    {[1, 2, 3, 4, 5, 6, 7].map((days) => (
                      <button
                        key={days}
                        type="button"
                        onClick={() => setState({ ...state, operatingDaysPerWeek: days })}
                        className={`py-1.5 text-xs font-semibold rounded-md border transition-all ${
                          state.operatingDaysPerWeek === days
                            ? 'bg-[#B85F45] text-white border-[#B85F45]'
                            : 'bg-[#F8F5F0] text-[#191817] border-[#D9CEBF] hover:border-[#B85F45]'
                        }`}
                      >
                        {days} {days === 1 ? 'day' : 'days'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Results Column (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#191817] text-white rounded-2xl p-6 sm:p-7 shadow-lg border border-[#312E2B]">
                <div className="flex items-center justify-between pb-4 border-b border-[#2C2926] mb-5">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-[#B85F45]" />
                    <h3 className="font-bold text-white text-base">Estimated Operational Time</h3>
                  </div>
                  <span className="text-[11px] font-mono text-[#D9CEBF] bg-[#2C2926] px-2 py-0.5 rounded">
                    4.33 wks/mo basis
                  </span>
                </div>

                {/* Big Metric Display */}
                <div className="space-y-4 mb-6">
                  <div className="bg-[#24211E] rounded-xl p-4 border border-[#3A3632]">
                    <div className="text-xs uppercase font-semibold text-[#817B75] mb-1">
                      Time spent keeping operations connected weekly
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="font-mono text-3xl sm:text-4xl font-extrabold text-[#B85F45]">
                        {totalWeeklyHours.toFixed(1)}
                      </span>
                      <span className="text-sm font-semibold text-[#EDE4D9]">hours / week</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-[#24211E] rounded-xl p-3.5 border border-[#3A3632]">
                      <div className="text-[11px] uppercase font-semibold text-[#817B75] mb-0.5">
                        Over an average month
                      </div>
                      <div className="font-mono text-2xl font-bold text-white">
                        {averageMonthlyHours.toFixed(1)}
                        <span className="text-xs font-normal text-[#D9CEBF] ml-1">hrs</span>
                      </div>
                    </div>

                    <div className="bg-[#24211E] rounded-xl p-3.5 border border-[#3A3632]">
                      <div className="text-[11px] uppercase font-semibold text-[#817B75] mb-0.5">
                        Equivalent 8-hour days
                      </div>
                      <div className="font-mono text-2xl font-bold text-amber-400">
                        {equivalentWorkingDays.toFixed(1)}
                        <span className="text-xs font-normal text-[#D9CEBF] ml-1">days</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Breakdown by Activity Table */}
                <div className="space-y-2 mb-6 text-xs border-t border-[#2C2926] pt-4">
                  <div className="text-[11px] font-semibold text-[#817B75] uppercase tracking-wider mb-2">
                    Estimated Weekly Breakdown
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-[#2A2724]">
                    <span className="text-[#D9CEBF]">Processing customer orders:</span>
                    <span className="font-mono font-semibold text-white">{weeklyOrderProcessingHours.toFixed(1)} hrs</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-[#2A2724]">
                    <span className="text-[#D9CEBF]">Answering repetitive enquiries:</span>
                    <span className="font-mono font-semibold text-white">{weeklyEnquiryHours.toFixed(1)} hrs</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-[#2A2724]">
                    <span className="text-[#D9CEBF]">Updating products & stock:</span>
                    <span className="font-mono font-semibold text-white">{weeklyCatalogHours.toFixed(1)} hrs</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-[#2A2724]">
                    <span className="text-[#D9CEBF]">Reconciling sales & finances:</span>
                    <span className="font-mono font-semibold text-white">{weeklyReconciliationHours.toFixed(1)} hrs</span>
                  </div>
                </div>

                {/* Illustrative Automation Scenario Notice */}
                <div className="p-3.5 rounded-xl bg-[#2D2622] border border-[#483B33] mb-5 text-xs text-[#D9CEBF] space-y-1">
                  <div className="flex items-center gap-1.5 font-semibold text-[#B85F45]">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Illustrative Potential Scenarios</span>
                  </div>
                  <p className="text-[11px] text-[#A89F95] leading-relaxed">
                    Under connected workflows, routine stock lookups and manual catalog updates are automated. At 50% to 70% repetitive task reduction, that represents an illustrative <strong className="text-white">{conservativeSavedHoursMonthly.toFixed(0)} to {optimizedSavedHoursMonthly.toFixed(0)} hours recovered per month</strong>.
                  </p>
                </div>

                {/* CTA Button */}
                <button
                  onClick={onOpenDemo}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#B85F45] hover:bg-[#97442F] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <span>Your numbers tell a story. Let's find out what can be connected</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Integrity Disclaimer */}
              <div className="p-4 rounded-xl bg-[#EDE4D9]/60 border border-[#D9CEBF] text-xs text-[#817B75] flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-[#B85F45] shrink-0 mt-0.5" />
                <p>
                  <strong>Our Rule on Numbers:</strong> This calculator provides an arithmetic illustration based strictly on your own inputs. It is <em>not</em> an invented industry statistic about the average Zambian retailer or a guaranteed outcome before implementation.
                </p>
              </div>
            </div>
          </div>
        ) : (
          /* WhatsApp Business Volume Panel */
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E4DCD3] shadow-xs">
            <div className="max-w-3xl mb-8">
              <span className="text-xs uppercase font-bold tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                WhatsApp Business Reality
              </span>
              <h3 className="text-2xl font-extrabold text-[#191817] mt-2 mb-2">
                How much of your business comes through WhatsApp?
              </h3>
              <p className="text-sm text-[#817B75] leading-relaxed">
                Enter your typical WhatsApp weekly numbers. This measures the scale of order activity flowing through your chat channels, establishing where disconnected tools risk creating friction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {/* Inputs */}
              <div className="space-y-6 bg-[#F8F5F0] p-6 rounded-xl border border-[#E4DCD3]">
                {/* 1. Orders per week */}
                <div>
                  <div className="flex justify-between items-center text-sm mb-2">
                    <label className="font-semibold text-[#191817]">
                      WhatsApp orders per week
                    </label>
                    <span className="font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded text-sm">
                      {state.whatsAppOrdersPerWeek} orders
                    </span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="200"
                    step="5"
                    value={state.whatsAppOrdersPerWeek}
                    onChange={(e) => setState({ ...state, whatsAppOrdersPerWeek: Number(e.target.value) })}
                    className="w-full accent-emerald-600 h-2 bg-[#EDE4D9] rounded-lg cursor-pointer"
                  />
                </div>

                {/* 2. Average order value in Kwacha */}
                <div>
                  <div className="flex justify-between items-center text-sm mb-2">
                    <label className="font-semibold text-[#191817]">
                      Average order value (ZMW Kwacha)
                    </label>
                    <div className="flex items-center gap-1 font-mono font-bold text-[#191817]">
                      <span>K</span>
                      <input
                        type="number"
                        min="20"
                        max="5000"
                        step="10"
                        value={state.averageOrderValueKwacha}
                        onChange={(e) => setState({ ...state, averageOrderValueKwacha: Math.max(1, Number(e.target.value)) })}
                        className="w-24 px-2 py-1 rounded border border-[#D9CEBF] bg-white text-right font-bold text-sm focus:outline-[#B85F45]"
                      />
                    </div>
                  </div>
                  <p className="text-[11px] text-[#817B75]">Typical basket size for an order (e.g. K250 for apparel or footwear)</p>
                </div>

                {/* 3. Completion rate */}
                <div>
                  <div className="flex justify-between items-center text-sm mb-2">
                    <label className="font-semibold text-[#191817]">
                      Percentage of those orders completed
                    </label>
                    <span className="font-mono font-bold text-[#191817] bg-[#EDE4D9] px-2 py-0.5 rounded text-sm">
                      {state.orderCompletionRatePercent}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="100"
                    step="5"
                    value={state.orderCompletionRatePercent}
                    onChange={(e) => setState({ ...state, orderCompletionRatePercent: Number(e.target.value) })}
                    className="w-full accent-[#B85F45] h-2 bg-[#EDE4D9] rounded-lg cursor-pointer"
                  />
                  <p className="text-[11px] text-[#817B75]">Customers who finalize payment vs drop off while waiting for account confirmation</p>
                </div>

                {/* 4. Unconverted enquiries */}
                <div>
                  <div className="flex justify-between items-center text-sm mb-2">
                    <label className="font-semibold text-[#191817]">
                      Enquiries that never become orders weekly (estimate)
                    </label>
                    <span className="font-mono font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded text-sm">
                      {state.unconvertedEnquiriesWeekly} enquiries
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="200"
                    step="5"
                    value={state.unconvertedEnquiriesWeekly}
                    onChange={(e) => setState({ ...state, unconvertedEnquiriesWeekly: Number(e.target.value) })}
                    className="w-full accent-amber-600 h-2 bg-[#EDE4D9] rounded-lg cursor-pointer"
                  />
                </div>
              </div>

              {/* WhatsApp Value Results */}
              <div className="space-y-6">
                <div className="bg-[#191817] text-white p-6 rounded-2xl border border-[#312E2B]">
                  <div className="text-xs uppercase font-semibold text-[#817B75] mb-1">
                    Estimated Weekly Order Value Through Chat
                  </div>
                  <div className="font-mono text-3xl sm:text-4xl font-extrabold text-emerald-400 mb-2">
                    K{estimatedWeeklyOrderValue.toLocaleString()}
                  </div>
                  <p className="text-xs text-[#D9CEBF] mb-6">
                    Based on {state.whatsAppOrdersPerWeek} orders per week at an average basket of K{state.averageOrderValueKwacha}.
                  </p>

                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#2C2926] text-xs">
                    <div className="bg-[#24211E] p-3 rounded-xl border border-[#3A3632]">
                      <div className="text-[11px] text-[#817B75] uppercase">Monthly Order Volume</div>
                      <div className="font-mono font-bold text-xl text-white mt-0.5">
                        K{Math.round(estimatedMonthlyOrderValue).toLocaleString()}
                      </div>
                    </div>
                    <div className="bg-[#24211E] p-3 rounded-xl border border-[#3A3632]">
                      <div className="text-[11px] text-[#817B75] uppercase">Completed Volume</div>
                      <div className="font-mono font-bold text-xl text-emerald-400 mt-0.5">
                        K{Math.round(estimatedCompletedWeeklyValue * 4.33).toLocaleString()}
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 p-3 rounded-lg bg-[#272320] border border-[#3D3733] text-[11px] text-[#A89F95] leading-relaxed">
                    <strong className="text-[#EDE4D9]">Strict Disclaimer:</strong> That is <span className="text-white underline">order value, not profit</span>, and it is not presented as revenue generated by Mupezeni. We do not claim that Mupezeni will recover lost orders or guarantee an increase until verified evidence from your live implementation is recorded.
                  </div>

                  <button
                    onClick={onOpenDemo}
                    className="w-full mt-6 py-3 px-4 rounded-xl bg-[#B85F45] hover:bg-[#97442F] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
                  >
                    <span>Discuss Your WhatsApp Retail Workflows</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
