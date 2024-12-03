import '@/app/globals.css'

import type { Metadata } from 'next'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import { NuqsAdapter } from 'nuqs/adapters/next/app'

import { Debugger } from '@/components/debugger'
import { ThemeProvider } from '@/components/theme-provider'
import { getI18n } from '@/lib/locales/server'
import siteConfig from '@/lib/site-config'
import { cn } from '@/lib/utils'

export async function generateMetadata() {
  const t = await getI18n()
  return {
    title: {
      default: siteConfig.author,
      template: `%s / ${siteConfig.author}`,
    },
    description: t('website.description'),
  } satisfies Metadata
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={cn(GeistSans.variable, GeistMono.variable)}>
        <ThemeProvider>
          <NuqsAdapter>
            {children}
          </NuqsAdapter>
        </ThemeProvider>
        { process.env.NODE_ENV === 'development' && <Debugger /> }
      </body>
    </html>
  )
}
