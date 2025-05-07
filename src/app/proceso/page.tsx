'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import ContactModal from '@/components/ContactModal';

const procesoDetallado = [
  {
    fase: "1",
    titulo: "Descubrimiento",
    descripcion: "Entendemos tu negocio y definimos objetivos compartidos.",
    icono: "🔍",
    color: "from-cataliza-primary to-cataliza-secondary",
    actividades: [
      "Inmersión en tu modelo de negocio",
      "Análisis de competidores y mercado",
      "Entrevistas con stakeholders clave",
      "Definición de KPIs y métricas de éxito"
    ],
    metricas: {
      tiempo: "2-3 semanas",
      entregables: "Documento de visión estratégica",
      reuniones: "Workshops colaborativos"
    }
  },
  {
    fase: "2",
    titulo: "Planificación",
    descripcion: "Organizamos el trabajo con visión estratégica.",
    icono: "📋",
    color: "from-cataliza-secondary to-cataliza-primary",
    actividades: [
      "Definición de alcance y prioridades",
      "Creación de roadmap de producto",
      "Estimación de tiempos y recursos",
      "Establecimiento de metodología de trabajo"
    ],
    metricas: {
      tiempo: "1-2 semanas",
      entregables: "Plan de acción detallado",
      reuniones: "Sesiones de planificación"
    }
  },
  {
    fase: "3",
    titulo: "Diseño",
    descripcion: "Pensamos en la experiencia del usuario, sin perder de vista el negocio.",
    icono: "🎨",
    color: "from-cataliza-primary to-cataliza-secondary",
    actividades: [
      "Arquitectura de información",
      "Diseño de flujos de usuario",
      "Creación de prototipos interactivos",
      "Validación con usuarios reales"
    ],
    metricas: {
      tiempo: "3-4 semanas",
      entregables: "Prototipos y diseños finales",
      reuniones: "Revisiones de diseño"
    }
  },
  {
    fase: "4",
    titulo: "Desarrollo",
    descripcion: "Coordinamos con tu equipo o partners técnicos, o los ponemos nosotros.",
    icono: "💻",
    color: "from-cataliza-secondary to-cataliza-primary",
    actividades: [
      "Integración con equipos existentes",
      "Desarrollo ágil y adaptativo",
      "Implementación de mejores prácticas",
      "Documentación técnica clara"
    ],
    metricas: {
      tiempo: "6-10 semanas",
      entregables: "Código funcional y documentado",
      reuniones: "Seguimiento continuo"
    }
  },
  {
    fase: "5",
    titulo: "Pruebas",
    descripcion: "Validamos con usuarios reales y ajustamos rápido.",
    icono: "🧪",
    color: "from-cataliza-primary to-cataliza-secondary",
    actividades: [
      "Testing con usuarios objetivo",
      "Análisis de feedback cualitativo",
      "Medición de métricas clave",
      "Iteraciones basadas en datos reales"
    ],
    metricas: {
      tiempo: "2-3 semanas",
      entregables: "Informes de usabilidad",
      reuniones: "Sesiones de revisión"
    }
  },
  {
    fase: "6",
    titulo: "Lanzamiento",
    descripcion: "Acompañamos la salida y lo que venga después.",
    icono: "🚀",
    color: "from-cataliza-secondary to-cataliza-primary",
    actividades: [
      "Estrategia de lanzamiento",
      "Monitoreo de métricas post-lanzamiento",
      "Soporte y resolución de incidencias",
      "Planificación de próximas iteraciones"
    ],
    metricas: {
      tiempo: "Continuo",
      entregables: "Producto en producción",
      reuniones: "Seguimiento post-lanzamiento"
    }
  }
];

export default function Proceso() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <main className="bg-cataliza-bg min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cataliza-primary/20 via-cataliza-bg to-cataliza-bg" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(74,135,192,0.1)_0%,rgba(0,0,0,0)_50%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
              Nuestro
              <span className="bg-gradient-to-r from-cataliza-primary to-cataliza-secondary bg-clip-text text-transparent">
                {" "}Proceso
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Nos adaptamos a tu ritmo, pero seguimos un proceso claro que nos permite avanzar con foco y resultados medibles.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Proceso Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Metodología de Desarrollo en 6 Fases</h2>
          {procesoDetallado.map((fase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-24 last:mb-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Contenido */}
                <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${fase.color} flex items-center justify-center text-3xl font-bold`}>
                        {fase.fase}
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-white">{fase.titulo}</h3>
                      </div>
                    </div>

                    <p className="text-gray-400 text-lg">
                      {fase.descripcion}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="relative group"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-cataliza-primary/20 to-cataliza-secondary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-75" />
                        <div className="relative bg-gray-900/50 backdrop-blur-sm border border-cataliza-primary/20 rounded-2xl p-4 transition-all duration-300 group-hover:border-cataliza-primary/40 h-28 flex flex-col justify-center">
                          <div className="text-sm text-white mb-1">
                            Duración
                          </div>
                          <div className="text-base font-bold text-white">
                            {fase.metricas.tiempo}
                          </div>
                          <div className="absolute -inset-px bg-gradient-to-br from-cataliza-primary/20 to-cataliza-secondary/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="relative group"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-cataliza-primary/20 to-cataliza-secondary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-75" />
                        <div className="relative bg-gray-900/50 backdrop-blur-sm border border-cataliza-primary/20 rounded-2xl p-4 transition-all duration-300 group-hover:border-cataliza-primary/40 h-28 flex flex-col justify-center">
                          <div className="text-sm text-white mb-1">
                            Entregables
                          </div>
                          <div className="text-base font-bold text-white">
                            {fase.metricas.entregables}
                          </div>
                          <div className="absolute -inset-px bg-gradient-to-br from-cataliza-primary/20 to-cataliza-secondary/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="relative group"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-cataliza-primary/20 to-cataliza-secondary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-75" />
                        <div className="relative bg-gray-900/50 backdrop-blur-sm border border-cataliza-primary/20 rounded-2xl p-4 transition-all duration-300 group-hover:border-cataliza-primary/40 h-28 flex flex-col justify-center">
                          <div className="text-sm text-white mb-1">
                            Reuniones
                          </div>
                          <div className="text-base font-bold text-white">
                            {fase.metricas.reuniones}
                          </div>
                          <div className="absolute -inset-px bg-gradient-to-br from-cataliza-primary/20 to-cataliza-secondary/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      </motion.div>
                    </div>

                    <ul className="space-y-3">
                      {fase.actividades.map((actividad, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center space-x-3 text-gray-300"
                        >
                          <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${fase.color}`} />
                          <span>{actividad}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Visualización */}
                <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-cataliza-bg/40 to-cataliza-bg/20 p-8 border border-cataliza-primary/20"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${fase.color} opacity-10`} />
                    <div className="relative z-10 h-full flex flex-col items-center justify-center">
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          rotate: [0, 5, -5, 0]
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}
                        className="text-[120px] mb-8"
                      >
                        {fase.icono}
                      </motion.div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white mb-2">{fase.titulo}</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Conector */}
              {index < procesoDetallado.length - 1 && (
                <div className="my-12 flex justify-center">
                  <div className="w-px h-24 bg-gradient-to-b from-cataliza-primary/50 to-transparent" />
                </div>
              )}
            </motion.div>
          ))}
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
              ¿Listo para tener tu
              <span className="bg-gradient-to-r from-cataliza-primary to-cataliza-secondary bg-clip-text text-transparent">
                {" "}equipo de producto
              </span>
              ?
            </h2>
            <p className="text-gray-400 mb-8">
              Nuestro proceso probado te permite contar con un área de producto completa,
              sin tener que crearla internamente. Comencemos hoy mismo.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-3 bg-gradient-to-r from-cataliza-primary to-cataliza-secondary text-white font-semibold rounded-lg shadow-lg hover:shadow-cataliza-primary/20"
            >
              Iniciar Proyecto
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