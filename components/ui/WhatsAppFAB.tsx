'use client';

import { useState, useEffect } from 'react';
import { BRAND } from '@/lib/constants';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppFAB() {
  const [visible, setVisible] = useState(false);
  const [tooltip, setTooltip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    const tip = setTimeout(() => setTooltip(false), 5000);
    return () => { clearTimeout(timer); clearTimeout(tip); };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-2"
      style={{ animation: 'fadeUp 0.5s cubic-bezier(0.16,1,0.3,1) forwards' }}
    >
      {/* Tooltip */}
      {tooltip && (
        <div className="relative flex items-center gap-2 bg-[#161616] border border-[#1f1f1f] px-4 py-2.5 text-xs font-semibold text-[#f0f0f0] max-w-[200px] shadow-xl">
          <span>¡Escríbenos por WhatsApp! 👋</span>
          <button
            onClick={() => setTooltip(false)}
            className="text-[#6b7280] hover:text-[#f0f0f0]"
            aria-label="Cerrar"
          >
            <X size={12} />
          </button>
          {/* Arrow */}
          <span className="absolute -bottom-2 right-5 w-0 h-0"
            style={{ borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderTop: '8px solid #1f1f1f' }}
          />
        </div>
      )}

      {/* FAB button */}
      <a
        href={BRAND.whatsapp()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="w-14 h-14 flex items-center justify-center rounded-full text-white shadow-2xl transition-transform duration-200 hover:scale-110 active:scale-95 wa-pulse"
        style={{ background: 'linear-gradient(135deg, #25d366 0%, #128c7e 100%)' }}
      >
        <MessageCircle size={26} fill="white" />
      </a>
    </div>
  );
}
