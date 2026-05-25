export interface CategoryProduct {
  id: number;
  name: string;
  price: string;
  badge?: string;
  emoji: string;
  image?: string;
  description?: string;
}

export interface Category {
  slug: string;
  name: string;
  emoji: string;
  description: string;
  color: string; // acento visual por categoría
  products: CategoryProduct[];
}

export const WHATSAPP_NUMBER = '573151571006';

export const waLink = (productName: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hola, me interesa el producto: ${productName}`
  )}`;

export const CATEGORIES: Category[] = [
  {
    slug: 'camisetas',
    name: 'Camisetas',
    emoji: '👕',
    color: '#00e5ff',
    description: 'Camisetas técnicas y deportivas para máximo rendimiento en cancha y gimnasio.',
    products: [
      { id: 1,  name: 'Camiseta Técnica Dry-Fit Areon Athletic',         price: '$89.000',  badge: '🔥 Top ventas', emoji: '👕' },
      { id: 2,  name: 'Camiseta Selección Colombia Areon Athletic',       price: '$95.000',  badge: '⭐ Premium',   emoji: '🇨🇴' },
      { id: 3,  name: 'Camiseta Polo Deportiva Hombre Areon Athletic',    price: '$82.000',  emoji: '👔' },
      { id: 4,  name: 'Camiseta Térmica Compresión Areon Athletic',       price: '$75.000',  badge: '⚡ Nuevo',     emoji: '💪' },
      { id: 5,  name: 'Camiseta Mujer Deportiva Areon Athletic',          price: '$78.000',  emoji: '👚' },
      { id: 6,  name: 'Camiseta Sin Mangas Entrenamiento Areon Athletic', price: '$65.000',  emoji: '🏋️' },
    ],
  },
  {
    slug: 'gorras',
    name: 'Gorras',
    emoji: '🧢',
    color: '#ff003c',
    description: 'Gorras oficiales y deportivas con protección UV y diseño exclusivo Areon Athletic.',
    products: [
      { id: 1,  name: 'Gorra Oficial Selección Colombia Areon Athletic',  price: '$65.000',  badge: '🔥 Top ventas', emoji: '🧢' },
      { id: 2,  name: 'Gorra Running Dry-Fit Areon Athletic',             price: '$55.000',  emoji: '🏃' },
      { id: 3,  name: 'Gorra Snapback Areon Athletic Logo',               price: '$60.000',  badge: '⚡ Nuevo',     emoji: '🎩' },
      { id: 4,  name: 'Gorra Dad Hat Areon Athletic',                     price: '$58.000',  emoji: '🧢' },
      { id: 5,  name: 'Gorra Visera Deportiva Areon Athletic',            price: '$45.000',  emoji: '☀️' },
      { id: 6,  name: 'Gorra Térmica Invierno Areon Athletic',            price: '$52.000',  emoji: '🌨️' },
    ],
  },
  {
    slug: 'mangas',
    name: 'Mangas / Fundas de Brazo',
    emoji: '💪',
    color: '#00e5ff',
    description: 'Mangas de compresión y fundas de brazo para protección y rendimiento en todo deporte.',
    products: [
      { id: 1,  name: 'Manga Compresión UV Areon Athletic',               price: '$35.000',  badge: '🔥 Top ventas', emoji: '💪' },
      { id: 2,  name: 'Funda Brazo Running Areon Athletic',               price: '$32.000',  emoji: '🏃' },
      { id: 3,  name: 'Manga Térmica Deportiva Areon Athletic',           price: '$38.000',  badge: '⚡ Nuevo',     emoji: '❄️' },
      { id: 4,  name: 'Manga Antideslizante Fútbol Areon Athletic',       price: '$30.000',  emoji: '⚽' },
      { id: 5,  name: 'Funda Brazo Ciclismo Areon Athletic',              price: '$36.000',  emoji: '🚴' },
      { id: 6,  name: 'Pack x2 Mangas Compresión Areon Athletic',         price: '$58.000',  badge: '💎 Pack',      emoji: '🎁' },
    ],
  },
  {
    slug: 'pantalonetas',
    name: 'Pantalonetas',
    emoji: '🩳',
    color: '#ff003c',
    description: 'Pantalonetas deportivas con tecnología de secado rápido y máxima libertad de movimiento.',
    products: [
      { id: 1,  name: 'Pantaloneta Compresión Pro Areon Athletic',        price: '$75.000',  badge: '⚡ Nuevo',     emoji: '🩳' },
      { id: 2,  name: 'Pantaloneta Fútbol Areon Athletic',                price: '$68.000',  badge: '🔥 Top ventas', emoji: '⚽' },
      { id: 3,  name: 'Pantaloneta Running Dry-Fit Areon Athletic',       price: '$72.000',  emoji: '🏃' },
      { id: 4,  name: 'Pantaloneta Gym Hombre Areon Athletic',            price: '$65.000',  emoji: '🏋️' },
      { id: 5,  name: 'Licra Pantaloneta Mujer Areon Athletic',           price: '$78.000',  emoji: '🩱' },
      { id: 6,  name: 'Pantaloneta Ciclismo Areon Athletic',              price: '$85.000',  badge: '⭐ Premium',   emoji: '🚴' },
    ],
  },
  {
    slug: 'bermudas',
    name: 'Bermudas',
    emoji: '🏄',
    color: '#00e5ff',
    description: 'Bermudas deportivas y casuales para entrenamiento, playa y uso diario.',
    products: [
      { id: 1,  name: 'Bermuda Deportiva Hombre Areon Athletic',          price: '$72.000',  badge: '🔥 Top ventas', emoji: '🏄' },
      { id: 2,  name: 'Bermuda Dry-Fit Areon Athletic',                   price: '$68.000',  emoji: '🌊' },
      { id: 3,  name: 'Bermuda Playa Areon Athletic',                     price: '$65.000',  badge: '⚡ Nuevo',     emoji: '🏖️' },
      { id: 4,  name: 'Bermuda Gym Areon Athletic',                       price: '$70.000',  emoji: '🏋️' },
      { id: 5,  name: 'Bermuda Cargo Deportiva Areon Athletic',           price: '$78.000',  emoji: '🎒' },
      { id: 6,  name: 'Bermuda Ciclismo Acolchada Areon Athletic',        price: '$95.000',  badge: '⭐ Premium',   emoji: '🚴' },
    ],
  },
  {
    slug: 'guayos',
    name: 'Guayos',
    emoji: '⚽',
    color: '#ff003c',
    description: 'Guayos profesionales para cancha natural y sintética. Agarre, control y potencia.',
    products: [
      { id: 1,  name: 'Guayo Cancha Sintética Areon Athletic',            price: '$180.000', badge: '🔥 Top ventas', emoji: '⚽' },
      { id: 2,  name: 'Guayo Cancha Natural Areon Athletic',              price: '$220.000', badge: '⭐ Premium',   emoji: '🌿' },
      { id: 3,  name: 'Guayo Niño Fútbol Areon Athletic',                 price: '$120.000', badge: '⚡ Nuevo',     emoji: '👦' },
      { id: 4,  name: 'Guayo Sala Indoor Areon Athletic',                 price: '$150.000', emoji: '🏟️' },
      { id: 5,  name: 'Guayo Mujer Fútbol Areon Athletic',                price: '$165.000', emoji: '👩' },
      { id: 6,  name: 'Guayo Pro Competición Areon Athletic',             price: '$280.000', badge: '💎 Exclusivo', emoji: '🏆' },
    ],
  },
  {
    slug: 'zapatillas',
    name: 'Zapatillas',
    emoji: '👟',
    color: '#00e5ff',
    description: 'Zapatillas deportivas para running, gym, crossfit y uso diario. Comodidad y estilo.',
    products: [
      { id: 1,  name: 'Zapatilla Running Areon Athletic',                 price: '$250.000', badge: '🔥 Top ventas', emoji: '👟' },
      { id: 2,  name: 'Zapatilla Gym Training Areon Athletic',            price: '$220.000', emoji: '🏋️' },
      { id: 3,  name: 'Zapatilla Crossfit Areon Athletic',                price: '$280.000', badge: '⭐ Premium',   emoji: '💪' },
      { id: 4,  name: 'Zapatilla Casual Deportiva Areon Athletic',        price: '$195.000', badge: '⚡ Nuevo',     emoji: '😎' },
      { id: 5,  name: 'Zapatilla Mujer Running Areon Athletic',           price: '$240.000', emoji: '🌸' },
      { id: 6,  name: 'Zapatilla Niño Areon Athletic',                    price: '$160.000', emoji: '👦' },
    ],
  },
  {
    slug: 'medias',
    name: 'Medias',
    emoji: '🧦',
    color: '#ff003c',
    description: 'Medias deportivas de alta compresión, anti-ampollas y secado rápido para todo deporte.',
    products: [
      { id: 1,  name: 'Medias Deportivas Alto Rendimiento Areon Athletic', price: '$28.000', badge: '🔥 Top ventas', emoji: '🧦' },
      { id: 2,  name: 'Medias Fútbol Antideslizante Areon Athletic',       price: '$32.000', emoji: '⚽' },
      { id: 3,  name: 'Medias Compresión Running Areon Athletic',          price: '$35.000', badge: '⚡ Nuevo',     emoji: '🏃' },
      { id: 4,  name: 'Medias Gym Cortas Areon Athletic',                  price: '$22.000', emoji: '🏋️' },
      { id: 5,  name: 'Pack x3 Medias Areon Athletic',                     price: '$65.000', badge: '💎 Pack',      emoji: '🎁' },
      { id: 6,  name: 'Medias Térmicas Invierno Areon Athletic',           price: '$38.000', emoji: '❄️' },
    ],
  },
  {
    slug: 'trompetas',
    name: 'Trompetas / Pitos',
    emoji: '📯',
    color: '#00e5ff',
    description: 'Pitos y trompetas para árbitros, entrenadores y aficionados. Potencia y durabilidad.',
    products: [
      { id: 1,  name: 'Pito Árbitro Profesional Areon Athletic',          price: '$25.000', badge: '🔥 Top ventas', emoji: '📯' },
      { id: 2,  name: 'Trompeta Estadio Areon Athletic',                   price: '$18.000', emoji: '📣' },
      { id: 3,  name: 'Pito Fox40 Areon Athletic',                         price: '$35.000', badge: '⭐ Premium',   emoji: '🎵' },
      { id: 4,  name: 'Pito Entrenador con Cordón Areon Athletic',         price: '$22.000', badge: '⚡ Nuevo',     emoji: '🏃' },
      { id: 5,  name: 'Pack Pito + Tarjetas Árbitro Areon Athletic',       price: '$55.000', badge: '💎 Pack',      emoji: '🎁' },
      { id: 6,  name: 'Trompeta Vuvuzela Areon Athletic',                  price: '$15.000', emoji: '🎺' },
    ],
  },
  {
    slug: 'canillares',
    name: 'Canillares',
    emoji: '🦵',
    color: '#ff003c',
    description: 'Canilleras deportivas con protección de impacto y sujeción perfecta para fútbol y más.',
    products: [
      { id: 1,  name: 'Canillera Fútbol Profesional Areon Athletic',      price: '$45.000', badge: '🔥 Top ventas', emoji: '🦵' },
      { id: 2,  name: 'Canillera Niño Fútbol Areon Athletic',             price: '$32.000', emoji: '👦' },
      { id: 3,  name: 'Canillera con Media Integrada Areon Athletic',     price: '$58.000', badge: '⭐ Premium',   emoji: '🧦' },
      { id: 4,  name: 'Canillera Ligera Running Areon Athletic',          price: '$38.000', badge: '⚡ Nuevo',     emoji: '🏃' },
      { id: 5,  name: 'Pack x2 Canilleras Areon Athletic',               price: '$72.000', badge: '💎 Pack',      emoji: '🎁' },
      { id: 6,  name: 'Canillera Pro Competición Areon Athletic',        price: '$65.000', emoji: '🏆' },
    ],
  },
];

export const getCategoryBySlug = (slug: string) =>
  CATEGORIES.find(c => c.slug === slug);
