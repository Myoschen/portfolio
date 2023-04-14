import { GlobeIcon } from '@radix-ui/react-icons';
import { Link, useLocale } from 'next-intl';

function LangSwitch() {
  const locale = useLocale();
  const nextLocale = locale === 'en' ? 'zh-TW' : 'en';

  return (
    <Link href="/" locale={nextLocale} tw="true">
      <div className="flex items-center gap-x-2">
        <GlobeIcon />
        <span className="font-ibm font-medium tracking-wide">{nextLocale}</span>
      </div>
    </Link>
  );
}

export default LangSwitch;
