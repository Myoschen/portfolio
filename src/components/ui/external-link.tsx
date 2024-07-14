import Link, { type LinkProps } from 'next/link'

interface ExternalLinkProps extends LinkProps {
  children: React.ReactNode
  className?: string
}

export function ExternalLink({ children, className, ...props }: ExternalLinkProps) {
  return (
    <Link
      className={className}
      target={'_blank'}
      rel={'noreferrer noopener'}
      {...props}
    >
      {children}
    </Link>
  )
}
