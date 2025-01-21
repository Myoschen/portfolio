'use client'

import { ArrowUpRight } from 'iconoir-react'
import { useQueryStates } from 'nuqs'
import { Masonry } from 'react-plock'

import { Dot } from '@/components/icon/dot'
import { MultiFilter } from '@/components/multi-filter'
import { Badge } from '@/components/ui/badge'
import { BlurImage } from '@/components/ui/blur-image'
import { Button } from '@/components/ui/button'
import { useI18n } from '@/lib/locales/client'
import { searchParamsParsers } from '@/lib/search-params'
import siteConfig, { techColor } from '@/lib/site-config'
import { arrayContains, cn, gradient } from '@/lib/utils'

const techOptions = Array.from(new Set(siteConfig.projects.map(p => p.tech).flat()))

export default function ProjectPage() {
  const t = useI18n()
  const [{ tech }] = useQueryStates(searchParamsParsers)
  const projects = tech
    ? siteConfig.projects.filter(p => arrayContains(p.tech, tech))
    : siteConfig.projects

  return (
    <main className="flex-1 space-y-8 px-4 sm:mt-2 sm:pr-6 md:pr-0">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">{t('project')}</h1>
        <div className="flex items-center gap-x-2">
          <MultiFilter
            title={t('tech')}
            placeholder={t('searchTech')}
            paramKey="tech"
            parsers={searchParamsParsers}
            options={techOptions}
          />
        </div>
        <Masonry
          items={projects}
          config={{
            columns: [1, 2],
            gap: [20, 16],
            media: [640, 1024],
          }}
          render={(item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg border-2 border-secondary shadow"
            >
              {
                item.image
                  ? (
                      <div className="relative aspect-video w-full overflow-hidden">
                        <BlurImage src={item.image} alt={item.key} fill={true} />
                      </div>
                    )
                  : (
                      <div
                        className="aspect-video"
                        style={{ backgroundImage: gradient(item.key) }}
                      />
                    )
              }
              <div className="space-y-3 p-4">
                <div className="space-y-1">
                  <div className="flex items-baseline gap-x-1">
                    <h2 className="text-sm font-medium">{t(item.key)}</h2>
                    {item.building && <p className="text-xs text-secondary-foreground">{t('building')}</p>}
                  </div>
                  <p className="text-xs text-secondary-foreground">
                    {t(`${item.key}.description`)}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1">
                  {item.tech.map((tech, index) => (
                    <Badge
                      key={index}
                      className="rounded px-1 py-0 text-[10px] font-normal"
                      variant="secondary"
                    >
                      <Dot className={cn('mr-1 size-1', techColor(tech))} />
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex flex-wrap gap-x-2">
                  {item.url.website && (
                    <Button size="xs" asChild={true}>
                      <a href={item.url.website} target="_blank" rel="noopener noreferer">
                        <span className="mr-1">{t('website')}</span>
                        <ArrowUpRight className="size-3" />
                      </a>
                    </Button>
                  )}
                  <Button size="xs" asChild={true}>
                    <a href={item.url.source} target="_blank" rel="noopener noreferer">
                      <span className="mr-1">{t('source')}</span>
                      <ArrowUpRight className="size-3" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          )}
        />
      </div>
    </main>
  )
}
