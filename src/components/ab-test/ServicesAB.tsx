/**
 * A/B TESTING COMPONENT
 * 
 * IMPORTANTE: Este componente es parte de un test A/B y es posible que no se publique en producción.
 * Los colores utilizados aquí son específicos para este test y no forman parte de la paleta
 * de colores principal del sitio.
 * 
 * Colores del test:
 * - Fondo: #292c33
 * - Color principal: #4a87c0
 * - Color secundario: #2f5385
 */

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

const ServicesAB = () => {
  return (
    <section className="py-20 bg-[#292c33]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              className="bg-gradient-to-br from-[#292c33]/80 to-[#1e2026] p-6 rounded-xl border border-gray-800 hover:border-[#4a87c0]/50 transition-colors"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-500 flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#4a87c0] rounded-full mr-2"></span>
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

export default ServicesAB;
