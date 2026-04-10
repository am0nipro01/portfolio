import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { supabase } from '../lib/supabaseClient'

// Retourne le champ localisé ou fallback anglais
function loc(project, field, lang) {
  if (lang === 'en') return project[field]
  return project[`${field}_${lang}`] || project[field]
}

function ProjectCard({ project }) {
  const { t, i18n } = useTranslation()
  const lang = i18n.language

  return (
    <div className="project-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      <div className="project-img-wrap">
        {project.image_url
          ? <img src={project.image_url} alt={loc(project, 'title', lang)} />
          : <span className="material-symbols-outlined" style={{ fontSize: '4rem', color: '#57423e' }}>image</span>
        }
        <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {(project.stack || []).map(tag => (
            <span key={tag} className="glass-card" style={{
              fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.15em',
              padding: '0.2rem 0.65rem', borderRadius: '9999px', color: '#dec0ba',
              border: '1px solid rgba(87,66,62,0.2)',
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <h3 style={{ fontFamily: 'Space Grotesk', fontSize: '1.4rem', fontWeight: 700, color: '#f2dedf' }}>
          {loc(project, 'title', lang)}
        </h3>
        <p style={{ color: '#dec0ba', lineHeight: 1.7, fontSize: '0.95rem' }}>
          {loc(project, 'description', lang)}
        </p>
        {project.link && project.link !== '#' && (
          <a href={project.link} target="_blank" rel="noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            color: '#ffb4a5', textDecoration: 'none',
          }}>
            <span style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
              {t('projects.view_live')}
            </span>
            <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>arrow_forward</span>
          </a>
        )}
      </div>
    </div>
  )
}

function SkeletonCard() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      <div style={{ aspectRatio: '16/9', borderRadius: '0.75rem', background: '#281d1e', animation: 'pulse 1.5s ease-in-out infinite' }} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <div style={{ height: '1.5rem', width: '60%', borderRadius: '0.25rem', background: '#281d1e', animation: 'pulse 1.5s ease-in-out infinite' }} />
        <div style={{ height: '1rem', width: '90%', borderRadius: '0.25rem', background: '#281d1e', animation: 'pulse 1.5s ease-in-out infinite' }} />
        <div style={{ height: '1rem', width: '75%', borderRadius: '0.25rem', background: '#281d1e', animation: 'pulse 1.5s ease-in-out infinite' }} />
      </div>
    </div>
  )
}

export default function Projects() {
  const [projects, setProjects]   = useState([])
  const [loading, setLoading]     = useState(true)
  const [error, setError]         = useState(null)
  const [current, setCurrent]     = useState(0)
  const { t } = useTranslation()

  useEffect(() => {
    async function fetchProjects() {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('display_order', { ascending: true })

      if (error) setError(error.message)
      else setProjects(data || [])
      setLoading(false)
    }
    fetchProjects()
  }, [])

  const prev = () => setCurrent(i => Math.max(0, i - 1))
  const next = () => setCurrent(i => Math.min(projects.length - 1, i + 1))

  const trackStyle = {
    transform: `translateX(calc(${-current} * (100vw - 4.5rem)))`,
  }

  const content = loading
    ? [1, 2].map(i => <SkeletonCard key={i} />)
    : error
      ? <p style={{ color: '#ffb4ab', padding: '2rem 0' }}>Erreur : {error}</p>
      : projects.map(p => <ProjectCard key={p.id} project={p} />)

  return (
    <section id="projects" className="projects-section">
      <div className="xl-container" style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', fontWeight: 700, letterSpacing: '-0.04em', color: '#f2dedf', marginBottom: '1rem' }}>
          {t('nav.projects')}
        </h2>
        <div style={{ width: '5rem', height: '3px', background: 'rgba(228,109,85,0.35)' }} />
      </div>

      {/* ── MOBILE : Peek carousel ── */}
      <div className="projects-carousel">
        {loading || error ? (
          <div className="xl-container" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {content}
          </div>
        ) : (
          <>
            <div className="carousel-outer">
              <div className="carousel-track" style={trackStyle}>
                {projects.map(p => (
                  <div key={p.id} className="carousel-slide">
                    <ProjectCard project={p} />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginTop: '1.5rem', paddingLeft: '1.5rem' }}>
              <button onClick={prev} disabled={current === 0} style={{
                background: current === 0 ? 'rgba(87,66,62,0.2)' : 'rgba(228,109,85,0.15)',
                border: '1px solid rgba(87,66,62,0.3)', borderRadius: '50%',
                width: 36, height: 36, color: current === 0 ? '#57423e' : '#ffb4a5',
                cursor: current === 0 ? 'default' : 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span className="material-symbols-outlined" style={{ fontSize: '1.25rem' }}>arrow_back</span>
              </button>

              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {projects.map((_, i) => (
                  <button key={i} onClick={() => setCurrent(i)} style={{
                    width: i === current ? 20 : 8, height: 8,
                    borderRadius: 9999, border: 'none', cursor: 'pointer', padding: 0,
                    background: i === current ? '#e46d55' : '#57423e',
                    transition: 'all 0.3s',
                  }} />
                ))}
              </div>

              <button onClick={next} disabled={current === projects.length - 1} style={{
                background: current === projects.length - 1 ? 'rgba(87,66,62,0.2)' : 'rgba(228,109,85,0.15)',
                border: '1px solid rgba(87,66,62,0.3)', borderRadius: '50%',
                width: 36, height: 36, color: current === projects.length - 1 ? '#57423e' : '#ffb4a5',
                cursor: current === projects.length - 1 ? 'default' : 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span className="material-symbols-outlined" style={{ fontSize: '1.25rem' }}>arrow_forward</span>
              </button>
            </div>
          </>
        )}
      </div>

      {/* ── DESKTOP : grid ── */}
      <div className="projects-grid xl-container">
        {loading || error ? content : projects.map(p => <ProjectCard key={p.id} project={p} />)}
      </div>
    </section>
  )
}
