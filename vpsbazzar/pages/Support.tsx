
import React from 'react';
import { siteConfig } from '../siteConfig';

export const Support: React.FC = () => {
  return (
    <div className="bg-slate-50 dark:bg-[#050505] min-h-screen py-16 text-slate-900 dark:text-slate-200 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl lg:text-7xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter transition-colors">Get <span className="text-[#C0392B]">Sync.</span></h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium transition-colors">Direct access to our senior hardware engineers 24/7.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 space-y-10">
            <div>
              <h3 className="text-xl font-black text-slate-900 dark:text-white mb-8 tracking-tight transition-colors">Direct Channels</h3>
              <div className="space-y-6">
                {[
                  { icon: '✉️', label: 'Engineering Support', value: siteConfig.supportEmail },
                  { icon: '📞', label: '24/7 Direct Line', value: siteConfig.phoneNumber },
                  { icon: '📍', label: 'Global HQ', value: siteConfig.address },
                ].map((item, i) => (
                  <div key={i} className="flex items-start group">
                    <div className="w-12 h-12 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white rounded-xl flex items-center justify-center mr-5 shrink-0 group-hover:border-[#C0392B] transition-all shadow-sm">
                      <span className="text-xl">{item.icon}</span>
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-0.5">{item.label}</p>
                      <p className="text-slate-700 dark:text-slate-300 font-bold leading-relaxed text-sm transition-colors">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="p-8 bg-[#C0392B]/5 dark:bg-[#C0392B]/10 border border-[#C0392B]/10 dark:border-[#C0392B]/20 rounded-[2.5rem] transition-colors">
              <h4 className="text-lg font-black text-[#C0392B] mb-3">Priority Box</h4>
              <p className="text-slate-600 dark:text-slate-400 text-xs mb-6 font-medium leading-relaxed transition-colors">Standard response time for technical tickets is currently &lt; 15 minutes.</p>
              <button className="w-full py-4 bg-[#C0392B] text-white font-black rounded-xl text-sm transition-all hover:brightness-110 shadow-lg shadow-red-900/20">Open Dashboard Ticket</button>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="bg-white dark:bg-[#0a0a0b] p-10 rounded-[3rem] border border-slate-200 dark:border-white/5 shadow-2xl transition-all">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Identity</label>
                    <input 
                      type="text" 
                      className="w-full px-5 py-3.5 rounded-xl bg-slate-50 dark:bg-black border border-slate-200 dark:border-white/5 focus:border-[#C0392B] text-slate-900 dark:text-white outline-none transition-all font-bold text-sm" 
                      placeholder="Your Name" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Email Endpoint</label>
                    <input 
                      type="email" 
                      className="w-full px-5 py-3.5 rounded-xl bg-slate-50 dark:bg-black border border-slate-200 dark:border-white/5 focus:border-[#C0392B] text-slate-900 dark:text-white outline-none transition-all font-bold text-sm" 
                      placeholder="name@company.com" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Query Type</label>
                  <select className="w-full px-5 py-3.5 rounded-xl bg-slate-50 dark:bg-black border border-slate-200 dark:border-white/5 focus:border-[#C0392B] text-slate-900 dark:text-white outline-none transition-all font-bold appearance-none cursor-pointer text-sm">
                    <option>Technical Support</option>
                    <option>Enterprise Sales</option>
                    <option>Billing Inquiry</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Transmission Details</label>
                  <textarea 
                    rows={4} 
                    className="w-full px-5 py-3.5 rounded-xl bg-slate-50 dark:bg-black border border-slate-200 dark:border-white/5 focus:border-[#C0392B] text-slate-900 dark:text-white outline-none transition-all font-bold text-sm" 
                    placeholder="Provide full technical details for faster resolution..."
                  ></textarea>
                </div>
                <button type="submit" className="w-full bg-[#C0392B] dark:bg-white text-white dark:text-black font-black py-5 rounded-xl hover:brightness-110 dark:hover:bg-[#C0392B] dark:hover:text-white transition-all transform hover:scale-[1.01] text-base shadow-xl shadow-red-900/20">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
