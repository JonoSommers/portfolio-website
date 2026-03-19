import About from "./pages/About"
import Background from "./pages/Background"
import Contact from "./pages/Contact"
import Footer from "./components/layout/Footer"
import Home from "./pages/Home"
import Navbar from "./components/layout/Navbar"
import Projects from "./pages/Projects"
import TechStack from "./pages/TechStack"


export default function App() {
  return (
    <div className="w-full min-h-screen">
      <Navbar />

      <main>
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="background"><Background /></section>
        <section id="techstack"><TechStack /></section>
        <section id="contact"><Contact /></section>
      </main>

      <Footer />
    </div>
  )
}
