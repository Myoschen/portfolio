import React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

interface Props {
  children: React.ReactNode;
  text: string;
}

function Tooltip({ children, text }: Props) {
  return (
    <TooltipPrimitive.Provider delayDuration={0.4}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            className="font-paragraph data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade select-none rounded-[4px] bg-neutral-800 px-4 py-2 text-sm font-medium leading-none text-white will-change-[transform,opacity] dark:bg-slate-200 dark:text-black"
            side="bottom"
            sideOffset={5}
          >
            {text}
            <TooltipPrimitive.Arrow className="fill-neutral-800 dark:fill-slate-200" />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}

export default Tooltip;
