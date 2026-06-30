'use client';

import { useState } from 'react';
import { PRODUCTS, BRAND, DOMICILIO, type Product } from '@/lib/constants';
import { ShoppingCart, X, ChevronLeft, ChevronRight, Send } from 'lucide-react';

const fmt = (n: number) => `$${n.toLocaleString('es-CO')}`;

// ── Galería de imágenes ──────────────────────────────────────
function ImageGallery({ images, name }: { images: string[]; name: string }) {
  const [idx, setIdx] = useState(0);
  return (
    <div className="relative aspect-square bg-[#161616] overflow-hidden rounded-[40%]">
      <img src={images[idx]} alt={name} className="w-full h-full object-cover" />
      {images.length > 1 && (
        <>
          <button onClick={() => setIdx((idx - 1 + images.length) % images.length)}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-1 rounded-full hover:bg-black/80 transition">
            <ChevronLeft size={16} className="text-white" />
          </button>
          <button onClick={() => setIdx((idx + 1) % images.length)}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-1 rounded-full hover:bg-black/80 transition">
            <ChevronRight size={16} className="text-white" />
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {images.map((_, i) => (
              <button key={i} onClick={() => setIdx(i)}
                className={`w-1.5 h-1.5 rounded-full transition ${i === idx ? 'bg-[#00e5ff]' : 'bg-white/40'}`} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// ── Formulario de pedido ─────────────────────────────────────
function OrderModal({ product, onClose }: { product: Product; onClose: () => void }) {
  const [form, setForm] = useState({ nombre: '', telefono: '', direccion: '', talla: '', cantidad: '1', notas: '' });
  const [sent, setSent] = useState(false);
  const [upsell, setUpsell] = useState(false);

  // Upsell según categoría
  const upsellItem = ['Camisetas', 'Gorras', 'Mundialista'].includes(product.category)
    ? { name: 'Banderín Selección Colombia', price: 5000, emoji: '🎌' }
    : ['Pantalonetas', 'Bermudas'].includes(product.category)
    ? { name: 'Medias Tobilleras x3', price: 5000, emoji: '🧦' }
    : null;

  const qty = parseInt(form.cantidad) || 1;
  const subtotal = product.price * qty + (upsell && upsellItem ? upsellItem.price : 0);
  const domicilio = subtotal >= DOMICILIO.minimo ? 0 : DOMICILIO.costo;
  const total = subtotal + domicilio;

  const handleSend = () => {
    const msg = [
      `🛒 *NUEVO PEDIDO — Areon Athletic*`,
      ``,
      `📦 *Producto:* ${product.name}`,
      upsell && upsellItem ? `🎁 *Adicional:* ${upsellItem.emoji} ${upsellItem.name} (+${fmt(upsellItem.price)})` : '',
      `🔢 *Cantidad:* ${qty}`,
      form.talla ? `📏 *Talla:* ${form.talla}` : '',
      ``,
      `👤 *Cliente:* ${form.nombre}`,
      `📞 *Teléfono:* ${form.telefono}`,
      `📍 *Dirección:* ${form.direccion}`,
      form.notas ? `📝 *Notas:* ${form.notas}` : '',
      ``,
      `💰 *Subtotal:* ${fmt(subtotal)}`,
      `🚚 *Domicilio:* ${domicilio === 0 ? '¡GRATIS! 🎉' : fmt(domicilio)}`,
      `💳 *TOTAL:* ${fmt(total)}`,
      ``,
      `💵 Pago al recibir: Efectivo o Nequi ${BRAND.nequi}`,
    ].filter(Boolean).join('\n');

    window.open(`https://wa.me/${BRAND.phone}?text=${encodeURIComponent(msg)}`, '_blank');
    setSent(true);
  };

  const valid = form.nombre && form.telefono && form.direccion;

  if (sent) return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      <div className="bg-[#111] border border-[#00e5ff33] p-8 max-w-sm w-full text-center">
        <div className="text-5xl mb-4">🎉</div>
        <h3 className="font-bebas text-2xl text-[#00e5ff] tracking-widest mb-2">¡Pedido Enviado!</h3>
        <p className="text-sm text-[#9ca3af] mb-6">Te contactaremos por WhatsApp para confirmar la entrega al día siguiente.</p>
        <button onClick={onClose} className="px-6 py-3 bg-[#00e5ff] text-[#0a0a0a] font-bold text-sm tracking-widest uppercase hover:bg-white transition">Cerrar</button>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 overflow-y-auto">
      <div className="bg-[#111] border border-[#1f1f1f] w-full max-w-md my-4">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#1f1f1f]">
          <h3 className="font-bebas text-lg tracking-widest text-[#f0f0f0]">Hacer Pedido</h3>
          <button onClick={onClose}><X size={18} className="text-[#6b7280] hover:text-white" /></button>
        </div>

        <div className="p-5 space-y-4">
          {/* Producto */}
          <div className="flex gap-3 p-3 bg-[#161616] border border-[#1f1f1f]">
            <img src={product.images[0]} alt={product.name} className="w-16 h-16 object-cover flex-shrink-0" />
            <div>
              <p className="text-xs text-[#00e5ff] font-bold uppercase tracking-widest">{product.category}</p>
              <p className="text-sm text-[#f0f0f0] font-semibold leading-snug">{product.name}</p>
              <p className="text-sm text-[#00e5ff] font-bebas tracking-wider mt-0.5">{fmt(product.price)}</p>
            </div>
          </div>

          {/* Talla y cantidad */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-[10px] font-bold text-[#6b7280] uppercase tracking-widest block mb-1">Talla</label>
              <select value={form.talla} onChange={e => setForm({...form, talla: e.target.value})}
                className="w-full bg-[#161616] border border-[#1f1f1f] text-[#f0f0f0] text-sm px-3 py-2 focus:border-[#00e5ff44] outline-none">
                <option value="">Única / No aplica</option>
                {(product.tallas ?? ['M', 'L', 'XL', 'XXL']).map(t => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-[10px] font-bold text-[#6b7280] uppercase tracking-widest block mb-1">Cantidad</label>
              <input type="number" min="1" max="20" value={form.cantidad}
                onChange={e => setForm({...form, cantidad: e.target.value})}
                className="w-full bg-[#161616] border border-[#1f1f1f] text-[#f0f0f0] text-sm px-3 py-2 focus:border-[#00e5ff44] outline-none" />
            </div>
          </div>

          {/* Datos */}
          {[
            { key: 'nombre', label: 'Nombre completo', placeholder: 'Tu nombre', type: 'text' },
            { key: 'telefono', label: 'Teléfono', placeholder: '300 000 0000', type: 'tel' },
            { key: 'direccion', label: 'Dirección de entrega', placeholder: 'Calle, Barrio — Pereira o Dosquebradas', type: 'text' },
          ].map(({ key, label, placeholder, type }) => (
            <div key={key}>
              <label className="text-[10px] font-bold text-[#6b7280] uppercase tracking-widest block mb-1">{label}</label>
              <input type={type} placeholder={placeholder} value={(form as any)[key]}
                onChange={e => setForm({...form, [key]: e.target.value})}
                className="w-full bg-[#161616] border border-[#1f1f1f] text-[#f0f0f0] text-sm px-3 py-2 focus:border-[#00e5ff44] outline-none placeholder-[#374151]" />
            </div>
          ))}

          <div>
            <label className="text-[10px] font-bold text-[#6b7280] uppercase tracking-widest block mb-1">Notas (opcional)</label>
            <textarea placeholder="Color preferido, instrucciones especiales..." value={form.notas}
              onChange={e => setForm({...form, notas: e.target.value})} rows={2}
              className="w-full bg-[#161616] border border-[#1f1f1f] text-[#f0f0f0] text-sm px-3 py-2 focus:border-[#00e5ff44] outline-none placeholder-[#374151] resize-none" />
          </div>

          {/* Upsell */}
          {upsellItem && (
            <div
              onClick={() => setUpsell(!upsell)}
              className={`flex items-center gap-3 p-3 border cursor-pointer transition ${
                upsell ? 'border-[#00e5ff] bg-[#00e5ff0d]' : 'border-[#1f1f1f] hover:border-[#00e5ff33]'
              }`}
            >
              <div className={`w-5 h-5 flex-shrink-0 border-2 flex items-center justify-center transition ${
                upsell ? 'border-[#00e5ff] bg-[#00e5ff]' : 'border-[#374151]'
              }`}>
                {upsell && <span className="text-[#0a0a0a] text-xs font-black">✓</span>}
              </div>
              <div className="flex-1">
                <p className="text-xs font-bold text-[#f0f0f0]">
                  {upsellItem.emoji} ¿Le agregas {upsellItem.name}?
                </p>
                <p className="text-[10px] text-[#6b7280]">Por solo {fmt(upsellItem.price)} más — ¡aprovecha el envío!</p>
              </div>
              <span className="text-sm font-bebas tracking-wider text-[#00e5ff]">+{fmt(upsellItem.price)}</span>
            </div>
          )}

          {/* Resumen */}
          <div className="border border-[#1f1f1f] p-3 space-y-1.5 text-sm">
            <div className="flex justify-between text-[#9ca3af]">
              <span>Subtotal</span><span>{fmt(subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span className={domicilio === 0 ? 'text-[#00e5ff]' : 'text-[#9ca3af]'}>
                {domicilio === 0 ? '🎉 Envío gratis' : 'Domicilio'}
              </span>
              <span className={domicilio === 0 ? 'text-[#00e5ff]' : 'text-[#9ca3af]'}>
                {domicilio === 0 ? 'GRATIS' : fmt(domicilio)}
              </span>
            </div>
            {domicilio > 0 && (
              <p className="text-[10px] text-[#6b7280]">Agrega {fmt(DOMICILIO.minimo - subtotal)} más para envío gratis</p>
            )}
            <div className="flex justify-between font-bold text-[#f0f0f0] border-t border-[#1f1f1f] pt-1.5">
              <span>Total a pagar</span><span className="text-[#00e5ff]">{fmt(total)}</span>
            </div>
            <p className="text-[10px] text-[#6b7280]">💵 Paga al recibir: Efectivo o Nequi {BRAND.nequi}</p>
            <p className="text-[10px] text-[#6b7280]">🚚 Entrega al día siguiente en Pereira y Dosquebradas</p>
          </div>

          <button onClick={handleSend} disabled={!valid}
            className="w-full flex items-center justify-center gap-2 py-3.5 font-bold text-sm tracking-[2px] uppercase bg-[#00e5ff] text-[#0a0a0a] hover:bg-white transition disabled:opacity-40 disabled:cursor-not-allowed">
            <Send size={15} />
            Confirmar Pedido por WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Card de producto ─────────────────────────────────────────
function ProductCard({ product }: { product: Product }) {
  const [modal, setModal] = useState(false);

  return (
    <>
      <article className="group bg-[#111111] border border-[#1f1f1f] overflow-hidden hover:border-[#00e5ff33] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,229,255,0.08)]">
        {product.badge && (
          <div className="absolute top-3 left-3 z-10">
            <span className="inline-block px-2.5 py-1 text-[10px] font-bold tracking-[1px] bg-[#ff003c] text-white">{product.badge}</span>
          </div>
        )}

        <div className="relative">
          <ImageGallery images={product.images} name={product.name} />
        </div>

        <div className="p-4">
          <p className="text-[10px] font-bold tracking-[2px] uppercase text-[#00e5ff] mb-1">{product.category}</p>
          <h3 className="text-sm font-semibold text-[#f0f0f0] leading-snug mb-1 line-clamp-2">{product.name}</h3>
          <p className="text-xs text-[#6b7280] leading-relaxed mb-3 line-clamp-2">{product.description}</p>
          {product.nota && <p className="text-[10px] text-[#00e5ff] mb-3">✨ {product.nota}</p>}

          <div className="flex items-center justify-between gap-2">
            <div>
              {product.originalPrice && (
                <span className="text-xs text-[#6b7280] line-through block">{fmt(product.originalPrice)}</span>
              )}
              <span className="font-bebas text-xl tracking-[2px] text-[#00e5ff]">{fmt(product.price)}</span>
            </div>
            <button onClick={() => setModal(true)}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-[11px] font-bold tracking-[1px] uppercase text-[#0a0a0a] bg-[#00e5ff] hover:bg-white transition-colors">
              <ShoppingCart size={11} />
              Pedir
            </button>
          </div>
        </div>
      </article>

      {modal && <OrderModal product={product} onClose={() => setModal(false)} />}
    </>
  );
}

// ── Sección principal ────────────────────────────────────────
const CATEGORIES = ['Todos', 'Gorras', 'Camisetas', 'Bermudas', 'Pantalonetas', 'Medias', 'Canilleras', 'Mundialista'];

export default function Products() {
  const [cat, setCat] = useState('Todos');
  const filtered = cat === 'Todos' ? PRODUCTS : PRODUCTS.filter(p => p.category === cat);

  return (
    <section id="productos" className="bg-[#0a0a0a] py-24 relative" aria-label="Catálogo de productos">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#00e5ff33] bg-[#00e5ff0d] mb-5">
            <span className="text-[10px] font-bold text-[#00e5ff] tracking-[0.18em] uppercase">Catálogo 2025</span>
          </div>
          <h2 className="font-bebas text-[clamp(36px,5vw,60px)] tracking-[3px] text-[#f0f0f0] mb-3">Nuestros Productos</h2>
          <p className="text-sm text-[#6b7280] max-w-md mx-auto">
            Contraentrega en Pereira y Dosquebradas. Paga al recibir en efectivo o Nequi.{' '}
            <span className="text-[#00e5ff]">Envío gratis desde $70.000.</span>
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {CATEGORIES.map(c => (
            <button key={c} onClick={() => setCat(c)}
              className={`px-4 py-1.5 text-xs font-bold tracking-widest uppercase transition ${
                cat === c
                  ? 'bg-[#00e5ff] text-[#0a0a0a]'
                  : 'border border-[#1f1f1f] text-[#6b7280] hover:border-[#00e5ff33] hover:text-[#f0f0f0]'
              }`}>
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </section>
  );
}
