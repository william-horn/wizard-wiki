/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'main-title': 'white',
        logo: '#16191d',
        'base': '#c8d4e2',
        primary: '#16191d',
        secondary: '#2c3641',
        'nav-link-hover': '#f5c000',
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
