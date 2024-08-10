'use client'

import { useTheme } from 'next-themes'
import { HalfMoon, SunLight } from 'iconoir-react'
import { Computer } from 'iconoir-react/regular'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { useI18n } from '@/lib/locales/client'

export function ThemeMenu() {
  const t = useI18n()
  const { setTheme } = useTheme()

  const menuItems = [
    { icon: Computer, label: t('theme.system'), value: 'system' as const },
    { icon: SunLight, label: t('theme.light'), value: 'light' as const },
    { icon: HalfMoon, label: t('theme.dark'), value: 'dark' as const },
  ]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="relative flex w-max items-center gap-x-2 outline-none">
        <SunLight className="size-5 scale-100 dark:scale-0" />
        <HalfMoon className="absolute size-5 scale-0 dark:scale-100" />
        <span className="text-sm font-medium">{t('theme')}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" sideOffset={8}>
        {menuItems.map((item, index) => (
          <DropdownMenuItem key={index} onClick={() => setTheme(item.value)}>
            <item.icon className="mr-2 size-4" />
            <span>{item.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
