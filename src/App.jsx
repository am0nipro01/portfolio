import { useState, useEffect } from 'react'
import Navbar   from './components/Navbar'
import Hero     from './components/Hero'
import Projects from './components/Projects'
import Skills   from './components/Skills'
import Contact  from './components/Contact'
import Footer   from './components/Footer'

function ScrollTop() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Retour en haut"
      style={{
        position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 50,
        width: 44, height: 44, borderRadius: '50%',
        background: 'rgba(228,109,85,0.12)',
        border: '1px solid rgba(228,109,85,0.3)',
        color: '#e46d55', cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        backdropFilter: 'blur(8px)',
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        transition: 'opacity 0.3s, background 0.2s',
      }}
      onMouseEnter={e => e.currentTarget.style.background = 'rgba(228,109,85,0.25)'}
      onMouseLeave={e => e.currentTarget.style.background = 'rgba(228,109,85,0.12)'}
    >
      <span className="material-symbols-outlined" style={{ fontSize: '1.25rem' }}>arrow_upward</span>
    </button>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </>
  )
}
