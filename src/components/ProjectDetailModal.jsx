import { useEffect, useRef, useState } from 'react'
import {
  FiCalendar,
  FiCheckCircle,
  FiChevronLeft,
  FiChevronRight,
  FiExternalLink,
  FiFolder,
  FiImage,
  FiInfo,
  FiMaximize2,
  FiMinimize2,
  FiUser,
  FiX,
  FiZoomIn,
  FiZoomOut,
} from 'react-icons/fi'
import { DRIVE_PORTFOLIO_URL } from '../data/portfolioData.js'

export default function ProjectDetailModal({
  project,
  initialTab = 'detail',
  onClose,
  onNextProject,
  onPrevProject,
}) {
  const [activeTab, setActiveTab] = useState(initialTab)
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [zoom, setZoom] = useState(1)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const stageRef = useRef(null)
  const touchStartXRef = useRef(null)

  const images = project?.images || []
  const currentImage = images[activeImageIndex] || project?.banner

  // Fullscreen state listener
  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement))
    }
    document.addEventListener('fullscreenchange', handleFsChange)
    return () => document.removeEventListener('fullscreenchange', handleFsChange)
  }, [])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (document.fullscreenElement) {
          document.exitFullscreen().catch(() => {})
        } else {
          onClose()
        }
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        if (activeTab === 'gallery' && images.length > 1) {
          setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length)
        } else if (onPrevProject) {
          onPrevProject()
        }
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        if (activeTab === 'gallery' && images.length > 1) {
          setActiveImageIndex((prev) => (prev + 1) % images.length)
        } else if (onNextProject) {
          onNextProject()
        }
      } else if (e.key === '+' || e.key === '=') {
        e.preventDefault()
        setZoom((z) => Math.min(z + 0.25, 2.5))
      } else if (e.key === '-') {
        e.preventDefault()
        setZoom((z) => Math.max(z - 0.25, 1))
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeTab, images.length, onClose, onNextProject, onPrevProject])

  const toggleFullscreen = async () => {
    const el = stageRef.current
    if (!el) return
    if (document.fullscreenElement) {
      await document.exitFullscreen().catch(() => {})
    } else {
      await el.requestFullscreen?.().catch(() => {})
    }
  }

  // Touch Swipe for Mobile Gallery
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    if (touchStartXRef.current === null) return
    const diff = touchStartXRef.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        // Swiped left -> next
        setActiveImageIndex((prev) => (prev + 1) % images.length)
      } else {
        // Swiped right -> prev
        setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length)
      }
    }
    touchStartXRef.current = null
  }

  const driveLink = project.portfolioUrl || DRIVE_PORTFOLIO_URL

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} detail modal`}
      onClick={onClose}
    >
      <div className="modal-shell project-modal-shell" onClick={(e) => e.stopPropagation()}>
        {/* Modal Top Header Bar */}
        <div className="modal-header-bar">
          <div className="modal-header-left">
            <div className="modal-badge-row">
              <span className="category-pill">{project.categoryLabel}</span>
              <span
                className={`status-pill ${
                  project.status === 'Ongoing' ? 'status-ongoing' : 'status-completed'
                }`}
              >
                <span className="status-dot" />
                {project.status}
              </span>
            </div>
            <h2 className="modal-title">{project.title}</h2>
          </div>

          {/* Modal Tabs and Controls */}
          <div className="modal-header-controls">
            <div className="modal-tabs" role="tablist">
              <button
                type="button"
                className={`modal-tab-btn ${activeTab === 'detail' ? 'active' : ''}`}
                onClick={() => setActiveTab('detail')}
                role="tab"
                aria-selected={activeTab === 'detail'}
              >
                <FiInfo />
                <span>Detail</span>
              </button>
              <button
                type="button"
                className={`modal-tab-btn ${activeTab === 'gallery' ? 'active' : ''}`}
                onClick={() => setActiveTab('gallery')}
                role="tab"
                aria-selected={activeTab === 'gallery'}
              >
                <FiImage />
                <span>Gallery ({images.length})</span>
              </button>
            </div>

            {/* Project Prev/Next Switchers */}
            <div className="modal-project-arrows" aria-label="Navigasi antar project">
              <button
                type="button"
                className="modal-icon-btn"
                onClick={onPrevProject}
                title="Project Sebelumnya"
                aria-label="Project Sebelumnya"
              >
                <FiChevronLeft />
              </button>
              <button
                type="button"
                className="modal-icon-btn"
                onClick={onNextProject}
                title="Project Selanjutnya"
                aria-label="Project Selanjutnya"
              >
                <FiChevronRight />
              </button>
            </div>

            {/* Close Button */}
            <button
              type="button"
              className="modal-close-btn"
              onClick={onClose}
              aria-label="Tutup jendela modal"
              title="Tutup (Esc)"
            >
              <FiX />
            </button>
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="modal-body-scrollable">
          {activeTab === 'detail' ? (
            <div className="project-detail-layout">
              {/* Media Banner */}
              <div className="detail-hero-media">
                <img
                  src={project.banner}
                  alt={project.title}
                  className="detail-hero-img"
                  loading="lazy"
                />
                <div className="detail-media-gradient-overlay">
                  <div className="detail-overlay-info">
                    <p className="detail-overlay-role">{project.role}</p>
                    <p className="detail-overlay-period">{project.period}</p>
                  </div>
                  {images.length > 1 && (
                    <button
                      type="button"
                      className="btn btn-secondary btn-sm"
                      onClick={() => setActiveTab('gallery')}
                    >
                      <FiImage />
                      <span>Lihat Semua {images.length} Foto</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Main Summary */}
              <div className="detail-section-box">
                <h3 className="detail-block-title">Tentang Project</h3>
                <p className="detail-desc-text">{project.description}</p>

                <div className="detail-meta-pills-row">
                  <div className="meta-pill-item">
                    <FiUser className="pill-icon" />
                    <span>Role: <strong>{project.role}</strong></span>
                  </div>
                  <div className="meta-pill-item">
                    <FiCalendar className="pill-icon" />
                    <span>Timeline: <strong>{project.period}</strong></span>
                  </div>
                </div>
              </div>

              {/* Detailed Grid: Responsibilities, Tech, Features */}
              <div className="detail-columns-grid">
                {/* Responsibilities */}
                <div className="detail-panel-card">
                  <h4 className="panel-title">Tanggung Jawab Utama</h4>
                  <ul className="detail-bullet-list">
                    {project.responsibilities.map((resp, idx) => (
                      <li key={idx}>
                        <FiCheckCircle className="check-bullet" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Features */}
                <div className="detail-panel-card">
                  <h4 className="panel-title">Key Features & Output</h4>
                  <ul className="detail-bullet-list">
                    {project.features.map((feature, idx) => (
                      <li key={idx}>
                        <FiCheckCircle className="check-bullet" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="detail-panel-card">
                  <h4 className="panel-title">Technology & Tools</h4>
                  <div className="skill-chip-wrap">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="skill-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Workflow Timeline */}
                <div className="detail-panel-card">
                  <h4 className="panel-title">Workflow / Timeline</h4>
                  <div className="workflow-steps-chain">
                    {project.timeline.map((step, idx) => (
                      <div key={idx} className="workflow-node">
                        <span className="step-num">{idx + 1}</span>
                        <span className="step-name">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Challenges */}
                <div className="detail-panel-card">
                  <h4 className="panel-title">Tantangan (Challenges)</h4>
                  <ul className="detail-bullet-list">
                    {project.challenges.map((c, idx) => (
                      <li key={idx}>
                        <span className="bullet-dash">•</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solutions */}
                <div className="detail-panel-card">
                  <h4 className="panel-title">Solusi & Pendekatan</h4>
                  <ul className="detail-bullet-list">
                    {project.solutions.map((s, idx) => (
                      <li key={idx}>
                        <FiCheckCircle className="check-bullet text-success" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Complete Google Drive Portfolio Callout as required by Section 15 */}
              <div className="detail-drive-callout">
                <div className="drive-callout-text">
                  <div className="drive-icon-badge">
                    <FiFolder />
                  </div>
                  <div>
                    <h4 className="drive-callout-title">Dokumentasi Portofolio Lengkap</h4>
                    <p className="drive-callout-sub">
                      Akses file mentah, video promosi, desain etalase, dan bukti karya lengkap di Google Drive resmi.
                    </p>
                  </div>
                </div>
                <a
                  href={driveLink}
                  className="btn btn-primary btn-drive-cta"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Buka folder Google Drive portofolio"
                >
                  <span>Selengkapnya</span>
                  <FiExternalLink />
                </a>
              </div>

              {/* Quick Thumbnail Strip */}
              {images.length > 0 && (
                <div className="detail-thumbnails-preview">
                  <span className="meta-subheading">Galeri Karya ({images.length} Aset):</span>
                  <div className="thumbs-row">
                    {images.map((img, idx) => (
                      <button
                        key={idx}
                        type="button"
                        className="thumb-card-btn"
                        onClick={() => {
                          setActiveImageIndex(idx)
                          setActiveTab('gallery')
                        }}
                        aria-label={`Buka foto ke-${idx + 1}`}
                      >
                        <img src={img} alt={`Preview ${idx + 1}`} loading="lazy" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Interactive Gallery Tab */
            <div className="gallery-layout">
              {/* Gallery Controls Header */}
              <div className="gallery-toolbar">
                <div className="gallery-counter">
                  <span>Foto {activeImageIndex + 1} dari {images.length}</span>
                </div>

                <div className="gallery-zoom-actions">
                  <button
                    type="button"
                    className="gallery-tool-btn"
                    onClick={() => setZoom((z) => Math.max(1, z - 0.25))}
                    disabled={zoom <= 1}
                    aria-label="Perkecil zoom"
                    title="Perkecil (-)"
                  >
                    <FiZoomOut />
                  </button>
                  <span className="zoom-percentage">{Math.round(zoom * 100)}%</span>
                  <button
                    type="button"
                    className="gallery-tool-btn"
                    onClick={() => setZoom((z) => Math.min(2.5, z + 0.25))}
                    disabled={zoom >= 2.5}
                    aria-label="Perbesar zoom"
                    title="Perbesar (+)"
                  >
                    <FiZoomIn />
                  </button>
                  <button
                    type="button"
                    className="gallery-tool-btn"
                    onClick={toggleFullscreen}
                    aria-label="Layar Penuh"
                    title="Layar Penuh"
                  >
                    {isFullscreen ? <FiMinimize2 /> : <FiMaximize2 />}
                  </button>
                </div>
              </div>

              {/* Lightbox Main Stage */}
              <div
                className="gallery-stage"
                ref={stageRef}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                {images.length > 1 && (
                  <button
                    type="button"
                    className="stage-nav-arrow stage-prev"
                    onClick={() =>
                      setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length)
                    }
                    aria-label="Foto sebelumnya"
                    title="Foto sebelumnya (Panah Kiri)"
                  >
                    <FiChevronLeft />
                  </button>
                )}

                <div
                  className="stage-image-wrapper"
                  style={{ transform: `scale(${zoom})` }}
                  onDoubleClick={() => setZoom((z) => (z > 1 ? 1 : 1.75))}
                >
                  <img
                    src={currentImage}
                    alt={`${project.title} - Asset ${activeImageIndex + 1}`}
                    className="stage-image"
                    loading="eager"
                  />
                </div>

                {images.length > 1 && (
                  <button
                    type="button"
                    className="stage-nav-arrow stage-next"
                    onClick={() => setActiveImageIndex((prev) => (prev + 1) % images.length)}
                    aria-label="Foto berikutnya"
                    title="Foto berikutnya (Panah Kanan)"
                  >
                    <FiChevronRight />
                  </button>
                )}
              </div>

              {/* Gallery Thumbnails Strip */}
              <div className="gallery-thumbs-strip" role="tablist" aria-label="Thumbnail galeri">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`gallery-thumb-item ${idx === activeImageIndex ? 'active' : ''}`}
                    onClick={() => {
                      setActiveImageIndex(idx)
                      setZoom(1)
                    }}
                    role="tab"
                    aria-selected={idx === activeImageIndex}
                    aria-label={`Tampilkan foto ${idx + 1}`}
                  >
                    <img src={img} alt="" loading="lazy" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
