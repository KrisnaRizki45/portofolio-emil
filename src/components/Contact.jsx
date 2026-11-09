import {
  FaArrowRightLong,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from 'react-icons/fa6'
import {
  FiDownload,
  FiExternalLink,
  FiFolder,
  FiMail,
  FiMessageSquare,
  FiSend,
} from 'react-icons/fi'
import { DRIVE_PORTFOLIO_URL } from '../data/portfolioData.js'

export default function Contact() {
  const contactChannels = [
    {
      platform: 'Instagram',
      handle: '@kamilahdwnt_',
      url: 'https://www.instagram.com/kamilahdwnt_?igsh=b21raHpqdW15aTg%3D&utm_source=qr&wa_status_inline=true',
      icon: FaInstagram,
      color: '#E4405F',
      action: 'Follow & DM',
    },
    {
      platform: 'TikTok',
      handle: '@kmlhdwnt',
      url: 'https://www.tiktok.com/@kmlhdwnt?_r=1&_t=ZS-97f94Vd3845',
      icon: FaTiktok,
      color: '#00f2fe',
      action: 'Lihat Konten',
    },
    {
      platform: 'LinkedIn',
      handle: 'Kamilah Dwianti',
      url: 'https://www.linkedin.com/in/kamilah-dwianti-8b992a377/',
      icon: FaLinkedinIn,
      color: '#0A66C2',
      action: 'Connect on LinkedIn',
    },
    {
      platform: 'Email Langsung',
      handle: 'kamilahdwi3@gmail.com',
      url: 'mailto:kamilahdwi3@gmail.com',
      icon: FiMail,
      color: '#EA4335',
      action: 'Kirim Email',
    },
  ]

  return (
    <section id="contact" className="section-card reveal contact-section">
      <div className="section-header text-center">
        <div className="section-tag-pill">
          <FiMessageSquare />
          <span>Get In Touch</span>
        </div>
        <h2 className="section-title">Let&apos;s Build Impactful Content Together</h2>
        <p className="section-subtitle centered-subtitle">
          Terbuka untuk kesempatan freelance content creation, kontrak sosial media brand, kampanye visual digital marketing, maupun kerja sama tim kreatif.
        </p>
      </div>

      <div className="contact-main-grid">
        <div className="contact-cta-card">
          <div className="cta-highlight-badge">
            <span className="pulsing-green-dot" />
            <span>Open for Work & Collaborations</span>
          </div>
          <h3 className="cta-card-title">Siap Meningkatkan Visual Brand Anda?</h3>
          <p className="cta-card-desc">
            Hubungi saya secara langsung untuk mendiskusikan konsep visual, strategi konten, atau tinjauan materi portofolio lengkap melalui email dan platform sosial.
          </p>

          <div className="contact-button-group">
            <a
              href="mailto:kamilahdwi3@gmail.com"
              className="btn btn-primary btn-lg"
              title="Kirim email ke Kamilah Dwianti"
            >
              <FiSend />
              <span>Send Direct Email</span>
            </a>

            <a
              href="/assets/CV-ATS-KAMILAH-DWIANTI.pdf"
              className="btn btn-secondary btn-lg"
              target="_blank"
              rel="noopener noreferrer"
              title="Download CV ATS"
            >
              <FiDownload />
              <span>Download CV ATS</span>
            </a>

            <a
              href={DRIVE_PORTFOLIO_URL}
              className="btn btn-tertiary btn-lg"
              target="_blank"
              rel="noopener noreferrer"
              title="Akses Google Drive Portofolio Lengkap"
            >
              <FiFolder />
              <span>Google Drive Portfolio</span>
              <FiExternalLink />
            </a>
          </div>
        </div>

        <div className="social-channels-grid">
          {contactChannels.map((c) => {
            const Icon = c.icon
            return (
              <a
                key={c.platform}
                href={c.url}
                className="social-channel-card"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Hubungi melalui ${c.platform}`}
              >
                <div className="social-icon-wrapper" style={{ color: c.color }}>
                  <Icon />
                </div>
                <div className="social-channel-info">
                  <span className="social-platform-name">{c.platform}</span>
                  <span className="social-channel-handle">{c.handle}</span>
                </div>
                <div className="social-action-arrow">
                  <FaArrowRightLong />
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

