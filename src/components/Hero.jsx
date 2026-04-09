export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-center min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-32">

        {/* Left — headline + CTA */}
        <div className="space-y-8">
          <h1
            className="font-bold tracking-tighter text-[#f2dedf] leading-none"
            style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(3.5rem, 8vw, 6rem)' }}
          >
            Digital <br />
            <span style={{ color: '#e46d55' }}>Architect.</span>
          </h1>

          <p className="text-lg text-[#dec0ba] max-w-md leading-relaxed">
            Front-end developer crafting immersive web experiences through
            technical precision and clean design. Available for freelance &amp;
            relocation abroad.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="cta-gradient text-[#f2dedf] px-10 py-4 rounded-md font-bold text-lg tracking-tight hover:brightness-110 active:scale-95 transition-all duration-200 inline-block"
              style={{ fontFamily: 'Space Grotesk' }}
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="text-[#dec0ba] px-10 py-4 rounded-md font-bold text-lg tracking-tight transition-colors duration-200 inline-block"
              style={{
                fontFamily: 'Space Grotesk',
                border: '1px solid rgba(87,66,62,0.4)',
              }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#332728'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Right — code snippet */}
        <div className="relative hidden lg:block">
          <div
            className="absolute -inset-4 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(228,109,85,0.12) 0%, transparent 70%)',
              filter: 'blur(24px)',
            }}
          />
          <div className="relative glass-card rounded-xl p-6 font-mono text-sm overflow-hidden" style={{ border: '1px solid rgba(87,66,62,0.15)' }}>
            {/* Window dots */}
            <div className="flex gap-2 mb-6">
              <div className="w-3 h-3 rounded-full" style={{ background: 'rgba(255,180,171,0.4)' }} />
              <div className="w-3 h-3 rounded-full" style={{ background: 'rgba(255,180,165,0.4)' }} />
              <div className="w-3 h-3 rounded-full" style={{ background: 'rgba(234,187,186,0.4)' }} />
            </div>

            <pre className="text-[#dec0ba] leading-relaxed text-xs md:text-sm overflow-x-auto">
{`  `}<span style={{ color: '#ffb4a5' }}>const</span>{` `}<span style={{ color: '#eabbba' }}>developer</span>{` = {
  name:      `}<span style={{ color: '#ffb4a7' }}>"Amoni"</span>{`,
  role:      `}<span style={{ color: '#ffb4a7' }}>"Frontend Dev"</span>{`,
  stack:     [`}<span style={{ color: '#ffb4a7' }}>"React"</span>{`, `}<span style={{ color: '#ffb4a7' }}>"Tailwind"</span>{`,
             `}<span style={{ color: '#ffb4a7' }}>"Supabase"</span>{`, `}<span style={{ color: '#ffb4a7' }}>"Node"</span>{`],
  available: `}<span style={{ color: '#e46d55' }}>true</span>{`,
  location:  `}<span style={{ color: '#ffb4a7' }}>"Remote / Global"</span>{`
};

`}<span style={{ color: '#57423e' }}>{`// Open to freelance & relocation`}</span>{`
`}<span style={{ color: '#ffb4a5' }}>await</span>{` world.`}<span style={{ color: '#eabbba' }}>hire</span>{`(developer);`}
            </pre>
          </div>
        </div>

      </div>
    </section>
  )
}
