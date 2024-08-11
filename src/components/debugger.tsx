/** @see https://andrewgbliss.medium.com/tailwind-css-responsive-debugging-898dd2dea31a */
export function Debugger() {
  return (
    <div className="fixed bottom-2 right-2 flex items-center justify-center border px-2 py-1 [&>p]:font-mono [&>p]:text-xs">
      <p className="block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden">xs</p>
      <p className="hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden">sm</p>
      <p className="hidden sm:hidden md:block lg:hidden xl:hidden 2xl:hidden">md</p>
      <p className="hidden sm:hidden md:hidden lg:block xl:hidden 2xl:hidden">lg</p>
      <p className="hidden sm:hidden md:hidden lg:hidden xl:block 2xl:hidden">xl</p>
      <p className="hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:block">2xl</p>
    </div>
  )
}
