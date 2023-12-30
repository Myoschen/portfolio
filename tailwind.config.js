const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        'background': 'hsl(var(--background))',
        'foreground': 'hsl(var(--foreground))',
        'border': 'hsl(var(--border))',
        'ring': 'hsl(var(--ring))',
        'primary': 'hsl(var(--primary))',
        'primary-hover': 'hsl(var(--primary-hover))',
        'secondary': 'hsl(var(--secondary))',
      },
      fontFamily: {
        sans: [
          'var(--font-geist-sans)',
          'var(--font-noto-sans-tc)',
          ...fontFamily.sans,
        ],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
