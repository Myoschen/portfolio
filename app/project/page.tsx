'use client';
import { motion, Variants } from 'framer-motion';
import MainWrapper from '@/components/main-wrapper';
import PageTitle from '@/components/page-title';
import ProjectCard, { ProjectInfo } from '@/components/project-card';

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

const projects: ProjectInfo[] = [
  {
    image: '/project/muser.png',
    title: 'Muser',
    description: 'This is a simple mp3 player built with Electron and React.',
    repo: 'https://github.com/Myoschen/muser',
  },
  {
    image: '/project/react-todo-list.png',
    title: 'React Todo List',
    description: 'This is a todo list built with React and Tailwind CSS.',
    repo: 'https://github.com/Myoschen/react-todo-list',
    demo: 'https://react-todo-list-myoschen.vercel.app/',
  },
  {
    image: '/project/react-linktree.png',
    title: 'React Linktree',
    description: 'This is a linktree app built with React and Tailwind CSS.',
    repo: 'https://github.com/Myoschen/react-linktree',
    demo: 'https://react-linktree.vercel.app/',
  },
  {
    image: '/project/typing-speed.png',
    title: 'Typing Speed',
    description:
      'This is a test typing speed app built with React and Tailwind CSS.',
    repo: 'https://github.com/Myoschen/typing-speed',
    demo: 'https://typing-speed-myos.vercel.app/',
  },
  {
    image: '/project/social-media-app.png',
    title: 'Social Media',
    description:
      'This is a social media built with React, Firebase and Chakra UI.',
    repo: 'https://github.com/Myoschen/social-media-app',
    demo: 'https://social-media-app-myoschen.vercel.app',
  },
];

function ProjectPage() {
  return (
    <MainWrapper>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-y-6"
      >
        <PageTitle label="Side Projects" />
        <motion.div variants={item} className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.repo} info={project} />
          ))}
        </motion.div>
      </motion.div>
    </MainWrapper>
  );
}

export default ProjectPage;
