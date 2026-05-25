import Link from 'next/link';
import { ArrowLeft, MessageCircle } from 'lucide-react';
import { CATEGORIES, waLink, type Category } from '@/lib/categories';
import CategoryProductCard from '@/components/ui/CategoryProductCard';

export default function CategoryPageTemplate({ category }: { category: Category }) {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">

      {/* Top nav bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0aee] backdrop-blur-md border-b border-[#1f1f1f]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 select-none">
            <span className="font-bebas text-xl tracking-[4px]" style={{ color: '#00e5ff' }}>AREON</span>
            <span className="font-bebas text-xl tracking-[4px]" style={{ color: '#ff003c' }}>ATHLETIC</span>
          </Link>
          <Link
            href="/#productos"
            className="inline-flex items-center gap-2 text-xs font-bold tracking-[2px] uppercase text-[#6b7280] hover:text-[#00e5ff] transition-colors"
          >
            <ArrowLeft size={13} />
            Volver
          </Link>
        </div>
      </div>

      {/* Hero de categoría */}
      <div
        className="relative pt-16 pb-16 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, #0a0a0a 0%, ${category.color}0a 100%)`,
          borderBottom: `1px solid ${category.color}22`,
        }}
      >
        {/* Grid de fondo */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(${category.color}08 1px, transparent 1px), linear-gradient(90deg, ${category.color}08 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />
        {/* Glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] rounded-full pointer-events-none"
          style={{ background: `radial-gradient(ellipse, ${category.color}0d 0%, transparent 70%)` }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-[#6b7280] mb-6">
            <Link href="/" className="hover:text-[#00e5ff] transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/#productos" className="hover:text-[#00e5ff] transition-colors">Productos</Link>
            <span>/</span>
            <span style={{ color: category.color }}>{category.name}</span>
          </div>

          <div className="flex items-start gap-6">
            <span className="text-6xl">{category.emoji}</span>
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-3 text-[10px] font-bold tracking-[2px] uppercase"
                style={{ borderColor: `${category.color}44`, color: category.color, background: `${category.color}0d` }}
              >
                {category.products.length} productos disponibles
              </div>
              <h1 className="font-bebas text-[clamp(40px,6vw,72px)] tracking-[3px] leading-none text-[#f0f0f0] mb-3">
                {category.name}
              </h1>
              <p className="text-sm text-[#6b7280] max-w-lg leading-relaxed">
                {category.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Grid de productos */}
      <main className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {category.products.map(product => (
            <CategoryProductCard
              key={product.id}
              product={product}
              accentColor={category.color}
            />
          ))}
        </div>

        {/* CTA WhatsApp */}
        <div className="text-center border border-[#1f1f1f] bg-[#111111] p-10">
          <p className="text-xs font-bold tracking-[3px] uppercase mb-3" style={{ color: category.color }}>
            ¿No encuentras lo que buscas?
          </p>
          <h2 className="font-bebas text-3xl md:text-4xl tracking-[3px] text-[#f0f0f0] mb-3">
            Escríbenos y lo conseguimos
          </h2>
          <p className="text-sm text-[#6b7280] mb-6">
            Atención personalizada desde <strong className="text-[#f0f0f0]">Pereira, Risaralda</strong>. Respondemos al instante.
          </p>
          <a
            href={waLink(`un producto de ${category.name}`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 font-bold text-sm tracking-[2px] uppercase text-[#0a0a0a] transition-colors duration-200 btn-angled"
            style={{ background: category.color }}
          >
            <MessageCircle size={16} />
            Preguntar por WhatsApp
          </a>
        </div>

        {/* Otras categorías */}
        <div className="mt-16">
          <p className="text-xs font-bold tracking-[3px] uppercase text-[#6b7280] mb-6">
            Otras categorías
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {CATEGORIES.filter(c => c.slug !== category.slug).map(c => (
              <Link
                key={c.slug}
                href={`/${c.slug}`}
                className="group flex flex-col items-center gap-2 p-4 bg-[#111111] border border-[#1f1f1f] hover:border-[#00e5ff33] transition-all duration-200 text-center"
              >
                <span className="text-3xl">{c.emoji}</span>
                <span className="text-xs font-semibold text-[#6b7280] group-hover:text-[#f0f0f0] transition-colors leading-tight">
                  {c.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
