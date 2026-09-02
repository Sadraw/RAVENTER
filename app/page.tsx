'use client';

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import BottomNav from'./components/BottomNav';
import EventCard from './components/EventCard';
import PageTransition from './components/PageTransition';
import BootScreen from './components/BootScreen';
import { UPCOMING_RAVES } from './data/events';
import { Calendar, MapPin, Zap } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const [isBooting, setIsBooting] = useState<boolean>(true);

  useEffect(() => {
    // Check if the boot screen has already played during this session
    const hasBooted = sessionStorage.getItem('raventer_booted');
    if (hasBooted) {
      setIsBooting(false);
    }
  }, []);

  const handleBootComplete = () => {
    // Mark as booted in session storage so it doesn't repeat on re-navigation
    sessionStorage.setItem('raventer_booted', 'true');
    setIsBooting(false);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isBooting && <BootScreen onComplete={handleBootComplete} />}
      </AnimatePresence>

      {/* CONTINUOUS TEXT GLITCH KEYFRAMES */}
      <style jsx global>{`
        @keyframes text-spectrum-glitch {
          0% {
            transform: translate(0, 0) skew(0deg);
            filter: drop-shadow(0 0 2px rgba(163, 230, 53, 0.4));
          }
          10% {
            transform: translate(-2px, 1px) skew(-3deg);
            filter: drop-shadow(-2px 0 0 #08080a) drop-shadow(2px 0 0 #a3e635);
            clip-path: inset(10% 0 60% 0);
          }
          12% {
            transform: translate(2px, -1px) skew(2deg);
            clip-path: inset(0 0 0 0);
          }
          45% {
            transform: translate(2px, 1px) skew(4deg);
            filter: drop-shadow(2px -1px 0 #08080a) drop-shadow(-2px 1px 0 #a3e635);
            clip-path: inset(50% 0 15% 0);
          }
          48% {
            transform: translate(0, 0) skew(0deg);
            clip-path: inset(0 0 0 0);
          }
          80% {
            transform: translate(-1px, -1px) skew(-2deg);
            filter: drop-shadow(-2px 0 0 #08080a) drop-shadow(2px 0 0 #a3e635);
            clip-path: inset(20% 0 40% 0);
          }
          83% {
            transform: translate(0, 0) skew(0deg);
            clip-path: inset(0 0 0 0);
          }
          100% {
            transform: translate(0, 0) skew(0deg);
            filter: drop-shadow(0 0 2px rgba(163, 230, 53, 0.4));
          }
        }

        .glitch-spectrum-text {
          animation: text-spectrum-glitch 2s ease-in-out infinite;
        }
      `}</style>

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
                
                {/* BUBBLY ANIMATED CONTAINER */}
                <div className="relative inline-block my-1 px-4 py-1 cursor-default select-none">
                  
                  {/* FLOATING SOUND SPECTRUM BUBBLES */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
                    
                    <motion.span
                      animate={{
                        y: [-10, -35, -10],
                        x: [-15, 15, -15],
                        scale: [0.8, 1.3, 0.8],
                        opacity: [0.3, 0.7, 0.3],
                      }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute w-6 h-6 rounded-full bg-lime-400/30 blur-md glow-lime"
                    />

                    <motion.span
                      animate={{
                        y: [10, -25, 10],
                        x: [20, -20, 20],
                        scale: [1.1, 0.7, 1.1],
                        opacity: [0.2, 0.8, 0.2],
                      }}
                      transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                      className="absolute w-8 h-8 rounded-full bg-emerald-400/25 blur-md"
                    />

                    <motion.span
                      animate={{
                        y: [0, -40, 0],
                        x: [0, 25, 0],
                        scale: [0.6, 1.4, 0.6],
                        opacity: [0.4, 0.9, 0.4],
                      }}
                      transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                      className="absolute w-5 h-5 rounded-full bg-cyan-400/30 blur-sm"
                    />

                    <motion.span
                      animate={{
                        y: [-20, 15, -20],
                        x: [-25, -5, -25],
                        scale: [1.2, 0.5, 1.2],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                      className="absolute w-7 h-7 rounded-full bg-lime-300/30 blur-md glow-lime"
                    />

                  </div>

                  {/* GLITCHING GRADIENT TEXT */}
                  <span className="glitch-spectrum-text relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-emerald-300 to-cyan-400 inline-block font-black cursor-default select-none">
                    SOUND SPECTRUM
                  </span>

                </div>
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
    </>
  );
}