'use client'

import Image, { type StaticImageData } from 'next/image'
import { useTheme } from 'next-themes'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { AppWindowIcon, CodeIcon } from 'lucide-react'

import { ExternalLink } from '@/components/ui/external-link'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'

export interface ProjectItem {
  title: string
  description: string
  image: string | StaticImageData
  url?: {
    repo: string
    preview?: string
  }
}

interface ProjectProps {
  item: ProjectItem
  className?: string
}

/**
 * Magic Card from Magic UI
 * @see https://magicui.design/docs/components/magic-card
 */
export function Project({ item, className }: ProjectProps) {
  const { theme } = useTheme()

  // animation
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const gradientColor = theme === 'dark' ? '#262626' : '#D9D9D955'
  const background = useMotionTemplate`
    radial-gradient(200px circle at ${mouseX}px ${mouseY}px, ${gradientColor}, transparent 100%)
  `

  return (
    <div
      className={cn('group relative overflow-hidden rounded-2xl border border-border p-2', className)}
      onMouseMove={(e) => {
        const { left, top } = e.currentTarget.getBoundingClientRect()
        mouseX.set(e.clientX - left)
        mouseY.set(e.clientY - top)
      }}
    >
      <motion.div
        className={'pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100'}
        style={{ background }}
      />
      <div className={'relative mb-4 aspect-video overflow-hidden rounded-xl shadow'}>
        <Image
          className={'object-cover'}
          src={item.image}
          alt={item.title}
          fill={true}
          placeholder={'blur'}
        />
      </div>
      <div className={'relative flex h-[160px] flex-col gap-y-1.5 px-6 pb-4'}>
        <h2 className={'text-2xl font-medium leading-relaxed'}>{item.title}</h2>
        <p className={'line-clamp-3 h-full text-sm tracking-wider'}>{item.description}</p>
        <div className={'flex items-center justify-start gap-x-1'}>
          {item.url?.repo && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <ExternalLink
                    className={'flex items-center justify-center rounded-md p-2 transition-colors hover:bg-secondary'}
                    href={item.url!.repo}
                  >
                    <CodeIcon size={20} />
                  </ExternalLink>
                </TooltipTrigger>
                <TooltipContent>{'Repository'}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
          {item.url?.preview && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <ExternalLink
                    className={'flex items-center justify-center rounded-md p-2 transition-colors hover:bg-secondary'}
                    href={item.url!.preview}
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
