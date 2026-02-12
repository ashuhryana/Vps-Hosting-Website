
import React, { useState } from 'react';
import { navigate } from '../App';
import { useAuth } from '../context/AuthContext';

export const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
  const { register, isLoading, error } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic Authenticity Check (Real Email Regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please provide a valid email endpoint.");
      return;
    }

    try {
      await register(formData.firstName, formData.lastName, formData.email, formData.password);
    } catch (err) {
      // Error handled by context
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#050505] flex flex-col justify-center py-16 px-6 transition-colors duration-300">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-4xl font-black text-slate-900 dark:text-white tracking-tighter">
          Join the Fleet.
        </h2>
        <p className="mt-4 text-center text-sm font-bold text-slate-500">
          Already registered?{' '}
          <button onClick={(e) => navigate('#/login', e)} className="text-[#C0392B] hover:underline underline-offset-4">
            Sign In
          </button>
        </p>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white dark:bg-[#0a0a0b] py-8 px-8 shadow-2xl rounded-[2.5rem] border border-slate-200 dark:border-white/5 transition-colors">
          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-black uppercase tracking-widest rounded-xl">
              {error}
            </div>
          )}
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1">First Name</label>
                <input 
                  type="text" 
                  required 
                  value={formData.firstName}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  className="w-full px-5 py-3.5 bg-slate-50 dark:bg-black border border-slate-200 dark:border-white/5 rounded-xl text-slate-900 dark:text-white font-bold outline-none focus:border-[#C0392B] transition-all text-sm" 
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1">Last Name</label>
                <input 
                  type="text" 
                  required 
                  value={formData.lastName}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  className="w-full px-5 py-3.5 bg-slate-50 dark:bg-black border border-slate-200 dark:border-white/5 rounded-xl text-slate-900 dark:text-white font-bold outline-none focus:border-[#C0392B] transition-all text-sm" 
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1">Email Endpoint</label>
              <input 
                type="email" 
                required 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-5 py-3.5 bg-slate-50 dark:bg-black border border-slate-200 dark:border-white/5 rounded-xl text-slate-900 dark:text-white font-bold outline-none focus:border-[#C0392B] transition-all text-sm" 
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1">Secure Passphrase</label>
              <input 
                type="password" 
                required 
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className="w-full px-5 py-3.5 bg-slate-50 dark:bg-black border border-slate-200 dark:border-white/5 rounded-xl text-slate-900 dark:text-white font-bold outline-none focus:border-[#C0392B] transition-all text-sm" 
              />
            </div>

            <div className="flex items-start">
              <input type="checkbox" required className="mt-1 h-4 w-4 bg-white dark:bg-black border-slate-300 dark:border-white/10 rounded focus:ring-[#C0392B]" />
              <label className="ml-3 block text-[10px] font-bold text-slate-500 dark:text-slate-400 leading-relaxed uppercase tracking-widest">
                I agree to the <button type="button" className="text-slate-900 dark:text-white hover:underline transition-colors">Protocol</button> and <button type="button" className="text-slate-900 dark:text-white hover:underline transition-colors">Shield</button>.
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full flex justify-center py-4 px-4 bg-slate-900 dark:bg-white text-white dark:text-black font-black rounded-xl hover:bg-[#C0392B] hover:text-white transition-all shadow-xl text-sm uppercase tracking-widest ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isLoading ? 'Initializing...' : 'Initialize Account'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
