import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'
import {
  IconBrandCss3,
  IconBrandFirebase,
  IconBrandGolang,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandNextjs,
  IconBrandPython,
  IconBrandReact,
  IconBrandReactNative,
  IconBrandRust,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandVue,
} from '@tabler/icons-react'

import Skill from '@/components/skill'
import type { Locale, SkillItem } from '@/lib/types'

const skills: SkillItem[] = [
  {
    label: 'HTML',
    icon: <IconBrandHtml5 size={60} strokeWidth={1.25} />,
    level: 'master',
  },
  {
    label: 'CSS',
    icon: <IconBrandCss3 size={60} strokeWidth={1.25} />,
    level: 'master',
  },
  {
    label: 'JavaScript',
    icon: <IconBrandJavascript size={60} strokeWidth={1.25} />,
    level: 'master',
  },
  {
    label: 'TypeScript',
    icon: <IconBrandTypescript size={60} strokeWidth={1.25} />,
    level: 'advanced',
  },
  {
    label: 'React',
    icon: <IconBrandReact size={60} strokeWidth={1.25} />,
    level: 'master',
  },
  {
    label: 'React Native',
    icon: <IconBrandReactNative size={60} strokeWidth={1.25} />,
    level: 'junior',
  },
  {
    label: 'Next.js',
    icon: <IconBrandNextjs size={60} strokeWidth={1.25} />,
    level: 'advanced',
  },
  {
    label: 'Vue',
    icon: <IconBrandVue size={60} strokeWidth={1.25} />,
    level: 'newbie',
  },
  {
    label: 'Tailwind CSS',
    icon: <IconBrandTailwind size={60} strokeWidth={1.25} />,
    level: 'master',
  },
  {
    label: 'Firebase',
    icon: <IconBrandFirebase size={60} strokeWidth={1.25} />,
    level: 'intermediate',
  },
  {
    label: 'Python',
    icon: <IconBrandPython size={60} strokeWidth={1.25} />,
    level: 'advanced',
  },
  {
    label: 'Golang',
    icon: <IconBrandGolang size={60} strokeWidth={1.25} />,
    level: 'newbie',
  },
  {
    label: 'Rust',
    icon: <IconBrandRust size={60} strokeWidth={1.25} />,
    level: 'newbie',
  },
]

interface SkillPageProps {
  params: { locale: Locale }
}

export async function generateMetadata({ params: { locale } }: SkillPageProps) {
  const t = await getTranslations({ locale })
  const metadata: Metadata = {
    title: t('Skill.Title'),
  }
  return metadata
}

export default function SkillPage({ params: { locale } }: SkillPageProps) {
  unstable_setRequestLocale(locale)
  const t = useTranslations('Skill')

  return (
    <main className={'mt-6 flex min-w-0 flex-auto flex-col px-6 md:mt-0'}>
      <div className={'flex flex-col gap-y-6'}>
        <h1 className={'text-4xl font-bold leading-relaxed'}>{t('Title')}</h1>
        <div className={'grid grid-cols-1 gap-y-4'}>
          {skills.map((props, index) => (
            <Skill key={index} {...props} />
          ))}
        </div>
      </div>
    </main>
  )
}
