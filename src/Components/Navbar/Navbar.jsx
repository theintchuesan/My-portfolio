import React, { useState } from 'react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false) // close menu after click
  }

  return (
    <nav className="w-full text-white flex items-center justify-between px-6 md:px-20 py-4">

      {/* Logo */}
      <span className="text-xl font-bold">Portfolio</span>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10 text-lg font-semibold cursor-pointer">
        <li onClick={() => scrollToSection('about')} className="hover:text-blue-500 transition">About</li>
        <li onClick={() => scrollToSection('experience')} className="hover:text-blue-500 transition">Experience</li>
        <li onClick={() => scrollToSection('projects')} className="hover:text-blue-500 transition">Projects</li>
        <li onClick={() => scrollToSection('contact')} className="hover:text-blue-500 transition">Contact</li>
      </ul>

      {/* Hamburger Button (Mobile) */}
      <div className="md:hidden flex flex-col gap-1 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
        <span className="w-6 h-0.5 bg-white"></span>
        <span className="w-6 h-0.5 bg-white"></span>
        <span className="w-6 h-0.5 bg-white"></span>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center gap-6 py-6 text-lg font-semibold md:hidden">
          <li onClick={() => scrollToSection('about')} className="hover:text-blue-500 transition">About</li>
          <li onClick={() => scrollToSection('experience')} className="hover:text-blue-500 transition">Experience</li>
          <li onClick={() => scrollToSection('projects')} className="hover:text-blue-500 transition">Projects</li>
          <li onClick={() => scrollToSection('contact')} className="hover:text-blue-500 transition">Contact</li>
        </ul>
      )}
      
    </nav>
  )
}

export default Navbar