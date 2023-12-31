import type { SVGBaseProps } from '@/lib/types'

export default function PNPMIcon({ size = 16, ...props }: SVGBaseProps) {
  return (
    <svg xmlns={'http://www.w3.org/2000/svg'} xmlnsXlink={'http://www.w3.org/1999/xlink'} viewBox={'66.092 33.5 184.5 184.5'} width={size} height={size} {...props}>
      <defs>
        <path id={'pnpm-a'} d={'M67.59 35h180v180h-180V35Z'} />
        <path id={'pnpm-b'} d={'M237.6 95h-50V45h50v50Z'} />
        <path id={'pnpm-c'} d={'M182.59 95h-50V45h50v50Z'} />
        <path id={'pnpm-d'} d={'M127.59 95h-50V45h50v50Z'} />
        <path id={'pnpm-e'} d={'M237.6 150h-50v-50h50v50Z'} />
        <path id={'pnpm-f'} d={'M182.59 150h-50v-50h50v50Z'} />
        <path id={'pnpm-g'} d={'M182.59 205h-50v-50h50v50Z'} />
        <path id={'pnpm-h'} d={'M237.6 205h-50v-50h50v50Z'} />
        <path id={'pnpm-i'} d={'M127.59 205h-50v-50h50v50Z'} />
      </defs>
      <use xlinkHref={'#pnpm-a'} fill={'#fff'} />
      <use xlinkHref={'#pnpm-b'} fill={'#f9ad00'} />
      <use xlinkHref={'#pnpm-c'} fill={'#f9ad00'} />
      <use xlinkHref={'#pnpm-d'} fill={'#f9ad00'} />
      <use xlinkHref={'#pnpm-e'} fill={'#f9ad00'} />
      <use xlinkHref={'#pnpm-f'} fill={'#4e4e4e'} />
      <use xlinkHref={'#pnpm-g'} fill={'#4e4e4e'} />
      <use xlinkHref={'#pnpm-h'} fill={'#4e4e4e'} />
      <use xlinkHref={'#pnpm-i'} fill={'#4e4e4e'} />
    </svg>
  )
}
