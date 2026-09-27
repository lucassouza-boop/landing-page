import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Features from './sections/Features'
import CallToAction from './sections/CallToAction'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}

export default App
