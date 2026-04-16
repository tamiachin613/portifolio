import { useState } from 'react'
import './App.css'

const stats = [
  { value: '15+', label: 'Sections refined with consistency' },
  { value: '06', label: 'Core portfolio blocks' },
  { value: '24h', label: 'Typical reply time' },
  { value: '02', label: 'Documents ready to preview' },
]

const highlights = [
  {
    title: 'Consistent Visual System',
    description: 'Every section now follows the same spacing, card language, accent colors, and polished visual rhythm.',
  },
  {
    title: 'Interactive Portfolio Flow',
    description: 'Hover states, active viewers, animated bars, and stronger section transitions make the page feel alive.',
  },
  {
    title: 'Professional Presentation',
    description: 'Projects, experience, certificates, and contact details are all arranged to support trust and clarity.',
  },
]

const skills = [
  {
    title: 'React UI Engineering',
    level: '92%',
    description: 'Reusable components, clean page structures, and fast frontend experiences built with React.',
    tags: ['React', 'Vite', 'Hooks', 'Component Design'],
  },
  {
    title: 'Visual Interface Design',
    level: '88%',
    description: 'Modern layouts, refined hierarchy, and elegant design systems that feel premium and easy to use.',
    tags: ['Design Systems', 'UI Layout', 'Typography', 'Spacing'],
  },
  {
    title: 'Responsive Development',
    level: '90%',
    description: 'Interfaces that adapt smoothly across desktop, tablet, and mobile with strong usability.',
    tags: ['Responsive', 'Accessibility', 'Cross-device', 'Performance'],
  },
]

const languages = [
  {
    name: 'English',
    level: 'Professional',
    skills: ['Speaking — Fluent', 'Reading — Advanced', 'Writing — Advanced', 'Listening — Fluent'],
  },
  {
    name: 'Amharic',
    level: 'Native',
    skills: ['Speaking — Native', 'Reading — Advanced', 'Writing — Advanced', 'Listening — Native'],
  },
]

const experiences = [
  {
    role: 'Frontend Developer',
    company: 'Freelance & Personal Projects',
    period: '2024 — Present',
    summary: 'Designing elegant portfolio websites and interactive landing pages with consistent UI systems and responsive layouts.',
    points: ['Built polished React sections', 'Improved mobile-first structure', 'Focused on smooth user journeys'],
  },
  {
    role: 'UI Designer',
    company: 'Creative Practice',
    period: '2022 — 2024',
    summary: 'Crafted layout concepts, card systems, and high-clarity pages for personal brands and product-style experiences.',
    points: ['Clean visual hierarchy', 'Reusable card patterns', 'Clear call-to-action sections'],
  },
  {
    role: 'Web Developer',
    company: 'Learning Lab',
    period: '2021 — 2022',
    summary: 'Strengthened frontend foundations through constant practice in HTML, CSS, JavaScript, and interactive React pages.',
    points: ['Hands-on portfolio builds', 'Frontend experimentation', 'Continuous improvement mindset'],
  },
]

const projects = [
  {
    name: 'Premium Portfolio Experience',
    type: 'React Portfolio',
    description: 'A modern personal website with strong visual consistency, document viewers, and elegant interaction patterns.',
    tags: ['React', 'UI Design', 'Responsive'],
  },
  {
    name: 'Creative Landing Page System',
    type: 'Marketing UI',
    description: 'A conversion-focused landing page concept with beautiful cards, visual storytelling, and modern CTA blocks.',
    tags: ['Branding', 'Layout', 'Motion-ready'],
  },
  {
    name: 'Interactive Dashboard Concept',
    type: 'Product Interface',
    description: 'A clean dashboard approach centered around reusable blocks, strong spacing, and scannable content design.',
    tags: ['Dashboard', 'Cards', 'Clarity'],
  },
]

const certificates = [
  {
    title: 'React Frontend Development Certificate',
    issuer: 'Frontend Academy',
    year: '2025',
    credential: 'Credential ID: RF-2025-014',
    description: 'Focused on modern React workflows, component architecture, hooks, and project-ready frontend structure.',
  },
  {
    title: 'UI / UX Design Professional Certificate',
    issuer: 'Design Institute',
    year: '2024',
    credential: 'Credential ID: UX-2024-102',
    description: 'Covered layout systems, wireframing, visual hierarchy, and user-friendly design decisions across devices.',
  },
  {
    title: 'Responsive Web Design Certificate',
    issuer: 'Web Skills Center',
    year: '2023',
    credential: 'Credential ID: RWD-2023-221',
    description: 'Validated responsive design principles, accessibility awareness, and layout techniques for modern websites.',
  },
]

const achievements = [
  {
    title: 'Portfolio Presentation Improved',
    detail: 'Turned a simple React starter into a structured, premium portfolio experience with strong consistency.',
  },
  {
    title: 'Document Showcase Ready',
    detail: 'Added a CV and application letter preview area so visitors can review professional documents directly on the page.',
  },
  {
    title: 'Interactive Experience Expanded',
    detail: 'Added active states, hover animations, and responsive viewers to make the portfolio more engaging.',
  },
]

const documents = [
  {
    id: 'cv',
    label: 'See My CV',
    title: 'Curriculum Vitae',
    file: '/media/cv.pdf',
    description: 'Use this viewer to present your professional summary, experience, education, and skills in one place.',
    hint: 'Add your real file as frontend/public/media/cv.pdf',
  },
  {
    id: 'application-letter',
    label: 'See My Application Letter',
    title: 'Application Letter',
    file: '/media/application-letter.pdf',
    description: 'Display a polished application letter directly inside the portfolio for recruiters or clients to review easily.',
    hint: 'Add your real file as frontend/public/media/application-letter.pdf',
  },
]

const cvLockedPreviewLines = [
  'Professional Summary',
  'Frontend developer focused on polished React interfaces, responsive layouts, and consistent visual systems.',
  'Experience includes interactive portfolios, UI refinement, reusable components, and premium document presentation.',
  'Core skills include React, Vite, JavaScript, CSS, responsive design, accessibility, and interface animation.',
  'Additional education, achievements, and work history become readable after the preview is unlocked.',
]

const contactLinks = [
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/your-linkedin',
    href: 'https://www.linkedin.com/in/your-linkedin',
  },
  {
    label: 'Email',
    value: 'hello@example.com',
    href: 'mailto:hello@example.com',
  },
  {
    label: 'Telegram',
    value: '@yourtelegram',
    href: 'https://t.me/yourtelegram',
  },
  {
    label: 'Instagram',
    value: '@yourinstagram',
    href: 'https://instagram.com/yourinstagram',
  },
]

const cubeGroups = [
  { id: 'cube-alpha', size: '15rem', x: '4%', y: '8%', duration: '19s', delay: '0s', driftX: '30px', driftY: '-26px' },
  { id: 'cube-beta', size: '10rem', x: '80%', y: '12%', duration: '14s', delay: '-4s', driftX: '-18px', driftY: '24px' },
  { id: 'cube-gamma', size: '8rem', x: '68%', y: '52%', duration: '16s', delay: '-7s', driftX: '24px', driftY: '-20px' },
  { id: 'cube-delta', size: '13rem', x: '9%', y: '66%', duration: '20s', delay: '-3s', driftX: '-16px', driftY: '28px' },
  { id: 'cube-epsilon', size: '7rem', x: '44%', y: '18%', duration: '12s', delay: '-6s', driftX: '12px', driftY: '18px' },
  { id: 'cube-zeta', size: '11rem', x: '54%', y: '76%', duration: '17s', delay: '-2s', driftX: '-22px', driftY: '-18px' },
  { id: 'cube-eta', size: '6rem', x: '28%', y: '36%', duration: '13s', delay: '-5s', driftX: '16px', driftY: '-12px' },
  { id: 'cube-theta', size: '9rem', x: '86%', y: '42%', duration: '18s', delay: '-8s', driftX: '-24px', driftY: '14px' },
  { id: 'cube-iota', size: '5.5rem', x: '34%', y: '78%', duration: '11s', delay: '-1s', driftX: '10px', driftY: '-10px' },
  { id: 'cube-kappa', size: '12rem', x: '61%', y: '6%', duration: '21s', delay: '-9s', driftX: '18px', driftY: '26px' },
]

function App() {
  const [selectedCertificate, setSelectedCertificate] = useState(certificates[0])
  const [selectedDocument, setSelectedDocument] = useState(documents[0])
  const [cvPasscode, setCvPasscode] = useState('')
  const [isCvUnlocked, setIsCvUnlocked] = useState(false)
  const [cvError, setCvError] = useState('')

  const isCvSelected = selectedDocument.id === 'cv'
  const isCvLocked = isCvSelected && !isCvUnlocked

  const handleInteractiveMove = (event) => {
    const element = event.currentTarget
    const rect = element.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width - 0.5
    const y = (event.clientY - rect.top) / rect.height - 0.5

    element.style.setProperty('--rx', `${-y * 6}deg`)
    element.style.setProperty('--ry', `${x * 8}deg`)
  }

  const resetInteractiveMove = (event) => {
    const element = event.currentTarget

    element.style.setProperty('--rx', '0deg')
    element.style.setProperty('--ry', '0deg')
  }

  const interactiveMotionProps = {
    onMouseMove: handleInteractiveMove,
    onMouseLeave: resetInteractiveMove,
  }

  const handleDocumentSelect = (document) => {
    setSelectedDocument(document)
    setCvPasscode('')
    setCvError('')
  }

  const handleCvUnlock = (event) => {
    event.preventDefault()

    if (cvPasscode === '121212') {
      setIsCvUnlocked(true)
      setCvPasscode('')
      setCvError('')
      return
    }

    setIsCvUnlocked(false)
    setCvError('Incorrect passcode. Please try again.')
  }

  return (
    <div className="portfolio-page">
      <div className="cube-scene" aria-hidden="true">
        {cubeGroups.map((cube) => (
          <div
            key={cube.id}
            className="cube-cluster"
            style={{
              '--cube-size': cube.size,
              '--cube-x': cube.x,
              '--cube-y': cube.y,
              '--cube-duration': cube.duration,
              '--cube-delay': cube.delay,
              '--cube-drift-x': cube.driftX,
              '--cube-drift-y': cube.driftY,
            }}
          >
            <span className="glass-cube outer" />
            <span className="glass-cube middle" />
            <span className="glass-cube inner" />
            <span className="glass-cube core" />
          </div>
        ))}
      </div>

      <header className="site-header surface" id="home">
        <a className="brand" href="#home">
          <span className="brand-mark">P</span>
          <div>
            <p className="eyebrow">T@@@@@ S@@@@@</p>
            <h2 className="brand-signature">Portifolio</h2>
          </div>
        </a>

        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#languages">Languages</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#certificates">Certificates</a>
          <a href="#documents">Documents</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="page-sections">
        <section className="hero-section">
          <div className="hero-copy surface interactive-card floating-panel" {...interactiveMotionProps}>
            <span className="pill">React Portfolio • Interactive UI • Premium Presentation</span>
            <h1>Consistent, elegant, and interactive frontend experiences with a fresh new look.</h1>
            <p>
              This portfolio now uses a warmer and more refined color system, stronger section consistency, richer
              interactions, and built-in document viewing for your CV and application letter.
            </p>

            <div className="hero-actions">
              <a className="button primary" href="#projects">See My Work</a>
              <a className="button secondary" href="#documents">Open My Documents</a>
            </div>
          </div>

          <aside className="hero-visual surface interactive-card floating-panel float-delay-1" aria-label="Portfolio visual preview" {...interactiveMotionProps}>
            <div className="hero-image-shell">
              <img src="/media/profile-showcase.svg" alt="Portfolio showcase artwork" />
            </div>

            <div className="hero-visual-card">
              <p className="eyebrow">Now included</p>
              <h3>Document viewers, richer interactions, a unified design system, and a shared media folder.</h3>
              <div className="chip-row">
                <span>CV Viewer</span>
                <span>Application Letter</span>
                <span>Shared Media Folder</span>
              </div>
            </div>
          </aside>
        </section>

        <section className="stats-grid" aria-label="Portfolio highlights">
          {stats.map((item) => (
            <article key={item.label} className="stat-card surface interactive-card" {...interactiveMotionProps}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </section>

        <section className="content-section" id="about">
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <h2>A portfolio system that feels coherent from top to bottom, not a collection of unrelated sections.</h2>
          </div>

          <div className="feature-grid">
            {highlights.map((item) => (
              <article key={item.title} className="feature-card surface interactive-card" {...interactiveMotionProps}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">Skills</p>
            <h2>Interactive skill cards with clear strength indicators and a cleaner, more consistent visual language.</h2>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <article key={skill.title} className="skill-card surface interactive-card" {...interactiveMotionProps}>
                <div className="skill-top">
                  <span className="project-type">Strength {skill.level}</span>
                  <h3>{skill.title}</h3>
                </div>
                <p>{skill.description}</p>
                <div className="skill-meter" aria-hidden="true">
                  <span className="skill-meter-fill" style={{ width: skill.level }} />
                </div>
                <div className="skill-tags">
                  {skill.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" id="languages">
          <div className="section-heading">
            <p className="eyebrow">Languages</p>
            <h2>Language ability presented clearly with ticked reading, writing, listening, and speaking strengths.</h2>
          </div>

          <div className="language-grid">
            {languages.map((language) => (
              <article key={language.name} className="language-card surface interactive-card" {...interactiveMotionProps}>
                <span className="project-type">{language.level}</span>
                <h3>{language.name}</h3>
                <ul className="language-list">
                  {language.skills.map((item) => (
                    <li key={item}>
                      <span className="language-tick" aria-hidden="true">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" id="experience">
          <div className="section-heading">
            <p className="eyebrow">Experience</p>
            <h2>Hands-on experience shaping clean interfaces, polished portfolio pages, and responsive user-focused layouts.</h2>
          </div>

          <div className="experience-grid">
            {experiences.map((item) => (
              <article key={`${item.role}-${item.company}`} className="experience-card surface interactive-card" {...interactiveMotionProps}>
                <span className="project-type">{item.period}</span>
                <h3>{item.role}</h3>
                <p className="experience-company">{item.company}</p>
                <p>{item.summary}</p>
                <ul className="experience-list">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">Projects</p>
            <h2>Selected concepts presented with stronger cards, clearer hierarchy, and more interactive details.</h2>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.name} className="project-card surface interactive-card" {...interactiveMotionProps}>
                <span className="project-type">{project.type}</span>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="skill-tags compact-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" id="certificates">
          <div className="section-heading">
            <p className="eyebrow">Certificates & Achievements</p>
            <h2>Interactive certificate selection paired with a focused preview area and supporting achievements.</h2>
          </div>

          <div className="certificates-layout">
            <div className="certificate-list" role="list" aria-label="Certificates list">
              {certificates.map((certificate) => {
                const isActive = selectedCertificate.title === certificate.title

                return (
                  <button
                    key={certificate.title}
                    type="button"
                    className={`certificate-card ${isActive ? 'active' : ''}`}
                    onClick={() => setSelectedCertificate(certificate)}
                  >
                    <span className="project-type">{certificate.year}</span>
                    <h3>{certificate.title}</h3>
                    <p>{certificate.issuer}</p>
                    <span className="certificate-action">Certificate View</span>
                  </button>
                )
              })}
            </div>

            <aside className="certificate-preview surface interactive-card floating-panel float-delay-2" aria-live="polite" {...interactiveMotionProps}>
              <p className="eyebrow">Certificate View</p>
              <h3>{selectedCertificate.title}</h3>
              <p className="certificate-issuer">{selectedCertificate.issuer}</p>
              <p>{selectedCertificate.description}</p>
              <div className="certificate-details">
                <span>{selectedCertificate.year}</span>
                <span>{selectedCertificate.credential}</span>
              </div>
            </aside>
          </div>

          <div className="achievement-grid">
            {achievements.map((achievement) => (
              <article key={achievement.title} className="achievement-card surface interactive-card" {...interactiveMotionProps}>
                <span className="project-type">Achievement</span>
                <h3>{achievement.title}</h3>
                <p>{achievement.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" id="documents">
          <div className="section-heading">
            <p className="eyebrow">Documents</p>
            <h2>See my application letter and my CV directly inside the portfolio with a built-in PDF viewer.</h2>
          </div>

          <div className="documents-grid">
            <div className="document-card surface interactive-card floating-panel float-delay-1" {...interactiveMotionProps}>
              <div className="document-switcher" role="tablist" aria-label="Document selector">
                {documents.map((document) => (
                  <button
                    key={document.id}
                    type="button"
                    className={`document-tab ${selectedDocument.id === document.id ? 'active' : ''}`}
                    onClick={() => handleDocumentSelect(document)}
                  >
                    {document.label}
                  </button>
                ))}
              </div>

              <div className="document-meta">
                <span className="project-type">PDF Viewer</span>
                <h3>{selectedDocument.title}</h3>
                <p>{selectedDocument.description}</p>
                <p className="document-hint">{selectedDocument.hint}</p>

                {isCvSelected && (
                  <div className="document-lock-panel">
                    <div className="document-lock-status">
                      <span className={`document-lock-badge ${isCvLocked ? 'locked' : 'unlocked'}`}>
                        {isCvLocked ? 'Locked' : 'Unlocked'}
                      </span>
                      <p>
                        {isCvLocked
                          ? 'Enter the passcode to review the CV inside this portfolio.'
                          : 'The CV preview is unlocked and ready to review below.'}
                      </p>
                    </div>

                    {isCvLocked ? (
                      <form className="document-passcode-form" onSubmit={handleCvUnlock}>
                        <label className="document-passcode-label" htmlFor="cv-passcode">
                          CV passcode
                        </label>

                        <div className="document-passcode-row">
                          <input
                            id="cv-passcode"
                            className="form-input"
                            type="password"
                            inputMode="numeric"
                            autoComplete="off"
                            maxLength={6}
                            placeholder="Enter passcode"
                            value={cvPasscode}
                            onChange={(event) => {
                              setCvPasscode(event.target.value)
                              setCvError('')
                            }}
                          />
                          <button type="submit" className="button primary">
                            Unlock CV
                          </button>
                        </div>

                        {cvError ? <p className="document-passcode-error">{cvError}</p> : null}
                      </form>
                    ) : (
                      <p className="document-unlocked-note">CV review is now available in the viewer.</p>
                    )}
                  </div>
                )}
              </div>

              <div className="hero-actions">
                {isCvLocked ? (
                  <span className="button primary button-disabled" aria-disabled="true">
                    Unlock CV to Open PDF
                  </span>
                ) : (
                  <a className="button primary" href={selectedDocument.file} target="_blank" rel="noreferrer">Open PDF</a>
                )}
                <a className="button secondary" href="/media/README.md" target="_blank" rel="noreferrer">Open Media Guide</a>
              </div>
            </div>

            <div className="document-viewer surface interactive-card floating-panel float-delay-2" {...interactiveMotionProps}>
              {isCvLocked ? (
                <div className="document-lock-screen" role="region" aria-label="Locked CV preview">
                  <span className="document-lock-badge locked">Locked CV Preview</span>
                  <div>
                    <h3>{selectedDocument.title}</h3>
                    <p className="document-lock-copy">The review area stays blurred until the correct passcode is entered.</p>
                  </div>

                  <div className="locked-preview" aria-hidden="true">
                    {cvLockedPreviewLines.map((line, index) => (
                      <p key={line} className={`locked-preview-line ${index === 0 ? 'is-heading' : ''}`}>
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ) : (
                <object
                  key={selectedDocument.id}
                  data={selectedDocument.file}
                  type="application/pdf"
                  className="document-frame"
                  aria-label={`${selectedDocument.title} viewer`}
                >
                  <div className="document-fallback">
                    <h3>{selectedDocument.title}</h3>
                    <p>Preview unavailable until the PDF file is added to the media folder.</p>
                    <a className="button secondary" href={selectedDocument.file} target="_blank" rel="noreferrer">
                      Try Opening PDF
                    </a>
                  </div>
                </object>
              )}
            </div>
          </div>
        </section>

        <section className="content-section contact-section" id="contact">
          <div className="section-heading">
            <p className="eyebrow">Contact</p>
            <h2>A cleaner contact experience with direct links, project details, and a form that matches the rest of the page.</h2>
          </div>

          <div className="contact-grid">
            <aside className="contact-panel surface interactive-card floating-panel" {...interactiveMotionProps}>
              <p className="eyebrow">Get In Touch</p>
              <h3>I&apos;m available for portfolio websites, landing pages, and polished React frontend work.</h3>
              <p>
                Share your project idea, preferred style, and timeline. You can also contact me directly through
                LinkedIn, Email, Telegram, or Instagram.
              </p>

              <div className="contact-links-grid">
                {contactLinks.map((item) => (
                  <a
                    key={item.label}
                    className="contact-link-card surface interactive-card"
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    {...interactiveMotionProps}
                  >
                    <span className="project-type">{item.label}</span>
                    <strong>{item.value}</strong>
                    <span className="contact-link-action">Open {item.label}</span>
                  </a>
                ))}
              </div>

              <div className="contact-note">
                <span className="status-dot" aria-hidden="true" />
                <p>Usually replies within 24 hours for new project inquiries.</p>
              </div>
            </aside>

            <form className="contact-form surface" onSubmit={(event) => event.preventDefault()}>
              <div className="form-row two-columns">
                <label className="form-field">
                  <span>Full Name</span>
                  <input className="form-input" type="text" name="name" placeholder="Your full name" />
                </label>

                <label className="form-field">
                  <span>Email Address</span>
                  <input className="form-input" type="email" name="email" placeholder="you@example.com" />
                </label>
              </div>

              <div className="form-row two-columns">
                <label className="form-field">
                  <span>Project Type</span>
                  <select className="form-input" name="projectType" defaultValue="">
                    <option value="" disabled>Select a project type</option>
                    <option value="portfolio">Portfolio Website</option>
                    <option value="landing-page">Landing Page</option>
                    <option value="dashboard">Dashboard UI</option>
                    <option value="frontend">Frontend Build</option>
                    <option value="other">Other</option>
                  </select>
                </label>

                <label className="form-field">
                  <span>Budget Range</span>
                  <select className="form-input" name="budget" defaultValue="">
                    <option value="" disabled>Select a budget range</option>
                    <option value="starter">Starter</option>
                    <option value="standard">Standard</option>
                    <option value="premium">Premium</option>
                    <option value="custom">Custom</option>
                  </select>
                </label>
              </div>

              <label className="form-field">
                <span>Subject</span>
                <input className="form-input" type="text" name="subject" placeholder="What do you need help with?" />
              </label>

              <label className="form-field">
                <span>Project Details</span>
                <textarea
                  className="form-input form-textarea"
                  name="message"
                  placeholder="Tell me about your goals, visual style, timeline, and anything important for the project..."
                  rows="6"
                />
              </label>

              <label className="form-checkbox">
                <input type="checkbox" name="updates" />
                <span>I&apos;d like to receive a reply about this inquiry.</span>
              </label>

              <button className="button primary submit-button" type="submit">Send Project Inquiry</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer surface">
        <p>© 2026 <span className="brand-signature">Portifolio</span>. Designed with React, consistent styling, richer interaction, and built-in document viewing.</p>
        <a href="#home">Back to top</a>
      </footer>
    </div>
  )
}

export default App
