import { HistoryEra, Capability, NavItem, MenuItem, MenuImageConfig, HeroSlide } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'THE HISTORY', href: '#history' },
  { label: 'SPACES', href: '#spaces' },
  { label: 'MENU', href: '#menu' },
  { label: 'INQUIRE', href: '#inquire', isButton: true },
];

export const HERO_IMAGE = {
  fallback: 'https://images.unsplash.com/photo-1514362545857-3bc16549766b?q=80&w=1920&auto=format&fit=crop',
  local: 'hero-bg.jpg'
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    localSrc: 'hero-slide-1.jpg',
    fallbackSrc: 'https://images.unsplash.com/photo-1514362545857-3bc16549766b?q=80&w=1920&auto=format&fit=crop',
    alt: 'Main Bar Atmosphere'
  },
  {
    id: 2,
    localSrc: 'hero-slide-2.jpg',
    fallbackSrc: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1920&auto=format&fit=crop',
    alt: 'Crowded Event Space'
  },
  {
    id: 3,
    localSrc: 'hero-slide-3.jpg',
    fallbackSrc: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1920&auto=format&fit=crop',
    alt: 'Cocktail Detail'
  },
  {
    id: 4,
    localSrc: 'hero-slide-4.jpg',
    fallbackSrc: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=1920&auto=format&fit=crop',
    alt: 'Interior Architecture'
  },
  {
    id: 5,
    localSrc: 'hero-slide-5.jpg',
    fallbackSrc: 'https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?q=80&w=1920&auto=format&fit=crop',
    alt: 'Celebration Toast'
  }
];

export const HISTORY_ERAS: HistoryEra[] = [
  {
    id: '01',
    period: '1940S – 1990S',
    title: "The McCarthy's Era",
    description: "The \"Long Bar\" legend begins. Designed to accommodate shift workers and longshoremen, this was a cavernous, gritty institution. It represents the old-school, blue-collar history of the Mission.",
    image: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=600&auto=format&fit=crop',
    localImage: 'history-1.jpg'
  },
  {
    id: '02',
    period: '1997 – 2023',
    title: "The Cha Cha Cha Era",
    description: "The party destination. Famous for being loud, festive, and visually over-stimulated. The high ceilings and open floor plan turned dinner into a celebration.",
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=600&auto=format&fit=crop',
    localImage: 'history-2.jpg'
  },
  {
    id: '03',
    period: '2025',
    title: "Sangria & Salt",
    description: "We've stripped back the clutter to reveal the \"Good Bones\"—specifically the massive 140-foot mahogany bar. We combine the historic grit with chef-driven tapas and elevated service.",
    image: 'https://images.unsplash.com/photo-1560526860-2934e97cc5dd?q=80&w=600&auto=format&fit=crop',
    localImage: 'history-3.jpg'
  }
];

export const CAPABILITIES: Capability[] = [
  {
    id: 'buyout',
    title: 'Corporate Buyouts',
    guests: 'UP TO 250 GUESTS',
    description: 'Break the ice instantly in a venue with 80 years of history. Our open layout and historic energy make mingling easy. Perfect for team milestones and holiday parties.',
    icon: 'users',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop',
    localImage: 'cap-buyout.jpg'
  },
  {
    id: 'bar',
    title: 'The 140ft Bar',
    guests: 'SOCIAL DINING',
    description: 'Gather around the famous 140-foot dining counter. It is not just furniture; it is the social engine of the room, encouraging movement unlike any seated dinner.',
    icon: 'wine',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16549766b?q=80&w=800&auto=format&fit=crop',
    localImage: 'cap-bar.jpg'
  },
  {
    id: 'dining',
    title: 'Private Dining',
    guests: 'SEATED GROUPS',
    description: 'Intimate spaces carved out within the larger venue, perfect for focused conversation while still absorbing the vibrant atmosphere of the main hall.',
    icon: 'utensils',
    image: 'https://images.unsplash.com/photo-1561585854-46b7201389b7?q=80&w=800&auto=format&fit=crop',
    localImage: 'menu-cocktails.jpg'
  },
  {
    id: 'lounge',
    title: 'The Lounge',
    guests: 'COCKTAIL RECEPTIONS',
    description: 'A semi-private area perfect for happy hours and networking. Features plush seating and dedicated service while maintaining connection to the main venue energy.',
    icon: 'wine',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?q=80&w=800&auto=format&fit=crop',
    localImage: 'cap-lounge.jpg'
  }
];

export const MENU_TABS = ['TAPAS & DINNER', 'BRUNCH', 'COCKTAILS', 'WINE LIST'];

export const MENU_IMAGES: Record<string, MenuImageConfig> = {
  'TAPAS & DINNER': {
    fallback: 'https://images.unsplash.com/photo-1544025162-d76690b6d015?q=80&w=800&auto=format&fit=crop',
    local: 'menu-tapas.jpg',
    secondFallback: 'https://images.unsplash.com/photo-1536304993881-ff00228b4db1?q=80&w=800&auto=format&fit=crop',
    secondLocal: 'menu-tapas-2.jpg'
  },
  'BRUNCH': {
    fallback: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=800&auto=format&fit=crop',
    local: 'menu-brunch.jpg',
    secondFallback: 'https://images.unsplash.com/photo-1626202167592-31627993f350?q=80&w=800&auto=format&fit=crop',
    secondLocal: 'menu-brunch-2.jpg'
  },
  'COCKTAILS': {
    fallback: 'https://images.unsplash.com/photo-1561585854-46b7201389b7?q=80&w=800&auto=format&fit=crop',
    local: 'menu-cocktails.jpg',
    secondFallback: 'https://images.unsplash.com/photo-1514362545857-3bc16549766b?q=80&w=800&auto=format&fit=crop',
    secondLocal: 'menu-cocktails-2.jpg'
  },
  'WINE LIST': {
    fallback: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=800&auto=format&fit=crop',
    local: 'menu-wine.jpg',
    secondFallback: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800&auto=format&fit=crop',
    secondLocal: 'menu-wine-2.jpg'
  }
};

export const TAPAS_MENU: MenuItem[] = [
  { name: 'Patatas Bravas', description: 'Crispy fried potatoes, spicy tomato brava sauce, garlic aioli.' },
  { name: 'Gambas al Ajillo', description: 'Sautéed shrimp, garlic, chili flake, olive oil, grilled bread.' },
  { name: 'Croquetas de Jamón', description: 'Creamy béchamel fritters with serrano ham and quince paste.' },
  { name: 'Pulpo a la Gallega', description: 'Steamed octopus, potatoes, pimentón, olive oil, sea salt.' },
  { name: 'Albóndigas', description: 'Lamb and beef meatballs in rich tomato sauce with almonds.' },
  { name: 'Pan con Tomate', description: 'Toasted rustic bread rubbed with fresh tomato, garlic, and olive oil.' }
];

export const ENTREES_MENU: MenuItem[] = [
  { name: 'Paella Valenciana', description: 'Classic rice dish with chicken, rabbit, green beans, and garrofón beans.' },
  { name: 'Arroz Negro', description: 'Squid ink rice with cuttlefish, clams, and garlic aioli.' },
  { name: 'Chuletón de Buey', description: 'Grilled ribeye steak (30oz) to share, with roasted peppers.' },
  { name: 'Pescado del Día', description: 'Fresh market fish, roasted vegetables, lemon butter sauce.' }
];
