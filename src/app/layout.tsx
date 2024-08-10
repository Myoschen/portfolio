import './globals.css'

import type { Metadata } from 'next'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'

import data from '~/data.json'
import { Debugger } from '@/components/debugger'
import { ThemeProvider } from '@/components/theme-provider'
import { getI18n } from '@/lib/locales/server'
import { cn } from '@/lib/utils'

export async function generateMetadata() {
  const t = await getI18n()
  return {
    title: {
      default: data.author,
      template: `%s / ${data.author}`,
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
        <ThemeProvider>{children}</ThemeProvider>
        { process.env.NODE_ENV === 'development' && <Debugger /> }
      </body>
    </html>
  )
}
