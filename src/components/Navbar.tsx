'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              CATALIZA
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink href="/">Inicio</NavLink>
              <NavLink href="/servicios">Servicios</NavLink>
              <NavLink href="/proceso">Proceso</NavLink>
              <NavLinkCTA href="/contacto">Contacto</NavLinkCTA>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <span className="sr-only">Abrir menú principal</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, y: 0 },
          closed: { opacity: 0, y: -20 },
        }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <MobileNavLink href="/">Inicio</MobileNavLink>
          <MobileNavLink href="/servicios">Servicios</MobileNavLink>
          <MobileNavLink href="/proceso">Proceso</MobileNavLink>
          <MobileNavLinkCTA href="/contacto">Contacto</MobileNavLinkCTA>
        </div>
      </motion.div>
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
  >
    {children}
  </Link>
);

const NavLinkCTA = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:shadow-lg hover:shadow-orange-500/20 transition-all"
  >
    {children}
  </Link>
);

const MobileNavLinkCTA = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="bg-gradient-to-r from-orange-500 to-red-500 text-white block px-3 py-2 rounded-md text-base font-medium hover:shadow-lg hover:shadow-orange-500/20 transition-all"
  >
    {children}
  </Link>
);

export default Navbar;