import { notFound } from 'next/navigation'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'
import { type ReactNode } from 'react'

import Sidebar from '@/components/sidebar'
import { sarasa_gothic, work_sans } from '@/constants/fonts'
import { locales } from '@/lib/i18n'
import ThemeProvider from '@/store/theme'

interface LayoutProps {
  children: ReactNode
  params: { locale: string }
}

export async function generateStaticParams() {
  return locales.map(locale => ({ locale }))
}

export async function generateMetadata({ params: { locale } }: LayoutProps) {
  const t = await getTranslations({ locale })
  return {
    title: t('title.home'),
  }
}

export default async function RootLayout({
  children,
  params: { locale },
}: LayoutProps) {
  let messages
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default
  }
  catch (error) {
    notFound()
  }
  unstable_setRequestLocale(locale)

  return (
    <html
      lang={locale}
      className={`${work_sans.variable} ${sarasa_gothic.variable}`}
    >
      <body className="min-h-screen bg-mauve-1 font-main text-mauve-12 dark:bg-mauve-dark-1 dark:text-mauve-dark-12">
        <div className="flex max-w-4xl flex-col pb-20 pt-8 antialiased transition-colors md:mx-auto md:flex-row md:pt-20 lg:pt-32">
          <NextIntlClientProvider locale={locale} messages={messages}>
            <ThemeProvider>
              <Sidebar />
              {children}
            </ThemeProvider>
          </NextIntlClientProvider>
        </div>
      </body>
    </html>
  )
}
