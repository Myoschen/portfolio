'use client'

import { useTransition } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { CheckIcon, LanguagesIcon } from 'lucide-react'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { usePathname, useRouter } from '@/lib/i18n'
import type { Locale } from '@/lib/types'
import { cn } from '@/lib/utils'

export default function LocaleSwitch() {
  const [isPending, startTransition] = useTransition()
  const pathname = usePathname()
  const router = useRouter()
  const locale = useLocale()
  const t = useTranslations('Locale')

  const changeLocale = (locale: Locale) => {
    startTransition(() => {
      router.replace(pathname, { locale })
    })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={'inline-flex items-center gap-x-2 font-medium tracking-wide outline-none'}
        disabled={isPending}
      >
        <LanguagesIcon size={20} />
        {locale === 'en' && (<span>{t('EN')}</span>)}
        {locale === 'zh-TW' && (<span>{t('ZHTW')}</span>)}
      </DropdownMenuTrigger>
      <DropdownMenuContent sideOffset={8} align={'start'}>
        <DropdownMenuItem onClick={() => changeLocale('en')}>
          <CheckIcon className={cn('mr-2 scale-0', locale === 'en' && 'scale-100')} size={16} />
          {t('EN')}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLocale('zh-TW')}>
          <CheckIcon className={cn('mr-2 scale-0', locale === 'zh-TW' && 'scale-100')} size={16} />
          {t('ZHTW')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
