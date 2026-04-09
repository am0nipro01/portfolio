export default function Footer() {
  return (
    <footer className="w-full py-12 px-8 bg-[#1b1112]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center border-t border-[#57423e]/15 pt-8 gap-8">
        <div
          className="text-[#dec0ba] opacity-60 text-sm uppercase tracking-widest"
          style={{ fontFamily: 'Inter' }}
        >
          © 2025 Amoni. Crafted with precision.
        </div>

        <div className="flex items-center gap-8">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="text-[#dec0ba] opacity-60 hover:opacity-100 hover:text-[#e46d55] transition-all duration-200"
            aria-label="GitHub"
          >
            <span className="material-symbols-outlined">code</span>
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="text-[#dec0ba] opacity-60 hover:opacity-100 hover:text-[#e46d55] transition-all duration-200"
            aria-label="LinkedIn"
          >
            <span className="material-symbols-outlined">share</span>
          </a>
          <a
            href="mailto:hello@amoni.dev"
            className="text-[#dec0ba] opacity-60 hover:opacity-100 hover:text-[#e46d55] transition-all duration-200"
            aria-label="Email"
          >
            <span className="material-symbols-outlined">mail</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
