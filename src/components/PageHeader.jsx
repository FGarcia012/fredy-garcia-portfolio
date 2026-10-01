// Page title with a terminal prompt line above it. Only the h1 is read by screen readers.
export default function PageHeader({ command, title }) {
  return (
    <header className="page-header">
      <p className="page-command" aria-hidden="true">
        <span className="prompt">$</span> {command}
      </p>
      <h1>{title}</h1>
    </header>
  )
}
