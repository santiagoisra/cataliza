/**
 * A/B TESTING COLORS CONFIGURATION
 * 
 * IMPORTANTE: Este archivo contiene la configuración de colores para el test A/B.
 * Si la versión A/B resulta exitosa, estos colores podrían reemplazar la paleta actual.
 * 
 * Para aplicar estos colores a toda la aplicación, sigue estos pasos:
 * 1. Actualiza los colores en el archivo tailwind.config.js
 * 2. Busca y reemplaza las referencias a los colores originales en todos los componentes
 *    (puedes usar los valores de este archivo como referencia)
 */

export const abTestColors = {
  // Colores originales (para referencia)
  original: {
    background: 'black',
    primary: 'orange-500',
    secondary: 'red-500',
  },
  
  // Nuevos colores del test A/B
  new: {
    background: '#292c33',
    primary: '#4a87c0',
    secondary: '#2f5385',
  }
};

/**
 * Guía de reemplazo:
 * 
 * 1. Reemplazar 'bg-black' por 'bg-[#292c33]'
 * 2. Reemplazar 'from-orange-500' por 'from-[#4a87c0]'
 * 3. Reemplazar 'to-red-500' por 'to-[#2f5385]'
 * 4. Reemplazar 'border-orange-500' por 'border-[#4a87c0]'
 * 5. Reemplazar 'hover:shadow-orange-500' por 'hover:shadow-[#4a87c0]'
 * 6. Reemplazar 'bg-orange-500' por 'bg-[#4a87c0]'
 * 
 * Para gradientes:
 * - 'bg-gradient-to-r from-orange-500 to-red-500' por 'bg-gradient-to-r from-[#4a87c0] to-[#2f5385]'
 */

export default abTestColors;
