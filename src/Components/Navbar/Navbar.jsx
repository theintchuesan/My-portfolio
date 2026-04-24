  import React from 'react'
  import About from '../About/About.jsx'
  import Experience from '../Experience/Experience.jsx'
  import Projects from '../Projects/Projects.jsx'
  import Contact from '../Contact/Contact.jsx'
  import { Link } from 'react-router-dom'

  const Navbar = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="w-full h-16 text-white flex items-center justify-between px-10 pt-6 md:px-20">
      
      <span className="text-xl font-bold">Portfolio</span>

      <ul className="flex gap-10 text-lg font-semibold cursor-pointer">

        <li onClick={() => scrollToSection('about')}
            className="hover:text-blue-500 transition">
          About
        </li>

        <li onClick={() => scrollToSection('experience')}
            className="hover:text-blue-500 transition">
          Experience
        </li>

        <li onClick={() => scrollToSection('projects')}
            className="hover:text-blue-500 transition">
          Projects
        </li>

        <li onClick={() => scrollToSection('contact')}
            className="hover:text-blue-500 transition">
          Contact
        </li>

      </ul>
    </nav>
  )
}

  export default Navbar