'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Header from '.././components/Header';
import BottomNav from '.././components/BottomNav';
import PageTransition from '.././components/PageTransition';
import { Compass, Navigation } from 'lucide-react';

const RadarMap = dynamic(() => import('.././components/RadarMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[320px] glass-card rounded-2xl flex flex-col items-center justify-center gap-2 text-[var(--text-muted)] animate-pulse">
      <Navigation className="w-8 h-8 text-lime-400 animate-spin" />
      <span className="text-xs font-mono uppercase tracking-widest">Scanning Signal...</span>
    </div>
  ),
});

export default function RadarPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-main)] flex justify-center text-[var(--text-primary)] font-sans selection:bg-lime-400 selection:text-black transition-colors duration-300">
      <main className="relative w-full max-w-md min-h-screen bg-[var(--bg-shell)] border-x border-[var(--border-color)] pb-28 overflow-x-hidden shadow-2xl flex flex-col transition-colors duration-300">
        
        {/* HEADER */}
        <Header />

        <PageTransition>
          <section className="relative z-10 px-5 pt-6 pb-4 flex flex-col flex-1">
            
            {/* TITLE HEADER */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-neutral-900/90 border border-[var(--border-color)] text-[10px] uppercase tracking-widest text-[var(--text-muted)] mb-2">
                  <Compass className="w-3 h-3 text-lime-400" />
                  Deventer Sector
                </div>
                <h1 className="text-2xl font-black uppercase tracking-tight">
                  Radar Grid
                </h1>
              </div>

              <div className="px-2.5 py-1 rounded-lg bg-lime-400/10 border border-lime-400/20 text-lime-400 text-[10px] font-mono font-bold uppercase tracking-wider">
                HQ Active
              </div>
            </div>

            {/* LEAFLET MAP CONTAINER - ISOLATED Z-INDEX */}
            <div className="relative z-0 w-full h-[340px] rounded-2xl overflow-hidden border border-[var(--border-color)] shadow-xl mb-4">
              <RadarMap />
            </div>

            {/* LOCATION DETAILS CARD */}
            <div className="glass-card p-4 rounded-xl">
              <div className="flex items-center justify-between text-xs font-bold uppercase mb-1">
                <span className="text-lime-400">Main Outpost</span>
                <span className="text-[var(--text-muted)] font-mono text-[10px]">7413 BB</span>
              </div>
              <p className="text-xs text-[var(--text-primary)] font-semibold">
                Smyrnastraat 7413 BB, Deventer
              </p>
              <p className="text-[10px] text-[var(--text-muted)] mt-1">
                Primary underground hub, studio sessions, and secret ticket pickup point.
              </p>
            </div>

          </section>
        </PageTransition>

        {/* BOTTOM NAVIGATION WITH HIGH Z-INDEX */}
        <BottomNav />

      </main>
    </div>
  );
}