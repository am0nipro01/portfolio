const skills = [
  { icon: "token",       label: "React" },
  { icon: "javascript",  label: "JavaScript" },
  { icon: "palette",     label: "Tailwind" },
  { icon: "database",    label: "Supabase" },
  { icon: "terminal",    label: "Node.js" },
  { icon: "code",        label: "HTML / CSS" },
]

export default function Skills() {
  return (
    <section id="skills" className="bg-[#23191a] py-24">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <div className="mb-16 space-y-4">
          <span
            className="text-[#ffb4a5] uppercase tracking-[0.3em] text-xs"
            style={{ fontFamily: 'Inter' }}
          >
            Technical Arsenal
          </span>
          <h2
            className="text-4xl font-bold tracking-tighter text-[#f2dedf]"
            style={{ fontFamily: 'Space Grotesk' }}
          >
            Tools of the Trade
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.label}
              className="p-8 glass-card border border-[#57423e]/10 flex flex-col items-center gap-4 hover:bg-[#3e3233] transition-colors duration-300 rounded-lg"
            >
              <span
                className="material-symbols-outlined text-4xl text-[#ffb4a5]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {skill.icon}
              </span>
              <span
                className="font-bold text-[#dec0ba] text-sm uppercase tracking-widest"
                style={{ fontFamily: 'Space Grotesk' }}
              >
                {skill.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
