import * as colors from '@radix-ui/colors';

export type RadixColors = typeof colors;
export type RadixColor = RadixColors[keyof RadixColors];
export type RadixColorLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export const toTailwindColor = (color: RadixColor) =>
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

export const toTailwindColors = (colors: Partial<RadixColors>) =>
  Object.entries(colors).reduce(
    (acc, [colorName, color]) => ({
      ...acc,
      [colorName]: toTailwindColor(color),
    }),
    {} as Partial<Record<keyof RadixColors, Record<RadixColorLevel, string>>>
  );
