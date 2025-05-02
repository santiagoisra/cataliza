import { Metadata } from 'next';

// Metadatos base para todo el sitio
export const siteConfig = {
  name: 'Cataliza',
  description: 'Desarrollo de productos digitales con enfoque estratégico. Somos tu equipo de producto externo.',
  url: 'https://cataliza.ar',
};

// Función para generar metadatos consistentes en todas las páginas
export function generateMetadata({
  title,
  description,
  path = '',
  ogImage = '/og-image.jpg', // Imagen por defecto para compartir en redes sociales
}: {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
}): Metadata {
  const metaTitle = `${title} | ${siteConfig.name}`;
  const url = `${siteConfig.url}${path}`;

  return {
    title: metaTitle,
    description,
    keywords: [
      'desarrollo de productos',
      'diseño UX/UI',
      'estrategia digital',
      'desarrollo web',
      'consultoría tecnológica',
      'equipo de producto',
      'desarrollo de software',
      'diseño de experiencia de usuario',
    ],
    authors: [{ name: 'Cataliza' }],
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: metaTitle,
      description,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'es_AR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
