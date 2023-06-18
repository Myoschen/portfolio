
import { Noto_Sans_TC, Work_Sans } from 'next/font/google'

export const work_sans = Work_Sans({
  subsets: ['latin'],
  variable: '--ff-work-sans',
  weight: ['400', '500', '600', '700'],
  display: 'swap'
})

export const noto = Noto_Sans_TC({
  subsets: ['latin'],
  variable: '--ff-noto',
  weight: ['400', '500', '700'],
  display: 'swap'
})