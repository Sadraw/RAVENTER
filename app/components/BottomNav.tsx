'use client';

import React from 'react';
import { Flame, Compass, Image as ImageIcon, User } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md z-[9999] bg-[var(--bg-nav)] backdrop-blur-xl border-t border-[var(--border-color)] px-4 py-3 flex justify-between items-center transition-colors duration-300">
      
      {/* RAVES / HOME */}
      <a 
        href="/" 
        className={`flex flex-col items-center gap-1 transition-colors ${
          pathname === '/' ? 'text-lime-400' : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
        }`}
      >
        <Flame className="w-5 h-5" />
        <span className="text-[9px] font-bold uppercase tracking-widest">Raves</span>
      </a>
      
      {/* RADAR */}
      <a 
        href="/radar" 
        className={`flex flex-col items-center gap-1 transition-colors ${
          pathname === '/radar' ? 'text-lime-400' : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
        }`}
      >
        <Compass className="w-5 h-5" />
        <span className="text-[9px] font-bold uppercase tracking-widest">Radar</span>
      </a>

      {/* GALLERY */}
      <a 
        href="/gallery" 
        className={`flex flex-col items-center gap-1 transition-colors ${
          pathname === '/gallery' ? 'text-lime-400' : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
        }`}
      >
        <ImageIcon className="w-5 h-5" />
        <span className="text-[9px] font-bold uppercase tracking-widest">Gallery</span>
      </a>
      
      {/* PROFILE */}
      <a 
        href="/profile" 
        className={`flex flex-col items-center gap-1 transition-colors ${
          pathname === '/profile' ? 'text-lime-400' : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
        }`}
      >
        <User className="w-5 h-5" />
        <span className="text-[9px] font-bold uppercase tracking-widest">Profile</span>
      </a>

    </div>
  );
}