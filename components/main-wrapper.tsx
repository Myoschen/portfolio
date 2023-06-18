interface Props {
  children: React.ReactNode
}

function MainWrapper({ children }: Props) {
  return <main className="mt-6 flex min-w-0 flex-auto flex-col px-6 md:mt-0">{children}</main>
}

export default MainWrapper
