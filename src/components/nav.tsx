'use client'

import Link from 'next/link'
import { FaceId, HomeSimple, LightBulb } from 'iconoir-react'
import { motion } from 'motion/react'

import { CommandMenu } from '@/components/command-menu'
import { LanguageMenu } from '@/components/language-menu'
import { NavLink } from '@/components/nav-link'
import { ThemeMenu } from '@/components/theme-menu'
import { BlurImage } from '@/components/ui/blur-image'
import { Dock, DockIcon } from '@/components/ui/dock'
import { Separator } from '@/components/ui/separator'
import { useBetterMediaQuery } from '@/hooks/use-better-media-query'
import { useScopedI18n } from '@/lib/locales/client'
import siteConfig from '@/lib/site-config'

export function Nav() {
  const scopedT = useScopedI18n('nav')
  const isDesktop = useBetterMediaQuery('(min-width: 640px)')

  const navItems = [
    { icon: HomeSimple, label: scopedT('home'), url: '/' },
    { icon: FaceId, label: scopedT('about'), url: '/about' },
    { icon: LightBulb, label: scopedT('project'), url: '/project' },
  ]

  // initial render
  if (isDesktop === null) {
    return null
  }

  return isDesktop
    ? (
        <aside className="z-10 shrink-0 basis-40 px-6">
          <motion.div
            className="fixed space-y-6 md:space-y-8"
            layoutScroll={true}
          >
            <Link className="-ml-2 block w-max" href="/">
              <BlurImage
                className="rounded-full"
                src={siteConfig.logo}
                alt="Logo"
                width={60}
                height={60}
                priority={true}
              />
            </Link>
            <nav className="flex flex-col gap-y-3">
              {navItems.map((item, index) => (
                <NavLink key={index} className="w-max" href={item.url}>
                  <p className="flex items-center gap-x-2">
                    <item.icon className="size-5" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </p>
                </NavLink>
              ))}
            </nav>
            <Separator />
            <div className="flex flex-col gap-y-3">
              <CommandMenu />
              <LanguageMenu />
              <ThemeMenu />
            </div>
          </motion.div>
        </aside>
      )
    : (
        <nav className="fixed bottom-4 z-10 w-full">
          <Dock>
            {navItems.map((item, index) => (
              <DockIcon key={index}>
                <Link href={item.url}>
                  <item.icon className="size-5" />
                </Link>
              </DockIcon>
            ))}
            <Separator orientation="vertical" />
            <DockIcon>
              <CommandMenu hideLabel={true} />
            </DockIcon>
          </Dock>
        </nav>
      )
}
