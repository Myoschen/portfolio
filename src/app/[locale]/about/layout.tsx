import { createTranslator } from 'next-intl'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'
import { type ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode
  params: { locale: string }
}

export async function generateMetadata({ params: { locale } }: LayoutProps) {
  const t = await getTranslations({ locale })
  return {
    title: t('title.about'),
  }
}

export default function Layout({ children, params: { locale } }: LayoutProps) {
  unstable_setRequestLocale(locale)
  return children
}
