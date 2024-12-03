'use client'

import * as React from 'react'
import { LayoutRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'motion/react'

/**
 * @see https://github.com/vercel/next.js/discussions/59349
 * @see https://github.com/vercel/next.js/issues/49279
 */
export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        className="flex-1"
        initial={{ y: 20, opacity: 0, filter: 'blur(8px)' }}
        animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
        transition={{ ease: [0.83, 0, 0.17, 1], duration: 0.5 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

function FrozenRouter({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const context = React.useContext(LayoutRouterContext ?? {})
  const frozen = React.useRef(context).current

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {children}
    </LayoutRouterContext.Provider>
  )
}
