import * as React from 'react'

export function Dot(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 6 6"
      {...props}
    >
      <circle cx="3" cy="3" r="3" fill="currentColor" />
    </svg>
  )
}
