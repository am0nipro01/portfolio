import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'

const DOTS = ['#ff5f57', '#febc2e', '#28c840']

function SnippetDots() {
  return (
    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
      {DOTS.map((c, i) => <div key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />)}
    </div>
  )
}

export default function Hero() {
  const { t } = useTranslation()
  const [mobileSlide, setMobileSlide] = useState(0)
  const [peeking, setPeeking]         = useState(false)
  const hasSwiped   = useRef(false)
  const touchStartX = useRef(null)

  // Auto-peek after 2s — montre qu'il y a un contenu à droite
  useEffect(() => {
    const id = setTimeout(() => {
      if (!hasSwiped.current) {
        setPeeking(true)
        setTimeout(() => setPeeking(false), 700)
      }
    }, 2000)
    return () => clearTimeout(id)
  }, [])

  const handleTouchStart = e => {
    touchStartX.current = e.touches[0].clientX
    hasSwiped.current = true
  }
  const handleTouchEnd = e => {
    if (touchStartX.current === null) return
    const dx = touchStartX.current - e.changedTouches[0].clientX
    if (dx > 40) setMobileSlide(1)
    else if (dx < -40) setMobileSlide(0)
    touchStartX.current = null
  }

  // Snippet JSX partagé desktop + mobile
  const snippetContent = (
<pre style={{ color: '#dec0ba', lineHeight: 1.65, margin: 0, whiteSpace: 'pre-wrap' }}>
<span style={{ color: '#ffb4a5' }}>function</span>{' '}<span style={{ color: '#eabbba' }}>Amoni</span>{'() {\n  '}<span style={{ color: '#ffb4a5' }}>const</span>{' [available] = '}<span style={{ color: '#eabbba' }}>useState</span>{'('}<span style={{ color: '#e46d55' }}>true</span>{')\n\n  '}<span style={{ color: '#ffb4a5' }}>return</span>{' (\n    '}<span style={{ color: '#eabbba' }}>&lt;Dev</span>{'\n      base='}<span style={{ color: '#ffb4a7' }}>"Paris"</span>{'\n      mobile={['}<span style={{ color: '#ffb4a7' }}>"Bruxelles"</span>{', '}<span style={{ color: '#ffb4a7' }}>"Luxembourg"</span>{', '}<span style={{ color: '#ffb4a7' }}>"Barcelone"</span>{']\n      stack={['}<span style={{ color: '#ffb4a7' }}>"React"</span>{', '}<span style={{ color: '#ffb4a7' }}>"Vite"</span>{', '}<span style={{ color: '#ffb4a7' }}>"Tailwind"</span>{']\n      open={'}<span style={{ color: '#e46d55' }}>available</span>{'}\n    '}<span style={{ color: '#eabbba' }}>/&gt;</span>{'\n  )\n}\n\n'}<span style={{ color: '#a58b85' }}>{'// Freelance · Remote · Relocation EU'}</span>{'\n'}<span style={{ color: '#ffb4a5' }}>await</span>{' world.'}<span style={{ color: '#eabbba' }}>hire</span>{'(Amoni)'}
</pre>
  )

  return (
    <section id="hero" className="hero-section" style={{ position: 'relative' }}>
      <div className="xl-container hero-grid">

        {/* Left — Photo (desktop only) */}
        <div className="hero-photo-col">
          <div style={{
            position: 'relative', borderRadius: '1rem', overflow: 'hidden',
            aspectRatio: '3/4',
            boxShadow: '0 30px 70px rgba(0,0,0,0.5), 0 0 0 1px rgba(87,66,62,0.15)',
          }}>
            <img src="/amoni.jpg" alt="Amoni" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(27,17,18,0.55) 0%, transparent 55%)', pointerEvents: 'none' }} />
          </div>
        </div>

        {/* Right — Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>

          {/* Badge — desktop only (mobile : dans la photo du carousel) */}
          <div className="hero-badge-top">
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'rgba(228,109,85,0.10)', border: '1px solid rgba(228,109,85,0.3)',
              borderRadius: '0.25rem', padding: '0.35rem 0.875rem',
              fontFamily: 'Space Grotesk', fontWeight: 700,
              fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#e46d55',
            }}>
              <span className="badge-dot" />
              {t('hero.badge')}
            </span>
          </div>

          {/* Title */}
          <h1 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 'clamp(2.75rem, 5vw, 4.5rem)', lineHeight: 1.05, letterSpacing: '-0.04em', color: '#f2dedf' }}>
            {t('hero.title1')} <br />
            <span style={{ color: '#e46d55' }}>{t('hero.title2')}</span>
          </h1>

          {/* Description */}
          <p style={{ fontSize: '0.95rem', color: '#dec0ba', maxWidth: '30rem', lineHeight: 1.75 }}>
            {t('hero.description')}
          </p>

          {/* Snippet — desktop uniquement */}
          <div className="hero-snippet-desktop">
            <div className="glass-card" style={{ border: '1px solid rgba(87,66,62,0.15)', borderRadius: '0.75rem', padding: '1.25rem', fontFamily: 'monospace', fontSize: '0.8rem', overflow: 'hidden' }}>
              <SnippetDots />
              {snippetContent}
            </div>
          </div>

          {/* Carousel photo + snippet — mobile uniquement */}
          <div className="hero-mobile-carousel">
            <div style={{ overflow: 'hidden' }}>
              <div
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                style={{
                  display: 'flex',
                  transition: 'transform 0.45s cubic-bezier(0.4,0,0.2,1)',
                  transform: peeking
                    ? 'translateX(-18%)'
                    : `translateX(${-mobileSlide * 100}%)`,
                }}
              >
                {/* Slide 0 : Photo */}
                <div style={{ flex: '0 0 100%' }}>
                  <div style={{ aspectRatio: '3/4', borderRadius: '0.75rem', overflow: 'hidden', position: 'relative' }}>
                    <img src="/amoni.jpg" alt="Amoni" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(27,17,18,0.5) 0%, transparent 55%)', pointerEvents: 'none' }} />
                    {/* Badge overlay bas-droite */}
                    <span style={{
                      position: 'absolute', bottom: '0.875rem', right: '0.875rem',
                      display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                      background: 'rgba(23,14,15,0.80)', backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(228,109,85,0.35)',
                      borderRadius: '0.25rem', padding: '0.3rem 0.7rem',
                      fontFamily: 'Space Grotesk', fontWeight: 700,
                      fontSize: '0.55rem', textTransform: 'uppercase', letterSpacing: '0.18em', color: '#e46d55',
                    }}>
                      <span className="badge-dot" />
                      {t('hero.badge')}
                    </span>
                  </div>
                </div>

                {/* Slide 1 : Snippet */}
                <div style={{ flex: '0 0 100%', paddingLeft: '0.75rem' }}>
                  <div className="glass-card" style={{ border: '1px solid rgba(87,66,62,0.15)', borderRadius: '0.75rem', padding: '1.25rem', fontFamily: 'monospace', fontSize: '0.76rem', overflow: 'hidden' }}>
                    <SnippetDots />
                    {snippetContent}
                  </div>
                </div>
              </div>
            </div>

            {/* Dots indicateurs */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '0.75rem' }}>
              {[0, 1].map(i => (
                <button key={i} onClick={() => { setMobileSlide(i); hasSwiped.current = true }} style={{
                  width: i === mobileSlide ? 20 : 8, height: 8,
                  borderRadius: 9999, border: 'none', cursor: 'pointer', padding: 0,
                  background: i === mobileSlide ? '#e46d55' : '#57423e',
                  transition: 'all 0.3s',
                }} />
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <a href="#projects" className="cta-gradient" style={{ display: 'inline-block', color: '#f2dedf', padding: '0.875rem 2rem', borderRadius: '0.375rem', fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '1rem', letterSpacing: '-0.02em', textDecoration: 'none', transition: 'filter 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.filter = 'brightness(1.1)'}
              onMouseLeave={e => e.currentTarget.style.filter = 'brightness(1)'}
            >
              {t('hero.cta_primary')}
            </a>
            <a href="#contact" style={{ display: 'inline-block', color: '#dec0ba', padding: '0.875rem 2rem', borderRadius: '0.375rem', fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '1rem', letterSpacing: '-0.02em', textDecoration: 'none', border: '1px solid rgba(87,66,62,0.4)', transition: 'background 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.background = '#332728'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              {t('hero.cta_secondary')}
            </a>
          </div>

        </div>
      </div>

      {/* Scroll hint — desktop only */}
      <div className="hero-scroll-hint" style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', pointerEvents: 'none' }}>
        <span style={{ fontFamily: 'Inter', fontSize: '0.55rem', letterSpacing: '0.35em', color: '#a58b85', textTransform: 'uppercase' }}>Scroll</span>
        <div style={{ width: '1px', height: '2.5rem', background: 'rgba(165,139,133,0.15)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent, #a58b85, transparent)', animation: 'scroll-hint-line 2s ease-in-out infinite' }} />
        </div>
      </div>

    </section>
  )
}
