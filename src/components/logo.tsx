'use client'

import Image from 'next/image'

import { Link } from '@/lib/i18n'
import { scrollToTop } from '@/lib/utils'

interface LogoProps {
  src: string
}

export default function Logo({ src }: LogoProps) {
  return (
    <Link href={'/'} onClick={scrollToTop}>
      <Image
        className={'rounded-full'}
        src={src}
        alt={'Logo'}
        width={60}
        height={60}
      />
    </Link>
  )
}
