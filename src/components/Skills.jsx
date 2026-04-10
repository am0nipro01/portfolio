import { useTranslation } from 'react-i18next'

const skillGroups = [
  {
    category: 'Frontend',
    skills: [
      { icon: 'token',      label: 'React' },
      { icon: 'javascript', label: 'JavaScript' },
      { icon: 'bolt',       label: 'Vite' },
      { icon: 'palette',    label: 'Tailwind CSS' },
      { icon: 'style',      label: 'CSS Modules' },
      { icon: 'route',      label: 'React Router' },
    ],
  },
  {
    category: 'Intégration',
    skills: [
      { icon: 'translate',  label: 'i18next' },
      { icon: 'bar_chart',  label: 'Recharts' },
      { icon: 'search',     label: 'react-helmet' },
    ],
  },
  {
    category: 'Backend & BaaS',
    skills: [
      { icon: 'database',       label: 'Supabase' },
      { icon: 'storage',        label: 'PocketBase' },
      { icon: 'credit_card',    label: 'Stripe' },
      { icon: 'cloud_upload',   label: 'Netlify Fn.' },
    ],
  },
  {
    category: 'Outils',
    skills: [
      { icon: 'merge',          label: 'Git' },
      { icon: 'cloud',          label: 'Netlify' },
      { icon: 'rocket_launch',  label: 'Fly.io' },
    ],
  },
]

function SkillTile({ icon, label }) {
  return (
    <div className="glass-card" style={{
      padding: '1.25rem 0.75rem',
      border: '1px solid rgba(87,66,62,0.10)',
      borderRadius: '0.375rem',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', gap: '0.6rem',
      cursor: 'default', transition: 'background 0.3s',
    }}
      onMouseEnter={e => e.currentTarget.style.background = '#3e3233'}
      onMouseLeave={e => e.currentTarget.style.background = 'rgba(35,25,26,0.6)'}
    >
      <span className="material-symbols-outlined" style={{ fontSize: '2rem', color: '#ffb4a5', fontVariationSettings: "'FILL' 1" }}>
        {icon}
      </span>
      <span style={{ fontFamily: 'Space Grotesk', fontWeight: 700, color: '#dec0ba', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.12em', textAlign: 'center' }}>
        {label}
      </span>
    </div>
  )
}

export default function Skills() {
  const { t } = useTranslation()

  return (
    <section id="skills" className="skills-section" style={{ background: '#23191a' }}>
      <div className="xl-container">

        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{ fontFamily: 'Inter', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.3em', color: '#ffb4a5', display: 'block', marginBottom: '1rem' }}>
            {t('skills.label')}
          </span>
          <h2 style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', fontWeight: 700, letterSpacing: '-0.04em', color: '#f2dedf' }}>
            {t('skills.heading')}
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {skillGroups.map(({ category, skills }) => (
            <div key={category}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                <span style={{ fontFamily: 'Space Grotesk', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#e46d55' }}>
                  {category}
                </span>
                <div style={{ flex: 1, height: '1px', background: 'rgba(87,66,62,0.25)' }} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(7rem, 1fr))', gap: '0.875rem' }}>
                {skills.map(s => <SkillTile key={s.label} {...s} />)}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
