import { NextIntlClientProvider, useMessages, useTranslations } from 'next-intl'
import { FaceId, HomeSimple, LightBulb } from 'iconoir-react'
import pick from 'lodash.pick'

import logo from '#/images/logo.png'

import { CommandMenu } from '@/components/command-menu'
import { LocaleSwitch } from '@/components/locale-switch'
import { Logo } from '@/components/logo'
import { NavLink } from '@/components/nav-link'
import { ThemeSwitch } from '@/components/theme-switch'
import type { LinkItem } from '@/lib/types'

export function Sidebar() {
  const messages = useMessages()
  const t = useTranslations('Sidebar')

  const navLinks: LinkItem[] = [
    {
      icon: <HomeSimple className={'size-5'} />,
      label: t('Home'),
      url: '/',
    },
    {
      icon: <FaceId className={'size-5'} />,
      label: t('About'),
      url: '/about',
    },
    {
      icon: <LightBulb className={'size-5'} />,
      label: t('Project'),
      url: '/project',
    },
  ]

  return (
    <NextIntlClientProvider messages={{ ...pick(messages, 'Command'), ...pick(messages, 'Locale'), ...pick(messages, 'Theme') }}>
      <aside className={'px-6 md:fixed'}>
        <div className={'-ml-2 mb-4 flex justify-start md:mb-8'}>
          <Logo src={logo} />
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
      </aside>
    </NextIntlClientProvider>
  )
}
