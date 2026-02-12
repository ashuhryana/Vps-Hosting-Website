
import React, { useState } from 'react';
import { navigate } from '../App';
import { useAuth } from '../context/AuthContext';

export const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoading, error } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
    } catch (err) {
      // Error is handled by context
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#050505] flex flex-col justify-center py-16 px-6 transition-colors duration-300">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-4xl font-black text-slate-900 dark:text-white tracking-tighter">
          Welcome back.
        </h2>
        <p className="mt-4 text-center text-sm font-bold text-slate-500">
          Access your cloud nodes or{' '}
          <button onClick={(e) => navigate('#/register', e)} className="text-[#C0392B] hover:underline underline-offset-4">
            create a new account
          </button>
        </p>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white dark:bg-[#0a0a0b] py-8 px-8 shadow-2xl rounded-[2.5rem] border border-slate-200 dark:border-white/5 transition-colors">
          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-black uppercase tracking-widest rounded-xl animate-reveal">
              {error}
            </div>
          )}
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-1.5">
              <label className="block text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-5 py-3.5 bg-slate-50 dark:bg-black border border-slate-200 dark:border-white/5 rounded-xl text-slate-900 dark:text-white font-bold outline-none focus:border-[#C0392B] transition-all text-sm"
                placeholder="name@email.com"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-5 py-3.5 bg-slate-50 dark:bg-black border border-slate-200 dark:border-white/5 rounded-xl text-slate-900 dark:text-white font-bold outline-none focus:border-[#C0392B] transition-all text-sm"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="h-4 w-4 bg-white dark:bg-black border-slate-300 dark:border-white/10 rounded focus:ring-[#C0392B]"
                />
                <label htmlFor="remember" className="ml-2 block text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  Save Session
                </label>
              </div>
              <button type="button" className="text-[10px] font-black text-[#C0392B] hover:underline uppercase tracking-widest">Reset Pass</button>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full flex justify-center py-4 px-4 bg-[#C0392B] text-white font-black rounded-xl hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-red-900/20 text-sm uppercase tracking-widest ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isLoading ? 'Verifying...' : 'Authenticate'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
