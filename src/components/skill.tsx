import { Progress } from '@/components/ui/progress'
import type { SkillItem } from '@/lib/types'

const levelMap = {
  newbie: 15,
  junior: 36,
  intermediate: 50,
  advanced: 70,
  master: 90,
}

interface SkillProps extends SkillItem {}

export default function Skill({ icon, label, level }: SkillProps) {
  return (
    <div className={'group grid grid-cols-[60px_auto] items-center gap-x-4 rounded-xl border-2 border-border p-4'}>
      <div className={'flex items-center justify-center text-primary transition-colors group-hover:text-primary-hover'}>
        {icon}
      </div>
      <div className={'flex flex-col gap-y-2'}>
        <h2 className={'text-lg font-medium'}>{label}</h2>
        <Progress value={levelMap[level]} />
      </div>
    </div>
  )
}
