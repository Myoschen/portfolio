import type { Metadata } from 'next'

import { getI18n } from '@/lib/locales/server'

export async function generateMetadata() {
  const t = await getI18n()
  return {
    title: t('nav.project'),
    description: t('website.description'),
  } satisfies Metadata
}

export default function ProjectPage() {
  return (
    <main className="px-4 sm:ml-40 sm:px-0">
      <h1>Project</h1>
    </main>
  )
}
