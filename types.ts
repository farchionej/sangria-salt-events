export interface MenuItem {
  name: string;
  description: string;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
}

export interface HistoryEra {
  id: string;
  period: string;
  title: string;
  description: string;
  image: string;      // The fallback URL
  localImage: string; // The specific filename the user should upload
}

export interface Capability {
  id: string;
  title: string;
  guests?: string;
  description: string;
  icon: 'users' | 'wine' | 'utensils';
  image: string;      // Fallback
  localImage: string; // Local filename
}

export interface NavItem {
  label: string;
  href: string;
  isButton?: boolean;
}

export interface MenuImageConfig {
  fallback: string;
  local: string;
  secondFallback: string;
  secondLocal: string;
}

export interface HeroSlide {
  id: number;
  localSrc: string;
  fallbackSrc: string;
  alt: string;
}
