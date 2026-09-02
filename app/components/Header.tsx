'use client';

import React, { useEffect, useState } from 'react';
import { CornerDownLeft, Radio, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-5 py-4 border-b border-[var(--border-color)] backdrop-blur-xl bg-[var(--bg-nav)] transition-colors duration-300">
      <div className="flex items-center gap-1 font-black text-xl tracking-tighter uppercase select-none group cursor-pointer">
        <span className="group-hover:text-cyan-400 transition-colors">RAV</span>
        <span className="inline-flex items-center justify-center bg-lime-400 text-neutral-950 p-1 rounded-md mx-0.5 glow-lime group-hover:animate-glitch">
          <CornerDownLeft className="w-4 h-4 stroke-[3]" />
        </span>
        <span className="text-lime-400 transition-colors">NTER</span>
      </div>

      <div className="flex items-center gap-2">
        {mounted && (
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full bg-neutral-800/60 border border-[var(--border-color)] text-lime-400 hover:scale-105 active:scale-95 transition-all"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4 text-cyan-400" />}
          </button>
        )}

        <button className="flex items-center gap-1.5 bg-neutral-900 border border-[var(--border-color)] text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-full active:scale-95 transition-all glow-lime text-white">
          <Radio className="w-3.5 h-3.5 text-lime-400 animate-pulse" />
          Live
        </button>
      </div>
    </nav>
  );
}