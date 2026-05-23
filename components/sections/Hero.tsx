'use client';

import dynamic from 'next/dynamic';
import { BRAND } from '@/lib/constants';
import { ArrowRight, MapPin, Truck, MessageCircle } from 'lucide-react';

const Scene3D = dynamic(() => import('@/components/ui/Scene3D'), {
  ssr: false,
  loading: () => null,
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0a]"
      aria-label="Sección principal"
    >
      {/* 3D Background */}
      <Scene3D />

      {/* Radial glows */}
      <div
        className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,229,255,0.07) 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,0,60,0.07) 0%, transparent 70%)' }}
      />

      {/* Scanline effect */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,229,255,1) 2px, rgba(0,229,255,1) 3px)',
          backgroundSize: '100% 6px',
        }}
      />

      {/* Top border line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00e5ff44] to-transparent" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-28 pb-20">

        {/* Local SEO badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00e5ff33] bg-[#00e5ff0d] mb-8"
          style={{ animation: 'fadeIn 0.6s ease-out forwards' }}
        >
          <MapPin size={12} className="text-[#00e5ff]" />
          <span className="text-[11px] font-bold text-[#00e5ff] tracking-[0.18em] uppercase">
            Pereira, Risaralda · Envíos a todo el eje cafetero
          </span>
        </div>

        <div className="max-w-3xl">
          {/* H1 — SEO principal */}
          <h1
            className="font-bebas text-[clamp(52px,9vw,110px)] leading-[0.92] tracking-[2px] mb-6"
            style={{
              animation: 'fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards',
              color: '#f0f0f0',
            }}
          >
            Tienda Deportiva en Pereira{' '}
            <span style={{ color: '#00e5ff', textShadow: '0 0 60px rgba(0,229,255,0.5)' }}>
              | Areon Athletic
            </span>
            <span className="block text-[clamp(32px,5vw,56px)] mt-1" style={{ color: '#ff003c' }}>
              Ropa y Accesorios de Alto Rendimiento
            </span>
          </h1>

          <p
            className="text-base md:text-lg text-[#9ca3af] leading-relaxed max-w-[540px] mb-10"
            style={{ animation: 'fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.15s both' }}
          >
            Equipamiento deportivo de{' '}
            <strong className="text-[#f0f0f0] font-semibold">alto rendimiento</strong>{' '}
            para atletas de Pereira y todo el eje cafetero. Gorras, camisetas, licras y accesorios a un mensaje de distancia.
          </p>

          {/* CTA buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 mb-10"
            style={{ animation: 'fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.28s both' }}
          >
            <a
              href="#productos"
              className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 font-bold text-sm tracking-[2px] uppercase text-[#0a0a0a] bg-[#00e5ff] hover:bg-white transition-colors duration-200 btn-angled glow-cyan"
            >
              Ver Productos
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href={BRAND.whatsapp()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 font-bold text-sm tracking-[2px] uppercase text-[#f0f0f0] border border-[#1f1f1f] hover:border-[#00e5ff44] hover:bg-[#00e5ff0d] transition-all duration-200"
            >
              <MessageCircle size={15} />
              Pedir por WhatsApp
            </a>
          </div>

          {/* Trust badges */}
          <div
            className="flex flex-wrap gap-x-6 gap-y-3"
            style={{ animation: 'fadeIn 0.7s ease-out 0.45s both' }}
          >
            {[
              { icon: Truck,          label: 'Envío eje cafetero' },
              { icon: MessageCircle,  label: 'Atención por WhatsApp' },
              { icon: MapPin,         label: 'Ubicados en Pereira' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-1.5 text-xs text-[#6b7280]">
                <Icon size={13} className="text-[#00e5ff]" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
    </section>
  );
}
