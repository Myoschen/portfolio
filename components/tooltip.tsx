'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

interface Props {
  children: React.ReactNode;
  text: string;
}

function Tooltip({ children, text }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <TooltipPrimitive.Provider delayDuration={0.4}>
      <TooltipPrimitive.Root open={open} onOpenChange={setOpen}>
        <TooltipPrimitive.Trigger asChild>
          <motion.div
            onHoverStart={() => setOpen(true)}
            onHoverEnd={() => setOpen(false)}
          >
            {children}
          </motion.div>
        </TooltipPrimitive.Trigger>
        <AnimatePresence>
          {open && (
            <TooltipPrimitive.Portal forceMount>
              <TooltipPrimitive.Content
                className="font-paragraph text-light-primary-100 bg-dark-primary-500 dark:bg-light-primary-100 dark:text-dark-primary-500 select-none rounded-[4px] px-4 py-2 text-sm font-medium leading-none will-change-[transform,opacity]"
                side="bottom"
                sideOffset={5}
                asChild
              >
                <motion.div
                  initial="close"
                  animate="open"
                  exit="close"
                  variants={{
                    close: {
                      opacity: 0,
                      y: -2,
                      transition: { ease: 'easeIn', duration: 0.1 },
                    },
                    open: {
                      opacity: 1,
                      y: 0,
                      transition: { ease: 'easeOut', duration: 0.2 },
                    },
                  }}
                >
                  {text}
                  <TooltipPrimitive.Arrow className="fill-dark-primary-500 dark:fill-light-primary-100" />
                </motion.div>
              </TooltipPrimitive.Content>
            </TooltipPrimitive.Portal>
          )}
        </AnimatePresence>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}

export default Tooltip;
