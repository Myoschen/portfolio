'use client';
import { useTranslations } from 'next-intl';
import MainWrapper from '@/components/main-wrapper';
import MotionWrapper from '@/components/motion-wrapper';
import PageTitle from '@/components/page-title';
import ProjectCard, { ProjectInfo } from '@/components/project-card';

function ProjectPage() {
  const t = useTranslations('project');

  const projects: ProjectInfo[] = [
    {
      image: '/project/muser.png',
      title: 'Muser',
      description: t('description.muser'),
      repo: 'https://github.com/Myoschen/muser',
    },
    {
      image: '/project/social-media-app.png',
      title: 'Social Media',
      description: t('description.social-media'),
      repo: 'https://github.com/Myoschen/social-media-app',
      demo: 'https://social-media-app-myoschen.vercel.app',
    },
    {
      image: '/project/github-explorer.png',
      title: 'Github Explorer',
      description: t('description.github-explorer'),
      repo: 'https://github.com/Myoschen/github-explorer',
      demo: 'https://github-explorer-myoschen.vercel.app/',
    },
    {
      image: '/project/react-todo-list.png',
      title: 'React Todo List',
      description: t('description.react-todo-list'),
      repo: 'https://github.com/Myoschen/react-todo-list',
      demo: 'https://react-todo-list-myoschen.vercel.app/',
    },
    {
      image: '/project/react-linktree.png',
      title: 'React Linktree',
      description: t('description.react-linktree'),
      repo: 'https://github.com/Myoschen/react-linktree',
      demo: 'https://react-linktree.vercel.app/',
    },
    {
      image: '/project/typing-speed.png',
      title: 'Typing Speed',
      description: t('description.typing-speed'),
      repo: 'https://github.com/Myoschen/typing-speed',
      demo: 'https://typing-speed-myos.vercel.app/',
    },
  ];

  return (
    <MainWrapper>
      <MotionWrapper>
        <div className="m-container flex flex-col gap-y-6">
          <PageTitle label={t('title')} />
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.repo} info={project} />
            ))}
          </div>
        </div>
      </MotionWrapper>
    </MainWrapper>
  );
}

export default ProjectPage;
