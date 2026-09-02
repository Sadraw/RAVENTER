export interface GalleryItem {
  id: string;
  title: string;
  location: string;
  date: string;
  imageUrl: string;
  category: 'Rave' | 'Collaborator' | 'Flyer' | 'HQ';
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'havenkwartier-01',
    title: 'Havenkwartier Session',
    location: 'Deventer',
    date: 'AUG 2026',
    imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80',
    category: 'Rave',
  },
  {
    id: 'subsonic-poster',
    title: 'SubSonic Underground Flyer',
    location: 'Enschede',
    date: 'SEP 2026',
    imageUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80',
    category: 'Flyer',
  },
  {
    id: 'smyrnastraat-hq',
    title: 'Smyrnastraat 7413 BB HQ',
    location: 'Deventer HQ',
    date: 'JUL 2026',
    imageUrl: 'https://images.unsplash.com/photo-1598387993441-a364f854c3e1?auto=format&fit=crop&w=800&q=80',
    category: 'HQ',
  },
  {
    id: 'zwolle-industrial',
    title: 'Zone B Sound System',
    location: 'Zwolle',
    date: 'JUN 2026',
    imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80',
    category: 'Collaborator',
  },
];