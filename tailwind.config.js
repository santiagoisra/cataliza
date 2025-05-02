/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cataliza-bg': '#191d23',
        'cataliza-primary': '#4a87c0',
        'cataliza-secondary': '#2f5385',
      },
    },
  },
  plugins: [],
}
