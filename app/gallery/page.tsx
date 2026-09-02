'use client';

import React from 'react';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import EventCard from '../components/EventCard';
import PageTransition from '../components/PageTransition';
import { UPCOMING_RAVES } from '../data/events';
import { Calendar, MapPin, Zap } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--bg-main)] flex justify-center text-[var(--text-primary)] font-sans selection:bg-lime-400 selection:text-black transition-colors duration-300">
      <main className="relative w-full max-w-md min-h-screen bg-[var(--bg-shell)] border-x border-[var(--border-color)] pb-24 overflow-x-hidden shadow-2xl flex flex-col transition-colors duration-300">
        
        <Header />

        <PageTransition>
          {/* HERO SECTION */}
          <section className="relative z-10 px-5 pt-6 pb-4 text-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900/90 border border-[var(--border-color)] text-[10px] uppercase tracking-widest text-[var(--text-muted)] mb-3">
              <MapPin className="w-3 h-3 text-lime-400" />
              East Netherlands Hub
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight uppercase leading-tight mb-3 select-none">
              ENTER THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-emerald-300 to-cyan-400 inline-block glitch-hover cursor-pointer">
                SOUND SPECTRUM
              </span>
            </h1>
            
            <p className="text-[var(--text-muted)] text-xs leading-relaxed mb-5 max-w-[280px] mx-auto">
              The official Android gateway for Drum & Bass underground raves, collaborator collectives, and secret door codes across the East region.
            </p>

            <div className="flex flex-col gap-2.5">
              <Link href="/radar" className="w-full flex items-center justify-center gap-2 bg-lime-400 active:bg-lime-300 text-neutral-950 font-black uppercase text-xs tracking-wider py-3.5 rounded-xl glow-lime active:scale-98 transition-all shadow-lg shadow-lime-400/10">
                <Zap className="w-4 h-4 fill-current" />
                Explore Raves
              </Link>
            </div>
          </section>

          {/* EVENTS SECTION */}
          <section className="relative z-10 px-5 pt-4">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xs font-extrabold uppercase tracking-wider flex items-center gap-1.5 text-[var(--text-primary)]">
                <Calendar className="w-4 h-4 text-lime-400" />
                Active Parties
              </h2>
              <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-widest">East NL</span>
            </div>

            <div className="flex flex-col gap-3">
              {UPCOMING_RAVES.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </section>
        </PageTransition>

        <BottomNav />

      </main>
    </div>
  );
}