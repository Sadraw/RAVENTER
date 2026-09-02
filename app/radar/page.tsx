'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { ArrowLeft, Navigation, MapPin } from 'lucide-react';
import Link from 'next/link';

// Dynamically import RadarMap with SSR disabled to protect browser globals
const DynamicRadarMap = dynamic(() => import('../components/RadarMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-[#08080a] flex items-center justify-center text-xs text-neutral-500 uppercase tracking-widest animate-pulse">
      Scanning Deventer Sector...
    </div>
  ),
});

export default function RadarPage() {
  return (
    <div className="min-h-screen bg-[#040406] flex justify-center text-neutral-100 font-sans">
      <main className="relative w-full max-w-md min-h-screen bg-[#08080a] border-x border-neutral-800/50 pb-20 overflow-hidden">
        
        {/* HEADER BAR */}
        <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-4 border-b border-neutral-800/80 backdrop-blur-xl bg-[#08080a]/80">
          <Link href="/" className="p-2 -ml-2 text-neutral-400 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="flex items-center gap-1.5 font-extrabold text-sm uppercase tracking-wider text-lime-400">
            <Navigation className="w-4 h-4 animate-pulse" />
            Deventer Radar
          </div>
          <div className="w-5" />
        </nav>

        {/* FULLSCREEN MAP */}
        <div className="w-full h-screen">
          <DynamicRadarMap />
        </div>

        {/* FLOATING SECTOR OVERLAY */}
        <div className="absolute bottom-6 left-5 right-5 z-50 glass-card p-3 rounded-xl flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-lime-400" />
            <span className="font-bold uppercase tracking-wider">Active Sector</span>
          </div>
          <span className="text-neutral-400 font-mono text-[10px]">52.2550° N, 6.1620° E</span>
        </div>

      </main>
    </div>
  );
}