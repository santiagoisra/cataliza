# A/B Testing - Nueva Paleta de Colores

## Descripción

Esta carpeta contiene una versión alternativa de la página de inicio con una nueva paleta de colores para realizar pruebas A/B. El objetivo es evaluar si esta nueva combinación de colores genera mejor engagement y conversión que la paleta actual.

## Colores utilizados

- **Fondo**: `#292c33` (reemplaza al negro actual)
- **Color principal**: `#4a87c0` (reemplaza al naranja-500 actual)
- **Color secundario**: `#2f5385` (reemplaza al rojo-500 actual)

## Estructura

- `/src/app/ab-test/page.tsx` - Página principal del A/B testing
- `/src/components/ab-test/` - Componentes específicos para el A/B testing
- `/src/config/abTestColors.ts` - Configuración de colores y guía de reemplazo

## Cómo implementar los cambios si el test es exitoso

Si la versión A/B resulta exitosa y se decide adoptar esta nueva paleta de colores, sigue estos pasos:

### 1. Actualizar la configuración de Tailwind

Modifica el archivo `tailwind.config.js` para incluir los nuevos colores en la paleta:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        'cataliza-bg': '#292c33',
        'cataliza-primary': '#4a87c0',
        'cataliza-secondary': '#2f5385',
      },
    },
  },
  // ...resto de la configuración
};
```

### 2. Reemplazar referencias a colores en los componentes

Puedes usar la guía de reemplazo en `src/config/abTestColors.ts` como referencia. Los principales cambios son:

- `bg-black` → `bg-cataliza-bg` o `bg-[#292c33]`
- `from-orange-500` → `from-cataliza-primary` o `from-[#4a87c0]`
- `to-red-500` → `to-cataliza-secondary` o `to-[#2f5385]`

### 3. Actualizar los componentes principales

Puedes optar por:

1. Reemplazar los componentes actuales con las versiones del A/B testing
2. Actualizar manualmente los colores en los componentes existentes

### 4. Eliminar los archivos de A/B testing

Una vez implementados los cambios, puedes eliminar:

- `/src/app/ab-test/`
- `/src/components/ab-test/`
- `/src/config/abTestColors.ts`

## Notas adicionales

- Esta implementación está diseñada para ser independiente del resto del sitio
- Los componentes incluyen comentarios que indican su propósito como parte de un A/B testing
- La ruta `/ab-test` solo es accesible en desarrollo mediante un enlace en la página principal
