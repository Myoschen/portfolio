'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'

import MainWrapper from '@/components/main-wrapper'
import MotionWrapper from '@/components/motion-wrapper'
import NextLink from '@/components/next-link'
import PageTitle from '@/components/page-title'

function AboutPage() {
  const t = useTranslations('about')

  return (
    <MainWrapper>
      <MotionWrapper>
        <div className="m-container flex flex-col gap-y-6">
          <PageTitle label={t('title')} />
          <div className="m-item relative h-80 overflow-hidden">
            <Image className="object-cover" src="/programming.svg" alt="Programming" fill />
          </div>
          <div className="font-work-sans m-item space-y-4 tracking-wide">
            <p>{t('paragraph.degree')}</p>
            <p>{t('paragraph.programming')}</p>
            <p>{t('paragraph.cause')}</p>
            <p>{t('paragraph.currently')}</p>
            <p>{t('paragraph.addition')}</p>
            <p>{t('paragraph.future')}</p>
          </div>
          <div className="m-item inline-block self-end">
            <NextLink next="skill" label={t('next')} />
          </div>
        </div>
      </MotionWrapper>
    </MainWrapper>
  )
}

export default AboutPage
