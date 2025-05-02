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
                  <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cataliza-primary to-cataliza-secondary"></div>

                  {/* Paso 1 */}
                  <div className="relative flex items-center mb-16">
                    {/* Contenido izquierdo */}
                    <div className="w-1/2 pr-8 text-right">
                      <h4 className="text-white font-semibold text-lg">Contacto inicial</h4>
                    </div>

                    {/* Círculo central con número */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-cataliza-primary to-cataliza-secondary flex items-center justify-center text-white font-bold text-lg z-10 shadow-lg shadow-cataliza-primary/20">1</div>

                    {/* Contenido derecho */}
                    <div className="w-1/2 pl-8">
                      <p className="text-gray-400">Completá el formulario y contanos sobre tu proyecto o idea. Nos pondremos en contacto contigo rápidamente.</p>
                    </div>
                  </div>

                  {/* Paso 2 */}
                  <div className="relative flex items-center mb-16">
                    {/* Contenido izquierdo (invertido) */}
                    <div className="w-1/2 pr-8 text-right">
                      <p className="text-gray-400">Agendamos una reunión para entender en profundidad tus necesidades, objetivos y expectativas.</p>
                    </div>

                    {/* Círculo central con número */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-cataliza-primary to-cataliza-secondary flex items-center justify-center text-white font-bold text-lg z-10 shadow-lg shadow-cataliza-primary/20">2</div>

                    {/* Contenido derecho (invertido) */}
                    <div className="w-1/2 pl-8">
                      <h4 className="text-white font-semibold text-lg">Reunión de descubrimiento</h4>
                    </div>
                  </div>

                  {/* Paso 3 */}
                  <div className="relative flex items-center mb-16">
                    {/* Contenido izquierdo */}
                    <div className="w-1/2 pr-8 text-right">
                      <h4 className="text-white font-semibold text-lg">Propuesta personalizada</h4>
                    </div>

                    {/* Círculo central con número */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-cataliza-primary to-cataliza-secondary flex items-center justify-center text-white font-bold text-lg z-10 shadow-lg shadow-cataliza-primary/20">3</div>

                    {/* Contenido derecho */}
                    <div className="w-1/2 pl-8">
                      <p className="text-gray-400">Desarrollamos una propuesta adaptada a tus necesidades específicas con un plan de trabajo claro.</p>
                    </div>
                  </div>

                  {/* Paso 4 */}
                  <div className="relative flex items-center">
                    {/* Contenido izquierdo (invertido) */}
                    <div className="w-1/2 pr-8 text-right">
                      <p className="text-gray-400">Nos integramos a tu equipo y comenzamos a ejecutar el plan, con comunicación constante y entregas regulares.</p>
                    </div>

                    {/* Círculo central con número */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-cataliza-primary to-cataliza-secondary flex items-center justify-center text-white font-bold text-lg z-10 shadow-lg shadow-cataliza-primary/20">4</div>

                    {/* Contenido derecho (invertido) */}
                    <div className="w-1/2 pl-8">
                      <h4 className="text-white font-semibold text-lg">Comenzamos a trabajar</h4>
                    </div>
                  </div>
                </div>

                {/* Versión móvil - visible solo en pantallas pequeñas */}
                <div className="md:hidden">
                  <div className="relative">
                    {/* Línea vertical izquierda */}
                    <div className="absolute left-6 top-0 h-full w-0.5 bg-gradient-to-b from-cataliza-primary to-cataliza-secondary"></div>

                    {/* Paso 1 */}
                    <div className="relative pl-16 pb-10">
                      {/* Círculo con número */}
                      <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-gradient-to-br from-cataliza-primary to-cataliza-secondary flex items-center justify-center text-white font-bold text-lg z-10 shadow-lg shadow-cataliza-primary/20">1</div>
                      <h4 className="text-white font-semibold text-lg mb-2">Contacto inicial</h4>
                      <p className="text-gray-400">Completá el formulario y contanos sobre tu proyecto o idea. Nos pondremos en contacto contigo rápidamente.</p>
                    </div>

                    {/* Paso 2 */}
                    <div className="relative pl-16 pb-10">
                      {/* Círculo con número */}
                      <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-gradient-to-br from-cataliza-primary to-cataliza-secondary flex items-center justify-center text-white font-bold text-lg z-10 shadow-lg shadow-cataliza-primary/20">2</div>
                      <h4 className="text-white font-semibold text-lg mb-2">Reunión de descubrimiento</h4>
                      <p className="text-gray-400">Agendamos una reunión para entender en profundidad tus necesidades, objetivos y expectativas.</p>
                    </div>

                    {/* Paso 3 */}
                    <div className="relative pl-16 pb-10">
                      {/* Círculo con número */}
                      <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-gradient-to-br from-cataliza-primary to-cataliza-secondary flex items-center justify-center text-white font-bold text-lg z-10 shadow-lg shadow-cataliza-primary/20">3</div>
                      <h4 className="text-white font-semibold text-lg mb-2">Propuesta personalizada</h4>
                      <p className="text-gray-400">Desarrollamos una propuesta adaptada a tus necesidades específicas con un plan de trabajo claro.</p>
                    </div>

                    {/* Paso 4 */}
                    <div className="relative pl-16">
                      {/* Círculo con número */}
                      <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-gradient-to-br from-cataliza-primary to-cataliza-secondary flex items-center justify-center text-white font-bold text-lg z-10 shadow-lg shadow-cataliza-primary/20">4</div>
                      <h4 className="text-white font-semibold text-lg mb-2">Comenzamos a trabajar</h4>
                      <p className="text-gray-400">Nos integramos a tu equipo y comenzamos a ejecutar el plan, con comunicación constante y entregas regulares.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Equipo */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Nuestro equipo:</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-cataliza-bg/30 p-4 rounded-xl border border-cataliza-primary/20">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cataliza-primary/20 to-cataliza-secondary/20 overflow-hidden flex items-center justify-center">
                        {/* Placeholder para la foto - reemplazar con Image cuando tengas las imágenes */}
                        <span className="text-2xl">👨‍💻</span>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">Santiago Israelevich</h4>
                        <p className="text-cataliza-primary text-sm">UX/UI Designer</p>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Especialista en diseño centrado en el usuario, creando experiencias digitales intuitivas y atractivas que conectan con los usuarios y cumplen objetivos de negocio.
                    </p>
                  </div>

                  <div className="bg-cataliza-bg/30 p-4 rounded-xl border border-cataliza-primary/20">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cataliza-primary/20 to-cataliza-secondary/20 overflow-hidden flex items-center justify-center">
                        {/* Placeholder para la foto - reemplazar con Image cuando tengas las imágenes */}
                        <span className="text-2xl">👨‍💻</span>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">Nicolás Rivera</h4>
                        <p className="text-cataliza-primary text-sm">Product & Development Lead</p>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Experto en estrategia de producto y desarrollo, transformando conceptos en soluciones digitales funcionales con enfoque en calidad, escalabilidad y resultados.
                    </p>
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
