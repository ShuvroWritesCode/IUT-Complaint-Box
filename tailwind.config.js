/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica Neue', 'Arial', 'sans-serif'],
      },
      colors: {
        'red-normal': '#ce4031',
        'red-pastel': '#ce4031',
        'red-600': '#dc2626',
        'red-700': '#b91c1c',
        'red-800': '#991b1b',
        'red-900': '#7f1d1d',
        'red-700': '#b91c1c',
      },
    },
  },
  plugins: [],
}
