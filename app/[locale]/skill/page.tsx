'use client';
import { motion, Variants } from 'framer-motion';
import { useTranslations } from 'next-intl';
import MainWrapper from '@/components/main-wrapper';
import NextLink from '@/components/next-link';
import PageTitle from '@/components/page-title';
import SkillCard, { SkillInfo } from '@/components/skill-card';
import {
    IconBrandCss3, IconBrandFirebase, IconBrandHtml5, IconBrandJavascript, IconBrandMongodb,
    IconBrandReact, IconBrandRedux, IconBrandTailwind, IconBrandTypescript
} from '@tabler/icons-react';

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
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, staggerChildren: 0.25 },
  },
} satisfies Variants;

const skills: SkillInfo[] = [
  {
    title: 'HTML',
    icon: <IconBrandHtml5 color="#dd4a25" size={60} />,
    level: 'advanced',
  },
  {
    title: 'CSS',
    icon: <IconBrandCss3 color="#254bdd" size={60} />,
    level: 'advanced',
  },
  {
    title: 'JavaScript',
    icon: <IconBrandJavascript color="#f4cd00" size={60} />,
    level: 'advanced',
  },
  {
    title: 'TypeScript',
    icon: <IconBrandTypescript color="#2f74c0" size={60} />,
    level: 'intermediate',
  },
  {
    title: 'React',
    icon: <IconBrandReact color="#5ed3f3" size={60} />,
    level: 'advanced',
  },
  {
    title: 'React Redux',
    icon: <IconBrandRedux color="#7248b7" size={60} />,
    level: 'intermediate',
  },
  {
    title: 'Tailwind CSS',
    icon: <IconBrandTailwind color="#38bdf8" size={60} />,
    level: 'advanced',
  },
  {
    title: 'Firebase',
    icon: <IconBrandFirebase color="#ffcb2f" size={60} />,
    level: 'intermediate',
  },
  {
    title: 'Mongodb',
    icon: <IconBrandMongodb color="#10aa50" size={60} />,
    level: 'intermediate',
  },
];

function SkillPage() {
  const t = useTranslations('Skill');

  return (
    <MainWrapper>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-y-6"
      >
        <PageTitle label={t('title')} />
        <motion.div variants={item} className="grid gap-y-4">
          {skills.map((skill) => (
            <SkillCard key={skill.title} info={skill} />
          ))}
        </motion.div>
        <motion.div variants={item} className="inline-block self-end">
          <NextLink next="project" label={t('next')} />
        </motion.div>
      </motion.div>
    </MainWrapper>
  );
}

export default SkillPage;
