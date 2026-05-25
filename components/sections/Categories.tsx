import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { CATEGORIES } from '@/lib/categories';

export default function Categories() {
  return (
    <section
      id="categorias"
      className="bg-[#0a0a0a] py-24 relative"
      aria-label="Categorías de productos deportivos"
    >
      {/* Grid de fondo */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,229,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.04) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#ff003c33] bg-[#ff003c0d] mb-5">
            <span className="text-[10px] font-bold text-[#ff003c] tracking-[0.18em] uppercase">
              Explora por categoría
            </span>
          </div>
          <h2 className="font-bebas text-[clamp(36px,5vw,60px)] tracking-[3px] text-[#f0f0f0] mb-3">
            Todo lo que necesitas
          </h2>
          <p className="text-sm text-[#6b7280] max-w-md mx-auto leading-relaxed">
            Ropa y accesorios deportivos en Pereira, Risaralda. Selecciona una categoría y pide directo por WhatsApp.
          </p>
        </div>

        {/* Grid de categorías */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {CATEGORIES.map((cat, i) => (
            <Link
              key={cat.slug}
              href={`/${cat.slug}`}
              className="group relative bg-[#111111] border border-[#1f1f1f] p-5 flex flex-col items-center gap-3 text-center transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              style={{
                ['--accent' as string]: cat.color,
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{ background: `radial-gradient(circle at 50% 30%, ${cat.color}12 0%, transparent 70%)` }}
              />
              {/* Top border accent on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${cat.color}88, transparent)` }}
              />

              {/* Number */}
              <span
                className="absolute top-2 right-3 font-bebas text-4xl opacity-[0.06] pointer-events-none select-none"
                style={{ color: cat.color }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>

              <span className="text-4xl transition-transform duration-300 group-hover:scale-110 relative z-10">
                {cat.emoji}
              </span>
              <div className="relative z-10">
                <p className="text-sm font-bold text-[#f0f0f0] group-hover:text-white transition-colors leading-tight mb-1">
                  {cat.name}
                </p>
                <p className="text-[10px] text-[#4b5563] group-hover:text-[#6b7280] transition-colors">
                  {cat.products.length} productos
                </p>
              </div>
              <div
                className="relative z-10 flex items-center gap-1 text-[10px] font-bold tracking-[1px] uppercase opacity-0 group-hover:opacity-100 transition-all duration-200 -mt-1"
                style={{ color: cat.color }}
              >
                Ver todos <ArrowRight size={9} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
