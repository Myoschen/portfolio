import type { Metadata } from 'next'

import { getI18n } from '@/lib/locales/server'

export async function generateMetadata() {
  const t = await getI18n()
  return {
    title: t('nav.about'),
    description: t('website.description'),
  } satisfies Metadata
}

export default function AboutPage() {
  return (
    <main className="px-4 sm:ml-40 sm:px-0">
      <h1>About</h1>
    </main>
  )
}
