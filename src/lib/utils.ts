import { TinyColor } from '@ctrl/tinycolor'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function arrayContains<T>(arr: T[], elements: T[]) {
  return elements.some(el => arr.includes(el))
}

export function hash(input: string) {
  if (input.length === 0) return 0
  let hash = 0
  for (let i = 0; i < input.length; i++) {
    hash = (hash << 5) - hash + input.charCodeAt(i)
    hash |= 0
  }
  return hash
}

export type HslOptions = {
  saturation: number
  lightness: number
}

export function gradient(text: string, options?: HslOptions) {
  const n = hash(text)
  const { saturation = 0.5, lightness = 0.5 } = options ?? {}
  const color = new TinyColor({ h: n % 360, s: saturation, l: lightness })
  const triad = color.triad()
  const c1 = color.toHslString()
  const c2 = color.mix(triad[1]!, 50).toHslString()
  return `radial-gradient(at bottom left, ${c1}, ${c2})`
}
