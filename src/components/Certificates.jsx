import { FaArrowRightLong } from 'react-icons/fa6'
import { FiAward, FiCalendar, FiExternalLink } from 'react-icons/fi'
import { CERTIFICATES, DRIVE_PORTFOLIO_URL } from '../data/portfolioData.js'

export default function Certificates({ onOpenCertificate }) {
  return (
    <section id="certifications" className="section-card reveal">
      <div className="section-head-flex">
        <div className="section-header">
          <div className="section-tag-pill">
            <FiAward />
            <span>Credentials</span>
          </div>
          <h2 className="section-title">Certificates & Licenses</h2>
          <p className="section-subtitle">
            Sertifikasi resmi dalam bidang etika jamuan hospitality, pemanduan wisata, dan sistem reservasi industri pariwisata.
          </p>
        </div>

        <a
          href={DRIVE_PORTFOLIO_URL}
          className="btn btn-secondary btn-sm"
          target="_blank"
          rel="noopener noreferrer"
          title="Buka dokumen sertifikat di Google Drive"
        >
          <span>All Evidence in Drive</span>
          <FiExternalLink />
        </a>
      </div>

      <div className="certificates-grid">
        {CERTIFICATES.map((cert, index) => (
          <article
            key={cert.id}
            className="certificate-card bento-card"
            style={{ '--delay': `${index * 80}ms` }}
            onClick={() => onOpenCertificate(cert)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                onOpenCertificate(cert)
              }
            }}
            aria-label={`Buka detail sertifikat ${cert.title}`}
          >
            <div className="cert-top">
              <div className="cert-icon-wrapper">
                <FiAward />
              </div>
              <div className="cert-date-pill">
                <FiCalendar />
                <span>{cert.issueDate}</span>
              </div>
            </div>

            <div className="cert-body">
              <p className="cert-org">{cert.organization}</p>
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-desc">{cert.description}</p>
            </div>

            <div className="cert-footer">
              <button
                type="button"
                className="btn-text-link"
                onClick={(e) => {
                  e.stopPropagation()
                  onOpenCertificate(cert)
                }}
              >
                <span>View Certificate</span>
                <FaArrowRightLong />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

