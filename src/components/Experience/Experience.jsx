import { experience } from '../../data/content'

export default function Experience() {
  return (
    <section id="experience" style={{ background: 'var(--bg-base)' }}>
      <p className="font-mono" style={{ color: 'var(--accent-cyan)', fontSize: '11px', letterSpacing: '0.12em', marginBottom: '0.75rem' }}>
        02. EXPERIENCE
      </p>
      <h2 className="gsap-heading" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '3.5rem', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '-0.02em' }}>
        Where I've worked
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem', maxWidth: '780px' }}>
        {experience.map((job, i) => (
          <div
            key={i}
            className="gsap-slide-right"
            style={{ borderLeft: '1px solid var(--border-strong)', paddingLeft: '2rem', position: 'relative' }}
          >
            <div style={{
              position: 'absolute', left: '-5px', top: '6px',
              width: '9px', height: '9px', borderRadius: '50%',
              background: 'var(--accent-cyan)',
              boxShadow: '0 0 8px rgba(100,255,218,0.5)',
            }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.3rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)', fontFamily: "'JetBrains Mono', monospace" }}>
                {job.role} <span style={{ color: 'var(--accent-cyan)' }}>@ {job.company}</span>
              </h3>
              <span className="font-mono" style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{job.period}</span>
            </div>
            <p className="font-mono" style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>{job.location}</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {job.bullets.map((b, j) => (
                <li key={j} style={{ display: 'flex', gap: '0.75rem', color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.75 }}>
                  <span style={{ color: 'var(--accent-cyan)', flexShrink: 0, marginTop: '2px' }}>▸</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}