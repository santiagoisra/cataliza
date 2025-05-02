import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto | Inicia tu Proyecto Digital',
  description: 'Contáctanos para iniciar tu proyecto digital. Nuestro equipo está listo para ayudarte a desarrollar productos innovadores y efectivos.',
  alternates: {
    canonical: 'https://cataliza.ar/contacto',
  },
  openGraph: {
    images: [
      {
        url: '/og-contacto.jpg',
        width: 1200,
        height: 630,
        alt: 'Contacta con Cataliza',
      },
    ],
  },
};

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
