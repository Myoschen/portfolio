'use client';

import {motion, type Variants} from 'framer-motion';

import Icon from '@/components/ui/icon';
import Link from '@/components/ui/link';

interface Props {
  next: string;
  label: string;
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

function NextLink({next, label}: Props) {
  return (
    <Link href={`/${next}`}>
      <motion.div className="flex items-center gap-x-1" whileHover="hover">
        <span className="font-medium capitalize tracking-wider">{label}</span>
        <motion.div variants={arrow}>
          <Icon name="arrowRight" />
        </motion.div>
      </motion.div>
    </Link>
  );
}

export default NextLink;
