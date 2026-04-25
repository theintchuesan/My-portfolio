import React, { useState } from 'react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className="w-full bg-[#1e063c] text-white flex items-center justify-between px-6 md:px-20 py-4 relative">

      <span className="text-xl font-bold">Portfolio</span>

      {/* Desktop */}
      <ul className="hidden md:flex gap-10 text-lg font-semibold cursor-pointer">
        <li onClick={() => scrollToSection('about')} className="hover:text-blue-500">About</li>
        <li onClick={() => scrollToSection('experience')} className="hover:text-blue-500">Experience</li>
        <li onClick={() => scrollToSection('projects')} className="hover:text-blue-500">Projects</li>
        <li onClick={() => scrollToSection('contact')} className="hover:text-blue-500">Contact</li>
      </ul>

      {/* Mobile Button */}
      <div className="md:hidden flex flex-col gap-1 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
        <span className="w-6 h-0.5 bg-white"></span>
        <span className="w-6 h-0.5 bg-white"></span>
        <span className="w-6 h-0.5 bg-white"></span>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-16 left-0 right-0 bg-black flex flex-col items-center gap-6 py-6 text-lg font-semibold md:hidden">
          <li onClick={() => scrollToSection('about')}>About</li>
          <li onClick={() => scrollToSection('experience')}>Experience</li>
          <li onClick={() => scrollToSection('projects')}>Projects</li>
          <li onClick={() => scrollToSection('contact')}>Contact</li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar