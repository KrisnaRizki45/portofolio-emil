import { useEffect, useState } from 'react'
import About from './components/About.jsx'
import BackToTop from './components/BackToTop.jsx'
import CertificateDetailModal from './components/CertificateDetailModal.jsx'
import Certificates from './components/Certificates.jsx'
import Contact from './components/Contact.jsx'
import Education from './components/Education.jsx'
import Experience from './components/Experience.jsx'
import ExperienceDetailModal from './components/ExperienceDetailModal.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import ProjectDetailModal from './components/ProjectDetailModal.jsx'
import Projects from './components/Projects.jsx'
import Services from './components/Services.jsx'
import Skills from './components/Skills.jsx'
import { PROJECTS } from './data/portfolioData.js'
import './App.css'

export default function App() {
  // Theme state: dark / light
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('emil_portfolio_theme')
    if (saved === 'dark' || saved === 'light') return saved
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }
    return 'dark' // Default to modern sleek dark mode
  })

  // Apply data-theme to documentElement
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('emil_portfolio_theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  // Interactive states
  const [pointer, setPointer] = useState({ x: 50, y: 30 })
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeProject, setActiveProject] = useState(null)
  const [projectModalTab, setProjectModalTab] = useState('detail')
  const [activeExperience, setActiveExperience] = useState(null)
  const [activeCertificate, setActiveCertificate] = useState(null)
  const [activeSection, setActiveSection] = useState('home')

  // Ambient pointer glow
  useEffect(() => {
    const handlePointerMove = (e) => {
      const width = window.innerWidth || 1
      const height = window.innerHeight || 1
      setPointer({
        x: Math.round((e.clientX / width) * 100),
        y: Math.round((e.clientY / height) * 100),
      })
    }
    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    return () => window.removeEventListener('pointermove', handlePointerMove)
  }, [])

  // Lock body scroll when any modal or mobile drawer is open
  useEffect(() => {
    const isLocked =
      isMobileMenuOpen ||
      Boolean(activeProject) ||
      Boolean(activeExperience) ||
      Boolean(activeCertificate)

    document.body.style.overflow = isLocked ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen, activeProject, activeExperience, activeCertificate])

  // Section reveal observer & active section tracking
  useEffect(() => {
    const sectionIds = [
      'home',
      'about',
      'skills',
      'services',
      'experience',
      'education',
      'certifications',
      'projects',
      'contact',
    ]

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i])
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
    )

    const reveals = document.querySelectorAll('.reveal')
    reveals.forEach((el) => {
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight * 0.95) {
        el.classList.add('show')
      } else {
        observer.observe(el)
      }
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [])

  // Project Modal Actions
  const handleOpenProject = (project, tab = 'detail') => {
    setActiveProject(project)
    setProjectModalTab(tab)
    setActiveExperience(null)
    setActiveCertificate(null)
    setIsMobileMenuOpen(false)
  }

  const handleCloseProject = () => {
    setActiveProject(null)
  }

  const handleNextProject = () => {
    if (!activeProject) return
    const currentIndex = PROJECTS.findIndex((p) => p.slug === activeProject.slug)
    const nextIndex = (currentIndex + 1) % PROJECTS.length
    setActiveProject(PROJECTS[nextIndex])
  }

  const handlePrevProject = () => {
    if (!activeProject) return
    const currentIndex = PROJECTS.findIndex((p) => p.slug === activeProject.slug)
    const prevIndex = (currentIndex - 1 + PROJECTS.length) % PROJECTS.length
    setActiveProject(PROJECTS[prevIndex])
  }

  return (
    <div className="portfolio-app">
      {/* Background ambient lighting */}
      <div
        className="ambient-cursor-glow"
        style={{ left: `${pointer.x}%`, top: `${pointer.y}%` }}
        aria-hidden="true"
      />

      {/* Header & Floating Navigation */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        activeSection={activeSection}
      />

      {/* Main Page Content */}
      <main className="main-content-flow">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Experience onOpenExperience={(exp) => setActiveExperience(exp)} />
        <Education />
        <Certificates onOpenCertificate={(cert) => setActiveCertificate(cert)} />
        <Projects onOpenProject={handleOpenProject} />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Back to top button */}
      <BackToTop />

      {/* Project Detail & Lightbox Gallery Modal */}
      {activeProject && (
        <ProjectDetailModal
          key={`${activeProject.slug}-${projectModalTab}`}
          project={activeProject}
          initialTab={projectModalTab}
          onClose={handleCloseProject}
          onNextProject={handleNextProject}
          onPrevProject={handlePrevProject}
        />
      )}

      {/* Experience Detail Modal */}
      {activeExperience && (
        <ExperienceDetailModal
          experience={activeExperience}
          onClose={() => setActiveExperience(null)}
        />
      )}

      {/* Certificate Detail Modal */}
      {activeCertificate && (
        <CertificateDetailModal
          certificate={activeCertificate}
          onClose={() => setActiveCertificate(null)}
        />
      )}
    </div>
  )
}
