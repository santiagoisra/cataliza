'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [formState, setFormState] = useState({
    nombre: '',
    email: '',
    mensaje: '',
    empresa: '',
    telefono: ''
  });
  const [enviado] = useState(false);
  const [error] = useState('');

  // Cerrar el modal con la tecla Escape
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  // Prevenir scroll del body cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Nota: El formulario se maneja directamente a través de Formspree

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Equipo flotante izquierda */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="fixed left-16 top-[25%] -translate-y-1/2 z-50 hidden lg:block"
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
              className="relative flex flex-col items-center"
            >
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-cataliza-primary/20 to-cataliza-secondary/20 backdrop-blur-md border border-cataliza-primary/30 p-4 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cataliza-primary/20 to-cataliza-secondary/20 overflow-hidden flex items-center justify-center mb-2">
                  <span className="text-2xl">👨‍💻</span>
                </div>
                <h4 className="text-white font-semibold">Santiago Israelevich</h4>
                <p className="text-cataliza-primary text-sm">UX/UI Designer</p>
              </div>
              <div className="mt-4 bg-gray-900/50 backdrop-blur-sm border border-cataliza-primary/20 rounded-lg p-4 max-w-[280px]">
                <p className="text-gray-400 text-sm">
                  Especialista en diseño centrado en el usuario, creando experiencias digitales intuitivas y atractivas que conectan con los usuarios y cumplen objetivos de negocio.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Equipo flotante derecha */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed right-16 top-[25%] -translate-y-1/2 z-50 hidden lg:block"
          >
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
              className="relative flex flex-col items-center"
            >
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-cataliza-primary/20 to-cataliza-secondary/20 backdrop-blur-md border border-cataliza-primary/30 p-4 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cataliza-primary/20 to-cataliza-secondary/20 overflow-hidden flex items-center justify-center mb-2">
                  <span className="text-2xl">👨‍💻</span>
                </div>
                <h4 className="text-white font-semibold">Nicolás Rivera</h4>
                <p className="text-cataliza-primary text-sm">Product & Development Lead</p>
              </div>
              <div className="mt-4 bg-gray-900/50 backdrop-blur-sm border border-cataliza-primary/20 rounded-lg p-4 max-w-[280px]">
                <p className="text-gray-400 text-sm">
                  Experto en estrategia de producto y desarrollo, transformando conceptos en soluciones digitales funcionales con enfoque en calidad, escalabilidad y resultados.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative bg-gradient-to-br from-gray-900 to-cataliza-bg border border-cataliza-primary/20 rounded-2xl shadow-xl shadow-cataliza-primary/5 w-full max-w-4xl max-h-[90vh] overflow-y-auto"
          >
            {/* Botón de cerrar */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white z-10"
              aria-label="Cerrar modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Contenido del modal */}
            <div className="p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
                Comencemos a trabajar
                <span className="bg-gradient-to-r from-cataliza-primary to-cataliza-secondary bg-clip-text text-transparent">
                  {" "}juntos
                </span>
              </h2>

              {/* Pasos a seguir - Línea de tiempo */}
              <div className="mb-12">
                <h3 className="text-xl font-semibold text-white mb-6 text-center">Así es como trabajamos:</h3>

                {/* Versión de escritorio - visible solo en pantallas medianas y grandes */}
                <div className="relative hidden md:block">
                  {/* Línea vertical central */}
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-cataliza-primary to-cataliza-secondary h-full"
                  />

                  {/* Paso 1 */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="relative flex items-center mb-16"
                  >
                    {/* Contenido izquierdo */}
                    <div className="w-[calc(50%-3rem)] text-right">
                      <h4 className="text-white font-semibold text-lg">Contacto inicial</h4>
                    </div>

                    {/* Círculo central con número */}
                    <div className="w-24 flex justify-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, type: "spring" }}
                        className="w-12 h-12 rounded-full bg-gradient-to-br from-cataliza-primary to-cataliza-secondary flex items-center justify-center text-white font-bold text-lg z-10 shadow-lg shadow-cataliza-primary/20"
                      >
                        1
                      </motion.div>
                    </div>

                    {/* Contenido derecho */}
                    <div className="w-[calc(50%-3rem)]">
                      <p className="text-gray-400">Completá el formulario y contanos sobre tu proyecto o idea. Nos pondremos en contacto contigo rápidamente.</p>
                    </div>
                  </motion.div>

                  {/* Paso 2 */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="relative flex items-center mb-16"
                  >
                    {/* Contenido izquierdo */}
                    <div className="w-[calc(50%-3rem)] text-right">
                      <p className="text-gray-400">Agendamos una reunión para entender en profundidad tus necesidades, objetivos y expectativas.</p>
                    </div>

                    {/* Círculo central con número */}
                    <div className="w-24 flex justify-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, type: "spring" }}
                        className="w-12 h-12 rounded-full bg-gradient-to-br from-cataliza-primary to-cataliza-secondary flex items-center justify-center text-white font-bold text-lg z-10 shadow-lg shadow-cataliza-primary/20"
                      >
                        2
                      </motion.div>
                    </div>

                    {/* Contenido derecho */}
                    <div className="w-[calc(50%-3rem)]">
                      <h4 className="text-white font-semibold text-lg">Reunión de descubrimiento</h4>
                    </div>
                  </motion.div>

                  {/* Paso 3 */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="relative flex items-center mb-16"
                  >
                    {/* Contenido izquierdo */}
                    <div className="w-[calc(50%-3rem)] text-right">
                      <h4 className="text-white font-semibold text-lg">Propuesta personalizada</h4>
                    </div>

                    {/* Círculo central con número */}
                    <div className="w-24 flex justify-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8, type: "spring" }}
                        className="w-12 h-12 rounded-full bg-gradient-to-br from-cataliza-primary to-cataliza-secondary flex items-center justify-center text-white font-bold text-lg z-10 shadow-lg shadow-cataliza-primary/20"
                      >
                        3
                      </motion.div>
                    </div>

                    {/* Contenido derecho */}
                    <div className="w-[calc(50%-3rem)]">
                      <p className="text-gray-400">Desarrollamos una propuesta adaptada a tus necesidades específicas con un plan de trabajo claro.</p>
                    </div>
                  </motion.div>

                  {/* Paso 4 */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="relative flex items-center"
                  >
                    {/* Contenido izquierdo */}
                    <div className="w-[calc(50%-3rem)] text-right">
                      <p className="text-gray-400">Nos integramos a tu equipo y comenzamos a ejecutar el plan, con comunicación constante y entregas regulares.</p>
                    </div>

                    {/* Círculo central con número */}
                    <div className="w-24 flex justify-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1, type: "spring" }}
                        className="w-12 h-12 rounded-full bg-gradient-to-br from-cataliza-primary to-cataliza-secondary flex items-center justify-center text-white font-bold text-lg z-10 shadow-lg shadow-cataliza-primary/20"
                      >
                        4
                      </motion.div>
                    </div>

                    {/* Contenido derecho */}
                    <div className="w-[calc(50%-3rem)]">
                      <h4 className="text-white font-semibold text-lg">Comenzamos a trabajar</h4>
                    </div>
                  </motion.div>
                </div>

                {/* Versión móvil - visible solo en pantallas pequeñas */}
                <div className="md:hidden">
                  <div className="relative">
                    {/* Línea vertical izquierda */}
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1 }}
                      className="absolute left-6 top-0 w-0.5 bg-gradient-to-b from-cataliza-primary to-cataliza-secondary"
                    />

                    {/* Paso 1 */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="relative pl-16 pb-10"
                    >
                      {/* Círculo con número */}
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, type: "spring" }}
                        className="absolute left-0 top-0 w-12 h-12 rounded-full bg-gradient-to-br from-cataliza-primary to-cataliza-secondary flex items-center justify-center text-white font-bold text-lg z-10 shadow-lg shadow-cataliza-primary/20"
                      >
                        1
                      </motion.div>
                      <h4 className="text-white font-semibold text-lg mb-2">Contacto inicial</h4>
                      <p className="text-gray-400">Completá el formulario y contanos sobre tu proyecto o idea. Nos pondremos en contacto contigo rápidamente.</p>
                    </motion.div>

                    {/* Paso 2 */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      className="relative pl-16 pb-10"
                    >
                      {/* Círculo con número */}
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, type: "spring" }}
                        className="absolute left-0 top-0 w-12 h-12 rounded-full bg-gradient-to-br from-cataliza-primary to-cataliza-secondary flex items-center justify-center text-white font-bold text-lg z-10 shadow-lg shadow-cataliza-primary/20"
                      >
                        2
                      </motion.div>
                      <h4 className="text-white font-semibold text-lg mb-2">Reunión de descubrimiento</h4>
                      <p className="text-gray-400">Agendamos una reunión para entender en profundidad tus necesidades, objetivos y expectativas.</p>
                    </motion.div>

                    {/* Paso 3 */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 }}
                      className="relative pl-16 pb-10"
                    >
                      {/* Círculo con número */}
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7, type: "spring" }}
                        className="absolute left-0 top-0 w-12 h-12 rounded-full bg-gradient-to-br from-cataliza-primary to-cataliza-secondary flex items-center justify-center text-white font-bold text-lg z-10 shadow-lg shadow-cataliza-primary/20"
                      >
                        3
                      </motion.div>
                      <h4 className="text-white font-semibold text-lg mb-2">Propuesta personalizada</h4>
                      <p className="text-gray-400">Desarrollamos una propuesta adaptada a tus necesidades específicas con un plan de trabajo claro.</p>
                    </motion.div>

                    {/* Paso 4 */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 }}
                      className="relative pl-16"
                    >
                      {/* Círculo con número */}
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.9, type: "spring" }}
                        className="absolute left-0 top-0 w-12 h-12 rounded-full bg-gradient-to-br from-cataliza-primary to-cataliza-secondary flex items-center justify-center text-white font-bold text-lg z-10 shadow-lg shadow-cataliza-primary/20"
                      >
                        4
                      </motion.div>
                      <h4 className="text-white font-semibold text-lg mb-2">Comenzamos a trabajar</h4>
                      <p className="text-gray-400">Nos integramos a tu equipo y comenzamos a ejecutar el plan, con comunicación constante y entregas regulares.</p>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Formulario de contacto */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Contactanos:</h3>

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

                <form action="https://formspree.io/f/xpwdqblp" method="POST" className="space-y-4">
                  <input type="hidden" name="_subject" value="Nuevo mensaje desde el modal de contacto de Cataliza" />
                  <input type="hidden" name="_next" value="https://cataliza.ar/gracias" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">
                        Nombre completo
                      </label>
                      <input
                        type="text"
                        name="name"
                        title="Nombre completo"
                        placeholder="Tu nombre completo"
                        className="w-full px-4 py-3 bg-cataliza-bg/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cataliza-primary focus:border-transparent text-white"
                        value={formState.nombre}
                        onChange={(e) => setFormState({...formState, nombre: e.target.value})}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        title="Email"
                        placeholder="tu@email.com"
                        className="w-full px-4 py-3 bg-cataliza-bg/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cataliza-primary focus:border-transparent text-white"
                        value={formState.email}
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">
                        Empresa (opcional)
                      </label>
                      <input
                        type="text"
                        name="company"
                        title="Empresa"
                        placeholder="Nombre de tu empresa (opcional)"
                        className="w-full px-4 py-3 bg-cataliza-bg/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cataliza-primary focus:border-transparent text-white"
                        value={formState.empresa}
                        onChange={(e) => setFormState({...formState, empresa: e.target.value})}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">
                        Teléfono (opcional)
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        title="Teléfono"
                        placeholder="Tu número de teléfono (opcional)"
                        className="w-full px-4 py-3 bg-cataliza-bg/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cataliza-primary focus:border-transparent text-white"
                        value={formState.telefono}
                        onChange={(e) => setFormState({...formState, telefono: e.target.value})}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">
                      Cuéntanos sobre tu proyecto
                    </label>
                    <textarea
                      rows={4}
                      name="message"
                      title="Mensaje"
                      placeholder="Contanos sobre tu proyecto o idea"
                      className="w-full px-4 py-3 bg-cataliza-bg/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cataliza-primary focus:border-transparent text-white"
                      value={formState.mensaje}
                      onChange={(e) => setFormState({...formState, mensaje: e.target.value})}
                      required
                    ></textarea>
                  </div>

                  <div className="flex justify-end">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      type="submit"
                      className="px-8 py-3 bg-gradient-to-r from-cataliza-primary to-cataliza-secondary text-white font-semibold rounded-lg shadow-lg hover:shadow-cataliza-primary/20"
                    >
                      Enviar mensaje
                    </motion.button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
