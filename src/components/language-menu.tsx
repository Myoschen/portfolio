'use client'

import { Check, Translate } from 'iconoir-react'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { useChangeLocale, useCurrentLocale, useI18n } from '@/lib/locales/client'
import { cn } from '@/lib/utils'

export function LanguageMenu() {
  const t = useI18n()
  const locale = useCurrentLocale()
  const changeLocale = useChangeLocale()

  const menuItems = [
    { label: t('language.en'), value: 'en' as const },
    { label: t('language.zh-hant'), value: 'zh-Hant' as const },
  ]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="inline-flex items-center gap-x-2 outline-none">
        <Translate className="size-5" />
        <span className="text-sm font-medium">{locale === 'en' ? t('language.en') : t('language.zh-hant')}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" sideOffset={8}>
        {menuItems.map((item, index) => (
          <DropdownMenuItem key={index} onClick={() => changeLocale(item.value)}>
            <Check className={cn('mr-2 size-4 scale-0', { 'scale-100': locale === item.value })} />
            <span>{item.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
