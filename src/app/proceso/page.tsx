'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';

const procesoDetallado = [
  {
    fase: "Descubrimiento",
    titulo: "Entendiendo tu Visión",
    descripcion: "Profundizamos en tus objetivos y necesidades para crear una base sólida.",
    icono: "🔍",
    color: "from-orange-500 to-red-500",
    actividades: [
      "Sesiones de trabajo con stakeholders",
      "Análisis de mercado y competencia",
      "Definición de objetivos clave",
      "Identificación de público objetivo"
    ],
    metricas: {
      tiempo: "2-3 semanas",
      entregables: "Documento de visión y estrategia",
      reuniones: "4-6 sesiones"
    }
  },
  {
    fase: "Planificación",
    titulo: "Trazando el Camino",
    descripcion: "Desarrollamos una estrategia detallada y un plan de acción claro.",
    icono: "📋",
    color: "from-red-500 to-orange-600",
    actividades: [
      "Definición de alcance y objetivos",
      "Creación de roadmap detallado",
      "Estimación de recursos",
      "Planificación de sprints"
    ],
    metricas: {
      tiempo: "1-2 semanas",
      entregables: "Plan de proyecto y roadmap",
      reuniones: "3-4 sesiones"
    }
  },
  {
    fase: "Diseño",
    titulo: "Dando Forma a las Ideas",
    descripcion: "Transformamos conceptos en diseños tangibles y experiencias memorables.",
    icono: "🎨",
    color: "from-orange-600 to-red-600",
    actividades: [
      "Wireframes y prototipos",
      "Diseño de interfaz usuario",
      "Pruebas de usabilidad",
      "Refinamiento iterativo"
    ],
    metricas: {
      tiempo: "3-4 semanas",
      entregables: "Diseños y prototipos",
      reuniones: "Weekly reviews"
    }
  },
  {
    fase: "Desarrollo",
    titulo: "Construyendo el Futuro",
    descripcion: "Convertimos los diseños en productos digitales funcionales y escalables.",
    icono: "💻",
    color: "from-red-600 to-orange-500",
    actividades: [
      "Desarrollo ágil",
      "Integración continua",
      "Testing automatizado",
      "Optimización de rendimiento"
    ],
    metricas: {
      tiempo: "8-12 semanas",
      entregables: "Producto funcional",
      reuniones: "Daily standups"
    }
  }
];

export default function Proceso() {
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
              Nuestro
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                {" "}Proceso
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Un enfoque metodológico y estructurado para convertir ideas en 
              productos digitales exitosos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Proceso Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${fase.color} flex items-center justify-center text-3xl`}>
                        {fase.icono}
                      </div>
                      <div>
                        <h3 className="text-gray-400 text-xl">{fase.fase}</h3>
                        <h2 className="text-3xl font-bold text-white">{fase.titulo}</h2>
                      </div>
                    </div>
                    
                    <p className="text-gray-400 text-lg">
                      {fase.descripcion}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-gray-900/50 p-4 rounded-xl border border-gray-800"
                      >
                        <div className="text-sm text-gray-400">Duración</div>
                        <div className="text-white font-semibold">{fase.metricas.tiempo}</div>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-gray-900/50 p-4 rounded-xl border border-gray-800"
                      >
                        <div className="text-sm text-gray-400">Entregables</div>
                        <div className="text-white font-semibold">{fase.metricas.entregables}</div>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-gray-900/50 p-4 rounded-xl border border-gray-800"
                      >
                        <div className="text-sm text-gray-400">Reuniones</div>
                        <div className="text-white font-semibold">{fase.metricas.reuniones}</div>
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
                    className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-black p-8"
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
                        <div className="text-2xl font-bold text-white mb-2">{fase.fase}</div>
                        <div className="text-gray-400">{fase.metricas.tiempo}</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Conector */}
              {index < procesoDetallado.length - 1 && (
                <div className="my-12 flex justify-center">
                  <div className="w-px h-24 bg-gradient-to-b from-orange-500/50 to-transparent" />
                </div>
              )}
            </motion.div>
          ))}
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
              ¿Listo para comenzar tu
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                {" "}transformación digital
              </span>
              ?
            </h2>
            <p className="text-gray-400 mb-8">
              Nuestro proceso probado te ayudará a convertir tu visión en realidad.
              Comencemos hoy mismo.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-orange-500/20"
            >
              Iniciar Proyecto
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 