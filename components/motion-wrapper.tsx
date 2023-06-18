'use client'

import { ReactNode, useEffect } from 'react'
import { stagger, useAnimate } from 'framer-motion'

interface Props {
  children: ReactNode
}

function MotionWrapper({ children }: Props) {
  const [scope, animate] = useAnimate<HTMLDivElement>()

  useEffect(() => {
    animate('.m-container', { opacity: [0, 1] })
    animate('.m-item', { opacity: [0, 1], x: [-10, 0] }, { type: 'spring', delay: stagger(0.2) })
  }, [scope, animate])

  return <div ref={scope}>{children}</div>
}

export default MotionWrapper
