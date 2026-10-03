import { useState } from 'react'
import { Badge, Button, Card, Col, Row, Toast, ToastContainer } from 'react-bootstrap'
import { FaCopy } from 'react-icons/fa'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import Typewriter from '../components/Typewriter'
import { contacts } from '../data/contacts'
import { links } from '../data/links'
import { profile } from '../data/profile'
import usePageTitle from '../hooks/usePageTitle'

export default function Contact() {
  usePageTitle('Contact')
  const [toast, setToast] = useState(null)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(links.email)
      setToast('Email copied to clipboard')
    } catch {
      setToast(`Could not copy. My email is ${links.email}`)
    }
  }

  return (
    <>
      <PageHeader command="./contact.sh" title="Contact" />

      <Typewriter
        as="p"
        id="contact-intro"
        className="contact-intro"
        lines={["Interested in my work or want to collaborate? Let's talk."]}
      />

      <p className="d-flex flex-wrap align-items-center gap-2 mb-4">
        <Badge bg="warning" text="dark" className="open-badge">
          <span className="status-dot" aria-hidden="true" /> {profile.availability}
        </Badge>
        {profile.availabilityNote && <span className="text-secondary">{profile.availabilityNote}</span>}
      </p>

      <Row xs={1} md={2} className="g-3">
        {contacts.map(({ id, label, Icon, href, text }, index) => (
          <Col key={id}>
            <Reveal delay={index * 100} className="h-100">
              <Card className="contact-card h-100">
                <Card.Body className="d-flex align-items-center gap-3">
                  <div className="icon-box">
                    <Icon aria-hidden="true" />
                  </div>
                  <div className="flex-grow-1 min-w-0">
                    <Card.Title as="h2" className="h6 mb-1">
                      <a
                        className="stretched-link"
                        href={href}
                        target={id === 'email' ? undefined : '_blank'}
                        rel="noopener noreferrer"
                      >
                        {label}
                        {id !== 'email' && <span className="visually-hidden"> (opens in a new tab)</span>}
                      </a>
                    </Card.Title>
                    <Card.Text className="text-secondary small mb-0 text-break">{text}</Card.Text>
                  </div>
                  {id === 'email' && (
                    <Button
                      variant="outline-secondary"
                      className="copy-btn"
                      onClick={copyEmail}
                      aria-label="Copy email address"
                    >
                      <FaCopy aria-hidden="true" /> Copy
                    </Button>
                  )}
                </Card.Body>
              </Card>
            </Reveal>
          </Col>
        ))}
      </Row>

      {/* Fixed above the status bar so it never hides behind it */}
      <ToastContainer className="position-fixed p-3 toast-area" position="bottom-end">
        <Toast show={Boolean(toast)} onClose={() => setToast(null)} delay={3000} autohide>
          <Toast.Body>{toast}</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  )
}
