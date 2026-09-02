'use client';

import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Raves Data for Deventer
const DEVENTER_RAVES = [
  {
    id: 1,
    title: 'Havenkwartier Warehouse',
    bpm: '174 BPM',
    coords: [52.2505, 6.1720] as [number, number],
    genre: 'Neurofunk',
  },
  {
    id: 2,
    title: 'Brink Square Pop-Up',
    bpm: '170 BPM',
    coords: [52.2530, 6.1600] as [number, number],
    genre: 'Liquid / Rollers',
  },
];

export default function RadarMap() {
  useEffect(() => {
    // 1. Initialize map view on Deventer, NL
    const map = L.map('radar-map', {
      zoomControl: false,
    }).setView([52.2550, 6.1620], 14);

    // 2. Load Free CartoDB Dark Matter Tile Layer
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; OpenStreetMap &copy; CARTO',
      maxZoom: 19,
    }).addTo(map);

    // 3. Create Custom Neon-Green HTML Marker
    const raveIcon = L.divIcon({
      className: 'custom-map-pin',
      html: `
        <div style="
          width: 18px; 
          height: 18px; 
          background-color: #a3e635; 
          border-radius: 50%; 
          box-shadow: 0 0 15px #a3e635;
          border: 2px solid #08080a;
        "></div>
      `,
      iconSize: [18, 18],
      iconAnchor: [9, 9],
    });

    // 4. Plot Markers on Map
    DEVENTER_RAVES.forEach((rave) => {
      L.marker(rave.coords, { icon: raveIcon })
        .addTo(map)
        .bindPopup(`
          <div style="color: #08080a; font-family: sans-serif;">
            <strong style="font-size: 13px;">${rave.title}</strong><br />
            <span style="font-size: 11px; color: #16a34a; font-weight: bold;">
              ${rave.bpm} • ${rave.genre}
            </span>
          </div>
        `);
    });

    // Cleanup instance when component unmounts
    return () => {
      map.remove();
    };
  }, []);

  return <div id="radar-map" className="w-full h-full z-10" />;
}