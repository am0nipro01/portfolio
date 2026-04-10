import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const LANGS = ['fr', 'en', 'es', 'pt']
const SECTIONS = ['hero', 'projects', 'skills', 'contact']

export default function Navbar() {
  const [open, setOpen]               = useState(false)
  const [active, setActive]           = useState('hero')
  const { t, i18n }                   = useTranslation()

  // Intersection Observer — suit la section visible
  useEffect(() => {
    const observers = SECTIONS.map(id => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { threshold: 0.35 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(o => o?.disconnect())
  }, [])

  const links = [
    ['#hero',     'hero',     t('nav.hero')],
    ['#projects', 'projects', t('nav.projects')],
    ['#skills',   'skills',   t('nav.skills')],
    ['#contact',  'contact',  t('nav.contact')],
  ]

  const linkStyle = (section) => ({
    fontFamily: 'Space Grotesk', fontWeight: 700, letterSpacing: '-0.02em',
    color: active === section ? '#e46d55' : '#dec0ba',
    opacity: active === section ? 1 : 0.8,
    borderBottom: active === section ? '1px solid rgba(228,109,85,0.3)' : 'none',
    paddingBottom: active === section ? '2px' : 0,
    textDecoration: 'none', transition: 'color 0.3s',
  })

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, width: '100%', zIndex: 50,
        background: 'rgba(27,17,18,0.40)',
        backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
      }}>
        <div className="xl-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '0.875rem', paddingBottom: '0.875rem' }}>

          <span style={{ fontFamily: 'Space Grotesk', fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.05em', color: '#dec0ba' }}>
            Amoni
          </span>

          {/* Desktop links */}
          <div className="nav-links">
            {links.map(([href, section, label]) => (
              <a key={href} href={href} style={linkStyle(section)}>{label}</a>
            ))}
          </div>

          {/* Language switcher desktop */}
          <div className="nav-lang" style={{ display: 'flex', gap: '0.4rem' }}>
            {LANGS.map((lang, i) => (
              <span key={lang} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <button onClick={() => i18n.changeLanguage(lang)} style={{
                  background: 'none', border: 'none', cursor: 'pointer', padding: 0,
                  fontFamily: 'Space Grotesk', fontSize: '0.8rem', letterSpacing: '0.05em',
                  fontWeight: i18n.language === lang ? 700 : 400,
                  color: i18n.language === lang ? '#e46d55' : '#dec0ba',
                  opacity: i18n.language === lang ? 1 : 0.7,
                  transition: 'color 0.2s',
                }}>
                  {lang.toUpperCase()}
                </button>
                {i < LANGS.length - 1 && <span style={{ color: '#57423e', fontSize: '0.7rem' }}>/</span>}
              </span>
            ))}
          </div>

          {/* Burger mobile */}
          <button className="nav-burger" onClick={() => setOpen(o => !o)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#dec0ba', padding: '0.25rem' }}
            aria-label="Menu"
          >
            <span className="material-symbols-outlined">{open ? 'close' : 'menu'}</span>
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`mobile-menu${open ? ' open' : ''}`}>
        {links.map(([href, section, label]) => (
          <a key={href} href={href} onClick={() => setOpen(false)} style={{
            fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '1.25rem',
            color: active === section ? '#e46d55' : '#f2dedf',
            textDecoration: 'none', letterSpacing: '-0.02em',
          }}>
            {label}
          </a>
        ))}
        <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
          {LANGS.map(lang => (
            <button key={lang} onClick={() => { i18n.changeLanguage(lang); setOpen(false) }} style={{
              background: 'none', border: 'none', cursor: 'pointer', padding: 0,
              fontFamily: 'Space Grotesk', fontSize: '1rem', fontWeight: i18n.language === lang ? 700 : 400,
              color: i18n.language === lang ? '#e46d55' : '#dec0ba',
              opacity: i18n.language === lang ? 1 : 0.7,
            }}>
              {lang.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </>
  )
}
