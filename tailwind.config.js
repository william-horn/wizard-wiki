/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        skin: {
          primary: "var(--bg-primary)",
          secondary: "var(--bg-secondary)"
        }
      }
    },
  },
  plugins: [],
}
