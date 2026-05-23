'use client';

import { useState } from 'react';
import { PRODUCTS, BRAND, type Product } from '@/lib/constants';
import { MessageCircle, ArrowRight } from 'lucide-react';

function ProductCard({ product }: { product: Product }) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className="group relative bg-[#111111] border border-[#1f1f1f] overflow-hidden transition-all duration-300 cursor-pointer"
      style={{
        borderColor: hovered ? 'rgba(0,229,255,0.25)' : undefined,
        transform: hovered ? 'translateY(-4px)' : undefined,
        boxShadow: hovered ? '0 12px 40px rgba(0,229,255,0.1)' : undefined,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-block px-2.5 py-1 text-[10px] font-bold tracking-[1px] bg-[#ff003c] text-white">
            {product.badge}
          </span>
        </div>
      )}

      {/* Emoji visual */}
      <div
        className="relative h-40 flex items-center justify-center bg-[#161616] border-b border-[#1f1f1f] overflow-hidden"
        style={{
          background: hovered
            ? 'linear-gradient(135deg, #161616 0%, rgba(0,229,255,0.05) 100%)'
            : '#161616',
        }}
      >
        {/* 3D-ish glow blob */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(0,229,255,0.12) 0%, transparent 65%)',
          }}
        />
        <span className="text-7xl select-none" style={{ filter: hovered ? 'drop-shadow(0 0 16px rgba(0,229,255,0.5))' : undefined }}>
          {product.emoji}
        </span>
        {/* Corner decoration */}
        <div className="absolute bottom-2 right-2 w-10 h-10 border-b border-r border-[#00e5ff22]" />
        <div className="absolute top-2 left-2 w-10 h-10 border-t border-l border-[#00e5ff22]" />
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-[10px] font-bold tracking-[2px] uppercase text-[#00e5ff] mb-1">
          {product.category}
        </p>
        <h3 className="text-sm font-semibold text-[#f0f0f0] leading-snug mb-3 line-clamp-2">
          {product.name}
        </h3>
        <div className="flex items-center justify-between">
          <span className="font-bebas text-xl tracking-[2px]" style={{ color: '#00e5ff' }}>
            {product.price}
          </span>
          <a
            href={BRAND.whatsapp(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Pedir ${product.name} por WhatsApp`}
            onClick={e => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-[11px] font-bold tracking-[1px] uppercase text-[#0a0a0a] bg-[#00e5ff] hover:bg-white transition-colors duration-200"
          >
            <MessageCircle size={11} />
            Pedir
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Products() {
  return (
    <section
      id="productos"
      className="bg-[#0a0a0a] py-24 relative"
      aria-label="Catálogo de productos deportivos"
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#00e5ff33] bg-[#00e5ff0d] mb-5">
            <span className="text-[10px] font-bold text-[#00e5ff] tracking-[0.18em] uppercase">
              Catálogo 2025
            </span>
          </div>
          <h2 className="font-bebas text-[clamp(36px,5vw,60px)] tracking-[3px] text-[#f0f0f0] mb-3">
            Nuestros Productos
          </h2>
          <p className="text-sm text-[#6b7280] max-w-md mx-auto leading-relaxed">
            Ropa deportiva y accesorios de alta calidad para Pereira, Risaralda y todo el eje cafetero.
            Haz clic en <strong className="text-[#00e5ff]">Pedir</strong> y te atendemos en segundos.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {PRODUCTS.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {/* Global WhatsApp CTA */}
        <div className="text-center">
          <p className="text-sm text-[#6b7280] mb-5">
            ¿No encuentras lo que buscas? Escríbenos y lo conseguimos para ti.
          </p>
          <a
            href={BRAND.whatsapp('un producto personalizado')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 font-bold text-sm tracking-[2px] uppercase text-[#0a0a0a] bg-[#00e5ff] hover:bg-white transition-colors duration-200 btn-angled glow-cyan"
          >
            <MessageCircle size={16} />
            Ver Todo por WhatsApp
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
