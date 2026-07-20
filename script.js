/**
 * AMARNATH PORTFOLIO — INTERACTIVITY
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Navigation Toggle
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('open');
      navLinks.classList.toggle('open');
    });

    // Close menu when clicking a link
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }

  // 2. Navbar Scroll Effect & Active Section Highlighting
  const header = document.getElementById('navbar');
  const sections = document.querySelectorAll('section, footer');
  const navItems = document.querySelectorAll('.navlinks a');

  window.addEventListener('scroll', () => {
    // Navbar glass effect
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Active section highlighting
    let current = '';
    const scrollPosition = window.scrollY + 150; // Offset for sticky nav

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    // Special case for bottom of page (contact section)
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 10) {
        current = 'contact';
    }

    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href') === `#${current}`) {
        item.classList.add('active');
      }
    });
  });

  // 3. Copy Email to Clipboard
  const copyBtn = document.getElementById('copy-email');
  if (copyBtn) {
    copyBtn.addEventListener('click', (e) => {
      e.preventDefault();
      
      const email = 'amarnath10chinu@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        const originalHTML = copyBtn.innerHTML;
        
        // Show success state
        copyBtn.classList.add('copied');
        copyBtn.innerHTML = '<i class="ph ph-check-circle"></i> Copied to clipboard!';
        
        // Revert after 2.5 seconds
        setTimeout(() => {
          copyBtn.classList.remove('copied');
          copyBtn.innerHTML = originalHTML;
        }, 2500);
      }).catch(err => {
        console.error('Failed to copy text: ', err);
      });
    });
  }

  // 4. Scroll Reveal Animations (Intersection Observer)
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -10% 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, observerOptions);

  const revealElements = document.querySelectorAll('.reveal');
  revealElements.forEach(el => {
    observer.observe(el);
  });
});
