import { BRAND } from '@/lib/constants';
import { MapPin, Phone, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-[#0a0a0a] border-t border-[#1f1f1f] pt-16 pb-8"
      aria-label="Pie de página"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div>
            <p className="font-bebas text-3xl tracking-[4px] mb-3">
              <span style={{ color: '#00e5ff' }}>AREON</span>
              <span style={{ color: '#ff003c' }}> ATHLETIC</span>
            </p>
            <p className="text-sm text-[#6b7280] leading-relaxed mb-5 max-w-xs">
              Ropa y accesorios deportivos de alto rendimiento para atletas que no se conforman con menos.
            </p>
            {/* Social */}
            <div className="flex gap-4">
              <a
                href={BRAND.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook de Areon Athletic"
                className="w-10 h-10 flex items-center justify-center border border-[#1f1f1f] text-[#6b7280] hover:border-[#00e5ff] hover:text-[#00e5ff] transition-all duration-200"
              >
                <Facebook size={16} />
              </a>
              <a
                href={BRAND.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Areon Athletic"
                className="w-10 h-10 flex items-center justify-center border border-[#1f1f1f] text-[#6b7280] hover:border-[#ff003c] hover:text-[#ff003c] transition-all duration-200"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs font-bold tracking-[3px] uppercase text-[#00e5ff] mb-5">Navegación</p>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'Inicio',    href: '#hero' },
                { label: 'Productos', href: '#productos' },
                { label: 'Nosotros',  href: '#nosotros' },
              ].map(l => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-[#6b7280] hover:text-[#f0f0f0] transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact — Local SEO */}
          <div>
            <p className="text-xs font-bold tracking-[3px] uppercase text-[#00e5ff] mb-5">Contacto y Ubicación</p>
            <address className="not-italic flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[#00e5ff] mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm text-[#f0f0f0] font-semibold">Pereira, Risaralda</p>
                  <p className="text-xs text-[#6b7280] mt-0.5">
                    Envíos rápidos a todo el eje cafetero —<br />
                    Manizales, Armenia y toda Colombia.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-[#00e5ff] shrink-0" />
                <a
                  href={BRAND.whatsapp()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#f0f0f0] hover:text-[#00e5ff] transition-colors"
                >
                  +57 315 157 1006
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1f1f1f] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#4b5563]">
            © {new Date().getFullYear()} Areon Athletic. Todos los derechos reservados.
           · <a href="https://www.sistemicadigital.online/" target="_blank" rel="noopener noreferrer" className="text-[#00e5ff] font-bold hover:text-white transition text-sm tracking-wide">⚡ Diseñado por Sistémica Digital</a></p>
          <p className="text-xs text-[#4b5563]">
            Ubicados en <span className="text-[#00e5ff]">Pereira, Risaralda</span> · Eje Cafetero · Colombia
          </p>
        </div>
      </div>
    </footer>
  );
}
