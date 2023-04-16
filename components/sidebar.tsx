'use client';
import cn from 'classnames';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next-intl/client';
import Image from 'next/image';
import { useState } from 'react';
import useDarkMode from '@/hooks/use-dark-mode';
import {
  BarChartIcon,
  DashboardIcon,
  HomeIcon,
  MoonIcon,
  PersonIcon,
  SunIcon,
} from '@radix-ui/react-icons';
import LangSwitch from './lang-switch';
import Link from './link';
import Switch from './switch';

function Sidebar() {
  const [hoverNav, setHoverNav] = useState<number | null>(null);
  const { theme, setTheme } = useDarkMode();
  const t = useTranslations('Sidebar');
  const pathname = usePathname();

  const navLinks = [
    {
      label: t('home'),
      href: '/',
      icon: <HomeIcon className="-mb-1" />,
    },
    {
      label: t('about'),
      href: '/about',
      icon: <PersonIcon className="-mb-1" />,
    },
    {
      label: t('skill'),
      href: '/skill',
      icon: <BarChartIcon className="-mb-1" />,
    },
    {
      label: t('project'),
      href: '/project',
      icon: <DashboardIcon className="-mb-1" />,
    },
  ];

  return (
    <aside className="px-6 md:w-[150px] md:shrink-0 lg:px-0">
      <div className="md:sticky md:top-20">
        <div className="-ml-2 mb-4 flex justify-start md:mb-8">
          <Link href="/">
            <Image
              className="object-cover"
              src="/icon.png"
              alt="icon"
              width={60}
              height={60}
            />
          </Link>
        </div>
        <div className="mb-4 md:mb-8">
          <LangSwitch />
        </div>
        <nav className="mb-4 md:mb-8">
          <div
            className="-ml-2 flex flex-wrap items-start gap-x-px md:flex-col md:gap-x-0 md:gap-y-2"
            onMouseLeave={() => setHoverNav(null)}
          >
            {navLinks.map(({ label, href, icon }, index) => (
              <Link
                className="hover:text-light-secondary dark:hover:text-dark-secondary flex transition-colors"
                href={href}
                key={href}
                onMouseEnter={() => setHoverNav(index)}
              >
                <span
                  className={cn(
                    'font-heading relative flex items-center gap-x-2 px-2 py-1 font-medium tracking-wide',
                    {
                      'text-light-secondary dark:text-dark-secondary':
                        pathname === href,
                    }
                  )}
                >
                  {icon}
                  {label}
                  {pathname === href ? (
                    <motion.div
                      className="bg-light-primary-500 dark:bg-dark-primary-700 absolute inset-0 z-[-1] rounded-t-md"
                      layoutId="background"
                    />
                  ) : null}
                  {hoverNav === index ? (
                    <motion.div
                      className="bg-light-secondary dark:bg-dark-secondary absolute bottom-0 left-0 h-[2px] w-full rounded-md"
                      layoutId="underline"
                    />
                  ) : null}
                </span>
              </Link>
            ))}
          </div>
        </nav>
        <Switch
          id="dark-mode"
          leftIcon={<SunIcon />}
          rightIcon={<MoonIcon />}
          checked={theme === 'dark' ? true : false}
          onCheckedChange={(checked) =>
            checked ? setTheme('dark') : setTheme('light')
          }
        />
      </div>
    </aside>
  );
}

export default Sidebar;
