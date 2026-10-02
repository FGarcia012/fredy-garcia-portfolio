import { Button, Modal } from 'react-bootstrap'
import { FaDownload, FaExternalLinkAlt } from 'react-icons/fa'
import useMediaQuery from '../hooks/useMediaQuery'

// Bootstrap Modal that shows a PDF. Phones cannot embed PDFs reliably,
// so below 768px the modal offers "Open in new tab" instead of the viewer.
export default function FileModal({ show, onHide, title, file }) {
  const canEmbed = useMediaQuery('(min-width: 768px)')

  return (
    <Modal show={show} onHide={onHide} size="xl" centered scrollable aria-labelledby="file-modal-title">
      <Modal.Header closeButton>
        <Modal.Title as="h2" id="file-modal-title" className="h5 font-mono">
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {canEmbed ? (
          <iframe className="file-frame" src={file} title={title} />
        ) : (
          <p className="mb-0 text-secondary">
            Your phone cannot show this file inside the page. Open it in a new tab or download it.
          </p>
        )}
      </Modal.Body>
      <Modal.Footer className="justify-content-between">
        <div className="d-flex flex-wrap gap-2">
          <Button href={file} download variant="primary">
            <FaDownload aria-hidden="true" /> Download
          </Button>
          <Button href={file} target="_blank" rel="noopener noreferrer" variant="outline-secondary">
            <FaExternalLinkAlt aria-hidden="true" /> Open in new tab
          </Button>
        </div>
        <Button variant="outline-secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
