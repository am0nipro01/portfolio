import { useTranslation } from 'react-i18next'

export default function Contact() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="contact-section">
      <div className="xl-container contact-grid">

        {/* Left */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <h2 style={{
            fontFamily: 'Space Grotesk', fontWeight: 700,
            fontSize: 'clamp(2rem, 6vw, 3rem)',
            letterSpacing: '-0.04em', lineHeight: 1.1, color: '#f2dedf',
          }}>
            {t('contact.heading1')} <br />
            {t('contact.heading2')} <span style={{ color: '#ffb4a5' }}>{t('contact.heading3')}</span>
          </h2>
          <p style={{ color: '#dec0ba', fontSize: '1rem', lineHeight: 1.7, maxWidth: '22rem' }}>
            {t('contact.description')}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            {[
              { icon: 'mail',     text: 'hello@amoni.dev' },
              { icon: 'pin_drop', text: t('contact.location') },
            ].map(({ icon, text }) => (
              <div key={icon} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#dec0ba' }}>
                <span className="material-symbols-outlined" style={{ color: '#ffb4a5' }}>{icon}</span>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <form name="contact" method="POST" data-netlify="true" style={{
          display: 'flex', flexDirection: 'column', gap: '1.5rem',
          background: '#281d1e', padding: '2rem', borderRadius: '0.75rem',
        }}>
          <input type="hidden" name="form-name" value="contact" />

          {[
            { label: t('contact.name'),  name: 'name',  type: 'text' },
            { label: t('contact.email'), name: 'email', type: 'email' },
          ].map(f => (
            <div key={f.name} style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#dec0ba' }}>{f.label}</label>
              <input name={f.name} type={f.type} required style={{
                background: '#23191a', border: 'none', borderBottom: '1px solid #57423e',
                color: '#f2dedf', padding: '0.75rem 0', outline: 'none',
                fontFamily: 'Inter', fontSize: '1rem', width: '100%', transition: 'border-color 0.3s',
              }}
                onFocus={e => e.currentTarget.style.borderBottomColor = '#ffb4a5'}
                onBlur={e  => e.currentTarget.style.borderBottomColor = '#57423e'}
              />
            </div>
          ))}

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <label style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#dec0ba' }}>{t('contact.message')}</label>
            <textarea name="message" rows={4} required style={{
              background: '#23191a', border: 'none', borderBottom: '1px solid #57423e',
              color: '#f2dedf', padding: '0.75rem 0', outline: 'none',
              fontFamily: 'Inter', fontSize: '1rem', width: '100%', resize: 'none', transition: 'border-color 0.3s',
            }}
              onFocus={e => e.currentTarget.style.borderBottomColor = '#ffb4a5'}
              onBlur={e  => e.currentTarget.style.borderBottomColor = '#57423e'}
            />
          </div>

          <button type="submit" className="cta-gradient" style={{
            width: '100%', color: '#f2dedf', fontFamily: 'Space Grotesk', fontWeight: 700,
            padding: '1rem', borderRadius: '0.375rem', border: 'none', cursor: 'pointer',
            fontSize: '1rem', transition: 'filter 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.filter = 'brightness(1.1)'}
            onMouseLeave={e => e.currentTarget.style.filter = 'brightness(1)'}
          >
            {t('contact.send')}
          </button>
        </form>

      </div>
    </section>
  )
}
