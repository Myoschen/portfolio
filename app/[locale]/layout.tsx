import './globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { IBM_Plex_Serif, Inter, Noto_Sans_TC } from 'next/font/google';
import { notFound } from 'next/navigation';
import Sidebar from '@/components/sidebar';

export const metadata = {
  title: 'Ryan Chen',
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--inter',
  weight: ['400', '600', '500', '700'],
});

const noto = Noto_Sans_TC({
  subsets: ['latin'],
  variable: '--noto',
  weight: ['400', '500', '700'],
});

const ibm = IBM_Plex_Serif({
  subsets: ['latin'],
  variable: '--ibm',
  weight: ['400', '600', '500', '700'],
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
      className={`${inter.variable} ${noto.variable} ${ibm.variable}`}
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
