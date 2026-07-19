'use client';

export const Footer = () => {
  return (
    <footer id="contact">
      <div className="wrap">
        <div className="foot-grid reveal">
          <div>
            <h2>Let's build <span>something amazing</span> together.</h2>
            <p>Open to software engineering roles, research collaborations, and hackathon teams.</p>
          </div>
          
          <div className="foot-links">
            <a href="mailto:amarnath10chinu@gmail.com" id="copy-email">
              <i className="ph ph-envelope-simple"></i> amarnath10chinu@gmail.com
            </a>
            <a href="https://github.com/Amarnath10i" target="_blank" rel="noopener noreferrer">
              <i className="ph ph-github-logo"></i> github.com/Amarnath10i
            </a>
            <a href="https://kaggle.com/amarnath10" target="_blank" rel="noopener noreferrer">
              <i className="ph ph-kaggle-logo"></i> kaggle.com/amarnath10
            </a>
          </div>
        </div>
        
        <div className="copyright reveal reveal-delay-1">
          © {new Date().getFullYear()} Madaka Amarnath. Crafted with precision and dark mode.
        </div>
      </div>
    </footer>
  );
};
