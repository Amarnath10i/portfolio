'use client';
import { motion } from 'framer-motion';

const inputStyle = {
  background: 'transparent',
  border: 'none',
  borderBottom: '1px solid var(--glass-border-strong)',
  color: 'var(--text-primary)',
  padding: '12px 0',
  fontSize: '15px',
  outline: 'none',
  width: '100%',
  fontFamily: 'inherit',
  transition: 'border-color 0.3s ease',
};

const checkboxLabelStyle = {
  display: 'flex', 
  alignItems: 'center', 
  gap: '10px', 
  fontSize: '14px', 
  color: 'var(--text-secondary)',
  cursor: 'pointer'
};

export const Contact = () => {
  return (
    <section id="contact" style={{ position: 'relative', padding: '40px 20px 20px 20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -10, boxShadow: '0 40px 80px rgba(0,0,0,0.8), 0 0 40px rgba(255,255,255,0.05)' }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="contact-card"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            background: 'var(--bg-elevated)',
            borderRadius: '32px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
          }}
        >
          
          {/* Left Column */}
          <div style={{ 
            padding: 'clamp(40px, 5vw, 80px)', 
            background: '#000000', 
            display: 'flex', flexDirection: 'column', justifyContent: 'center' 
          }}>
            <h2 style={{ fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 800, marginBottom: '40px', letterSpacing: '-0.02em', color: '#fff' }}>
              Contact.
            </h2>
            
            <div style={{ display: 'flex', gap: '20px', marginBottom: '32px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(10, 132, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <i className="ph ph-chat-circle" style={{ fontSize: '24px', color: 'var(--apple-blue)' }}></i>
              </div>
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '4px', color: '#fff' }}>Chat to me</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '15px', marginBottom: '8px', lineHeight: '1.4' }}>
                  I'm always open to discussing new projects, research, or opportunities.
                </p>
                <a href="mailto:amarnath10chinu@gmail.com" style={{ color: 'var(--apple-blue)', fontWeight: 500, fontSize: '15px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  amarnath10chinu@gmail.com <i className="ph ph-copy"></i>
                </a>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '20px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(48, 209, 88, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <i className="ph ph-phone" style={{ fontSize: '24px', color: 'var(--apple-green)' }}></i>
              </div>
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '4px', color: '#fff' }}>Call me</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '15px', marginBottom: '8px', lineHeight: '1.4' }}>
                  Mon-Fri from 9am to 6pm.
                </p>
                <a href="tel:+919063377154" style={{ color: 'var(--apple-green)', fontWeight: 500, fontSize: '15px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  +91 9063377154 <i className="ph ph-copy"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column (Form) */}
          <div style={{ 
            padding: 'clamp(40px, 5vw, 80px)', 
            background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(10,132,255,0.15) 100%)', 
            backdropFilter: 'blur(40px)',
            WebkitBackdropFilter: 'blur(40px)',
            borderLeft: '1px solid rgba(255,255,255,0.2)',
            position: 'relative' 
          }}>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h2 style={{ fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 700, marginBottom: '8px', letterSpacing: '-0.01em', color: '#fff' }}>
                Got ideas? Let's team up.
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '32px', fontSize: '15px' }}>
                Tell me more about yourself and what you've got in mind.
              </p>
              
              <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Your name" style={{...inputStyle, color: '#fff', borderBottom: '1px solid rgba(255,255,255,0.2)'}} className="apple-input-glass" />
                <input type="email" placeholder="you@company.com" style={{...inputStyle, color: '#fff', borderBottom: '1px solid rgba(255,255,255,0.2)'}} className="apple-input-glass" />
                <textarea placeholder="Tell me a little about the project..." rows={2} style={{...inputStyle, resize: 'vertical', color: '#fff', borderBottom: '1px solid rgba(255,255,255,0.2)'}} className="apple-input-glass" />
                
                <div style={{ marginTop: '16px' }}>
                  <p style={{ fontWeight: 600, marginBottom: '16px', fontSize: '15px', color: '#fff' }}>How can I help?</p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <label style={{...checkboxLabelStyle, color: 'rgba(255,255,255,0.8)'}}>
                      <input type="checkbox" className="apple-checkbox-glass" /> Web Development
                    </label>
                    <label style={{...checkboxLabelStyle, color: 'rgba(255,255,255,0.8)'}}>
                      <input type="checkbox" className="apple-checkbox-glass" /> AI & Machine Learning
                    </label>
                    <label style={{...checkboxLabelStyle, color: 'rgba(255,255,255,0.8)'}}>
                      <input type="checkbox" className="apple-checkbox-glass" /> UI/UX Design
                    </label>
                    <label style={{...checkboxLabelStyle, color: 'rgba(255,255,255,0.8)'}}>
                      <input type="checkbox" className="apple-checkbox-glass" /> Other
                    </label>
                  </div>
                </div>
                
                <button className="btn solid" style={{ 
                  width: '100%', padding: '16px', borderRadius: '12px', marginTop: '16px', 
                  background: 'var(--apple-blue)', color: '#ffffff', fontSize: '16px', fontWeight: 700 
                }}>
                  Let's get started!
                </button>
              </form>
            </div>
          </div>
          
        </motion.div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @media (min-width: 992px) {
          .contact-card { grid-template-columns: 1fr 1.2fr !important; }
        }
        .apple-input-glass::placeholder {
          color: rgba(255,255,255,0.5);
        }
        .apple-input-glass:focus {
          border-bottom-color: var(--apple-blue) !important;
        }
        .apple-checkbox-glass {
          appearance: none;
          width: 18px; height: 18px;
          border: 1.5px solid rgba(255,255,255,0.3);
          border-radius: 4px;
          outline: none;
          cursor: pointer;
          position: relative;
          transition: all 0.2s ease;
        }
        .apple-checkbox-glass:checked {
          background: var(--apple-blue);
          border-color: var(--apple-blue);
        }
        .apple-checkbox-glass:checked::after {
          content: '';
          position: absolute;
          left: 5px; top: 2px;
          width: 4px; height: 8px;
          border: solid white;
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
        }
      `}} />
    </section>
  );
};
