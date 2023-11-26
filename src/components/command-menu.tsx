'use client'

import { useTranslations } from 'next-intl'
import { useCallback, useEffect, useMemo, useState } from 'react'

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import Icon from '@/components/ui/icon'
import useTheme from '@/hooks/use-theme'
import { usePathname, useRouter } from '@/lib/i18n'
import type { ActionList } from '@/types/common'

export default function CommandMenu() {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const t = useTranslations('command')
  const { setTheme } = useTheme()

  const pageActions: ActionList = useMemo(() => {
    return [
      {
        id: 'home-page',
        title: t('action.home'),
        icon: <Icon name={'home'} className={'mr-2'} />,
        perform: () => router.push('/'),
      },
      {
        id: 'about-page',
        title: t('action.about'),
        icon: <Icon name={'profile'} className={'mr-2'} />,
        perform: () => router.push('/about'),
      },
      {
        id: 'skill-page',
        title: t('action.skill'),
        icon: <Icon name={'chart'} className={'mr-2'} />,
        perform: () => router.push('/skill'),
      },
      {
        id: 'project-page',
        title: t('action.project'),
        icon: <Icon name={'list-details'} className={'mr-2'} />,
        perform: () => router.push('/project'),
      },
    ]
  }, [router, t])

  const themeActions: ActionList = useMemo(
    () => [
      {
        id: 'light-theme',
        title: t('action.light-theme'),
        perform: () => setTheme('light'),
        icon: <Icon name={'sun'} className={'mr-2'} />,
      },
      {
        id: 'dark-theme',
        title: t('action.dark-theme'),
        perform: () => setTheme('dark'),
        icon: <Icon name={'moon'} className={'mr-2'} />,
      },
    ],
    [setTheme, t],
  )

  const languageActions: ActionList = useMemo(
    () => [
      {
        id: 'en',
        title: t('action.en'),
        icon: <Icon name={'language'} className={'mr-2'} />,
        perform: () => router.replace(`${pathname}`, { locale: 'en' }),
      },
      {
        id: 'zh-tw',
        title: t('action.zh-tw'),
        icon: <Icon name={'language'} className={'mr-2'} />,
        perform: () => router.replace(`${pathname}`, { locale: 'zh-TW' }),
      },
    ],
    [router, pathname, t],
  )

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen(open => !open)
      }
    }
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  const onSelect = useCallback(
    (cb: () => void) => () => {
      setOpen(false)
      cb()
    },
    [],
  )

  return (
    <>
      <button
        className={'inline-flex items-center gap-x-2'}
        onClick={() => setOpen(true)}
      >
        <Icon name={'command'} />
        <span className={'font-medium tracking-wide'}>{t('trigger')}</span>
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder={t('placeholder')} />
        <CommandList>
          <CommandEmpty>{t('empty')}</CommandEmpty>
          <CommandGroup heading={t('group.page')}>
            {pageActions.map(({ id, icon, title, perform }) => (
              <CommandItem key={id} value={title} onSelect={onSelect(perform)}>
                {icon}
                {title}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading={t('group.toggle-theme')}>
            {themeActions.map(({ id, icon, title, perform }, index) => (
              <CommandItem key={id} value={title} onSelect={onSelect(perform)}>
                {icon}
                {title}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading={t('group.toggle-language')}>
            {languageActions.map(({ id, icon, title, perform }, index) => (
              <CommandItem key={id} value={title} onSelect={onSelect(perform)}>
                {icon}
                {title}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
