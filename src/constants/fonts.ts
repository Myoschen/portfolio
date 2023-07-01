import {Work_Sans} from 'next/font/google';
import localFont from 'next/font/local';

export const work_sans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--ff-work-sans',
});

export const sarasa_gothic = localFont({
  src: [
    {
      path: '../../public/fonts/SarasaGothic/sarasa-gothic-tc-light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SarasaGothic/sarasa-gothic-tc-regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SarasaGothic/sarasa-gothic-tc-semibold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SarasaGothic/sarasa-gothic-tc-bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--ff-sarasa-gothic-tc',
});
