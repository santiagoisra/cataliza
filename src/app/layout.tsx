import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "./metadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Cataliza',
    default: 'Cataliza | Tu producto, nuestro equipo',
  },
  description: siteConfig.description,
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
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    siteName: siteConfig.name,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#4a87c0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ backgroundColor: '#191d23' }}
      >
        {children}
      </body>
    </html>
  );
}
