const socials = [
  { href: 'https://github.com/am0nipro01', icon: 'code',  label: 'GitHub' },
  { href: 'https://linkedin.com/',          icon: 'share', label: 'LinkedIn' },
  { href: 'mailto:hello@amoni.dev',         icon: 'mail',  label: 'Email' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#1b1112', paddingTop: '3rem', paddingBottom: '3rem' }}>
      <div className="xl-container">
        <div className="footer-inner">
          <span style={{ fontFamily: 'Inter', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#dec0ba', opacity: 0.6 }}>
            © 2025 Amoni. Crafted with precision.
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            {socials.map(({ href, icon, label }) => (
              <a key={icon} href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer" aria-label={label}
                style={{ color: '#dec0ba', opacity: 0.6, textDecoration: 'none', transition: 'opacity 0.2s, color 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.color = '#e46d55' }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '0.6'; e.currentTarget.style.color = '#dec0ba' }}
              >
                <span className="material-symbols-outlined">{icon}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
