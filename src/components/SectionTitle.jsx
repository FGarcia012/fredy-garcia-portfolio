export default function SectionTitle({ children }) {
  return (
    <h2 className="section-title">
      <span className="prompt" aria-hidden="true">$</span> {children}
    </h2>
  )
}
