export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-800 bg-zinc-950 font-mono">
      <div className="max-w-6xl mx-auto px-10 py-6 flex justify-between items-center">

        <p className="text-zinc-600 text-xs tracking-widest uppercase">
          © {new Date().getFullYear()} Jono Sommers
        </p>

        <div className="flex gap-8">
          <a href="https://github.com/JonoSommers" target="_blank" rel="noopener noreferrer" className="text-zinc-400 text-xs tracking-widest uppercase hover:text-emerald-400 transition-colors duration-200">GitHub</a>
          <a href="https://www.linkedin.com/in/jonosommers/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 text-xs tracking-widest uppercase hover:text-emerald-400 transition-colors duration-200">LinkedIn</a>
          <a href="https://x.com/SommersJon88080" target="_blank" rel="noopener noreferrer" className="text-zinc-400 text-xs tracking-widest uppercase hover:text-emerald-400 transition-colors duration-200">Twitter</a>
          <a href="mailto:jonosommers95@gmail.com" className="text-zinc-400 text-xs tracking-widest uppercase hover:text-emerald-400 transition-colors duration-200">Email</a>
        </div>

      </div>
    </footer>
  )
}