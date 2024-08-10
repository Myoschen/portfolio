'use client'

import * as React from 'react'
import NextImage, { type ImageProps as NextImageProps } from 'next/image'

import { cn } from '@/lib/utils'

interface ImageProps extends NextImageProps {}

/** @see https://www.meje.dev/blog/nextjs-image-blur-on-load */
export function Image({ className, ...props }: ImageProps) {
  const [isLoading, setIsLoading] = React.useState(false)

  return (
    <NextImage
      className={cn(
        'transition-filter duration-3000 ease-in-out-quint',
        { 'blur grayscale': isLoading },
        className,
      )}
      onLoad={() => setIsLoading(false)}
      {...props}
    />
  )
}
