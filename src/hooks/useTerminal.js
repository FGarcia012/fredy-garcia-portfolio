import { useCallback, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { completeInput, runCommand, WELCOME_LINES } from '../utils/terminalCommands'
import useAccent from './useAccent'

const MAX_LINES = 200 
let lineId = 0
const withIds = (lines) => lines.map((line) => ({ ...line, id: (lineId += 1) }))

export default function useTerminal() {
  const navigate = useNavigate()
  const [accent, setAccent] = useAccent()
  const [lines, setLines] = useState(() => withIds(WELCOME_LINES))
  const [input, setInputValue] = useState('')
  const [history, setHistory] = useState([])
  const [historyIndex, setHistoryIndex] = useState(null)
  const draft = useRef('') 
  const timer = useRef(null)

  useEffect(() => () => clearTimeout(timer.current), [])

  const append = useCallback((newLines) => {
    setLines((previous) => [...previous, ...withIds(newLines)].slice(-MAX_LINES))
  }, [])

  const clear = useCallback(() => setLines([]), [])

  const setInput = useCallback((value) => {
    setInputValue(value)
    setHistoryIndex(null)
  }, [])

  const perform = useCallback(
    (action) => {
      if (!action) return
      if (action.type === 'theme') setAccent(action.value)
      if (action.type === 'open') window.open(action.url, '_blank', 'noopener,noreferrer')
      if (action.type === 'navigate') {
        clearTimeout(timer.current)
        if (action.delay) timer.current = setTimeout(() => navigate(action.to), action.delay)
        else navigate(action.to)
      }
    },
    [navigate, setAccent],
  )

  const run = useCallback(
    (raw) => {
      const command = raw.trim()
      setInputValue('')
      setHistoryIndex(null)
      if (!command) {
        append([{ kind: 'command', text: '' }])
        return
      }
      setHistory((previous) => (previous.at(-1) === command ? previous : [...previous, command]))

      const result = runCommand(command, { accent })
      if (result.action?.type === 'clear') {
        clear()
        return
      }
      append([{ kind: 'command', text: command }, ...result.lines])
      perform(result.action)
    },
    [accent, append, clear, perform],
  )

  const onKeyDown = useCallback(
    (event) => {
      if (event.key === 'Enter') {
        event.preventDefault()
        run(input)
      } else if (event.key === 'ArrowUp' && history.length > 0) {
        event.preventDefault()
        const next = historyIndex === null ? history.length - 1 : Math.max(0, historyIndex - 1)
        if (historyIndex === null) draft.current = input
        setInputValue(history[next])
        setHistoryIndex(next)
      } else if (event.key === 'ArrowDown' && historyIndex !== null) {
        event.preventDefault()
        const next = historyIndex + 1
        if (next >= history.length) {
          setInputValue(draft.current)
          setHistoryIndex(null)
        } else {
          setInputValue(history[next])
          setHistoryIndex(next)
        }
      } else if (event.key === 'Tab') {
        const { value, options } = completeInput(input)
        if (value === input && options.length === 0) return
        event.preventDefault()
        if (value !== input) setInput(value)
        if (options.length > 1) append([{ kind: 'command', text: input }, { text: options.join('  '), tone: 'muted' }])
      } else if (event.key.toLowerCase() === 'l' && event.ctrlKey) {
        event.preventDefault()
        clear()
      }
    },
    [append, clear, history, historyIndex, input, run, setInput],
  )

  return { lines, input, setInput, onKeyDown, run }
}
