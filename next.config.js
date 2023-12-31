const withNextIntl = require('next-intl/plugin')('./src/lib/i18n.ts')
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true' })

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  modularizeImports: {
    '@/components/icons': {
      transform: '@/components/icons/{{member}}',
    },
  },
}

module.exports = withBundleAnalyzer(withNextIntl(nextConfig))
