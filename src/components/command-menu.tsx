'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useTheme } from 'next-themes'
import { Computer, FaceId, HalfMoon, HomeSimple, KeyCommand, LightBulb, SunLight, Translate } from 'iconoir-react'

import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import { useChangeLocale, useI18n } from '@/lib/locales/client'

export function CommandMenu() {
  const t = useI18n()
  const router = useRouter()
  const { setTheme } = useTheme()
  const changeLocale = useChangeLocale()
  const [isOpen, setIsOpen] = useState(false)

  const groups = [
    {
      heading: t('nav'),
      items: [
        { icon: HomeSimple, label: t('nav.home'), perform: () => router.push('/') },
        { icon: FaceId, label: t('nav.about'), perform: () => router.push('/about') },
        { icon: LightBulb, label: t('nav.project'), perform: () => router.push('/project') },
      ],
    },
    {
      heading: t('theme'),
      items: [
        { icon: Computer, label: t('theme.system'), perform: () => setTheme('system') },
        { icon: SunLight, label: t('theme.light'), perform: () => setTheme('light') },
        { icon: HalfMoon, label: t('theme.dark'), perform: () => setTheme('dark') },
      ],
    },
    {
      heading: t('language'),
      items: [
        { icon: Translate, label: t('language.en'), perform: () => changeLocale('en') },
        { icon: Translate, label: t('language.zh-hant'), perform: () => changeLocale('zh-Hant') },
      ],
    },
  ]

  useEffect(() => {
    const handleKeydown = (ev: KeyboardEvent) => {
      if (ev.key === 'k' && (ev.metaKey || ev.ctrlKey)) {
        ev.preventDefault()
        setIsOpen(prev => !prev)
      }
    }
    document.addEventListener('keydown', handleKeydown)
    return () => document.removeEventListener('keydown', handleKeydown)
  }, [])

  return (
    <>
      <button
        className="flex w-max items-center gap-x-2"
        onClick={() => setIsOpen(true)}
      >
        <KeyCommand className="size-5" />
        <span className="text-sm font-medium">{t('command')}</span>
      </button>
      <CommandDialog open={isOpen} onOpenChange={setIsOpen}>
        <CommandInput placeholder={t('command.placeholder')} />
        <CommandList>
          <CommandEmpty>{t('command.empty')}</CommandEmpty>
          <CommandList>
            {groups.map((group, index) => (
              <CommandGroup key={index}heading={group.heading}>
                {group.items.map((item, index) => (
                  <CommandItem
                    key={index}
                    value={item.label}
                    onSelect={() => {
                      item.perform()
                      setIsOpen(false)
                    }}
                  >
                    <item.icon className="mr-2 size-4" />
                    <span>{item.label}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </CommandList>
      </CommandDialog>
    </>
  )
}
