'use client';

import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Raves & Favorites Data for Deventer
const DEVENTER_LOCATIONS = [
  {
    id: 1,
    title: 'Havenkwartier Warehouse',
    bpm: '174 BPM',
    coords: [52.2505, 6.1720] as [number, number],
    genre: 'Neurofunk',
    isFavorite: false,
  },
  {
    id: 2,
    title: 'Brink Square Pop-Up',
    bpm: '170 BPM',
    coords: [52.2530, 6.1600] as [number, number],
    genre: 'Liquid / Rollers',
    isFavorite: false,
  },
  {
    id: 3,
    title: 'Raventer HQ / Smyrnastraat (7413 BB)',
    bpm: 'HQ / Favorite',
    coords: [52.2591, 6.1588] as [number, number],
    genre: 'Collaborator Hub',
    isFavorite: true,
  },
];

export default function RadarMap() {
  useEffect(() => {
    // 1. Initialize map view centered near Deventer
    const map = L.map('radar-map', {
      zoomControl: false,
    }).setView([52.2560, 6.1630], 14);

    // 2. Load Free CartoDB Dark Matter Tile Layer
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; OpenStreetMap &copy; CARTO',
      maxZoom: 19,
    }).addTo(map);

    // 3. Neon-Green Pin for Regular Raves
    const raveIcon = L.divIcon({
      className: 'custom-rave-pin',
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

    // 4. Neon-Cyan Pin for Raventer Favorite Spot (Smyrnastraat)
    const favIcon = L.divIcon({
      className: 'custom-fav-pin',
      html: `
        <div style="
          width: 22px; 
          height: 22px; 
          background-color: #22d3ee; 
          border-radius: 50%; 
          box-shadow: 0 0 20px #22d3ee;
          border: 2px solid #08080a;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #08080a;
          font-weight: bold;
          font-size: 11px;
        ">★</div>
      `,
      iconSize: [22, 22],
      iconAnchor: [11, 11],
    });

    // 5. Plot Markers on Map
    DEVENTER_LOCATIONS.forEach((location) => {
      const selectedIcon = location.isFavorite ? favIcon : raveIcon;

      L.marker(location.coords, { icon: selectedIcon })
        .addTo(map)
        .bindPopup(`
          <div style="color: #08080a; font-family: sans-serif;">
            <strong style="font-size: 13px;">${location.title}</strong><br />
            <span style="font-size: 11px; color: ${location.isFavorite ? '#0284c7' : '#16a34a'}; font-weight: bold;">
              ${location.bpm} • ${location.genre}
            </span>
          </div>
        `);
    });

    return () => {
      map.remove();
    };
  }, []);

  return <div id="radar-map" className="w-full h-full z-10" />;
}