/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hintergrund': "url('https://raw.githubusercontent.com/Sortelba/assets-sortelba.de/main/images/healflip.svg')",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'brand-primary': '#3B82F6', // Vibrant Blue
        'brand-dark': '#111827', // Almost Black
        'brand-light': '#F9FAFB', // Off-white
        'brand-gray': '#6B7280', // Cool Gray
      }
    },
  },
  plugins: [],
}