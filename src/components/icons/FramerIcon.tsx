import type { SVGBaseProps } from '@/lib/types'

export default function FramerIcon({ size = 16, ...props }: SVGBaseProps) {
  return (
    <svg viewBox={'0 0 256 384'} xmlns={'http://www.w3.org/2000/svg'} preserveAspectRatio={'xMidYMid'} fill={'currentColor'} width={size} height={size} {...props}>
      <path d={'M0 0h256v128H128L0 0Zm0 128h128l128 128H128v128L0 256V128Z'} />
    </svg>
  )
}