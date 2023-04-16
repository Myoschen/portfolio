import './globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { Work_Sans, Mulish, Noto_Sans_TC } from 'next/font/google';
import { notFound } from 'next/navigation';
import Sidebar from '@/components/sidebar';

export const metadata = {
  title: 'Ryan Chen',
  description: 'Welcome, this is my portfolio.',
};

// paragraph
const mulish = Mulish({
  subsets: ['latin'],
  variable: '--ff-mulish',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

// heading
const work_sans = Work_Sans({
  subsets: ['latin'],
  variable: '--ff-work-sans',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

// for zh-TW
const noto = Noto_Sans_TC({
  subsets: ['latin'],
  variable: '--ff-noto',
  weight: ['400', '500', '700'],
  display: 'swap',
});

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'zh-tw' }];
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html
      lang={locale}
      className={`${mulish.variable}  ${work_sans.variable} ${noto.variable}`}
    >
      <body className="mb-20 mt-8 flex max-w-4xl flex-col bg-slate-100 text-neutral-900 antialiased transition-colors dark:bg-neutral-900 dark:text-slate-100 md:mx-auto md:mt-20 md:flex-row lg:mt-32 ">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Sidebar />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
