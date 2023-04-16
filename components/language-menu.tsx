import { GlobeIcon } from '@radix-ui/react-icons';
import { Link, useLocale } from 'next-intl';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

function LanguageMenu() {
  const locale = useLocale();
  const nextLocale = locale === 'en' ? 'zh-TW' : 'en';

  return (
    <DropdownMenuPrimitive.Root>
      <DropdownMenuPrimitive.Trigger className="font-heading inline-flex items-center gap-x-2 font-medium tracking-wide outline-none">
        <GlobeIcon />
        {nextLocale === 'en' ? '語言' : 'Language'}
      </DropdownMenuPrimitive.Trigger>
      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
          className="data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=data-[highlighted]:bg-light-primary-500 bg-dark-primary-500 dark:bg-light-primary-100 min-w-[100px] rounded-md p-1 shadow-lg will-change-[opacity,transform]"
          sideOffset={5}
          align="start"
        >
          <DropdownMenuPrimitive.Item asChild>
            <Link
              className="font-heading text-light-primary-100 dark:text-dark-primary-500 data-[highlighted]:bg-light-secondary dark:data-[highlighted]:bg-dark-secondary relative flex h-6 cursor-default select-none items-center justify-center rounded-[3px] text-sm font-medium leading-none tracking-wide outline-none"
              href="/"
              locale="zh-TW"
              tw=""
            >
              繁體中文
            </Link>
          </DropdownMenuPrimitive.Item>
          <DropdownMenuPrimitive.Item asChild>
            <Link
              className="font-heading text-light-primary-100 dark:text-dark-primary-500 data-[highlighted]:bg-light-secondary dark:data-[highlighted]:bg-dark-secondary relative flex h-6 cursor-default select-none items-center justify-center rounded-[3px] text-sm font-medium leading-none tracking-wide outline-none"
              href="/"
              locale="en"
              tw=""
            >
              English
            </Link>
          </DropdownMenuPrimitive.Item>
          <DropdownMenuPrimitive.Arrow className="fill-dark-primary-500 dark:fill-light-primary-100 " />
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuPrimitive.Root>
  );
}

export default LanguageMenu;
