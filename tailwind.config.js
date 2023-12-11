/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: ['class'],
  theme: {
    extend: {
      fontFamily: {
        main: [
          'var(--ff-work-sans)',
          'var(--ff-sarasa-gothic-tc)',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [require('./radix-ui-colors'), require('tailwindcss-animate')],
}
