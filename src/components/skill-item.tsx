import {Skill} from '@/types/common';
import Progress from '@/components/ui/progress';

const levelMap = {
  newbie: 15,
  junior: 36,
  intermediate: 50,
  advanced: 70,
  master: 90,
};

interface Props extends Skill {}

function SkillItem({icon, title, level}: Props) {
  return (
    <div
      id="m-item"
      className="grid grid-cols-[60px_auto] items-center gap-x-4 rounded border-2 border-mauve-7 p-4 transition-colors hover:border-violet-7 dark:border-mauveDark-7 dark:hover:border-violetDark-7"
    >
      <div className="flex items-center justify-center">{icon}</div>
      <div className="flex flex-col gap-y-2">
        <h2 className="font-work-sans text-xl font-medium">{title}</h2>
        <Progress value={levelMap[level]} />
      </div>
    </div>
  );
}

export default SkillItem;
