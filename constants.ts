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
  { id: 1, localSrc: 'hero-slide-1.jpg', fallbackSrc: '/hero-slide-1.jpg', alt: 'Main Bar Atmosphere' },
  { id: 2, localSrc: 'hero-slide-2.jpg', fallbackSrc: '/hero-slide-2.jpg', alt: 'Crowded Event Space' },
  { id: 3, localSrc: 'hero-slide-3.jpg', fallbackSrc: '/hero-slide-3.jpg', alt: 'Cocktail Detail' },
  { id: 4, localSrc: 'hero-slide-4.jpg', fallbackSrc: '/hero-slide-4.jpg', alt: 'Interior Architecture' },
  { id: 5, localSrc: 'hero-slide-5.jpg', fallbackSrc: '/hero-slide-5.jpg', alt: 'Celebration Toast' }
];

export const HISTORY_ERAS: HistoryEra[] = [
  {
    id: '01',
    period: '1940S – 1990S',
    title: "The McCarthy's Era",
    description: "The \"Long Bar\" legend begins. Designed to accommodate shift workers and longshoremen, this was a cavernous, gritty institution. It represents the old-school, blue-collar history of the Mission.",
    image: '/history-1.jpg',
    localImage: 'history-1.jpg'
  },
  {
    id: '02',
    period: '1997 – 2023',
    title: "The Cha Cha Cha Era",
    description: "The party destination. Famous for being loud, festive, and visually over-stimulated. The high ceilings and open floor plan turned dinner into a celebration.",
    image: '/history-2.jpg',
    localImage: 'history-2.jpg'
  },
  {
    id: '03',
    period: '2025',
    title: "Sangria & Salt",
    description: "A bar-forward Caribbean restaurant famous for sangria and tapas. We've revealed the \"Good Bones\" of this historic space—anchored by the massive 140-foot horseshoe bar, one of the longest on the West Coast.",
    image: '/history-3.jpg',
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
    image: '/cap-buyout.jpg',
    localImage: 'cap-buyout.jpg'
  },
  {
    id: 'bar',
    title: 'The 140ft Bar',
    guests: 'SOCIAL DINING',
    description: 'Gather around the famous 140-foot dining counter. It is not just furniture; it is the social engine of the room, encouraging movement unlike any seated dinner.',
    icon: 'wine',
    image: '/cap-bar.jpg',
    localImage: 'cap-bar.jpg'
  },
  {
    id: 'dining',
    title: 'Private Dining',
    guests: 'SEATED GROUPS',
    description: 'Intimate spaces carved out within the larger venue, perfect for focused conversation while still absorbing the vibrant atmosphere of the main hall.',
    icon: 'utensils',
    image: '/menu-cocktails.jpg',
    localImage: 'menu-cocktails.jpg'
  },
  {
    id: 'lounge',
    title: 'The Lounge',
    guests: 'COCKTAIL RECEPTIONS',
    description: 'A semi-private area perfect for happy hours and networking. Features plush seating and dedicated service while maintaining connection to the main venue energy.',
    icon: 'wine',
    image: '/cap-lounge.jpg',
    localImage: 'cap-lounge.jpg'
  }
];

export const MENU_TABS = ['TAPAS & DINNER', 'BRUNCH', 'COCKTAILS', 'WINE LIST'];

export const MENU_IMAGES: Record<string, MenuImageConfig> = {
  'TAPAS & DINNER': {
    fallback: '/menu-tapas.jpg',
    local: 'menu-tapas.jpg',
    secondFallback: '/menu-tapas-2.jpg',
    secondLocal: 'menu-tapas-2.jpg'
  },
  'BRUNCH': {
    fallback: '/menu-brunch.jpg',
    local: 'menu-brunch.jpg',
    secondFallback: 'https://images.unsplash.com/photo-1626202167592-31627993f350?q=80&w=800&auto=format&fit=crop',
    secondLocal: 'menu-brunch-2.jpg'
  },
  'COCKTAILS': {
    fallback: '/menu-cocktails.jpg',
    local: 'menu-cocktails.jpg',
    secondFallback: 'https://images.unsplash.com/photo-1514362545857-3bc16549766b?q=80&w=800&auto=format&fit=crop',
    secondLocal: 'menu-cocktails-2.jpg'
  },
  'WINE LIST': {
    fallback: '/menu-wine.jpg',
    local: 'menu-wine.jpg',
    secondFallback: '/menu-wine-2.jpg',
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
