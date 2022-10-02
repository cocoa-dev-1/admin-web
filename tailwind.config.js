

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    gridTemplateColumns: {
      'grid-fit': 'repeat(auto-fit, minmax(calc(100px + (20px / 2)), 1fr));',
    },
    extend: {},
  },
  plugins: [],
}