import { FEATURES } from '@/lib/constants';

export default function Features() {
  return (
    <section
      id="nosotros"
      className="bg-[#111111] border-y border-[#1f1f1f] py-24"
      aria-label="Características y ventajas de Areon Athletic"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#ff003c33] bg-[#ff003c0d] mb-5">
            <span className="text-[10px] font-bold text-[#ff003c] tracking-[0.18em] uppercase">
              ¿Por qué elegirnos?
            </span>
          </div>
          <h2 className="font-bebas text-[clamp(36px,5vw,56px)] tracking-[3px] text-[#f0f0f0]">
            Tu aliado deportivo en el eje cafetero
          </h2>
          <p className="text-sm text-[#6b7280] mt-3 max-w-md mx-auto">
            Ubicados en <strong className="text-[#f0f0f0]">Pereira, Risaralda</strong>.
            Envíos rápidos a todo el eje cafetero: Manizales, Armenia y toda Colombia.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              className="group p-6 bg-[#0a0a0a] border border-[#1f1f1f] hover:border-[#00e5ff33] transition-all duration-300 relative overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: 'radial-gradient(circle at 30% 30%, rgba(0,229,255,0.05) 0%, transparent 70%)' }}
              />

              {/* Number */}
              <span
                className="font-bebas text-6xl absolute -top-2 -right-1 opacity-[0.06] pointer-events-none select-none"
                style={{ color: '#00e5ff' }}
              >
                0{i + 1}
              </span>

              <div className="relative z-10">
                <span className="text-4xl mb-4 block">{f.icon}</span>
                <h3 className="font-bebas text-xl tracking-[2px] text-[#f0f0f0] mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-[#6b7280] leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
