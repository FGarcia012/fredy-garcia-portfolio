import Typewriter from './Typewriter'

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
