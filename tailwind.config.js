/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'main-title': 'white',
        'base': '#c8d4e2',
        primary: '#16191d',
        secondary: '#2c3641',
        'color-3': '#bb32bb',
        'color-4': '#2d9361',
        'color-5': '#55ebff',
      },
      backgroundColor: {
        skin: {
        }
      },
      textColor: {
        skin: {
        }
      },
    },
  },
  plugins: [],
}
