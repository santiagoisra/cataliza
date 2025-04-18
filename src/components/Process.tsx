'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    title: "Descubrimiento",
    description: "Analizamos tus necesidades y objetivos comerciales para definir la dirección estratégica del proyecto.",
    icon: "🔍",
    delay: 0
  },
  {
    title: "Planificación",
    description: "Desarrollamos un plan detallado con hitos claros y entregables definidos.",
    icon: "📝",
    delay: 0.2
  },
  {
    title: "Diseño",
    description: "Creamos prototipos y diseños centrados en el usuario que cumplen con tus objetivos.",
    icon: "🎨",
    delay: 0.4
  },
  {
    title: "Desarrollo",
    description: "Implementamos la solución utilizando las mejores prácticas y tecnologías modernas.",
    icon: "💻",
    delay: 0.6
  },
  {
    title: "Pruebas",
    description: "Realizamos pruebas exhaustivas para garantizar la calidad y el rendimiento.",
    icon: "🔧",
    delay: 0.8
  },
  {
    title: "Lanzamiento",
    description: "Desplegamos tu producto y proporcionamos soporte continuo para su éxito.",
    icon: "🚀",
    delay: 1
  }
];

const Process = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            Nuestro Proceso
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Un enfoque estructurado y probado para llevar tu proyecto desde la idea hasta el éxito.
          </motion.p>
        </div>

        <div className="relative">
          {/* Line connector */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-orange-500/50 to-transparent" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: step.delay }}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>

                <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-red-500 shadow-lg">
                  <span className="text-2xl">{step.icon}</span>
                  <div className="absolute w-20 h-20 rounded-full border border-orange-500/30 animate-ping" />
                </div>

                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process; 