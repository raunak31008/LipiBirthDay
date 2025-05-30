/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        romantic: {
          pink: 'hsl(340, 82%, 75%)',
          blush: 'hsl(340, 50%, 95%)',
          white: 'hsl(340, 100%, 98%)',
          deep: 'hsl(340, 82%, 52%)',
          accent: 'hsl(320, 100%, 70%)',
        }
      },
      aspectRatio: {
        '4/5': '4 / 5',
        '3/2': '3 / 2',
      }
    },
  },
  plugins: [],
}