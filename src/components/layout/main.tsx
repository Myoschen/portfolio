import { type ReactNode } from 'react'

interface Props {
  children: ReactNode
}

function MainLayout({ children }: Props) {
  return (
    <main className={'mt-6 flex min-w-0 flex-auto flex-col px-6 md:mt-0'}>
      {children}
    </main>
  )
}

export default MainLayout
