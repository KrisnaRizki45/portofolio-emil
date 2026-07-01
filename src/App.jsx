import { useEffect, useRef, useState } from 'react'
import {
  FaArrowRightLong,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from 'react-icons/fa6'
import {
  FiAward,
  FiCheckCircle,
  FiChevronLeft,
  FiChevronRight,
  FiExternalLink,
  FiGrid,
  FiLayout,
  FiMail,
  FiMaximize2,
  FiMinimize2,
  FiPlay,
  FiTrendingUp,
  FiVideo,
  FiX,
  FiZoomIn,
  FiZoomOut,
} from 'react-icons/fi'
import './App.css'

const SUMMARY_PARAGRAPHS = [
  'Lulusan SMK Usaha Layanan Pariwisata yang saat ini berkarier sebagai Content Creator, dengan fokus pada penciptaan konten kreatif dan penguatan customer experience.',
  'Memiliki pengalaman dalam mengelola ritme kerja profesional secara teliti, saya adalah pribadi yang multitasking dan selalu terbuka pada inovasi baru untuk menghasilkan karya yang menarik serta berdampak bagi audiens.',
]

const SERVICES = [
  {
    title: 'Content Planning & Scheduling',
    icon: FiGrid,
    description: 'Menyusun kalender konten, distribusi posting, dan ritme publikasi yang konsisten di seluruh platform.',
    outcomes: ['Content Calendar', 'Posting Routine', 'Campaign Flow'],
  },
  {
    title: 'Design & Visual Branding',
    icon: FiLayout,
    description: 'Membuat desain feed, poster, story, banner, dan visual branding yang rapi serta mudah dikenali.',
    outcomes: ['Canva Design', 'Aesthetic Feed', 'Promo Visual'],
  },
  {
    title: 'Mobile Video Editing',
    icon: FiVideo,
    description: 'Mengolah video pendek untuk promosi, edukasi, dan awareness dengan alur storytelling yang kuat.',
    outcomes: ['CapCut', 'Reels', 'TikTok'],
  },
  {
    title: 'Social Media Management',
    icon: FiTrendingUp,
    description: 'Mengelola interaksi audiens, tren media sosial, dan performa konten untuk mendukung growth akun brand.',
    outcomes: ['Instagram', 'TikTok', 'Shopee'],
  },
]

const EXPERIENCE_ITEMS = [
  {
    company: 'MS GLOW Bandung',
    companyMark: 'MG',
    position: 'Content Creator',
    type: 'Contract',
    period: 'August 2025 - Present',
    summary: 'Mengelola content planner, visual promo, dan video harian untuk kebutuhan beauty brand.',
    tech: ['Canva', 'CapCut', 'Instagram', 'TikTok', 'Shopee'],
    achievements: [
      'Menyusun content planner untuk seluruh platform media sosial.',
      'Merancang desain story harian, poster promo, banner, dan etalase Shopee.',
      'Memproduksi dan mengedit video kreatif untuk TikTok, Shopee Video, dan Reels.',
    ],
    responsibilities: [
      'Menjaga ritme konten tetap konsisten sesuai campaign brand.',
      'Menyelaraskan visual dan copywriting dengan identitas premium beauty brand.',
      'Mendukung customer experience melalui konten yang informatif dan persuasif.',
    ],
  },
  {
    company: 'Arsa Dalu Kreasi',
    companyMark: 'AD',
    position: 'Content Creator',
    type: 'Freelance',
    period: 'August 2025 - December 2025',
    summary: 'Membuat konten edukatif dan desain visual bertema konstruksi yang lebih komunikatif.',
    tech: ['Canva', 'CapCut', 'Copywriting', 'Brand Awareness'],
    achievements: [
      'Menyusun ide kreatif dan memproduksi konten video edukasi mengenai konsultan proyek serta perizinan bangunan.',
      'Merancang desain carousel edukatif dan poster peringatan hari besar dengan CTA yang kuat.',
      'Mengelola konten visual bertema konstruksi untuk membangun brand awareness perusahaan.',
    ],
    responsibilities: [
      'Menerjemahkan topik teknis menjadi konten yang ringan dan mudah dipahami.',
      'Menjaga konsistensi tone visual agar selaras dengan citra profesional perusahaan.',
      'Menyusun materi konten yang cocok untuk media sosial dan kebutuhan internal branding.',
    ],
  },
  {
    company: 'Excellent Tours and Travel',
    companyMark: 'ET',
    position: 'Internship Content Assistant',
    type: 'Internship',
    period: '2024 - 2025',
    summary: 'Mendukung promosi travel, dokumentasi visual, dan ritme kerja operasional harian.',
    tech: ['Canva', 'Photo Editing', 'Customer Service'],
    achievements: [
      'Mendukung produksi konten promosi dan visual informasi perjalanan.',
      'Terlibat dalam pengelolaan ritme kerja harian dan komunikasi pelanggan.',
      'Membantu pengarsipan serta penyusunan materi promosi yang lebih rapi.',
    ],
    responsibilities: [
      'Membantu kebutuhan visual dan dokumentasi promosi travel.',
      'Menjaga detail pekerjaan agar tetap rapi dan akurat.',
      'Mendukung tim dalam pelayanan pelanggan dan follow-up informasi.',
    ],
  },
  {
    company: 'Harlie Travel Tour',
    companyMark: 'HT',
    position: 'Freelance Content Creator',
    type: 'Freelance',
    period: '2025',
    summary: 'Membuat konten sosial media yang ringan, rapi, dan sesuai karakter brand travel.',
    tech: ['Canva', 'CapCut', 'Digital Marketing'],
    achievements: [
      'Membuat konten visual promosi perjalanan dan kebutuhan sosial media.',
      'Mengembangkan storytelling ringan agar konten lebih komunikatif.',
      'Menyesuaikan output desain dengan kebutuhan publikasi brand travel.',
    ],
    responsibilities: [
      'Menyusun materi konten yang cocok untuk promosi digital.',
      'Mengolah visual agar tetap profesional dan menarik perhatian audiens.',
      'Mendukung penguatan identitas brand melalui konten harian.',
    ],
  },
]

const EDUCATION = [
  {
    school: 'Universitas Teknologi Bandung',
    schoolMark: 'UTB',
    major: 'S1 Bisnis Digital',
    year: '2026 - 2030',
    description:
      'Mempelajari strategi bisnis digital, e-commerce, digital marketing, analisis bisnis, serta pemanfaatan teknologi untuk membangun dan mengembangkan bisnis berbasis digital.',
    achievements: [
      'Mengembangkan pemahaman tentang transformasi digital dan model bisnis modern.',
      'Mengerjakan proyek berbasis teknologi, analisis bisnis, dan inovasi digital.',
    ],
  },
  {
    school: 'SMKN 3 Bandung',
    schoolMark: 'SMKN',
    major: 'Usaha Layanan Pariwisata',
    year: '2023 - 2025',
    description:
      'Fokus pada pelayanan wisata, komunikasi profesional, dan pengembangan keterampilan kerja yang teliti serta responsif.',
    achievements: [
      'Terbiasa bekerja dengan ritme yang rapi dan detail.',
      'Mampu menyesuaikan pendekatan komunikasi untuk audiens yang berbeda.',
    ],
  },
];

const CERTIFICATES = [
  {
    title: 'Table Manner Certificate',
    organization: 'Hospitality Practice',
    issueDate: '2024',
    description: 'Pemahaman etika pelayanan, tata cara jamuan, dan presentasi profesional di lingkungan hospitality.',
  },
  {
    title: 'Guiding Basic Training',
    organization: 'Tour Guiding Program',
    issueDate: '2024',
    description: 'Dasar komunikasi guiding, penyampaian informasi, dan pengalaman pelayanan wisata yang baik.',
  },
  {
    title: 'Galileo Basic System - Reservation & Ticketing',
    organization: 'Reservation Training',
    issueDate: '2025',
    description: 'Dasar reservasi, workflow ticketing, serta pemahaman sistem booking untuk industri perjalanan.',
  },
]

const SKILL_GROUPS = [
  {
    title: 'Content Creator',
    icon: FiPlay,
    progress: 92,
    items: ['Content Planning', 'Storytelling', 'Copywriting'],
  },
  {
    title: 'Design & Branding',
    icon: FiLayout,
    progress: 90,
    items: ['Canva', 'Visual Branding', 'Feed Design'],
  },
  {
    title: 'Video Editing',
    icon: FiVideo,
    progress: 88,
    items: ['CapCut', 'Reels', 'Short Form Video'],
  },
  {
    title: 'Social Media',
    icon: FiGrid,
    progress: 91,
    items: ['Instagram', 'TikTok', 'Shopee'],
  },
  {
    title: 'Digital Growth',
    icon: FiTrendingUp,
    progress: 84,
    items: ['Trend Analysis', 'Customer Experience', 'Campaign Support'],
  },
]

const PROJECT_META = [
  {
    slug: 'msglow',
    title: 'MS GLOW Bandung',
    category: 'Beauty Brand Campaign',
    role: 'Content Creator',
    period: 'August 2025 - Present',
    status: 'Ongoing',
    description:
      'Sistem konten harian untuk memperkuat branding, meningkatkan konsistensi visual, dan mendukung penjualan di media sosial serta marketplace.',
    techStack: ['Canva', 'CapCut', 'Instagram', 'TikTok', 'Shopee'],
    tags: ['Promo Visual', 'Marketplace', 'Daily Content'],
    responsibilities: [
      'Menyusun content planner untuk semua platform.',
      'Membuat story harian, banner promo, dan etalase Shopee.',
      'Mengedit video pendek untuk Reels, TikTok, dan Shopee Video.',
    ],
    features: ['Story harian konsisten', 'Visual promo premium', 'Video short-form engaging'],
    challenges: [
      'Menjaga ritme posting tetap stabil di banyak platform.',
      'Menyelaraskan visual agar tetap selaras dengan identitas brand.',
    ],
    solutions: [
      'Membuat template visual yang fleksibel dan mudah diadaptasi.',
      'Menyusun alur kerja content planner agar produksi lebih efisien.',
    ],
    timeline: ['Research', 'Planning', 'Design', 'Edit', 'Publish', 'Evaluate'],
    portfolioUrl: 'https://drive.google.com/drive/folders/1frbEJzi0n-T1Xqc1QKtL9y0AZhL3aI8o?usp=sharing',
  },
  {
    slug: 'arsa',
    title: 'Arsa Dalu Kreasi',
    category: 'Educational Construction Content',
    role: 'Content Creator',
    period: 'August 2025 - December 2025',
    status: 'Completed',
    description:
      'Konten edukasi tentang konsultan proyek dan perizinan bangunan untuk membangun awareness serta kepercayaan audiens.',
    techStack: ['Canva', 'CapCut', 'Copywriting', 'CTA'],
    tags: ['Carousel', 'CTA', 'Brand Awareness'],
    responsibilities: [
      'Membuat ide kreatif video edukasi dan desain carousel.',
      'Mengembangkan poster hari besar dan visual bertema konstruksi.',
      'Menjaga pesan konten tetap jelas, profesional, dan komunikatif.',
    ],
    features: ['Carousel edukatif', 'Video penjelasan ringan', 'Visual branding bertema konstruksi'],
    challenges: [
      'Menyederhanakan istilah teknis agar mudah dipahami audiens umum.',
      'Membuat desain tetap menarik walau topiknya formal.',
    ],
    solutions: [
      'Menggunakan alur storytelling singkat dengan CTA yang jelas.',
      'Memadukan layout bersih, ikon, dan warna yang profesional.',
    ],
    timeline: ['Brief', 'Concept', 'Design', 'Review', 'Publish'],
    portfolioUrl: 'https://drive.google.com/drive/folders/1frbEJzi0n-T1Xqc1QKtL9y0AZhL3aI8o?usp=sharing',
  },
  {
    slug: 'excellent',
    title: 'Excellent Tours and Travel',
    category: 'Travel Promotion',
    role: 'Internship Content Assistant',
    period: '2024 - 2025',
    status: 'Completed',
    description:
      'Mendukung konten promosi travel, dokumentasi visual, dan pengelolaan kebutuhan operasional pelanggan selama masa internship.',
    techStack: ['Canva', 'Photo Editing', 'Customer Service'],
    tags: ['Promotion', 'Operations', 'Travel'],
    responsibilities: [
      'Membantu pembuatan materi visual promosi perjalanan.',
      'Mendukung komunikasi pelanggan dan kebutuhan operasional harian.',
      'Menjaga kerapian arsip data serta output desain promosi.',
    ],
    features: ['Visual promosi travel', 'Materi operasional', 'Dokumentasi pelanggan'],
    challenges: [
      'Menjaga komunikasi tetap rapi saat ritme kerja padat.',
      'Menyajikan informasi perjalanan secara singkat dan jelas.',
    ],
    solutions: [
      'Membuat struktur kerja harian yang lebih teratur.',
      'Menggunakan template visual agar pekerjaan lebih cepat dan konsisten.',
    ],
    timeline: ['Collect Brief', 'Design', 'Revision', 'Support'],
    portfolioUrl: 'https://drive.google.com/drive/folders/1frbEJzi0n-T1Xqc1QKtL9y0AZhL3aI8o?usp=sharing',
  },
  {
    slug: 'harlie',
    title: 'Harlie Travel Tour',
    category: 'Remote Social Content',
    role: 'Freelance Content Creator',
    period: '2025',
    status: 'Completed',
    description:
      'Konten visual promosi perjalanan dengan pendekatan storytelling yang ringan, komunikatif, dan sesuai kebutuhan brand travel.',
    techStack: ['Canva', 'CapCut', 'Digital Marketing'],
    tags: ['Remote', 'Storytelling', 'Social Media'],
    responsibilities: [
      'Membuat konten sosial media untuk kebutuhan promosi.',
      'Menyesuaikan visual agar lebih menarik dan profesional.',
      'Mendukung penguatan identitas brand melalui output yang rapi.',
    ],
    features: ['Konten social media', 'Storytelling ringan', 'Visual brand travel'],
    challenges: [
      'Menghadirkan visual yang berbeda namun tetap selaras dengan brand.',
      'Menyesuaikan desain untuk kebutuhan publikasi yang cepat.',
    ],
    solutions: [
      'Menggunakan variasi layout dan elemen visual yang fleksibel.',
      'Menyusun template produksi agar alur kerja lebih efisien.',
    ],
    timeline: ['Plan', 'Draft', 'Edit', 'Deliver'],
    portfolioUrl: 'https://drive.google.com/drive/folders/1frbEJzi0n-T1Xqc1QKtL9y0AZhL3aI8o?usp=sharing',
  },
]

const PROJECT_IMAGE_MODULES = import.meta.glob('./assets/projects/*/*.{jpeg,jpg,png,webp}', {
  eager: true,
  import: 'default',
})

const PROJECT_IMAGES_BY_SLUG = Object.entries(PROJECT_IMAGE_MODULES).reduce((acc, [path, src]) => {
  const slug = path.split('/')[3]
  const fileName = path.split('/').at(-1)

  if (!acc[slug]) acc[slug] = []
  acc[slug].push({ src, fileName })
  return acc
}, {})

Object.values(PROJECT_IMAGES_BY_SLUG).forEach((items) => {
  items.sort((a, b) => a.fileName.localeCompare(b.fileName, undefined, { numeric: true, sensitivity: 'base' }))
})

const PROJECTS = PROJECT_META.map((project) => {
  const images = (PROJECT_IMAGES_BY_SLUG[project.slug] || []).map((item) => item.src)
  return {
    ...project,
    images,
    cover: images[0] || '/assets/paspoto-emil.jpeg',
    banner: images[0] || '/assets/paspoto-emil.jpeg',
  }
})

const SectionHeader = ({ tag, title, subtitle, controls }) => (
  <div className="section-head">
    <div>
      <p className="section-tag">{tag}</p>
      <h3>{title}</h3>
      {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
    </div>
    {controls}
  </div>
)

function App() {
  const [pointer, setPointer] = useState({ x: 50, y: 30 })
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeProject, setActiveProject] = useState(null)
  const [activeModalTab, setActiveModalTab] = useState('detail')
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [zoom, setZoom] = useState(1)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [activeExperience, setActiveExperience] = useState(null)
  const [activeCertificate, setActiveCertificate] = useState(null)
  const skillsTrackRef = useRef(null)
  const servicesTrackRef = useRef(null)
  const modalStageRef = useRef(null)

  const scrollTrack = (trackRef, direction) => {
    const track = trackRef.current
    if (!track) return
    const firstCard = track.firstElementChild
    if (!firstCard) return
    const cardWidth = firstCard.getBoundingClientRect().width
    const gap = Number.parseFloat(window.getComputedStyle(track).gap || '0') || 0
    track.scrollBy({ left: direction * Math.round(cardWidth + gap), behavior: 'smooth' })
  }

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  const openProject = (project, tab = 'detail') => {
    setActiveProject(project)
    setActiveModalTab(tab)
    setActiveImageIndex(0)
    setZoom(1)
    setIsFullscreen(false)
    setActiveCertificate(null)
  }

  const closeProject = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {})
    }
    setActiveProject(null)
    setActiveModalTab('detail')
    setActiveImageIndex(0)
    setZoom(1)
    setIsFullscreen(false)
  }

  const openExperience = (experience) => {
    setActiveExperience(experience)
    setActiveProject(null)
    setActiveCertificate(null)
    setIsMobileMenuOpen(false)
  }

  const closeExperience = () => setActiveExperience(null)

  const openCertificate = (certificate) => {
    setActiveCertificate(certificate)
    setActiveProject(null)
    setIsMobileMenuOpen(false)
  }

  const closeCertificate = () => setActiveCertificate(null)

  const activeProjectImages = activeProject?.images || []
  const activeProjectImage = activeProjectImages[activeImageIndex] || activeProject?.banner

  const nextImage = () => {
    if (!activeProjectImages.length) return
    setActiveImageIndex((current) => (current + 1) % activeProjectImages.length)
  }

  const prevImage = () => {
    if (!activeProjectImages.length) return
    setActiveImageIndex((current) => (current - 1 + activeProjectImages.length) % activeProjectImages.length)
  }

  const toggleFullscreen = async () => {
    const element = modalStageRef.current
    if (!element) return

    if (document.fullscreenElement) {
      await document.exitFullscreen().catch(() => {})
    } else {
      await element.requestFullscreen?.().catch(() => {})
    }
  }

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
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
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
    const handlePointerMove = (event) => {
      const width = window.innerWidth || 1
      const height = window.innerHeight || 1
      setPointer({
        x: Math.round((event.clientX / width) * 100),
        y: Math.round((event.clientY / height) * 100),
      })
    }

    window.addEventListener('pointermove', handlePointerMove)
    return () => window.removeEventListener('pointermove', handlePointerMove)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) setIsMobileMenuOpen(false)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        if (activeProject) closeProject()
        if (activeExperience) closeExperience()
        if (activeCertificate) closeCertificate()
        setIsMobileMenuOpen(false)
      }

      if (!activeProject) return

      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        prevImage()
      }

      if (event.key === 'ArrowRight') {
        event.preventDefault()
        nextImage()
      }

      if (event.key === '+' || event.key === '=') {
        event.preventDefault()
        setZoom((current) => Math.min(current + 0.15, 1.8))
      }

      if (event.key === '-') {
        event.preventDefault()
        setZoom((current) => Math.max(current - 0.15, 1))
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeProject, activeExperience, activeCertificate, activeImageIndex])

  useEffect(() => {
    const lock = isMobileMenuOpen || Boolean(activeProject) || Boolean(activeExperience) || Boolean(activeCertificate)
    document.body.style.overflow = lock ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen, activeProject, activeExperience, activeCertificate])

  useEffect(() => {
    const onFullscreenChange = () => setIsFullscreen(Boolean(document.fullscreenElement))
    document.addEventListener('fullscreenchange', onFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange)
  }, [])

  const renderControls = (trackRef, label) => (
    <div className="carousel-controls">
      <button type="button" className="arrow-btn" onClick={() => scrollTrack(trackRef, -1)} aria-label={`Scroll ${label} left`}>
        <FiChevronLeft />
      </button>
      <button type="button" className="arrow-btn" onClick={() => scrollTrack(trackRef, 1)} aria-label={`Scroll ${label} right`}>
        <FiChevronRight />
      </button>
    </div>
  )

  return (
    <div className="page">
      <div className="cursor-glow" style={{ left: `${pointer.x}%`, top: `${pointer.y}%` }} aria-hidden="true" />

      <header className="site-header">
        <div className="site-header-inner">
          <a href="#home" className="brand" onClick={closeMobileMenu} aria-label="Kamilah Portfolio">
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
            <a href="#home" onClick={closeMobileMenu}>Home</a>
            <a href="#about" onClick={closeMobileMenu}>About</a>
            <a href="#skills" onClick={closeMobileMenu}>Skills</a>
            <a href="#services" onClick={closeMobileMenu}>Services</a>
            <a href="#experience" onClick={closeMobileMenu}>Experience</a>
            <a href="#education" onClick={closeMobileMenu}>Education</a>
            <a href="#certifications" onClick={closeMobileMenu}>Certificates</a>
            <a href="#projects" onClick={closeMobileMenu}>Projects</a>
            <a href="#contact" onClick={closeMobileMenu}>Contact</a>
          </nav>
        </div>
      </header>

      <main className="page-body">
        <section id="home" className="hero reveal section-card">
          <div className="hero-photo-wrap">
            <div className="photo-ring" aria-hidden="true" />
            <img className="hero-photo" src="/assets/paspoto-emil.jpeg" alt="Foto Kamilah Dwianti" />
          </div>

          <div className="hero-text">
            <p className="label">Content Creator Portfolio</p>
            <h1>
              Hey, I&apos;m <span>Kamilah Dwianti</span>
            </h1>
            <h2>Creative Content & Customer Experience</h2>
            {SUMMARY_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <div className="social-row" aria-label="Social links">
              <a
                href="https://www.instagram.com/kamilahdwnt_?igsh=b21raHpqdW15aTg%3D&utm_source=qr&wa_status_inline=true"
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.tiktok.com/@kmlhdwnt?_r=1&_t=ZS-97f94Vd3845"
                aria-label="TikTok"
                target="_blank"
                rel="noreferrer"
              >
                <FaTiktok />
              </a>
              <a
                href="https://www.linkedin.com/in/kamilah-dwnt-8b992a377?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                aria-label="LinkedIn"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </div>

            <div className="hero-actions">
              <a href="/assets/CV-ATS-KAMILAH-DWIANTI.pdf" className="btn btn-primary" target="_blank" rel="noreferrer">
                Download CV
              </a>
              <a href="#projects" className="btn btn-secondary">View Projects</a>
            </div>
          </div>
        </section>

        <section id="about" className="section-card reveal">
          <SectionHeader tag="About" title="Professional Summary" />
          {SUMMARY_PARAGRAPHS.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>

        <section id="skills" className="section-card reveal">
          <SectionHeader tag="Skills" title="Core Competencies" controls={renderControls(skillsTrackRef, 'skills')} />
          <div className="carousel-track skills-track" ref={skillsTrackRef}>
            {SKILL_GROUPS.map((group, index) => {
              const GroupIcon = group.icon
              return (
                <article key={group.title} className="skill-group-card interactive-card" style={{ '--delay': `${index * 70}ms` }}>
                  <div className="skill-group-head">
                    <span className="skill-group-icon"><GroupIcon /></span>
                    <div>
                      <h4>{group.title}</h4>
                      <div className="skill-progress"><span style={{ width: `${group.progress}%` }} /></div>
                    </div>
                  </div>
                  <div className="chip-wrap">
                    {group.items.map((item) => (
                      <span key={item} className="skill-chip">{item}</span>
                    ))}
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        <section id="services" className="section-card reveal">
          <SectionHeader tag="Services" title="What I Do" controls={renderControls(servicesTrackRef, 'services')} />
          <div className="carousel-track service-track" ref={servicesTrackRef}>
            {SERVICES.map((service, index) => {
              const ServiceIcon = service.icon
              return (
                <article key={service.title} className="service-card interactive-card" style={{ '--delay': `${index * 80}ms` }}>
                  <span className="service-icon"><ServiceIcon /></span>
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                  <div className="chip-wrap">
                    {service.outcomes.map((item) => (
                      <span key={item} className="skill-chip">{item}</span>
                    ))}
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        <section id="experience" className="section-card reveal">
          <SectionHeader tag="Experience" title="Work History" subtitle="Pada layar kecil, kartu pengalaman berubah menjadi slider horizontal agar tidak terlalu panjang." />
          <div className="experience-grid">
            {EXPERIENCE_ITEMS.map((item, index) => (
              <article
                key={item.company}
                className="timeline-card interactive-card"
                style={{ '--delay': `${index * 90}ms` }}
                onClick={() => openExperience(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault()
                    openExperience(item)
                  }
                }}
              >
                <div className="timeline-top">
                  <div className="timeline-icon timeline-mark">{item.companyMark}</div>
                  <div>
                    <h4>{item.company}</h4>
                    <p className="project-meta">{item.position}</p>
                    <p className="project-date">{item.type} - {item.period}</p>
                  </div>
                </div>
                <p className="experience-summary">{item.summary}</p>
                <div className="chip-wrap experience-chip-row">
                  {item.tech.slice(0, 3).map((tech) => <span key={tech} className="skill-chip">{tech}</span>)}
                </div>
                <button type="button" className="btn btn-secondary btn-ghost" onClick={(event) => { event.stopPropagation(); openExperience(item) }}>
                  View Detail <FaArrowRightLong />
                </button>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="section-card reveal">
          <SectionHeader tag="Education" title="Academic Background" />
          <div className="education-list">
            {EDUCATION.map((education, index) => (
              <article key={education.school} className="education-card interactive-card" style={{ '--delay': `${index * 70}ms` }}>
                <div className="timeline-icon timeline-mark education-mark">{education.schoolMark}</div>
                <div>
                  <h4>{education.school}</h4>
                  <p className="project-meta">Major: {education.major}</p>
                  <p className="project-date">Year: {education.year}</p>
                  <p>{education.description}</p>
                  <div className="meta-stack">
                    <div className="meta-label">Achievements</div>
                    <ul>
                      {education.achievements.map((item) => (
                        <li key={item}><FiCheckCircle /> {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="certifications" className="section-card reveal">
          <SectionHeader tag="Certificates" title="Selected Credentials" />
          <div className="certificate-grid">
            {CERTIFICATES.map((certificate, index) => (
              <article key={certificate.title} className="certificate-card interactive-card" style={{ '--delay': `${index * 80}ms` }}>
                <div className="certificate-icon"><FiAward /></div>
                <p className="certificate-date">{certificate.issueDate}</p>
                <h4>{certificate.title}</h4>
                <p className="project-meta">{certificate.organization}</p>
                <p>{certificate.description}</p>
                <button type="button" className="btn btn-secondary btn-ghost" onClick={() => openCertificate(certificate)}>
                  View Certificate <FaArrowRightLong />
                </button>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section-card reveal">
          <SectionHeader tag="Projects" title="Project Gallery" />
          <div className="projects-grid">
            {PROJECTS.map((project, index) => (
              <article key={project.slug} className="project-card interactive-card" style={{ '--delay': `${index * 100}ms` }}>
                <div className="project-image-wrap">
                  <img src={project.cover} alt={project.title} className="project-image" loading="lazy" decoding="async" />
                  <div className="project-image-overlay">
                    <span>{project.category}</span>
                  </div>
                </div>
                <div className="project-caption">
                  <div className="project-heading-row">
                    <h4>{project.title}</h4>
                    <span className={`project-badge ${project.status === 'Ongoing' ? 'badge-live' : ''}`}>{project.status}</span>
                  </div>
                  <p className="project-summary">{project.description}</p>
                  <div className="project-info-grid">
                    <div>
                      <span className="meta-label">Role</span>
                      <p className="project-date">{project.role}</p>
                    </div>
                    <div>
                      <span className="meta-label">Timeline</span>
                      <p className="project-date">{project.period}</p>
                    </div>
                  </div>
                  <div className="meta-stack">
                    <div className="meta-label">Technology Stack</div>
                    <div className="chip-wrap">
                      {project.techStack.map((tech) => <span key={tech} className="skill-chip">{tech}</span>)}
                    </div>
                  </div>
                  <div className="tag-row">
                    {project.tags.map((tag) => <span key={tag} className="project-tag">{tag}</span>)}
                  </div>
                  <div className="project-actions">
                    <button type="button" className="btn btn-secondary" onClick={() => openProject(project, 'detail')}>
                      View Detail
                    </button>
                    <button type="button" className="btn btn-primary" onClick={() => openProject(project, 'gallery')}>
                      View Gallery
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section-card reveal contact-card">
          <SectionHeader tag="Contact" title="Let's Collaborate" />
          <p>
            Tertarik bekerja sama untuk kebutuhan content planning, video kreatif, visual branding, dan pengelolaan social media brand Anda?
          </p>
          <div className="contact-actions">
            <a href="mailto:kamilah@email.com" className="btn btn-primary">
              <FiMail /> Send Email
            </a>
            <a href="/assets/CV-ATS-KAMILAH-DWIANTI.pdf" className="btn btn-secondary" target="_blank" rel="noreferrer">
              <FiExternalLink /> Open CV
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-footer-inner">
          <p>Terima kasih sudah mengunjungi portofolio saya.</p>
          <p className="copyright">Copyright {new Date().getFullYear()} Kamilah Dwianti. All rights reserved.</p>
        </div>
      </footer>

      {activeProject && (
        <div className="lightbox-backdrop" role="dialog" aria-modal="true" aria-label={`${activeProject.title} detail modal`} onClick={closeProject}>
          <div className="lightbox-shell detail-shell" onClick={(event) => event.stopPropagation()}>
            <div className="lightbox-topbar">
              <div>
                <p className="section-tag">Project Detail</p>
                <h3>{activeProject.title}</h3>
                <p className="project-summary modal-summary">{activeProject.description}</p>
              </div>
              <div className="lightbox-actions">
                <button type="button" className={`tab-btn ${activeModalTab === 'detail' ? 'active' : ''}`} onClick={() => setActiveModalTab('detail')}>
                  Detail
                </button>
                <button type="button" className={`tab-btn ${activeModalTab === 'gallery' ? 'active' : ''}`} onClick={() => setActiveModalTab('gallery')}>
                  Gallery
                </button>
                <button type="button" className="lightbox-action" onClick={() => setZoom((current) => Math.max(1, current - 0.15))} aria-label="Zoom out">
                  <FiZoomOut />
                </button>
                <button type="button" className="lightbox-action" onClick={() => setZoom((current) => Math.min(current + 0.15, 1.8))} aria-label="Zoom in">
                  <FiZoomIn />
                </button>
                <button type="button" className="lightbox-action" onClick={toggleFullscreen} aria-label="Toggle fullscreen">
                  {isFullscreen ? <FiMinimize2 /> : <FiMaximize2 />}
                </button>
                <button type="button" className="lightbox-action close" onClick={closeProject} aria-label="Close gallery">
                  <FiX />
                </button>
              </div>
            </div>

            {activeModalTab === 'detail' ? (
              <div className="modal-details-grid">
                <div className="detail-media">
                  <img src={activeProject.banner} alt={activeProject.title} loading="lazy" decoding="async" />
                  <div className="detail-media-overlay">
                    <span>{activeProject.category}</span>
                    <span>{activeProject.role}</span>
                  </div>
                </div>

                <div className="detail-columns">
                  <article className="detail-panel">
                    <p className="mini-title">Responsibilities</p>
                    <ul>
                      {activeProject.responsibilities.map((item) => (
                        <li key={item}><FiCheckCircle /> {item}</li>
                      ))}
                    </ul>
                  </article>

                  <article className="detail-panel">
                    <p className="mini-title">Technology Used</p>
                    <div className="chip-wrap">
                      {activeProject.techStack.map((item) => <span key={item} className="skill-chip">{item}</span>)}
                    </div>
                  </article>

                  <article className="detail-panel">
                    <p className="mini-title">Features</p>
                    <ul>
                      {activeProject.features.map((item) => (
                        <li key={item}><FiCheckCircle /> {item}</li>
                      ))}
                    </ul>
                  </article>

                  <article className="detail-panel">
                    <p className="mini-title">Challenges</p>
                    <ul>
                      {activeProject.challenges.map((item) => (
                        <li key={item}><FiCheckCircle /> {item}</li>
                      ))}
                    </ul>
                  </article>

                  <article className="detail-panel">
                    <p className="mini-title">Solutions</p>
                    <ul>
                      {activeProject.solutions.map((item) => (
                        <li key={item}><FiCheckCircle /> {item}</li>
                      ))}
                    </ul>
                  </article>

                  <article className="detail-panel">
                    <p className="mini-title">Project Timeline</p>
                    <div className="timeline-steps">
                      {activeProject.timeline.map((step, index) => (
                        <span key={step} className="timeline-step">
                          <strong>{index + 1}</strong>
                          {step}
                        </span>
                      ))}
                    </div>
                  </article>

                  {activeProject.portfolioUrl ? (
                    <article className="detail-panel">
                      <p className="mini-title">Complete Portfolio</p>
                      <p className="detail-link-copy">
                        Untuk melihat dokumentasi lengkap project ini, buka folder porto berikut.
                      </p>
                      <a
                        href={activeProject.portfolioUrl}
                        className="btn btn-secondary btn-ghost detail-link-btn"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Selengkapnya <FiExternalLink />
                      </a>
                    </article>
                  ) : null}
                </div>

                <div className="detail-thumbs">
                  {activeProjectImages.slice(0, 6).map((image, index) => (
                    <button
                      key={`${activeProject.slug}-${index}`}
                      type="button"
                      className={`thumb ${index === activeImageIndex ? 'active' : ''}`}
                      onClick={() => {
                        setActiveImageIndex(index)
                        setActiveModalTab('gallery')
                      }}
                      aria-label={`Show image ${index + 1}`}
                    >
                      <img src={image} alt="" loading="lazy" decoding="async" />
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <>
                <div className="lightbox-stage" ref={modalStageRef}>
                  <button type="button" className="lightbox-nav prev" onClick={prevImage} aria-label="Previous image">
                    <FiChevronLeft />
                  </button>
                  <figure className="lightbox-figure" style={{ transform: `scale(${zoom})` }}>
                    <img src={activeProjectImage} alt={`${activeProject.title} - image ${activeImageIndex + 1}`} loading="eager" decoding="async" />
                  </figure>
                  <button type="button" className="lightbox-nav next" onClick={nextImage} aria-label="Next image">
                    <FiChevronRight />
                  </button>
                </div>

                <div className="lightbox-meta">
                  <p>{activeProject.category}</p>
                  <p>{activeImageIndex + 1} / {activeProjectImages.length}</p>
                </div>

                <div className="lightbox-thumbs" role="tablist" aria-label="Project thumbnails">
                  {activeProjectImages.map((image, index) => (
                    <button
                      key={`${activeProject.slug}-${index}`}
                      type="button"
                      className={`thumb ${index === activeImageIndex ? 'active' : ''}`}
                      onClick={() => setActiveImageIndex(index)}
                      aria-label={`Show image ${index + 1}`}
                    >
                      <img src={image} alt="" loading="lazy" decoding="async" />
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {activeCertificate && (
        <div className="lightbox-backdrop" role="dialog" aria-modal="true" aria-label={`${activeCertificate.title} certificate`} onClick={closeCertificate}>
          <div className="lightbox-shell certificate-shell" onClick={(event) => event.stopPropagation()}>
            <div className="lightbox-topbar">
              <div>
                <p className="section-tag">Certificate</p>
                <h3>{activeCertificate.title}</h3>
                <p className="project-summary modal-summary">{activeCertificate.description}</p>
              </div>
              <button type="button" className="lightbox-action close" onClick={closeCertificate} aria-label="Close certificate">
                <FiX />
              </button>
            </div>

            <div className="certificate-preview">
              <div className="certificate-preview-card">
                <div className="certificate-preview-badge">
                  <FiAward />
                </div>
                <div>
                  <p className="mini-title">{activeCertificate.organization}</p>
                  <h4>{activeCertificate.title}</h4>
                  <p className="project-date">Issue Date: {activeCertificate.issueDate}</p>
                </div>
              </div>
              <div className="certificate-preview-faux">
                <span>Preview Image Optional</span>
                <strong>Premium certificate showcase</strong>
                <p>{activeCertificate.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeExperience && (
        <div className="lightbox-backdrop" role="dialog" aria-modal="true" aria-label={`${activeExperience.company} detail`} onClick={closeExperience}>
          <div className="lightbox-shell experience-shell" onClick={(event) => event.stopPropagation()}>
            <div className="lightbox-topbar">
              <div>
                <p className="section-tag">Work History</p>
                <h3>{activeExperience.company}</h3>
                <p className="project-summary modal-summary">{activeExperience.summary}</p>
              </div>
              <button type="button" className="lightbox-action close" onClick={closeExperience} aria-label="Close experience">
                <FiX />
              </button>
            </div>

            <div className="experience-detail-grid">
              <article className="detail-panel">
                <p className="mini-title">Role & Period</p>
                <h4>{activeExperience.position}</h4>
                <p className="project-date">{activeExperience.type} - {activeExperience.period}</p>
                <div className="meta-stack">
                  <div className="meta-label">Technology</div>
                  <div className="chip-wrap">
                    {activeExperience.tech.map((tech) => (
                      <span key={tech} className="skill-chip">{tech}</span>
                    ))}
                  </div>
                </div>
              </article>

              <article className="detail-panel">
                <p className="mini-title">Responsibilities</p>
                <ul>
                  {activeExperience.responsibilities.map((item) => (
                    <li key={item}><FiCheckCircle /> {item}</li>
                  ))}
                </ul>
              </article>

              <article className="detail-panel">
                <p className="mini-title">Achievements</p>
                <ul>
                  {activeExperience.achievements.map((item) => (
                    <li key={item}><FiCheckCircle /> {item}</li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
