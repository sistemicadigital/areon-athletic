export const BRAND = {
  name: 'Areon Athletic',
  tagline: 'Ropa y Accesorios de Alto Rendimiento',
  location: 'Pereira, Risaralda',
  shipping: 'Envíos rápidos a todo el eje cafetero',
  phone: '573151571006',
  whatsapp: (product?: string) =>
    `https://wa.me/573151571006?text=${encodeURIComponent(
      product
        ? `Hola, me interesa el producto: ${product}`
        : 'Hola, me gustaría recibir más información sobre sus productos.'
    )}`,
  social: {
    facebook:  'https://www.facebook.com/tiendasareonathletic',
    instagram: 'https://www.instagram.com/areonathletic/',
  },
};

export interface Product {
  id: number;
  name:     string;
  category: string;
  price:    string;
  badge?:   string;
  emoji:    string;
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name:     'Gorra Oficial Selección Colombia - Areon Athletic',
    category: 'Accesorios',
    price:    '$65.000',
    badge:    '🔥 Top ventas',
    emoji:    '🧢',
  },
  {
    id: 2,
    name:     'Camiseta Técnica Dry-Fit Areon Athletic',
    category: 'Ropa',
    price:    '$89.000',
    emoji:    '👕',
  },
  {
    id: 3,
    name:     'Pantaloneta Deportiva Compresión Pro - Areon Athletic',
    category: 'Ropa',
    price:    '$75.000',
    badge:    '⚡ Nuevo',
    emoji:    '🩳',
  },
  {
    id: 4,
    name:     'Medias Deportivas Alto Rendimiento Areon Athletic',
    category: 'Accesorios',
    price:    '$28.000',
    emoji:    '🧦',
  },
  {
    id: 5,
    name:     'Maletín Gym Areon Athletic - Resistente al agua',
    category: 'Accesorios',
    price:    '$120.000',
    badge:    '⭐ Premium',
    emoji:    '🎒',
  },
  {
    id: 6,
    name:     'Licra de Entrenamiento Mujer - Areon Athletic',
    category: 'Ropa',
    price:    '$95.000',
    emoji:    '🩱',
  },
  {
    id: 7,
    name:     'Camiseta Polo Deportiva Hombre - Areon Athletic',
    category: 'Ropa',
    price:    '$82.000',
    badge:    '🔥 Top ventas',
    emoji:    '👔',
  },
  {
    id: 8,
    name:     'Riñonera Deportiva Impermeable - Areon Athletic',
    category: 'Accesorios',
    price:    '$55.000',
    emoji:    '👜',
  },
  {
    id: 9,
    name:     'Kit Entrenamiento Completo - Areon Athletic',
    category: 'Kits',
    price:    '$220.000',
    badge:    '💎 Exclusivo',
    emoji:    '🏋️',
  },
];

export const STATS = [
  { value: '5K+',  label: 'Clientes satisfechos' },
  { value: '200+', label: 'Productos disponibles' },
  { value: '5★',   label: 'Calificación promedio' },
  { value: '24h',  label: 'Envío eje cafetero' },
];

export const FEATURES = [
  {
    icon: '🚚',
    title: 'Envío Rápido',
    desc: 'Despachos a Pereira, Manizales, Armenia y toda Colombia.',
  },
  {
    icon: '✅',
    title: 'Calidad Garantizada',
    desc: 'Productos seleccionados para resistir el entrenamiento más exigente.',
  },
  {
    icon: '💬',
    title: 'Atención Personalizada',
    desc: 'Te asesoramos por WhatsApp para encontrar el producto ideal.',
  },
  {
    icon: '💳',
    title: 'Múltiples Pagos',
    desc: 'Efectivo, transferencia, Nequi, Daviplata y contraentrega.',
  },
];
