import './globals.css';
import { IBM_Plex_Serif, Inter, Noto_Sans_TC } from 'next/font/google';
import Sidebar from '@/components/sidebar';

export const metadata = {
  title: 'Ryan Chen',
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--ff-inter',
  weight: ['400', '600', '500', '700'],
});

const noto = Noto_Sans_TC({
  subsets: ['latin'],
  variable: '--ff-noto',
  weight: ['400', '500', '700'],
});

const ibm = IBM_Plex_Serif({
  subsets: ['latin'],
  variable: '--ff-ibm',
  weight: ['400', '600', '500', '700'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${noto.variable} ${ibm.variable}`}
    >
      <body className="mb-20 mt-8 flex max-w-4xl flex-col bg-slate-100 text-neutral-900 antialiased transition-colors dark:bg-neutral-900 dark:text-slate-100 md:mx-auto md:mt-20 md:flex-row lg:mt-32 ">
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
