/** @type {import('next').NextConfig} */
const nextConfig = {
  modularizeImports: {
    '@tabler/icons-react': {
      transform: '@tabler/icons-react/dist/esm/icons/{{member}}',
    },
  },
  transpilePackages: ['@tabler/icons-react'],
};

const withNextIntl = require('next-intl/plugin')('./src/utils/i18n.ts')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(withNextIntl(nextConfig));
