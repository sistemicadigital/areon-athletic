import { getCategoryBySlug } from '@/lib/categories';
import CategoryPageTemplate from '@/components/ui/CategoryPageTemplate';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const cat = getCategoryBySlug('mangas');
  if (!cat) return {};
  return {
    title: `${cat.name} Deportivas en Pereira | Areon Athletic`,
    description: `Compra ${cat.name.toLowerCase()} deportivas de alto rendimiento en Pereira, Risaralda. Areon Athletic — envíos a todo el eje cafetero. Pide por WhatsApp.`,
  };
}

export default function Page() {
  const category = getCategoryBySlug('mangas');
  if (!category) notFound();
  return <CategoryPageTemplate category={category} />;
}
