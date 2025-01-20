/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E40AF',
          dark: '#1E3A8A'
        },
        secondary: {
          DEFAULT: '#64748B',
          dark: '#475569'
        }
      }
    },
  },
  plugins: [],
}