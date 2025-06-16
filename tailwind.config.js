/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./Portfolio/src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      scrollBehavior: ['responsive'],
    },
  },
  plugins: [],
}


