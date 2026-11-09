import { useState } from 'react'
import {
  FiCalendar,
  FiExternalLink,
  FiFolder,
  FiGrid,
  FiImage,
  FiInfo,
  FiUser,
} from 'react-icons/fi'
import {
  DRIVE_PORTFOLIO_URL,
  PROJECT_FILTERS,
  PROJECTS,
} from '../data/portfolioData.js'

export default function Projects({ onOpenProject }) {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredProjects =
    selectedCategory === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory)

  return (
    <section id="projects" className="section-card reveal">
      <div className="section-head-flex">
        <div className="section-header">
          <div className="section-tag-pill">
            <FiFolder />
            <span>Creative Showcase</span>
          </div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Karya terpilih yang mencakup pembuatan konten harian MS GLOW, edukasi konstruksi Arsa Dalu, dan kampanye promosi pariwisata.
          </p>
        </div>

        {/* Global Google Drive link button as required by master prompt */}
        <a
          href={DRIVE_PORTFOLIO_URL}
          className="btn btn-secondary btn-drive-banner"
          target="_blank"
          rel="noopener noreferrer"
          title="Buka Google Drive Portfolio Selengkapnya"
        >
          <FiFolder className="drive-btn-icon" />
          <span>Lihat Selengkapnya di Google Drive</span>
          <FiExternalLink />
        </a>
      </div>

      {/* Category Filters */}
      <div className="project-filter-bar" role="tablist" aria-label="Filter kategori project">
        {PROJECT_FILTERS.map((filter) => {
          const isActive = selectedCategory === filter.value
          return (
            <button
              key={filter.value}
              type="button"
              className={`filter-pill-btn ${isActive ? 'active' : ''}`}
              role="tab"
              aria-selected={isActive}
              onClick={() => setSelectedCategory(filter.value)}
            >
              <span>{filter.label}</span>
              {filter.value === 'all' ? (
                <span className="filter-count">{PROJECTS.length}</span>
              ) : (
                <span className="filter-count">
                  {PROJECTS.filter((p) => p.category === filter.value).length}
                </span>
              )}
            </button>
          )
        })}
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <article
            key={project.slug}
            className="project-card bento-card"
            style={{ '--delay': `${index * 100}ms` }}
          >
            {/* Project Image Banner with overlay */}
            <div
              className="project-image-box"
              onClick={() => onOpenProject(project, 'gallery')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter') onOpenProject(project, 'gallery')
              }}
              title="Klik untuk membuka galeri foto"
            >
              <img
                src={project.cover}
                alt={`Cover project ${project.title}`}
                className="project-cover-img"
                loading="lazy"
                decoding="async"
              />
              <div className="project-image-badges">
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

              {project.images.length > 0 && (
                <div className="image-counter-pill">
                  <FiImage />
                  <span>{project.images.length} Photos</span>
                </div>
              )}
            </div>

            {/* Project Info */}
            <div className="project-details-body">
              <div className="project-header-row">
                <h3 className="project-name">{project.title}</h3>
              </div>

              <p className="project-excerpt">{project.description}</p>

              {/* Meta items: Role & Period */}
              <div className="project-meta-row">
                <div className="meta-item">
                  <FiUser className="meta-icon" />
                  <div>
                    <span className="meta-label">Role</span>
                    <span className="meta-val">{project.role}</span>
                  </div>
                </div>
                <div className="meta-item">
                  <FiCalendar className="meta-icon" />
                  <div>
                    <span className="meta-label">Timeline</span>
                    <span className="meta-val">{project.period}</span>
                  </div>
                </div>
              </div>

              {/* Tech Stack Chips */}
              <div className="project-tech-box">
                <span className="meta-label">Tools & Platform</span>
                <div className="skill-chip-wrap">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="skill-pill pill-subtle">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="project-tags-wrap">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag-chip">
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="project-action-buttons">
                <button
                  type="button"
                  className="btn btn-secondary btn-card-action"
                  onClick={() => onOpenProject(project, 'detail')}
                  aria-label={`Lihat detail lengkap ${project.title}`}
                >
                  <FiInfo />
                  <span>View Detail</span>
                </button>

                <button
                  type="button"
                  className="btn btn-primary btn-card-action"
                  onClick={() => onOpenProject(project, 'gallery')}
                  aria-label={`Buka galeri ${project.title}`}
                >
                  <FiImage />
                  <span>View Gallery</span>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

