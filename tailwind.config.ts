import * as colors from '@radix-ui/colors';
import {Config} from 'tailwindcss';

type RadixColors = typeof colors;
type RadixColor = RadixColors[keyof RadixColors];
type RadixColorLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

const toTailwindColor = (color: RadixColor) =>
  Object.entries(color).reduce((acc, [colorNameWithLevel, hsl]) => {
    const level = (colorNameWithLevel.match(/\d+$/) || [])[0];

    if (level === undefined) {
      throw new Error('Not found radix color level!');
    }

    const k = parseInt(level);

    return {
      ...acc,
      [k]: hsl,
    };
  }, {} as Record<RadixColorLevel, string>);

const toTailwindColors = (colors: Partial<RadixColors>) =>
  Object.entries(colors).reduce(
    (acc, [colorName, color]) => ({
      ...acc,
      [colorName]: toTailwindColor(color),
    }),
    {} as Partial<Record<keyof RadixColors, Record<RadixColorLevel, string>>>
  );

export default {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: ['class'],
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
          mauve: colors.mauve,
          mauveA: colors.mauveA,
          mauveDark: colors.mauveDark,
          mauveDarkA: colors.mauveDarkA,
          violet: colors.violet,
          violetDark: colors.violetDark,
        }),
      },
    },
  },
} satisfies Config;
