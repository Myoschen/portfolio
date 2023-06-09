'use client';

import {useMemo, useState} from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import {AnimatePresence, motion} from 'framer-motion';
import {useTranslations} from 'next-intl';
import {usePathname} from 'next-intl/client';
import Link from 'next-intl/link';

import Icon from '@/components/ui/icon';

export default function LanguageMenu() {
  const [open, setOpen] = useState(false);
  const t = useTranslations('menu');
  const languages = useMemo(
    () => [
      {
        title: t('en'),
        locale: 'en',
      },
      {
        title: t('zh-tw'),
        locale: 'zh-TW',
      },
    ],
    [t]
  );

  return (
    <DropdownMenuPrimitive.Root open={open} onOpenChange={setOpen}>
      <DropdownMenuPrimitive.Trigger className="inline-flex items-center gap-x-2 font-medium tracking-wide outline-none">
        <Icon name="language" />
        {t('language')}
      </DropdownMenuPrimitive.Trigger>
      <AnimatePresence>
        {open && (
          <DropdownMenuPrimitive.Portal forceMount>
            <DropdownMenuPrimitive.Content
              className="rounded bg-mauve-alpha-3 p-1 backdrop-blur dark:bg-mauve-dark-alpha-3"
              align="start"
              asChild
            >
              <motion.div
                initial="close"
                animate="open"
                exit="close"
                variants={{
                  close: {
                    opacity: 0,
                    transition: {ease: 'easeIn', duration: 0.1},
                  },
                  open: {
                    opacity: 1,
                    transition: {ease: 'easeOut', duration: 0.2},
                  },
                }}
              >
                {languages.map((lang) => (
                  <MenuItem key={lang.locale} {...lang} />
                ))}
                <DropdownMenuPrimitive.Arrow className="fill-mauve-alpha-3 dark:fill-mauve-dark-alpha-3" />
              </motion.div>
            </DropdownMenuPrimitive.Content>
          </DropdownMenuPrimitive.Portal>
        )}
      </AnimatePresence>
    </DropdownMenuPrimitive.Root>
  );
}

interface MenuItemProps {
  title: string;
  locale: string;
}

function MenuItem({title, locale}: MenuItemProps) {
  const pathname = usePathname();

  return (
    <DropdownMenuPrimitive.Item asChild>
      <Link
        className="relative flex cursor-default select-none items-center justify-center rounded px-3 py-1 text-sm font-medium leading-none tracking-wide outline-none data-[highlighted]:bg-violet-10 data-[highlighted]:text-mauve-dark-12 dark:data-[highlighted]:bg-violet-dark-10 dark:data-[highlighted]:text-mauve-12"
        href={pathname}
        locale={locale}
        replace={true}
      >
        {title}
      </Link>
    </DropdownMenuPrimitive.Item>
  );
}
