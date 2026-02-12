import React, { useState, useEffect } from 'react';

export const Network: React.FC = () => {
  const [pingData, setPingData] = useState<Record<string, number>>({});

  const regions = [
    { city: 'Mumbai', code: 'BOM-1', basePing: 2, status: 'Operational', providers: 'Tata, Jio, Airtel' },
    { city: 'Singapore', code: 'SIN-2', basePing: 32, status: 'Operational', providers: 'Singtel, Equinix' },
    { city: 'London', code: 'LON-4', basePing: 108, status: 'Operational', providers: 'BT, Linx' },
    { city: 'New York', code: 'NYC-1', basePing: 176, status: 'Operational', providers: 'Verizon, Cogent' },
    { city: 'Frankfurt', code: 'FRA-3', basePing: 112, status: 'Operational', providers: 'DE-CIX, Telia' },
    { city: 'Tokyo', code: 'NRT-1', basePing: 82, status: 'Maintenance', providers: 'NTT, KDDI' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const newPings: Record<string, number> = {};
      regions.forEach(r => {
        newPings[r.code] = r.basePing + Math.floor(Math.random() * 5);
      });
      setPingData(newPings);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-50 dark:bg-[#050505] min-h-screen py-24 text-slate-900 dark:text-slate-200 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 animate-reveal">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-8">
            <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
            <span className="text-[10px] font-black uppercase tracking-widest text-red-500">Global Anycast Status: Online</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter">Global <span className="text-[#C0392B]">Node.</span></h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
            Deploy workloads closer to your users. Our carrier-neutral network provides sub-10ms transit to major global financial hubs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {regions.map((reg, i) => (
            <div key={i} className="bento-card p-10 rounded-[3rem] relative group overflow-hidden bg-white dark:bg-[#0a0a0b] border-slate-200 dark:border-white/5 shadow-xl transition-all">
              <div className="flex justify-between items-start mb-10">
                <div>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-1 tracking-tight">{reg.city}</h3>
                  <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.25em]">{reg.code}</p>
                </div>
                <div className={`px-4 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-widest border transition-all ${reg.status === 'Operational' ? 'bg-green-500/10 text-green-600 border-green-500/20' : 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20'}`}>
                  {reg.status}
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Backbone Latency</span>
                  <span className="text-slate-900 dark:text-white font-black">{pingData[reg.code] || reg.basePing}ms</span>
                </div>
                <div className="h-1 bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
                   <div className="h-full bg-green-500 w-[95%]"></div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 dark:border-white/5">
                 <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2">Carrier Peers</p>
                 <p className="text-xs font-bold text-slate-600 dark:text-slate-400">{reg.providers}</p>
              </div>

              {/* Decorative Pulse */}
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                 <div className="w-16 h-16 border-2 border-[#C0392B] rounded-full animate-ping opacity-20"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="bento-card p-16 rounded-[4rem] text-center bg-white dark:bg-[#0a0a0b] border border-slate-200 dark:border-white/5 shadow-2xl relative overflow-hidden transition-all">
          <div className="relative z-10">
            <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter">Bespoke Edge Deployment?</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-10 font-medium text-base max-w-xl mx-auto leading-relaxed">
              We offer bare-metal managed clusters in 40+ Tier-3 data centers for high-frequency trading and low-latency gaming.
            </p>
            <button className="px-12 py-5 bg-[#C0392B] text-white font-black text-sm uppercase tracking-widest rounded-2xl hover:scale-105 transition-all shadow-2xl shadow-red-900/30">
              Speak to Network Engineering
            </button>
          </div>
          {/* Background Decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};