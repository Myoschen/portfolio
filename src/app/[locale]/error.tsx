'use client'

import { useTranslations } from 'next-intl'

interface ErrorPageProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function ErrorPage({}: ErrorPageProps) {
  const t = useTranslations('Error')

  return (
    <div className={'flex h-full flex-col items-center justify-center gap-y-4'}>
      <div className={'flex flex-col items-center gap-y-2'}>
        <h2 className={'text-4xl font-bold'}>{t('Title')}</h2>
        <p className={'text-sm font-medium'}>{t('Description')}</p>
      </div>
      {/* <button
        className={'inline-flex items-center gap-x-1 text-sm transition-opacity hover:opacity-75'}
        onClick={reset}
      >
        <IconReload size={16} />
        <span>{t('Retry')}</span>
      </button> */}
    </div>
  )
}
