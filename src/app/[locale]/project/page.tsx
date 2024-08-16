'use client'

import { useQueryStates } from 'nuqs'

import data from '~/data.json'
import { MultiFilter } from '@/components/multi-filter'
import { useI18n } from '@/lib/locales/client'
import { searchParamsParsers } from '@/lib/search-params'
import { arrayContains } from '@/lib/utils'

const techOptions = [
  'React',
  // 'React Native',
  'Next.js',
  // 'Expo',
  'Tailwind CSS',
  'Framer Motion',
  'Electron',
  'TypeScript',
  // 'Tauri',
  // 'Rust',
  // 'Go',
  // 'Firebase',
]

export default function ProjectPage() {
  const t = useI18n()
  const [{ tech }] = useQueryStates(searchParamsParsers)

  const projects = tech
    ? data.projects.filter(p => arrayContains(p.tech, tech))
    : data.projects

  return (
    <main className="flex-1 space-y-8 px-4 sm:mt-2 sm:pr-6 md:pr-0">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">{t('project')}</h1>
        <div className="flex items-center gap-x-2">
          <MultiFilter
            title={t('tech')}
            placeholder={t('searchTech')}
            paramKey="tech"
            parsers={searchParamsParsers}
            options={techOptions}
          />
        </div>
        {projects.map(p => (
          <p>{p.key}</p>
        ))}
      </div>
    </main>
  )
}
