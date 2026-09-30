import About from "./components/About"
// import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Process from "./components/Process"
import Projects from "./components/Projects"
import Stack from "./components/Stack"

export default function App() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stack />
        <Projects />
        {/* <Experience /> */}
        {/* <Process /> */}
        {/* <Contact /> */}
      </main>
      <Footer />
    </div>
  )
}
