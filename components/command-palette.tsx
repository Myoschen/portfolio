'use client'

import { forwardRef, Fragment, ReactNode, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import {
  Action,
  ActionId,
  ActionImpl,
  KBarAnimator,
  KBarPortal,
  KBarPositioner,
  KBarProvider,
  KBarResults,
  KBarSearch,
  useKBar,
  useMatches
} from 'kbar'
import {
  LucideBarChart2,
  LucideCommand,
  LucideHome,
  LucideLanguages,
  LucideLayoutGrid,
  LucideMoon,
  LucidePalette,
  LucideSun,
  LucideUser
} from 'lucide-react'
import { useTranslations } from 'next-intl'

import { cn } from '@/utils/classnames'
import useTheme from '@/hooks/use-theme'

interface Props {
  children: ReactNode
}

function CommandPalette({ children }: Props) {
  const router = useRouter()
  const t = useTranslations('command.action')
  const { setTheme } = useTheme()

  const actions: Action[] = useMemo(() => {
    return [
      {
        id: 'home',
        name: t('home'),
        keywords: 'home page',
        icon: <LucideHome size={16} />,
        perform: () => router.push('/'),
        section: t('page')
      },
      {
        id: 'about',
        name: t('about'),
        keywords: 'about page',
        icon: <LucideUser size={16} />,
        perform: () => router.push('/about'),
        section: t('page')
      },
      {
        id: 'skill',
        name: t('skill'),
        keywords: 'skill page',
        icon: <LucideBarChart2 size={16} />,
        perform: () => router.push('/skill'),
        section: t('page')
      },
      {
        id: 'project',
        name: t('project'),
        keywords: 'project page ',
        icon: <LucideLayoutGrid size={16} />,
        perform: () => router.push('/project'),
        section: t('page')
      },
      {
        id: 'theme',
        name: t('toggle-theme'),
        keywords: 'toggle theme 切換 主題',
        icon: <LucidePalette size={16} />,
        section: t('operation')
      },
      {
        id: 'theme-light',
        name: t('light-theme'),
        keywords: 'light theme 明亮 主題',
        perform: () => setTheme('light'),
        icon: <LucideSun size={16} />,
        parent: 'theme',
        section: t('operation')
      },
      {
        id: 'theme-dark',
        name: t('dark-theme'),
        keywords: 'dark theme 暗黑 主題',
        perform: () => setTheme('dark'),
        icon: <LucideMoon size={16} />,
        parent: 'theme',
        section: t('operation')
      },
      {
        id: 'language',
        name: t('toggle-language'),
        keywords: 'change language 切換 語言 語系',
        icon: <LucideLanguages size={16} />,
        section: t('operation')
      },
      {
        id: 'english',
        name: t('en'),
        keywords: 'English 英文',
        icon: <LucideLanguages size={16} />,
        parent: 'language',
        section: t('operation'),
        perform: () => router.push('/en')
      },
      {
        id: 'zh-tw',
        name: t('zh-tw'),
        keywords: 'Traditional Chinese 繁體中文',
        icon: <LucideLanguages size={16} />,
        parent: 'language',
        section: t('operation'),
        perform: () => router.push('/zh-TW')
      }
    ]
  }, [router, t, setTheme])

  return (
    <KBarProvider actions={actions}>
      <KBarPortal>
        <KBarPositioner className="bg-mauveA-2 dark:bg-mauveDarkA-2 z-20 flex items-center p-2 backdrop-blur-sm">
          <KBarAnimator className="bg-mauve-4 dark:bg-mauveDark-4 box-content w-full max-w-xl overflow-hidden rounded-md p-2 shadow">
            <KBarSearch className="font-work-sans h-16 w-full bg-transparent px-4 outline-none" />
            <SearchResults />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      {children}
    </KBarProvider>
  )
}

export default CommandPalette

function SearchResults() {
  const { results, rootActionId } = useMatches()
  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === 'string' ? (
          <div className="font-work-sans px-4 pb-2 pt-4 font-medium">{item}</div>
        ) : (
          <ResultItem action={item} active={active} currentRootActionId={rootActionId || ''} />
        )
      }
    />
  )
}

interface ResultItemProps {
  action: ActionImpl
  active: boolean
  currentRootActionId: ActionId
}

// eslint-disable-next-line react/display-name
const ResultItem = forwardRef<HTMLDivElement, ResultItemProps>(({ action, active, currentRootActionId }, ref) => {
  const ancestors = useMemo(() => {
    if (!currentRootActionId) return action.ancestors
    const index = action.ancestors.findIndex((ancestor) => ancestor.id === currentRootActionId)
    return action.ancestors.slice(index + 1)
  }, [action.ancestors, currentRootActionId])

  return (
    <div
      ref={ref}
      className={cn('flex cursor-pointer items-center justify-between rounded-lg px-4 py-2', {
        'bg-mauve-mauve6 dark:bg-mauveDark-mauve6 text-violet-violet11 dark:text-violetDark-violet11 rounded-md': active
      })}
    >
      <div className="flex items-center gap-2">
        {action.icon && action.icon}
        <div className="font-work-sans flex flex-col font-medium tracking-wide">
          <div className="line-clamp-1">
            {ancestors.length > 0 &&
              ancestors.map((ancestor) => (
                <Fragment key={ancestor.id}>
                  <span className="mr-3 opacity-70">{ancestor.name}</span>
                  <span className="mr-3">&rsaquo;</span>
                </Fragment>
              ))}
            <span>{action.name}</span>
          </div>
          {action.subtitle && <span className="text-sm">{action.subtitle}</span>}
        </div>
      </div>
      {/* {action.shortcut?.length ? (
          <div aria-hidden className="grid grid-flow-col gap-2">
            {action.shortcut.map((sc) => (
              <kbd
                key={sc}
                className={`${
                  active
                    ? 'bg-white text-teal-500 dark:bg-gray-500 dark:text-gray-200'
                    : 'bg-gray-200 text-gray-500 dark:bg-gray-600 dark:text-gray-400'
                } flex cursor-pointer items-center justify-between rounded-md px-3 py-2`}
              >
                {sc}
              </kbd>
            ))}
          </div>
        ) : null} */}
    </div>
  )
})

function CommandPaletteTrigger() {
  const { query } = useKBar()
  const t = useTranslations('command')

  return (
    <button
      className="inline-flex items-center gap-x-2"
      type="button"
      onClick={query.toggle}
      aria-label="trigger command palette"
    >
      <LucideCommand size={16} />
      <span className="font-work-sans font-medium tracking-wide">{t('trigger')}</span>
    </button>
  )
}
export { CommandPaletteTrigger }
