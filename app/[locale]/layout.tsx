import './globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { Noto_Sans_TC, Work_Sans } from 'next/font/google';
import { notFound } from 'next/navigation';
import CommandPalette from '@/components/command-palette';
import Sidebar from '@/components/sidebar';
import ThemeProvider from '@/contexts/theme';

export const metadata = {
  title: 'Ryan Chen',
  description: 'Welcome, this is my portfolio.',
};

const work_sans = Work_Sans({
  subsets: ['latin'],
  variable: '--ff-work-sans',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const noto = Noto_Sans_TC({
  subsets: ['latin'],
  variable: '--ff-noto',
  weight: ['400', '500', '700'],
  display: 'swap',
});

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'zh-TW' }];
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
    <html lang={locale} className={`${work_sans.variable} ${noto.variable}`}>
      <body className="bg-mauve-1 dark:bg-mauveDark-1 dark:text-mauveDark-12 text-mauve-12">
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
