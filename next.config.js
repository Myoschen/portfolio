const withNextIntl = require('next-intl/plugin')('./src/lib/i18n.ts')
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true' })

module.exports = withBundleAnalyzer(withNextIntl(
  /** @type {import('next').NextConfig} */
  {
    reactStrictMode: true,
    webpack: (config) => {
      const fileLoaderRule = config.module.rules.find(rule => rule.test?.test?.('.svg'))

      config.module.rules.push(
        {
          ...fileLoaderRule,
          test: /\.svg$/i,
          resourceQuery: /url/,
        },
        {
          test: /\.svg$/i,
          issuer: fileLoaderRule.issuer,
          resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
          use: ['@svgr/webpack'],
        }
      )

      fileLoaderRule.exclude = /\.svg$/i

      return config
    },
  }
))
