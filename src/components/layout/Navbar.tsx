export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full bg-white shadow">
            <div className="max-2-6xl mx-auto flex justify-between p-4">
                <h1 className="font-bold">Jono</h1>

                <div className="flex gap-6">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#techstack">TechStack</a>
                    <a href="#background">Background</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </nav>
    )
}
