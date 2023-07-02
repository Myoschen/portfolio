'use client';

import Image from 'next/image';
import {useTranslations} from 'next-intl';

import type {SocialLinkList} from '@/types/common';
import MainLayout from '@/components/layout/main';
import MotionLayout from '@/components/layout/motion';
import NextLink from '@/components/next-link';
import PageTitle from '@/components/page-title';
import SocialLink from '@/components/social-link';
import Icon from '@/components/ui/icon';

const socialLinks: SocialLinkList = [
  {
    icon: <Icon name="github" />,
    label: 'Myoschen',
    href: 'https://github.com/Myoschen',
  },
  {
    icon: <Icon name="mail" />,
    label: 'myos.chen@gmail.com',
    href: 'mailto:myos.chen@gmail.com',
  },
  {
    icon: <Icon name="twitter" />,
    label: 'MyosChen',
    href: 'https://twitter.com/MyosChen',
  },
];

export default function HomePage() {
  const t = useTranslations('home');

  return (
    <MainLayout>
      <MotionLayout>
        <div id="m-container" className="flex flex-col gap-y-6">
          <PageTitle label={t('title')} />
          <div id="m-item" className="tracking-wide">
            <p>{t('name')}</p>
            <p>{t('major')}</p>
          </div>
          <div
            id="m-item"
            className="grid gap-y-4 md:grid-cols-[180px_auto] md:gap-x-2 md:gap-y-0"
          >
            <div className="relative aspect-square w-40 overflow-hidden rounded-full ring-4 ring-violet-7 dark:via-violet-dark-7">
              <Image
                className="object-cover"
                src="/images/ryan-chen.png"
                alt="Ryan Chen"
                width={160}
                height={160}
              />
            </div>
            <ul className="flex flex-wrap  justify-start gap-x-4 md:flex-col md:justify-center md:gap-y-2">
              {socialLinks.map((socialLink) => (
                <li key={socialLink.href}>
                  <SocialLink {...socialLink} />
                </li>
              ))}
            </ul>
          </div>
          <div id="m-item" className="tracking-wide">
            <p>{t('currently')}</p>
          </div>
          <div id="m-item" className="inline-block self-end">
            <NextLink next="about" label={t('next')} />
          </div>
        </div>
      </MotionLayout>
    </MainLayout>
  );
}
