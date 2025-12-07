import { NewsItem, Tournament, RankingPlayer, Sponsor } from './types';

export const NAV_LINKS = [
  { name: 'Inicio', href: '#home' },
  { name: 'Nosotros', href: '#about' },
  { name: 'Programas', href: '#services' },
  { name: 'Clubes', href: '#clubs' },
  { name: 'Contacto', href: '#contact' },
];

// Mock data kept for type safety if needed, but mostly unused in new layout
export const MOCK_NEWS: NewsItem[] = [];
export const MOCK_TOURNAMENTS: Tournament[] = [];
export const MOCK_RANKING: RankingPlayer[] = [];

export const MOCK_CLUBS = [
  { id: 1, name: 'Club Campestre de Neiva', image: 'https://images.unsplash.com/photo-1560155016-bd4879ae8f21?q=80&w=800' },
  { id: 2, name: 'Comfamiliar Los Lagos', image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=800' },
  { id: 3, name: 'Club de Tenis Pitalito', image: 'https://images.unsplash.com/photo-1626248982367-e9a9244bc603?q=80&w=800' },
  { id: 4, name: 'Corporación Club de Tenis', image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=800' },
];

export const MOCK_SPONSORS: Sponsor[] = [
  { id: 1, name: 'Gobernación del Huila', logoUrl: '/assets/logos/gobernacion.png' },
  { id: 2, name: 'Inderhuila', logoUrl: '/assets/logos/inderhuila.png' }, 
  { id: 3, name: 'Ministerio del Deporte', logoUrl: '/assets/logos/mindep.png' },
];




