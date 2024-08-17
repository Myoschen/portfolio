'use client'

import * as React from 'react'
import NextImage, { type ImageProps as NextImageProps } from 'next/image'

import { cn } from '@/lib/utils'

interface BlurImageProps extends NextImageProps {
  imageClassName?: string
}

/** @see https://www.meje.dev/blog/nextjs-image-blur-on-load */
export function BlurImage({ className, imageClassName, ...props }: BlurImageProps) {
  const [isLoading, setIsLoading] = React.useState(true)

  return (
    <div className={cn('overflow-hidden', className)}>
      <NextImage
        className={cn(
          'transition-filter duration-3000 ease-in-out-quint',
          isLoading ? 'scale-110 blur-sm grayscale' : 'scale-100 blur-0 grayscale-0',
          imageClassName,
        )}
        onLoad={() => setIsLoading(false)}
        {...props}
      />
    </div>
  )
}
