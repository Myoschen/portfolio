import type { Metadata } from 'next'

import { getI18n } from '@/lib/locales/server'

export async function generateMetadata() {
  const t = await getI18n()
  return {
    title: t('nav.project'),
    description: t('website.description'),
  } satisfies Metadata
}

export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
