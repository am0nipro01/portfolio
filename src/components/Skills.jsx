import { useTranslation } from 'react-i18next'

const skills = [
  { icon: 'terminal',   label: 'React' },
  { icon: 'javascript', label: 'JavaScript' },
  { icon: 'palette',    label: 'Tailwind' },
  { icon: 'database',   label: 'Supabase' },
  { icon: 'memory',     label: 'Node.js' },
  { icon: 'code',       label: 'HTML / CSS' },
]

export default function Skills() {
  const { t } = useTranslation()

  return (
    <section id="skills" className="skills-section" style={{ background: '#23191a' }}>
      <div className="xl-container" style={{ textAlign: 'center' }}>

        <div style={{ marginBottom: '3rem' }}>
          <span style={{ fontFamily: 'Inter', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.3em', color: '#ffb4a5', display: 'block', marginBottom: '1rem' }}>
            {t('skills.label')}
          </span>
          <h2 style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', fontWeight: 700, letterSpacing: '-0.04em', color: '#f2dedf', marginBottom: '1.25rem' }}>
            {t('skills.heading')}
          </h2>
          {/* Placeholder — à remplacer à l'atelier 5 */}
          <p style={{ fontFamily: 'Inter', fontSize: '1rem', color: '#dec0ba', opacity: 0.7, maxWidth: '40rem', margin: '0 auto', lineHeight: 1.8 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
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

        {/* Placeholder bas de section — à remplacer à l'atelier 5 */}
        <div style={{ marginTop: '4rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(16rem, 1fr))', gap: '1.5rem', textAlign: 'left' }}>
          {[
            { title: 'Frontend', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' },
            { title: 'Backend', body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.' },
            { title: 'Design & UX', body: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum sed perspiciatis unde.' },
          ].map(({ title, body }) => (
            <div key={title} style={{
              background: 'rgba(27,17,18,0.5)', border: '1px solid rgba(87,66,62,0.12)',
              borderRadius: '0.5rem', padding: '1.5rem',
            }}>
              <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, color: '#ffb4a5', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.75rem' }}>
                {title}
              </h3>
              <p style={{ fontFamily: 'Inter', fontSize: '0.9rem', color: '#dec0ba', opacity: 0.7, lineHeight: 1.7 }}>
                {body}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
