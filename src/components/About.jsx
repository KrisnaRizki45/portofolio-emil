import {
  FiAward,
  FiCheckCircle,
  FiCompass,
  FiFileText,
  FiHeart,
  FiZap,
} from 'react-icons/fi'
import { SUMMARY_PARAGRAPHS } from '../data/portfolioData.js'

export default function About() {
  const highlights = [
    {
      icon: FiHeart,
      title: 'Customer Experience Mindset',
      desc: 'Berbekal latar belakang Usaha Layanan Pariwisata, memahami pentingnya menyajikan pesan yang ramah, solutif, dan berorientasi pada kenyamanan audiens.',
    },
    {
      icon: FiZap,
      title: 'Multitasking & Responsive',
      desc: 'Terbiasa mengelola multi-platform harian mulai dari perencanaan ide, desain visual Canva, editing video CapCut, hingga evaluasi interaksi.',
    },
    {
      icon: FiCompass,
      title: 'Digital Business Vision',
      desc: 'Sedang menempuh studi S1 Bisnis Digital untuk mengintegrasikan daya tarik estetika visual dengan strategi marketing dan pertumbuhan e-commerce.',
    },
    {
      icon: FiAward,
      title: 'Quality & Consistency',
      desc: 'Selalu disiplin menjaga keselarasan brand identity, estetika tipografi, ketepatan jadwal posting, dan detail konten yang presisi.',
    },
  ]

  return (
    <section id="about" className="section-card reveal">
      <div className="section-header">
        <div className="section-tag-pill">
          <FiFileText />
          <span>About Me</span>
        </div>
        <h2 className="section-title">Professional Summary</h2>
        <p className="section-subtitle">
          Kombinasi antara kepekaan visual kreatif, disiplin kerja terstruktur, dan pemahaman mendalam tentang audiens modern.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-text-card">
          <h3 className="about-heading">Transforming Creative Ideas into Impactful Visuals</h3>
          {SUMMARY_PARAGRAPHS.map((paragraph, index) => (
            <p key={index} className="about-paragraph">{paragraph}</p>
          ))}

          <div className="about-checklist">
            <div className="about-check-item">
              <FiCheckCircle className="check-icon" />
              <span>Kemampuan adaptasi cepat pada tren sosial media & algoritma baru</span>
            </div>
            <div className="about-check-item">
              <FiCheckCircle className="check-icon" />
              <span>Terampil memproduksi konten promosi komersial maupun edukatif</span>
            </div>
            <div className="about-check-item">
              <FiCheckCircle className="check-icon" />
              <span>Komunikasi persuasif dengan Call-To-Action yang efektif</span>
            </div>
          </div>
        </div>

        <div className="about-cards-grid">
          {highlights.map((item, idx) => {
            const Icon = item.icon
            return (
              <div key={idx} className="bento-mini-card">
                <div className="bento-mini-icon">
                  <Icon />
                </div>
                <h4 className="bento-mini-title">{item.title}</h4>
                <p className="bento-mini-desc">{item.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

