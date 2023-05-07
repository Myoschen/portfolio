'use client';
import { motion } from 'framer-motion';
import {
  LucideBarChart2,
  LucideHome,
  LucideLayoutGrid,
  LucideMoon,
  LucideSun,
  LucideUser,
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next-intl/client';
import Image from 'next/image';
import { useState } from 'react';
import useTheme from '@/hooks/use-theme';
import { cn } from '@/utils/classnames';
import { CommandPaletteTrigger } from './command-palette';
import LanguageMenu from './language-menu';
import Link from './link';
import Switch from './switch';

function Sidebar() {
  const [hoverNav, setHoverNav] = useState<number | null>(null);
  const { theme, setTheme } = useTheme();
  const t = useTranslations('sidebar');
  const pathname = usePathname();

  const navLinks = [
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
                    'font-work-sans relative flex items-center gap-x-2 px-2 py-1 font-medium tracking-wide',
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
