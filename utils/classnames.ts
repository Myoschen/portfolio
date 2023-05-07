import { ClassArray, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...classes: ClassArray) {
  return twMerge(clsx(classes));
}

export { cn };
