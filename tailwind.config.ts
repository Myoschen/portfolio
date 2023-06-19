import { mauve, mauveA, mauveDark, mauveDarkA, violet, violetDark } from '@radix-ui/colors'
import { Config } from 'tailwindcss'

import { toTailwindColors } from './utils/colors'

export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'work-sans': ['var(--ff-work-sans)', 'var(--ff-noto)', 'serif']
      },
      colors: {
        ...toTailwindColors({
          mauve,
          mauveA,
          mauveDark,
          mauveDarkA,
          violet,
          violetDark
        })
      }
    }
  },
  plugins: []
} satisfies Config
