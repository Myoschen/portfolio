export type Social = {
  type: 'github' | 'email' | 'x'
  label: string
  url: string
}

export type Language = 'HTML5' | 'CSS' | 'JavaScript' | 'TypeScript' | 'Go' | 'Rust' | 'Python' | (string & {})

export type Library = 'React' | 'React Native' | 'Next.js' | 'Expo' | 'Tailwind CSS' | 'Framer Motion' | 'Electron' | 'Tauri' | 'Vue' | 'Nuxt' | 'Node.js' | 'Radix UI Primitives' | 'Rreact Aria Components' | 'Postgres' | (string & {})

export type Tool = 'Arc' | 'Bun' | 'pnpm' | 'Vercel' | 'vscode' | (string & {})

export type Project = {
  key: string
  image: string | undefined
  tech: (Language | Library)[]
  url: {
    website: string | undefined
    source: string
  }
  building?: boolean
}

export type Config = {
  author: string
  logo: string
  banner: {
    home: string
    about: string
  }
  socials: Social[]
  languages: Language[]
  libraries: Library[]
  tools: Tool[]
  projects: Project[]
}

export default {
  author: 'Ryan Chen',
  logo: '/images/logo.png',
  banner: {
    home: '/images/home-banner.jpg',
    about: '/images/about-banner.jpg',
  },
  socials: [
    { type: 'github', label: 'Myoschen', url: 'https://github.com/Myoschen' },
    { type: 'email', label: 'myos.chen@gmail.com', url: 'mailto:myos.chen@gmail.com' },
    { type: 'x', label: 'MyosChen', url: 'https://x.com/MyosChen' },
  ],
  languages: ['HTML5', 'CSS', 'JavaScript', 'TypeScript'],
  libraries: ['React', 'React Native', 'Next.js', 'Expo', 'Tailwind CSS', 'Framer Motion', 'Electron'],
  tools: ['Arc', 'Bun', 'pnpm', 'Vercel', 'vscode'],
  projects: [
    {
      key: 'next-blog' as const,
      image: '/images/next-blog.jpeg',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      url: {
        website: undefined,
        source: 'http://github.com/Myoschen/next-blog',
      },
    },
    {
      key: 'ui' as const,
      image: undefined,
      tech: ['Next.js', 'Rreact Aria Components', 'TypeScript'],
      url: {
        website: undefined,
        source: 'http://github.com/Myoschen/ui',
      },
      building: true,
    },
    {
      key: 'create-app' as const,
      image: undefined,
      tech: ['Node.js', 'TypeScript'],
      url: {
        website: undefined,
        source: 'http://github.com/Myoschen/create-app',
      },
      building: true,
    },
    {
      key: 'commerce' as const,
      image: undefined,
      tech: ['Next.js', 'Rreact Aria Components', 'TypeScript', 'Rust', 'Postgres'],
      url: {
        website: undefined,
        source: 'http://github.com/Myoschen/',
      },
      building: true,
    },
  ],
} satisfies Config

export function techColor(tech: Language | Library) {
  switch (tech) {
    case 'TypeScript':
      return 'text-[#2F74C0]'
    case 'Tailwind CSS':
      return 'text-[#38BDF9]'
    case 'Rust':
      return 'text-[#FC5115]'
    case 'Postgres':
      return 'text-[#31648C]'
    case 'Rreact Aria Components':
      return 'text-[#E1241B]'
    case 'Next.js':
    default:
      return 'text-black dark:text-white'
  }
}
