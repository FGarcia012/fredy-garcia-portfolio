export function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function hasSeen(id) {
  if (!id) return false
  try {
    return window.sessionStorage.getItem(`seen:${id}`) === '1'
  } catch {
    return false
  }
}

export function markSeen(id) {
  if (!id) return
  try {
    window.sessionStorage.setItem(`seen:${id}`, '1')
  } catch {
  }
}
