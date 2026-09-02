'use client';

import React from 'react';
import { CornerDownLeft, Calendar, MapPin, Music, Radio, Ticket, Zap, Flame, Compass, User } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#040406] flex justify-center text-neutral-100 font-sans selection:bg-lime-400 selection:text-black">
      
      {/* MOBILE SHELL CONTAINER */}
      <main className="relative w-full max-w-md min-h-screen bg-[#08080a] border-x border-neutral-800/50 pb-24 overflow-x-hidden shadow-2xl">
        
        {/* GLITCH ANIMATION STYLES */}
        <style jsx global>{`
          @keyframes glitch-anim {
            0% { transform: translate(0); }
            20% { transform: translate(-2px, 2px); }
            40% { transform: translate(-2px, -2px); }
            60% { transform: translate(2px, 2px); }
            80% { transform: translate(2px, -2px); }
            100% { transform: translate(0); }
          }
          .animate-glitch {
            animation: glitch-anim 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
          }
        `}</style>

        {/* BACKGROUND GLOWS */}
        <div className="absolute -top-16 -right-16 w-48 h-48 bg-lime-500/20 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute top-1/3 -left-16 w-48 h-48 bg-cyan-500/15 rounded-full blur-[80px] pointer-events-none" />

        {/* MOBILE APP HEADER */}
        <nav className="sticky top-0 z-50 flex items-center justify-between px-5 py-4 border-b border-neutral-800/80 backdrop-blur-xl bg-[#08080a]/85">
          <div className="flex items-center gap-1 font-black text-xl tracking-tighter uppercase select-none">
            <span>RAV</span>
            <span className="inline-flex items-center justify-center bg-lime-400 text-neutral-950 p-1 rounded-md mx-0.5 glow-lime">
              <CornerDownLeft className="w-4 h-4 stroke-[3]" />
            </span>
            <span className="text-lime-400">NTER</span>
          </div>

          <button className="flex items-center gap-1.5 bg-neutral-900 border border-neutral-800 text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-full active:scale-95 transition-all">
            <Radio className="w-3.5 h-3.5 text-lime-400 animate-pulse" />
            Live
          </button>
        </nav>

        {/* HERO BANNER */}
        <section className="relative z-10 px-5 pt-6 pb-4 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900/90 border border-neutral-800 text-[10px] uppercase tracking-widest text-neutral-400 mb-3">
            <MapPin className="w-3 h-3 text-lime-400" />
            East Netherlands Hub
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight uppercase leading-tight mb-3">
            ENTER THE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-emerald-300 to-cyan-400">
              SOUND SPECTRUM
            </span>
          </h1>
          
          <p className="text-neutral-400 text-xs leading-relaxed mb-5 max-w-[280px] mx-auto">
            The official Android gateway for Drum & Bass underground raves, collaborator collectives, and secret door codes across the East region.
          </p>

          {/* TOUCH BUTTONS */}
          <div className="flex flex-col gap-2.5">
            <button className="w-full flex items-center justify-center gap-2 bg-lime-400 active:bg-lime-300 text-neutral-950 font-black uppercase text-xs tracking-wider py-3.5 rounded-xl glow-lime active:scale-98 transition-all shadow-lg shadow-lime-400/10">
              <Zap className="w-4 h-4 fill-current" />
              Explore Raves
            </button>
            <button className="w-full flex items-center justify-center gap-2 bg-neutral-900/80 active:bg-neutral-800 border border-neutral-800 text-neutral-200 font-bold uppercase text-xs tracking-wider py-3.5 rounded-xl transition-all">
              Collaborators
            </button>
          </div>
        </section>

        {/* EVENTS LIST */}
        <section className="relative z-10 px-5 pt-4">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xs font-extrabold uppercase tracking-wider flex items-center gap-1.5 text-neutral-300">
              <Calendar className="w-4 h-4 text-lime-400" />
              Active Parties
            </h2>
            <span className="text-[10px] text-neutral-500 uppercase tracking-widest">East NL</span>
          </div>

          <div className="flex flex-col gap-3">
            
            {/* Card 1 */}
            <div className="glass-card p-4 rounded-xl active:scale-98 transition-all">
              <div className="flex justify-between items-start mb-2.5">
                <span className="px-2 py-0.5 rounded bg-lime-400/10 text-lime-400 text-[9px] font-bold uppercase tracking-wider">
                  Neurofunk / Jump Up
                </span>
                <Ticket className="w-4 h-4 text-neutral-500" />
              </div>
              <h3 className="text-base font-black uppercase mb-0.5">SubSonic Underground #04</h3>
              <p className="text-[11px] text-neutral-400 mb-3">Enschede • Havenbuurt Warehouse</p>
              <div className="flex items-center justify-between pt-2.5 border-t border-neutral-800/80 text-[10px]">
                <span className="text-neutral-500">SEP 18, 2026</span>
                <span className="font-bold text-lime-400">Door Code Locked</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="glass-card p-4 rounded-xl active:scale-98 transition-all">
              <div className="flex justify-between items-start mb-2.5">
                <span className="px-2 py-0.5 rounded bg-cyan-400/10 text-cyan-400 text-[9px] font-bold uppercase tracking-wider">
                  Liquid & Rollers
                </span>
                <Music className="w-4 h-4 text-neutral-500" />
              </div>
              <h3 className="text-base font-black uppercase mb-0.5">Collaborator Sessions</h3>
              <p className="text-[11px] text-neutral-400 mb-3">Zwolle • Industrial Zone B</p>
              <div className="flex items-center justify-between pt-2.5 border-t border-neutral-800/80 text-[10px]">
                <span className="text-neutral-500">OCT 02, 2026</span>
                <span className="font-bold text-cyan-400">172 BPM</span>
              </div>
            </div>

          </div>
        </section>

        {/* BOTTOM NAVIGATION BAR */}
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md z-50 bg-[#08080a]/90 backdrop-blur-xl border-t border-neutral-800/80 px-6 py-3 flex justify-between items-center text-neutral-400">
          <button className="flex flex-col items-center gap-1 text-lime-400">
            <Flame className="w-5 h-5" />
            <span className="text-[9px] font-bold uppercase tracking-widest">Raves</span>
          </button>
          <button className="flex flex-col items-center gap-1 hover:text-neutral-200 transition-colors">
            <Compass className="w-5 h-5" />
            <span className="text-[9px] font-bold uppercase tracking-widest">Radar</span>
          </button>
          <button className="flex flex-col items-center gap-1 hover:text-neutral-200 transition-colors">
            <User className="w-5 h-5" />
            <span className="text-[9px] font-bold uppercase tracking-widest">Profile</span>
          </button>
        </div>

      </main>
    </div>
  );
}