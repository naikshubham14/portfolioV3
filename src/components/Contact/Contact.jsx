import { personal } from '../../data/content'

export default function Contact() {
  return (
    <section id="contact" style={{ background: 'var(--bg-surface)' }}>
      <div style={{ maxWidth: '600px' }}>
        <p className="font-mono" style={{ color: 'var(--accent-cyan)', fontSize: '11px', letterSpacing: '0.12em', marginBottom: '0.75rem' }}>
          07. CONTACT
        </p>
        <h2 className="gsap-heading" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '-0.02em' }}>
          Get in touch
        </h2>
        <p className="gsap-heading" style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.85, marginBottom: '3rem' }}>
          Open to senior AI/ML engineering roles. Reach out directly — I respond within 24 hours.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <a
            href={`mailto:${personal.email}`}
            className="font-mono"
            style={{ fontSize: '14px', color: 'var(--accent-cyan)', textDecoration: 'none', letterSpacing: '0.04em', opacity: 1, transition: 'opacity 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.6'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            {personal.email} ↗
          </a>
          <a
            href={personal.linkedin}
            target="_blank" rel="noreferrer"
            className="font-mono"
            style={{ fontSize: '14px', color: 'var(--accent-violet)', textDecoration: 'none', letterSpacing: '0.04em', opacity: 1, transition: 'opacity 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.6'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            LinkedIn ↗
          </a>
          <a
            href={personal.github}
            target="_blank" rel="noreferrer"
            className="font-mono"
            style={{ fontSize: '14px', color: 'var(--text-secondary)', textDecoration: 'none', letterSpacing: '0.04em', opacity: 1, transition: 'opacity 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.6'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </section>
  )
}