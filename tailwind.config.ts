import {
  mauve,
  mauveA,
  mauveDark,
  mauveDarkA,
  violet,
  violetDark,
} from '@radix-ui/colors';
import {Config} from 'tailwindcss';

import {toTailwindColors} from './src/utils/colors';

export default {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'work-sans': [
          'var(--ff-work-sans)',
          'var(--ff-sarasa-gothic-tc)',
          'sans-serif',
        ],
      },
      colors: {
        ...toTailwindColors({
          mauve,
          mauveA,
          mauveDark,
          mauveDarkA,
          violet,
          violetDark,
        }),
      },
    },
  },
  plugins: [],
} satisfies Config;
