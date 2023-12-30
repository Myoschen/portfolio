import '@/constants/globals.css'

import type { Metadata } from 'next'
import { Noto_Sans_TC } from 'next/font/google'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'
import { GeistSans } from 'geist/font/sans'
import pick from 'lodash/pick'

import Providers from '@/components/providers'
import Sidebar from '@/components/sidebar'
import { locales } from '@/lib/i18n'
import type { Locale } from '@/lib/types'
import { cn } from '@/lib/utils'

const NotoSansTC = Noto_Sans_TC({ variable: '--font-noto-sans-tc', subsets: ['latin'] })

interface RootLayoutProps {
  children: React.ReactNode
  params: { locale: Locale }
}

// https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadata-fields
export async function generateMetadata({ params: { locale } }: RootLayoutProps) {
  const t = await getTranslations({ locale })
  const metadata: Metadata = {
    title: {
      default: t('Metadata.Title'),
      template: t('Metadata.TitleTemplate'),
    },
    description: t('Metadata.Description'),
    keywords: ['Portfolio', 'Frontend Developer'],
  }
  return metadata
}

export async function generateStaticParams() {
  return locales.map(locale => ({ locale }))
}

export default function RootLayout({ children, params: { locale } }: RootLayoutProps) {
  if (!locales.includes(locale)) notFound()

  // TODO temporary solution
  // https://next-intl-docs.vercel.app/docs/getting-started/app-router#add-unstable_setrequestlocale-to-all-layouts-and-pages
  unstable_setRequestLocale(locale)

  const messages = useMessages()

  return (
    <html lang={locale} className={cn(NotoSansTC.variable, GeistSans.variable)} suppressHydrationWarning={true}>
      <body>
        <div className={'relative min-h-screen'}>
          <div className={'absolute inset-0 bg-noise bg-fixed opacity-25'} />
          <div className={'relative flex max-w-4xl flex-col pb-20 pt-8 antialiased md:mx-auto md:flex-row md:pt-20 lg:pt-32'}>
            <Providers>
              <Sidebar />
              <NextIntlClientProvider locale={locale} messages={pick(messages, 'Error')}>
                {children}
              </NextIntlClientProvider>
            </Providers>
          </div>
        </div>
      </body>
    </html>
  )
}
