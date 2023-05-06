import './globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { Mulish, Noto_Sans_TC, Work_Sans } from 'next/font/google';
import { notFound } from 'next/navigation';
import Sidebar from '@/components/sidebar';
import ThemeProvider from '@/lib/contexts/theme';
import CommandPalette from '@/components/command-palette';

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
      className={`${mulish.variable} ${work_sans.variable} ${noto.variable}`}
    >
      <body className="bg-light-primary-100 dark:bg-dark-primary-500 dark:text-dark-primary-100 text-light-primary-900">
        <div className="mb-20 mt-8 flex max-w-4xl flex-col antialiased transition-colors md:mx-auto md:mt-20 md:flex-row lg:mt-32">
          <NextIntlClientProvider locale={locale} messages={messages}>
            <ThemeProvider>
              <CommandPalette>
                <Sidebar />
                {children}
              </CommandPalette>
            </ThemeProvider>
          </NextIntlClientProvider>
        </div>
      </body>
    </html>
  );
}