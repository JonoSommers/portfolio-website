export default function Contact() {
    return (
        <section className="min-h-screen bg-zinc-950 text-white px-10 py-24 flex flex-col justify-center font-mono">
            <div className="h-screen flex flex-col items-center justify-center gap-8">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-3xl font-semibold text-zinc-100">Contact</h1>
                    <div className="w-24 h-px bg-emerald-400 mt-1" />  
                </div>
                
                
                <div className="flex gap-8">
                    {['GitHub', 'LinedIn', 'Email', 'Twitter'].map((link) => (
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
        </section>
        
    )
}