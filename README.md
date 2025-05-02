# Cataliza - Sitio Web

Este es el sitio web oficial de Cataliza, una empresa especializada en el desarrollo de productos digitales.

## Paleta de Colores

### Paleta Actual (Azul)
- **Fondo**: `#191d23` (versión ligeramente más oscura de #1c2026)
- **Color principal**: `#4a87c0`
- **Color secundario**: `#2f5385`

Estos colores se implementan usando clases personalizadas de Tailwind:
```jsx
className="bg-cataliza-bg"
className="text-cataliza-primary"
className="border-cataliza-secondary"
```

Para gradientes:
```jsx
className="bg-gradient-to-r from-cataliza-primary to-cataliza-secondary"
```

Definidos en `tailwind.config.js`:
```js
module.exports = {
  theme: {
    extend: {
      colors: {
        'cataliza-bg': '#191d23',
        'cataliza-primary': '#4a87c0',
        'cataliza-secondary': '#2f5385',
      },
    },
  },
};
```

### Paleta Original (Naranja/Rojo)
Si en algún momento se desea volver a la paleta original, estos son los colores:
- **Fondo**: `black`
- **Color principal**: `orange-500` (equivalente a #f97316 en Tailwind)
- **Color secundario**: `red-500` (equivalente a #ef4444 en Tailwind)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
