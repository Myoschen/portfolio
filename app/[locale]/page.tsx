'use client';
import { motion, Variants } from 'framer-motion';
import { LucideGithub, LucideMail, LucideTwitter } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import MainWrapper from '@/components/main-wrapper';
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

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
} satisfies Variants;

const item = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
} satisfies Variants;

export default function HomePage() {
  const t = useTranslations('home');

  return (
    <MainWrapper>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-y-6"
      >
        <PageTitle label={t('title')} />
        <motion.div variants={item} className="font-paragraph tracking-wide">
          <p>{t('name')}</p>
          <p>{t('major')}</p>
        </motion.div>
        <motion.div
          variants={item}
          className="grid gap-y-4 md:grid-cols-[180px_auto] md:gap-x-2 md:gap-y-0"
        >
          <div className="ring-light-secondary shadow-light-secondary dark:ring-dark-secondary dark:shadow-dark-secondary relative aspect-square w-40 overflow-hidden rounded-full shadow-lg ring-4">
            <Image
              className="object-cover"
              src="/ryan-chen.png"
              alt="Ryan Chen"
              fill
            />
          </div>
          <ul className="flex flex-wrap justify-start gap-x-4 md:flex-col md:justify-center md:gap-y-2">
            {socialLinks.map((socialLink) => (
              <li key={socialLink.href}>
                <SocialLink info={socialLink} />
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div variants={item} className="font-paragraph tracking-wide">
          <p>{t('currently')}</p>
        </motion.div>
        <motion.div variants={item} className="inline-block self-end">
          <NextLink next="about" label={t('next')} />
        </motion.div>
      </motion.div>
    </MainWrapper>
  );
}