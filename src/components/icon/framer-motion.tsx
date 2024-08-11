import * as React from 'react'

export function FramerMotion(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 256 384"
      width={16}
      height={16}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <path fill="#fff" d="M0 0h256v128H128zm0 128h128l128 128H128v128L0 256z" />
    </svg>
  )
}
