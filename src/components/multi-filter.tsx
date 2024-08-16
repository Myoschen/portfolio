/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import * as React from 'react'
import { CheckSquare, PlusCircle, Square } from 'iconoir-react'
import { type ParserBuilder, useQueryStates } from 'nuqs'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Separator } from '@/components/ui/separator'
import { useI18n } from '@/lib/locales/client'

interface MultiFilterProps<
  TKey extends keyof TParsers,
  TParsers extends { [K in keyof TParsers]: K extends TKey ? ParserBuilder<string[]> : ParserBuilder<any> },
> {
  title: string
  placeholder?: string
  paramKey: TKey
  parsers: TParsers
  options: string[]
}

export function MultiFilter<
  TKey extends keyof TParsers,
  TParsers extends { [K in keyof TParsers]: K extends TKey ? ParserBuilder<string[]> : ParserBuilder<any> },
>({
  title, placeholder, paramKey, parsers, options,
}: MultiFilterProps<TKey, TParsers>) {
  const t = useI18n()
  const [open, setOpen] = React.useState(false)
  const [params, setParams] = useQueryStates(parsers)
  const selected = params[paramKey] as string[] | null

  const handleSelect = (option: string) => {
    const optionSet = new Set(selected ?? [])
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    optionSet.has(option) ? optionSet.delete(option) : optionSet.add(option)
    const newValue = optionSet.size !== 0 ? Array.from(optionSet) : null
    setParams({ [paramKey]: newValue } as any)
  }

  const handleClearAll = () => {
    setParams({ [paramKey]: null } as any)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          className="gap-x-1 border-dashed"
          variant="outline"
          size="sm"
        >
          <PlusCircle className="size-3" />
          <span>{title}</span>
          {selected && selected.length > 0 && (
            <>
              <Separator className="h-1/2" orientation="vertical" />
              {selected.map((item, index) => (
                <Badge
                  key={index}
                  className="rounded px-1 py-0 text-[10px] font-normal"
                  variant="secondary"
                >
                  {item}
                </Badge>
              ))}
            </>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-max p-0" align="start">
        <Command>
          <CommandInput className="text-xs" placeholder={placeholder ?? t('search')} />
          <CommandList>
            <CommandEmpty>{t('command.empty')}</CommandEmpty>
            <CommandGroup>
              {options.map((option, index) => (
                <CommandItem
                  key={index}
                  className="items-center gap-x-2 text-xs"
                  onSelect={() => handleSelect(option)}
                >
                  {selected?.includes(option) ? <CheckSquare className="size-3" /> : <Square className="size-3" />}
                  <span>{option}</span>
                </CommandItem>
              ))}
            </CommandGroup>
            {(selected?.length ?? 0) > 0 && (
              <>
                <Separator />
                <CommandGroup>
                  <CommandItem
                    className="justify-center text-xs"
                    onSelect={handleClearAll}
                  >
                    {t('clearAll')}
                  </CommandItem>
                </CommandGroup>
              </>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
