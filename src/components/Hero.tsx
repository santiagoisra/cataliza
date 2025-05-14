'use client';

import HeroGeometric from './HeroGeometric';

const heroCopy = {
  badge: 'Cataliza',
  title1: 'Tu producto,',
  title2: 'nuestro equipo.',
  description: [
    'En Cataliza acompañamos a empresas y organizaciones en la creación de productos, como si fuéramos parte de su equipo. Diseñamos, planificamos y construimos de forma colaborativa, sumándonos desde afuera... pero trabajando desde adentro.',
    'Ya sea que estés empezando una idea o escalando una solución, nuestro equipo está para ayudarte a avanzar con claridad, foco y visión de producto.'
  ],
  actions: [
    { text: 'Comenzar Proyecto', href: '/contacto', variant: 'primary' as const },
    { text: 'Conocer Más', href: '/servicios', variant: 'secondary' as const }
  ],
  stats: [
    { number: '100+', label: 'Proyectos Exitosos' },
    { number: '95%', label: 'Clientes Satisfechos' },
    { number: '50%', label: 'Menos Tiempo' },
    { number: '24/7', label: 'Soporte Dedicado' }
  ]
};

const Hero = () => {
  return <HeroGeometric {...heroCopy} />;
};

export default Hero;