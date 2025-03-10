/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',  // Black
        secondary: '#FFFFFF', // White
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
