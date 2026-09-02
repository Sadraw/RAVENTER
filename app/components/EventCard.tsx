import React from 'react';
import { Ticket, Music } from 'lucide-react';
import { RaveEvent } from '../data/events';

export default function EventCard({ event }: { event: RaveEvent }) {
  const isLime = event.themeColor === 'lime';

  return (
    <div className="glass-card p-4 rounded-xl active:scale-98 transition-all">
      <div className="flex justify-between items-start mb-2.5">
        <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider ${
          isLime ? 'bg-lime-400/10 text-lime-400' : 'bg-cyan-400/10 text-cyan-400'
        }`}>
          {event.genre}
        </span>
        {isLime ? (
          <Ticket className="w-4 h-4 text-[var(--text-muted)]" />
        ) : (
          <Music className="w-4 h-4 text-[var(--text-muted)]" />
        )}
      </div>
      <h3 className="text-base font-black uppercase mb-0.5">{event.title}</h3>
      <p className="text-[11px] text-[var(--text-muted)] mb-3">{event.location}</p>
      <div className="flex items-center justify-between pt-2.5 border-t border-[var(--border-color)] text-[10px]">
        <span className="text-[var(--text-muted)]">{event.date}</span>
        <span className={`font-bold ${isLime ? 'text-lime-400' : 'text-cyan-400'}`}>
          {event.doorCode}
        </span>
      </div>
    </div>
  );
}