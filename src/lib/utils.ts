import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function arrayContains<T>(arr: T[], elements: T[]) {
  return elements.some(el => arr.includes(el))
}
