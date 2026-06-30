export const BRAND = {
  name: 'Areon Athletic',
  tagline: 'Ropa y Accesorios de Alto Rendimiento',
  location: 'Pereira, Risaralda',
  shipping: 'Entregas en Pereira y Dosquebradas',
  phone: '573151571006',
  nequi: '3151571006',
  whatsapp: (product?: string) =>
    `https://wa.me/573151571006?text=${encodeURIComponent(
      product
        ? `Hola, quiero hacer un pedido de: ${product}`
        : 'Hola, me gustaría recibir más información sobre sus productos.'
    )}`,
  social: {
    facebook:  'https://www.facebook.com/tiendasareonathletic',
    instagram: 'https://www.instagram.com/areonathletic/',
  },
};

export const DOMICILIO = {
  minimo: 70000,
  costo: 9000,
};

const cld = (id: string) =>
  `https://res.cloudinary.com/dtymrddlg/image/upload/q_auto,f_auto,w_800/${id}`;

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  badge?: string;
  images: string[];
  description: string;
  nota?: string;
}

export const PRODUCTS: Product[] = [
  // ── GORRAS ──────────────────────────────────────────────────
  {
    id: 1,
    name: 'Gorra Selección Colombia Amarilla',
    category: 'Gorras',
    price: 49600,
    images: [
      cld('gorra_selecion_colombia_amarilla_principal_n4ke3u'),
      cld('gorra_selecion_colombia_amarilla_2_jjzbta'),
      cld('gorra_selecion_colombia_amarilla_1_maqsfp'),
    ],
    description: 'Gorra oficial de la Selección Colombia en color amarillo. Talla única ajustable. Material transpirable de alta calidad.',
  },
  {
    id: 2,
    name: 'Gorra Selección Colombia Blanca',
    category: 'Gorras',
    price: 49600,
    images: [
      cld('gorra_selecion_colombia_blanca_principal_wx6yo2'),
      cld('gorra_selecion_colombia_blanca_2_gpudev'),
      cld('gorra_selecion_colombia_blanca_1_wo8wdf'),
    ],
    description: 'Gorra oficial de la Selección Colombia en color blanco. Talla única ajustable. Diseño elegante y deportivo.',
  },
  {
    id: 3,
    name: 'Gorra Selección Colombia Negra',
    category: 'Gorras',
    price: 49600,
    images: [
      cld('gorra_selecion_colombia_negra_principal_ed2ct0'),
      cld('gorra_selecion_colombia_negra_1_ocgx59'),
    ],
    description: 'Gorra oficial de la Selección Colombia en color negro. Talla única ajustable. Perfecta para el día a día.',
  },
  {
    id: 4,
    name: 'Gorra Clásica Económica',
    category: 'Gorras',
    price: 19600,
    images: [
      cld('gorra_clasica_economica_principal_hpkwae'),
      cld('gorra_clasica_economica_1_z9occg'),
      cld('gorra_clasica_economica_2_o8cdc4'),
      cld('gorra_clasica_economica_3_pgkami'),
      cld('gorra_clasica_economica_4_fk89cq'),
      cld('gorra_clasica_economica_5_aegwp6'),
      cld('gorra_clasica_economica_6_hq6n69'),
      cld('gorra_clasica_economica_7_vrgjpe'),
    ],
    description: 'Gorra clásica disponible en varios colores. Talla única ajustable. Cómoda y resistente para el uso diario.',
  },

  // ── CAMISETAS ───────────────────────────────────────────────
  {
    id: 5,
    name: 'Camiseta Bordada Selección Colombia Amarilla',
    category: 'Camisetas',
    price: 69600,
    badge: '🌟 Mundialista',
    images: [
      cld('camiseta_amarila_selecion_colombia_bordada_principal_j3ydm9'),
      cld('camiseta_amarila_selecion_colombia_bordada_2_wvqhh6'),
      cld('camiseta_amarila_selecion_colombia_bordada_1_wrvhay'),
    ],
    description: 'Camiseta bordada oficial de la Selección Colombia en color amarillo. Tallas: S, M, L, XL. Viene en empaque mundialista con banderín de obsequio.',
    nota: 'Incluye banderín para carro o moto de regalo 🎁',
  },
  {
    id: 6,
    name: 'Camiseta Encauchetada Selección Colombia Amarilla',
    category: 'Camisetas',
    price: 79600,
    badge: '🌟 Mundialista',
    images: [
      cld('camiseta_amarilla_encauchetada_selecion_colombia_principal_mfugyy'),
      cld('camiseta_amarilla_encauchetada_selecion_colombia_2_zfortw'),
      cld('camiseta_amarilla_encauchetada_selecion_colombia_1_r4l3ad'),
    ],
    description: 'Camiseta encauchetada de la Selección Colombia en color amarillo. Tallas: S, M, L, XL. Material premium resistente y cómodo.',
    nota: 'Incluye banderín para carro o moto de regalo 🎁',
  },
  {
    id: 7,
    name: 'Camiseta Bordada Selección Colombia Azul',
    category: 'Camisetas',
    price: 79600,
    badge: '🌟 Mundialista',
    images: [
      cld('camiseta_azul_selecion_colombia_bordada_principal_lxor6s'),
      cld('camiseta_azul_selecion_colombia_bordada_2_dsjt9x'),
      cld('camiseta_azul_selecion_colombia_bordada_1_khfxov'),
    ],
    description: 'Camiseta bordada oficial de la Selección Colombia en color azul. Tallas: S, M, L, XL. La favorita de los hinchas.',
    nota: 'Incluye banderín para carro o moto de regalo 🎁',
  },

  // ── BERMUDAS ────────────────────────────────────────────────
  {
    id: 8,
    name: 'Bermuda Deportiva Azul',
    category: 'Bermudas',
    price: 46900,
    images: [cld('bermuda_azul_javpvf')],
    description: 'Bermuda deportiva en color azul. Tallas: S, M, L, XL. Material ligero y transpirable, perfecta para el entrenamiento.',
  },
  {
    id: 9,
    name: 'Bermuda Deportiva Blanca',
    category: 'Bermudas',
    price: 46900,
    images: [cld('bermuda_blanca_ql7mdy')],
    description: 'Bermuda deportiva en color blanco. Tallas: S, M, L, XL. Estilo clásico para el deporte y el día a día.',
  },
  {
    id: 10,
    name: 'Bermuda Beige Nike',
    category: 'Bermudas',
    price: 46900,
    images: [cld('bermuda_beige_nike_etxetp')],
    description: 'Bermuda estilo Nike en color beige. Tallas: S, M, L, XL. Comodidad y estilo en una sola prenda.',
  },
  {
    id: 11,
    name: 'Bermuda Beige Adidas',
    category: 'Bermudas',
    price: 46900,
    images: [cld('bermuda_beige_adidas_nszqn7')],
    description: 'Bermuda estilo Adidas en color beige. Tallas: S, M, L, XL. Diseño moderno y funcional.',
  },
  {
    id: 12,
    name: 'Bermuda Verde Claro',
    category: 'Bermudas',
    price: 46900,
    images: [cld('bermuda_verde_claro_nvswwm')],
    description: 'Bermuda deportiva en color verde claro. Tallas: S, M, L, XL. Fresca y ligera para el calor.',
  },
  {
    id: 13,
    name: 'Bermuda Verde Oscuro',
    category: 'Bermudas',
    price: 46900,
    images: [cld('bermuda_verde_oscuro_xxcunc')],
    description: 'Bermuda deportiva en color verde oscuro. Tallas: S, M, L, XL. Versátil y resistente.',
  },

  // ── PANTALONETAS ────────────────────────────────────────────
  {
    id: 14,
    name: 'Pantaloneta Deportiva Negra Adidas',
    category: 'Pantalonetas',
    price: 20000,
    images: [cld('pantaloneta_deportiva_negra_adidas_fac9di')],
    description: 'Pantaloneta deportiva estilo Adidas en color negro. Tallas: S, M, L, XL. Ideal para entrenamiento y fútbol.',
  },
  {
    id: 15,
    name: 'Pantaloneta Deportiva Negra Puma',
    category: 'Pantalonetas',
    price: 20000,
    images: [cld('pantaloneta_deportiva_negra_puma_h55rze')],
    description: 'Pantaloneta deportiva estilo Puma en color negro. Tallas: S, M, L, XL. Comodidad máxima para el deporte.',
  },
  {
    id: 16,
    name: 'Pantaloneta Deportiva Azul Puma',
    category: 'Pantalonetas',
    price: 20000,
    images: [cld('pantaloneta_deportiva_azul_puma_ldne5u')],
    description: 'Pantaloneta deportiva estilo Puma en color azul. Tallas: S, M, L, XL.',
  },
  {
    id: 17,
    name: 'Pantaloneta Deportiva Under Armour',
    category: 'Pantalonetas',
    price: 20000,
    images: [cld('pantaloneta_deportiva_underarmour_nzaf9o')],
    description: 'Pantaloneta deportiva estilo Under Armour. Tallas: S, M, L, XL. Diseño premium para alto rendimiento.',
  },
  {
    id: 18,
    name: 'Pantaloneta Negra con Rayas',
    category: 'Pantalonetas',
    price: 20000,
    images: [cld('pantaloneta_deportiva_negra_con_rallas_nftrmm')],
    description: 'Pantaloneta deportiva negra con rayas laterales. Tallas: S, M, L, XL. Estilo clásico del deporte.',
  },

  // ── MEDIAS ──────────────────────────────────────────────────
  {
    id: 19,
    name: 'Medias Tobilleras Caballero x3',
    category: 'Medias',
    price: 5000,
    images: [cld('medias_tobillera_para_caballero_gk5gkl')],
    description: 'Pack de 3 medias tobilleras para caballero. Cómodas y duraderas para el uso diario y el deporte.',
  },
  {
    id: 20,
    name: 'Medias Tobilleras Mujer x3',
    category: 'Medias',
    price: 5000,
    images: [cld('medias_tobillera_mujer_a3u8xb')],
    description: 'Pack de 3 medias tobilleras para mujer. Diseño femenino y cómodo para el deporte y el día a día.',
  },
  {
    id: 21,
    name: 'Medias Clásicas Caballero x3',
    category: 'Medias',
    price: 5000,
    images: [cld('medias_clasica_para_caballero_vaiqku')],
    description: 'Pack de 3 medias clásicas para caballero. Resistentes y cómodas para el uso diario.',
  },
  {
    id: 22,
    name: 'Medias Antideslizantes',
    category: 'Medias',
    price: 15900,
    images: [cld('medias_antideslizante_oqhrtj')],
    description: 'Medias antideslizantes de alta sujeción. Ideales para yoga, pilates y entrenamiento en gimnasio.',
  },
  {
    id: 23,
    name: 'Medias Deportivas de Fútbol',
    category: 'Medias',
    price: 6000,
    images: [cld('medias_deportiva_futboll_oapyad')],
    description: 'Medias deportivas largas para fútbol. Material resistente y transpirable. Talla única.',
  },

  // ── CANILLERAS ──────────────────────────────────────────────
  {
    id: 24,
    name: 'Canilleras Pequeña y Mediana',
    category: 'Canilleras',
    price: 15600,
    images: [cld('canilleras_pequeñas_y_mediana_eayjq3')],
    description: 'Canilleras disponibles en talla pequeña y mediana. Protección esencial para el fútbol y deportes de contacto.',
  },

  // ── MUNDIALISTA ─────────────────────────────────────────────
  {
    id: 25,
    name: 'Poncho Selección Colombia',
    category: 'Mundialista',
    price: 27600,
    images: [cld('poncho_selecion_colombia_fqkc3f')],
    description: 'Poncho oficial de la Selección Colombia. Ideal para los partidos y eventos deportivos. Talla única.',
  },
  {
    id: 26,
    name: 'Banderín Selección Colombia',
    category: 'Mundialista',
    price: 5000,
    images: [cld('banderin_para_carro_o_moto_iobia6')],
    description: 'Banderín de la Selección Colombia para carro o moto. Muestra tu apoyo a la tricolor donde vayas.',
  },
];

export const STATS = [
  { value: '5K+',  label: 'Clientes satisfechos' },
  { value: '200+', label: 'Productos disponibles' },
  { value: '5★',   label: 'Calificación promedio' },
  { value: '24h',  label: 'Entrega Pereira y Dosquebradas' },
];

export const FEATURES = [
  {
    icon: '🚚',
    title: 'Entrega al Día Siguiente',
    desc: 'Pedidos en Pereira y Dosquebradas. Entregamos al día siguiente (lunes si es sábado).',
  },
  {
    icon: '💳',
    title: 'Pago al Recibir',
    desc: 'Paga en efectivo o por Nequi al momento de recibir tu pedido. Sin complicaciones.',
  },
  {
    icon: '🎁',
    title: 'Envío Gratis',
    desc: 'Pedidos desde $70.000 tienen envío gratis. Por debajo solo $9.000 de domicilio.',
  },
  {
    icon: '💬',
    title: 'Atención por WhatsApp',
    desc: 'Resolvemos tus dudas al instante. Escríbenos y te asesoramos en segundos.',
  },
];
