import { useCallback, useSyncExternalStore } from 'react'

// Returns true while the screen matches a CSS media query, e.g. '(min-width: 768px)'
export default function useMediaQuery(query) {
  const subscribe = useCallback(
    (notify) => {
      const media = window.matchMedia(query)
      media.addEventListener('change', notify)
      return () => media.removeEventListener('change', notify)
    },
    [query],
  )
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false,
  )
}
