// Footer easter egg: the sentence ends like a program that finished without errors
export default function SiteFooter() {
  return (
    <footer className="site-footer">
      Made with React, Bootstrap and lots of coffee in Guatemala <span role="img" aria-label="Guatemala flag">🇬🇹</span> —{' '}
      <span className="exit-code">exit 0</span>
    </footer>
  )
}
