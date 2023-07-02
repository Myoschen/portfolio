'use client';

import {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from 'react';
import {useRouter} from 'next/navigation';
// https://github.com/pacocoursey/cmdk/issues/129
import {Command} from 'carloslfu-cmdk-internal';
import {cn} from 'mxcn';
import {useTranslations} from 'next-intl';
import {usePathname} from 'next-intl/client';

import type {ActionList} from '@/types/common';
import useTheme from '@/hooks/use-theme';
import Icon from '@/components/ui/icon';

export default function CommandMenu() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('command');
  const {setTheme} = useTheme();

  const pageActions: ActionList = useMemo(() => {
    return [
      {
        id: 'home-page',
        title: t('action.home'),
        icon: <Icon name="home" />,
        perform: () => router.push('/'),
      },
      {
        id: 'about-page',
        title: t('action.about'),
        icon: <Icon name="profile" />,
        perform: () => router.push('/about'),
      },
      {
        id: 'skill-page',
        title: t('action.skill'),
        icon: <Icon name="chart" />,
        perform: () => router.push('/skill'),
      },
      {
        id: 'project-page',
        title: t('action.project'),
        icon: <Icon name="listDetails" />,
        perform: () => router.push('/project'),
      },
    ];
  }, [router, t]);

  const themeActions: ActionList = useMemo(
    () => [
      {
        id: 'light-theme',
        title: t('action.light-theme'),
        perform: () => setTheme('light'),
        icon: <Icon name="sun" />,
      },
      {
        id: 'dark-theme',
        title: t('action.dark-theme'),
        perform: () => setTheme('dark'),
        icon: <Icon name="moon" />,
      },
    ],
    [setTheme, t]
  );

  const languageActions: ActionList = useMemo(
    () => [
      {
        id: 'en',
        title: t('action.en'),
        icon: <Icon name="language" />,
        perform: () => router.replace(`/en${pathname}`),
      },
      {
        id: 'zh-tw',
        title: t('action.zh-tw'),
        icon: <Icon name="language" />,
        perform: () => router.replace(`/zh-TW${pathname}`),
      },
    ],
    [router, pathname, t]
  );

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const onSelect = useCallback(
    (cb: () => void) => () => {
      setOpen(false);
      cb();
    },
    []
  );

  return (
    <>
      <button
        className="inline-flex items-center gap-x-2"
        onClick={() => setOpen(true)}
      >
        <Icon name="command" />
        <span className="font-medium tracking-wide">{t('trigger')}</span>
      </button>
      <Command.Dialog
        contentClassName="absolute top-40 left-1/2 -translate-x-1/2 overflow-hidden p-0 flex w-full flex-col max-w-xs sm:max-w-md md:max-w-lg rounded-md bg-mauve-4 dark:bg-mauve-dark-4 text-mauve-12 dark:text-mauve-dark-12"
        overlayClassName="absolute inset-0 bg-black/30 backdrop:blur"
        open={open}
        onOpenChange={setOpen}
      >
        <CommandInput placeholder={t('placeholder')} />
        <CommandList>
          <CommandEmpty>{t('empty')}</CommandEmpty>
          <CommandGroup heading={t('group.page')}>
            {pageActions.map(({id, icon, title, perform}) => (
              <CommandItem key={id} value={title} onSelect={onSelect(perform)}>
                {icon}
                {title}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading={t('group.toggle-theme')}>
            {themeActions.map(({id, icon, title, perform}, index) => (
              <CommandItem key={id} value={title} onSelect={onSelect(perform)}>
                {icon}
                {title}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading={t('group.toggle-language')}>
            {languageActions.map(({id, icon, title, perform}, index) => (
              <CommandItem key={id} value={title} onSelect={onSelect(perform)}>
                {icon}
                {title}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command.Dialog>
    </>
  );
}

const CommandInput = forwardRef<
  ElementRef<typeof Command.Input>,
  ComponentPropsWithoutRef<typeof Command.Input>
>(({className, ...props}, ref) => (
  <div className="flex items-center gap-x-2 border-b border-mauve-alpha-6 px-3 dark:border-mauve-dark-alpha-6">
    <Icon name="input" />
    <Command.Input
      className={cn(
        'flex h-10 w-full bg-transparent py-3 text-sm outline-none',
        className
      )}
      {...props}
    />
  </div>
));

CommandInput.displayName = Command.Input.displayName;

const CommandList = forwardRef<
  ElementRef<typeof Command.List>,
  ComponentPropsWithoutRef<typeof Command.List>
>(({className, ...props}, ref) => (
  <Command.List
    ref={ref}
    className={cn('max-h-[300px] overflow-y-auto overflow-x-hidden', className)}
    {...props}
  />
));

CommandList.displayName = Command.List.displayName;

const CommandEmpty = forwardRef<
  ElementRef<typeof Command.Empty>,
  ComponentPropsWithoutRef<typeof Command.Empty>
>((props, ref) => (
  <Command.Empty ref={ref} className="py-6 text-center text-sm" {...props} />
));

CommandEmpty.displayName = Command.Empty.displayName;

const CommandGroup = forwardRef<
  ElementRef<typeof Command.Group>,
  ComponentPropsWithoutRef<typeof Command.Group>
>(({className, ...props}, ref) => (
  <Command.Group
    ref={ref}
    className={cn(
      'overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium',
      className
    )}
    {...props}
  />
));

CommandGroup.displayName = Command.Group.displayName;

const CommandItem = forwardRef<
  ElementRef<typeof Command.Item>,
  ComponentPropsWithoutRef<typeof Command.Item>
>(({className, ...props}, ref) => (
  <Command.Item
    ref={ref}
    className={cn(
      'flex cursor-default select-none items-center gap-x-2 rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-mauve-8 dark:aria-selected:bg-mauve-dark-8',
      className
    )}
    {...props}
  />
));

CommandItem.displayName = Command.Item.displayName;
