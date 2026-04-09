export default function Hero() {
  return (
    <section id="hero" className="xl-container" style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '3rem',
      alignItems: 'center',
      minHeight: '819px',
      paddingTop: '6rem',
      paddingBottom: '4rem',
    }}>

      {/* Left */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <h1 style={{
          fontFamily: 'Space Grotesk', fontWeight: 700,
          fontSize: 'clamp(3.5rem, 6vw, 5.5rem)',
          lineHeight: 1, letterSpacing: '-0.04em',
          color: '#f2dedf', margin: 0,
        }}>
          Digital <br />
          <span style={{ color: '#e46d55' }}>Architect.</span>
        </h1>

        <p style={{ fontSize: '1.125rem', color: '#dec0ba', maxWidth: '28rem', lineHeight: 1.7 }}>
          Crafting immersive web experiences through technical precision and organic
          design. Available for freelance &amp; relocation abroad.
        </p>

        <div>
          <a href="#projects" className="cta-gradient" style={{
            display: 'inline-block', color: '#f2dedf',
            padding: '1rem 2.5rem', borderRadius: '0.375rem',
            fontFamily: 'Space Grotesk', fontWeight: 700,
            fontSize: '1.125rem', letterSpacing: '-0.02em',
            textDecoration: 'none', transition: 'transform 0.2s, filter 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.filter = 'brightness(1.1)'}
            onMouseLeave={e => e.currentTarget.style.filter = 'brightness(1)'}
          >
            View Projects
          </a>
        </div>
      </div>

      {/* Right — code snippet */}
      <div style={{ position: 'relative' }}>
        <div style={{
          position: 'absolute', inset: '-1rem',
          background: 'rgba(228,109,85,0.10)',
          borderRadius: '9999px', filter: 'blur(40px)',
        }} />
        <div className="glass-card" style={{
          position: 'relative',
          border: '1px solid rgba(87,66,62,0.15)',
          borderRadius: '0.75rem',
          padding: '1.5rem',
          fontFamily: 'monospace',
          fontSize: '0.85rem',
          overflow: 'hidden',
        }}>
          {/* dots */}
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: 'rgba(255,180,171,0.4)' }} />
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: 'rgba(255,180,165,0.4)' }} />
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: 'rgba(234,187,186,0.4)' }} />
          </div>

          <pre style={{ color: '#dec0ba', lineHeight: 1.7, margin: 0, whiteSpace: 'pre-wrap' }}>
<span style={{ color: '#ffb4a5' }}>const</span> <span style={{ color: '#eabbba' }}>Project</span> = {'{'}
{'  '}name: <span style={{ color: '#ffb4a7' }}>"Amoni"</span>,
{'  '}stack: [<span style={{ color: '#ffb4a7' }}>"React"</span>, <span style={{ color: '#ffb4a7' }}>"Tailwind"</span>, <span style={{ color: '#ffb4a7' }}>"Supabase"</span>],
{'  '}available: <span style={{ color: '#e46d55' }}>true</span>,
{'  '}render: () =&gt; {'{'}
{'    '}<span style={{ color: '#ffb4a5' }}>return</span> <span style={{ color: '#eabbba' }}>&lt;Portfolio /&gt;</span>;
{'  '}{'}'}
{'}'};

<span style={{ color: '#a58b85' }}>// Open to freelance & relocation</span>
<span style={{ color: '#ffb4a5' }}>await</span> world.<span style={{ color: '#eabbba' }}>hire</span>(Project);
          </pre>
        </div>
      </div>

    </section>
  )
}
