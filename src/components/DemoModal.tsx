import React, { useState } from 'react';
import { 
  X, 
  MessageCircle, 
  Mail, 
  Calendar, 
  CheckCircle2, 
  Building2, 
  ArrowRight,
  ShieldCheck,
  Phone
} from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [businessName, setBusinessName] = useState('');
  const [contactName, setContactName] = useState('');
  const [phone, setPhone] = useState('');
  const [challenge, setChallenge] = useState('Juggling WhatsApp orders and checking stock manually');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const prefilledWhatsAppText = `Hi Mupezeni, I'd like to learn how Mupezeni could help my retail business. My business is ${businessName.trim() || '[business name]'}, and one of the main challenges we're facing is ${challenge}.`;
  const whatsAppUrl = `https://wa.me/260776091393?text=${encodeURIComponent(prefilledWhatsAppText)}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Redirect to WhatsApp with prefilled message after short delay
    setTimeout(() => {
      window.open(whatsAppUrl, '_blank');
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-[#E4DCD3] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-[#F8F5F0] border-b border-[#E4DCD3] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="MUPEZENI Logo" className="h-8 w-auto object-contain shrink-0" />
            <div>
              <h3 className="font-extrabold text-[#191817] text-lg">Let's talk about your retail business</h3>
              <p className="text-xs text-[#817B75]">See how Mupezeni connects your operations in 4–6 weeks</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#817B75] hover:text-[#191817] hover:bg-[#EDE4D9] rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-[#191817]">We're ready to chat!</h4>
              <p className="text-sm text-[#817B75] max-w-md mx-auto">
                Opening WhatsApp with your customized business notes so Ernest and the Mupezeni engineering team can review your current workflows.
              </p>
              <div className="pt-4">
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-700 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Open WhatsApp Directly</span>
                </a>
              </div>
            </div>
          ) : (
            <div>
              {/* Quick WhatsApp Banner */}
              <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <MessageCircle className="w-5 h-5 text-emerald-700 shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-emerald-900 block">Fastest Response via WhatsApp</span>
                    <span className="text-xs text-emerald-800">Direct chat with the founder & implementation team</span>
                  </div>
                </div>
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 whitespace-nowrap transition-colors"
                >
                  <span>Chat on WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Booking Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#191817] mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Chileshe Mulenga"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-[#D9CEBF] focus:outline-[#B85F45] bg-[#F8F5F0]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#191817] mb-1">
                      Business Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Lusaka Modern Boutique"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-[#D9CEBF] focus:outline-[#B85F45] bg-[#F8F5F0]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#191817] mb-1">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+260 97* *** ***"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-[#D9CEBF] focus:outline-[#B85F45] bg-[#F8F5F0]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#191817] mb-1">
                      Primary Operational Challenge
                    </label>
                    <select
                      value={challenge}
                      onChange={(e) => setChallenge(e.target.value)}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-[#D9CEBF] focus:outline-[#B85F45] bg-[#F8F5F0]"
                    >
                      <option value="Juggling WhatsApp orders and checking stock manually">
                        Juggling WhatsApp orders & checking stock manually
                      </option>
                      <option value="Product availability and prices out of sync across channels">
                        Prices & availability out of sync across channels
                      </option>
                      <option value="Time lost on repetitive customer enquiries">
                        Time lost on repetitive customer enquiries
                      </option>
                      <option value="Sales records and finances scattered in notebooks">
                        Sales and finances scattered in notebooks
                      </option>
                      <option value="Owner is trapped managing every operational detail">
                        Owner trapped managing every operational detail
                      </option>
                    </select>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-[#B85F45] hover:bg-[#97442F] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
                  >
                    <span>Schedule Retail Operational Review</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>

              {/* Commercial Terms Clarification */}
              <div className="mt-4 pt-4 border-t border-[#F0EAE1] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#817B75] gap-2">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>K1,000/mo • First payment due at launch • 30-day guarantee</span>
                </span>
                <a href="mailto:hello.mupezeni@gmail.com" className="hover:text-[#B85F45] underline">
                  Or email hello.mupezeni@gmail.com
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
