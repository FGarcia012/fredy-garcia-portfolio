import { useState } from 'react'
import { Button, Navbar, Offcanvas } from 'react-bootstrap'
import { VscMenu } from 'react-icons/vsc'
import { Link } from 'react-router-dom'
import { navItems } from '../data/navigation'
import FileLink from './FileLink'

export default function MobileNav() {
  const [show, setShow] = useState(false)
  const close = () => setShow(false)

  return (
    <>
      <Navbar as="header" className="mobile-nav d-lg-none">
        <div className="d-flex align-items-center justify-content-between w-100 px-3">
          <Navbar.Brand as={Link} to="/" className="m-0">
            <span className="brand-prompt">&gt;_</span> fredy-garcia
          </Navbar.Brand>
          <Button
            variant="outline-secondary"
            className="mobile-menu-btn"
            onClick={() => setShow(true)}
            aria-label="Open menu"
            aria-expanded={show}
            aria-controls="mobile-menu"
          >
            <VscMenu size={20} />
          </Button>
        </div>
      </Navbar>

      <Offcanvas show={show} onHide={close} id="mobile-menu" aria-labelledby="mobile-menu-title">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id="mobile-menu-title">Explorer</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="p-0">
          <nav aria-label="Main navigation">
            <ul className="list-unstyled m-0">
              {navItems.map((item) => (
                <li key={item.path}>
                  <FileLink item={item} onNavigate={close} />
                </li>
              ))}
            </ul>
          </nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}
