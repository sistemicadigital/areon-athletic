'use client';

import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { waLink, type CategoryProduct } from '@/lib/categories';

export default function CategoryProductCard({
  product,
  accentColor,
}: {
  product: CategoryProduct;
  accentColor: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className="group relative bg-[#111111] border border-[#1f1f1f] overflow-hidden transition-all duration-300"
      style={{
        borderColor: hovered ? `${accentColor}44` : undefined,
        transform: hovered ? 'translateY(-4px)' : undefined,
        boxShadow: hovered ? `0 12px 40px ${accentColor}18` : undefined,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {product.badge && (
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-block px-2.5 py-1 text-[10px] font-bold tracking-[1px] bg-[#ff003c] text-white">
            {product.badge}
          </span>
        </div>
      )}

      {/* Visual */}
      <div
        className="relative h-44 flex items-center justify-center border-b border-[#1f1f1f] overflow-hidden transition-all duration-500"
        style={{
          background: hovered
            ? `linear-gradient(135deg, #161616 0%, ${accentColor}0d 100%)`
            : '#161616',
        }}
      >
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${accentColor}18 0%, transparent 65%)`,
          }}
        />
        {product.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <span
            className="text-7xl select-none transition-all duration-300"
            style={{ filter: hovered ? `drop-shadow(0 0 18px ${accentColor}88)` : undefined }}
          >
            {product.emoji}
          </span>
        )}
        <div className="absolute bottom-2 right-2 w-8 h-8 border-b border-r border-[#ffffff0f]" />
        <div className="absolute top-2 left-2 w-8 h-8 border-t border-l border-[#ffffff0f]" />
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="text-sm font-semibold text-[#f0f0f0] leading-snug mb-3 line-clamp-2 min-h-[40px]">
          {product.name}
        </h3>
        <div className="flex items-center justify-between gap-2">
          <span
            className="font-bebas text-xl tracking-[2px]"
            style={{ color: accentColor }}
          >
            {product.price}
          </span>
          <a
            href={waLink(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Pedir ${product.name} por WhatsApp`}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-[11px] font-bold tracking-[1px] uppercase text-[#0a0a0a] transition-colors duration-200 shrink-0"
            style={{ background: accentColor }}
          >
            <MessageCircle size={11} />
            Pedir
          </a>
        </div>
      </div>
    </article>
  );
}
