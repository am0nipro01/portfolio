export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#1b1112]/40 backdrop-blur-xl">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <span className="text-2xl font-bold tracking-tighter text-[#dec0ba]" style={{ fontFamily: 'Space Grotesk' }}>
          Amoni
        </span>

        <div className="hidden md:flex items-center gap-8" style={{ fontFamily: 'Space Grotesk' }}>
          <a href="#hero"     className="text-[#e46d55] font-bold border-b border-[#e46d55]/30 transition-colors duration-300">Hero</a>
          <a href="#projects" className="text-[#dec0ba] opacity-80 hover:text-[#e46d55] transition-colors duration-300">Projects</a>
          <a href="#skills"   className="text-[#dec0ba] opacity-80 hover:text-[#e46d55] transition-colors duration-300">Skills</a>
          <a href="#contact"  className="text-[#dec0ba] opacity-80 hover:text-[#e46d55] transition-colors duration-300">Contact</a>
        </div>

        <div className="text-[#dec0ba] opacity-80 text-sm tracking-widest hidden lg:block" style={{ fontFamily: 'Space Grotesk' }}>
          FR / EN / ES / PT
        </div>
      </div>
    </nav>
  )
}
