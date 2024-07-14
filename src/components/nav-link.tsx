'use client'

import { useSelectedLayoutSegment } from 'next/navigation'
import { motion } from 'framer-motion'

import { Link } from '@/lib/i18n'
import type { LinkItem } from '@/lib/types'
import { cn, scrollToTop } from '@/lib/utils'

interface NavLinkProps extends LinkItem {}

export function NavLink({ icon, label, url }: NavLinkProps) {
  const selectedLayoutSegment = useSelectedLayoutSegment()
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/'
  const isActive = pathname === url

  return (
    <Link href={url} onClick={scrollToTop}>
      <span
        className={cn(
          'relative flex items-center gap-x-2 px-2 py-1 font-medium tracking-wide opacity-75 transition-opacity',
          isActive && 'opacity-100'
        )}
      >
        {icon}
        {label}
        {isActive && (
          <motion.div
            className={'absolute inset-0 -z-10 rounded-lg bg-secondary'}
            layoutId={'active-link'}
          />
        )}
      </span>
    </Link>
  )
}
