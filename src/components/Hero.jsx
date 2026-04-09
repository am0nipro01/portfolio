export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="xl-container hero-grid">

        {/* Left */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <h1 style={{
            fontFamily: 'Space Grotesk', fontWeight: 700,
            fontSize: 'clamp(3rem, 8vw, 5.5rem)',
            lineHeight: 1, letterSpacing: '-0.04em', color: '#f2dedf',
          }}>
            Digital <br />
            <span style={{ color: '#e46d55' }}>Architect.</span>
          </h1>

          <p style={{ fontSize: '1.125rem', color: '#dec0ba', maxWidth: '28rem', lineHeight: 1.7 }}>
            Crafting immersive web experiences through technical precision and
            organic design. Available for freelance &amp; relocation abroad.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <a href="#projects" className="cta-gradient" style={{
              display: 'inline-block', color: '#f2dedf',
              padding: '0.875rem 2rem', borderRadius: '0.375rem',
              fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '1rem',
              letterSpacing: '-0.02em', textDecoration: 'none',
              transition: 'filter 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.filter = 'brightness(1.1)'}
              onMouseLeave={e => e.currentTarget.style.filter = 'brightness(1)'}
            >
              View Projects
            </a>
            <a href="#contact" style={{
              display: 'inline-block', color: '#dec0ba',
              padding: '0.875rem 2rem', borderRadius: '0.375rem',
              fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '1rem',
              letterSpacing: '-0.02em', textDecoration: 'none',
              border: '1px solid rgba(87,66,62,0.4)',
              transition: 'background 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.background = '#332728'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Right — code snippet (desktop only) */}
        <div className="hero-code-col" style={{ position: 'relative' }}>
          <div style={{
            position: 'absolute', inset: '-1rem', borderRadius: '9999px',
            background: 'rgba(228,109,85,0.10)', filter: 'blur(40px)',
          }} />
          <div className="glass-card" style={{
            position: 'relative',
            border: '1px solid rgba(87,66,62,0.15)',
            borderRadius: '0.75rem', padding: '1.5rem',
            fontFamily: 'monospace', fontSize: '0.875rem', overflow: 'hidden',
          }}>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
              {['rgba(255,180,171,0.4)', 'rgba(255,180,165,0.4)', 'rgba(234,187,186,0.4)'].map((c, i) => (
                <div key={i} style={{ width: 12, height: 12, borderRadius: '50%', background: c }} />
              ))}
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

      </div>
    </section>
  )
}
