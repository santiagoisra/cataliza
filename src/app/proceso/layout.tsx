import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nuestro Proceso de Desarrollo | Metodología Ágil',
  description: 'Conoce nuestro proceso de desarrollo de productos digitales: desde el descubrimiento hasta el lanzamiento, con un enfoque ágil y centrado en resultados.',
  alternates: {
    canonical: 'https://cataliza.ar/proceso',
  },
  openGraph: {
    images: [
      {
        url: '/og-proceso.jpg',
        width: 1200,
        height: 630,
        alt: 'Proceso de Desarrollo de Cataliza',
      },
    ],
  },
};

export default function ProcesoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
