'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Handle navbar background blur effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle active section detection using IntersectionObserver
  useEffect(() => {
    const sectionIds = ['research', 'projects', 'about', 'experience', 'skills', 'contact'];
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -70% 0px', // Triggers when the section is in the top 30% of the screen
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    // Fallback for very top of page
    const handleScrollTop = () => {
      if (window.scrollY < 100) {
        setActiveSection('');
      }
    };
    window.addEventListener('scroll', handleScrollTop, { passive: true });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
      window.removeEventListener('scroll', handleScrollTop);
    };
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: scrolled ? '20px' : '40px',
      left: '0',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      zIndex: 1000,
      transition: 'top 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      pointerEvents: 'none'
    }}>
      <nav style={{
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(40px)',
        WebkitBackdropFilter: 'blur(40px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 30px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)',
        borderRadius: '100px',
        padding: '8px',
        display: 'flex',
        gap: '4px',
        pointerEvents: 'auto',
        overflowX: 'auto',
        maxWidth: '90vw'
      }}>
        {[
          { id: 'research', label: 'Research' },
          { id: 'projects', label: 'Projects' },
          { id: 'about', label: 'About' },
          { id: 'experience', label: 'Education' },
          { id: 'skills', label: 'Skill' },
          { id: 'contact', label: 'Contact' }
        ].map(item => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              className={`floating-tab ${isActive ? 'active' : ''}`}
            >
              <span className="tab-text">{item.label}</span>
              {isActive && (
                <motion.div
                  layoutId="navbar-active-pill"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: '#ffffff',
                    borderRadius: '100px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                    zIndex: 0
                  }}
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </a>
          );
        })}
      </nav>

      <style dangerouslySetInnerHTML={{__html: `
        .floating-tab {
          position: relative;
          padding: 8px 20px;
          border-radius: 100px;
          text-decoration: none;
          white-space: nowrap;
          transition: background 0.2s ease;
        }
        .tab-text {
          position: relative;
          z-index: 1;
          color: rgba(255, 255, 255, 0.7);
          font-size: 14px;
          font-weight: 500;
          transition: all 0.3s ease;
        }
        .floating-tab:hover {
          background: rgba(255, 255, 255, 0.08);
        }
        .floating-tab:hover .tab-text {
          color: #ffffff;
        }
        .floating-tab.active:hover {
          background: transparent;
        }
        .floating-tab.active .tab-text {
          color: #000000 !important;
          font-weight: 600;
        }
        @media (max-width: 768px) {
          .floating-tab {
            padding: 8px 12px;
          }
          .tab-text {
            font-size: 13px;
          }
        }
        /* Hide scrollbar for mobile sliding */
        nav::-webkit-scrollbar {
          display: none;
        }
        nav {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
};
