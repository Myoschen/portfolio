import data from '~/data.json'
import { Arc, Bun, CSS, Electron, Expo, FramerMotion, Github, Gmail, HTML5, JavaScript, Next, Pnpm, React, TailwindCSS, TypeScript, Vercel, Vscode, X } from '@/components/icon'
import { Badge } from '@/components/ui/badge'
import { LightBoard } from '@/components/ui/light-board'
import { getI18n } from '@/lib/locales/server'

export default async function HomePage() {
  const t = await getI18n()

  const uses = [
    { heading: t('uses.languages'), items: data.languages.map(parseLanguage) },
    { heading: t('uses.libraries'), items: data.libraries.map(parseLibrary) },
    { heading: t('uses.tools'), items: data.tools.map(parseTool) },
  ]

  return (
    <main className="w-full space-y-8 px-4 pb-24 sm:ml-40 sm:mt-2 sm:max-w-xl sm:px-0 sm:pb-0">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">{data.author}</h1>
        <div className="w-full bg-black">
          <LightBoard
            rows={17}
            lightSize={4}
            gap={3}
            text="HELLO WORLD"
            updateInterval={300}
            colors={{
              background: '#1a1a1a',
              textDim: '#3a3a3a',
              drawLine: '#7a7a7a',
              textBright: '#ffffff',
            }}
          />
        </div>
        <div className="space-y-2">
          <p>{t('introduce')}</p>
          <ul className="flex flex-col gap-x-4 gap-y-2 sm:flex-row sm:items-center">
            {data.socials.map((item, index) => {
              const Icon = getSocialIcon(item.type)
              return (
                <li key={index}>
                  <a
                    className="flex items-center gap-x-2 transition-opacity ease-in-out-quint hover:opacity-50"
                    href={item.url}
                    target="_blank"
                    rel="noreferer noopener"
                  >
                    <Icon className="size-4" />
                    <span className="text-sm">{item.label}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">{t('uses')}</h2>
          <p className="text-sm">{t('uses.introduce')}</p>
        </div>
        {uses.map ((use, index) => (
          <div key={index} className="space-y-2">
            <h3 className="text-lg font-semibold">{use.heading}</h3>
            <div className="flex flex-wrap items-center gap-2">
              {use.items.map((item, index) => (
                <Badge key={index} variant="outline" className="gap-x-1">
                  <item.icon className="size-3" />
                  <span>{item.label}</span>
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

function getSocialIcon(type: string) {
  switch (type) {
    case 'email':
      return Gmail
    case 'github':
      return Github
    case 'x':
      return X
    default:
      throw Error('This type of icon is currently not supported!')
  }
}

function parseLanguage(language: string) {
  switch (language) {
    case 'html5':
      return { icon: HTML5, label: 'HTML 5' }
    case 'css':
      return { icon: CSS, label: 'CSS' }
    case 'js':
      return { icon: JavaScript, label: 'JavaScript' }
    case 'ts':
      return { icon: TypeScript, label: 'TypeScript' }
    default:
      throw Error()
  }
}

function parseLibrary(library: string) {
  switch (library) {
    case 'react':
      return { icon: React, label: 'React' }
    case 'react-native':
      return { icon: React, label: 'React Native' }
    case 'next.js':
      return { icon: Next, label: 'Next.js' }
    case 'expo':
      return { icon: Expo, label: 'Expo' }
    case 'tailwindcss':
      return { icon: TailwindCSS, label: 'Tailwind CSS' }
    case 'framer-motion':
      return { icon: FramerMotion, label: 'Framer Motion' }
    case 'electron':
      return { icon: Electron, label: 'Electron' }
    default:
      throw Error()
  }
}

// ["arc", "bun", "pnpm", "vercel", "vscode"]
function parseTool(tool: string) {
  switch (tool) {
    case 'arc':
      return { icon: Arc, label: 'Arc' }
    case 'bun':
      return { icon: Bun, label: 'Bun' }
    case 'pnpm':
      return { icon: Pnpm, label: 'pnpm' }
    case 'vercel':
      return { icon: Vercel, label: 'Vercel' }
    case 'vscode':
      return { icon: Vscode, label: 'vscode' }
    default:
      throw Error()
  }
}
