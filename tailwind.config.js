/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'dark-purple': '#38143D',
      'off-white': '#EBFEFF',
      'sea-green': '#2CA6A4',
      'selective-yellow': '#fcba04',
      'big-red': '#C42021',
      'black': '#000000',
    },
    extend: {
      fontFamily: {
        slab: ['Roboto Slab', "serif"]
      },
    },
  },
  plugins: [],
}

