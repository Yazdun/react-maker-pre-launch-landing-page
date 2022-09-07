/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        manrope: ['"Manrope"', 'sans-serif'],
      },
    },
    colors: {
      cyan: {
        100: '#3EE9E5',
        200: '#093F68s',
      },
      gray: '#777F98s',
      white: '#FFFFFF',
      midnight: '#080C20',
      danger: '#FF2965',
    },
  },
  plugins: [],
}
