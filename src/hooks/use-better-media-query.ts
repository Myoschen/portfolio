'use client'

import { useState } from 'react'
import { useIsomorphicLayoutEffect } from './use-isomorphic-layout-effect'

/**
 * @see https://github.com/chakra-ui/chakra-ui/issues/3580
 * @param query - The media query string to evaluate (e.g., "(min-width: 768px)").
 * @returns `true` if the query matches, `false` if it doesn't, or `null` during the initial render.
 */
export function useBetterMediaQuery(query: string) {
  const [matches, setMatches] = useState<boolean | null>(null)

  useIsomorphicLayoutEffect(() => {
    const matchMedia = window.matchMedia(query)
    const handleChange = () => setMatches(!!matchMedia.matches)
    handleChange()
    matchMedia.addEventListener('change', handleChange)
    return () => matchMedia.removeEventListener('change', handleChange)
  }, [query])

  return matches
}
