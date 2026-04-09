const projects = [
  {
    id: 1,
    title: "Car Obsidian",
    description:
      "A sleek automotive showcase platform with immersive visuals, performance filtering and a dark editorial aesthetic.",
    stack: ["React", "Tailwind", "Supabase"],
    image: null,
    link: "#",
  },
  {
    id: 2,
    title: "Algiers Gastronomy",
    description:
      "A restaurant discovery and reservation platform celebrating Algerian cuisine, built for local businesses with a multilingual interface.",
    stack: ["React", "Node.js", "Supabase"],
    image: null,
    link: "#",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-8 py-24">
      <div className="mb-16">
        <h2
          className="text-4xl font-bold tracking-tighter mb-4 text-[#f2dedf]"
          style={{ fontFamily: 'Space Grotesk' }}
        >
          Selected Works
        </h2>
        <div className="w-24 h-1 bg-[#e46d55]/30" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project) => (
          <div key={project.id} className="group space-y-6">
            {/* Image placeholder */}
            <div className="relative overflow-hidden rounded-xl aspect-video bg-[#23191a] flex items-center justify-center">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                />
              ) : (
                <span className="material-symbols-outlined text-[#57423e] text-6xl">image</span>
              )}

              {/* Stack tags */}
              <div className="absolute bottom-4 left-4 flex gap-2 flex-wrap">
                {project.stack.map((tag) => (
                  <span
                    key={tag}
                    className="glass-card text-[10px] uppercase tracking-widest px-3 py-1 rounded-full text-[#dec0ba] border border-[#57423e]/20"
                    style={{ fontFamily: 'Inter' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Info */}
            <div className="space-y-3">
              <h3
                className="text-2xl font-bold text-[#f2dedf]"
                style={{ fontFamily: 'Space Grotesk' }}
              >
                {project.title}
              </h3>
              <p className="text-[#dec0ba] leading-relaxed">{project.description}</p>
              <a
                href={project.link}
                className="inline-flex items-center gap-2 text-[#ffb4a5] hover:gap-4 transition-all duration-300"
              >
                <span
                  className="font-bold uppercase text-xs tracking-widest"
                  style={{ fontFamily: 'Space Grotesk' }}
                >
                  View live
                </span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
