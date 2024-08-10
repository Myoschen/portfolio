import { I18nProviderClient } from '~/src/lib/locales/client'
import { SideNav } from '@/components/nav'

export default function MainLayout({
  params,
  children,
}: Readonly<{
  params: { locale: string }
  children: React.ReactNode
}>) {
  return (
    <I18nProviderClient locale={params.locale}>
      <div className="relative mx-auto flex max-w-4xl flex-row pt-8 md:pt-20 lg:pt-32">
        <SideNav />
        {/* <MobileNav /> */}
        {children}
      </div>
    </I18nProviderClient>
  )
}
