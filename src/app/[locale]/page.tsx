import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'

import AvatarImg from '~/public/images/avatar.png'

import { CanvaIcon, ChakraUIIcon, CSS3Icon, DiscordIcon, ElectronIcon, ExpoIcon, FigmaIcon, FirebaseIcon, FirefoxIcon, FramerIcon, GithubIcon, GmailIcon, HTML5Icon, JavaScriptIcon, NextJSIcon, NodeJSIcon, NotionIcon, PNPMIcon, PostmanIcon, ReactIcon, ShadcnUIIcon, TailwindCSSIcon, TypeScriptIcon, VercelIcon, VscodeIcon, XIcon } from '@/components/icons'
import { SocialLink } from '@/components/social-link'
import type { LinkItem, Locale } from '@/lib/types'

const socialLinks: LinkItem[] = [
  { icon: <GithubIcon />, label: 'Myoschen', url: 'https://github.com/Myoschen' },
  { icon: <GmailIcon />, label: 'myos.chen@gmail.com', url: 'mailto:myos.chen@gmail.com' },
  { icon: <XIcon />, label: 'MyosChen', url: 'https://twitter.com/MyosChen' },
]

const languages: Use[] = [
  { icon: <HTML5Icon />, label: 'HTML' },
  { icon: <CSS3Icon />, label: 'CSS' },
  { icon: <JavaScriptIcon />, label: 'JavaScript' },
  { icon: <TypeScriptIcon />, label: 'TypeScript' },
]
const libraries: Use[] = [
  { icon: <ReactIcon />, label: 'React' },
  { icon: <ReactIcon />, label: 'React Native' },
  { icon: <NextJSIcon />, label: 'Next.js' },
  { icon: <ExpoIcon />, label: 'Expo' },
  { icon: <TailwindCSSIcon />, label: 'Tailwind CSS' },
  { icon: <ShadcnUIIcon />, label: 'shadcn/ui' },
  { icon: <ChakraUIIcon />, label: 'Chakra UI' },
  { icon: <FramerIcon />, label: 'Framer Motion' },
  { icon: <NodeJSIcon />, label: 'Node.js' },
  { icon: <ElectronIcon />, label: 'Electron' },
]
const tools: Use[] = [
  { icon: <VscodeIcon />, label: 'vscode' },
  { icon: <FirefoxIcon />, label: 'Firefox' },
  { icon: <NotionIcon />, label: 'Notion' },
  { icon: <PostmanIcon />, label: 'Postman' },
  { icon: <FigmaIcon />, label: 'Figma' },
  { icon: <CanvaIcon />, label: 'Canva' },
  { icon: <DiscordIcon />, label: 'Discord' },
  { icon: <PNPMIcon />, label: 'pnpm' },
  { icon: <VercelIcon />, label: 'Vercel' },
  { icon: <FirebaseIcon />, label: 'Firebase' },
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
            src={AvatarImg}
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

type Use = {
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
