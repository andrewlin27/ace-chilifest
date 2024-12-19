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
      animation: {
        'neon-flash': 'neonFlash 6s ease-in-out infinite',
      },
      keyframes: {
        neonFlash: {
          '0%': {
            'text-shadow': '0 0 5px #ff00ff, 0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 40px #ff00ff, 0 0 80px #ff00ff',
            'opacity': 1,
          },
          '10%': {
            'text-shadow': '0 0 5px #ff00ff, 0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 40px #ff00ff, 0 0 80px #ff00ff',
            'opacity': 1,
          },
          '20%': {
            'text-shadow': '0 0 0px #ff00ff, 0 0 0px #ff00ff, 0 0 0px #ff00ff, 0 0 0px #ff00ff, 0 0 0px #ff00ff',
            'opacity': 0, // First blank phase
          },
          '40%': {
            'text-shadow': '0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 40px #00ffff, 0 0 80px #00ffff',
            'opacity': 1,
          },
          '50%': {
            'text-shadow': '0 0 0px #00ffff, 0 0 0px #00ffff, 0 0 0px #00ffff, 0 0 0px #00ffff, 0 0 0px #00ffff',
            'opacity': 0, // Longer fade out
          },
          '70%': {
            'text-shadow': '0 0 5px #ff7f00, 0 0 10px #ff7f00, 0 0 20px #ff7f00, 0 0 40px #ff7f00, 0 0 80px #ff7f00',
            'opacity': 1, // Stronger flash
          },
          '80%': {
            'text-shadow': '0 0 0px #ff7f00, 0 0 0px #ff7f00, 0 0 0px #ff7f00, 0 0 0px #ff7f00, 0 0 0px #ff7f00',
            'opacity': 0, // Longer fade out
          },
          '90%': {
            'text-shadow': '0 0 5px #ff0000, 0 0 10px #ff0000, 0 0 20px #ff0000, 0 0 40px #ff0000, 0 0 80px #ff0000',
            'opacity': 1, // A final burst
          },
          '100%': {
            'text-shadow': '0 0 0px #ff0000, 0 0 0px #ff0000, 0 0 0px #ff0000, 0 0 0px #ff0000, 0 0 0px #ff0000',
            'opacity': 0, // End with no text
          },
        },
      },
      textShadow: {
        'neon': '0 0 5px #ff00ff, 0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 40px #ff00ff, 0 0 80px #ff00ff',
      },
    },
  },
  plugins: [],
}

