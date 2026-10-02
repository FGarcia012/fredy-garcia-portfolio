import { useSyncExternalStore } from 'react'
import { getAccent, setAccent, subscribeAccent } from '../utils/accent'

// Returns [accentName, setAccentName]. Every component that uses it updates together,
// so the status bar button and the terminal `theme` command always agree.
export default function useAccent() {
  const accent = useSyncExternalStore(subscribeAccent, getAccent, getAccent)
  return [accent, setAccent]
}
