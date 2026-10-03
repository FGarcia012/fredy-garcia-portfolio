const STEPS = ['Backlog', 'Sprint', 'Review', 'Retro']

export default function ScrumCycle() {
  return (
    <>
      <ol className="scrum-cycle list-unstyled">
        {STEPS.map((step, index) => (
          <li key={step}>
            <span className="scrum-step">{step}</span>
            {index < STEPS.length - 1 && <span className="scrum-arrow" aria-hidden="true">→</span>}
          </li>
        ))}
      </ol>
      <p className="scrum-loop" aria-hidden="true">↻ repeat every sprint</p>
    </>
  )
}
