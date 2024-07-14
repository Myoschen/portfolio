import { ExternalLink } from '@/components/ui/external-link'
import type { LinkItem } from '@/lib/types'

interface SocialLinkProps extends LinkItem {}

export function SocialLink({ icon, label, url }: SocialLinkProps) {
  return (
    <ExternalLink
      className={'inline-flex items-center gap-x-2 transition-opacity ease-out hover:opacity-50'}
      href={url}
    >
      {icon}
      <p className={'tracking-wide'}>{label}</p>
    </ExternalLink>
  )
}
