'use client';
import { useState, useEffect } from 'react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="nav-glass">
        <nav className="wrap" style={{ justifyContent: 'space-between' }}>
          <div className={`navlinks ${menuOpen ? 'active' : ''}`} id="nav-links">
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#research" onClick={() => setMenuOpen(false)}>Research</a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
            <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
            <a href="#blog" onClick={() => setMenuOpen(false)}>Blog</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>

          <div className="brand" style={{ marginLeft: 'auto' }}>
            <span className="brand-text">Amarnath</span>
          </div>

          <button 
            className={`nav-toggle ${menuOpen ? 'active' : ''}`} 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
    </header>
  );
};
