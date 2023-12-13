const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: ['class'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'var(--font-geist-sans)',
          'var(--font-noto-sans-tc)',
          ...fontFamily.sans,
        ],
      },
    },
  },
  plugins: [require('./radix-ui-colors'), require('tailwindcss-animate')],
}
