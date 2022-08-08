/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "lumin-yellow": "#F4B54A",
        "lumin-blue": "#1967D2",
        "lumin-gray": "#1F2025",
        "lumin-gray-light": "#30323C"
      }
    },
  },
  plugins: [],
}
