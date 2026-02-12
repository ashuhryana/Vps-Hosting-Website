import React from 'react';
import logo from './assets/logo.png';
import { siteConfig } from '../siteConfig';
import { navigate } from '../App';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-slate-950 text-slate-500 pt-32 pb-16 border-t border-slate-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-20">
          <div className="space-y-8">
            <div className="flex items-center">
              <img
                src={logo}
                alt="VPSBazaar Logo"
                className="h-20 w-auto object-contain select-none"
                draggable={false}
              />
            </div>
            <p className="font-medium leading-relaxed max-w-xs text-slate-600 dark:text-slate-400 transition-colors">
              Next-generation cloud primitives for developers who demand peak hardware performance and zero-trust security.
            </p>
          </div>
          
          <div>
            <h4 className="text-slate-900 dark:text-white font-black mb-8 uppercase text-xs tracking-[0.2em] transition-colors">Product</h4>
            <ul className="space-y-4 font-bold text-sm">
              <li><button onClick={(e) => navigate('#/pricing', e)} className="hover:text-[#C0392B] transition-colors">Cloud VPS</button></li>
              <li><button onClick={(e) => navigate('#/services', e)} className="hover:text-[#C0392B] transition-colors">Kubernetes</button></li>
              <li><button onClick={(e) => navigate('#/pricing', e)} className="hover:text-[#C0392B] transition-colors">Bare Metal</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 dark:text-white font-black mb-8 uppercase text-xs tracking-[0.2em] transition-colors">Legal</h4>
            <ul className="space-y-4 font-bold text-sm">
              <li><button onClick={(e) => navigate('#/terms', e)} className="hover:text-[#C0392B] transition-colors">Terms of Use</button></li>
              <li><button onClick={(e) => navigate('#/privacy', e)} className="hover:text-[#C0392B] transition-colors">Privacy Shield</button></li>
              <li><button onClick={(e) => navigate('#/refund', e)} className="hover:text-[#C0392B] transition-colors">Refund Policy</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 dark:text-white font-black mb-8 uppercase text-xs tracking-[0.2em] transition-colors">HQ</h4>
            <ul className="space-y-4 font-bold text-sm">
              <li className="leading-relaxed text-slate-600 dark:text-slate-400">{siteConfig.address}</li>
              <li className="text-[#C0392B] font-black">{siteConfig.supportEmail}</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center text-[11px] font-black uppercase tracking-widest opacity-70 dark:opacity-50">
          <p className="text-slate-900 dark:text-slate-500">{siteConfig.footerText}</p>
          <div className="mt-4 md:mt-0 flex space-x-8 text-slate-900 dark:text-slate-500">
             <span>Network: <span className="text-green-600 font-black">Online</span></span>
             <span>Uptime: <span className="font-black">99.998%</span></span>
          </div>
        </div>
      </div>
    </footer>
  );
};