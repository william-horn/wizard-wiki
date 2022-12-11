/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'main-title': 'white',
        logo: '#2c3641',
      },
      backgroundColor: {
        skin: {
          primary: '#2c3641',
          secondary: '#2d343e',
        }
      },
      textColor: {
        skin: {
          base: '#c8d4e2'
        }
      }
    },
  },
  plugins: [],
}
