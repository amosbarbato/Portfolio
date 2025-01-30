import About from "./_sections/about"
import Hero from "./_sections/hero"
import Navbar from "./_sections/navbar"

function App() {
  return (
    <>
      <Navbar />

      <main className="flex flex-col justify-center">
        <Hero />
        <About />
      </main>
    </>
  )
}

export default App
