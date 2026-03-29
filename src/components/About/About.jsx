import { motion } from 'framer-motion'
import { personal } from '../../data/content'

export default function About() {
  return (
    <section id="about" style={{ background: 'var(--bg-surface)' }}>
      <div style={{ maxWidth: '700px' }}>
        <p className="font-mono" style={{ color: 'var(--accent-cyan)', fontSize: '11px', letterSpacing: '0.12em', marginBottom: '0.75rem' }}>
          01. ABOUT
        </p>
        <h2 className="gsap-heading" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1.75rem', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '-0.02em' }}>
          Who I am
        </h2>
        <p className="gsap-heading" style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.85, marginBottom: '1rem' }}>
          {personal.bio}
        </p>
        <p className="gsap-heading" style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.85 }}>
          Currently open to senior AI/ML engineering roles at companies pushing the frontier of applied AI.
        </p>
      </div>
    </section>
  )
}