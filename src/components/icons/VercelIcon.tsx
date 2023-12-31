import type { SVGBaseProps } from '@/lib/types'

export default function VercelIcon({ size = 16, ...props }: SVGBaseProps) {
  return (
    <svg viewBox={'0 0 256 222'} xmlns={'http://www.w3.org/2000/svg'} preserveAspectRatio={'xMidYMid'} width={size} height={size} {...props}>
      <path fill={'currentColor'} d={'m128 0 128 221.705H0z'} />
    </svg>
  )
}
