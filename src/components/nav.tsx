import Link from 'next/link'
import { NavLink } from './nav-link'
import { ThemeMenu } from './theme-menu'
import { FaceId, HomeSimple, LightBulb } from 'iconoir-react'

import data from '~/data.json'
import { CommandMenu } from '@/components/command-menu'
import { LanguageMenu } from '@/components/language-menu'
import { Image } from '@/components/ui/image'
import { getScopedI18n } from '@/lib/locales/server'

export async function SideNav() {
  const scopedT = await getScopedI18n('nav')

  const navItems = [
    { icon: HomeSimple, label: scopedT('home'), url: '/' },
    { icon: FaceId, label: scopedT('about'), url: '/about' },
    { icon: LightBulb, label: scopedT('project'), url: '/project' },
  ]

  return (
    <aside className="fixed hidden space-y-6 px-6 sm:block md:space-y-8">
      <Link className="-ml-2 block w-max" href="/">
        <Image src={data.logo} alt="Logo" width={60} height={60} />
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
      <div className="flex flex-col gap-y-3">
        <CommandMenu />
        <LanguageMenu />
        <ThemeMenu />
      </div>
    </aside>
  )
}

// export function MobileNav() {
//   return <></>
// }
