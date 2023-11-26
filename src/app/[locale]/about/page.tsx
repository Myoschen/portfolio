'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'

import MainLayout from '@/components/layout/main'
import MotionLayout from '@/components/layout/motion'
import NextLink from '@/components/next-link'
import PageTitle from '@/components/page-title'

function AboutPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale)
  const t = useTranslations('about')

  return (
    <MainLayout>
      <MotionLayout>
        <div id={'m-container'} className={'flex flex-col gap-y-6'}>
          <PageTitle label={t('title')} />
          <div id={'m-item'} className={'relative h-80 overflow-hidden'}>
            <Image
              className={'object-cover'}
              src={'/images/programming.svg'}
              alt={'Programming'}
              fill
            />
          </div>
          <div id={'m-item'} className={' space-y-4 tracking-wide'}>
            <p>{t('paragraph.degree')}</p>
            <p>{t('paragraph.programming')}</p>
            <p>{t('paragraph.cause')}</p>
            <p>{t('paragraph.currently')}</p>
            <p>{t('paragraph.addition')}</p>
            <p>{t('paragraph.future')}</p>
          </div>
          <div id={'m-item'} className={'inline-block self-end'}>
            <NextLink next={'skill'} label={t('next')} />
          </div>
        </div>
      </MotionLayout>
    </MainLayout>
  )
}

export default AboutPage
