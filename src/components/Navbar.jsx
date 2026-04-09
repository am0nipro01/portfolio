import { useState } from 'react'

const links = [
  ['#hero',     'Hero'],
  ['#projects', 'Projects'],
  ['#skills',   'Skills'],
  ['#contact',  'Contact'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, width: '100%', zIndex: 50,
        background: 'rgba(27,17,18,0.40)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
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

          <span className="nav-lang" style={{ fontFamily: 'Space Grotesk', fontSize: '0.8rem', letterSpacing: '0.1em', color: '#dec0ba', opacity: 0.8 }}>
            FR / EN / ES / PT
          </span>

          {/* Burger mobile */}
          <button
            className="nav-burger"
            onClick={() => setOpen(o => !o)}
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
        <span style={{ fontFamily: 'Space Grotesk', fontSize: '0.8rem', letterSpacing: '0.1em', color: '#dec0ba', opacity: 0.7, marginTop: '0.5rem' }}>
          FR / EN / ES / PT
        </span>
      </div>
    </>
  )
}
