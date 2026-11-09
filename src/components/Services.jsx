import { useRef, useState } from 'react'
import { FiChevronLeft, FiChevronRight, FiLayers } from 'react-icons/fi'
import { SERVICES } from '../data/portfolioData.js'

export default function Services() {
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
    <section id="services" className="section-card reveal">
      <div className="section-head-flex">
        <div className="section-header">
          <div className="section-tag-pill">
            <FiLayers />
            <span>Creative Solutions</span>
          </div>
          <h2 className="section-title">What I Do</h2>
          <p className="section-subtitle">
            Layanan kreatif terpadu untuk membangun citra visual brand yang berkarakter, konsisten, dan memikat audiens sasaran.
          </p>
        </div>

        <div className="slider-controls" aria-label="Navigasi Slider Layanan">
          <button
            type="button"
            className="slider-arrow-btn"
            onClick={() => handleScroll(-1)}
            disabled={!canScrollLeft}
            aria-label="Layanan sebelumnya"
          >
            <FiChevronLeft />
          </button>
          <button
            type="button"
            className="slider-arrow-btn"
            onClick={() => handleScroll(1)}
            disabled={!canScrollRight}
            aria-label="Layanan berikutnya"
          >
            <FiChevronRight />
          </button>
        </div>
      </div>

      <div
        className="carousel-track service-track"
        ref={trackRef}
        onScroll={checkScroll}
        tabIndex={0}
        aria-label="Daftar Layanan"
      >
        {SERVICES.map((service, index) => {
          const ServiceIcon = service.icon
          return (
            <article
              key={service.id}
              className="service-card bento-card"
              style={{ '--delay': `${index * 70}ms` }}
            >
              <div className="service-icon-box">
                <ServiceIcon />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>

              <div className="service-outcomes">
                <span className="outcomes-label">Key Deliverables</span>
                <div className="skill-chip-wrap">
                  {service.outcomes.map((item) => (
                    <span key={item} className="skill-pill pill-subtle">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

