import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Servicios Profesionales de Desarrollo de Productos Digitales',
  description: 'Descubre nuestros servicios de desarrollo de productos digitales: estrategia, diseño UX/UI, planificación y acompañamiento para hacer crecer tu negocio.',
  alternates: {
    canonical: 'https://cataliza.ar/servicios',
  },
  openGraph: {
    images: [
      {
        url: '/og-servicios.jpg',
        width: 1200,
        height: 630,
        alt: 'Servicios Profesionales de Cataliza',
      },
    ],
  },
};

export default function ServiciosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
