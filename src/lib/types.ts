import type { SVGProps } from 'react'

export type Locale = 'en' | 'zh-TW'

export interface LinkItem {
  icon: JSX.Element
  label: string
  url: string
}

export interface SvgProps extends SVGProps<SVGSVGElement> {
  size?: number
}
