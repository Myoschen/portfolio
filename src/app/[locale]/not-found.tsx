import { useTranslations } from 'next-intl'

export default function NotFoundPage() {
  const t = useTranslations('NotFound')

  return (
    <div className={'flex h-full flex-col items-center justify-center gap-y-4'}>
      <div className={'flex flex-col items-center gap-y-2'}>
        <h2 className={'text-4xl font-bold'}>{'404'}</h2>
        <p className={'text-sm font-medium'}>{t('Description')}</p>
      </div>
    </div>
  )
}
