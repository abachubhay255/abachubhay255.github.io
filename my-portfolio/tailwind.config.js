const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'black': '#171717',
        'my-blue': '#007bc9'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}