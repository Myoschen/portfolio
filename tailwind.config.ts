import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--ff-work-sans)', 'var(--ff-noto)', 'serif'],
        paragraph: ['var(--ff-mulish)', 'var(--ff-noto)', 'sans-serif'],
      },
      colors: {
        'light-primary': {
          100: '#fdfdfd',
          200: '#fbfbfb',
          300: '#f9f9f9',
          400: '#f7f7f7',
          500: '#f5f5f5',
          600: '#c4c4c4',
          700: '#939393',
          800: '#626262',
          900: '#313131',
        },
        'light-secondary': '#6096B4', // regent-grey
        'dark-primary': {
          100: '#d3d3d3',
          200: '#a7a7a7',
          300: '#7a7a7a',
          400: '#4e4e4e',
          500: '#222222',
          600: '#1b1b1b',
          700: '#141414',
          800: '#0e0e0e',
          900: '#070707',
        },
        'dark-secondary': '#EDC6B1', // mandys-pink
      },
    },
  },
  plugins: [],
} satisfies Config;
