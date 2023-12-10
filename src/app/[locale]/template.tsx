'use client'

import { motion } from 'framer-motion'

interface Props {
  children: React.ReactNode
}

export default function RootTemplate({ children }: Props) {
  return (
    <motion.div
      className={'flex-1'}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
    >
      {children}
    </motion.div>
  )
}
