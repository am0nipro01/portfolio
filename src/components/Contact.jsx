export default function Contact() {
  return (
    <section id="contact" className="xl-container" style={{
      display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '6rem', paddingTop: '6rem', paddingBottom: '6rem',
      alignItems: 'start',
    }}>

      {/* Left */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <h2 style={{
          fontFamily: 'Space Grotesk', fontSize: '3rem', fontWeight: 700,
          letterSpacing: '-0.04em', lineHeight: 1.1, color: '#f2dedf', margin: 0,
        }}>
          Ready to build <br />
          something <span style={{ color: '#ffb4a5' }}>great?</span>
        </h2>
        <p style={{ color: '#dec0ba', fontSize: '1.125rem', maxWidth: '22rem', lineHeight: 1.7 }}>
          Available for freelance opportunities and open to relocation abroad.
          Let's talk about your next project.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {[
            { icon: 'mail', text: 'hello@amoni.dev' },
            { icon: 'pin_drop', text: 'Remote / Global' },
          ].map(({ icon, text }) => (
            <div key={icon} style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#dec0ba' }}>
              <span className="material-symbols-outlined" style={{ color: '#ffb4a5' }}>{icon}</span>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right — form */}
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', background: '#281d1e', padding: '2rem', borderRadius: '0.75rem' }}
      >
        <input type="hidden" name="form-name" value="contact" />

        {[
          { label: 'Full Name', name: 'name', type: 'text' },
          { label: 'Email Address', name: 'email', type: 'email' },
        ].map(field => (
          <div key={field.name} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#dec0ba', fontFamily: 'Inter' }}>
              {field.label}
            </label>
            <input
              name={field.name} type={field.type} required
              style={{
                background: '#23191a', border: 'none',
                borderBottom: '1px solid #57423e',
                color: '#f2dedf', padding: '0.75rem 0', outline: 'none',
                fontFamily: 'Inter', fontSize: '1rem', width: '100%',
                transition: 'border-color 0.3s',
              }}
              onFocus={e => e.currentTarget.style.borderBottomColor = '#ffb4a5'}
              onBlur={e => e.currentTarget.style.borderBottomColor = '#57423e'}
            />
          </div>
        ))}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#dec0ba', fontFamily: 'Inter' }}>
            Message
          </label>
          <textarea
            name="message" rows={4} required
            style={{
              background: '#23191a', border: 'none',
              borderBottom: '1px solid #57423e',
              color: '#f2dedf', padding: '0.75rem 0', outline: 'none',
              fontFamily: 'Inter', fontSize: '1rem', width: '100%',
              resize: 'none', transition: 'border-color 0.3s',
            }}
            onFocus={e => e.currentTarget.style.borderBottomColor = '#ffb4a5'}
            onBlur={e => e.currentTarget.style.borderBottomColor = '#57423e'}
          />
        </div>

        <button type="submit" className="cta-gradient" style={{
          width: '100%', color: '#f2dedf', fontFamily: 'Space Grotesk',
          fontWeight: 700, padding: '1rem', borderRadius: '0.375rem',
          border: 'none', cursor: 'pointer', letterSpacing: '-0.02em',
          fontSize: '1rem', transition: 'filter 0.2s',
        }}
          onMouseEnter={e => e.currentTarget.style.filter = 'brightness(1.1)'}
          onMouseLeave={e => e.currentTarget.style.filter = 'brightness(1)'}
        >
          Send Message
        </button>
      </form>
    </section>
  )
}
