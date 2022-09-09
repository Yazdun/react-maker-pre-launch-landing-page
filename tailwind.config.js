/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
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
      backgroundImage: {
        'hero-pattern-mobile':
          "url('../public/assets/illustration-hero-mobile.png')",
        'bg-hero-squiggle': "url('../public/assets/bg-hero-squiggle.svg')",
        'illustration-hero-right':
          "url('../public/assets/illustration-hero-right.svg')",
        'illustration-hero-left':
          "url('../public/assets/illustration-hero-left.svg')",
        'bg-footer-squiggle': "url('../public/assets/bg-footer-squiggle.svg')",
        'bg-rainy': "url('../public/assets/rains.svg')",
      },
    },
    colors: {
      cyan: {
        100: '#3EE9E5',
        200: '#093F68',
        300: '#04192c',
        400: '#0fcac7',
        500: '#0d5f9e',
      },
      gray: '#777F98',
      white: '#FFFFFF',
      black: '#000000',
      midnight: '#080C20',
      transparent: 'rgba(0, 0, 0, 0.85)',
      danger: {
        100: '#ff428a',
        200: '#44071e',
      },
      sky: '#3eb3e9',
      slate: '#94a3b8',
    },
  },
  plugins: [],
}
