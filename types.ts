
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

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
