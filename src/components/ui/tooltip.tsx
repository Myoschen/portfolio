'use client';

import {useState, type ReactNode} from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import {AnimatePresence, motion} from 'framer-motion';

interface Props {
  children: ReactNode;
  text: string;
}

function Tooltip({children, text}: Props) {
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
                className="select-none rounded bg-mauve-alpha-6 px-4 py-2 text-sm font-medium leading-none backdrop-blur dark:bg-mauve-dark-alpha-6"
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
                      transition: {ease: 'easeIn', duration: 0.1},
                    },
                    open: {
                      opacity: 1,
                      y: 0,
                      transition: {ease: 'easeOut', duration: 0.2},
                    },
                  }}
                >
                  {text}
                  <TooltipPrimitive.Arrow className="fill-mauve-alpha-6 dark:fill-mauve-dark-alpha-6" />
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
