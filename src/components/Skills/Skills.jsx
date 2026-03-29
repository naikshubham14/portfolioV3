import { skills } from '../../data/content'

export default function Skills() {
  return (
    <section id="skills" style={{ background: 'var(--bg-base)' }}>
      <p className="font-mono" style={{ color: 'var(--accent-cyan)', fontSize: '11px', letterSpacing: '0.12em', marginBottom: '0.75rem' }}>
        06. SKILLS
      </p>
      <h2 className="gsap-heading" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '3.5rem', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '-0.02em' }}>
        Tech stack
      </h2>

      <div className="gsap-stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', maxWidth: '960px' }}>
        {Object.entries(skills).map(([category, items], i) => (
          <div
            key={i}
            className="gsap-item"
            style={{
              background: 'var(--bg-elevated)',
              border: '1px solid var(--border-strong)',
              padding: '1.5rem',
            }}
          >
            <p className="font-mono" style={{ fontSize: '10px', color: 'var(--accent-cyan)', letterSpacing: '0.12em', marginBottom: '1rem' }}>
              {category.toUpperCase()}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {items.map((skill, j) => (
                <span
                  key={j}
                  className="font-mono gsap-pop"
                  style={{
                    fontSize: '11px', color: 'var(--text-secondary)',
                    background: 'rgba(100,255,218,0.04)',
                    border: '1px solid var(--border)',
                    padding: '3px 10px',
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}