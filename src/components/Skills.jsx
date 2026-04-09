const skills = [
  { icon: 'terminal',   label: 'React' },
  { icon: 'javascript', label: 'JavaScript' },
  { icon: 'palette',    label: 'Tailwind' },
  { icon: 'database',   label: 'Supabase' },
  { icon: 'memory',     label: 'Node.js' },
  { icon: 'code',       label: 'HTML / CSS' },
]

export default function Skills() {
  return (
    <section id="skills" className="skills-section" style={{ background: '#23191a' }}>
      <div className="xl-container" style={{ textAlign: 'center' }}>

        <div style={{ marginBottom: '3rem' }}>
          <span style={{ fontFamily: 'Inter', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.3em', color: '#ffb4a5', display: 'block', marginBottom: '1rem' }}>
            Technical Arsenal
          </span>
          <h2 style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', fontWeight: 700, letterSpacing: '-0.04em', color: '#f2dedf' }}>
            Tools of the Trade
          </h2>
        </div>

        <div className="skills-grid">
          {skills.map(skill => (
            <div key={skill.label} className="glass-card" style={{
              padding: '1.5rem 1rem', border: '1px solid rgba(87,66,62,0.10)',
              borderRadius: '0.25rem', display: 'flex', flexDirection: 'column',
              alignItems: 'center', gap: '0.75rem', cursor: 'default', transition: 'background 0.3s',
            }}
              onMouseEnter={e => e.currentTarget.style.background = '#3e3233'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(35,25,26,0.6)'}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '2.25rem', color: '#ffb4a5', fontVariationSettings: "'FILL' 1" }}>
                {skill.icon}
              </span>
              <span style={{ fontFamily: 'Space Grotesk', fontWeight: 700, color: '#dec0ba', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                {skill.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
