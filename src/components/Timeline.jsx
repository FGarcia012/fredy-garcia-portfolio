export default function Timeline({ items }) {
  return (
    <ol className="timeline">
      {items.map((item) => (
        <li key={`${item.title}-${item.period}`}>
          <h3 className="timeline-title">{item.title}</h3>
          <p className="timeline-place">
            {item.place}
            {item.note && <span className="text-secondary"> ({item.note})</span>}
          </p>
          <p className="timeline-period">{item.period}</p>
          {item.bullets && (
            <ul className="timeline-bullets">
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  )
}
