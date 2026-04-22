import { useEffect, useMemo, useRef, useState } from 'react'
import './App.css'

function App() {
  const [pointer, setPointer] = useState({ x: 50, y: 30 })
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeSlide, setActiveSlide] = useState(0)
  const skillsTrackRef = useRef(null)
  const servicesTrackRef = useRef(null)

  const skills = useMemo(
    () => [
      'Desain Grafis Kreatif (Canva)',
      'Editing Video Mobile (CapCut)',
      'Content Planning & Scheduling',
      'Social Media Management (TikTok, Instagram, Shopee)',
      'Copywriting & Creative Storytelling',
      'Visual Branding & Aesthetic Feed Design',
      'Analisis Tren Media Sosial',
      'Digital Customer Experience',
      'Produksi Konten Harian (End-to-End)',
    ],
    [],
  )

  const services = useMemo(
    () => [
      {
        title: 'Social Media Management',
        desc: 'Perencanaan konten terstruktur untuk TikTok, Instagram, dan Shopee agar performa akun lebih konsisten.',
      },
      {
        title: 'Creative Design & Branding',
        desc: 'Pembuatan desain story, carousel, poster promo, dan visual feed yang estetik serta relevan dengan brand.',
      },
      {
        title: 'Video Production',
        desc: 'Produksi konten video dari ide, pengambilan footage, editing, hingga final upload untuk kebutuhan harian.',
      },
    ],
    [],
  )

  const experiences = useMemo(
    () => [
      {
        name: 'MS Glow Bandung',
        role: 'Content Creator (Kontrak)',
        date: 'Agustus 2025 - Sekarang',
        points: [
          'Menyusun content planner untuk seluruh platform media sosial.',
          'Membuat desain story harian, banner promo, dan etalase Shopee.',
          'Mengedit video kreatif untuk TikTok, Shopee Video, dan Instagram Reels.',
        ],
      },
      {
        name: 'Arsa Dalu Kreasi',
        role: 'Content Creator (Freelance)',
        date: 'Agustus 2025 - Desember 2025',
        points: [
          'Memproduksi video edukasi terkait konsultan proyek dan perizinan bangunan.',
          'Mendesain carousel edukatif dan poster hari besar dengan CTA yang jelas.',
          'Mengelola visual bertema konstruksi untuk meningkatkan brand awareness.',
        ],
      },
    ],
    [],
  )

  const projects = useMemo(
    () => [
      {
        title: 'Campaign Reels - Beauty Product',
        category: 'Video Content',
        image: '/assets/paspoto-emil.jpeg',
        images: [
          '/assets/paspoto-emil.jpeg',
          '/assets/paspoto-emil.jpeg',
          '/assets/paspoto-emil.jpeg',
        ],
        summary:
          'Konten video campaign untuk meningkatkan awareness dan engagement produk kecantikan.',
        details: [
          'Menyusun konsep dan alur storytelling video.',
          'Editing transisi dinamis dan subtitle agar retention lebih baik.',
          'Optimasi format video untuk TikTok dan Reels.',
        ],
      },
      {
        title: 'Desain Carousel Edukatif',
        category: 'Graphic Design',
        image: '/assets/paspoto-emil.jpeg',
        images: [
          '/assets/paspoto-emil.jpeg',
          '/assets/paspoto-emil.jpeg',
          '/assets/paspoto-emil.jpeg',
        ],
        summary:
          'Desain carousel informatif dengan visual clean dan CTA untuk meningkatkan interaksi.',
        details: [
          'Menentukan struktur konten per slide.',
          'Mendesain layout konsisten dengan identitas brand.',
          'Menyusun copy pendek yang jelas dan menarik.',
        ],
      },
      {
        title: 'Shopee Visual Etalase',
        category: 'Marketplace Content',
        image: '/assets/paspoto-emil.jpeg',
        images: [
          '/assets/paspoto-emil.jpeg',
          '/assets/paspoto-emil.jpeg',
          '/assets/paspoto-emil.jpeg',
        ],
        summary:
          'Paket visual etalase Shopee agar produk lebih menonjol dan conversion-ready.',
        details: [
          'Desain banner promo dan thumbnail produk.',
          'Penyesuaian warna visual agar konsisten.',
          'Optimasi tampilan untuk mobile shopper.',
        ],
      },
      {
        title: 'Story Harian Promosi',
        category: 'Social Media',
        image: '/assets/paspoto-emil.jpeg',
        images: [
          '/assets/paspoto-emil.jpeg',
          '/assets/paspoto-emil.jpeg',
          '/assets/paspoto-emil.jpeg',
        ],
        summary:
          'Produksi story harian dengan ritme konten terstruktur untuk menjaga engagement audience.',
        details: [
          'Penyusunan content planner mingguan.',
          'Desain story template yang fleksibel.',
          'A/B testing gaya CTA untuk performa terbaik.',
        ],
      },
    ],
    [],
  )

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.05, rootMargin: '0px 0px -8% 0px' },
    )

    const targets = document.querySelectorAll('.reveal')
    targets.forEach((target) => {
      const rect = target.getBoundingClientRect()
      if (rect.top < window.innerHeight * 0.95) {
        target.classList.add('show')
      } else {
        observer.observe(target)
      }
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedProject(null)
      }
      if (!selectedProject) return
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        handleSlide(-1)
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault()
        handleSlide(1)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [selectedProject, activeSlide])

  useEffect(() => {
    setActiveSlide(0)
  }, [selectedProject])

  const handleMove = (event) => {
    const width = window.innerWidth || 1
    const height = window.innerHeight || 1
    setPointer({
      x: Math.round((event.clientX / width) * 100),
      y: Math.round((event.clientY / height) * 100),
    })
  }

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  const scrollTrack = (trackRef, direction) => {
    const track = trackRef.current
    if (!track) return
    const firstCard = track.firstElementChild
    if (!firstCard) return
    const cardWidth = firstCard.getBoundingClientRect().width
    const gap = Number.parseFloat(window.getComputedStyle(track).columnGap || window.getComputedStyle(track).gap || '0') || 0
    const distance = Math.round(cardWidth * 2 + gap)
    track.scrollBy({ left: direction * distance, behavior: 'smooth' })
  }

  const modalImages = selectedProject?.images?.length
    ? selectedProject.images
    : selectedProject?.image
      ? [selectedProject.image]
      : []

  const handleSlide = (direction) => {
    if (!modalImages.length) return
    setActiveSlide((prev) => (prev + direction + modalImages.length) % modalImages.length)
  }

  return (
    <div className="page" onMouseMove={handleMove}>
      <div
        className="cursor-glow"
        style={{ left: `${pointer.x}%`, top: `${pointer.y}%` }}
        aria-hidden="true"
      />

      <header className="site-header">
        <div className="site-header-inner">
          <a href="#home" className="brand" onClick={closeMobileMenu}>
            Kamilah<span>Portfolio</span>
          </a>

          <button
            className={`menu-toggle ${isMobileMenuOpen ? 'open' : ''}`}
            type="button"
            aria-label="Buka menu navigasi"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`site-nav ${isMobileMenuOpen ? 'open' : ''}`}>
            <a href="#home" onClick={closeMobileMenu}>
              Home
            </a>
            <a href="#about" onClick={closeMobileMenu}>
              About
            </a>
            <a href="#skills" onClick={closeMobileMenu}>
              Skills
            </a>
            <a href="#services" onClick={closeMobileMenu}>
              Services
            </a>
            <a href="#experience" onClick={closeMobileMenu}>
              Experience
            </a>
            <a href="#projects" onClick={closeMobileMenu}>
              Projects
            </a>
            <a href="#contact" onClick={closeMobileMenu}>
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="page-body">
        <section id="home" className="hero reveal section-card">
          <div className="hero-photo-wrap">
            <div className="photo-ring" aria-hidden="true" />
            <img
              className="hero-photo"
              src="/assets/paspoto-emil.jpeg"
              alt="Foto Kamilah Dwianti"
            />
          </div>

          <div className="hero-text">
            <p className="label">Content Creator Portfolio</p>
            <h1>
              Hey, I'm <span>Kamilah Dwianti</span>
            </h1>
            <h2>Creative Content & Customer Experience</h2>
            <p>
              Lulusan SMK Usaha Layanan Pariwisata yang saat ini berkarier sebagai
              Content Creator, fokus pada konten kreatif, penguatan customer experience,
              dan strategi visual yang berdampak.
            </p>

            <div className="social-row">
              <a href="#" aria-label="Instagram">
                IG
              </a>
              <a href="#" aria-label="TikTok">
                TT
              </a>
              <a href="#" aria-label="Shopee">
                SH
              </a>
            </div>

            <div className="hero-actions">
              <a href="/assets/CV-ATS-KAMILAH-DWIANTI.pdf" className="btn btn-primary" target="_blank" rel="noreferrer">
                Download CV
              </a>
              <a href="#contact" className="btn btn-secondary">
                Contact Me
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="section-card reveal">
          <div className="section-head">
            <p className="section-tag">About</p>
            <h3>Tentang Saya</h3>
          </div>
          <p>
            Saya pribadi yang multitasking, teliti, dan terbuka pada inovasi baru.
            Berpengalaman mengelola ritme kerja profesional untuk menghasilkan konten
            yang menarik, relevan, dan mendukung tujuan brand.
          </p>
        </section>

        <section id="skills" className="section-card reveal">
          <div className="section-head carousel-head">
            <div>
              <p className="section-tag">Skills</p>
              <h3>Keahlian Utama</h3>
            </div>
            <div className="carousel-controls">
              <button type="button" className="arrow-btn" onClick={() => scrollTrack(skillsTrackRef, -1)}>
                ←
              </button>
              <button type="button" className="arrow-btn" onClick={() => scrollTrack(skillsTrackRef, 1)}>
                →
              </button>
            </div>
          </div>
          <div className="carousel-track skills-track" ref={skillsTrackRef}>
            {skills.map((skill) => (
              <div key={skill} className="skill-item interactive-card">
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="section-card reveal">
          <div className="section-head carousel-head">
            <div>
              <p className="section-tag">Services</p>
              <h3>Layanan</h3>
            </div>
            <div className="carousel-controls">
              <button type="button" className="arrow-btn" onClick={() => scrollTrack(servicesTrackRef, -1)}>
                ←
              </button>
              <button type="button" className="arrow-btn" onClick={() => scrollTrack(servicesTrackRef, 1)}>
                →
              </button>
            </div>
          </div>
          <div className="carousel-track services-track" ref={servicesTrackRef}>
            {services.map((service) => (
              <article key={service.title} className="service-item interactive-card">
                <h4>{service.title}</h4>
                <p>{service.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section-card reveal">
          <div className="section-head">
            <p className="section-tag">Experience</p>
            <h3>Pengalaman Kerja</h3>
          </div>
          <div className="experience-grid">
            {experiences.map((experience) => (
              <article key={experience.name} className="experience-item interactive-card">
                <h4>{experience.name}</h4>
                <p className="project-meta">{experience.role}</p>
                <p className="project-date">{experience.date}</p>
                <ul>
                  {experience.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section-card reveal">
          <div className="section-head">
            <p className="section-tag">Projects</p>
            <h3>Galeri Project</h3>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <article
                key={project.title}
                className="project-item project-gallery-item interactive-card"
                role="button"
                tabIndex={0}
                onClick={() => setSelectedProject(project)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault()
                    setSelectedProject(project)
                  }
                }}
              >
                {project.image ? (
                  <img src={project.image} alt={project.title} className="project-image" />
                ) : (
                  <div className="project-image placeholder">
                    <span>Tambahkan Foto Project</span>
                  </div>
                )}
                <div className="project-caption">
                  <h4>{project.title}</h4>
                  <p className="project-date">{project.category}</p>
                  <p className="project-summary">{project.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section-card reveal contact-card">
          <div className="section-head">
            <p className="section-tag">Contact Us</p>
            <h3>Let's Collaborate</h3>
          </div>
          <p>
            Tertarik bekerja sama untuk kebutuhan content planning, video kreatif,
            dan pengelolaan social media brand Anda?
          </p>
          <div className="contact-actions">
            <a href="mailto:kamilah@email.com" className="btn btn-primary">
              Kirim Email
            </a>
            <a href="/assets/CV-ATS-KAMILAH-DWIANTI.pdf" className="btn btn-secondary" target="_blank" rel="noreferrer">
              Lihat CV ATS
            </a>
          </div>
        </section>

        {selectedProject && (
          <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
            <div className="project-modal" onClick={(event) => event.stopPropagation()}>
              <button
                type="button"
                className="modal-close"
                onClick={() => setSelectedProject(null)}
                aria-label="Tutup detail project"
              >
                ×
              </button>
              <p className="section-tag">Project Detail</p>
              {modalImages.length > 0 ? (
                <div className="modal-gallery">
                  <button
                    type="button"
                    className="modal-nav prev"
                    onClick={() => handleSlide(-1)}
                    aria-label="Foto sebelumnya"
                    disabled={modalImages.length <= 1}
                  >
                    ‹
                  </button>
                  <img
                    src={modalImages[activeSlide]}
                    alt={`${selectedProject.title} ${activeSlide + 1}`}
                    className="modal-main-image"
                  />
                  <button
                    type="button"
                    className="modal-nav next"
                    onClick={() => handleSlide(1)}
                    aria-label="Foto berikutnya"
                    disabled={modalImages.length <= 1}
                  >
                    ›
                  </button>
                  <div className="modal-dots">
                    {modalImages.map((_, index) => (
                      <button
                        key={`${selectedProject.title}-dot-${index}`}
                        type="button"
                        className={`dot-btn ${index === activeSlide ? 'active' : ''}`}
                        onClick={() => setActiveSlide(index)}
                        aria-label={`Lihat foto ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="modal-main-image placeholder">
                  <span>Belum ada foto project</span>
                </div>
              )}
              <h3>{selectedProject.title}</h3>
              <p className="project-date">{selectedProject.category}</p>
              <p className="modal-summary">{selectedProject.summary}</p>
              <ul>
                {selectedProject.details.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </main>

      <footer className="site-footer">
        <div className="site-footer-inner">
          <p>Terima kasih sudah mengunjungi portofolio saya.</p>
          <p className="copyright">
            © {new Date().getFullYear()} Kamilah Dwianti. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
