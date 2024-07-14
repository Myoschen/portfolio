'use client'

import { useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'
import { Computer, HalfMoon, SunLight } from 'iconoir-react'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

export function ThemeSwitch() {
  const { setTheme } = useTheme()
  const t = useTranslations('Theme')

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className={'inline-flex items-center gap-x-2 font-medium tracking-wide outline-none'}>
          <SunLight className={'size-5 scale-100 dark:scale-0'} />
          <HalfMoon className={'absolute size-5 scale-0 dark:scale-100'} />
          <span>{t('Trigger')}</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent sideOffset={8} align={'start'}>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          <Computer className={'mr-2 size-4'} />
          {t('System')}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('light')}>
          <SunLight className={'mr-2 size-4'} />
          {t('Light')}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          <HalfMoon className={'mr-2 size-4'} />
          {t('Dark')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
