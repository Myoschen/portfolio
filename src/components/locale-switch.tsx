'use client'

import { useLocale, useTranslations } from 'next-intl'
import { IconLanguage } from '@tabler/icons-react'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { usePathname, useRouter } from '@/lib/i18n'

export default function LocaleSwitch() {
  const pathname = usePathname()
  const router = useRouter()
  const locale = useLocale()
  const t = useTranslations('Locale')

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className={'inline-flex items-center gap-x-2 font-medium tracking-wide outline-none'}>
          <IconLanguage size={20} />
          {locale === 'en'
            ? (<span>{t('EN')}</span>)
            : (<span>{t('ZHTW')}</span>)}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent sideOffset={8} align={'start'}>
        <DropdownMenuItem onClick={() => router.replace(pathname, { locale: 'en' })}>
          {t('EN')}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.replace(pathname, { locale: 'zh-TW' })}>
          {t('ZHTW')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
