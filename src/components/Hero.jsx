import {
  FaArrowRightLong,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from 'react-icons/fa6'
import {
  FiBriefcase,
  FiDownload,
  FiExternalLink,
  FiFolder,
  FiLayers,
  FiStar,
} from 'react-icons/fi'
import { DRIVE_PORTFOLIO_URL, SUMMARY_PARAGRAPHS } from '../data/portfolioData.js'

export default function Hero() {
  return (
    <section id="home" className="hero-section reveal">
      <div className="hero-glow hero-glow-1" aria-hidden="true" />
      <div className="hero-glow hero-glow-2" aria-hidden="true" />

      <div className="hero-grid">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            <FiStar className="hero-badge-icon" />
            <span>Content Creator & Visual Specialist</span>
          </div>

          <h1 className="hero-title">
            Hey, I&apos;m <span className="gradient-text">Kamilah Dwianti</span>
          </h1>

          <p className="hero-subtitle">
            Creative Content Planning, Aesthetic Visual Branding & Dynamic Video Storytelling
          </p>

          <div className="hero-bio">
            {SUMMARY_PARAGRAPHS.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Key Metrics / Highlights */}
          <div className="hero-metrics">
            <div className="metric-card">
              <span className="metric-number">4+</span>
              <span className="metric-label">Brand Collabs</span>
            </div>
            <div className="metric-card">
              <span className="metric-number">100+</span>
              <span className="metric-label">Creative Assets</span>
            </div>
            <div className="metric-card">
              <span className="metric-number">UTB</span>
              <span className="metric-label">S1 Digital Business</span>
            </div>
            <div className="metric-card">
              <span className="metric-number">90%+</span>
              <span className="metric-label">Client Satisfaction</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary btn-lg">
              <span>View Projects</span>
              <FaArrowRightLong />
            </a>

            <a
              href="/assets/CV-ATS-KAMILAH-DWIANTI.pdf"
              className="btn btn-secondary btn-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiDownload />
              <span>Download CV</span>
            </a>

            <a
              href={DRIVE_PORTFOLIO_URL}
              className="btn btn-tertiary btn-lg"
              target="_blank"
              rel="noopener noreferrer"
              title="Buka Google Drive Portofolio Lengkap"
            >
              <FiFolder />
              <span>Google Drive</span>
              <FiExternalLink />
            </a>
          </div>

          {/* Social Links */}
          <div className="hero-social-wrap">
            <span className="hero-social-label">Connect:</span>
            <div className="hero-social-links" aria-label="Media Sosial">
              <a
                href="https://www.instagram.com/kamilahdwnt_?igsh=b21raHpqdW15aTg%3D&utm_source=qr&wa_status_inline=true"
                aria-label="Kunjungi profil Instagram Kamilah Dwianti"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.tiktok.com/@kmlhdwnt?_r=1&_t=ZS-97f94Vd3845"
                aria-label="Kunjungi profil TikTok Kamilah Dwianti"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
              >
                <FaTiktok />
              </a>
              <a
                href="https://www.linkedin.com/in/kamilah-dwianti-8b992a377/"
                aria-label="Kunjungi profil LinkedIn Kamilah Dwianti"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Hero Photo / Visual Card */}
        <div className="hero-visual">
          <div className="hero-photo-container">
            <div className="hero-photo-ring outer-ring" aria-hidden="true" />
            <div className="hero-photo-ring inner-ring" aria-hidden="true" />
            
            <div className="hero-avatar-frame">
              <img
                src="/assets/paspoto-emil.jpeg"
                alt="Foto Profil Kamilah Dwianti"
                className="hero-avatar-img"
                loading="eager"
                decoding="async"
                width="340"
                height="340"
              />
            </div>

            {/* Floating Badges */}
            <div className="hero-floating-card floating-card-top">
              <div className="floating-card-icon icon-primary">
                <FiBriefcase />
              </div>
              <div className="floating-card-text">
                <span className="floating-title">Active Role</span>
                <span className="floating-desc">MS GLOW Content Creator</span>
              </div>
            </div>

            <div className="hero-floating-card floating-card-bottom">
              <div className="floating-card-icon icon-accent">
                <FiLayers />
              </div>
              <div className="floating-card-text">
                <span className="floating-title">Multi-Platform</span>
                <span className="floating-desc">TikTok • Reels • Shopee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
