import { useState } from 'react'
import { motion } from 'framer-motion'
import useIsMobile from '../../hooks/useIsMobile'

export default function ProjectCard3D({ project }) {
  const [flipped, setFlipped] = useState(false)
  const isMobile = useIsMobile()

  const cardStyle = {
    background: 'var(--bg-elevated)',
    border: '1px solid var(--border-strong)',
    padding: '1.75rem',
  }

  if (isMobile) {
    return (
      <div style={cardStyle}>
        <p className="font-mono" style={{ fontSize: '10px', color: 'var(--accent-cyan)', letterSpacing: '0.12em', marginBottom: '0.6rem' }}>
          PROJECT
        </p>
        <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--text-primary)', fontFamily: "'JetBrains Mono', monospace", marginBottom: '0.4rem' }}>
          {project.name}
        </h3>
        <p style={{ fontSize: '0.85rem', color: 'var(--accent-violet)', marginBottom: '0.75rem' }}>{project.tagline}</p>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1.25rem' }}>
          {project.description}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
          {project.stack.map((s, i) => (
            <span key={i} className="font-mono" style={{ fontSize: '10px', color: 'var(--accent-cyan)', border: '1px solid var(--border)', padding: '3px 9px' }}>
              {s}
            </span>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '1.25rem' }}>
          {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="font-mono" style={{ fontSize: '12px', color: 'var(--accent-cyan)', textDecoration: 'none' }}>GitHub ↗</a>}
          {project.live && <a href={project.live} target="_blank" rel="noreferrer" className="font-mono" style={{ fontSize: '12px', color: 'var(--accent-violet)', textDecoration: 'none' }}>Live ↗</a>}
        </div>
      </div>
    )
  }

  return (
    <div
      onClick={() => setFlipped(f => !f)}
      style={{ cursor: 'pointer', perspective: '1200px', height: '300px' }}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.55, ease: 'easeInOut' }}
        style={{ width: '100%', height: '100%', position: 'relative', transformStyle: 'preserve-3d' }}
      >
        {/* Front */}
        <div style={{
          ...cardStyle,
          position: 'absolute', inset: 0,
          backfaceVisibility: 'hidden',
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          transition: 'border-color 0.2s',
        }}>
          <div>
            <p className="font-mono" style={{ fontSize: '10px', color: 'var(--accent-cyan)', letterSpacing: '0.12em', marginBottom: '0.75rem' }}>PROJECT</p>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-primary)', fontFamily: "'JetBrains Mono', monospace", marginBottom: '0.6rem' }}>
              {project.name}
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--accent-violet)', lineHeight: 1.6 }}>{project.tagline}</p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
              {project.stack.slice(0, 3).map((s, i) => (
                <span key={i} className="font-mono" style={{ fontSize: '10px', color: 'var(--text-muted)', border: '1px solid var(--border)', padding: '2px 7px' }}>{s}</span>
              ))}
              {project.stack.length > 3 && <span className="font-mono" style={{ fontSize: '10px', color: 'var(--text-muted)' }}>+{project.stack.length - 3}</span>}
            </div>
            <p className="font-mono" style={{ fontSize: '10px', color: 'var(--text-muted)', flexShrink: 0 }}>flip ↗</p>
          </div>
        </div>

        {/* Back */}
        <div style={{
          ...cardStyle,
          position: 'absolute', inset: 0,
          backfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)',
          border: '1px solid var(--accent-cyan)',
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        }}>
          <div>
            <p className="font-mono" style={{ fontSize: '10px', color: 'var(--accent-cyan)', letterSpacing: '0.12em', marginBottom: '0.6rem' }}>{project.name.toUpperCase()}</p>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1.25rem' }}>
              {project.description}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {project.stack.map((s, i) => (
                <span key={i} className="font-mono" style={{ fontSize: '10px', color: 'var(--accent-cyan)', border: '1px solid var(--border)', padding: '2px 8px' }}>{s}</span>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', gap: '1.25rem' }}>
            {project.github && <a href={project.github} target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()} className="font-mono" style={{ fontSize: '12px', color: 'var(--accent-cyan)', textDecoration: 'none' }}>GitHub ↗</a>}
            {project.live && <a href={project.live} target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()} className="font-mono" style={{ fontSize: '12px', color: 'var(--accent-violet)', textDecoration: 'none' }}>Live ↗</a>}
          </div>
        </div>
      </motion.div>
    </div>
  )
}