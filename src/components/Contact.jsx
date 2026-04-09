export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-24 py-24 items-start"
    >
      {/* Left — texte */}
      <div className="space-y-8">
        <h2
          className="text-5xl font-bold tracking-tighter leading-tight text-[#f2dedf]"
          style={{ fontFamily: 'Space Grotesk' }}
        >
          Ready to build <br />
          something <span className="text-[#ffb4a5]">great?</span>
        </h2>
        <p className="text-[#dec0ba] text-lg max-w-sm">
          Available for freelance opportunities and open to relocation abroad.
          Let's talk about your project.
        </p>
        <div className="space-y-4 pt-4">
          <div className="flex items-center gap-4 text-[#dec0ba]">
            <span className="material-symbols-outlined text-[#ffb4a5]">mail</span>
            <span>hello@amoni.dev</span>
          </div>
          <div className="flex items-center gap-4 text-[#dec0ba]">
            <span className="material-symbols-outlined text-[#ffb4a5]">pin_drop</span>
            <span>Remote / Global</span>
          </div>
        </div>
      </div>

      {/* Right — formulaire */}
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        className="space-y-6 bg-[#281d1e] p-8 rounded-xl"
      >
        {/* Champ caché requis par Netlify Forms */}
        <input type="hidden" name="form-name" value="contact" />

        <div className="space-y-2">
          <label
            className="block text-xs uppercase tracking-widest text-[#dec0ba]"
            style={{ fontFamily: 'Inter' }}
          >
            Full Name
          </label>
          <input
            name="name"
            type="text"
            required
            className="w-full bg-[#23191a] border-0 border-b border-[#57423e] focus:border-[#ffb4a5] focus:ring-0 text-[#f2dedf] py-3 outline-none transition-colors"
          />
        </div>

        <div className="space-y-2">
          <label
            className="block text-xs uppercase tracking-widest text-[#dec0ba]"
            style={{ fontFamily: 'Inter' }}
          >
            Email Address
          </label>
          <input
            name="email"
            type="email"
            required
            className="w-full bg-[#23191a] border-0 border-b border-[#57423e] focus:border-[#ffb4a5] focus:ring-0 text-[#f2dedf] py-3 outline-none transition-colors"
          />
        </div>

        <div className="space-y-2">
          <label
            className="block text-xs uppercase tracking-widest text-[#dec0ba]"
            style={{ fontFamily: 'Inter' }}
          >
            Message
          </label>
          <textarea
            name="message"
            rows={4}
            required
            className="w-full bg-[#23191a] border-0 border-b border-[#57423e] focus:border-[#ffb4a5] focus:ring-0 text-[#f2dedf] py-3 outline-none transition-colors resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full cta-gradient text-[#f2dedf] font-bold py-4 rounded-md tracking-tight hover:brightness-110 transition-all cursor-pointer"
          style={{ fontFamily: 'Space Grotesk' }}
        >
          Send Message
        </button>
      </form>
    </section>
  )
}
