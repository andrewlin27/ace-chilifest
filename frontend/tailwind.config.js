/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
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

