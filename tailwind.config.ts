import {
  mauve,
  mauveA,
  mauveDark,
  mauveDarkA,
  violet,
  violetDark,
} from '@radix-ui/colors';

import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'work-sans': ['var(--ff-work-sans)', 'var(--ff-noto)', 'serif'],
      },
      colors: {
        mauve,
        mauveA,
        mauveDark,
        mauveDarkA,
        violet,
        violetDark,
      },
    },
  },
  plugins: [],
} satisfies Config;
