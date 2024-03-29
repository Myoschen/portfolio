import { useMemo } from 'react'
import { NextIntlClientProvider, useMessages, useTranslations } from 'next-intl'
import pick from 'lodash/pick'
import { HomeIcon, LightbulbIcon, ScanFaceIcon } from 'lucide-react'

import LogoImg from '~/public/images/logo.png'

import CommandMenu from '@/components/command-menu'
import LocaleSwitch from '@/components/locale-switch'
import Logo from '@/components/logo'
import NavLink from '@/components/nav-link'
import ThemeSwitch from '@/components/theme-switch'
import type { LinkItem } from '@/lib/types'

export default function Sidebar() {
  const messages = useMessages()
  const t = useTranslations('Sidebar')

  const navLinks: LinkItem[] = useMemo(() => [
    {
      icon: <HomeIcon size={20} />,
      label: t('Home'),
      url: '/',
    },
    {
      icon: <ScanFaceIcon size={20} />,
      label: t('About'),
      url: '/about',
    },
    {
      icon: <LightbulbIcon size={20} />,
      label: t('Project'),
      url: '/project',
    },
  ], [t])

  return (
    <NextIntlClientProvider messages={{ ...pick(messages, 'Command'), ...pick(messages, 'Locale'), ...pick(messages, 'Theme') }}>
      <aside className={'px-6 md:w-[150px] md:shrink-0 lg:px-0'}>
        <div className={'md:sticky md:top-20'}>
          <div className={'-ml-2 mb-4 flex justify-start md:mb-8'}>
            <Logo src={LogoImg} />
          </div>
          <nav className={'mb-4 md:mb-8'}>
            <div className={'-ml-2 flex flex-wrap items-start gap-x-px md:flex-col md:gap-x-0 md:gap-y-2'}>
              {navLinks.map((props, index) => (
                <NavLink key={index} {...props} />
              ))}
            </div>
          </nav>
          <div className={'inline-flex flex-wrap items-center gap-x-4 gap-y-2 md:flex-col md:items-start md:gap-y-4'}>
            <CommandMenu />
            <LocaleSwitch />
            <ThemeSwitch />
          </div>
        </div>
      </aside>
    </NextIntlClientProvider>
  )
}
