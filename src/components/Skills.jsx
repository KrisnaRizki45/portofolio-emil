import { useRef, useState } from 'react'
import { FiChevronLeft, FiChevronRight, FiCpu } from 'react-icons/fi'
import { SKILL_GROUPS } from '../data/portfolioData.js'

export default function Skills() {
  const trackRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    const el = trackRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 10)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10)
  }

  const handleScroll = (direction) => {
    const el = trackRef.current
    if (!el) return
    const card = el.firstElementChild
    const step = card ? card.getBoundingClientRect().width + 16 : 320
    el.scrollBy({ left: direction * step, behavior: 'smooth' })
    setTimeout(checkScroll, 300)
  }

  return (
    <section id="skills" className="section-card reveal">
      <div className="section-head-flex">
        <div className="section-header">
          <div className="section-tag-pill">
            <FiCpu />
            <span>Core Competencies</span>
          </div>
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            Keahlian praktis yang diasah melalui berbagai proyek konten visual, kampanye brand, dan pengelolaan media sosial.
          </p>
        </div>

        <div className="slider-controls" aria-label="Navigasi Slider Skill">
          <button
            type="button"
            className="slider-arrow-btn"
            onClick={() => handleScroll(-1)}
            disabled={!canScrollLeft}
            aria-label="Geser ke kiri"
          >
            <FiChevronLeft />
          </button>
          <button
            type="button"
            className="slider-arrow-btn"
            onClick={() => handleScroll(1)}
            disabled={!canScrollRight}
            aria-label="Geser ke kanan"
          >
            <FiChevronRight />
          </button>
        </div>
      </div>

      <div
        className="carousel-track skills-track"
        ref={trackRef}
        onScroll={checkScroll}
        tabIndex={0}
        aria-label="Daftar Kategori Skill"
      >
        {SKILL_GROUPS.map((group, index) => {
          const GroupIcon = group.icon
          return (
            <article
              key={group.id}
              className="skill-card bento-card"
              style={{ '--delay': `${index * 60}ms` }}
            >
              <div className="skill-card-top">
                <div className="skill-icon-wrapper">
                  <GroupIcon />
                </div>
                <div className="skill-title-block">
                  <h3 className="skill-title">{group.title}</h3>
                  <div className="skill-bar-wrap" title={`Profisiensi: ${group.progress}%`}>
                    <div className="skill-bar-fill" style={{ width: `${group.progress}%` }} />
                  </div>
                </div>
                <span className="skill-percentage">{group.progress}%</span>
              </div>

              <div className="skill-chip-wrap">
                {group.items.map((item) => (
                  <span key={item} className="skill-pill">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

