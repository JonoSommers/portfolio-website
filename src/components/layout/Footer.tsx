export default function Footer() {
    return (
        <footer className="w-full border-t mt-20">
            <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col items-center gap-4">
                <div className="flex gap-6 text-sm">
                    <a href="https://github.com/JonoSommers" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/in/jonosommers/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="mailto:jonosommers95@gmail.com">Email</a>
                </div>

                <p className="text-sm text-gray-500">
                    © {new Date().getFullYear()} Jono Sommers
                </p>
            </div>
        </footer>
    )
}