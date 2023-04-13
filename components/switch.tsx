import React from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';

interface Props {
  id: string;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}

function Switch({ id, leftIcon, rightIcon, checked, onCheckedChange }: Props) {
  return (
    <div
      className="flex items-center gap-x-2"
      style={{ display: 'flex', alignItems: 'center' }}
    >
      {leftIcon ? (
        <label className="leading-none" htmlFor={id}>
          {leftIcon}
        </label>
      ) : null}
      <SwitchPrimitive.Root
        id={id}
        checked={checked}
        onCheckedChange={onCheckedChange}
        className="relative h-[25px] w-[50px] rounded-full bg-slate-300 outline-none focus:outline focus:outline-slate-300 data-[state=checked]:bg-slate-300 dark:bg-neutral-700 dark:focus:outline-neutral-700 dark:data-[state=checked]:bg-neutral-700"
      >
        <SwitchPrimitive.Thumb className="block h-5 w-5 translate-x-0.5 rounded-full bg-white shadow transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[27px]" />
      </SwitchPrimitive.Root>
      {rightIcon ? (
        <label className="leading-none" htmlFor={id}>
          {rightIcon}
        </label>
      ) : null}
    </div>
  );
}

export default Switch;
