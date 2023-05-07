'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { LucideLanguages } from 'lucide-react';
import { Link, useLocale } from 'next-intl';
import { useState } from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

function LanguageMenu() {
  const [open, setOpen] = useState(false);
  const locale = useLocale();
  const nextLocale = locale === 'en' ? 'zh-TW' : 'en';

  return (
    <DropdownMenuPrimitive.Root open={open} onOpenChange={setOpen}>
      <DropdownMenuPrimitive.Trigger className="font-work-sans inline-flex items-center gap-x-2 font-medium tracking-wide outline-none">
        <LucideLanguages size={16} />
        {nextLocale === 'en' ? '語言' : 'Language'}
      </DropdownMenuPrimitive.Trigger>
      <AnimatePresence>
        {open && (
          <DropdownMenuPrimitive.Portal forceMount>
            <DropdownMenuPrimitive.Content
              className="bg-mauveA-mauveA4 dark:bg-mauveDarkA-mauveA4 min-w-[100px] rounded-md p-1 backdrop-blur"
              sideOffset={5}
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
                    transition: { ease: 'easeIn', duration: 0.1 },
                  },
                  open: {
                    opacity: 1,
                    transition: { ease: 'easeOut', duration: 0.2 },
                  },
                }}
              >
                <DropdownMenuPrimitive.Item asChild>
                  <Link
                    className="font-work-sans data-[highlighted]:bg-violet-violet8 dark:data-[highlighted]:bg-violetDark-violet8 relative flex h-6 cursor-default select-none items-center justify-center rounded-[3px] text-sm font-medium leading-none tracking-wide outline-none"
                    href="/"
                    locale="zh-TW"
                  >
                    繁體中文
                  </Link>
                </DropdownMenuPrimitive.Item>
                <DropdownMenuPrimitive.Item asChild>
                  <Link
                    className="font-work-sans data-[highlighted]:bg-violet-violet8 dark:data-[highlighted]:bg-violetDark-violet8 relative flex h-6 cursor-default select-none items-center justify-center rounded-[3px] text-sm font-medium leading-none tracking-wide outline-none"
                    href="/"
                    locale="en"
                  >
                    English
                  </Link>
                </DropdownMenuPrimitive.Item>
                <DropdownMenuPrimitive.Arrow className="fill-mauveA-mauveA4 dark:fill-mauveDarkA-mauveA4" />
              </motion.div>
            </DropdownMenuPrimitive.Content>
          </DropdownMenuPrimitive.Portal>
        )}
      </AnimatePresence>
    </DropdownMenuPrimitive.Root>
  );
}

export default LanguageMenu;
