'use client'

import { useCallback, useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'
import { CommandIcon, HomeIcon, LanguagesIcon, LightbulbIcon, MonitorIcon, MoonIcon, ScanFaceIcon, SunIcon } from 'lucide-react'

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import { usePathname, useRouter } from '@/lib/i18n'

interface ActionItem {
  id: string
  icon: JSX.Element
  label: string
  perform: () => void
}

export function CommandMenu() {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const t = useTranslations('Command')
  const { setTheme } = useTheme()

  const navActions: ActionItem[] = [
    {
      id: 'go-home',
      label: t('Action.Home'),
      icon: <HomeIcon className={'mr-2'} size={16} />,
      perform: () => router.push('/'),
    },
    {
      id: 'go-about',
      label: t('Action.About'),
      icon: <ScanFaceIcon className={'mr-2'} size={16} />,
      perform: () => router.push('/about'),
    },
    {
      id: 'go-project',
      label: t('Action.Project'),
      icon: <LightbulbIcon className={'mr-2'} size={16} />,
      perform: () => router.push('/project'),
    },
  ]

  const themeActions: ActionItem[] = [
    {
      id: 'theme-system',
      label: t('Action.SystemTheme'),
      icon: <MonitorIcon className={'mr-2'} size={16} />,
      perform: () => setTheme('system'),
    },
    {
      id: 'theme-light',
      label: t('Action.LightTheme'),
      icon: <SunIcon className={'mr-2'} size={16} />,
      perform: () => setTheme('light'),
    },
    {
      id: 'theme-dark',
      label: t('Action.DarkTheme'),
      icon: <MoonIcon className={'mr-2'} size={16} />,
      perform: () => setTheme('dark'),
    },
  ]

  const localeActions: ActionItem[] = [
    {
      id: 'locale-en',
      label: t('Action.EN'),
      icon: <LanguagesIcon className={'mr-2'} size={16} />,
      perform: () => router.replace(pathname, { locale: 'en' }),
    },
    {
      id: 'locale-zh_tw',
      label: t('Action.ZHTW'),
      icon: <LanguagesIcon className={'mr-2'} size={16} />,
      perform: () => router.replace(pathname, { locale: 'zh-TW' }),
    },
  ]

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
        <CommandIcon size={20} />
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
