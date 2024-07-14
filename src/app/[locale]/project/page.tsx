import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'

import GithubExplorerImg from '~/public/images/project/github-explorer.png'
import MuserImg from '~/public/images/project/muser.png'
import ReactLinkTreeImg from '~/public/images/project/react-linktree.png'
import ReactTodoListImg from '~/public/images/project/react-todo-list.png'

import { Project, type ProjectItem } from '@/components/project'
import type { Locale } from '@/lib/types'

interface ProjectPageProps {
  params: { locale: Locale }
}

export async function generateMetadata({ params: { locale } }: ProjectPageProps) {
  const t = await getTranslations({ locale })
  const metadata: Metadata = {
    title: t('Project.Title'),
  }
  return metadata
}

export default function ProjectPage({ params: { locale } }: ProjectPageProps) {
  unstable_setRequestLocale(locale)
  const t = useTranslations('Project')

  const projectItems: ProjectItem[] = [
    {
      title: t('Muser.Title'),
      description: t('Muser.Desc'),
      image: MuserImg,
      url: {
        repo: 'https://github.com/Myoschen/muser',
      },
    },
    {
      title: t('ReactTodoList.Title'),
      description: t('ReactTodoList.Desc'),
      image: ReactTodoListImg,
      url: {
        repo: 'https://github.com/Myoschen/react-todo-list',
        preview: 'https://react-todo-list-myoschen.vercel.app/',
      },
    },
    {
      title: t('ReactLinkTree.Title'),
      description: t('ReactLinkTree.Desc'),
      image: ReactLinkTreeImg,
      url: {
        repo: 'https://github.com/Myoschen/react-linktree',
        preview: 'https://react-linktree.vercel.app/',
      },
    },
    {
      title: t('GithubExplorer.Title'),
      description: t('GithubExplorer.Desc'),
      image: GithubExplorerImg,
      url: {
        repo: 'https://github.com/Myoschen/github-explorer',
        preview: 'https://github-explorer-myoschen.vercel.app/',
      },
    },
  ]

  return (
    <main className={'mt-6 flex min-w-0 flex-auto flex-col px-6 md:mt-0'}>
      <div className={'flex flex-col gap-y-6'}>
        <h1 className={'text-4xl font-bold leading-relaxed'}>{t('Title')}</h1>
        <div className={'grid grid-cols-1 gap-4 md:grid-cols-2'}>
          {projectItems.map((item, index) => (
            <Project key={index} item={item} />
          ))}
        </div>
      </div>
    </main>
  )
}
