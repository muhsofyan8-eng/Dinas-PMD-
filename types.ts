
export interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}

export interface ServiceItem {
  id: number;
  name: string;
  description: string;
  icon: string;
  link: string;
}

export interface AgendaItem {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  category: 'Workshop' | 'Rapat' | 'Sosialisasi' | 'Lainnya';
  description: string;
}

export interface Announcement {
  id: number;
  title: string;
  date: string;
  category: string;
  isNew: boolean;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
