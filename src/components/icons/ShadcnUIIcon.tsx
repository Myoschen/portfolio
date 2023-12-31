import type { SVGBaseProps } from '@/lib/types'

export default function ShadcnUIIcon({ size = 16, ...props }: SVGBaseProps) {
  return (
    <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 256 256'} width={size} height={size} {...props}>
      <path fill={'none'} d={'M0 0h256v256H0z'} />
      <path fill={'none'} strokeWidth={12} stroke={'currentColor'} d={'M208 128l-80 80M192 40L40 192'} />
    </svg>
  )
}
