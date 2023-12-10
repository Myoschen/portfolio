'use client'

import { IconMoon, IconSun } from '@tabler/icons-react'
import { useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

export default function ThemeSwitch() {
  const { setTheme } = useTheme()
  const t = useTranslations('Theme')

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className={'inline-flex items-center gap-x-2 font-medium tracking-wide outline-none'}>
          <IconSun className={'scale-100 dark:scale-0'} size={20} />
          <IconMoon className={'absolute scale-0 dark:scale-100'} size={20} />
          <span>{t('Trigger')}</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent sideOffset={8} align={'start'}>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          {t('System')}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('light')}>
          {t('Light')}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          {t('Dark')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
