import { useEffect, useRef, useState } from 'react'
import {
  FiAward,
  FiBookOpen,
  FiBriefcase,
  FiCpu,
  FiDownload,
  FiExternalLink,
  FiFolder,
  FiGrid,
  FiHome,
  FiLayers,
  FiMail,
  FiMenu,
  FiUser,
  FiX,
} from 'react-icons/fi'
import { DRIVE_PORTFOLIO_URL } from '../data/portfolioData.js'
import ThemeToggle from './ThemeToggle.jsx'

// Primary quick-dock navigation items
const PRIMARY_DOCK_ITEMS = [
  { href: '#home', id: 'home', label: 'Home', icon: FiHome },
  { href: '#about', id: 'about', label: 'About', icon: FiUser },
  { href: '#skills', id: 'skills', label: 'Skills', icon: FiCpu, hideOnMobile: true },
  { href: '#services', id: 'services', label: 'Services', icon: FiLayers, hideOnMobile: true },
  { href: '#experience', id: 'experience', label: 'Experience', icon: FiBriefcase },
  { href: '#projects', id: 'projects', label: 'Projects', icon: FiGrid },
  { href: '#contact', id: 'contact', label: 'Contact', icon: FiMail },
]

// Complete list of all sections for the floating drop-up popover menu
const ALL_SECTIONS = [
  { href: '#home', id: 'home', label: 'Home', icon: FiHome, desc: 'Intro & ringkasan' },
  { href: '#about', id: 'about', label: 'About Me', icon: FiUser, desc: 'Profil profesional' },
  { href: '#skills', id: 'skills', label: 'Skills & Tools', icon: FiCpu, desc: 'Keahlian & kompetensi' },
  { href: '#services', id: 'services', label: 'What I Do', icon: FiLayers, desc: 'Layanan kreatif' },
  { href: '#experience', id: 'experience', label: 'Work History', icon: FiBriefcase, desc: 'Pengalaman kerja' },
  { href: '#education', id: 'education', label: 'Education', icon: FiBookOpen, desc: 'Latar akademik' },
  { href: '#certifications', id: 'certifications', label: 'Certificates', icon: FiAward, desc: 'Sertifikasi resmi' },
  { href: '#projects', id: 'projects', label: 'Projects Gallery', icon: FiGrid, desc: 'Koleksi portofolio' },
  { href: '#contact', id: 'contact', label: 'Get In Touch', icon: FiMail, desc: 'Kontak & kolaborasi' },
]

export default function Navbar({
  theme,
  toggleTheme,
  activeSection,
}) {
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const popoverRef = useRef(null)
  const triggerRef = useRef(null)

  // Track top scroll for header styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on click outside or Escape
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isMenuOpen &&
        popoverRef.current &&
        !popoverRef.current.contains(e.target) &&
        triggerRef.current &&
        !triggerRef.current.contains(e.target)
      ) {
        setIsMenuOpen(false)
      }
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isMenuOpen])

  const handleNavClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      {/* =================================================================
          TOP MINIMAL HEADER (Brand, ThemeToggle, Resume CTA)
          Zero crowded text links -> No collision on any screen size!
         ================================================================= */}
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="site-header-inner">
          <a href="#home" className="brand" aria-label="Kamilah Dwianti Portfolio">
            <span className="brand-badge">KD</span>
            <div className="brand-text">
              <span className="brand-name">Kamilah</span>
              <span className="brand-sub">Portfolio</span>
            </div>
            <span className="brand-status-dot" title="Available for projects" />
          </a>

          <div className="header-actions">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

            <a
              href="/assets/CV-ATS-KAMILAH-DWIANTI.pdf"
              className="btn btn-nav-cta"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download CV ATS"
            >
              <FiDownload />
              <span className="btn-nav-cta-text">Resume ATS</span>
            </a>
          </div>
        </div>
      </header>

      {/* Backdrop overlay for drop-up menu */}
      {isMenuOpen && (
        <div
          className="dock-popover-backdrop"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* =================================================================
          FLOATING BOTTOM DOCK NAVIGATION
          Fit, tegas, mengisi bottom layar secara proporsional dengan celah melayang
         ================================================================= */}
      <nav
        className={`floating-dock-nav ${isMenuOpen ? 'menu-open' : ''}`}
        aria-label="Navigasi Melayang"
      >
        <div className="floating-dock-wrap">
          {/* Floating Drop-up Popover Card Menu */}
          <div
            id="floating-dock-popover"
            ref={popoverRef}
            className={`dock-popover-menu ${isMenuOpen ? 'open' : ''}`}
            aria-hidden={!isMenuOpen}
          >
            <div className="popover-header">
              <div className="popover-header-title-box">
                <span className="popover-tag">Navigasi Portofolio</span>
                <p className="popover-title">Jelajahi Seluruh Bagian</p>
              </div>
              <button
                type="button"
                className="popover-close-btn"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Tutup menu"
              >
                <FiX />
              </button>
            </div>

            <div className="popover-grid">
              {ALL_SECTIONS.map((sec) => {
                const isActive = activeSection === sec.id
                const Icon = sec.icon
                return (
                  <a
                    key={sec.id}
                    href={sec.href}
                    className={`popover-item ${isActive ? 'active' : ''}`}
                    onClick={handleNavClick}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <div className="popover-item-icon">
                      <Icon />
                    </div>
                    <div className="popover-item-info">
                      <span className="popover-item-label">{sec.label}</span>
                      <span className="popover-item-desc">{sec.desc}</span>
                    </div>
                    {isActive && <span className="popover-active-indicator">Aktif</span>}
                  </a>
                )
              })}
            </div>

            <div className="popover-footer">
              <a
                href="/assets/CV-ATS-KAMILAH-DWIANTI.pdf"
                className="btn btn-secondary btn-sm"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavClick}
              >
                <FiDownload />
                <span>Resume PDF</span>
              </a>

              <a
                href={DRIVE_PORTFOLIO_URL}
                className="btn btn-primary btn-sm"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavClick}
              >
                <FiFolder />
                <span>Google Drive</span>
                <FiExternalLink />
              </a>
            </div>
          </div>

          {/* Bottom Dock Bar */}
          <div className="floating-dock-inner">
            {PRIMARY_DOCK_ITEMS.map((item) => {
              const isActive = activeSection === item.id
              const Icon = item.icon
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`dock-btn ${isActive ? 'active' : ''} ${
                    item.hideOnMobile ? 'hide-mobile' : ''
                  }`}
                  aria-label={item.label}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={handleNavClick}
                >
                  <span className="dock-icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <span className="dock-label">{item.label}</span>
                </a>
              )
            })}

            {/* Menu Trigger Button */}
            <button
              ref={triggerRef}
              type="button"
              className={`dock-btn dock-menu-btn ${isMenuOpen ? 'active' : ''}`}
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label={isMenuOpen ? 'Tutup semua menu' : 'Buka semua menu'}
              aria-expanded={isMenuOpen}
              aria-controls="floating-dock-popover"
            >
              <span className="dock-icon" aria-hidden="true">
                {isMenuOpen ? <FiX /> : <FiMenu />}
              </span>
              <span className="dock-label">{isMenuOpen ? 'Tutup' : 'Menu'}</span>
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}
