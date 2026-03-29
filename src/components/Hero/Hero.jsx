import { useRef, Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import TerminalText from './TerminalText'
import { personal } from '../../data/content'
import useIsMobile from '../../hooks/useIsMobile'

const HeroCanvas = lazy(() => import('./HeroCanvas'))

export default function Hero() {
  const mouse = useRef({ x: 0, y: 0 })
  const isMobile = useIsMobile()

  const handleMouseMove = (e) => {
    if (isMobile) return
    mouse.current = {
      x: (e.clientX / window.innerWidth - 0.5) * 2,
      y: -(e.clientY / window.innerHeight - 0.5) * 2,
    }
  }

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      style={{
        minHeight: '100vh',
        background: 'var(--bg-base)',
        position: 'relative',
        overflow: 'hidden',
        padding: 0,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* 3D Canvas */}
      {!isMobile && (
        <Suspense fallback={null}>
          <div style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.6 }}>
            <HeroCanvas mouse={mouse} />
          </div>
        </Suspense>
      )}

      {/* Mobile ambient */}
      {isMobile && (
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          background: 'radial-gradient(ellipse at 80% 20%, rgba(167,139,250,0.12) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(100,255,218,0.08) 0%, transparent 60%)',
        }} />
      )}

      {/* Grid */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        backgroundImage: `linear-gradient(rgba(100,255,218,0.025) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(100,255,218,0.025) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      {/* Content — left aligned */}
      <div style={{
        position: 'relative', zIndex: 2,
        width: '100%',
        padding: isMobile ? '7rem 6vw 5rem' : '0 10vw',
        maxWidth: '860px',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="font-mono" style={{
            color: 'var(--accent-cyan)', fontSize: '11px',
            marginBottom: '1.25rem', letterSpacing: '0.14em',
          }}>
            AVAILABLE FOR SENIOR ROLES
          </p>

          <h1 style={{
            fontSize: isMobile ? 'clamp(2.2rem, 9vw, 3.2rem)' : 'clamp(3rem, 6vw, 5.5rem)',
            fontWeight: 700,
            fontFamily: "'JetBrains Mono', monospace",
            color: 'var(--text-primary)',
            lineHeight: 1.05,
            marginBottom: '0.6rem',
            letterSpacing: '-0.02em',
          }}>
            {personal.name}
          </h1>

          <h2 style={{
            fontSize: isMobile ? '1rem' : 'clamp(1.1rem, 2vw, 1.4rem)',
            fontWeight: 400,
            color: 'var(--accent-violet)',
            marginBottom: '2.5rem',
            fontFamily: "'JetBrains Mono', monospace",
            letterSpacing: '0.02em',
          }}>
            {personal.title}
          </h2>

          <div style={{ marginBottom: '3rem' }}>
            <TerminalText />
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href={personal.resumeUrl}
              download
              style={{
                padding: '0.8rem 1.75rem',
                border: '1px solid var(--accent-cyan)',
                color: 'var(--accent-cyan)',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '12px', letterSpacing: '0.06em',
                textDecoration: 'none', transition: 'all 0.2s',
                background: 'rgba(100,255,218,0.05)',
                flex: isMobile ? '1' : 'unset',
                textAlign: 'center',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(100,255,218,0.12)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(100,255,218,0.05)'}
            >
              Download Resume
            </a>
            <a
              href={personal.linkedin}
              target="_blank" rel="noreferrer"
              style={{
                padding: '0.8rem 1.75rem',
                border: '1px solid var(--accent-violet)',
                color: 'var(--accent-violet)',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '12px', letterSpacing: '0.06em',
                textDecoration: 'none', transition: 'all 0.2s',
                background: 'rgba(167,139,250,0.05)',
                flex: isMobile ? '1' : 'unset',
                textAlign: 'center',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(167,139,250,0.12)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(167,139,250,0.05)'}
            >
              LinkedIn ↗
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      {!isMobile && (
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          style={{
            position: 'absolute', bottom: '2.5rem', left: '10vw',
            zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px',
          }}
        >
          <div style={{ width: '1px', height: '48px', background: 'linear-gradient(to bottom, var(--accent-cyan), transparent)' }} />
          <span className="font-mono" style={{ fontSize: '9px', color: 'var(--text-muted)', letterSpacing: '0.15em', writingMode: 'vertical-rl' }}>SCROLL</span>
        </motion.div>
      )}
    </section>
  )
}