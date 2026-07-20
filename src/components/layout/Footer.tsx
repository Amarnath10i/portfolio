'use client';

export const Footer = () => {
  return (
    <footer style={{ display: 'flex', justifyContent: 'center', margin: 0, padding: 0, border: 'none' }}>
      <div style={{
        width: '100%',
        background: 'linear-gradient(to right, #000000 40%, #03200d 70%, #054a1d 100%)',
        borderTop: '1px solid rgba(48, 209, 88, 0.15)',
        padding: '40px 40px 10px 40px',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '40px',
        justifyContent: 'space-between',
        boxShadow: 'inset -40px 0 100px rgba(48, 209, 88, 0.1)'
      }}>
        
        {/* Left Column */}
        <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h3 style={{ fontSize: '28px', fontWeight: 'bold', color: '#fff', margin: 0, letterSpacing: '-0.02em' }}>
            Madaka Amarnath
          </h3>
          <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '14px', lineHeight: '1.6', margin: 0, maxWidth: '80%' }}>
            I'm Amarnath — an AI researcher & software engineer. Thanks for stopping by!
          </p>
          <p style={{ color: 'rgba(255, 255, 255, 0.4)', fontSize: '13px', margin: 0, marginTop: '20px' }}>
            © {new Date().getFullYear()} Madaka Amarnath
          </p>
        </div>

        {/* Right Columns Container */}
        <div style={{ display: 'flex', gap: '100px', flexWrap: 'wrap' }}>
          {/* Explore Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <h4 style={{ color: '#fff', fontSize: '16px', fontWeight: '600', margin: 0, marginBottom: '8px' }}>
              Explore
            </h4>
            <a href="#about" style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '14px', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#fff'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'}>About</a>
            <a href="#contact" style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '14px', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#fff'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'}>Contact</a>
            <a href="#projects" style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '14px', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#fff'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'}>Projects</a>
          </div>

          {/* Social Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <h4 style={{ color: '#fff', fontSize: '16px', fontWeight: '600', margin: 0, marginBottom: '8px' }}>
              Social
            </h4>
            <div style={{ display: 'flex', gap: '16px' }}>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '24px', transition: 'transform 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                <i className="ph-fill ph-github-logo"></i>
              </a>
              <a href="https://www.linkedin.com/in/amar-nath-896232363/" target="_blank" rel="noopener noreferrer" style={{ color: '#0a66c2', fontSize: '24px', transition: 'transform 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                <i className="ph-fill ph-linkedin-logo"></i>
              </a>
              <a href="https://instagram.com/Amarnath10_" target="_blank" rel="noopener noreferrer" style={{ color: '#E1306C', fontSize: '24px', transition: 'transform 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                <i className="ph-fill ph-instagram-logo"></i>
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
