
import React, { useState } from 'react';
import { siteConfig } from '../siteConfig';
import { VPSPlan } from '../types';
import { navigate } from '../App';

export const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans: VPSPlan[] = [
    {
      id: 'entry',
      name: 'Lite Node',
      price: 499,
      cpu: '1 vCPU Core',
      ram: '2 GB DDR4',
      storage: '40 GB NVMe',
      bandwidth: '1 TB Traffic',
    },
    {
      id: 'business',
      name: 'Business Elite',
      price: 999,
      cpu: '2 vCPU Cores',
      ram: '4 GB DDR4',
      storage: '80 GB NVMe',
      bandwidth: '3 TB Traffic',
      popular: true,
    },
    {
      id: 'cluster',
      name: 'Cloud Cluster',
      price: 1999,
      cpu: '4 vCPU Cores',
      ram: '8 GB DDR4',
      storage: '160 GB NVMe',
      bandwidth: '5 TB Traffic',
    },
  ];

  const calculateDisplayPrice = (basePrice: number) => {
    if (billingCycle === 'yearly') {
      return Math.floor(basePrice * 0.8);
    }
    return basePrice;
  };

  return (
    <div className="py-16 bg-slate-50 dark:bg-[#050505] min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 animate-reveal">
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter">Bazaar <span className="text-[#C0392B]">Tiers.</span></h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium transition-colors">Enterprise grade hardware, entry level pricing. No contracts, cancel anytime.</p>
          
          <div className="mt-10 inline-flex items-center bg-white dark:bg-white/5 p-1.5 rounded-2xl border border-slate-200 dark:border-white/10 relative overflow-hidden shadow-sm">
            <button 
              onClick={() => setBillingCycle('monthly')}
              className={`relative z-10 px-8 py-3 font-black text-sm rounded-xl transition-all duration-300 ${billingCycle === 'monthly' ? 'text-white' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'}`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setBillingCycle('yearly')}
              className={`relative z-10 px-8 py-3 font-black text-sm rounded-xl transition-all duration-300 ${billingCycle === 'yearly' ? 'text-white' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'}`}
            >
              Yearly <span className="text-[10px] ml-1 opacity-80">(-20%)</span>
            </button>
            <div 
              className={`absolute top-1.5 bottom-1.5 bg-[#C0392B] rounded-xl transition-all duration-300 ease-out`}
              style={{ 
                left: billingCycle === 'monthly' ? '6px' : 'calc(50% + 3px)',
                width: 'calc(50% - 9px)'
              }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`group relative flex flex-col bg-white dark:bg-[#0a0a0b] rounded-[2.5rem] p-2 transition-all duration-500 border border-slate-200 dark:border-white/5 shadow-xl shadow-slate-200/50 dark:shadow-none ${
                plan.popular ? 'pulse-glow dark:pulse-glow border-red-500/20 dark:border-red-900/40 scale-105 z-10' : 'hover:border-slate-300 dark:hover:border-white/20'
              }`}
            >
              <div className="flex-grow p-8">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-xl font-black text-slate-900 dark:text-white mb-1 tracking-tight transition-colors">{plan.name}</h3>
                    {plan.popular && <span className="text-[9px] font-black uppercase tracking-[0.2em] text-red-500 bg-red-500/10 px-3 py-1 rounded-full">Top Choice</span>}
                  </div>
                </div>
                
                <div className="flex flex-col mb-10">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-black text-slate-900 dark:text-white tracking-tighter transition-all duration-300">
                      {siteConfig.currencySymbol}{calculateDisplayPrice(plan.price)}
                    </span>
                    <span className="text-slate-400 dark:text-slate-500 font-bold ml-1.5 text-sm">/mo</span>
                  </div>
                  {billingCycle === 'yearly' && (
                    <span className="text-[10px] font-bold text-[#C0392B] uppercase tracking-widest mt-1.5">
                      Billed {siteConfig.currencySymbol}{calculateDisplayPrice(plan.price) * 12} annually
                    </span>
                  )}
                </div>

                <div className="space-y-4 mb-10 text-slate-600 dark:text-slate-400 font-semibold transition-colors text-sm">
                  {[plan.cpu, plan.ram, plan.storage, plan.bandwidth, 'Dedicated IP', 'Global Anycast DNS'].map((feat, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-4 h-4 bg-red-600/10 text-red-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={(e) => navigate('#/register', e)}
                  className={`block w-full text-center py-4 px-8 rounded-xl font-black text-base transition-all duration-300 ${
                    plan.popular ? 'bg-[#C0392B] text-white hover:bg-slate-900 dark:bg-white dark:text-black dark:hover:bg-[#C0392B] dark:hover:text-white shadow-xl shadow-red-900/20' : 'bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-white/5 dark:text-white dark:hover:bg-white/10'
                  }`}
                >
                  Configure Node
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 pt-12 border-t border-slate-200 dark:border-white/5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { t: 'SSD Performance', d: 'Enterprise Samsung/Intel NVMe arrays.', i: '💾' },
              { t: '10Gbps Uplinks', d: 'Carrier-neutral network partners.', i: '📡' },
              { t: 'IPv6 Ready', d: 'Full dual-stack support.', i: '🕸️' },
              { t: 'Instant Snapshot', d: 'One-click full system backups.', i: '📸' },
            ].map((item, i) => (
              <div key={i} className="animate-reveal" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="text-2xl mb-4">{item.i}</div>
                <h4 className="font-black text-slate-900 dark:text-white text-base mb-2 transition-colors">{item.t}</h4>
                <p className="text-slate-500 dark:text-slate-500 font-bold text-xs px-2 leading-relaxed transition-colors">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
