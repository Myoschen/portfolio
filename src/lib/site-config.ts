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
  image: string
  tech: (Language | Library)[]
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
      key: 'next-blog',
      image: '/images/next-blog.png',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    },
    {
      key: 'ui',
      image: '/images/ui.png',
      tech: ['Next.js', 'Rreact Aria Components', 'TypeScript'],
      building: true,
    },
    {
      key: 'create-app',
      image: '/images/create-app.png',
      tech: ['Node.js', 'TypeScript'],
      building: true,
    },
    {
      key: 'commerce',
      image: '/images/commerce.png',
      tech: ['Next.js', 'Rreact Aria Components', 'TypeScript', 'Rust', 'Postgres'],
      building: true,
    },
  ],
} satisfies Config
