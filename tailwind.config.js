/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'main-title': 'white',
        'base': '#c8d4e2',
        'primary': '#16191d',
        'secondary': '#2c3641',
        'color-3': '#bb32bb',
        'color-4': '#2d9361',
        'color-5': '#55ebff',
        'color-6': '#445364',
      },
      backgroundColor: {
        skin: {
        }
      },
      textColor: {
        skin: {
        }
      },
      fontFamily: {
        'shadows': ['Shadows Into Light', 'cursive'],
        'fredoka': ['Fredoka One', 'cursive'],
      },
      animation: {
        'nav-explore-theme': 'nav-explore 0.3s 0.1s linear forwards',
        'fade-in-first': 'fade-in 1s 0.3s linear forwards',
        'fade-in-second': 'fade-in 1s 0.5s linear forwards',
        'fade-in-third': 'fade-in 1s 0.7s linear forwards',
        'fade-in-fourth': 'fade-in 1s 0.9s linear forwards',
        'fade-in-fifth': 'fade-in 1s 1.1s linear forwards'
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'nav-explore': {
          '100%': { 'background-color': '#16191d', border: 0 }
        }
      }
    },
  },
  plugins: [],
}
