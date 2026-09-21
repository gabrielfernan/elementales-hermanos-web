import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Services from './components/Services/services'
import Works from './components/Works/works'
import About from './components/About/About'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services/>
        <Works />
        <About />
        <Contact />
      </main>
    </>
  )
}

export default App
