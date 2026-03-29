import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import ScrollProgress from './components/ScrollProgress/ScrollProgress'
import CursorGlow from './components/CursorGlow/CursorGlow'
import useScrollAnimation from './hooks/useScrollAnimation'

export default function App() {
  useScrollAnimation()

  return (
    <main style={{ position: 'relative' }}>
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}