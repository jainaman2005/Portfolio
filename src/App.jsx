import Header from './components/Header/header.jsx'
// import Footer from './components/Footer/footer.jsx'
import Home from './components/Home/home.jsx'
import About from './components/About/about.jsx'
import Projects from './components/Projects/project.jsx'
import Experience from './components/Experience/experience.jsx'
import Contact from './components/Contact/contact.jsx'
// import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'

function App() {
  return (
    < >
      <Header/>
      <Home/>
      <About/>
      <Projects/>
      <Experience/>
      <Contact/>
      {/* <Footer/> */}
    </>
  )
}

export default App
