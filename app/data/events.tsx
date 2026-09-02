// extracting all static pary information to a separate file to avoid cluttering the main page component
export interface RaveEvent {
  id: string;
  title: string;
  location: string;
  date: string;
  genre: string;
  doorCode: string;
  themeColor: 'lime' | 'cyan';
}

export const UPCOMING_RAVES: RaveEvent[] = [
  {
    id: 'subsonic-04',
    title: 'SubSonic Underground #04',
    location: 'Enschede • Havenbuurt Warehouse',
    date: 'SEP 18, 2026',
    genre: 'Neurofunk / Jump Up',
    doorCode: 'Door Code Locked',
    themeColor: 'lime',
  },
  {
    id: 'collaborator-sessions',
    title: 'Collaborator Sessions',
    location: 'Zwolle • Industrial Zone B',
    date: 'OCT 02, 2026',
    genre: 'Liquid & Rollers',
    doorCode: '172 BPM',
    themeColor: 'cyan',
  },
];