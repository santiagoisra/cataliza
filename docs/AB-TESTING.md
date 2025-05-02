# A/B Testing - Implementación de Nueva Paleta de Colores

## Descripción

Este documento describe el proceso de A/B testing que se realizó para evaluar una nueva paleta de colores en tonos azules. La prueba resultó exitosa y la nueva paleta ha sido implementada en todo el sitio.

## Colores implementados

- **Fondo**: `#232830` (versión ligeramente más oscura de #292c33)
- **Color principal**: `#4a87c0`
- **Color secundario**: `#2f5385`

## Colores originales (para referencia)

- **Fondo**: `black`
- **Color principal**: `orange-500` (equivalente a #f97316 en Tailwind)
- **Color secundario**: `red-500` (equivalente a #ef4444 en Tailwind)

## Proceso de implementación

### 1. Implementación inicial con clases personalizadas

Inicialmente, se intentó implementar los colores utilizando clases personalizadas en Tailwind:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        'cataliza-bg': '#232830',
        'cataliza-primary': '#4a87c0',
        'cataliza-secondary': '#2f5385',
      },
    },
  },
  // ...resto de la configuración
};
```

### 2. Implementación con clases personalizadas

Se implementaron los colores utilizando clases personalizadas en Tailwind para facilitar el mantenimiento y la consistencia:

```jsx
// Uso en componentes:
className="bg-cataliza-bg"
className="text-cataliza-primary"
className="border-cataliza-secondary"
className="bg-gradient-to-r from-cataliza-primary to-cataliza-secondary"
```

### 3. Actualización de componentes

Se actualizaron todos los componentes principales para utilizar la nueva paleta de colores:

- `src/app/page.tsx`
- `src/components/Navbar.tsx`
- `src/components/Hero.tsx`
- `src/components/Services.tsx`
- `src/components/Process.tsx`
- `src/components/Contact.tsx`

### 4. Cambios principales realizados

- Reemplazo de `bg-black` por `bg-cataliza-bg`
- Reemplazo de `from-orange-500` por `from-cataliza-primary`
- Reemplazo de `to-red-500` por `to-cataliza-secondary`
- Reemplazo de `border-orange-500` por `border-cataliza-primary`
- Reemplazo de `hover:shadow-orange-500` por `hover:shadow-cataliza-primary`
- Reemplazo de `focus:ring-orange-500` por `focus:ring-cataliza-primary`

### 5. Limpieza

Se eliminaron los archivos temporales de A/B testing:

- `/src/app/ab-test/`
- `/src/components/ab-test/`
- `/src/config/abTestColors.ts`

## Notas adicionales

- Se ha mantenido un registro de los colores originales en el README.md principal para referencia futura
- El color de fondo se ajustó ligeramente para mejorar el contraste, pasando de #292c33 a #232830
- La implementación con clases personalizadas facilita el mantenimiento y la consistencia del código
- El uso de clases personalizadas permite cambiar fácilmente los colores en un solo lugar (tailwind.config.js)
- Se ha configurado Tailwind CSS v3.4.1 para asegurar la compatibilidad y el correcto funcionamiento de las clases personalizadas
