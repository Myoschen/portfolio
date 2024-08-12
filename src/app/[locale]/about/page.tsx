import type { Metadata } from 'next'

import data from '~/data.json'
import { BlurImage } from '@/components/ui/blur-image'
import { getI18n } from '@/lib/locales/server'

export async function generateMetadata() {
  const t = await getI18n()
  return {
    title: t('nav.about'),
    description: t('website.description'),
  } satisfies Metadata
}

export default async function AboutPage() {
  const t = await getI18n()

  return (
    <main className="w-full space-y-8 px-4 sm:ml-40 sm:mt-2 sm:max-w-xl sm:px-0">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">{t('about-me')}</h1>
        <div className="flex flex-col gap-y-1">
          <BlurImage className="relative h-60 w-full rounded-lg" src={data.banner.about} alt="Home Banner" fill={true} />
          <p className="self-end text-xs text-muted-foreground">
            {t('photoBy', {
              author: (
                <a
                  className="text-secondary-foreground underline transition-opacity ease-in-out-quint hover:opacity-50"
                  href="https://unsplash.com/@plufow?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                  target="_blank"
                  rel="noreferer noopener"
                >
                  Plufow Le Studio
                </a>
              ),
              service: (
                <a
                  className="text-secondary-foreground underline transition-opacity ease-in-out-quint hover:opacity-50"
                  href="https://unsplash.com/photos/a-blurry-image-of-a-blue-and-green-background-5Q6yZN8ckuY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                  target="_blank"
                  rel="noreferer noopener"
                >
                  Unsplash
                </a>
              ),
            })}
          </p>
        </div>
      </div>
      <p className="whitespace-pre-line">{t('self-introduce')}</p>
    </main>
  )
}
