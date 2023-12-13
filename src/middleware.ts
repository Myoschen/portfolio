import createMiddleware from 'next-intl/middleware'

import { defaultLocale, locales } from '@/lib/i18n'

export default createMiddleware({ locales, defaultLocale })
export const config = {
  matcher: ['/', '/(en|zh-TW)/:path*', '/((?!_next|_vercel|.*\\..*).*)'],
}
