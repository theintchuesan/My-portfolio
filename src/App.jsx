import Navbar from './Components/Navbar/Navbar.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Experience from './Components/Experience/Experience.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Projects from './Components/Projects/Projects.jsx'
import Education from './Components/Education/Education.jsx'

function App() {
  return (
<div className="bg-[#1A0B2E] min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </div>
  )
}

export default App