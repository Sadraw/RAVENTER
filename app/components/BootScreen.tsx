'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CornerDownLeft, Terminal, Cpu, Radio } from 'lucide-react';

interface BootScreenProps {
  onComplete: () => void;
}

export default function BootScreen({ onComplete }: BootScreenProps) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('INIT_CORE_SYS');

  useEffect(() => {
    // 1. Progress Counter Sequence
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 80);

    // 2. Terminal Log Messages
    const statusSteps = [
      { time: 100, text: 'INIT_CORE_SYS' },
      { time: 400, text: 'CONNECTING_DEVENTER_SECTOR' },
      { time: 800, text: 'LOADING_RAVENTER_SPECTRUM' },
      { time: 1200, text: 'SIGNAL_LOCKED' },
    ];

    statusSteps.forEach(({ time, text }) => {
      setTimeout(() => setStatusText(text), time);
    });

    // 3. Complete and Fade Out into Main App
    const timeout = setTimeout(() => {
      onComplete();
    }, 1800);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[10000] bg-[#08080a] flex flex-col items-center justify-between p-8 text-lime-400 font-mono select-none"
    >
      {/* KEYFRAME GLITCH STYLING */}
      <style jsx global>{`
        @keyframes boot-glitch {
          0% { transform: translate(0, 0) skew(0deg); text-shadow: 2px 0 #08080a, -2px 0 #a3e635; }
          20% { transform: translate(-3px, 2px) skew(-5deg); text-shadow: -2px 0 #08080a, 2px 0 #a3e635; }
          40% { transform: translate(3px, -1px) skew(6deg); }
          60% { transform: translate(-1px, 2px) skew(-2deg); }
          80% { transform: translate(2px, -2px) skew(3deg); }
          100% { transform: translate(0, 0) skew(0deg); text-shadow: 2px 0 #08080a, -2px 0 #a3e635; }
        }
        .boot-glitch-active {
          animation: boot-glitch 0.3s infinite;
        }
      `}</style>

      {/* TOP SYSTEM HEADER */}
      <div className="w-full max-w-xs flex items-center justify-between text-[10px] text-neutral-500 uppercase tracking-widest pt-4">
        <span className="flex items-center gap-1.5">
          <Terminal className="w-3 h-3 text-lime-400 animate-pulse" />
          SYS_V2.026
        </span>
        <span className="flex items-center gap-1.5">
          <Cpu className="w-3 h-3 text-lime-400" />
          7413_BB
        </span>
      </div>

      {/* CENTER RAVENTER LOGO */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="flex flex-col items-center gap-3 my-auto"
      >
        <div className="boot-glitch-active flex items-center gap-1 font-black text-4xl tracking-tighter uppercase">
          <span className="text-white">RAV</span>
          <span className="inline-flex items-center justify-center bg-lime-400 text-neutral-950 p-1.5 rounded-lg mx-0.5 glow-lime">
            <CornerDownLeft className="w-6 h-6 stroke-[3]" />
          </span>
          <span className="text-lime-400">NTER</span>
        </div>

        <div className="flex items-center gap-2 text-xs font-bold text-neutral-400 tracking-widest uppercase mt-2">
          <Radio className="w-3.5 h-3.5 text-lime-400 animate-pulse" />
          <span>East NL Sound System</span>
        </div>
      </motion.div>

      {/* BOTTOM PROGRESS BAR */}
      <div className="w-full max-w-xs flex flex-col gap-2 pb-6">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-neutral-400 font-bold">
          <span>{statusText}</span>
          <span className="text-lime-400 font-mono">{Math.min(progress, 100)}%</span>
        </div>

        {/* TRACK */}
        <div className="w-full h-1.5 bg-neutral-900 rounded-full overflow-hidden border border-neutral-800">
          <motion.div
            className="h-full bg-lime-400 glow-lime"
            style={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ ease: 'linear' }}
          />
        </div>
      </div>
    </motion.div>
  );
}