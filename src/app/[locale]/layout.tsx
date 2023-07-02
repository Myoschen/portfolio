import {type ReactNode} from 'react';
import {createTranslator, NextIntlClientProvider} from 'next-intl';

import {sarasa_gothic, work_sans} from '@/constants/fonts';
import {getMessages} from '@/helpers/i18n';
import ThemeProvider from '@/store/theme';
import Sidebar from '@/components/sidebar';

type Props = {
  children: ReactNode;
  params: {locale: string};
};

export async function generateStaticParams() {
  return ['en', 'zh-TW'].map((locale) => ({locale}));
}

export async function generateMetadata({params: {locale}}: Props) {
  const messages = await getMessages(locale);
  const t = createTranslator({locale, messages});
  return {
    title: t('title.home'),
  };
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
    <html
      lang={locale}
      className={`${work_sans.variable} ${sarasa_gothic.variable}`}
    >
      <body className="bg-mauve-1 font-main text-mauve-12 dark:bg-mauve-dark-1 dark:text-mauve-dark-12">
        <div className="flex max-w-4xl flex-col pb-20 pt-8 antialiased transition-colors md:mx-auto md:flex-row md:pt-20 lg:pt-32">
          <NextIntlClientProvider locale={locale} messages={messages}>
            <ThemeProvider>
              <Sidebar />
              {children}
            </ThemeProvider>
          </NextIntlClientProvider>
        </div>
      </body>
    </html>
  );
}
