import React, { useState } from 'react';
import { navigate } from '../App';
// Added Logo import to fix "Cannot find name 'Logo'" error
import { Logo } from '../components/Logo';

export const Home: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    { q: "How fast is server provisioning?", a: "Our proprietary Bazaar-PXE stack deploys full OS images on bare hardware in under 45 seconds. Your terminal access is available instantly via Anycast." },
    { q: "What is the 'Bazaar' hardware standard?", a: "We exclusively use Dual-EPYC Zen 4 processors, ECC DDR5 memory, and direct-attached Gen-5 NVMe arrays. No shared storage overhead." },
    { q: "Do you offer localized routing?", a: "Yes. Our routing engine optimizes for path-cost, ensuring your packets take the shortest possible physical fiber route to major exchanges." },
    { q: "Can I upgrade my resources on-the-fly?", a: "Infrastructure scaling is non-disruptive. CPU and RAM hot-plugging is supported for most modern Linux kernels on our platform." }
  ];

  return (
    <div className="bg-slate-50 dark:bg-[#030303] min-h-screen transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative hero-gradient pt-24 pb-20 lg:pt-40 lg:pb-48 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-200/50 dark:bg-white/5 border border-slate-300 dark:border-white/10 mb-10 animate-reveal">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600"></span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Hyper-Scale Engine Active</span>
            </div>
            
            <h1 className="text-6xl sm:text-8xl lg:text-[10rem] font-black text-slate-900 dark:text-white leading-[0.85] mb-12 tracking-tighter text-glow transition-colors animate-reveal" style={{ animationDelay: '0.1s' }}>
              BAZAAR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C0392B] via-slate-700 dark:via-white to-slate-400">CLOUD.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed max-w-2xl mx-auto font-medium transition-colors animate-reveal" style={{ animationDelay: '0.2s' }}>
              The future of bare-metal cloud. Deploy high-frequency NVMe nodes with sub-millisecond hypervisor latency and 10Gbps dedicated uplinks.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 animate-reveal" style={{ animationDelay: '0.3s' }}>
              <button 
                onClick={(e) => navigate('#/register', e)} 
                className="px-12 py-5 bg-[#C0392B] text-white font-black text-sm uppercase tracking-widest rounded-2xl shadow-2xl shadow-red-900/40 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                Launch Cluster
              </button>
              <button 
                onClick={(e) => navigate('#/pricing', e)} 
                className="px-12 py-5 bg-white dark:bg-white/5 text-slate-900 dark:text-white font-black text-sm uppercase tracking-widest rounded-2xl border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10 transition-all"
              >
                View Plans
              </button>
            </div>
          </div>
        </div>
        
        {/* Abstract Gridlines */}
        <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-5 pointer-events-none" style={{backgroundImage: 'radial-gradient(#C0392B 1px, transparent 1px)', backgroundSize: '60px 60px'}}></div>
      </section>

      {/* Trust Metrics */}
      <section className="py-20 border-y border-slate-200 dark:border-white/5 bg-white dark:bg-black transition-colors">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {[
            { l: 'Guaranteed Uptime', v: '99.999%' },
            { l: 'Aggregate Uplink', v: '1.2 Tbps' },
            { l: 'NVMe IOPS', v: '1.2M+' },
            { l: 'Global POPs', v: '24 Regions' },
          ].map((s, i) => (
            <div key={i} className="animate-reveal" style={{ animationDelay: `${i * 0.1}s` }}>
              <p className="text-4xl font-black text-slate-900 dark:text-white mb-2 tracking-tighter">{s.v}</p>
              <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Modern Bento Features */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8 bento-card p-12 rounded-[3.5rem] flex flex-col justify-between h-[450px] bg-white dark:bg-[#0a0a0b] border-slate-200 dark:border-white/5 shadow-2xl">
              <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center text-3xl">🚀</div>
              <div>
                <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">Bare-Metal Performance, Cloud Agility.</h3>
                <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed max-w-lg">Bypass virtualization overhead. Our Bazaar PXE Engine maps virtual CPU cores directly to hardware threads for zero-jitter performance.</p>
              </div>
            </div>
            <div className="md:col-span-4 bento-card p-12 rounded-[3.5rem] flex flex-col justify-between h-[450px] bg-[#C0392B] text-white border-none shadow-red-900/20">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-3xl">🛡️</div>
              <div>
                <h3 className="text-3xl font-black mb-4 tracking-tight">DDoS Immunity.</h3>
                <p className="text-white/80 font-medium leading-relaxed">Integrated Layer-7 scrubbing. We mitigate massive volumetric attacks at the edge before they hit your node.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-slate-100 dark:bg-[#070707] transition-colors">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-black text-center text-slate-900 dark:text-white mb-20 tracking-tighter">Engineered for <span className="text-[#C0392B]">Scale.</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { n: 'Alex Rivera', r: 'Lead Architect @ DataFlow', t: 'Bazaar is the first provider that actually gives us the raw NVMe throughput they promise. No throttles, no BS.' },
              { n: 'Sarah Chen', r: 'DevOps Manager', t: 'Their API is a breath of fresh air. We automated our entire disaster recovery failover to BOM-1 in under a day.' },
              { n: 'Marcus Thorne', r: 'CTO @ FinTech Global', t: 'Latency is our business. VPSBazzar gives us the best route-optimization we have ever seen in the Indian market.' }
            ].map((test, i) => (
              <div key={i} className="bento-card p-10 rounded-[3rem] bg-white dark:bg-[#0a0a0b] border-slate-200 dark:border-white/5 shadow-xl transition-all">
                <div className="text-[#C0392B] text-4xl mb-6">"</div>
                <p className="text-slate-600 dark:text-slate-300 italic mb-10 font-medium leading-relaxed">"{test.t}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-slate-200 dark:bg-white/10 rounded-full"></div>
                  <div>
                    <p className="text-slate-900 dark:text-white font-black text-xs uppercase tracking-widest">{test.n}</p>
                    <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">{test.r}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-[#1A365D] to-[#0a0a0b] rounded-[4rem] p-16 md:p-24 text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-10 tracking-tighter">Initialize Your <br />Fleet Today.</h2>
            <div className="flex flex-wrap justify-center gap-6">
                <button onClick={(e) => navigate('#/register', e)} className="px-16 py-6 bg-[#C0392B] text-white font-black text-base uppercase tracking-widest rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-red-900/50">
                Deploy Instant Node
                </button>
            </div>
          </div>
          {/* Background Branding */}
           <div className="absolute -bottom-20 -right-20 opacity-10 pointer-events-none transform rotate-12">
             <Logo className="h-40" />
           </div>
        </div>
      </section>
    </div>
  );
};
