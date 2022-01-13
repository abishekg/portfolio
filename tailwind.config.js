const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        extend: {
          '0%': {
            content: '"ReactJS"',
          },
          '25%': {
            content: '"NodeJS"',
          },
          '50%': {
            content: '"Tailwind"',
          },
          '75%': {
            content: '"JavaScript"',
          },
          '100%': {
            content: '"TypeScript"',
          },
        },
      },
      animation: {
        extend: 'extend 15s infinite 3s',
      },
      maxWidth: {
        xs: '20rem',
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        xl: '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem',
      },
      colors: {
        tundora: '#444444',
        red: {
          50: '#FF3232',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
