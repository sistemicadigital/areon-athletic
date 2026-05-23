'use client';

import { useState, useEffect } from 'react';
import { BRAND } from '@/lib/constants';
import { Menu, X, Zap } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Inicio',    href: '#hero' },
    { label: 'Productos', href: '#productos' },
    { label: 'Nosotros',  href: '#nosotros' },
    { label: 'Contacto',  href: '#footer' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0a0a0aee] backdrop-blur-md border-b border-[#00e5ff18]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">

        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 select-none">
          <span
            className="font-bebas text-2xl md:text-3xl tracking-[4px] leading-none"
            style={{ color: '#00e5ff' }}
          >
            AREON
          </span>
          <span
            className="font-bebas text-2xl md:text-3xl tracking-[4px] leading-none"
            style={{ color: '#ff003c' }}
          >
            ATHLETIC
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs font-bold tracking-[2px] uppercase text-[#6b7280] hover:text-[#00e5ff] transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href={BRAND.whatsapp()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 font-bold text-xs tracking-[2px] uppercase text-[#0a0a0a] bg-[#00e5ff] hover:bg-white transition-colors duration-200 btn-angled"
        >
          <Zap size={13} />
          WhatsApp
        </a>

        {/* Mobile burger */}
        <button
          className="md:hidden text-[#f0f0f0] p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#111111] border-t border-[#1f1f1f] px-6 py-6 flex flex-col gap-5">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-bold tracking-[2px] uppercase text-[#6b7280] hover:text-[#00e5ff] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={BRAND.whatsapp()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 font-bold text-sm text-[#0a0a0a] bg-[#00e5ff] btn-angled"
          >
            <Zap size={14} />
            Pedir por WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
