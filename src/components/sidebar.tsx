'use client';

import {useMemo} from 'react';
import Image from 'next/image';
import {motion} from 'framer-motion';
import {
  LucideBarChart2,
  LucideHome,
  LucideLayoutGrid,
  LucideMoon,
  LucideSun,
  LucideUser,
} from 'lucide-react';
import {cn} from 'mxcn';
import {useTranslations} from 'next-intl';
import {usePathname} from 'next-intl/client';

import useTheme from '@/hooks/use-theme';
import {CommandPaletteTrigger} from '@/components/command-palette';
import LanguageMenu from '@/components/language-menu';
import Link from '@/components/link';
import Switch from '@/components/switch';

function Sidebar() {
  const {theme, setTheme} = useTheme();
  const t = useTranslations('sidebar');
  const pathname = usePathname();

  const navLinks = useMemo(
    () => [
      {
        label: t('home'),
        href: '/',
        icon: <LucideHome size={16} />,
      },
      {
        label: t('about'),
        href: '/about',
        icon: <LucideUser size={16} />,
      },
      {
        label: t('skill'),
        href: '/skill',
        icon: <LucideBarChart2 size={16} />,
      },
      {
        label: t('project'),
        href: '/project',
        icon: <LucideLayoutGrid size={16} />,
      },
    ],
    [t]
  );

  return (
    <aside className="px-6 md:w-[150px] md:shrink-0 lg:px-0">
      <div className="md:sticky md:top-20">
        <div className="-ml-2 mb-4 flex justify-start md:mb-8">
          <Link href="/">
            <Image
              className="object-cover"
              src="/images/icon.png"
              alt="icon"
              width={60}
              height={60}
            />
          </Link>
        </div>
        <nav className="mb-4 md:mb-8">
          <div className="-ml-2 flex flex-wrap items-start gap-x-px md:flex-col md:gap-x-0 md:gap-y-2">
            {navLinks.map(({label, href, icon}, index) => (
              <Link className="flex transition-colors" href={href} key={href}>
                <span
                  className={cn(
                    'font-work-sans relative flex items-center gap-x-2 px-2 py-1 font-medium tracking-wide',
                    {
                      'hover:text-violet-11 dark:hover:text-violetDark-11':
                        pathname !== href,
                    }
                  )}
                >
                  {icon}
                  {label}
                  {pathname === href ? (
                    <motion.div
                      className="absolute inset-0 z-[-1] rounded-md bg-mauve-4 dark:bg-mauveDark-4"
                      layoutId="active-pill"
                    />
                  ) : null}
                </span>
              </Link>
            ))}
          </div>
        </nav>
        <div className="inline-flex items-center gap-x-4 md:flex-col md:items-start md:gap-y-4">
          <CommandPaletteTrigger />
          <LanguageMenu />
          <Switch
            id="dark-mode"
            leftIcon={<LucideSun size={16} />}
            rightIcon={<LucideMoon size={16} />}
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

export default Sidebar;
