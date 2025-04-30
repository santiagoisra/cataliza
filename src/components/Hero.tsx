'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const stats = [
  { number: "100+", label: "Proyectos Exitosos", delay: 0.3 },
  { number: "95%", label: "Clientes Satisfechos", delay: 0.4 },
  { number: "50%", label: "Menos Tiempo", delay: 0.5 },
  { number: "24/7", label: "Soporte Dedicado", delay: 0.6 }
];

const Hero = () => {
  const router = useRouter();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-16 md:pt-0">
      {/* Gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,138,0,0.1)_0%,rgba(0,0,0,0)_50%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 sm:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            Tu producto,
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              {" "}nuestro equipo.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            En Cataliza acompañamos a empresas y organizaciones en la creación de productos digitales,
            como si fuéramos parte de su equipo. Diseñamos, planificamos y construimos de forma colaborativa,
            sumándonos desde afuera... pero trabajando desde adentro.
          </p>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Ya sea que estés empezando una idea o escalando una solución, nuestro equipo está para
            ayudarte a avanzar con claridad, foco y visión de producto.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-orange-500/20"
              onClick={() => router.push('/contacto')}
            >
              Comenzar Proyecto
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white/10 text-white font-semibold rounded-lg backdrop-blur-sm hover:bg-white/20"
              onClick={() => router.push('/servicios')}
            >
              Conocer Más
            </motion.button>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: stat.delay }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-75" />

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative bg-gray-900/50 backdrop-blur-sm border border-orange-500/20 rounded-2xl p-6 transition-all duration-300 group-hover:border-orange-500/40"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: stat.delay + 0.2
                  }}
                  className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2"
                >
                  {stat.number}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: stat.delay + 0.4 }}
                  className="text-sm text-gray-400"
                >
                  {stat.label}
                </motion.div>

                {/* Decorative elements */}
                <div className="absolute -inset-px bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -inset-0.5 bg-gradient-to-br from-orange-500/50 to-red-500/50 rounded-2xl opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;