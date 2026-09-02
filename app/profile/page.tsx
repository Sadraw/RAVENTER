'use client';

import React, { useState } from 'react';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import PageTransition from '../components/PageTransition';
import { 
  User, 
  Users, 
  Heart, 
  MessageSquare, 
  Grid, 
  UserCheck, 
  MapPin, 
  Zap, 
  Settings,
  Share2
} from 'lucide-react';

const RECENT_PHOTOS = [
  '/raventer1.jpg',
  '/raventer2.jpg',
  '/raventer3.jpg',
  '/raventer4.jpg',
  '/raventer5.jpg',
  '/raventer6.jpg',
];

const FOLLOWING_LIST = [
  { id: '1', name: 'Walhalla Deventer', role: 'Venue / Outpost', location: 'Deventer' },
  { id: '2', name: 'Sub-Signal NL', role: 'Collaborator', location: 'Enschede' },
  { id: '3', name: 'Bassline Syndicate', role: 'Collective', location: 'Zwolle' },
];

const RECENT_COMMENTS = [
  { id: 'c1', user: 'Neuro_Vibe', text: 'That Smyrnastraat set was pure insanity 🔊', time: '2h ago' },
  { id: 'c2', user: 'DNB_Core', text: 'Door code worked perfectly. See you next week!', time: '1d ago' },
  { id: 'c3', user: 'Walhalla_Official', text: 'Thanks for pulling up to the session! 🔥', time: '3d ago' },
];

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<'gallery' | 'following' | 'comments'>('gallery');

  return (
    <div className="min-h-screen bg-[var(--bg-main)] flex justify-center text-[var(--text-primary)] font-sans selection:bg-lime-400 selection:text-black transition-colors duration-300">
      <main className="relative w-full max-w-md min-h-screen bg-[var(--bg-shell)] border-x border-[var(--border-color)] pb-28 overflow-x-hidden shadow-2xl flex flex-col transition-colors duration-300">
        
        <Header />

        <PageTransition>
          <section className="relative z-10 px-5 pt-6">
            
            {/* AVATAR & HEADER INFO */}
            <div className="flex items-center gap-4 mb-5">
              <div className="relative w-20 h-20 rounded-2xl bg-neutral-900 border-2 border-lime-400 p-0.5 overflow-hidden glow-lime">
                <img 
                  src="/raventer2.jpg" 
                  alt="Profile Avatar" 
                  className="w-full h-full object-cover rounded-xl"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80';
                  }}
                />
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h1 className="text-xl font-black uppercase tracking-tight">Randomguy </h1>
                  <button className="p-1.5 rounded-lg bg-neutral-800/80 border border-[var(--border-color)] text-[var(--text-muted)] hover:text-white transition-colors">
                    <Settings className="w-4 h-4" />
                  </button>
                </div>
                
                <p className="text-xs text-lime-400 font-mono font-bold mt-0.5">@deventer_subcore</p>
                
                <div className="flex items-center gap-1 text-[10px] text-[var(--text-muted)] mt-1">
                  <MapPin className="w-3 h-3 text-lime-400" />
                  Deventer Sector, NL
                </div>
              </div>
            </div>

            {/* BIO */}
            <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-5">
              Drum & Bass enthusiast. Frequent at Walhalla Deventer outposts. Recording raw venue energy & sub frequencies.
            </p>

            {/* STATS BAR */}
            <div className="grid grid-cols-3 gap-2 p-3 rounded-xl glass-card text-center mb-6 border border-[var(--border-color)]">
              <div>
                <span className="block text-lg font-black text-lime-400">1,240</span>
                <span className="text-[9px] uppercase font-bold text-[var(--text-muted)] tracking-wider">Followers</span>
              </div>
              <div className="border-x border-[var(--border-color)]">
                <span className="block text-lg font-black text-white">184</span>
                <span className="text-[9px] uppercase font-bold text-[var(--text-muted)] tracking-wider">Following</span>
              </div>
              <div>
                <span className="block text-lg font-black text-white">48</span>
                <span className="text-[9px] uppercase font-bold text-[var(--text-muted)] tracking-wider">Captures</span>
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex gap-2 mb-6">
              <button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-lime-400 text-neutral-950 font-black text-xs uppercase tracking-wider glow-lime active:scale-95 transition-all">
                <Zap className="w-3.5 h-3.5 fill-current" />
                Edit Profile
              </button>
              <button className="p-2.5 rounded-xl bg-neutral-800/60 border border-[var(--border-color)] text-white active:scale-95 transition-all">
                <Share2 className="w-4 h-4" />
              </button>
            </div>

            {/* CONTENT TABS */}
            <div className="flex border-b border-[var(--border-color)] mb-4">
              <button
                onClick={() => setActiveTab('gallery')}
                className={`flex-1 flex items-center justify-center gap-1.5 pb-3 text-xs font-bold uppercase tracking-wider transition-all border-b-2 ${
                  activeTab === 'gallery'
                    ? 'border-lime-400 text-lime-400'
                    : 'border-transparent text-[var(--text-muted)] hover:text-white'
                }`}
              >
                <Grid className="w-3.5 h-3.5" />
                Gallery
              </button>
              <button
                onClick={() => setActiveTab('following')}
                className={`flex-1 flex items-center justify-center gap-1.5 pb-3 text-xs font-bold uppercase tracking-wider transition-all border-b-2 ${
                  activeTab === 'following'
                    ? 'border-lime-400 text-lime-400'
                    : 'border-transparent text-[var(--text-muted)] hover:text-white'
                }`}
              >
                <UserCheck className="w-3.5 h-3.5" />
                Following
              </button>
              <button
                onClick={() => setActiveTab('comments')}
                className={`flex-1 flex items-center justify-center gap-1.5 pb-3 text-xs font-bold uppercase tracking-wider transition-all border-b-2 ${
                  activeTab === 'comments'
                    ? 'border-lime-400 text-lime-400'
                    : 'border-transparent text-[var(--text-muted)] hover:text-white'
                }`}
              >
                <MessageSquare className="w-3.5 h-3.5" />
                Activity
              </button>
            </div>

            {/* TAB CONTENT 1: QUICK GALLERY */}
            {activeTab === 'gallery' && (
              <div className="grid grid-cols-3 gap-2">
                {RECENT_PHOTOS.map((src, index) => (
                  <div key={index} className="aspect-square rounded-lg overflow-hidden bg-neutral-900 border border-[var(--border-color)]">
                    <img 
                      src={src} 
                      alt={`Shot ${index + 1}`} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=400&q=80';
                      }}
                    />
                  </div>
                ))}
              </div>
            )}

            {/* TAB CONTENT 2: FOLLOWING */}
            {activeTab === 'following' && (
              <div className="flex flex-col gap-2.5">
                {FOLLOWING_LIST.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-3 rounded-xl glass-card border border-[var(--border-color)]">
                    <div>
                      <h4 className="text-xs font-black uppercase">{item.name}</h4>
                      <p className="text-[10px] text-[var(--text-muted)]">{item.role} • {item.location}</p>
                    </div>
                    <span className="px-2.5 py-1 rounded-lg bg-neutral-800 text-lime-400 text-[9px] font-bold uppercase border border-neutral-700">
                      Following
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* TAB CONTENT 3: COMMENTS */}
            {activeTab === 'comments' && (
              <div className="flex flex-col gap-2.5">
                {RECENT_COMMENTS.map((c) => (
                  <div key={c.id} className="p-3 rounded-xl glass-card border border-[var(--border-color)]">
                    <div className="flex items-center justify-between text-[10px] mb-1">
                      <span className="font-bold text-lime-400">@{c.user}</span>
                      <span className="text-[var(--text-muted)] font-mono">{c.time}</span>
                    </div>
                    <p className="text-xs text-[var(--text-primary)]">{c.text}</p>
                  </div>
                ))}
              </div>
            )}

          </section>
        </PageTransition>

        <BottomNav />

      </main>
    </div>
  );
}