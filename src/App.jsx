import './App.css'
import Navbar from './components/Navbar'
import MouseMove from './components/MouseMove'
import Home from './components/Home'
import Technologies from './components/Technologies'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Footer from './components/Footer'

export default function App() {

  return (
    <>
      <Navbar />
      <MouseMove />
      <Home />
      <About />
      <Technologies />
      <Portfolio />
      <Footer />
    </>
  )
}


