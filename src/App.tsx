import About from "./_sections/about"
import Contact from "./_sections/contact"
import Hero from "./_sections/hero"
import Navbar from "./_sections/navbar"
import Portfolio from "./_sections/portfolio"

function App() {
  return (
    <>
      <Navbar />

      <main className="flex flex-col justify-center">
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </main>
    </>
  )
}

export default App
