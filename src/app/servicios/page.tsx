'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from '@/components/Navbar';

const serviciosDetallados = [
  {
    titulo: "Descubrimiento y Estrategia",
    descripcion: "Nos metemos de lleno en tu negocio para entender tu contexto, tus usuarios y tus objetivos. Desde ahí, construimos la base estratégica para avanzar con sentido.",
    icono: "🔍",
    caracteristicas: [
      {
        titulo: "Diagnóstico y análisis del negocio",
        descripcion: "Evaluación profunda de tu modelo de negocio y oportunidades.",
        icono: "📊"
      },
      {
        titulo: "Investigación de mercado y competencia",
        descripcion: "Análisis del entorno competitivo y tendencias del mercado.",
        icono: "🔎"
      },
      {
        titulo: "Definición de público y propuesta de valor",
        descripcion: "Identificación clara de usuarios objetivo y diferenciación.",
        icono: "🎯"
      },
      {
        titulo: "Workshops estratégicos",
        descripcion: "Sesiones colaborativas para alinear visión y objetivos.",
        icono: "🧩"
      }
    ]
  },
  {
    titulo: "Diseño y Conceptualización",
    descripcion: "Traducimos ideas en soluciones claras, útiles y visualmente coherentes. Prototipos, validaciones y diseño centrado en el usuario, siempre.",
    icono: "✨",
    caracteristicas: [
      {
        titulo: "UX/UI con foco en el usuario y el negocio",
        descripcion: "Diseño de experiencias que equilibran necesidades de usuarios y objetivos de negocio.",
        icono: "👥"
      },
      {
        titulo: "Diseño de flujos y pantallas",
        descripcion: "Creación de interfaces intuitivas y visualmente atractivas.",
        icono: "🎨"
      },
      {
        titulo: "Prototipos interactivos",
        descripcion: "Visualización temprana y tangible de la solución propuesta.",
        icono: "💫"
      },
      {
        titulo: "Validación y mejora continua",
        descripcion: "Testeo con usuarios reales para refinar y optimizar la experiencia.",
        icono: "🔄"
      }
    ]
  },
  {
    titulo: "Planificación y Preparación",
    descripcion: "Trazamos el camino con vos: armamos un roadmap, priorizamos funcionalidades y preparamos todo para avanzar sin fricciones.",
    icono: "📋",
    caracteristicas: [
      {
        titulo: "Roadmap del producto",
        descripcion: "Definición clara de etapas y objetivos para el desarrollo.",
        icono: "🗺️"
      },
      {
        titulo: "Priorización de tareas",
        descripcion: "Identificación de funcionalidades críticas y orden de implementación.",
        icono: "📊"
      },
      {
        titulo: "Estimaciones realistas",
        descripcion: "Proyecciones de tiempo y recursos basadas en datos concretos.",
        icono: "⏱️"
      },
      {
        titulo: "Preparación técnica y funcional",
        descripcion: "Configuración del entorno y definición de arquitectura para un desarrollo fluido.",
        icono: "🛠️"
      }
    ]
  },
  {
    titulo: "Acompañamiento y Seguimiento",
    descripcion: "No solo arrancamos: nos quedamos para asegurarnos de que el proceso siga alineado a tus objetivos. Te acompañamos como lo haría cualquier área de producto interna.",
    icono: "🤝",
    caracteristicas: [
      {
        titulo: "Reuniones periódicas",
        descripcion: "Sesiones regulares para revisar avances y alinear expectativas.",
        icono: "📅"
      },
      {
        titulo: "Soporte y seguimiento activo",
        descripcion: "Disponibilidad constante para resolver dudas y superar obstáculos.",
        icono: "🛟"
      },
      {
        titulo: "Ajustes en tiempo real",
        descripcion: "Adaptación ágil a cambios y nuevos requerimientos durante el proceso.",
        icono: "⚙️"
      },
      {
        titulo: "Documentación y aprendizaje compartido",
        descripcion: "Registro de decisiones y transferencia de conocimiento al equipo.",
        icono: "📚"
      }
    ]
  }
];

import ContactModal from '@/components/ContactModal';

export default function Servicios() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <main className="bg-cataliza-bg min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-0 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-cataliza-primary/20 via-cataliza-bg/80 to-cataliza-bg" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(74,135,192,0.15)_0%,rgba(0,0,0,0)_60%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center pb-20"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
              Servicios
              <span className="bg-gradient-to-r from-cataliza-primary to-cataliza-secondary bg-clip-text text-transparent">
                {" "}Profesionales
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Todo lo que necesitás para lanzar o hacer crecer tu producto.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Descripción de Enfoque */}
      <section className="pt-0 pb-16 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-cataliza-bg/95 via-cataliza-bg/90 to-cataliza-bg" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(74,135,192,0.05)_0%,rgba(0,0,0,0)_70%)]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="pt-20 pb-8"
          >
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Nuestro enfoque <span className="bg-gradient-to-r from-cataliza-primary to-cataliza-secondary bg-clip-text text-transparent">colaborativo</span>
              </h2>
            </div>

            <div className="flex flex-col md:flex-row gap-10 items-center">
              {/* Columna de texto */}
              <div className="md:w-1/2">
                <p className="text-gray-300 text-lg leading-relaxed">
                  Nos integramos a tu equipo para que puedas contar con un área de producto sin tener que crearla internamente.
                  Nuestro enfoque es flexible: podés contratarnos por proyecto, por etapas o elegir nuestro servicio premium
                  donde trabajamos mano a mano con vos desde adentro.
                </p>
              </div>

              {/* Columna de opciones */}
              <div className="md:w-1/2 space-y-4 self-center">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="flex items-center gap-4 p-3 rounded-lg bg-gradient-to-r from-cataliza-bg/40 to-cataliza-bg/20 backdrop-blur-sm border-l-4 border-cataliza-primary"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cataliza-primary to-cataliza-secondary flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📋</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Por proyecto</h3>
                    <p className="text-gray-400 text-sm">Soluciones específicas para necesidades puntuales</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="flex items-center gap-4 p-3 rounded-lg bg-gradient-to-r from-cataliza-bg/40 to-cataliza-bg/20 backdrop-blur-sm border-l-4 border-cataliza-primary"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cataliza-primary to-cataliza-secondary flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🔄</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Por etapas</h3>
                    <p className="text-gray-400 text-sm">Acompañamiento progresivo según tus necesidades</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="flex items-center gap-4 p-3 rounded-lg bg-gradient-to-r from-cataliza-bg/40 to-cataliza-bg/20 backdrop-blur-sm border-l-4 border-cataliza-primary"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cataliza-primary to-cataliza-secondary flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">⭐</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Servicio premium</h3>
                    <p className="text-gray-400 text-sm">Colaboración integrada como parte de tu equipo</p>
                  </div>
                </motion.div>
              </div>
            </div>
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
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cataliza-primary to-cataliza-secondary flex items-center justify-center flex-shrink-0">
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
                    <div className="absolute inset-0 bg-gradient-to-br from-cataliza-primary/20 to-cataliza-bg/80" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-[120px]">{servicio.icono}</div>
                    </div>
                    <div className="absolute inset-0 border border-cataliza-primary/20 rounded-2xl" />
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
          <div className="absolute inset-0 bg-gradient-to-t from-cataliza-primary/20 via-cataliza-bg to-cataliza-bg" />
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
              <span className="bg-gradient-to-r from-cataliza-primary to-cataliza-secondary bg-clip-text text-transparent">
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
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-3 bg-gradient-to-r from-cataliza-primary to-cataliza-secondary text-white font-semibold rounded-lg shadow-lg hover:shadow-cataliza-primary/20"
            >
              Contactar ahora
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Modal de contacto */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
}