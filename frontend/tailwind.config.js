/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fraktur: ['"UnifrakturMaguntia"', 'cursive'],
        gothic: ['"Old English Text MT"', 'serif'],
        modern: ['"Roboto"', 'sans-serif'],
      },
      colors: {
        lightblue: {
          400: '#7EC8E3',
        },
        purple: {
          800: '#6A4C9C',
        },
      },
    },
  },
  plugins: [],
}

