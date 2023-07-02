// https://stackoverflow.com/questions/74316697/eslint-types-for-eslintrc-js
// @ts-check
const {defineConfig} = require('eslint-define-config');

module.exports = defineConfig({
  root: true,
  extends: [
    'next/core-web-vitals',
    'prettier',
    'plugin:tailwindcss/recommended',
  ],
  plugins: ['tailwindcss'],
  rules: {
    'tailwindcss/no-custom-classname': 'off',
    'tailwindcss/classnames-order': 'error',
  },
  settings: {
    tailwindcss: {
      callees: ['cn', 'cva'],
      config: 'tailwind.config.js',
    },
  },
  overrides: [{files: ['*.ts', '*.tsx'], parser: '@typescript-eslint/parser'}],
});
