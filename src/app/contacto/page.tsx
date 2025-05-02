'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from '@/components/Navbar';

const infoContacto = [
  {
    titulo: "Email",
    descripcion: "contacto@cataliza.ar",
    icono: "📧",
    color: "from-cataliza-primary to-cataliza-secondary"
  },
  {
    titulo: "Teléfono",
    descripcion: "+54 (381) 535-9505",
    icono: "📱",
    color: "from-cataliza-secondary to-cataliza-primary"
  }
];

export default function Contacto() {
  // Estado del formulario
  const [formState, setFormState] = useState({
    nombre: '',
    email: '',
    empresa: '',
    mensaje: ''
  });

  // Estado para mensajes y errores
  const [enviado] = useState(false);
  const [error] = useState('');

  return (
    <main className="bg-cataliza-bg min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cataliza-primary/20 via-cataliza-bg to-cataliza-bg"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(74,135,192,0.1)_0%,rgba(0,0,0,0)_50%)]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
              Contanos en qué estás y
              <span className="bg-gradient-to-r from-cataliza-primary to-cataliza-secondary bg-clip-text text-transparent">
                {" "}vemos cómo podemos ayudarte
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Nuestro equipo está listo para sumarse al tuyo y construir algo grande.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Información de Contacto */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {infoContacto.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 backdrop-blur-sm"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${info.color} flex items-center justify-center text-3xl mb-6`}>
                  {info.icono}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{info.titulo}</h3>
                <p className="text-gray-400">{info.descripcion}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulario de Contacto */}
      <section className="py-20 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cataliza-primary/10 via-cataliza-bg to-cataliza-bg"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cataliza-bg/40 to-cataliza-bg/20 p-8 sm:p-12 rounded-2xl border border-cataliza-primary/20 backdrop-blur-sm"
          >
            <h2 className="text-2xl font-bold text-white mb-6 text-center">O completá el formulario y te escribimos:</h2>

            {enviado && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                <p className="text-green-400 text-center">¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.</p>
              </div>
            )}

            {error && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
                <p className="text-red-400 text-center">{error}</p>
              </div>
            )}

            <form action="https://formspree.io/f/xpwdqblp" method="POST" className="space-y-8">
              <input type="hidden" name="_subject" value="Nuevo mensaje desde la página de contacto de Cataliza" />
              <input type="hidden" name="_next" value="https://cataliza.ar/gracias" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-cataliza-bg/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cataliza-primary focus:border-transparent text-white"
                    value={formState.nombre}
                    onChange={(e) => setFormState({...formState, nombre: e.target.value})}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-cataliza-bg/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cataliza-primary focus:border-transparent text-white"
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                  />
                </motion.div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    name="company"
                    className="w-full px-4 py-3 bg-cataliza-bg/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cataliza-primary focus:border-transparent text-white"
                    value={formState.empresa}
                    onChange={(e) => setFormState({...formState, empresa: e.target.value})}
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Mensaje
                </label>
                <textarea
                  required
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 bg-cataliza-bg/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cataliza-primary focus:border-transparent text-white"
                  value={formState.mensaje}
                  onChange={(e) => setFormState({...formState, mensaje: e.target.value})}
                ></textarea>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-cataliza-primary to-cataliza-secondary text-white font-semibold rounded-lg shadow-lg hover:shadow-cataliza-primary/20"
              >
                Enviar mensaje
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}