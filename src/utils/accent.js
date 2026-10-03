export const ACCENTS = {
  green: { rgb: '46, 229, 157', hex: '#2ee59d', hoverHex: '#7df0bd', hoverRgb: '125, 240, 189' },
  cyan: { rgb: '92, 207, 230', hex: '#5ccfe6', hoverHex: '#9be3f2', hoverRgb: '155, 227, 242' },
  amber: { rgb: '255, 180, 84', hex: '#ffb454', hoverHex: '#ffcf8f', hoverRgb: '255, 207, 143' },
}

export const ACCENT_NAMES = Object.keys(ACCENTS)
export const DEFAULT_ACCENT = 'green'
const STORAGE_KEY = 'accent'

const listeners = new Set()

function readStored() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    return ACCENT_NAMES.includes(stored) ? stored : DEFAULT_ACCENT
  } catch {
    return DEFAULT_ACCENT
  }
}

let current = DEFAULT_ACCENT

function applyAccent(name) {
  const { hex, rgb, hoverHex, hoverRgb } = ACCENTS[name]
  const style = document.documentElement.style
  style.setProperty('--accent', hex)
  style.setProperty('--accent-rgb', rgb)
  style.setProperty('--bs-link-hover-color', hoverHex)
  style.setProperty('--bs-link-hover-color-rgb', hoverRgb)
}

export function initAccent() {
  current = readStored()
  applyAccent(current)
}

export function getAccent() {
  return current
}

export function setAccent(name) {
  if (!ACCENTS[name] || name === current) return
  current = name
  applyAccent(name)
  try {
    window.localStorage.setItem(STORAGE_KEY, name)
  } catch {
  }
  listeners.forEach((notify) => notify())
}

export function subscribeAccent(notify) {
  listeners.add(notify)
  return () => listeners.delete(notify)
}
