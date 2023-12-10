import { IconAppWindow, IconCode } from '@tabler/icons-react'
import Image from 'next/image'

import ExternalLink from '@/components/ui/external-link'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import type { ProjectItem } from '@/lib/types'

interface ProjectProps extends ProjectItem {}

export default function Project({ title, desc, img, url }: ProjectProps) {
  return (
    <div className={'group space-y-4 rounded border-2 border-mauve-7 transition-colors hover:border-violet-7 dark:border-mauve-dark-7 dark:hover:border-violet-dark-7'}>
      <div className={'relative aspect-video overflow-hidden'}>
        <Image
          className={'rounded-t object-cover transition-transform duration-500 group-hover:scale-105'}
          src={img}
          alt={title}
          fill={true}
          placeholder={'blur'}
        />
      </div>
      <div className={'flex h-[160px] flex-col gap-y-1.5 px-6 pb-4'}>
        <h2 className={'text-2xl font-medium leading-relaxed'}>{title}</h2>
        <p className={'line-clamp-3 h-full text-sm tracking-wider'}>{desc}</p>
        <div className={'flex items-center justify-start gap-x-1'}>
          {url?.repo && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <ExternalLink
                    className={'flex items-center justify-center rounded-md p-2 transition-colors hover:bg-mauve-3 dark:hover:bg-mauve-dark-3'}
                    href={url.repo}
                  >
                    <IconCode size={20} />
                  </ExternalLink>
                </TooltipTrigger>
                <TooltipContent>{'Repository'}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
          {url?.demo && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <ExternalLink
                    className={'flex items-center justify-center rounded-md p-2 transition-colors hover:bg-mauve-3 dark:hover:bg-mauve-dark-3'}
                    href={url.demo}
                  >
                    <IconAppWindow size={20} />
                  </ExternalLink>
                </TooltipTrigger>
                <TooltipContent>{'Demo'}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
      </div>
    </div>
  )
}
