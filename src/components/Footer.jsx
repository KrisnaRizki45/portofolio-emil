import {
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from 'react-icons/fa6'
import { FiArrowUp, FiHeart } from 'react-icons/fi'
import { DRIVE_PORTFOLIO_URL } from '../data/portfolioData.js'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="footer-top-row">
          <div className="footer-brand-col">
            <a href="#home" className="brand" aria-label="Kamilah Portfolio">
              <span className="brand-badge">KD</span>
              <div className="brand-text">
                <span className="brand-name">Kamilah</span>
                <span className="brand-sub">Portfolio</span>
              </div>
            </a>
            <p className="footer-bio">
              Content Creator yang berdedikasi menciptakan karya visual estetik, konten edukatif, dan customer experience yang berkesan.
            </p>
          </div>

          <div className="footer-nav-col">
            <span className="footer-heading">Navigation</span>
            <ul className="footer-links-list">
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-external-col">
            <span className="footer-heading">Resources</span>
            <ul className="footer-links-list">
              <li>
                <a href="/assets/CV-ATS-KAMILAH-DWIANTI.pdf" target="_blank" rel="noopener noreferrer">
                  Download CV (PDF)
                </a>
              </li>
              <li>
                <a href={DRIVE_PORTFOLIO_URL} target="_blank" rel="noopener noreferrer">
                  Google Drive Portfolio
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/kamilahdwnt_?igsh=b21raHpqdW15aTg%3D&utm_source=qr&wa_status_inline=true"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram Feed
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom-row">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Kamilah Dwianti. Crafted with passion & precision.
          </p>

          <div className="footer-social-row">
            <a
              href="https://www.instagram.com/kamilahdwnt_?igsh=b21raHpqdW15aTg%3D&utm_source=qr&wa_status_inline=true"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.tiktok.com/@kmlhdwnt?_r=1&_t=ZS-97f94Vd3845"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <FaTiktok />
            </a>
            <a
              href="https://www.linkedin.com/in/kamilah-dwianti-8b992a377/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>

          <button
            type="button"
            className="footer-back-to-top"
            onClick={scrollToTop}
            aria-label="Kembali ke atas halaman"
          >
            {/* <span>Back to Top</span> */}
            {/* <FiArrowUp /> */}
          </button>
        </div>
      </div>
    </footer>
  )
}

