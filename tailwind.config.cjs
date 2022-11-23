/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C3D82D',
        secondary: '#4796E1',
        'dark-gray': '#999899',
        'dark-blue-0': '#020b2a',
        'dark-blue-1': '#2C3E7B',
        'dark-blue-2': '#1A2C6C',
        'dark-blue-3': '#01162B',
        'dark-blue-4': '#03103A',
        'dark-gray': '#1C1F21',
        'light-gray': '#999899',
        'blue-green': '#0A3B4A',
      },
      fontFamily: {
        sans: ['Gotham, sans-serif'],
      },
    },
  },
  plugins: [require('flowbite/plugin'), require('@tailwindcss/line-clamp')],
};
