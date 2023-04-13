'use client';
import { motion, Variants } from 'framer-motion';
import Progress from './progress';

type SkillLevel = 'junior' | 'intermediate' | 'advanced';

export type SkillInfo = {
  title: string;
  icon: JSX.Element;
  level: SkillLevel;
};

interface Props {
  info: SkillInfo;
}

const transform = (level: SkillLevel) => {
  let value = 0;
  switch (level) {
    case 'junior':
      value = 30;
      break;
    case 'intermediate':
      value = 60;
      break;
    case 'advanced':
      value = 90;
      break;
  }
  return value;
};

const card = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
} satisfies Variants;

function SkillCard({ info }: Props) {
  const { title, icon, level } = info;
  return (
    <motion.div
      variants={card}
      className="grid grid-cols-[60px_auto] items-center gap-x-4 border-2 border-slate-200 p-4 transition-colors hover:border-indigo-600 dark:border-neutral-800 dark:hover:border-indigo-300"
    >
      <div className="flex items-center justify-center">{icon}</div>
      <div className="flex flex-col gap-y-2">
        <h2 className="font-ibm text-xl font-semibold">{title}</h2>
        <Progress value={transform(level)} />
      </div>
    </motion.div>
  );
}

export default SkillCard;
