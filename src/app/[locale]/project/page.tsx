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
    <main className="flex-1 space-y-8 px-4 sm:mt-2 sm:pr-6 md:pr-0">
      <h1>Project</h1>
    </main>
  )
}
