'use client'

import { useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'
import { MonitorIcon, MoonIcon, SunIcon } from 'lucide-react'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

export default function ThemeSwitch() {
  const { setTheme } = useTheme()
  const t = useTranslations('Theme')

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className={'inline-flex items-center gap-x-2 font-medium tracking-wide outline-none'}>
          <SunIcon className={'scale-100 dark:scale-0'} size={20} />
          <MoonIcon className={'absolute scale-0 dark:scale-100'} size={20} />
          <span>{t('Trigger')}</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent sideOffset={8} align={'start'}>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          <MonitorIcon className={'mr-2'} size={16} />
          {t('System')}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('light')}>
          <SunIcon className={'mr-2'} size={16} />
          {t('Light')}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          <MoonIcon className={'mr-2'} size={16} />
          {t('Dark')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
