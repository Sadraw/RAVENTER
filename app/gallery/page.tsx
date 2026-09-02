'use client';

import React, { useState } from 'react';
import Header from '.././components/Header';
import BottomNav from '.././components/BottomNav';
import { GALLERY_ITEMS, GalleryItem } from '.././data/gallery';
import { Image as ImageIcon, Plus, MapPin, X, Calendar } from 'lucide-react';

const CATEGORIES = ['All', 'Rave', 'Collaborator', 'Flyer', 'HQ'] as const;

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[var(--bg-main)] flex justify-center text-[var(--text-primary)] font-sans selection:bg-lime-400 selection:text-black transition-colors duration-300">
      <main className="relative w-full max-w-md min-h-screen bg-[var(--bg-shell)] border-x border-[var(--border-color)] pb-24 overflow-x-hidden shadow-2xl transition-colors duration-300">
        
        {/* HEADER */}
        <Header />

        {/* HERO SECTION */}
        <section className="relative z-10 px-5 pt-6 pb-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-neutral-900/90 border border-[var(--border-color)] text-[10px] uppercase tracking-widest text-[var(--text-muted)] mb-2">
                <ImageIcon className="w-3 h-3 text-lime-400" />
                Media Archives
              </div>
              <h1 className="text-2xl font-black uppercase tracking-tight">
                Raventer Archive
              </h1>
            </div>

            <button className="flex items-center justify-center p-3 rounded-xl bg-lime-400 active:bg-lime-300 text-neutral-950 font-black glow-lime active:scale-95 transition-all">
              <Plus className="w-5 h-5 stroke-[3]" />
            </button>
          </div>

          {/* CATEGORY FILTERS */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? 'bg-lime-400 text-neutral-950 glow-lime'
                    : 'bg-neutral-800/60 border border-[var(--border-color)] text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* PHOTO GRID */}
        <section className="relative z-10 px-5 pt-2">
          <div className="grid grid-cols-2 gap-3">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                onClick={() => setActivePhoto(item)}
                className="glass-card group overflow-hidden rounded-xl active:scale-95 transition-all cursor-pointer relative"
              >
                <div className="relative aspect-square w-full overflow-hidden bg-neutral-900 flex items-center justify-center">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                  <div className="absolute top-2 left-2 px-1.5 py-0.5 rounded bg-neutral-950/80 backdrop-blur-md border border-neutral-700 text-[8px] font-bold uppercase text-lime-400">
                    {item.category}
                  </div>
                </div>

                <div className="p-2.5">
                  <h3 className="text-xs font-black uppercase truncate">{item.title}</h3>
                  <div className="flex items-center justify-between text-[9px] text-[var(--text-muted)] mt-1">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-2.5 h-2.5 text-lime-400" />
                      {item.location}
                    </span>
                    <span className="font-mono">{item.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* LIGHTBOX POP-UP MODAL */}
        {activePhoto && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
            onClick={() => setActivePhoto(null)}
          >
            <div 
              className="relative w-full max-w-sm glass-card rounded-2xl overflow-hidden border border-[var(--border-color)] shadow-2xl bg-[#08080a]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* CLOSE BUTTON */}
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute top-3 right-3 z-10 p-2 rounded-full bg-neutral-950/80 border border-neutral-700 text-neutral-300 hover:text-white active:scale-90 transition-all"
              >
                <X className="w-4 h-4" />
              </button>

              {/* POP-UP FULL IMAGE */}
              <div className="relative w-full aspect-square bg-neutral-950 overflow-hidden">
                <img
                  src={activePhoto.imageUrl}
                  alt={activePhoto.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* POP-UP DETAILS */}
              <div className="p-4 bg-[var(--bg-shell)] border-t border-[var(--border-color)]">
                <div className="inline-block px-2 py-0.5 rounded bg-lime-400/10 text-lime-400 text-[9px] font-bold uppercase tracking-wider mb-2">
                  {activePhoto.category}
                </div>
                <h2 className="text-lg font-black uppercase leading-tight mb-2">
                  {activePhoto.title}
                </h2>
                
                <div className="flex items-center justify-between text-xs text-[var(--text-muted)] pt-2 border-t border-[var(--border-color)]">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-lime-400" />
                    {activePhoto.location}
                  </span>
                  <span className="flex items-center gap-1 font-mono text-[10px]">
                    <Calendar className="w-3.5 h-3.5 text-lime-400" />
                    {activePhoto.date}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* BOTTOM NAVIGATION */}
        <BottomNav />

      </main>
    </div>
  );
}