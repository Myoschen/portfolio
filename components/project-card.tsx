'use client';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import Tooltip from '@/components/tooltip';
import { CodeIcon, RocketIcon } from '@radix-ui/react-icons';

const card = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
} satisfies Variants;

export type ProjectInfo = {
  image: string;
  title: string;
  description: string;
  repo: string;
  demo?: string;
};

interface Props {
  info: ProjectInfo;
}

function ProjectCard({ info }: Props) {
  const { image, title, description, repo, demo } = info;
  return (
    <motion.div
      variants={card}
      className="group space-y-4 border-2 border-slate-200 transition-colors hover:border-indigo-600 dark:border-neutral-800 dark:hover:border-indigo-300"
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          src={image}
          alt="Programming"
          fill
        />
      </div>
      <div className="flex flex-col gap-y-2 px-6 pb-4">
        <h2 className="font-ibm text-2xl font-semibold leading-relaxed">
          {title}
        </h2>
        <p className="font-inter text-sm font-medium tracking-wider text-neutral-400 dark:text-neutral-500">
          {description}
        </p>
        <div className="flex items-center justify-start gap-x-1">
          <Tooltip text="Repository">
            <a
              className="flex items-center justify-center rounded-md p-2 transition-colors hover:bg-slate-200 dark:hover:bg-neutral-800"
              href={repo}
              target="_blank"
              rel="noreferrer noopener"
            >
              <CodeIcon />
            </a>
          </Tooltip>
          {demo ? (
            <Tooltip text="Demo">
              <a
                className="flex items-center justify-center rounded-md p-2 transition-colors hover:bg-slate-200 dark:hover:bg-neutral-800"
                href={demo}
                target="_blank"
                rel="noreferrer noopener"
              >
                <RocketIcon />
              </a>
            </Tooltip>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
