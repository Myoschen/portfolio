import { IconBrandGithub, IconBrandX, IconMail } from '@tabler/icons-react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'

import NextPage from '@/components/next-page'
import SocialLink from '@/components/social-link'
import type { LinkItem, Locale } from '@/lib/types'
import AvatarImg from '~/public/images/avatar.png'

const socialLinks: LinkItem[] = [
  { icon: <IconBrandGithub size={20} />, label: 'Myoschen', url: 'https://github.com/Myoschen' },
  { icon: <IconMail size={20} />, label: 'myos.chen@gmail.com', url: 'mailto:myos.chen@gmail.com' },
  { icon: <IconBrandX size={20} />, label: 'MyosChen', url: 'https://twitter.com/MyosChen' },
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
        <p className={'whitespace-pre-line tracking-wide'}>{t('Intro')}</p>
        <div className={'grid gap-y-4 md:grid-cols-[180px_auto] md:gap-x-2 md:gap-y-0'}>
          <div className={'relative aspect-square w-40 overflow-hidden rounded-full ring-4 ring-violet-7 dark:via-violet-dark-7'}>
            <Image
              className={'object-cover'}
              src={AvatarImg}
              alt={'Ryan Chen'}
              placeholder={'blur'}
            />
          </div>
          <ul className={'flex flex-wrap  justify-start gap-x-4 md:flex-col md:justify-center md:gap-y-2'}>
            {socialLinks.map((props, index) => (
              <li key={index}>
                <SocialLink {...props} />
              </li>
            ))}
          </ul>
        </div>
        <p className={'tracking-wide'}>{t('Status')}</p>
        <NextPage className={'ml-auto'} label={t('NextPage')} url={'/about'} />
      </div>
    </main>
  )
}
