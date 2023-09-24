/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'dm': ['DM Sans', 'sans-serif'],
        'noto': ['Noto Serif', 'serif'],
        'notoSans': ['Noto Sans', 'sans-serif'],
        'karla' : ['Karla', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'charlotte': "url('/src/Assets/charlotte-uptown.jpg')",
      }
    },
  },
  plugins: [],
}

