import profilePic from '/src/assets/profilePic.jpg'

export default function Home() {
  return (
    <section className="min-h-screen bg-zinc-950 text-white px-10 py-16 flex flex-col justify-center font-mono">

      {/* Main two-column layout */}
      <div className="flex flex-row items-start gap-12 max-w-6xl mx-auto w-full">

        {/* LEFT COLUMN — Hero text + button */}
        <div className="flex flex-col justify-center flex-1 gap-6 mt-8">
          <div className="flex flex-col gap-3">
            <p className="text-emerald-400 text-sm tracking-widest uppercase">
              Welcome
            </p>
            <h2 className="text-3xl font-semibold leading-snug text-zinc-100">
              I build clean, scalable web applications — and I&apos;m always chasing the next thing to learn.
            </h2>
            <p className="text-zinc-400 text-base leading-relaxed">
              Former hospitality leader turned software developer. I bring adaptability, 
              curiosity, and a people-first mindset to every project I touch.
            </p>
          </div>

          <button className="self-start mt-2 px-6 py-2 border border-emerald-400 text-emerald-400 text-sm tracking-wide rounded hover:bg-emerald-400 hover:text-zinc-950 transition-colors duration-200 cursor-pointer">
            Download Resume
          </button>
        </div>

        {/* RIGHT COLUMN — Photo + name + title */}
        <div className="flex flex-col items-center gap-3 mt-4 min-w-[220px]">
          <img
            src={profilePic}
            alt="Jono Sommers"
            className="w-52 h-52 object-cover rounded-xl border border-zinc-700 shadow-lg"
          />
          <div className="flex flex-col items-center gap-1 mt-1">
            <span className="text-zinc-100 font-semibold text-lg tracking-wide">
              Jono Sommers
            </span>
            <span className="text-emerald-400 text-sm tracking-widest uppercase">
              Software Developer
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}