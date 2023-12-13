'use client'

import { useSelectedLayoutSegment } from 'next/navigation'
import { motion } from 'framer-motion'

import { Link } from '@/lib/i18n'
import type { LinkItem } from '@/lib/types'
import { cn, scrollToTop } from '@/lib/utils'

interface NavLinkProps extends LinkItem {}

export default function NavLink({ icon, label, url }: NavLinkProps) {
  const selectedLayoutSegment = useSelectedLayoutSegment()
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/'
  const isActive = pathname === url

  return (
    <Link className={'flex transition-colors'} href={url} onClick={scrollToTop}>
      <span
        className={cn(
          'relative flex items-center gap-x-2 px-2 py-1 font-medium tracking-wide',
          { 'text-violet-11 dark:text-violet-dark-11': isActive }
        )}
      >
        {icon}
        {label}
        {isActive && (
          <motion.div
            className={'absolute inset-0 -z-10 rounded-md bg-mauve-4 dark:bg-mauve-dark-4'}
            layoutId={'active-link'}
          />
        )}
      </span>
    </Link>
  )
}
