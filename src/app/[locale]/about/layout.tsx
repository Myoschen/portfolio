import {type ReactNode} from 'react';
import {createTranslator} from 'next-intl';

import {getMessages} from '@/helpers/i18n';

type Props = {
  children: ReactNode;
  params: {locale: string};
};

export async function generateMetadata({params: {locale}}: Props) {
  const messages = await getMessages(locale);
  const t = createTranslator({locale, messages});
  return {
    title: t('title.about'),
  };
}

export default function Layout({children}: {children: ReactNode}) {
  return children;
}
