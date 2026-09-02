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
      
      {/* KEYFRAME ANIMATIONS FOR LIME-ONLY GLITCH EFFECT */}
      <style jsx global>{`
        /* ENTRY TRANSITION FOR RAV[↵]NTER DISAPPEARING */
        @keyframes logo-glitch-out {
          0% {
            opacity: 1;
            transform: translate(0, 0) skew(0deg);
            clip-path: inset(0 0 0 0);
          }
          20% {
            opacity: 0.8;
            transform: translate(-4px, 2px) skew(-8deg);
            clip-path: inset(20% 0 30% 0);
          }
          50% {
            opacity: 0.4;
            transform: translate(4px, -2px) skew(12deg);
            clip-path: inset(60% 0 10% 0);
          }
          80% {
            opacity: 0.1;
            transform: translate(-2px, 1px) skew(-4deg);
            clip-path: inset(10% 0 80% 0);
          }
          100% {
            opacity: 0;
            transform: translate(0, 0) skew(0deg);
            clip-path: inset(0 0 100% 0);
          }
        }

        /* ENTRY TRANSITION FOR BIG RAVENTER IN */
        @keyframes logo-glitch-in {
          0% {
            opacity: 0;
            transform: scale(1.05) translate(4px, -2px) skew(12deg);
            clip-path: inset(100% 0 0 0);
          }
          30% {
            opacity: 0.6;
            transform: scale(1.1) translate(-3px, 2px) skew(-8deg);
            clip-path: inset(40% 0 20% 0);
          }
          70% {
            opacity: 0.9;
            transform: scale(1.08) translate(2px, -1px) skew(4deg);
            clip-path: inset(5% 0 40% 0);
          }
          100% {
            opacity: 1;
            transform: scale(1.1) translate(0, 0) skew(0deg);
            clip-path: inset(0 0 0 0);
          }
        }

        /* CONTINUOUS LIME GLITCH LOOP WHILE HOVERED */
        @keyframes glitch-loop {
          0% {
            text-shadow: 2px 0 #08080a, -2px 0 #a3e635;
            transform: scale(1.1) translate(0, 0) skew(0deg);
          }
          10% {
            text-shadow: -2px -1px #08080a, 2px 1px #a3e635;
            transform: scale(1.1) translate(-2px, 1px) skew(-3deg);
            clip-path: inset(15% 0 65% 0);
          }
          15% {
            text-shadow: 2px 0 #08080a, -2px 0 #a3e635;
            transform: scale(1.1) translate(0, 0) skew(0deg);
            clip-path: inset(0 0 0 0);
          }
          45% {
            text-shadow: 3px 1px #08080a, -3px -1px #a3e635;
            transform: scale(1.1) translate(2px, -1px) skew(4deg);
            clip-path: inset(60% 0 10% 0);
          }
          50% {
            text-shadow: none;
            transform: scale(1.1) translate(0, 0) skew(0deg);
            clip-path: inset(0 0 0 0);
          }
          85% {
            text-shadow: -3px 0 #08080a, 3px 0 #a3e635;
            transform: scale(1.1) translate(-1px, 2px) skew(-2deg);
            clip-path: inset(25% 0 45% 0);
          }
          90% {
            text-shadow: 1px 0 #08080a, -1px 0 #a3e635;
            transform: scale(1.1) translate(0, 0) skew(0deg);
            clip-path: inset(0 0 0 0);
          }
          100% {
            text-shadow: 2px 0 #08080a, -2px 0 #a3e635;
            transform: scale(1.1) translate(0, 0) skew(0deg);
          }
        }

        .group:hover .glitch-out {
          animation: logo-glitch-out 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .group:hover .glitch-in-loop {
          animation: 
            logo-glitch-in 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards,
            glitch-loop 1.2s ease-in-out infinite 0.2s;
        }
      `}</style>

      {/* HOVER TRANSFORMING LOGO CONTAINER */}
      <div className="group cursor-pointer relative flex items-center h-8 select-none">
        
        {/* DEFAULT BRAND LOGO: RAV[↵]NTER */}
        <div className="glitch-out flex items-center gap-1 font-black text-xl tracking-tighter uppercase transition-all duration-200">
          <span>RAV</span>
          <span className="inline-flex items-center justify-center bg-lime-400 text-neutral-950 p-1 rounded-md mx-0.5 glow-lime">
            <CornerDownLeft className="w-4 h-4 stroke-[3]" />
          </span>
          <span className="text-lime-400">NTER</span>
        </div>

        {/* HOVER LOGO: BIGGER "Raventer" WITH LIME-ONLY GLITCH LOOP */}
        <div className="glitch-in-loop absolute inset-0 opacity-0 pointer-events-none flex items-center font-extrabold text-2xl tracking-tight text-lime-400 capitalize transition-all duration-200 origin-left">
          Raventer
        </div>

      </div>

      {/* HEADER ACTIONS */}
      <div className="flex items-center gap-2">
        {mounted && (
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full bg-neutral-800/60 border border-[var(--border-color)] text-lime-400 hover:scale-105 active:scale-95 transition-all"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4 text-lime-400" />}
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