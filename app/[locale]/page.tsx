'use client';
import { LucideGithub, LucideMail, LucideTwitter } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import MainWrapper from '@/components/main-wrapper';
import MotionWrapper from '@/components/motion-wrapper';
import NextLink from '@/components/next-link';
import PageTitle from '@/components/page-title';
import SocialLink, { SocialLinkInfo } from '@/components/social-link';

const socialLinks: SocialLinkInfo[] = [
  {
    label: 'Myoschen',
    href: 'https://github.com/Myoschen',
    icon: <LucideGithub size={16} />,
  },
  {
    label: 'myos.chen@gmail.com',
    href: 'mailto:myos.chen@gmail.com',
    icon: <LucideMail size={16} />,
  },
  {
    label: 'MyosChen',
    href: 'https://twitter.com/MyosChen',
    icon: <LucideTwitter size={16} />,
  },
];

export default function HomePage() {
  const t = useTranslations('home');

  return (
    <MainWrapper>
      <MotionWrapper>
        <div className="m-container flex flex-col gap-y-6">
          <PageTitle label={t('title')} />
          <div className="font-work-sans m-item tracking-wide">
            <p>{t('name')}</p>
            <p>{t('major')}</p>
          </div>
          <div className="m-item grid gap-y-4 md:grid-cols-[180px_auto] md:gap-x-2 md:gap-y-0">
            <div className="ring-violet-violet7 dark:via-violetDark-violet7 relative aspect-square w-40 overflow-hidden rounded-full ring-4">
              <Image
                className="object-cover"
                src="/ryan-chen.png"
                alt="Ryan Chen"
                fill
              />
            </div>
            <ul className="flex flex-wrap  justify-start gap-x-4 md:flex-col md:justify-center md:gap-y-2">
              {socialLinks.map((socialLink) => (
                <li key={socialLink.href}>
                  <SocialLink info={socialLink} />
                </li>
              ))}
            </ul>
          </div>
          <div className="font-work-sans m-item tracking-wide">
            <p>{t('currently')}</p>
          </div>
          <div className="m-item inline-block self-end">
            <NextLink next="about" label={t('next')} />
          </div>
        </div>
      </MotionWrapper>
    </MainWrapper>
  );
}
