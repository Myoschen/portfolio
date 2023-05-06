'use client';
import { motion, Variants } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import MainWrapper from '@/components/main-wrapper';
import NextLink from '@/components/next-link';
import PageTitle from '@/components/page-title';

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

function AboutPage() {
  const t = useTranslations('about');

  return (
    <MainWrapper>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-y-6"
      >
        <PageTitle label={t('title')} />
        <motion.div variants={item} className="relative h-80 overflow-hidden">
          <Image
            className="object-cover"
            src="/programming.svg"
            alt="Programming"
            fill
          />
        </motion.div>
        <motion.div
          variants={item}
          className="font-work-sans space-y-4 tracking-wide"
        >
          <p>{t('paragraph.degree')}</p>
          <p>{t('paragraph.programming')}</p>
          <p>{t('paragraph.cause')}</p>
          <p>{t('paragraph.currently')}</p>
          <p>{t('paragraph.addition')}</p>
          <p>{t('paragraph.future')}</p>
        </motion.div>
        <motion.div variants={item} className="inline-block self-end">
          <NextLink next="skill" label={t('next')} />
        </motion.div>
      </motion.div>
    </MainWrapper>
  );
}

export default AboutPage;
