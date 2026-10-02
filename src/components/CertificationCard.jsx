import { useState } from 'react'
import { Badge, Card } from 'react-bootstrap'
import { FaCertificate } from 'react-icons/fa'
import FileModal from './FileModal'

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

// '2023-03-07' -> 'Mar 2023' (we split the text, so time zones can never change the date)
function formatDate(isoDate) {
  if (!isoDate) return null
  const [year, month] = isoDate.split('-')
  return `${MONTHS[Number(month) - 1]} ${year}`
}

// One certificate. type "link": opens `url` in a new tab. type "file": opens `file` in a modal.
// An optional `verifyUrl` adds a separate "Verify" link (for example Credly).
export default function CertificationCard({ cert }) {
  const { type, title, issuer, issuedOn, url, file, verifyUrl, image } = cert
  const [showFile, setShowFile] = useState(false)
  const date = formatDate(issuedOn)
  const verifiable = Boolean(verifyUrl || (type === 'link' && url))

  return (
    <Card className="cert-card h-100">
      <Card.Body className="d-flex gap-3">
        {image ? (
          <img className="cert-badge" src={image} alt="" width="64" height="64" loading="lazy" />
        ) : (
          <div className="icon-box">
            <FaCertificate aria-hidden="true" />
          </div>
        )}
        <div className="min-w-0">
          <Card.Title as="h3" className="h6 mb-1">
            {type === 'link' ? (
              <a className="stretched-link" href={url} target="_blank" rel="noopener noreferrer">
                {title}
                <span className="visually-hidden"> (opens in a new tab)</span>
              </a>
            ) : (
              <button type="button" className="cert-open stretched-link" onClick={() => setShowFile(true)}>
                {title}
                <span className="visually-hidden"> (opens the certificate in a window)</span>
              </button>
            )}
          </Card.Title>
          <Card.Text className="text-secondary small mb-2">
            {issuer}
            {date && ` · ${date}`}
          </Card.Text>
          <div className="d-flex flex-wrap align-items-center gap-2">
            {verifiable && (
              <Badge bg={null} className="verified-badge">
                Verifiable online
              </Badge>
            )}
            {type === 'file' && verifyUrl && (
              <a className="cert-verify small" href={verifyUrl} target="_blank" rel="noopener noreferrer">
                Verify on Credly
                <span className="visually-hidden"> (opens in a new tab)</span>
              </a>
            )}
          </div>
        </div>
      </Card.Body>

      {type === 'file' && (
        <FileModal show={showFile} onHide={() => setShowFile(false)} title={title} file={file} />
      )}
    </Card>
  )
}
