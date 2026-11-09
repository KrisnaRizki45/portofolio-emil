import { useEffect } from 'react'
import { FiAward, FiCalendar, FiExternalLink, FiX } from 'react-icons/fi'
import { DRIVE_PORTFOLIO_URL } from '../data/portfolioData.js'

export default function CertificateDetailModal({ certificate, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  if (!certificate) return null

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label={`${certificate.title} certificate detail`}
      onClick={onClose}
    >
      <div
        className="modal-shell certificate-modal-shell"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header-bar">
          <div className="modal-header-left">
            <span className="category-pill">Verified Credential</span>
            <h2 className="modal-title">{certificate.title}</h2>
          </div>

          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Tutup jendela modal"
          >
            <FiX />
          </button>
        </div>

        <div className="modal-body-scrollable">
          <div className="certificate-modal-card">
            <div className="cert-modal-icon-badge">
              <FiAward />
            </div>

            <div className="cert-modal-info">
              <p className="cert-modal-org">{certificate.organization}</p>
              <h3 className="cert-modal-name">{certificate.title}</h3>
              <div className="cert-modal-date">
                <FiCalendar />
                <span>Tahun Terbit: <strong>{certificate.issueDate}</strong></span>
              </div>
              <p className="cert-modal-desc">{certificate.description}</p>
            </div>

            <div className="cert-modal-actions">
              <a
                href={certificate.link || DRIVE_PORTFOLIO_URL}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Lihat Dokumen di Google Drive</span>
                <FiExternalLink />
              </a>
              <button type="button" className="btn btn-secondary" onClick={onClose}>
                Tutup
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

