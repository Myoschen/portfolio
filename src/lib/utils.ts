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

export type GradientOptions = {
  s?: number // saturation
  l?: number // lightness
}

export function gradient(text: string, options?: GradientOptions) {
  const n = hash(text)
  const posN = Math.abs(n)
  const { s = 0.5, l = 0.4 } = options ?? {}

  const baseColor = new TinyColor({ h: n % 360, s, l })
  const colors = Array.from({ length: 2 + (posN % 3) }, (_, i) => {
    const deg = (n * (i + 1)) % 120
    const mixColor = new TinyColor({ h: (n + i * 60) % 360, s, l })
    return baseColor.spin(deg).mix(mixColor, 50).toHslString()
  })

  const positions = ['top left', 'top right', 'bottom left', 'bottom right']
  const atPosition = positions[(posN * 7) % positions.length]
  return `radial-gradient(at ${atPosition}, ${colors.join(', ')})`
}
