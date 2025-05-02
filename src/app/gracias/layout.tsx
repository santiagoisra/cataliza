import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gracias por Contactarnos',
  description: 'Gracias por ponerte en contacto con Cataliza. Pronto nos comunicaremos contigo para hablar sobre tu proyecto digital.',
  alternates: {
    canonical: 'https://cataliza.ar/gracias',
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function GraciasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
