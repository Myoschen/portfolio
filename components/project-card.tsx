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
      className="border-light-primary-500 hover:border-light-secondary dark:border-dark-primary-600 dark:hover:border-dark-secondary group space-y-4 border-2 transition-colors"
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
        <h2 className="font-heading text-2xl font-medium leading-relaxed">
          {title}
        </h2>
        <p className="font-paragraph text-light-primary-700 text-sm tracking-wider">
          {description}
        </p>
        <div className="flex items-center justify-start gap-x-1">
          <Tooltip text="Repository">
            <a
              className="hover:bg-light-primary-500 dark:hover:bg-dark-primary-700 flex items-center justify-center rounded-md p-2 transition-colors"
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
                className="hover:bg-light-primary-500 dark:hover:bg-dark-primary-700 flex items-center justify-center rounded-md p-2 transition-colors"
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
