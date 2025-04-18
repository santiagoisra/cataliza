'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from '@/components/Navbar';

const infoContacto = [
  {
    titulo: "Oficina Principal",
    descripcion: "Buenos Aires, Argentina",
    icono: "🏢",
    color: "from-orange-500 to-red-500"
  },
  {
    titulo: "Email",
    descripcion: "contacto@cataliza.dev",
    icono: "📧",
    color: "from-red-500 to-orange-600"
  },
  {
    titulo: "Teléfono",
    descripcion: "+54 (11) 1234-5678",
    icono: "📱",
    color: "from-orange-600 to-red-600"
  }
];

const redesSociales = [
  {
    nombre: "LinkedIn",
    url: "#",
    icono: "💼",
    color: "from-blue-500 to-blue-600"
  },
  {
    nombre: "Twitter",
    url: "#",
    icono: "🐦",
    color: "from-sky-400 to-sky-500"
  },
  {
    nombre: "Instagram",
    url: "#",
    icono: "📸",
    color: "from-pink-500 to-purple-500"
  }
];

export default function Contacto() {
  const [formState, setFormState] = useState({
    nombre: '',
    email: '',
    empresa: '',
    servicio: '',
    mensaje: ''
  });

  const [enviando, setEnviando] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnviando(true);
    // Simular envío
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Formulario enviado:', formState);
    setEnviando(false);
  };

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
              Conecta con
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                {" "}Nosotros
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Estamos aquí para ayudarte a transformar tus ideas en realidad.
              ¿Conversamos?
            </p>
          </motion.div>
        </div>
      </section>

      {/* Información de Contacto */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-black to-black" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 p-8 sm:p-12 rounded-2xl border border-gray-800 backdrop-blur-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
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
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white"
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
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white"
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
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white"
                    value={formState.empresa}
                    onChange={(e) => setFormState({...formState, empresa: e.target.value})}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Servicio de interés
                  </label>
                  <select
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white"
                    value={formState.servicio}
                    onChange={(e) => setFormState({...formState, servicio: e.target.value})}
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="consultoria">Consultoría Estratégica</option>
                    <option value="diseno">Diseño UX/UI</option>
                    <option value="desarrollo">Desarrollo de Productos</option>
                  </select>
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
                  rows={6}
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white"
                  value={formState.mensaje}
                  onChange={(e) => setFormState({...formState, mensaje: e.target.value})}
                ></textarea>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={enviando}
                className="w-full py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-orange-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {enviando ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </span>
                ) : "Enviar mensaje"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Redes Sociales */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-12"
          >
            Síguenos en redes sociales
          </motion.h2>
          
          <div className="flex justify-center space-x-8">
            {redesSociales.map((red, index) => (
              <motion.a
                key={index}
                href={red.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.2 }}
                className={`w-16 h-16 rounded-full bg-gradient-to-br ${red.color} flex items-center justify-center text-3xl shadow-lg`}
              >
                {red.icono}
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 