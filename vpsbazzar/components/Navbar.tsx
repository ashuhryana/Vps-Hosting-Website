
import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { navigate } from '../App';

interface NavbarProps {
  currentPath: string;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('color-theme') || 'dark');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    return () => window.removeEventListener('scroll', handleScroll);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('color-theme', newTheme);
  };

  const navLinks = [
    { label: 'Home', path: '#/' },
    { label: 'Pricing', path: '#/pricing' },
    { label: 'Network', path: '#/network' },
    { label: 'Services', path: '#/services' },
    { label: 'Support', path: '#/support' },
  ];

  const handleNav = (path: string, e: React.MouseEvent) => {
    setIsOpen(false);
    navigate(path, e);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass-nav py-3 bg-white/80 dark:bg-[#050505]/85' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          <button onClick={(e) => handleNav('#/', e)} className="flex items-center group">
            <Logo className="h-8 md:h-10" />
          </button>
          
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={(e) => handleNav(link.path, e)}
                className={`text-xs font-black uppercase tracking-widest transition-all relative group py-2 ${currentPath === link.path ? 'text-slate-900 dark:text-white' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'}`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-1 bg-[#C0392B] transition-all duration-300 rounded-full ${currentPath === link.path ? 'w-4' : 'w-0 group-hover:w-2'}`}></span>
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4 md:space-x-6">
            <button 
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-[#C0392B] transition-all border border-slate-200 dark:border-white/10"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"/></svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/></svg>
              )}
            </button>

            <div className="hidden md:flex items-center space-x-6">
              <button onClick={(e) => handleNav('#/login', e)} className="text-xs font-black uppercase tracking-widest text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
                Login
              </button>
              <button
                onClick={(e) => handleNav('#/register', e)}
                className="px-6 py-3 bg-[#C0392B] text-white text-xs font-black uppercase tracking-widest rounded-xl shadow-lg shadow-red-900/20 hover:scale-105 active:scale-95 transition-all"
              >
                Sign Up
              </button>
            </div>

            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-slate-500 dark:text-slate-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`lg:hidden bg-white dark:bg-[#0a0a0b] border-t border-slate-100 dark:border-white/5 transition-all duration-500 overflow-hidden ${isOpen ? 'max-h-screen opacity-100 py-10' : 'max-h-0 opacity-0'}`}>
        <div className="px-8 flex flex-col space-y-8">
          {navLinks.map((link) => (
            <button
              key={link.path}
              onClick={(e) => handleNav(link.path, e)}
              className={`text-2xl font-black text-left transition-colors ${currentPath === link.path ? 'text-slate-900 dark:text-white' : 'text-slate-400 dark:text-slate-600'}`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-8 flex flex-col space-y-4">
            <button onClick={(e) => handleNav('#/login', e)} className="w-full text-center py-4 bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white text-lg font-black rounded-2xl">Login</button>
            <button onClick={(e) => handleNav('#/register', e)} className="w-full text-center py-4 bg-[#C0392B] text-white text-lg font-black rounded-2xl">Sign Up</button>
          </div>
        </div>
      </div>
    </nav>
  );
};
