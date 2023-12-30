'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import { useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'
import {
  IconChartBar,
  IconCommand,
  IconDeviceDesktop,
  IconHome,
  IconLanguage,
  IconListDetails,
  IconMoon,
  IconSun,
  IconUserCircle } from '@tabler/icons-react'

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import { usePathname, useRouter } from '@/lib/i18n'
import type { ActionItem } from '@/lib/types'

export default function CommandMenu() {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const t = useTranslations('Command')
  const { setTheme } = useTheme()

  const navActions: ActionItem[] = useMemo(() => [
    {
      id: 'go-home',
      label: t('Action.Home'),
      icon: <IconHome className={'mr-2'} size={20} />,
      perform: () => router.push('/'),
    },
    {
      id: 'go-about',
      label: t('Action.About'),
      icon: <IconUserCircle className={'mr-2'} size={20} />,
      perform: () => router.push('/about'),
    },
    {
      id: 'go-skill',
      label: t('Action.Skill'),
      icon: <IconChartBar className={'mr-2'} size={20} />,
      perform: () => router.push('/skill'),
    },
    {
      id: 'go-project',
      label: t('Action.Project'),
      icon: <IconListDetails className={'mr-2'} size={20} />,
      perform: () => router.push('/project'),
    },
  ], [router, t])

  const themeActions: ActionItem[] = useMemo(() => [
    {
      id: 'theme-system',
      label: t('Action.SystemTheme'),
      icon: <IconDeviceDesktop className={'mr-2'} size={20} />,
      perform: () => setTheme('system'),
    },
    {
      id: 'theme-light',
      label: t('Action.LightTheme'),
      icon: <IconSun className={'mr-2'} size={20} />,
      perform: () => setTheme('light'),
    },
    {
      id: 'theme-dark',
      label: t('Action.DarkTheme'),
      icon: <IconMoon className={'mr-2'} size={20} />,
      perform: () => setTheme('dark'),
    },
  ], [setTheme, t])

  const localeActions: ActionItem[] = useMemo(() => [
    {
      id: 'locale-en',
      label: t('Action.EN'),
      icon: <IconLanguage className={'mr-2'} size={20} />,
      perform: () => router.replace(pathname, { locale: 'en' }),
    },
    {
      id: 'locale-zh_tw',
      label: t('Action.ZHTW'),
      icon: <IconLanguage className={'mr-2'} size={20} />,
      perform: () => router.replace(pathname, { locale: 'zh-TW' }),
    },
  ], [pathname, router, t])

  useEffect(() => {
    const toggle = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen(open => !open)
      }
    }
    document.addEventListener('keydown', toggle)
    return () => document.removeEventListener('keydown', toggle)
  }, [])

  const handleSelect = useCallback((callback: () => void) => {
    return () => {
      callback()
      setOpen(false)
    }
  }, [])

  return (
    <>
      <button
        className={'inline-flex items-center gap-x-2'}
        onClick={() => setOpen(true)}
      >
        <IconCommand size={20} />
        <span className={'font-medium tracking-wide'}>{t('Trigger')}</span>
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder={t('Placeholder')} />
        <CommandList>
          <CommandEmpty>{t('Empty')}</CommandEmpty>
          <CommandGroup heading={t('Group.Nav')}>
            {navActions.map(action => (
              <CommandItem
                key={action.id}
                value={action.label}
                onSelect={handleSelect(action.perform)}
              >
                {action.icon}
                {action.label}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading={t('Group.Theme')}>
            {themeActions.map(action => (
              <CommandItem
                key={action.id}
                value={action.label}
                onSelect={handleSelect(action.perform)}
              >
                {action.icon}
                {action.label}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading={t('Group.Locale')}>
            {localeActions.map(action => (
              <CommandItem
                key={action.id}
                value={action.label}
                onSelect={handleSelect(action.perform)}
              >
                {action.icon}
                {action.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
