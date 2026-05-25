import Navbar      from '@/components/layout/Navbar';
import Footer      from '@/components/layout/Footer';
import Hero        from '@/components/sections/Hero';
import Stats       from '@/components/sections/Stats';
import Categories  from '@/components/sections/Categories';
import Products    from '@/components/sections/Products';
import Features    from '@/components/sections/Features';
import CTA         from '@/components/sections/CTA';
import WhatsAppFAB from '@/components/ui/WhatsAppFAB';

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" aria-label="Contenido principal de Areon Athletic">
        <Hero />
        <Stats />
        <Categories />
        <Products />
        <Features />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
