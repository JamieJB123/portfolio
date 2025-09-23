import './App.css'
import Navbar from './components/Navbar'
import Nav from './components/Nav'
import CV from './components/CV'
import MouseMove from './components/MouseMove'
import Home from './components/Home'
import Technologies from './components/Technologies'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Footer from './components/Footer'

export default function App() {

  return (
    <>
      {/* <Navbar /> */}
      < Nav />
      <MouseMove />
      <CV />
      <Home />
      <About />
      <Technologies />
      <Portfolio />
      <Footer />
    </>
  )
}


