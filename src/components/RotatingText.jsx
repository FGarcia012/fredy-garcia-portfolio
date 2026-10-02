import useRotatingText from '../hooks/useRotatingText'

// A line that types a phrase, deletes it and moves to the next one
export default function RotatingText({ phrases, active = true, className }) {
  const text = useRotatingText(phrases, { active })
  return (
    <p className={className}>
      <span className="visually-hidden">{phrases.join(', ')}</span>
      <span aria-hidden="true">
        <span className="prompt">&gt;</span> {text}
        {active && <span className="tw-cursor">▍</span>}
      </span>
    </p>
  )
}
