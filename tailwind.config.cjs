/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#C3D82D',
        secondary: '#4796E1',
        'dark-blue-0': '#020b2a',
        'dark-blue-1': '#2C3E7B',
        'dark-blue-2': '#1A2C6C',
        'dark-blue-3': '#01162B',
      },
      fontFamily: {
        sans: ['Gotham, sans-serif'],
      },
    },
  },
  plugins: [],
};
