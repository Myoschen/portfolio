'use client';

import {
  IconBrandCss3,
  IconBrandFirebase,
  IconBrandGolang,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandMongodb,
  IconBrandNextjs,
  IconBrandPython,
  IconBrandReact,
  IconBrandRedux,
  IconBrandRust,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandVue,
} from '@tabler/icons-react';
import {useTranslations} from 'next-intl';

import MainWrapper from '@/components/main-wrapper';
import MotionWrapper from '@/components/motion-wrapper';
import NextLink from '@/components/next-link';
import PageTitle from '@/components/page-title';
import SkillCard, {type SkillInfo} from '@/components/skill-card';

const skills: SkillInfo[] = [
  {
    title: 'HTML',
    icon: <IconBrandHtml5 color="#dd4a25" size={60} />,
    level: 'advanced',
  },
  {
    title: 'CSS',
    icon: <IconBrandCss3 color="#254bdd" size={60} />,
    level: 'master',
  },
  {
    title: 'JavaScript',
    icon: <IconBrandJavascript color="#f4cd00" size={60} />,
    level: 'master',
  },
  {
    title: 'TypeScript',
    icon: <IconBrandTypescript color="#2f74c0" size={60} />,
    level: 'intermediate',
  },
  {
    title: 'React',
    icon: <IconBrandReact color="#5ed3f3" size={60} />,
    level: 'master',
  },
  {
    title: 'Next.js',
    icon: <IconBrandNextjs size={60} />,
    level: 'advanced',
  },
  {
    title: 'Vue.js',
    icon: <IconBrandVue color="#42d392" size={60} />,
    level: 'newbie',
  },
  {
    title: 'React Redux',
    icon: <IconBrandRedux color="#7248b7" size={60} />,
    level: 'advanced',
  },
  {
    title: 'Tailwind CSS',
    icon: <IconBrandTailwind color="#38bdf8" size={60} />,
    level: 'master',
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
  {
    title: 'Python',
    icon: <IconBrandPython color="#4481b2" size={60} />,
    level: 'master',
  },
  {
    title: 'Golang',
    icon: <IconBrandGolang color="#00a7d0" size={60} />,
    level: 'intermediate',
  },
  {
    title: 'Rust',
    icon: <IconBrandRust color="#ec4d09" size={60} />,
    level: 'newbie',
  },
];

function SkillPage() {
  const t = useTranslations('skill');

  return (
    <MainWrapper>
      <MotionWrapper>
        <div id="m-container" className="flex flex-col gap-y-6">
          <PageTitle label={t('title')} />
          <div className="grid gap-y-4">
            {skills.map((skill) => (
              <SkillCard key={skill.title} info={skill} />
            ))}
          </div>
          <div id="m-item" className="inline-block self-end">
            <NextLink next="project" label={t('next')} />
          </div>
        </div>
      </MotionWrapper>
    </MainWrapper>
  );
}

export default SkillPage;
