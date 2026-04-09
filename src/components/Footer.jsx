export default function Footer() {
  return (
    <footer style={{ background: '#1b1112', padding: '3rem 0' }}>
      <div className="xl-container" style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        borderTop: '1px solid rgba(87,66,62,0.15)', paddingTop: '2rem',
        flexWrap: 'wrap', gap: '1.5rem',
      }}>
        <div style={{ fontFamily: 'Inter', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#dec0ba', opacity: 0.6 }}>
          © 2025 Amoni. Crafted with precision.
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          {[
            { href: 'https://github.com/am0nipro01', icon: 'code', label: 'GitHub' },
            { href: 'https://linkedin.com/', icon: 'share', label: 'LinkedIn' },
            { href: 'mailto:hello@amoni.dev', icon: 'mail', label: 'Email' },
          ].map(({ href, icon, label }) => (
            <a key={icon} href={href} target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer" aria-label={label}
              style={{ color: '#dec0ba', opacity: 0.6, textDecoration: 'none', transition: 'opacity 0.2s, color 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.color = '#e46d55'; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '0.6'; e.currentTarget.style.color = '#dec0ba'; }}
            >
              <span className="material-symbols-outlined">{icon}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
