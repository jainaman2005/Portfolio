import { useState } from 'react'
import Header from './components/Header/header.jsx'
import Footer from './components/Footer/footer.jsx'
import Hero from './components/Hero/hero.jsx'
import About from './components/About/about.jsx'
import Projects from './components/Projects/project.jsx'
import Experience from './components/Experience/experience.jsx'
import Contact from './components/Contact/contact.jsx'
// import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <Projects/>
      <Experience/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
