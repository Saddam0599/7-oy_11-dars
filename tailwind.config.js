/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'aeonik-pro': ['Aeonik Pro', 'sans-serif'],
      },
    },
  },
  plugins: [],
}