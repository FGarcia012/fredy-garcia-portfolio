import { useEffect, useRef } from 'react'
import { Button, Card } from 'react-bootstrap'
import useTerminal from '../hooks/useTerminal'
import { CHIP_COMMANDS } from '../utils/terminalCommands'

const PROMPT = 'fredy@guatemala:~$'

function TerminalLine({ line }) {
  if (line.kind === 'command') {
    return (
      <div className="term-line">
        <span className="prompt">{PROMPT}</span> {line.text}
      </div>
    )
  }
  if (line.cmd) {
    return (
      <div className="term-help">
        <span className="term-help-cmd">{line.cmd}</span>
        <span>{line.desc}</span>
      </div>
    )
  }
  if (line.href) {
    const isMail = line.href.startsWith('mailto:')
    return (
      <div className="term-line">
        <a href={line.href} target={isMail ? undefined : '_blank'} rel="noopener noreferrer">
          {line.text}
        </a>
      </div>
    )
  }
  return <div className={`term-line ${line.tone ? `term-${line.tone}` : ''}`}>{line.text}</div>
}

export default function Terminal() {
  const { lines, input, setInput, onKeyDown, run } = useTerminal()
  const inputRef = useRef(null)
  const outputRef = useRef(null)

  useEffect(() => {
    const output = outputRef.current
    if (output) output.scrollTop = output.scrollHeight
  }, [lines])

  const focusInput = () => {
    if (!window.getSelection()?.toString()) inputRef.current?.focus()
  }

  return (
    <section aria-label="Interactive terminal">
      <Card className="terminal">
        <div className="window-bar">
          <span className="window-dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span className="window-title">fredy@guatemala: ~</span>
        </div>
        {/* The click only helps mouse users; keyboard users reach the input with Tab */}
        <div className="terminal-body" onClick={focusInput}>
          <div ref={outputRef} className="terminal-output" role="log" aria-live="polite" aria-label="Terminal output">
            {lines.map((line) => (
              <TerminalLine key={line.id} line={line} />
            ))}
          </div>
          <div className="terminal-prompt">
            <span className="prompt" aria-hidden="true">{PROMPT}</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={onKeyDown}
              aria-label="Terminal command. Press Enter to run."
              autoComplete="off"
              autoCapitalize="none"
              autoCorrect="off"
              spellCheck={false}
              enterKeyHint="send"
            />
          </div>
        </div>
      </Card>

      {/* Tappable commands for phones and tablets, where typing is slow */}
      <div className="terminal-chips d-lg-none" role="group" aria-label="Quick commands">
        {CHIP_COMMANDS.map((command) => (
          <Button key={command} size="sm" variant="outline-secondary" onClick={() => run(command)}>
            {command}
          </Button>
        ))}
      </div>
      <p className="terminal-tip d-none d-lg-block">
        Tip: type <code>help</code>. Use ↑ ↓ for history and Tab to autocomplete.
      </p>
    </section>
  )
}
