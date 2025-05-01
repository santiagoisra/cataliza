/**
 * A/B TESTING PAGE
 * 
 * IMPORTANTE: Esta página es parte de un test A/B y es posible que no se publique en producción.
 * Los colores utilizados aquí son específicos para este test y no forman parte de la paleta
 * de colores principal del sitio.
 * 
 * Colores del test:
 * - Fondo: #292c33
 * - Color principal: #4a87c0
 * - Color secundario: #2f5385
 * 
 * Si esta versión resulta exitosa, estos colores podrían reemplazar la paleta actual.
 */

import NavbarAB from '@/components/ab-test/NavbarAB';
import HeroAB from '@/components/ab-test/HeroAB';
import ServicesAB from '@/components/ab-test/ServicesAB';
import ProcessAB from '@/components/ab-test/ProcessAB';
import Contact from '@/components/Contact';

export default function ABTestHome() {
  return (
    <main className="bg-[#292c33] min-h-screen">
      <NavbarAB />
      <HeroAB />
      <ServicesAB />
      <ProcessAB />
      <Contact />
    </main>
  );
}
