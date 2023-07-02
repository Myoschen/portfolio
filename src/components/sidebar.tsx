'use client';

import {useMemo} from 'react';
import Image from 'next/image';
import {motion} from 'framer-motion';
import {cn} from 'mxcn';
import {useTranslations} from 'next-intl';
import {usePathname} from 'next-intl/client';

import useTheme from '@/hooks/use-theme';
import CommandMenu from '@/components/cmdk';
import LanguageMenu from '@/components/language-menu';
import Icon from '@/components/ui/icon';
import Link from '@/components/ui/link';
import Switch from '@/components/ui/switch';

export default function Sidebar() {
  const {theme, setTheme} = useTheme();
  const t = useTranslations('sidebar');
  const pathname = usePathname();

  const navLinks = useMemo(
    () => [
      {
        label: t('home'),
        href: '/',
        icon: <Icon name="home" />,
      },
      {
        label: t('about'),
        href: '/about',
        icon: <Icon name="profile" />,
      },
      {
        label: t('skill'),
        href: '/skill',
        icon: <Icon name="chart" />,
      },
      {
        label: t('project'),
        href: '/project',
        icon: <Icon name="listDetails" />,
      },
    ],
    [t]
  );

  return (
    <aside className="px-6 md:w-[150px] md:shrink-0 lg:px-0">
      <div className="md:sticky md:top-20">
        <div className="-ml-2 mb-4 flex justify-start md:mb-8">
          <Link href="/">
            <Image src="/images/icon.png" alt="icon" width={60} height={60} />
          </Link>
        </div>
        <nav className="mb-4 md:mb-8">
          <div className="-ml-2 flex flex-wrap items-start gap-x-px md:flex-col md:gap-x-0 md:gap-y-2">
            {navLinks.map(({label, href, icon}, index) => (
              <Link className="flex transition-colors" href={href} key={href}>
                <span
                  className={cn(
                    'relative flex items-center gap-x-2 px-2 py-1 font-medium tracking-wide',
                    'hover:text-violet-11 dark:hover:text-violet-dark-11' &&
                      pathname !== href
                  )}
                >
                  {icon}
                  {label}
                  {pathname === href ? (
                    <motion.div
                      className="absolute inset-0 z-[-1] rounded-md bg-mauve-4 dark:bg-mauve-dark-4"
                      layoutId="active-pill"
                    />
                  ) : null}
                </span>
              </Link>
            ))}
          </div>
        </nav>
        <div className="inline-flex flex-wrap items-center gap-x-4 gap-y-2 md:flex-col md:items-start md:gap-y-4">
          <CommandMenu />
          <LanguageMenu />
          <Switch
            id="dark-mode"
            leftIcon={<Icon name="sun" />}
            rightIcon={<Icon name="moon" />}
            checked={theme === 'dark'}
            onCheckedChange={(checked) =>
              checked ? setTheme('dark') : setTheme('light')
            }
          />
        </div>
      </div>
    </aside>
  );
}
