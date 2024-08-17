import { Nav } from '@/components/nav'
import { I18nProviderClient } from '@/lib/locales/client'

export default function MainLayout({
  params,
  children,
}: Readonly<{
  params: { locale: string }
  children: React.ReactNode
}>) {
  return (
    <I18nProviderClient locale={params.locale}>
      <div className="relative mx-auto flex max-w-3xl flex-row pb-24 pt-8 md:py-24 lg:py-32">
        <Nav />
        {children}
      </div>
    </I18nProviderClient>
  )
}
