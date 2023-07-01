import {forwardRef, type ComponentProps} from 'react';
import NextLink from 'next/link';
import {useLocale} from 'next-intl';

type Props = ComponentProps<typeof NextLink>;

function Link({href, ...rest}: Props, ref: Props['ref']) {
  const locale = useLocale();

  // Turn this off, to avoid updating the locale cookie for prefetch requests
  // const prefetch = false;

  function getLocalizedHref(originalHref: string) {
    return originalHref.replace(/^\//, '/' + locale + '/');
  }

  const localizedHref =
    typeof href === 'string'
      ? getLocalizedHref(href)
      : href.pathname != null
      ? {...href, pathname: getLocalizedHref(href.pathname)}
      : href;

  return <NextLink ref={ref} href={localizedHref} {...rest} />;
}

export default forwardRef(Link);
