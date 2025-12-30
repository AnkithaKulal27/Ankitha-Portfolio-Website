import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './sections/About'
import Contact from './sections/Contact'
import Home from './sections/Home'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import { motion } from "motion/react"

function App() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className='bg-color4 text-white min-h-screen overflow-x-hidden scroll-smooth'
    >
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </motion.div>
  )
}

export default App
