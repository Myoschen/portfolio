'use client'

import { useTransition } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { Check, Translate } from 'iconoir-react'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { usePathname, useRouter } from '@/lib/i18n'
import type { Locale } from '@/lib/types'
import { cn } from '@/lib/utils'

export function LocaleSwitch() {
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
        <Translate className={'size-5'} />
        {locale === 'en' && (<span>{t('EN')}</span>)}
        {locale === 'zh-TW' && (<span>{t('ZHTW')}</span>)}
      </DropdownMenuTrigger>
      <DropdownMenuContent sideOffset={8} align={'start'}>
        <DropdownMenuItem onClick={() => changeLocale('en')}>
          <Check className={cn('mr-2 size-4 scale-0', locale === 'en' && 'scale-100')} />
          {t('EN')}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLocale('zh-TW')}>
          <Check className={cn('mr-2 size-4 scale-0', locale === 'zh-TW' && 'scale-100')} />
          {t('ZHTW')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
