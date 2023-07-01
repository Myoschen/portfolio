import {type ReactNode} from 'react';
import {notFound} from 'next/navigation';
import {NextIntlClientProvider} from 'next-intl';

import {sarasa, work_sans} from '@/constants/fonts';
import ThemeProvider from '@/store/theme';
import CommandPalette from '@/components/command-palette';
import Sidebar from '@/components/sidebar';

async function getMessages(locale: string) {
  try {
    return (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export const metadata = {
  title: 'Ryan Chen',
  description: 'Welcome, this is my portfolio.',
};

export async function generateStaticParams() {
  return ['en', 'zh-TW'].map((locale) => ({locale}));
}

export default async function Layout({
  children,
  params: {locale},
}: {
  children: ReactNode;
  params: {locale: string};
}) {
  const messages = await getMessages(locale);

  return (
    <html lang={locale} className={`${work_sans.variable} ${sarasa.variable}`}>
      <body className="bg-mauve-1 text-mauve-12 dark:bg-mauveDark-1 dark:text-mauveDark-12">
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
