import type { MiddlewareConfig, NextRequest } from 'next/server'
import { createI18nMiddleware } from 'next-international/middleware'

const I18nMiddleware = createI18nMiddleware({
  locales: ['en', 'zh-Hant'],
  defaultLocale: 'en',
})

export function middleware(request: NextRequest) {
  return I18nMiddleware(request)
}

export const config: MiddlewareConfig = {
  matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)'],
}
