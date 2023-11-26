export type SkillLevel =
  | 'newbie'
  | 'junior'
  | 'intermediate'
  | 'advanced'
  | 'master'

export interface Skill {
  icon: JSX.Element
  title: string
  level: SkillLevel
}

export type SkillList = Array<Skill>

export interface Project {
  title: string
  description: string
  image: string
  repo: string
  demo?: string
}

export type ProjectList = Array<Project>

export interface SocialLink {
  icon: JSX.Element
  label: string
  href: string
}

export type SocialLinkList = Array<SocialLink>

export interface Action {
  id: string
  icon: JSX.Element
  title: string
  perform: () => void
}

export type ActionList = Array<Action>
