/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-bg': 'linear-gradient(107.21deg, rgba(255, 255, 255, 0.2) 24.82%, rgba(255, 255, 255, 0.1) 100%)',
      },
    },
    
  },
  plugins: [],
}