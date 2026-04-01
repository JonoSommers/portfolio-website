export default function About() {
  return (
    <section className="min-h-screen bg-zinc-950 text-white px-10 py-24 flex flex-col justify-center font-mono">
      <div className="flex flex-row items-start gap-12 max-w-6xl mx-auto w-full">
        <div className="max-w-6xl mx-auto w-full flex flex-col gap-10">

          {/* Section label */}
          <div className="flex flex-col gap-2">
            <p className="text-emerald-400 text-sm tracking-widest uppercase">About Me</p>
            <h2 className="text-3xl font-semibold text-zinc-100">A little bit about who I am.</h2>
            <div className="w-12 h-px bg-emerald-400 mt-1" />
          </div>

          {/* Bio */}
          <div className="flex flex-col gap-6 max-w-3xl">
            <p className="text-zinc-400 text-base leading-relaxed">
              Hey! I&apos;m Jono Sommers — a former hospitality leader turned software developer with a deep 
              curiosity for how things work and a drive to keep learning. My journey into tech began with 
              a simple question: What if I could build the tools that make people&apos;s lives easier? Since 
              then, I&apos;ve gone all in, embracing every challenge, new language, and late-night &quot;aha!&quot; 
              moment along the way.
            </p>
            <p className="text-zinc-400 text-base leading-relaxed">
              With a background in fast-paced, people-first environments, I bring a strong sense of 
              adaptability, communication, and collaboration to every team I work with. At Turing School 
              of Software & Design, I developed full-stack applications using JavaScript, React, Ruby on 
              Rails, and APIs — but what really fuels me is the process of learning and building, from 
              idea to implementation.
            </p>
            <p className="text-zinc-400 text-base leading-relaxed">
              I believe great software comes from a willingness to listen, iterate, and grow. Whether 
              I&apos;m contributing to a team project or diving into a passion project on my own, I bring 
              energy, curiosity, and heart to everything I build. Thanks for taking the time to learn 
              a bit about me — I can&apos;t wait to see where this journey leads next.
            </p>
          </div>
        </div>

        {/* Hobbies List */}
        <div>
          <h3 className="text-emerald-400 text-sm tracking-widest uppercase">Hobbies and Interests</h3>
          <ul>
            <li className="text-zinc-400 text-base leading-relaxed">Reading</li>
            <li className="text-zinc-400 text-base leading-relaxed">Video games</li>
            <li className="text-zinc-400 text-base leading-relaxed">Chicago sports</li>
            <li className="text-zinc-400 text-base leading-relaxed">Walking my dog</li>
          </ul>
        </div>
      </div>
    </section>
  )
}