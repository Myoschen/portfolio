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
      backgroundImage: {
        noise: 'url("data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20250%20250%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cfilter%20id%3D%22a%22%3E%3CfeTurbulence%20baseFrequency%3D%222%22%20stitchTiles%3D%22stitch%22%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url(%23a)%22%2F%3E%3C%2Fsvg%3E")',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
