import React, { useState, useEffect } from 'react';
import { Logo } from '../components/Logo';
import { useAuth } from '../context/AuthContext';
import { navigate } from '../App';

export const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const [serverStatus, setServerStatus] = useState<'Online' | 'Offline' | 'Rebooting'>('Online');
  const [logs, setLogs] = useState<string[]>(['[SYSTEM] Initializing Bazaar PXE Engine...', '[SYSTEM] Authenticating Node Key...', '[SYSTEM] Connection Secured.']);

  useEffect(() => {
    const interval = setInterval(() => {
      if (serverStatus === 'Online') {
        const newLog = `[METRIC] IOPS: ${Math.floor(Math.random() * 5000 + 2000)} | Latency: ${Math.random().toFixed(2)}ms`;
        setLogs(prev => [newLog, ...prev].slice(0, 10));
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [serverStatus]);

  const handleAction = (action: 'start' | 'stop' | 'reboot') => {
    if (action === 'reboot') {
      setServerStatus('Rebooting');
      setLogs(prev => ['[SYSTEM] Reboot Command Sent...', ...prev]);
      setTimeout(() => {
        setServerStatus('Online');
        setLogs(prev => ['[SYSTEM] Node BOM-1 Warm Restart Complete.', ...prev]);
      }, 4000);
    } else if (action === 'stop') {
      setServerStatus('Offline');
      setLogs(prev => ['[SYSTEM] Terminating Hypervisor Processes...', ...prev]);
    } else {
      setServerStatus('Online');
      setLogs(prev => ['[SYSTEM] Booting from NVMe Cluster...', ...prev]);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#050505] flex overflow-hidden text-slate-900 dark:text-white selection-red transition-colors duration-300">
      {/* Sidebar */}
      <aside className="w-72 bg-white dark:bg-[#0a0a0b] hidden lg:flex flex-col border-r border-slate-200 dark:border-white/5 z-20 transition-colors">
        <div className="p-8 pb-4">
          <button onClick={(e) => navigate('#/', e)} className="w-full flex justify-center hover:opacity-90 transition-opacity">
            <Logo className="h-14" isSidebar={true} />
          </button>
        </div>
        
        <nav className="flex-grow px-6 mt-6 space-y-2">
          {[
            { label: 'Overview', path: '#/dashboard', icon: '📊', active: true },
            { label: 'Instances', path: '#/dashboard', icon: '🖥️' },
            { label: 'Block Storage', path: '#/dashboard', icon: '💽' },
            { label: 'Firewall', path: '#/dashboard', icon: '🛡️' },
            { label: 'Snapshots', path: '#/dashboard', icon: '📸' },
            { label: 'Billing', path: '#/dashboard', icon: '💸' },
          ].map((item, i) => (
            <button key={i} className={`flex items-center w-full px-5 py-4 text-[10px] font-black uppercase tracking-[0.15em] rounded-2xl transition-all ${item.active ? 'bg-[#C0392B] text-white shadow-xl shadow-red-900/20' : 'text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'}`}>
              <span className="mr-4 text-base opacity-80">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-8 border-t border-slate-100 dark:border-white/5">
          <button onClick={logout} className="w-full py-4 bg-slate-100 dark:bg-white/5 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-red-500 transition-colors">
            Terminate
          </button>
        </div>
      </aside>

      {/* Content */}
      <div className="flex-grow flex flex-col h-screen overflow-y-auto">
        <header className="h-20 glass-nav flex items-center justify-between px-10 shrink-0 bg-white/50 dark:bg-[#050505]/50 border-b border-slate-200 dark:border-white/5">
          <div className="flex items-center gap-4">
             <div className="lg:hidden"><Logo className="h-10" /></div>
             <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">Root / Node Console</h2>
          </div>
          <div className="flex items-center space-x-6">
            <div className="hidden sm:flex items-center px-4 py-2 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl gap-3">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">PXE SYNC: READY</span>
            </div>
            <div className="flex items-center gap-3">
               <div className="text-right hidden sm:block">
                  <p className="text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-widest">{user?.firstName} {user?.lastName}</p>
                  <p className="text-[9px] font-bold text-[#C0392B] uppercase tracking-widest">{user?.accountStatus} Account</p>
               </div>
               <div className="w-10 h-10 bg-[#C0392B] rounded-2xl flex items-center justify-center font-black text-white shadow-lg shadow-red-900/20 border border-white/10">
                  {user?.firstName.charAt(0)}{user?.lastName.charAt(0)}
               </div>
            </div>
          </div>
        </header>

        <main className="p-8 max-w-7xl mx-auto w-full space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Primary Console */}
            <div className="lg:col-span-8 bento-card p-8 rounded-[2.5rem] bg-white dark:bg-[#0a0a0b] border-slate-200 dark:border-white/5 shadow-xl transition-all">
              <div className="flex justify-between items-start mb-10">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">PROD-SERVER-01</h3>
                    <span className="px-2 py-0.5 bg-slate-100 dark:bg-white/5 text-[9px] font-black text-slate-400 rounded">BOM-1</span>
                  </div>
                  <p className="text-slate-400 font-bold uppercase text-[9px] tracking-[0.2em] transition-colors">Cluster: Bazaar-PXE-Elite • ID: 4920-XM-92</p>
                </div>
                <div className="flex gap-3">
                  <button onClick={() => handleAction('start')} className="w-10 h-10 rounded-xl bg-green-500/10 text-green-500 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all text-sm shadow-sm" title="Start">▶</button>
                  <button onClick={() => handleAction('reboot')} className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all text-sm shadow-sm" title="Reboot">↺</button>
                  <button onClick={() => handleAction('stop')} className="w-10 h-10 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all text-sm shadow-sm" title="Stop">■</button>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                {[
                  { l: 'Status', v: serverStatus, c: serverStatus === 'Online' ? 'text-green-500' : serverStatus === 'Offline' ? 'text-red-500' : 'text-blue-500' },
                  { l: 'IPv4 Address', v: '45.122.92.41', c: 'font-mono' },
                  { l: 'Uptime', v: '24d 18h 04m', c: '' },
                  { l: 'Storage Tier', v: 'NVMe Gen4', c: 'text-[#C0392B]' },
                ].map((stat, i) => (
                  <div key={i}>
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1.5">{stat.l}</p>
                    <p className={`font-black text-xs md:text-sm tracking-tight ${stat.c}`}>{stat.v}</p>
                  </div>
                ))}
              </div>

              {/* Terminal Logs */}
              <div className="terminal-overlay bg-slate-950 rounded-2xl p-6 font-mono text-[10px] leading-relaxed text-slate-300 border border-white/5 h-48 overflow-y-auto">
                {logs.map((log, i) => (
                  <p key={i} className={log.startsWith('[SYSTEM]') ? 'text-blue-400' : 'text-slate-500'}>{log}</p>
                ))}
                <div className="flex items-center gap-2 mt-2">
                  <span className="w-1 h-3 bg-[#C0392B] animate-pulse"></span>
                  <span className="text-slate-600">Waiting for next transmission...</span>
                </div>
              </div>
            </div>

            {/* Metrics Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              <div className="bento-card p-8 rounded-[2.5rem] bg-white dark:bg-[#0a0a0b] border-slate-200 dark:border-white/5 shadow-lg">
                <h4 className="font-black mb-8 uppercase text-[10px] tracking-[0.3em] text-slate-400">Hardware Metrics</h4>
                <div className="space-y-6">
                  {[
                    { label: 'CPU Usage', val: 42, icon: '⚡' },
                    { label: 'RAM Allocation', val: 78, icon: '🧠' },
                    { label: 'Disk IOPS', val: 12, icon: '💾' },
                  ].map((m, i) => (
                    <div key={i}>
                      <div className="flex justify-between items-center text-[9px] font-black uppercase mb-2">
                        <span className="text-slate-600 dark:text-slate-400 flex items-center gap-2">
                          <span>{m.icon}</span> {m.label}
                        </span>
                        <span className="text-slate-900 dark:text-white">{m.val}%</span>
                      </div>
                      <div className="h-1.5 bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-[#C0392B] rounded-full transition-all duration-1000" style={{ width: `${m.val}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#C0392B]/10 to-transparent p-8 rounded-[2.5rem] border border-[#C0392B]/20 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-[#C0392B] rounded-lg flex items-center justify-center text-white text-xs">!</div>
                  <p className="text-[10px] font-black text-[#C0392B] uppercase tracking-[0.2em]">Maintenance Alert</p>
                </div>
                <p className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                  Kernel update 6.10-lts is ready for deployment in BOM-1 zone. Requires 45s cold reboot.
                </p>
                <button className="w-full py-4 bg-[#C0392B] text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl hover:brightness-110 shadow-lg shadow-red-900/30 transition-all">
                  Apply Patch Now
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};