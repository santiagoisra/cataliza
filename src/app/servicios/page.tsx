'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';

const serviciosDetallados = [
  {
    titulo: "Consultoría Estratégica Digital",
    descripcion: "Transformamos tu visión en una estrategia digital sólida y ejecutable.",
    icono: "🎯",
    caracteristicas: [
      {
        titulo: "Análisis Profundo",
        descripcion: "Evaluación exhaustiva de necesidades, mercado y competencia.",
        icono: "📊"
      },
      {
        titulo: "Estrategia Personalizada",
        descripcion: "Plan de acción detallado adaptado a tus objetivos específicos.",
        icono: "🎯"
      },
      {
        titulo: "Roadmap Digital",
        descripcion: "Planificación clara de implementación y objetivos.",
        icono: "🗺️"
      }
    ]
  },
  {
    titulo: "Diseño UX/UI Avanzado",
    descripcion: "Creamos experiencias digitales memorables y efectivas.",
    icono: "✨",
    caracteristicas: [
      {
        titulo: "Investigación de Usuarios",
        descripcion: "Análisis profundo de necesidades y comportamientos.",
        icono: "🔍"
      },
      {
        titulo: "Prototipado Interactivo",
        descripcion: "Visualización temprana de la solución propuesta.",
        icono: "💫"
      },
      {
        titulo: "Diseño Visual",
        descripcion: "Interfaces atractivas y funcionales.",
        icono: "🎨"
      }
    ]
  },
  {
    titulo: "Desarrollo de Productos Digitales",
    descripcion: "Convertimos ideas innovadoras en productos digitales exitosos.",
    icono: "💻",
    caracteristicas: [
      {
        titulo: "Arquitectura Escalable",
        descripcion: "Bases sólidas para el crecimiento futuro.",
        icono: "🏗️"
      },
      {
        titulo: "Desarrollo Ágil",
        descripcion: "Entregas continuas y adaptación rápida.",
        icono: "🚀"
      },
      {
        titulo: "Calidad Asegurada",
        descripcion: "Testing exhaustivo y optimización continua.",
        icono: "✅"
      }
    ]
  }
];

export default function Servicios() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-black to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,138,0,0.1)_0%,rgba(0,0,0,0)_50%)]" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
              Servicios
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                {" "}Profesionales
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Ofrecemos soluciones digitales completas y personalizadas para 
              transformar tu visión en realidad.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Servicios Detallados */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {serviciosDetallados.map((servicio, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-12 items-center`}
              >
                {/* Contenido */}
                <div className="flex-1">
                  <div className="text-5xl mb-6">{servicio.icono}</div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                    {servicio.titulo}
                  </h2>
                  <p className="text-gray-400 text-lg mb-8">
                    {servicio.descripcion}
                  </p>
                  <div className="space-y-6">
                    {servicio.caracteristicas.map((caracteristica, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.2 }}
                        className="flex items-start space-x-4"
                      >
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0">
                          <span className="text-2xl">{caracteristica.icono}</span>
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-lg mb-1">
                            {caracteristica.titulo}
                          </h3>
                          <p className="text-gray-400">
                            {caracteristica.descripcion}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Imagen/Ilustración */}
                <div className="flex-1">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative aspect-square rounded-2xl overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-black/80" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-[120px]">{servicio.icono}</div>
                    </div>
                    <div className="absolute inset-0 border border-orange-500/20 rounded-2xl" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 via-black to-black" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              ¿Listo para empezar tu
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                {" "}próximo proyecto
              </span>
              ?
            </h2>
            <p className="text-gray-400 mb-8">
              Contáctanos hoy mismo para discutir cómo podemos ayudarte a alcanzar tus objetivos digitales.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-orange-500/20"
            >
              Contactar ahora
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 