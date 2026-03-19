

import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"

export default function App() {
  return (
    <div className="w-full min-h-screen">
      <Navbar />

      <main>
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="background"><Background /></section>
        <section id="tech"><TechStack /></section>
        <section id="contact"><Contact /></section>
      </main>

      <Footer />
    </div>
  )
}
