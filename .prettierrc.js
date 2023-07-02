/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
module.exports = {
  singleQuote: true,
  bracketSpacing: false,
  plugins: [require('@ianvs/prettier-plugin-sort-imports')],
  // for sorting imports
  importOrder: [
    '<BUILT_IN_MODULES>',
    '^(react/(.*)$)|^(react$)',
    '^(next/(.*)$)|^(next$)',
    '<THIRD_PARTY_MODULES>',
    '',
    '^@/types/(.*)$',
    '^@/constants/(.*)$',
    '^@/helpers/(.*)$',
    '^@/hooks/(.*)$',
    '^@/store/(.*)$',
    '^@/components/(.*)$',
    '',
    '^[./]',
  ],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderTypeScriptVersion: '5.0.0',
};
