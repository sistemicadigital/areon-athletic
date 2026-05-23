import { BRAND } from '@/lib/constants';
import { MessageCircle, ArrowRight, Instagram, Facebook } from 'lucide-react';

export default function CTA() {
  return (
    <section
      className="relative bg-[#0a0a0a] py-28 overflow-hidden"
      aria-label="Llamada a la acción"
    >
      {/* Big background text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <span
          className="font-bebas text-[18vw] tracking-[8px] leading-none whitespace-nowrap"
          style={{ color: 'rgba(255,255,255,0.018)' }}
        >
          AREON
        </span>
      </div>

      {/* Glows */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(0,229,255,0.06) 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,0,60,0.07) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#00e5ff33] bg-[#00e5ff0d] mb-6">
          <span className="text-[10px] font-bold text-[#00e5ff] tracking-[0.18em] uppercase">
            ¿Listo para equiparte?
          </span>
        </div>

        <h2 className="font-bebas text-[clamp(44px,7vw,88px)] leading-[0.95] tracking-[3px] text-[#f0f0f0] mb-5">
          Escríbenos y te asesoramos{' '}
          <span style={{ color: '#00e5ff', textShadow: '0 0 60px rgba(0,229,255,0.4)' }}>
            ahora mismo
          </span>
        </h2>

        <p className="text-base text-[#6b7280] mb-10 max-w-md mx-auto leading-relaxed">
          Atención personalizada por WhatsApp. Cuéntanos qué necesitas y te respondemos al instante desde{' '}
          <strong className="text-[#f0f0f0]">Pereira, Risaralda</strong>.
        </p>

        <a
          href={BRAND.whatsapp()}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 px-10 py-5 font-bold text-base tracking-[2px] uppercase text-[#0a0a0a] bg-[#00e5ff] hover:bg-white transition-colors duration-200 btn-angled glow-cyan mb-10"
        >
          <MessageCircle size={18} />
          Iniciar Conversación
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </a>

        {/* Social links */}
        <div className="flex items-center justify-center gap-6 mt-4">
          <a
            href={BRAND.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-bold tracking-[1px] uppercase text-[#6b7280] hover:text-[#ff003c] transition-colors"
            aria-label="Instagram Areon Athletic"
          >
            <Instagram size={15} />
            @areonathletic
          </a>
          <span className="w-px h-4 bg-[#1f1f1f]" />
          <a
            href={BRAND.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-bold tracking-[1px] uppercase text-[#6b7280] hover:text-[#00e5ff] transition-colors"
            aria-label="Facebook Areon Athletic"
          >
            <Facebook size={15} />
            tiendasareonathletic
          </a>
        </div>
      </div>
    </section>
  );
}
