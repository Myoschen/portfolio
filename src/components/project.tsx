import Image from 'next/image'
import { AppWindowIcon, CodeIcon } from 'lucide-react'

import { ExternalLink } from '@/components/ui/external-link'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import type { ProjectItem } from '@/lib/types'

interface ProjectProps extends ProjectItem {}

export function Project({ title, desc, img, url }: ProjectProps) {
  return (
    <div className={'group space-y-4 overflow-hidden rounded-xl border-2 border-border bg-secondary/50'}>
      <div className={'relative aspect-video overflow-hidden'}>
        <Image
          className={'rounded-t object-cover transition-transform duration-500 hover:scale-110'}
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
                    className={'flex items-center justify-center rounded-md p-2 transition-colors hover:bg-secondary'}
                    href={url.repo}
                  >
                    <CodeIcon size={20} />
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
                    className={'flex items-center justify-center rounded-md p-2 transition-colors hover:bg-secondary'}
                    href={url.demo}
                  >
                    <AppWindowIcon size={20} />
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
