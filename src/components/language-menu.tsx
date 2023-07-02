'use client';

import {useMemo, useState} from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import {AnimatePresence, motion} from 'framer-motion';
import {useLocale} from 'next-intl';
import {usePathname} from 'next-intl/client';
import Link from 'next-intl/link';

import Icon from '@/components/ui/icon';

function LanguageMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const locale = useLocale();
  const nextLocale = useMemo(
    () => (locale === 'en' ? 'zh-TW' : 'en'),
    [locale]
  );

  return (
    <DropdownMenuPrimitive.Root open={open} onOpenChange={setOpen}>
      <DropdownMenuPrimitive.Trigger className="inline-flex items-center gap-x-2 font-medium tracking-wide outline-none">
        <Icon name="language" />
        {nextLocale === 'en' ? '語言' : 'Language'}
      </DropdownMenuPrimitive.Trigger>
      <AnimatePresence>
        {open && (
          <DropdownMenuPrimitive.Portal forceMount>
            <DropdownMenuPrimitive.Content
              className="rounded bg-mauve-alpha-6 p-1 backdrop-blur dark:bg-mauve-dark-alpha-6"
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
                <DropdownMenuPrimitive.Item asChild>
                  <Link
                    className="relative flex cursor-default select-none items-center justify-center rounded px-2 py-1 text-sm font-medium leading-none tracking-wide outline-none data-[highlighted]:bg-violet-8 dark:data-[highlighted]:bg-violet-dark-8"
                    href={pathname}
                    locale="zh-TW"
                    replace={true}
                  >
                    繁體中文
                  </Link>
                </DropdownMenuPrimitive.Item>
                <DropdownMenuPrimitive.Item asChild>
                  <Link
                    className="relative flex cursor-default select-none items-center justify-center rounded px-2 py-1 text-sm font-medium leading-none tracking-wide outline-none data-[highlighted]:bg-violet-8 dark:data-[highlighted]:bg-violet-dark-8"
                    href={pathname}
                    locale="en"
                    replace={true}
                  >
                    English
                  </Link>
                </DropdownMenuPrimitive.Item>
                <DropdownMenuPrimitive.Arrow className="fill-mauve-alpha-6 dark:fill-mauve-dark-alpha-6" />
              </motion.div>
            </DropdownMenuPrimitive.Content>
          </DropdownMenuPrimitive.Portal>
        )}
      </AnimatePresence>
    </DropdownMenuPrimitive.Root>
  );
}

export default LanguageMenu;
