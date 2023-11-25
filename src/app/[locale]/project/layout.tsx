import {type ReactNode} from 'react';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';


type LayoutProps = {
  children: ReactNode;
  params: {locale: string};
};

export async function generateMetadata({params: {locale}}: LayoutProps) {
  const t = await getTranslations({locale});
  return {
    title: t('title.project'),
  };
}

export default function Layout({children, params: {locale}}: LayoutProps) {
  unstable_setRequestLocale(locale)
  return children;
}
