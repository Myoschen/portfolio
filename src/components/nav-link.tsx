'use client'

import * as React from 'react'
import NextLink, { type LinkProps as NextLinkProps } from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'

import { cn } from '@/lib/utils'

interface NavLinkProps extends React.PropsWithChildren<NextLinkProps> {
  className?: string
}

export function NavLink({ className, href, children, ...props }: NavLinkProps) {
  const segment = useSelectedLayoutSegment()
  const pathname = React.useRef(segment ? `/${segment}` : '/')
  const isActive = pathname.current === href

  React.useEffect(() => {
    pathname.current = segment ? `/${segment}` : '/'
  }, [segment])

  return (
    <NextLink className={cn('relative', className)} href={href} {...props}>
      {children}
      {isActive && (
        <svg
          className="absolute -left-3.5 top-1/2 -translate-y-1/2 fill-foreground"
          width="6"
          height="6"
          viewBox="0 0 6 6"
        >
          <circle cx="3" cy="3" r="3" />
        </svg>
      )}
    </NextLink>
  )
}
