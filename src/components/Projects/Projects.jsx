import { motion } from 'framer-motion'
import ProjectCard3D from './ProjectCard3D'
import { projects } from '../../data/content'

export default function Projects() {
  return (
    <section id="projects" style={{ background: 'var(--bg-surface)' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="font-mono" style={{ color: 'var(--accent-cyan)', fontSize: '11px', letterSpacing: '0.12em', marginBottom: '0.75rem' }}>
          05. PROJECTS
        </p>
        <h2 style={{
          fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700,
          color: 'var(--text-primary)', marginBottom: '3.5rem',
          fontFamily: "'JetBrains Mono', monospace", letterSpacing: '-0.02em',
        }}>
          Things I've built
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
        }}>
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
            >
              <ProjectCard3D project={project} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}