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
      },
    },
    colors: {
      cyan: {
        100: '#3EE9E5',
        200: '#093F68',
      },
      gray: '#777F98',
      white: '#FFFFFF',
      midnight: '#080C20',
      danger: '#FF2965',
      slate: '#94a3b8',
    },
  },
  plugins: [],
}
