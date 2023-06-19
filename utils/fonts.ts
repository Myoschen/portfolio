import localFont from 'next/font/local';

export const work_sans = localFont({
  src: [
    {
      path: '../public/fonts/WorkSans/WorkSans-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/WorkSans/WorkSans-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/WorkSans/WorkSans-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/WorkSans/WorkSans-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/WorkSans/WorkSans-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--ff-work-sans',
});

export const sarasa = localFont({
  src: [
    {
      path: '../public/fonts/SarasaGothic/sarasa-gothic-tc-light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/SarasaGothic/sarasa-gothic-tc-regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/SarasaGothic/sarasa-gothic-tc-semibold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/SarasaGothic/sarasa-gothic-tc-bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--ff-sarasa-gothic-tc',
});
