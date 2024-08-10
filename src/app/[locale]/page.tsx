import { getI18n, getScopedI18n } from '@/lib/locales/server'

export default async function HomePage() {
  const t = await getI18n()
  const scopedT = await getScopedI18n('hello')

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-y-1">
      <p>{t('hello')}</p>
      <p>{t('hello.world')}</p>
      <p>{scopedT('world')}</p>
      <p>{t('welcome', { name: 'Myos' })}</p>
      <p>{t('welcome', { name: <strong>Myos</strong> })}</p>
    </main>
  )
}
