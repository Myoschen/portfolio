'use client';

import Image from 'next/image';
import {LucideCode, LucideRocket} from 'lucide-react';

import Tooltip from './tooltip';

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

function ProjectCard({info}: Props) {
  const {image, title, description, repo, demo} = info;
  return (
    <div
      id="m-item"
      className="border-mauve-7 hover:border-violet-7 dark:border-mauveDark-7 dark:hover:border-violetDark-7 group space-y-4 rounded border-2 transition-colors"
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          className="rounded-t object-cover transition-transform duration-500 group-hover:scale-105"
          src={image}
          alt="Programming"
          fill
        />
      </div>
      <div className="flex flex-col gap-y-2 px-6 pb-4">
        <h2 className="font-work-sans text-2xl font-medium leading-relaxed">
          {title}
        </h2>
        <p className="font-work-sans text-sm tracking-wider">{description}</p>
        <div className="flex items-center justify-start gap-x-1">
          <Tooltip text="Repository">
            <a
              className="hover:bg-mauve-3 dark:hover:bg-mauveDark-3 flex items-center justify-center rounded-md p-2 transition-colors"
              href={repo}
              target="_blank"
              rel="noreferrer noopener"
            >
              <LucideCode size={16} />
            </a>
          </Tooltip>
          {demo ? (
            <Tooltip text="Demo">
              <a
                className="hover:bg-mauve-3 dark:hover:bg-mauveDark-3 flex items-center justify-center rounded-md p-2 transition-colors"
                href={demo}
                target="_blank"
                rel="noreferrer noopener"
              >
                <LucideRocket size={16} />
              </a>
            </Tooltip>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
