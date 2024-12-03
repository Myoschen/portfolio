'use client'

import React, { useRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { motion, type MotionValue, motionValue, useMotionValue, useSpring, useTransform } from 'motion/react'

import { cn } from '@/lib/utils'

export interface DockProps extends VariantProps<typeof dockVariants> {
  className?: string
  magnification?: number
  distance?: number
  children: React.ReactNode
}

const DEFAULT_MAGNIFICATION = 50
const DEFAULT_DISTANCE = 140

const dockVariants = cva(
  'mx-auto flex h-[60px] w-max items-center gap-2 rounded-2xl border p-2 backdrop-blur-md supports-[backdrop-filter]:bg-white/10 supports-[backdrop-filter]:dark:bg-black/10',
)

const Dock = React.forwardRef<HTMLDivElement, DockProps>(
  (
    {
      className,
      children,
      magnification = DEFAULT_MAGNIFICATION,
      distance = DEFAULT_DISTANCE,
    },
    ref,
  ) => {
    const mousex = useMotionValue(Infinity)

    const renderChildren = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return React.Children.map(children, (child: any) => {
        if (React.isValidElement<DockIconProps>(child)) {
          return React.cloneElement(child, {
            mousex,
            magnification,
            distance,
          })
        }
        return child
      })
    }

    return (
      <motion.div
        ref={ref}
        onMouseMove={e => mousex.set(e.pageX)}
        onMouseLeave={() => mousex.set(Infinity)}
        className={dockVariants({ className })}
      >
        {renderChildren()}
      </motion.div>
    )
  },
)

Dock.displayName = 'Dock'

export interface DockIconProps {
  magnification?: number
  distance?: number
  mousex?: MotionValue<number>
  className?: string
  children?: React.ReactNode
}

const DockIcon = ({
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  mousex = motionValue(Infinity),
  className,
  children,
}: DockIconProps) => {
  const ref = useRef<HTMLDivElement>(null)

  const distanceCalc = useTransform(mousex, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
    return val - bounds.x - bounds.width / 2
  })

  const widthSync = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [40, magnification, 40],
  )

  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className={cn(
        'flex aspect-square cursor-pointer items-center justify-center rounded-full hover:bg-accent',
        className,
      )}
    >
      {children}
    </motion.div>
  )
}

DockIcon.displayName = 'DockIcon'

export { Dock, DockIcon, dockVariants }
