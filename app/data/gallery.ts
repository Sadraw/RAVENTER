export interface GalleryItem {
  id: string;
  title: string;
  location: string;
  date: string;
  imageUrl: string;
  category: 'Rave' | 'Collaborator' | 'Flyer' | 'HQ';
}

export const GALLERY_ITEMS: GalleryItem[] = Array.from({ length: 10 }, (_, i) => ({
  id: `walhalla-0${i + 1}`,
  title: `Walhalla Session #${i + 1}`,
  location: 'Walhalla Deventer',
  date: '07 MAR 2026',
  imageUrl: `/raventer${i + 1}.jpg`, // Points directly to public/raventerX.jpg
  category: i % 2 === 0 ? 'Rave' : 'Collaborator',
}));