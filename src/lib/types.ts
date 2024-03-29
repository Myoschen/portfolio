import type { SVGProps } from 'react'
import type { StaticImageData } from 'next/image'

export type Locale = 'en' | 'zh-TW'

export type LinkItem = {
  icon: JSX.Element
  label: string
  url: string
}

export type SkillLevel =
  | 'newbie'
  | 'junior'
  | 'intermediate'
  | 'advanced'
  | 'master'

export type SkillItem = {
  icon: JSX.Element
  label: string
  level: SkillLevel
}

export type ProjectItem = {
  title: string
  desc: string
  img: string | StaticImageData
  url?: {
    repo: string
    demo?: string
  }
}

export type ActionItem = {
  id: string
  icon: JSX.Element
  label: string
  perform: () => void
}

export type SVGBaseProps = SVGProps<SVGSVGElement> & {
  size?: number
}
