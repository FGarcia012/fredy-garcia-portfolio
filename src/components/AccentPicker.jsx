import { Dropdown } from 'react-bootstrap'
import { FaPalette } from 'react-icons/fa'
import useAccent from '../hooks/useAccent'
import { ACCENTS, ACCENT_NAMES } from '../utils/accent'

export default function AccentPicker() {
  const [accent, setAccent] = useAccent()

  return (
    <Dropdown drop="up" align="end" className="accent-picker">
      <Dropdown.Toggle
        bsPrefix="accent-toggle"
        variant="link"
        aria-label={`Accent color: ${accent}. Change accent color`}
        title="Change accent color"
      >
        <FaPalette aria-hidden="true" />
      </Dropdown.Toggle>
      {/* "fixed" lets the menu escape the small status bar without being clipped */}
      <Dropdown.Menu className="accent-menu" popperConfig={{ strategy: 'fixed' }}>
        {ACCENT_NAMES.map((name) => (
          <Dropdown.Item key={name} as="button" type="button" active={name === accent} onClick={() => setAccent(name)}>
            <span className="accent-swatch" style={{ background: ACCENTS[name].hex }} aria-hidden="true" />
            {name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}
