import { FaArrowRightLong } from 'react-icons/fa6'
import {
  FiBriefcase,
  FiCalendar,
  FiCheckCircle,
} from 'react-icons/fi'
import { EXPERIENCE_ITEMS } from '../data/portfolioData.js'

export default function Experience({ onOpenExperience }) {
  return (
    <section id="experience" className="section-card reveal">
      <div className="section-header">
        <div className="section-tag-pill">
          <FiBriefcase />
          <span>Work History</span>
        </div>
        <h2 className="section-title">Professional Experience</h2>
        <p className="section-subtitle">
          Rekam jejak kontribusi kreatif pada brand kosmetik ternama, konsultan proyek konstruksi, dan biro perjalanan wisata.
        </p>
      </div>

      <div className="experience-cards-grid">
        {EXPERIENCE_ITEMS.map((item, index) => (
          <article
            key={item.id}
            className="experience-card bento-card"
            style={{ '--delay': `${index * 80}ms` }}
            onClick={() => onOpenExperience(item)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                onOpenExperience(item)
              }
            }}
            aria-label={`Lihat detail pengalaman di ${item.company}`}
          >
            <div className="experience-top">
              <div className="company-badge-box">
                <span className="company-mark">{item.companyMark}</span>
              </div>
              <div className="experience-title-area">
                <div className="experience-header-meta">
                  <span className="experience-type-pill">{item.type}</span>
                  <div className="experience-period">
                    <FiCalendar />
                    <span>{item.period}</span>
                  </div>
                </div>
                <h3 className="experience-company">{item.company}</h3>
                <p className="experience-role">{item.position}</p>
              </div>
            </div>

            <p className="experience-summary-text">{item.summary}</p>

            <div className="experience-achievements-preview">
              <span className="meta-subheading">Key Highlights:</span>
              <ul className="mini-bullet-list">
                {item.achievements.slice(0, 2).map((achievement, idx) => (
                  <li key={idx}>
                    <FiCheckCircle className="bullet-icon" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="experience-footer">
              <div className="skill-chip-wrap">
                {item.tech.slice(0, 3).map((t) => (
                  <span key={t} className="skill-pill pill-subtle">
                    {t}
                  </span>
                ))}
                {item.tech.length > 3 && (
                  <span className="skill-pill pill-muted">+{item.tech.length - 3}</span>
                )}
              </div>

              <button
                type="button"
                className="btn-text-link"
                onClick={(e) => {
                  e.stopPropagation()
                  onOpenExperience(item)
                }}
              >
                <span>View Detail</span>
                <FaArrowRightLong />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

