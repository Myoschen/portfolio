'use client';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { ArrowRightIcon } from '@radix-ui/react-icons';

interface Props {
  next: string;
}

const arrow = {
  hover: {
    x: [0, 4, 0],
    transition: {
      duration: 0.75,
      times: [0, 0.6, 1],
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
} satisfies Variants;

function NextLink({ next }: Props) {
  return (
    <Link href={`/${next}`}>
      <motion.div className="flex items-center gap-x-1" whileHover="hover">
        <span className="font-ibm font-medium capitalize tracking-wider">
          {next}
        </span>
        <motion.div variants={arrow}>
          <ArrowRightIcon />
        </motion.div>
      </motion.div>
    </Link>
  );
}

export default NextLink;
