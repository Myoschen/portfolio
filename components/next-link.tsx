'use client'

import { motion, Variants } from 'framer-motion'
import { LucideArrowRight } from 'lucide-react'

import Link from './link'

interface Props {
  next: string
  label: string
}

const arrow = {
  hover: {
    x: [0, 4, 0],
    transition: {
      duration: 0.75,
      times: [0, 0.6, 1],
      repeat: Infinity,
      repeatType: 'reverse'
    }
  }
} satisfies Variants

function NextLink({ next, label }: Props) {
  return (
    <Link href={`/${next}`}>
      <motion.div className="flex items-center gap-x-1" whileHover="hover">
        <span className="font-work-sans font-medium capitalize tracking-wider">{label}</span>
        <motion.div variants={arrow}>
          <LucideArrowRight size={16} />
        </motion.div>
      </motion.div>
    </Link>
  )
}

export default NextLink
