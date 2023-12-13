import '@/constants/globals.css'

import type { Metadata } from 'next'
import { Noto_Sans_TC } from 'next/font/google'
import { notFound } from 'next/navigation'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'
import { GeistSans } from 'geist/font/sans'

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

  return (
    <html lang={locale} className={cn(NotoSansTC.variable, GeistSans.variable)} suppressHydrationWarning={true}>
      <body className={'min-h-screen bg-mauve-1 text-mauve-12 dark:bg-mauve-dark-1 dark:text-mauve-dark-12'}>
        <div className={'flex max-w-4xl flex-col pb-20 pt-8 antialiased transition-colors md:mx-auto md:flex-row md:pt-20 lg:pt-32'}>
          <Providers>
            <Sidebar />
            {children}
          </Providers>
        </div>
      </body>
    </html>
  )
}
