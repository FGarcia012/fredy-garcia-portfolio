import { useState } from 'react'
import { Button, Card, Col, ProgressBar, Row } from 'react-bootstrap'
import { FaDownload, FaEye } from 'react-icons/fa'
import CertificationCard from '../components/CertificationCard'
import FileModal from '../components/FileModal'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import SkillsGrid from '../components/SkillsGrid'
import Timeline from '../components/Timeline'
import { certifications } from '../data/certifications'
import { contacts } from '../data/contacts'
import { education } from '../data/education'
import { experience } from '../data/experience'
import { links } from '../data/links'
import { profile } from '../data/profile'
import usePageTitle from '../hooks/usePageTitle'

export default function Cv() {
  usePageTitle('CV')
  const [showPdf, setShowPdf] = useState(false)
  // Header links: GitHub, LinkedIn and Email only
  const headerLinks = contacts.filter((contact) => ['github', 'linkedin', 'email'].includes(contact.id))

  return (
    <>
      <PageHeader command="open cv.pdf" title="Curriculum Vitae" />

      {/* The buttons appear only when the PDF path is set in profile.js */}
      {profile.cvFile && (
        <div className="d-flex flex-wrap gap-2 mb-4">
          <Button href={profile.cvFile} download variant="primary">
            <FaDownload aria-hidden="true" /> Download CV (PDF)
          </Button>
          <Button variant="outline-primary" onClick={() => setShowPdf(true)}>
            <FaEye aria-hidden="true" /> View online
          </Button>
          <FileModal
            show={showPdf}
            onHide={() => setShowPdf(false)}
            title="Fredy García: CV"
            file={profile.cvFile}
          />
        </div>
      )}

      <Reveal>
        <Card className="cv-doc">
          <div className="window-bar">
            <span className="window-dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span className="window-title">Fredy-Garcia-CV-EN.pdf</span>
          </div>
          <Card.Body className="p-3 p-md-4">
            <header className="cv-header">
              <h2 className="cv-name">{profile.name}</h2>
              <p className="cv-role">{profile.role}</p>
              <ul className="list-unstyled d-flex flex-wrap gap-3 mb-0">
                {headerLinks.map(({ id, label, Icon, href }) => (
                  <li key={id}>
                    <a href={href} target={id === 'email' ? undefined : '_blank'} rel="noopener noreferrer">
                      <Icon aria-hidden="true" /> {label}
                    </a>
                  </li>
                ))}
              </ul>
            </header>

            <section className="cv-section">
              <SectionTitle>Professional Summary</SectionTitle>
              <p className="mb-0">{profile.summary}</p>
            </section>

            <section className="cv-section">
              <SectionTitle>Experience</SectionTitle>
              <Timeline items={experience} />
            </section>

            <section className="cv-section">
              <SectionTitle>Education</SectionTitle>
              <Timeline items={education} />
            </section>

            <section className="cv-section">
              <SectionTitle>Skills &amp; Technologies</SectionTitle>
              <SkillsGrid />
            </section>

            <section className="cv-section">
              <SectionTitle>Languages</SectionTitle>
              <ul className="list-unstyled language-list mb-0">
                {profile.languages.map((language) => (
                  <li key={language.name}>
                    <div className="d-flex justify-content-between font-mono small mb-1">
                      <span>{language.name}</span>
                      <span className="text-secondary">{language.label}</span>
                    </div>
                    <ProgressBar
                      now={language.level}
                      label={`${language.name}: ${language.label}`}
                      visuallyHidden
                      className="goal-progress"
                    />
                  </li>
                ))}
              </ul>
            </section>

            <section className="cv-section">
              <SectionTitle>Certifications</SectionTitle>
              <Row xs={1} md={2} className="g-3">
                {certifications.map((cert) => (
                  <Col key={cert.id}>
                    <CertificationCard cert={cert} />
                  </Col>
                ))}
              </Row>
            </section>

            <section className="cv-section">
              <SectionTitle>Connect with Me</SectionTitle>
              <ul className="list-unstyled d-flex flex-wrap gap-2 mb-3">
                {contacts.map(({ id, label, Icon, href }) => (
                  <li key={id}>
                    <a
                      className="connect-link"
                      href={href}
                      target={id === 'email' ? undefined : '_blank'}
                      rel="noopener noreferrer"
                    >
                      <Icon aria-hidden="true" /> {label}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="text-secondary mb-0">
                Additional projects can be found on my{' '}
                <a href={links.github} target="_blank" rel="noopener noreferrer">GitHub</a>.
              </p>
            </section>
          </Card.Body>
        </Card>
      </Reveal>
    </>
  )
}
