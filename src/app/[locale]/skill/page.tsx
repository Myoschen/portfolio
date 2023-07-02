'use client';

import {useTranslations} from 'next-intl';

import type {SkillList} from '@/types/common';
import MainLayout from '@/components/layout/main';
import MotionLayout from '@/components/layout/motion';
import NextLink from '@/components/next-link';
import PageTitle from '@/components/page-title';
import SkillItem from '@/components/skill-item';
import Icon from '@/components/ui/icon';

const skillList: SkillList = [
  {
    title: 'HTML',
    icon: <Icon name="html" color="#dd4a25" size={60} />,
    level: 'advanced',
  },
  {
    title: 'CSS',
    icon: <Icon name="css" color="#254bdd" size={60} />,
    level: 'master',
  },
  {
    title: 'JavaScript',
    icon: <Icon name="javascript" color="#f4cd00" size={60} />,
    level: 'master',
  },
  {
    title: 'TypeScript',
    icon: <Icon name="typescript" color="#2f74c0" size={60} />,
    level: 'intermediate',
  },
  {
    title: 'React',
    icon: <Icon name="react" color="#5ed3f3" size={60} />,
    level: 'master',
  },
  {
    title: 'Next.js',
    icon: <Icon name="nextjs" size={60} />,
    level: 'advanced',
  },
  {
    title: 'Vue',
    icon: <Icon name="vue" color="#42d392" size={60} />,
    level: 'newbie',
  },
  {
    title: 'React Redux',
    icon: <Icon name="redux" color="#7248b7" size={60} />,
    level: 'advanced',
  },
  {
    title: 'Tailwind CSS',
    icon: <Icon name="tailwindcss" color="#38bdf8" size={60} />,
    level: 'master',
  },
  {
    title: 'Firebase',
    icon: <Icon name="firebase" color="#ffcb2f" size={60} />,
    level: 'intermediate',
  },
  {
    title: 'Mongodb',
    icon: <Icon name="mongodb" color="#10aa50" size={60} />,
    level: 'intermediate',
  },
  {
    title: 'Python',
    icon: <Icon name="python" color="#4481b2" size={60} />,
    level: 'master',
  },
  {
    title: 'Golang',
    icon: <Icon name="golang" color="#00a7d0" size={60} />,
    level: 'intermediate',
  },
  {
    title: 'Rust',
    icon: <Icon name="rust" color="#ec4d09" size={60} />,
    level: 'newbie',
  },
];

function SkillPage() {
  const t = useTranslations('skill');

  return (
    <MainLayout>
      <MotionLayout>
        <div id="m-container" className="flex flex-col gap-y-6">
          <PageTitle label={t('title')} />
          <div className="grid gap-y-4">
            {skillList.map((skill, index) => (
              <SkillItem key={index} {...skill} />
            ))}
          </div>
          <div id="m-item" className="inline-block self-end">
            <NextLink next="project" label={t('next')} />
          </div>
        </div>
      </MotionLayout>
    </MainLayout>
  );
}

export default SkillPage;
