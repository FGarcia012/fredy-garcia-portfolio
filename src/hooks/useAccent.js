import { useSyncExternalStore } from 'react'
import { getAccent, setAccent, subscribeAccent } from '../utils/accent'

export default function useAccent() {
  const accent = useSyncExternalStore(subscribeAccent, getAccent, getAccent)
  return [accent, setAccent]
}
