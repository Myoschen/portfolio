import { createSharedPathnamesNavigation } from 'next-intl/navigation'
import { getRequestConfig } from 'next-intl/server'

import type { Locale } from '@/lib/types'

export const locales: Locale[] = ['en', 'zh-TW']
export const defaultLocale = locales[0]

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({ locales })

export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`~/messages/${locale}.json`)).default,
}))
