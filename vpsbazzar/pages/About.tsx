
import React from 'react';
import { siteConfig } from '../siteConfig';

export const About: React.FC = () => {
  return (
    <div className="bg-[#050505] min-h-screen text-slate-200">
      <div className="py-16 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl lg:text-7xl font-black text-white mb-6 tracking-tighter">Our <span className="text-[#C0392B]">DNA.</span></h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium transition-colors">
            Building the next generation of cloud infrastructure from the ground up.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-3xl font-black text-white mb-6 tracking-tight transition-colors">The Mission</h2>
            <p className="text-slate-400 text-base leading-relaxed mb-6 font-medium">
              Founded in 2024, {siteConfig.companyName} was built with a single goal: to provide high-end hardware performance without the corporate tax. 
            </p>
            <p className="text-slate-400 text-base leading-relaxed font-medium transition-colors">
              We own every server, every rack, and every switch in our core regions. No middle-men, no resale, just direct performance.
            </p>
          </div>
          <div className="bento-card p-3 rounded-[2.5rem] bg-white/5 border border-white/10">
            <img src="https://picsum.photos/id/160/1000/800" alt="Data Center" className="w-full h-auto rounded-[2rem] opacity-70 grayscale" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            { t: 'Obsessed Quality', d: 'We only use dual AMD EPYC processors and enterprise Samsung storage.', i: '💎' },
            { t: 'User Focused', d: 'Every feature is built based on direct feedback from our developer community.', i: '👥' },
            { t: 'Hardened Security', d: 'Native Layer-7 protection is baked into every packet of our network.', i: '🛡️' },
          ].map((v, i) => (
            <div key={i} className="bento-card p-10 rounded-[2.5rem] text-center">
              <div className="text-4xl mb-6">{v.i}</div>
              <h3 className="text-xl font-black text-white mb-3 tracking-tight transition-colors">{v.t}</h3>
              <p className="text-slate-500 font-bold leading-relaxed text-sm transition-colors">{v.d}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
