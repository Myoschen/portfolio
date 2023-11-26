import Progress from '@/components/ui/progress'
import type { Skill } from '@/types/common'

const levelMap = {
  newbie: 15,
  junior: 36,
  intermediate: 50,
  advanced: 70,
  master: 90,
}

interface Props extends Skill {}

function SkillItem({ icon, title, level }: Props) {
  return (
    <div
      id="m-item"
      className="group grid grid-cols-[60px_auto] items-center gap-x-4 rounded border-2 border-mauve-7 p-4 transition-colors ease-out hover:border-violet-7 dark:border-mauve-dark-7 dark:hover:border-violet-dark-7"
    >
      <div className="flex items-center justify-center text-mauve-9 transition-[color_transform] ease-out group-hover:scale-110 group-hover:text-violet-10 group-hover:will-change-transform dark:text-mauve-dark-9 dark:group-hover:text-violet-dark-10">
        {icon}
      </div>
      <div className="flex flex-col gap-y-2">
        <h2 className="text-xl font-medium">{title}</h2>
        <Progress value={levelMap[level]} />
      </div>
    </div>
  )
}

export default SkillItem
