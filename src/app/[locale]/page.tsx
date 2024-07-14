import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'

import Avatar from '#/images/avatar.png'

import { Arc, Canva, Css, Discord, Electron, Expo, Figma, FramerMotion, Github, Gmail, Html5, JavaScript, NextJS, NodeJS, Pnpm, Postman, React, ShadcnUI, TailwindCSS, TypeScript, Vercel, Vscode, X } from '@/components/icons'
import { SocialLink } from '@/components/social-link'
import type { LinkItem, Locale } from '@/lib/types'

const socialLinks: LinkItem[] = [
  { icon: <Github />, label: 'Myoschen', url: 'https://github.com/Myoschen' },
  { icon: <Gmail />, label: 'myos.chen@gmail.com', url: 'mailto:myos.chen@gmail.com' },
  { icon: <X />, label: 'MyosChen', url: 'https://twitter.com/MyosChen' },
]

const languages: Use[] = [
  { icon: <Html5 />, label: 'HTML' },
  { icon: <Css />, label: 'CSS' },
  { icon: <JavaScript />, label: 'JavaScript' },
  { icon: <TypeScript />, label: 'TypeScript' },
]

const libraries: Use[] = [
  { icon: <React />, label: 'React' },
  { icon: <React />, label: 'React Native' },
  { icon: <NextJS />, label: 'Next.js' },
  { icon: <Expo />, label: 'Expo' },
  { icon: <TailwindCSS />, label: 'Tailwind CSS' },
  { icon: <ShadcnUI />, label: 'shadcn/ui' },
  { icon: <FramerMotion />, label: 'Framer Motion' },
  { icon: <NodeJS />, label: 'Node.js' },
  { icon: <Electron />, label: 'Electron' },
]

const tools: Use[] = [
  { icon: <Arc />, label: 'Arc' },
  { icon: <Vscode />, label: 'vscode' },
  { icon: <Postman />, label: 'Postman' },
  { icon: <Figma />, label: 'Figma' },
  { icon: <Canva />, label: 'Canva' },
  { icon: <Discord />, label: 'Discord' },
  { icon: <Pnpm />, label: 'pnpm' },
  { icon: <Vercel />, label: 'Vercel' },
]

interface HomePageProps {
  params: { locale: Locale }
}

export default function HomePage({ params: { locale } }: HomePageProps) {
  unstable_setRequestLocale(locale)
  const t = useTranslations('Home')

  return (
    <main className={'mt-6 flex min-w-0 flex-auto flex-col px-6 md:mt-0'}>
      <div className={'flex flex-col gap-y-6'}>
        <h1 className={'text-4xl font-bold leading-relaxed'}>{t('Title')}</h1>
        <div className={'relative aspect-square w-40 overflow-hidden rounded-full ring-4 ring-ring'}>
          <Image
            className={'object-cover'}
            src={Avatar}
            alt={'Ryan Chen'}
            placeholder={'blur'}
          />
        </div>
        <p className={'whitespace-pre-line tracking-wide'}>{t('Intro')}</p>
        <ul className={'flex flex-wrap  justify-start gap-x-4'}>
          {socialLinks.map((props, index) => (
            <li key={index}>
              <SocialLink {...props} />
            </li>
          ))}
        </ul>
        <div className={'space-y-4'}>
          <h2 className={'text-xl font-semibold'}>{t('Uses.Title')}</h2>
          <p>{t('Uses.Intro')}</p>
          <div className={'space-y-2'}>
            <h3 className={'text-lg font-semibold'}>{t('Uses.Languages')}</h3>
            <ul className={'flex flex-wrap gap-2'}>
              {languages.map((language, index) => (
                <UseBadge key={index} {...language} />
              ))}
            </ul>
          </div>
          <div className={'space-y-2'}>
            <h3 className={'text-lg font-semibold'}>{t('Uses.Libraries')}</h3>
            <ul className={'flex flex-wrap gap-2'}>
              {libraries.map((library, index) => (
                <UseBadge key={index} {...library} />
              ))}
            </ul>
          </div>
          <div className={'space-y-2'}>
            <h3 className={'text-lg font-semibold'}>{t('Uses.Tools')}</h3>
            <ul className={'flex flex-wrap gap-2'}>
              {tools.map((tool, index) => (
                <UseBadge key={index} {...tool} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}

interface Use {
  icon: JSX.Element
  label: string
}

function UseBadge({ icon, label }: Use) {
  return (
    <li className={'inline-flex items-center gap-x-2 rounded-lg border border-border bg-background p-2 px-3'}>
      {icon}
      <span className={'text-xs font-medium'}>{label}</span>
    </li>
  )
}
