import { useEffect, useState } from 'react'

const lines = [
  '> Initializing Shubham...',
  '> Role: Senior AI Engineer',
  '> Stack: LLMs · Agents · RAG · Python · GenAI',
  '> Status: Open to senior AI/ML roles',
  '> Building: Agentic AI at enterprise scale_',
]

export default function TerminalText() {
  const [displayed, setDisplayed] = useState([])
  const [currentLine, setCurrentLine] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)

  useEffect(() => {
    if (currentLine >= lines.length) return
    if (currentChar < lines[currentLine].length) {
      const t = setTimeout(() => {
        setDisplayed(prev => {
          const next = [...prev]
          next[currentLine] = (next[currentLine] || '') + lines[currentLine][currentChar]
          return next
        })
        setCurrentChar(c => c + 1)
      }, 28)
      return () => clearTimeout(t)
    } else {
      const t = setTimeout(() => {
        setCurrentLine(l => l + 1)
        setCurrentChar(0)
      }, 300)
      return () => clearTimeout(t)
    }
  }, [currentLine, currentChar])

  return (
    <div className="font-mono text-sm leading-7" style={{ color: 'var(--text-secondary)' }}>
      {displayed.map((line, i) => (
        <div key={i}>
          <span style={{ color: i === 0 ? 'var(--accent-cyan)' : 'var(--text-secondary)' }}>
            {line}
          </span>
          {i === currentLine && i < lines.length && (
            <span className="animate-pulse" style={{ color: 'var(--accent-cyan)' }}>▋</span>
          )}
        </div>
      ))}
    </div>
  )
}