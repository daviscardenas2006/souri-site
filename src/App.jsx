import './App.css'

// Replace these when links are finalized
const LINKS = {
  github: 'https://github.com/daviscardenas2006/souri',
  docs: 'https://github.com/daviscardenas2006/souri/tree/main/docs',
  architecture: '#architecture',
  privacy: '#privacy',
  roadmap: '#roadmap',
}

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="header-inner">
          <div className="brand">
            <img src="/branding/souri-mark.svg" alt="" className="brand-mark" aria-hidden="true" />
            <span className="brand-name">SOURI</span>
            <span className="brand-badge">Privacy-first · Local-first</span>
          </div>
          <nav className="header-nav">
            <a href={LINKS.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={LINKS.docs} target="_blank" rel="noopener noreferrer">Docs</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <h1 className="hero-headline">Protect sensitive data before it reaches AI.</h1>
          <p className="hero-text">
            SOURI is a privacy-first, local-first browser extension that helps users detect,
            sanitize, and audit sensitive information in prompts before submission.
          </p>
          <div className="hero-ctas">
            <a href={LINKS.github} className="btn btn-primary" target="_blank" rel="noopener noreferrer">View on GitHub</a>
            <a href={LINKS.docs} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">Read the docs</a>
          </div>
        </section>

        <section className="section problem">
          <h2 className="section-title">The problem</h2>
          <p className="section-text">
            Users often paste emails, phone numbers, credentials, identifiers, and other
            sensitive information into AI tools with little visibility before submission.
            Once sent, that data is outside your control.
          </p>
        </section>

        <section className="section what">
          <h2 className="section-title">What SOURI does</h2>
          <div className="cards">
            <div className="card">
              <h3>Detects</h3>
              <p>Detects sensitive data in active inputs before you submit.</p>
            </div>
            <div className="card">
              <h3>Sanitizes</h3>
              <p>Sanitizes content before submission so only safe text is sent.</p>
            </div>
            <div className="card">
              <h3>Audit trail</h3>
              <p>Keeps a visible audit trail of what was detected and changed.</p>
            </div>
            <div className="card">
              <h3>Rules</h3>
              <p>Turns real events into reusable rules for consistent protection.</p>
            </div>
          </div>
        </section>

        <section className="section local">
          <h2 className="section-title">Why local-first matters</h2>
          <p className="section-text">
            Processing runs on your device. Detection and sanitization happen before
            sensitive data leaves the screen, reducing unnecessary exposure to third-party
            services.
          </p>
        </section>

        <section className="section preview">
          <h2 className="section-title">Product preview</h2>
          <div className="preview-grid">
            <div className="preview-card">
              <div className="preview-frame">
                <img src="/screenshots/01-popup-overview.jpg" alt="SOURI extension popup overview" className="preview-img" />
              </div>
              <span className="preview-label">Popup overview</span>
            </div>
            <div className="preview-card">
              <div className="preview-frame">
                <img src="/screenshots/06-rules-list.png" alt="SOURI rules list" className="preview-img" />
              </div>
              <span className="preview-label">Rules list</span>
            </div>
            <div className="preview-card">
              <div className="preview-frame">
                <img src="/screenshots/04-audit-viewer.png" alt="SOURI audit viewer" className="preview-img" />
              </div>
              <span className="preview-label">Audit viewer</span>
            </div>
            <div className="preview-card">
              <div className="preview-frame">
                <img src="/screenshots/05-create-rule-from-event.png" alt="SOURI create rule from event" className="preview-img" />
              </div>
              <span className="preview-label">Create rule from event</span>
            </div>
          </div>
        </section>

        <section className="section how">
          <h2 className="section-title">How it works</h2>
          <ol className="steps">
            <li><strong>Detect</strong> — SOURI scans active inputs for sensitive patterns.</li>
            <li><strong>Review</strong> — You see what was found before anything is sent.</li>
            <li><strong>Sanitize</strong> — Replace or redact sensitive parts with one action.</li>
            <li><strong>Audit and refine</strong> — Use the audit log to create or adjust rules.</li>
          </ol>
        </section>

        <section className="section status">
          <h2 className="section-title">Current status</h2>
          <p className="section-text">
            SOURI is in active development. This public presence focuses on documentation,
            screenshots, and product direction. The core implementation remains private
            during the early product phase.
          </p>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <img src="/branding/souri-mark.svg" alt="" className="footer-mark" aria-hidden="true" />
          <nav className="footer-nav">
            <a href={LINKS.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={LINKS.architecture}>Architecture</a>
            <a href={LINKS.privacy}>Privacy</a>
            <a href={LINKS.roadmap}>Roadmap</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default App
