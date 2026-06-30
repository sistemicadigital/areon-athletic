import Navbar      from '@/components/layout/Navbar';
import Footer      from '@/components/layout/Footer';
import Hero        from '@/components/sections/Hero';
import Stats       from '@/components/sections/Stats';
import Products    from '@/components/sections/Products';
import Features    from '@/components/sections/Features';
import CTA         from '@/components/sections/CTA';
import WhatsAppFAB from '@/components/ui/WhatsAppFAB';
import Image       from 'next/image';

const cld = (id: string) =>
  `https://res.cloudinary.com/dtymrddlg/image/upload/q_auto,f_auto,w_1400/${id}`;

function BannerMid() {
  return (
    <section className="w-full overflow-hidden">
      <img
        src={cld('banner_home_1_wbseu8')}
        alt="Areon Athletic — Colección"
        className="w-full h-[280px] md:h-[420px] object-cover"
      />
    </section>
  );
}

function BannerBottom() {
  return (
    <section className="w-full overflow-hidden">
      <img
        src={cld('banner_home_2_goo2c6')}
        alt="Areon Athletic — Productos"
        className="w-full h-[280px] md:h-[420px] object-cover"
      />
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" aria-label="Contenido principal de Areon Athletic">
        <Hero />
        <Stats />
        <BannerMid />
        <Products />
        <BannerBottom />
        <Features />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
