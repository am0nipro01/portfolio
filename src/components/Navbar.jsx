import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const LANGS = ['fr', 'en', 'es', 'pt']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { t, i18n } = useTranslation()

  const links = [
    ['#hero',     t('nav.hero')],
    ['#projects', t('nav.projects')],
    ['#skills',   t('nav.skills')],
    ['#contact',  t('nav.contact')],
  ]

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
            {links.map(([href, label], i) => (
              <a key={href} href={href} style={{
                fontFamily: 'Space Grotesk', fontWeight: 700, letterSpacing: '-0.02em',
                color: i === 0 ? '#e46d55' : '#dec0ba',
                opacity: i === 0 ? 1 : 0.8,
                borderBottom: i === 0 ? '1px solid rgba(228,109,85,0.3)' : 'none',
                paddingBottom: i === 0 ? '2px' : 0,
                textDecoration: 'none', transition: 'color 0.3s',
              }}>
                {label}
              </a>
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
        {links.map(([href, label]) => (
          <a key={href} href={href} onClick={() => setOpen(false)} style={{
            fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '1.25rem',
            color: '#f2dedf', textDecoration: 'none', letterSpacing: '-0.02em',
          }}>
            {label}
          </a>
        ))}
        {/* Language switcher mobile */}
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
