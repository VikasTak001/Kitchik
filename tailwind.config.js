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
    screens: {
      'xs':'540px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      '1/2xl' :'1400px',
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

  },
  plugins: [],
}