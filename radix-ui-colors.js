// https://github.com/radix-ui/colors/issues/10
const plugin = require('tailwindcss/plugin')
const radixColors = require('@radix-ui/colors')

const transformedColors = Object.entries(radixColors).reduce(
  (acc, [paletteName, palette]) => {
    // Transform the palette names so they look more Tailwind-ish
    paletteName = paletteName.replace(/A$/, '-alpha').replace(/Dark/, '-dark')

    // Remove the color name and 'A' from hue levels
    palette = Object.entries(palette).reduce((acc, [hueLevel, color]) => {
      hueLevel = hueLevel.replace(/[a-z]/gi, '')
      acc[hueLevel] = color
      return acc
    }, {})

    acc[paletteName] = palette
    return acc
  },
  {}
)

module.exports = plugin(({}) => {}, {
  theme: {
    extend: {
      colors: {
        ...transformedColors,
      },
    },
  },
})
