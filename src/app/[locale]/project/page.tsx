import type { Metadata } from 'next'

import { getI18n } from '~/src/lib/locales/server'

export async function generateMetadata() {
  const t = await getI18n()
  return {
    title: t('nav.project'),
    description: t('website.description'),
  } satisfies Metadata
}

export default function ProjectPage() {
  return (
    <main className="">
    </main>
  )
}
