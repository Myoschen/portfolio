'use client';

import Progress from '@/components/progress';

type SkillLevel = 'newbie' | 'junior' | 'intermediate' | 'advanced' | 'master';

export interface SkillInfo {
  title: string;
  icon: JSX.Element;
  level: SkillLevel;
}

interface Props {
  info: SkillInfo;
}

const skillLevelMapping: Record<SkillLevel, number> = {
  newbie: 15,
  junior: 36,
  intermediate: 50,
  advanced: 70,
  master: 90,
};

function SkillCard({info}: Props) {
  const {title, icon, level} = info;
  return (
    <div
      id="m-item"
      className="border-mauve-7 hover:border-violet-7 dark:border-mauveDark-7 dark:hover:border-violetDark-7 grid grid-cols-[60px_auto] items-center gap-x-4 rounded border-2 p-4 transition-colors"
    >
      <div className="flex items-center justify-center">{icon}</div>
      <div className="flex flex-col gap-y-2">
        <h2 className="font-work-sans text-xl font-medium">{title}</h2>
        <Progress value={skillLevelMapping[level]} />
      </div>
    </div>
  );
}

export default SkillCard;
