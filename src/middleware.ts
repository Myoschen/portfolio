import createMiddleware from 'next-intl/middleware'

import { locales } from '@/lib/i18n'

export default createMiddleware({
  locales,
  defaultLocale: 'en',
})

export const config = {
  matcher: ['/', '/(de|en)/:path*'],
}
