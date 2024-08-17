'use client'

import * as React from 'react'
import NextLink, { type LinkProps as NextLinkProps } from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import { motion } from 'framer-motion'

import { Dot } from '@/components/icon/dot'
import { cn } from '@/lib/utils'

interface NavLinkProps extends React.PropsWithChildren<NextLinkProps> {
  className?: string
}

export function NavLink({ className, href, children, ...props }: NavLinkProps) {
  const segment = useSelectedLayoutSegment()
  const pathname = segment ? `/${segment}` : '/'
  const isActive = pathname === href

  return (
    <NextLink className={cn('relative', className)} href={href} {...props}>
      {children}
      {isActive && (
        <motion.div
          className="absolute -left-3.5 top-0 flex h-full items-center"
          layout="position"
          layoutId="dot"
          transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
        >
          <Dot className="size-1.5 fill-foreground" />
        </motion.div>
      )}
    </NextLink>
  )
}
