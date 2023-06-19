import './globals.css';

import {type ReactNode} from 'react';
import {notFound} from 'next/navigation';
import {NextIntlClientProvider} from 'next-intl';

import {noto, work_sans} from '@/utils/fonts';
import ThemeProvider from '@/store/theme';
import CommandPalette from '@/components/command-palette';
import Sidebar from '@/components/sidebar';

export const metadata = {
  title: 'Ryan Chen',
  description: 'Welcome, this is my portfolio.',
};

export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'zh-tw'}];
}

export default async function Layout({
  children,
  params: {locale},
}: {
  children: ReactNode;
  params: {locale: string};
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
