import './globals.css'

import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'

import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.variable}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
