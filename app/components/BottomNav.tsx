import React from 'react';
import { Flame, Compass, User } from 'lucide-react';
import Link from 'next/link';

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md z-50 bg-[var(--bg-nav)] backdrop-blur-xl border-t border-[var(--border-color)] px-6 py-3 flex justify-between items-center text-[var(--text-muted)] transition-colors duration-300">
      <Link href="/" className="flex flex-col items-center gap-1 text-lime-400">
        <Flame className="w-5 h-5" />
        <span className="text-[9px] font-bold uppercase tracking-widest">Raves</span>
      </Link>
      
      <Link href="/radar" className="flex flex-col items-center gap-1 hover:text-lime-400 transition-colors">
        <Compass className="w-5 h-5" />
        <span className="text-[9px] font-bold uppercase tracking-widest">Radar</span>
      </Link>
      
      <button className="flex flex-col items-center gap-1 hover:text-[var(--text-primary)] transition-colors">
        <User className="w-5 h-5" />
        <span className="text-[9px] font-bold uppercase tracking-widest">Profile</span>
      </button>
    </div>
  );
}