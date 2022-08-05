/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx,jsx,js}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'clickco-blue': '#182538',
        'clickco-turquoise': '#5FB3BD',
        'clickco-teal': '#173132',
      },
      fontFamily: {
        'kumbh-sans': ['Kumbh-Sans', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '30px',
      },
    },
  },
  plugins: [],
};
