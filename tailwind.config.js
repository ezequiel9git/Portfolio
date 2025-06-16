/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./Portfolio/src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        base: 'rgba(255,255,255,0.7)',
        dark: 'rgba(17,24,39,0.8)',
        accent: '#2563eb', // azul Tailwind 600
      },
      boxShadow: {
        soft: '0 4px 20px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
}
