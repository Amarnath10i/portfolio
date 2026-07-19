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
        <nav className="wrap" style={{ justifyContent: 'flex-start' }}>
          <div className="brand">
            <span className="brand-text">Amarnath</span>
          </div>
        </nav>
      </div>
    </header>
  );
};
