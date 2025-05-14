'use client';

import { motion } from 'framer-motion';

const services = [
  {
    title: "Descubrimiento y Estrategia",
    description: "Análisis profundo de necesidades, investigación de mercado y definición de propuesta de valor.",
    icon: "🎯",
    features: [
      "Asesoramiento estratégico",
      "Análisis de mercado",
      "Definición de público objetivo",
      "Propuesta de valor única"
    ]
  },
  {
    title: "Diseño y Conceptualización",
    description: "Creación de prototipos y diseños que priorizan la experiencia del usuario.",
    icon: "✨",
    features: [
      "Arquitectura de información",
      "Diseño UX/UI avanzado",
      "Prototipos interactivos",
      "Pruebas de usabilidad"
    ]
  },
  {
    title: "Planificación y Preparación",
    description: "Organización detallada del proyecto y establecimiento de objetivos claros.",
    icon: "📋",
    features: [
      "Desglose de trabajo",
      "Estimación precisa",
      "Priorización estratégica",
      "Roadmap de producto"
    ]
  },
  {
    title: "Acompañamiento y Seguimiento",
    description: "Soporte continuo y validación durante todo el proceso de desarrollo.",
    icon: "🤝",
    features: [
      "Reuniones periódicas",
      "Gestión de cambios",
      "Validación continua",
      "Documentación progresiva"
    ]
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-cataliza-bg relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-32 sm:h-48 bg-gradient-to-b from-[#181d23] via-transparent to-transparent pointer-events-none transition-colors duration-700 z-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            Nuestros Servicios
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Ofrecemos un servicio integral de acompañamiento especializado para
            desarrollar productos digitales innovadores y efectivos.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-gray-900 to-cataliza-bg p-6 rounded-xl border border-gray-800 hover:border-cataliza-primary/50 transition-colors"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-500 flex items-center">
                    <span className="w-1.5 h-1.5 bg-cataliza-primary rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;