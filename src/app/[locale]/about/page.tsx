import type { Metadata } from 'next'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'

import CodeThinking from '#/images/code-thinking.png'

import type { Locale } from '@/lib/types'

interface AboutPageProps {
  params: { locale: Locale }
}

export async function generateMetadata({ params: { locale } }: AboutPageProps) {
  const t = await getTranslations({ locale })
  const metadata: Metadata = {
    title: t('About.Title'),
  }
  return metadata
}

export default function AboutPage({ params: { locale } }: AboutPageProps) {
  unstable_setRequestLocale(locale)
  const t = useTranslations('About')

  return (
    <main className={'mt-6 flex min-w-0 flex-auto flex-col px-6 md:mt-0'}>
      <div className={'flex flex-col gap-y-6'}>
        <h1 className={'text-4xl font-bold leading-relaxed'}>{t('Title')}</h1>
        <div className={'relative h-80 overflow-hidden rounded-3xl border shadow-sm'}>
          <Image
            className={'object-cover'}
            src={CodeThinking}
            alt={'Programming'}
            fill={true}
            placeholder={'blur'}
          />
        </div>
        <div className={'space-y-4 whitespace-pre-line tracking-wide'}>
          <p>{t('SelfIntroduction')}</p>
        </div>
      </div>
    </main>
  )
}
