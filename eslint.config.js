import { myoschen } from '@myoschen/eslint-config'

export default myoschen({
  ignores: ['.next'],
  stylistic: true,
  typescript: {
    overrides: {
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-require-imports': 'warn',
      '@typescript-eslint/no-empty-object-type': 'warn',
    },
  },
  react: {
    overrides: {
      'react/no-array-index-key': 'off',
    },
  },
  next: true,
  tailwindcss: true,
})
