const stylistic = require('@stylistic/eslint-plugin')

const customized = stylistic.configs.customize({
  flat: false,
  indent: 2,
  jsx: true,
  quotes: 'single',
  semi: false,
})

module.exports = {
  root: true,
  extends: ['next/core-web-vitals', 'plugin:tailwindcss/recommended'],
  plugins: ['@stylistic', 'simple-import-sort'],
  settings: {
    tailwindcss: {
      callees: ['cn', 'cva'],
      config: 'tailwind.config.js',
    },
  },
  rules: {
    ...customized.rules,
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
}
