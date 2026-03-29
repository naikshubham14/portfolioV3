import { useEffect, useRef } from 'react'
import useIsMobile from '../../hooks/useIsMobile'

export default function CursorGlow() {
  const glowRef = useRef()
  const isMobile = useIsMobile()

  useEffect(() => {
    if (isMobile) return
    const move = (e) => {
      if (!glowRef.current) return
      glowRef.current.style.left = e.clientX + 'px'
      glowRef.current.style.top = e.clientY + 'px'
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [isMobile])

  if (isMobile) return null

  return (
    <div
      ref={glowRef}
      style={{
        position: 'fixed',
        width: '400px', height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(100,255,218,0.04) 0%, transparent 70%)',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        zIndex: 1,
        transition: 'left 0.12s ease, top 0.12s ease',
      }}
    />
  )
}