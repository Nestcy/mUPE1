import React, { useState } from 'react';
import { PageType } from '../types';
import { 
  MessageCircle, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck 
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageType) => void;
  onOpenDemo: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, onOpenDemo }) => {
  const [businessName, setBusinessName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [challenge, setChallenge] = useState('Stock counts in spreadsheets out of sync with WhatsApp sales');
  const [submitted, setSubmitted] = useState(false);

  const prefilledWhatsApp = `Hi Mupezeni, I'd like to learn how Mupezeni could help my retail business. My business is ${businessName.trim() || '[business name]'}, and one of the main challenges we're facing is ${challenge}.`;
  const whatsAppUrl = `https://wa.me/260776091393?text=${encodeURIComponent(prefilledWhatsApp)}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      window.open(whatsAppUrl, '_blank');
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#F8F5F0]">
      {/* Contact Hero */}
      <section className="pt-14 pb-16 border-b border-[#E4DCD3] bg-[#F8F5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase font-bold tracking-wider text-[#B85F45] bg-[#EDE4D9] px-3 py-1 rounded-full">
              Contact Mupezeni
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#191817] tracking-tight">
              Let's talk about your retail business.
            </h1>
            <p className="text-base sm:text-lg text-[#817B75] leading-relaxed">
              Tell us how your business manages sales, inventory, customer conversations and digital channels. We'll discuss your current workflows, identify where disconnected systems create unnecessary work and explain how Mupezeni may fit into your operations.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 bg-white border-b border-[#E4DCD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Direct Channels (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* WhatsApp Card */}
              <div className="bg-[#F8F5F0] p-6 rounded-2xl border border-[#E4DCD3] space-y-3">
                <div className="flex items-center gap-2.5 text-emerald-700">
                  <MessageCircle className="w-6 h-6" />
                  <h3 className="font-bold text-lg text-[#191817]">Prefer WhatsApp?</h3>
                </div>
                <p className="text-xs text-[#817B75] leading-relaxed">
                  Start a conversation directly with the Mupezeni engineering and implementation team on WhatsApp.
                </p>
                <div className="font-mono font-bold text-sm text-[#191817]">
                  +260 776 091 393
                </div>
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat With Us on WhatsApp</span>
                </a>
              </div>

              {/* Email Card */}
              <div className="bg-[#F8F5F0] p-6 rounded-2xl border border-[#E4DCD3] space-y-3">
                <div className="flex items-center gap-2.5 text-[#B85F45]">
                  <Mail className="w-6 h-6" />
                  <h3 className="font-bold text-lg text-[#191817]">Prefer email?</h3>
                </div>
                <p className="text-xs text-[#817B75] leading-relaxed">
                  Send us a message describing your business, branches, and what you'd like to improve.
                </p>
                <div className="font-mono font-bold text-sm text-[#191817]">
                  hello.mupezeni@gmail.com
                </div>
                <a
                  href="mailto:hello.mupezeni@gmail.com"
                  className="w-full mt-2 py-3 px-4 rounded-xl bg-[#191817] hover:bg-[#312E2B] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#B85F45]" />
                  <span>Email Mupezeni</span>
                </a>
              </div>

              {/* What Happens Next Card */}
              <div className="bg-[#EDE4D9]/40 p-6 rounded-2xl border border-[#D9CEBF] space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#191817]">
                  What happens next?
                </h4>
                <ol className="text-xs text-[#817B75] space-y-2.5">
                  <li className="flex items-start gap-2">
                    <span className="font-mono font-bold text-[#B85F45] bg-white px-1.5 py-0.5 rounded border border-[#D9CEBF]">1</span>
                    <span>We learn about your business, current software, and sales channels.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-mono font-bold text-[#B85F45] bg-white px-1.5 py-0.5 rounded border border-[#D9CEBF]">2</span>
                    <span>We discuss relevant Mupezeni capabilities and integration requirements.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-mono font-bold text-[#B85F45] bg-white px-1.5 py-0.5 rounded border border-[#D9CEBF]">3</span>
                    <span>If there is a fit, we explain the 4–6 week implementation plan and commercial terms (K2,000/mo, paid at launch).</span>
                  </li>
                </ol>
              </div>
            </div>

            {/* Direct Form Box (7 cols) */}
            <div className="lg:col-span-7 bg-[#F8F5F0] rounded-2xl p-6 sm:p-8 border border-[#E4DCD3]">
              <h3 className="text-xl font-bold text-[#191817] mb-1">
                Tell Us About Your Operations
              </h3>
              <p className="text-xs text-[#817B75] mb-6">
                Fill in these details and we'll immediately prepare your operational assessment.
              </p>

              {submitted ? (
                <div className="p-8 text-center bg-white rounded-xl border border-[#E4DCD3] space-y-3">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-lg text-[#191817]">Thank you!</h4>
                  <p className="text-xs text-[#817B75] max-w-sm mx-auto">
                    Opening WhatsApp with your customized message so we can connect directly.
                  </p>
                  <a
                    href={whatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 underline"
                  >
                    Click here if WhatsApp didn't open automatically
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#191817] mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Mwamba Bwalya"
                        value={ownerName}
                        onChange={(e) => setOwnerName(e.target.value)}
                        className="w-full px-3 py-2 text-sm rounded-lg border border-[#D9CEBF] bg-white focus:outline-[#B85F45]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#191817] mb-1">
                        Retail Business Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Lusaka Trend Boutique"
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        className="w-full px-3 py-2 text-sm rounded-lg border border-[#D9CEBF] bg-white focus:outline-[#B85F45]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#191817] mb-1">
                        WhatsApp / Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+260 97* *** ***"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3 py-2 text-sm rounded-lg border border-[#D9CEBF] bg-white focus:outline-[#B85F45]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#191817] mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="owner@yourstore.co.zm"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 text-sm rounded-lg border border-[#D9CEBF] bg-white focus:outline-[#B85F45]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#191817] mb-1">
                      Main Challenge in Your Business
                    </label>
                    <textarea
                      rows={3}
                      value={challenge}
                      onChange={(e) => setChallenge(e.target.value)}
                      placeholder="e.g. How we manage orders on WhatsApp, checking stock in notebooks, or keeping prices synced..."
                      className="w-full px-3 py-2 text-sm rounded-lg border border-[#D9CEBF] bg-white focus:outline-[#B85F45]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-[#B85F45] hover:bg-[#97442F] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-xs transition-colors"
                    >
                      <span>Send Operational Inquiry</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center gap-2 text-[11px] text-[#817B75] pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>No upfront fee. K2,000/month only due when Mupezeni launches live for you.</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
