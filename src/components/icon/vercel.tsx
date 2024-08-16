import * as React from 'react'

import { cn } from '~/src/lib/utils'

export function Vercel({ className, ...props }: React. SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={cn('text-black dark:text-white', className)}
      viewBox="0 0 256 222"
      width={16}
      height={16}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <path fill="currentColor" d="m128 0 128 221.705H0z" />
    </svg>
  )
}
