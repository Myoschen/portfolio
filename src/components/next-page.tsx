'use client'

import { IconArrowRight } from '@tabler/icons-react'
import { motion, type Variants } from 'framer-motion'

import { Link } from '@/lib/i18n'
import { scrollToTop } from '@/lib/utils'

const arrow: Variants = {
  hover: {
    x: [0, 4, 0],
    transition: {
      duration: 0.75,
      times: [0, 0.6, 1],
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
}

interface NextPageProps {
  label: string
  url: string
  className?: string
}

export default function NextPage({ label, url, className }: NextPageProps) {
  return (
    <Link className={className} href={url} onClick={scrollToTop}>
      <motion.div className={'flex items-center gap-x-1'} whileHover={'hover'}>
        <span className={'font-medium tracking-wider'}>{label}</span>
        <motion.div variants={arrow}>
          <IconArrowRight size={20} />
        </motion.div>
      </motion.div>
    </Link>
  )
}
