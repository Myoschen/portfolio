'use client';
import { motion, Variants } from 'framer-motion';

const title = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
} satisfies Variants;

interface Props {
  label: string;
}

function PageTitle({ label }: Props) {
  return (
    <motion.h1
      variants={title}
      className="font-heading text-4xl font-bold leading-relaxed"
    >
      {label}
    </motion.h1>
  );
}

export default PageTitle;
