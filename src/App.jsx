import Navbar from './Components/Navbar/Navbar.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Experience from './Components/Experience/Experience.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Projects from './Components/Projects/Projects.jsx'
import Education from './Components/Education/Education.jsx'
import Contact from './Components/Contact-me/Contact.jsx'
import ParticlesBackground from './Components/ParticleBg.jsx'

function App() {
  return (
    <div className="relative bg-[#1A0B2E] min-h-screen w-full overflow-x-hidden">

      {/* Background */}
      <ParticlesBackground />

<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>

  
  {/* 3. Your glow effects (optional but recommended) */}
  <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600 opacity-20 blur-3xl rounded-full"></div>
  <div className="absolute bottom-20 right-10 w-72 h-72 bg-fuchsia-600 opacity-20 blur-3xl rounded-full"></div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Home />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </div>

    </div>
  );
}

export default App