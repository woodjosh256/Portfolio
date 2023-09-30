/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  
  utilities: {},
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'dark-purple': '#38143D',
      'off-white': '#f8fafd',
      'sea-green': '#2CA6A4',
      'light-sea-green': '#A6E7E6',
      'dark-sea-green': '#1E716F',
      'selective-yellow': '#fcba04',
      'light-selective-yellow': '#FDD35D',
      'big-red': '#C42021',
      'light-big-red': '#EE9696',
      'black': '#000000',
      'gray': '#BFC4CF',
      'dark-gray': '#6E6E6E',
    },
    extend: {
      fontFamily: {
        slab: ['Roboto Slab', "serif"]
      },
    },
  },
  plugins: [],
}

