'use client'

import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'

import MainLayout from '@/components/layout/main'
import MotionLayout from '@/components/layout/motion'
import NextLink from '@/components/next-link'
import PageTitle from '@/components/page-title'
import SkillItem from '@/components/skill-item'
import Icon from '@/components/ui/icon'
import type { SkillList } from '@/types/common'

const skillList: SkillList = [
  {
    title: 'HTML',
    icon: <Icon name={'html'} size={60} />,
    level: 'master',
  },
  {
    title: 'CSS',
    icon: <Icon name={'css'} size={60} />,
    level: 'master',
  },
  {
    title: 'JavaScript',
    icon: <Icon name={'javascript'} size={60} />,
    level: 'master',
  },
  {
    title: 'TypeScript',
    icon: <Icon name={'typescript'} size={60} />,
    level: 'advanced',
  },
  {
    title: 'React',
    icon: <Icon name={'react'} size={60} />,
    level: 'master',
  },
  {
    title: 'Next.js',
    icon: <Icon name={'nextjs'} size={60} />,
    level: 'advanced',
  },
  {
    title: 'Vue',
    icon: <Icon name={'vue'} size={60} />,
    level: 'newbie',
  },
  {
    title: 'React Redux',
    icon: <Icon name={'redux'} size={60} />,
    level: 'advanced',
  },
  {
    title: 'Tailwind CSS',
    icon: <Icon name={'tailwindcss'} size={60} />,
    level: 'master',
  },
  {
    title: 'Firebase',
    icon: <Icon name={'firebase'} size={60} />,
    level: 'intermediate',
  },
  {
    title: 'Mongodb',
    icon: <Icon name={'mongodb'} size={60} />,
    level: 'intermediate',
  },
  {
    title: 'Python',
    icon: <Icon name={'python'} size={60} />,
    level: 'advanced',
  },
  {
    title: 'Golang',
    icon: <Icon name={'golang'} size={60} />,
    level: 'newbie',
  },
  {
    title: 'Rust',
    icon: <Icon name={'rust'} size={60} />,
    level: 'newbie',
  },
]

function SkillPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale)
  const t = useTranslations('skill')

  return (
    <MainLayout>
      <MotionLayout>
        <div id={'m-container'} className={'flex flex-col gap-y-6'}>
          <PageTitle label={t('title')} />
          <div className={'grid gap-y-4'}>
            {skillList.map((skill, index) => (
              <SkillItem key={index} {...skill} />
            ))}
          </div>
          <div id={'m-item'} className={'inline-block self-end'}>
            <NextLink next={'project'} label={t('next')} />
          </div>
        </div>
      </MotionLayout>
    </MainLayout>
  )
}

export default SkillPage
