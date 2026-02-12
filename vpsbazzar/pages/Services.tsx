
import React from 'react';
import { navigate } from '../App';

export const Services: React.FC = () => {
  const serviceList = [
    {
      title: 'Cloud VPS',
      desc: 'Scalable VMs with dedicated NVMe resources and 10Gbps connectivity.',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
    },
    {
      title: 'Global DNS',
      desc: 'Anycast network for ultra-fast domain resolution at the edge.',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    },
    {
      title: 'Kubernetes',
      desc: 'Fully managed container orchestration with auto-scaling.',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2 1m0 0L10 4m2 1v2.5" /></svg>
    },
    {
      title: 'Block Storage',
      desc: 'High-availability storage volumes that attach instantly to any node.',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
    }
  ];

  return (
    <div className="bg-slate-50 dark:bg-[#050505] min-h-screen py-16 text-slate-900 dark:text-slate-200 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl lg:text-7xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter transition-colors">Stack <span className="text-[#C0392B]">Matrix.</span></h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium transition-colors">Professional grade cloud primitives built for absolute reliability.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {serviceList.map((service, idx) => (
            <div key={idx} className="bento-card p-10 rounded-[2.5rem] flex gap-8 items-start bg-white dark:bg-[#0a0a0b] border border-slate-200 dark:border-white/5 shadow-xl shadow-slate-200/50 dark:shadow-none transition-all">
              <div className="w-14 h-14 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[#C0392B] rounded-2xl flex items-center justify-center shrink-0">
                {service.icon}
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-900 dark:text-white mb-3 tracking-tight transition-colors">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed text-sm transition-colors">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 bg-white dark:bg-[#0a0a0b] border border-slate-200 dark:border-white/5 rounded-[3rem] p-10 md:p-16 shadow-xl shadow-slate-200/50 dark:shadow-none transition-all">
          <div className="lg:flex lg:items-center lg:gap-16">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <h2 className="text-3xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter leading-none transition-colors">Developer Centric <br />Workflow.</h2>
              <p className="text-base text-slate-600 dark:text-slate-400 mb-8 font-medium leading-relaxed transition-colors">
                Our REST API and official CLI allow you to automate your entire infrastructure. Deploy, destroy, and scale nodes from your terminal.
              </p>
              <button 
                onClick={(e) => navigate('#/register', e)} 
                className="px-8 py-4 bg-[#C0392B] text-white font-black text-base rounded-2xl hover:scale-105 transition-all shadow-xl shadow-red-900/20"
              >
                Access API Keys
              </button>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-slate-900 rounded-2xl p-8 border border-white/10 font-mono text-xs leading-relaxed shadow-2xl">
                <p className="text-[#C0392B] mb-1"># Deploying cluster v2</p>
                <p className="text-slate-300">$ bazaar deploy --env production</p>
                <p className="text-slate-600 mt-3">Validating resources...</p>
                <p className="text-green-500 font-bold">✓ CPU Cores Reserved (16)</p>
                <p className="text-green-500 font-bold">✓ NVMe Pool Allocated (512GB)</p>
                <p className="text-white mt-4 pulse-glow inline-block p-1.5 rounded bg-white/5 uppercase font-black text-[10px]">SYSTEM_READY :: 45.XX.XX.XX</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
