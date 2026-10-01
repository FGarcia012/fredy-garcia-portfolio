import { useEffect, useState } from 'react'

// Like useState, but the value survives page reloads.
// Every storage call is wrapped in try/catch because storage can be blocked (private mode).
export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = window.localStorage.getItem(key)
      return stored === null ? initialValue : JSON.parse(stored)
    } catch {
      return initialValue
    }
  })

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch {
      // Storage unavailable: the app keeps working without saving
    }
  }, [key, value])

  return [value, setValue]
}
