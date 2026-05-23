'use client';

import { STATS } from '@/lib/constants';

export default function Stats() {
  return (
    <section
      className="bg-[#111111] border-y border-[#1f1f1f] py-10"
      aria-label="Estadísticas de Areon Athletic"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-[#1f1f1f]">
          {STATS.map(({ value, label }) => (
            <div key={label} className="text-center px-6">
              <p
                className="font-bebas text-4xl md:text-5xl tracking-[3px] text-glow"
                style={{ color: '#00e5ff' }}
              >
                {value}
              </p>
              <p className="text-xs text-[#6b7280] font-semibold tracking-[1px] uppercase mt-1">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
