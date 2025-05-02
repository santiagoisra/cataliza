import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Contact from '@/components/Contact';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tu producto, nuestro equipo | Desarrollo de productos digitales',
  description: 'Somos tu equipo de producto externo. Diseñamos y desarrollamos productos digitales con enfoque estratégico para hacer crecer tu negocio.',
  alternates: {
    canonical: 'https://cataliza.ar',
  },
  openGraph: {
    images: [
      {
        url: '/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Cataliza - Tu producto, nuestro equipo',
      },
    ],
  },
};

export default function Home() {
  return (
    <main className="bg-cataliza-bg min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Contact />
    </main>
  );
}
