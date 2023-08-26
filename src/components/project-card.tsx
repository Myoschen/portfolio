'use client';

import Image from 'next/image';

import type {Project} from '@/types/common';
import Icon from '@/components/ui/icon';
import Tooltip from '@/components/ui/tooltip';

interface Props extends Project {}

function ProjectCard({image, title, description, repo, demo}: Props) {
  return (
    <div
      id="m-item"
      className="group space-y-4 rounded border-2 border-mauve-7 transition-colors hover:border-violet-7 dark:border-mauve-dark-7 dark:hover:border-violet-dark-7"
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
        <h2 className="text-2xl font-medium leading-relaxed">{title}</h2>
        <p className="text-sm tracking-wider">{description}</p>
        <div className="flex items-center justify-start gap-x-1">
          <Tooltip text="Repository">
            <a
              className="flex items-center justify-center rounded-md p-2 transition-colors hover:bg-mauve-3 dark:hover:bg-mauve-dark-3"
              href={repo}
              target="_blank"
              rel="noreferrer noopener"
            >
              <Icon name="folder-code" />
            </a>
          </Tooltip>
          {demo && (
            <Tooltip text="Demo">
              <a
                className="flex items-center justify-center rounded-md p-2 transition-colors hover:bg-mauve-3 dark:hover:bg-mauve-dark-3"
                href={demo}
                target="_blank"
                rel="noreferrer noopener"
              >
                <Icon name="demo" />
              </a>
            </Tooltip>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
