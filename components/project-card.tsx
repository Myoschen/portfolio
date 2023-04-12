'use client';
import { motion, Variants } from 'framer-motion';
import { CodeIcon, RocketIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Tooltip from '@/components/tooltip';

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
      className="space-y-4 rounded-md border border-neutral-800 p-4"
    >
      <div className="relative aspect-video overflow-hidden rounded-md">
        <Image className="object-cover" src={image} alt="Programming" fill />
      </div>
      <div className="flex flex-col gap-y-2 px-2">
        <h2 className="font-ibm text-2xl font-semibold leading-relaxed">
          {title}
        </h2>
        <p className="font-inter font-medium tracking-wider">{description}</p>
        <div className="flex items-center justify-start gap-x-1">
          <Tooltip text="Repository">
            <a
              className="flex items-center justify-center rounded-md p-2 transition-colors hover:bg-neutral-700"
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
                className="flex items-center justify-center rounded-md p-2 transition-colors hover:bg-neutral-700"
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
