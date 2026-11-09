import { useEffect } from 'react'
import {
  FiBriefcase,
  FiCalendar,
  FiCheckCircle,
  FiLayers,
  FiX,
} from 'react-icons/fi'

export default function ExperienceDetailModal({ experience, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  if (!experience) return null

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label={`${experience.company} experience detail`}
      onClick={onClose}
    >
      <div
        className="modal-shell experience-modal-shell"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header-bar">
          <div className="modal-header-left">
            <div className="modal-badge-row">
              <span className="category-pill">{experience.type}</span>
              <span className="experience-period-pill">
                <FiCalendar />
                <span>{experience.period}</span>
              </span>
            </div>
            <h2 className="modal-title">{experience.company}</h2>
            <p className="modal-subtitle-role">{experience.position}</p>
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
          <div className="experience-modal-content">
            <div className="detail-section-box">
              <h3 className="detail-block-title">Ringkasan Peran</h3>
              <p className="detail-desc-text">{experience.summary}</p>
            </div>

            <div className="detail-columns-grid">
              <div className="detail-panel-card">
                <h4 className="panel-title">Tanggung Jawab Utama</h4>
                <ul className="detail-bullet-list">
                  {experience.responsibilities.map((resp, idx) => (
                    <li key={idx}>
                      <FiCheckCircle className="check-bullet" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="detail-panel-card">
                <h4 className="panel-title">Pencapaian Utama</h4>
                <ul className="detail-bullet-list">
                  {experience.achievements.map((ach, idx) => (
                    <li key={idx}>
                      <FiCheckCircle className="check-bullet text-success" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="detail-panel-card">
              <h4 className="panel-title">
                <FiLayers className="inline-icon" />
                <span>Tools & Keahlian yang Diterapkan</span>
              </h4>
              <div className="skill-chip-wrap">
                {experience.tech.map((t) => (
                  <span key={t} className="skill-pill">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

