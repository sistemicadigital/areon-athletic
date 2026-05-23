import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tienda Deportiva en Pereira | Areon Athletic - Ropa y Accesorios de Alto Rendimiento',
  description:
    'Areon Athletic: tu tienda deportiva en Pereira, Risaralda. Ropa deportiva, gorras, accesorios y equipamiento de alto rendimiento. Envíos rápidos a todo el eje cafetero — Manizales, Armenia y Colombia. ¡Pide por WhatsApp!',
  keywords: [
    'tienda deportiva en Pereira',
    'ropa deportiva Risaralda',
    'accesorios de entrenamiento Pereira',
    'ropa deportiva eje cafetero',
    'Areon Athletic',
    'tienda deportiva Colombia',
    'gorras deportivas Pereira',
    'uniformes deportivos Risaralda',
    'gym ropa Pereira',
  ],
  openGraph: {
    title: 'Areon Athletic | Tienda Deportiva en Pereira',
    description: 'Ropa y accesorios deportivos de alto rendimiento. Ubicados en Pereira, Risaralda. Envíos a todo el eje cafetero.',
    url: 'https://areonathletic.com',
    siteName: 'Areon Athletic',
    locale: 'es_CO',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Areon Athletic - Tienda Deportiva Pereira' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Areon Athletic | Tienda Deportiva en Pereira',
    description: 'Ropa y accesorios deportivos de alto rendimiento en Pereira, Risaralda.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://areonathletic.com' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-CO">
      <head>
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SportingGoodsStore',
              name: 'Areon Athletic',
              description: 'Tienda deportiva en Pereira con ropa y accesorios de alto rendimiento.',
              url: 'https://areonathletic.com',
              telephone: '+573151571006',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Pereira',
                addressRegion: 'Risaralda',
                addressCountry: 'CO',
              },
              sameAs: [
                'https://www.facebook.com/tiendasareonathletic',
                'https://www.instagram.com/areonathletic/',
              ],
              openingHours: 'Mo-Sa 09:00-19:00',
              priceRange: '$$',
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
