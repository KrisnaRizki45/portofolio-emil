import {
  FiBookOpen,
  FiCalendar,
  FiCheckCircle,
  FiCompass,
} from 'react-icons/fi'
import { EDUCATION } from '../data/portfolioData.js'

export default function Education() {
  return (
    <section id="education" className="section-card reveal">
      <div className="section-header">
        <div className="section-tag-pill">
          <FiBookOpen />
          <span>Academic Background</span>
        </div>
        <h2 className="section-title">Education & Qualifications</h2>
        <p className="section-subtitle">
          Fondasi akademik yang memadukan keahlian pelayanan profesional dengan wawasan strategi bisnis digital.
        </p>
      </div>

      <div className="education-grid">
        {EDUCATION.map((edu, index) => (
          <article
            key={edu.school}
            className="education-card bento-card"
            style={{ '--delay': `${index * 80}ms` }}
          >
            <div className="education-top">
              <div className="school-mark-box">
                <span className="school-mark">{edu.schoolMark}</span>
              </div>
              <div className="education-heading-block">
                <div className="education-period-badge">
                  <FiCalendar />
                  <span>{edu.year}</span>
                </div>
                <h3 className="education-school">{edu.school}</h3>
                <p className="education-major">
                  <FiCompass className="major-icon" />
                  <span>{edu.major}</span>
                </p>
              </div>
            </div>

            <p className="education-desc">{edu.description}</p>

            <div className="education-achievements">
              <span className="meta-subheading">Key Focus & Competencies:</span>
              <ul className="bullet-list">
                {edu.achievements.map((item, idx) => (
                  <li key={idx}>
                    <FiCheckCircle className="bullet-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

