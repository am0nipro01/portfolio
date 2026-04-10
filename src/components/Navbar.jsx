import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'

const LANGS = ['fr', 'en', 'es', 'pt']
const SECTIONS = ['hero', 'projects', 'skills', 'contact']

export default function Navbar() {
  const [open, setOpen]         = useState(false)
  const [active, setActive]     = useState('hero')
  const [langOpen, setLangOpen] = useState(false)
  const { t, i18n }             = useTranslation()
  const langRef                 = useRef(null)

  // Scroll spy
  useEffect(() => {
    let raf
    const handleScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const mid = window.scrollY + window.innerHeight * 0.4
        let found = SECTIONS[0]
        for (const id of SECTIONS) {
          const el = document.getElementById(id)
          if (el && el.offsetTop <= mid) found = id
        }
        setActive(found)
      })
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => { window.removeEventListener('scroll', handleScroll); cancelAnimationFrame(raf) }
  }, [])

  // Close dropdown on outside click
  useEffect(() => {
    const handler = e => {
      if (langRef.current && !langRef.current.contains(e.target)) setLangOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const links = [
    ['#hero',     'hero',     t('nav.hero')],
    ['#projects', 'projects', t('nav.projects')],
    ['#skills',   'skills',   t('nav.skills')],
    ['#contact',  'contact',  t('nav.contact')],
  ]

  const linkStyle = section => ({
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

          {/* Desktop nav links */}
          <div className="nav-links">
            {links.map(([href, section, label]) => (
              <a key={href} href={href} style={linkStyle(section)}>{label}</a>
            ))}
          </div>

          {/* Right cluster: CV + Lang + Burger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>

            {/* CV download */}
            <a href="/cv.pdf" download style={{
              fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '0.7rem',
              letterSpacing: '0.08em', textTransform: 'uppercase',
              color: '#e46d55',
              border: '1px solid rgba(228,109,85,0.35)',
              borderRadius: '0.25rem',
              padding: '0.35rem 0.7rem',
              textDecoration: 'none',
              transition: 'background 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(228,109,85,0.1)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              CV
            </a>

            {/* Language dropdown */}
            <div ref={langRef} style={{ position: 'relative' }}>
              <button
                onClick={() => setLangOpen(o => !o)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.2rem',
                  background: 'none', border: '1px solid rgba(87,66,62,0.35)',
                  borderRadius: '0.25rem', padding: '0.35rem 0.6rem',
                  cursor: 'pointer',
                  fontFamily: 'Space Grotesk', fontSize: '0.7rem',
                  fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                  color: '#dec0ba', transition: 'background 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#332728'}
                onMouseLeave={e => { if (!langOpen) e.currentTarget.style.background = 'transparent' }}
              >
                {i18n.language.toUpperCase()}
                <span className="material-symbols-outlined" style={{ fontSize: '0.9rem', transition: 'transform 0.2s', transform: langOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                  expand_more
                </span>
              </button>

              {langOpen && (
                <ul style={{
                  position: 'absolute', top: 'calc(100% + 0.5rem)', right: 0,
                  background: '#23191a',
                  border: '1px solid rgba(87,66,62,0.2)',
                  borderRadius: '0.375rem',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
                  listStyle: 'none', minWidth: '7rem', zIndex: 60, overflow: 'hidden',
                }}>
                  {LANGS.map(lang => (
                    <li
                      key={lang}
                      onClick={() => { i18n.changeLanguage(lang); setLangOpen(false) }}
                      style={{
                        padding: '0.625rem 1rem', cursor: 'pointer',
                        fontFamily: 'Space Grotesk', fontSize: '0.8rem',
                        fontWeight: i18n.language === lang ? 700 : 400,
                        color: i18n.language === lang ? '#e46d55' : '#dec0ba',
                        background: i18n.language === lang ? 'rgba(228,109,85,0.08)' : 'transparent',
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        transition: 'background 0.15s',
                      }}
                      onMouseEnter={e => { if (i18n.language !== lang) e.currentTarget.style.background = '#332728' }}
                      onMouseLeave={e => { if (i18n.language !== lang) e.currentTarget.style.background = 'transparent' }}
                    >
                      {lang.toUpperCase()}
                      {i18n.language === lang && (
                        <span className="material-symbols-outlined" style={{ fontSize: '0.9rem', color: '#e46d55' }}>check</span>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Burger — mobile only */}
            <button className="nav-burger" onClick={() => setOpen(o => !o)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#dec0ba', padding: '0.25rem' }}
              aria-label="Menu"
            >
              <span className="material-symbols-outlined">{open ? 'close' : 'menu'}</span>
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile drawer — nav links only */}
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
      </div>
    </>
  )
}
