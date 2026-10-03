import useRotatingText from '../hooks/useRotatingText'

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
