export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-zinc-950 border-b border-zinc-800 z-50 font-mono">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-10 py-4">

        <h1 className="text-zinc-100 font-semibold text-lg tracking-wide">
          Jono Sommers
        </h1>

        <div className="flex gap-8">
          {['Home', 'About', 'Projects', 'Tech Stack', 'Background', 'Contact'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(' ', '')}`}
              className="text-zinc-400 text-sm tracking-widest uppercase hover:text-emerald-400 transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>

      </div>
    </nav>
  )
}
