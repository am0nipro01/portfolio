export default function Navbar() {
  return (
    <nav style={{
      position: 'fixed', top: 0, width: '100%', zIndex: 50,
      background: 'rgba(27,17,18,0.40)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
    }}>
      <div className="xl-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', paddingBottom: '1rem' }}>

        <span style={{ fontFamily: 'Space Grotesk', fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.05em', color: '#dec0ba' }}>
          Amoni
        </span>

        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          {[['#hero','Hero'],['#projects','Projects'],['#skills','Skills'],['#contact','Contact']].map(([href, label], i) => (
            <a key={href} href={href} style={{
              fontFamily: 'Space Grotesk', fontWeight: 700, letterSpacing: '-0.02em',
              color: i === 0 ? '#e46d55' : '#dec0ba',
              opacity: i === 0 ? 1 : 0.8,
              borderBottom: i === 0 ? '1px solid rgba(228,109,85,0.3)' : 'none',
              paddingBottom: i === 0 ? '2px' : '0',
              textDecoration: 'none', transition: 'color 0.3s',
            }}>
              {label}
            </a>
          ))}
        </div>

        <div style={{ fontFamily: 'Space Grotesk', fontSize: '0.875rem', letterSpacing: '0.1em', color: '#dec0ba', opacity: 0.8 }}>
          FR / EN / ES / PT
        </div>
      </div>
    </nav>
  )
}
