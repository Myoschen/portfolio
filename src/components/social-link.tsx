import ExternalLink from '@/components/ui/external-link'
import type { LinkItem } from '@/lib/types'

interface SocialLinkProps extends LinkItem {}

export default function SocialLink({ icon, label, url }: SocialLinkProps) {
  return (
    <ExternalLink
      className={'inline-flex items-center gap-x-2 underline transition-colors ease-out hover:text-violet-10 dark:hover:text-violet-dark-10'}
      href={url}
    >
      {icon}
      <p className={'tracking-wide'}>{label}</p>
    </ExternalLink>
  )
}
