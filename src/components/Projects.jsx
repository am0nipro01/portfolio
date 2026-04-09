const projects = [
  {
    id: 1,
    title: 'Car Obsidian',
    description: 'A sleek automotive showcase platform with immersive dark visuals, performance filtering and an editorial aesthetic built for car enthusiasts.',
    stack: ['React', 'Tailwind', 'Supabase'],
    image: null,
    link: '#',
  },
  {
    id: 2,
    title: 'Algiers Gastronomy',
    description: 'A restaurant discovery and reservation platform celebrating Algerian cuisine — built for local businesses with a clean multilingual interface.',
    stack: ['React', 'Node.js', 'Supabase'],
    image: null,
    link: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="xl-container" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>

      <div style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontFamily: 'Space Grotesk', fontSize: '2.5rem', fontWeight: 700, letterSpacing: '-0.04em', marginBottom: '1rem', color: '#f2dedf' }}>
          Selected Works
        </h2>
        <div style={{ width: '6rem', height: '4px', background: 'rgba(228,109,85,0.3)' }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '3rem' }}>
        {projects.map(project => (
          <div key={project.id} className="project-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

            {/* Image */}
            <div style={{
              position: 'relative', overflow: 'hidden', borderRadius: '0.75rem',
              aspectRatio: '16/9', background: '#23191a',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              {project.image ? (
                <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              ) : (
                <span className="material-symbols-outlined" style={{ fontSize: '4rem', color: '#57423e' }}>image</span>
              )}
              {/* Stack tags */}
              <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', display: 'flex', gap: '0.5rem' }}>
                {project.stack.map(tag => (
                  <span key={tag} className="glass-card" style={{
                    fontSize: '0.625rem', textTransform: 'uppercase', letterSpacing: '0.15em',
                    padding: '0.25rem 0.75rem', borderRadius: '9999px', color: '#dec0ba',
                    border: '1px solid rgba(87,66,62,0.2)',
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <h3 style={{ fontFamily: 'Space Grotesk', fontSize: '1.5rem', fontWeight: 700, color: '#f2dedf', margin: 0 }}>
                {project.title}
              </h3>
              <p style={{ color: '#dec0ba', lineHeight: 1.7, margin: 0 }}>
                {project.description}
              </p>
              <a href={project.link} style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                color: '#ffb4a5', textDecoration: 'none', transition: 'gap 0.3s',
              }}>
                <span style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                  View live
                </span>
                <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>arrow_forward</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
