export interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  category: string;
}

export interface Tournament {
  id: number;
  name: string;
  date: string;
  location: string;
  status: 'Open' | 'Ongoing' | 'Finished';
  category: string;
}

export interface RankingPlayer {
  rank: number;
  name: string;
  points: number;
  category: string;
  club: string;
}

export interface Sponsor {
  id: number;
  name: string;
  logoUrl: string;
}