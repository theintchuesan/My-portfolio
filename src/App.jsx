import Navbar from './Components/Navbar/Navbar.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Experience from './Components/Experience/Experience.jsx'
import Contact from './Components/Contact/Contact.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Projects from './Components/Projects/Projects.jsx'

function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#171d32] min-h-screen w-full">
        <Navbar />

          <Home />
         <About />
          <Experience />
            <Projects />
         
         <Contact />
      </div>
    </BrowserRouter>
  )
}

export default App