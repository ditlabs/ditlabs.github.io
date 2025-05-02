/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        clifford: '#da373d',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

