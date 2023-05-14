'use client';
import Progress from './progress';

type SkillLevel = 'newbie' | 'junior' | 'intermediate' | 'advanced' | 'master';

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
    case 'newbie':
      value = 15;
      break;
    case 'junior':
      value = 35;
      break;
    case 'intermediate':
      value = 50;
      break;
    case 'advanced':
      value = 70;
      break;
    case 'master':
      value = 90;
      break;
  }
  return value;
};

function SkillCard({ info }: Props) {
  const { title, icon, level } = info;
  return (
    <div className="border-mauve-7 m-item hover:border-violet-7 dark:border-mauveDark-7 dark:hover:border-violetDark-7 grid grid-cols-[60px_auto] items-center gap-x-4 rounded border-2 p-4 transition-colors">
      <div className="flex items-center justify-center">{icon}</div>
      <div className="flex flex-col gap-y-2">
        <h2 className="font-work-sans text-xl font-medium">{title}</h2>
        <Progress value={transform(level)} />
      </div>
    </div>
  );
}

export default SkillCard;
