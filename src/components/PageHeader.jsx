import Typewriter from './Typewriter'

// Page title: a prompt line and the title type themselves the first time (per session)
export default function PageHeader({ command, title }) {
  return (
    <header className="page-header">
      <Typewriter
        as="h1"
        id={`page:${command}`}
        srText={title}
        lines={[
          { text: command, className: 'page-command', prompt: '$' },
          { text: title, className: 'page-title' },
        ]}
      />
    </header>
  )
}
