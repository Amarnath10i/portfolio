'use client';
import { research } from '@/data/research';
import { motion } from 'framer-motion';

export const Research = () => {
  return (
    <section id="research" style={{ padding: '40px 20px 20px 20px', position: 'relative' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: '14px', letterSpacing: '4px', textTransform: 'uppercase', color: 'var(--apple-green)', marginBottom: '16px', fontWeight: '600' }}
          >
            Academic Studies
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', margin: 0, marginBottom: '16px' }}
          >
            Selected <span style={{ background: 'linear-gradient(90deg, #30d158, #0a84ff, #bf5af2)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent', color: 'transparent', display: 'inline-block' }}>Research</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ color: 'var(--text-secondary)', fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}
          >
            Deep learning explorations and novel architectures.
          </motion.p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {research.map((item, idx) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              style={{
                background: 'linear-gradient(145deg, rgba(20, 20, 20, 0.8) 0%, rgba(5, 5, 5, 0.6) 100%)',
                backdropFilter: 'blur(40px)',
                WebkitBackdropFilter: 'blur(40px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '32px',
                padding: '40px',
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: '40px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.6), inset 0 1px 1px rgba(255,255,255,0.1)',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                e.currentTarget.style.borderColor = 'rgba(48, 209, 88, 0.4)';
                e.currentTarget.style.boxShadow = '0 30px 60px rgba(48, 209, 88, 0.15), 0 0 80px rgba(10, 132, 255, 0.15), inset 0 1px 1px rgba(255,255,255,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.6), inset 0 1px 1px rgba(255,255,255,0.1)';
              }}
            >
              
              <div style={{ flex: '1 1 400px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px', flexWrap: 'wrap' }}>
                  <h3 style={{ fontSize: '32px', fontWeight: '800', color: '#fff', margin: 0, letterSpacing: '-0.02em' }}>{item.title}</h3>
                  <span style={{ 
                    padding: '6px 16px', 
                    background: 'linear-gradient(90deg, rgba(48, 209, 88, 0.15), rgba(10, 132, 255, 0.15))', 
                    border: '1px solid rgba(48, 209, 88, 0.3)',
                    color: '#fff',
                    borderRadius: '100px',
                    fontSize: '12px',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    boxShadow: '0 0 20px rgba(48, 209, 88, 0.2)'
                  }}>
                    {item.category}
                  </span>
                </div>
                
                <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.85)', lineHeight: '1.6', marginBottom: '32px' }}>
                  {item.description}
                </p>
                
                {item.details && (
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px', padding: 0, listStyle: 'none' }}>
                    {item.details.map((detail, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.6' }}>
                        <i className="ph-fill ph-sparkle" style={{ color: 'var(--apple-green)', fontSize: '20px', marginTop: '2px', flexShrink: 0 }}></i>
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}
                
                <div style={{ display: 'flex', gap: '16px' }}>
                  <a href={item.github} target="_blank" rel="noopener noreferrer" style={{
                    display: 'inline-flex', alignItems: 'center', gap: '10px',
                    padding: '14px 28px',
                    background: 'linear-gradient(90deg, #30d158, #0a84ff)',
                    border: 'none',
                    borderRadius: '100px',
                    color: '#fff',
                    fontSize: '15px',
                    fontWeight: '700',
                    textDecoration: 'none',
                    transition: 'all 0.3s',
                    boxShadow: '0 10px 20px rgba(10, 132, 255, 0.3)'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 15px 30px rgba(10, 132, 255, 0.5)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 10px 20px rgba(10, 132, 255, 0.3)'; }}
                  >
                    <i className="ph-fill ph-github-logo" style={{ fontSize: '22px' }}></i> Source Code
                  </a>
                </div>
              </div>

              {item.metrics && (
                <div style={{ 
                  flex: '0 0 250px', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'center',
                  gap: '32px',
                  borderLeft: '1px solid rgba(255,255,255,0.1)',
                  paddingLeft: 'clamp(20px, 4vw, 40px)'
                }}>
                  {item.metrics.map((metric, idx) => (
                    <div key={idx}>
                      <div style={{ 
                        fontSize: '52px', 
                        fontWeight: '900', 
                        letterSpacing: '-0.04em',
                        background: 'linear-gradient(135deg, #30d158, #0a84ff, #bf5af2)',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        color: 'transparent',
                        lineHeight: '1',
                        marginBottom: '8px'
                      }}>
                        {metric.value}
                      </div>
                      <div style={{ 
                        fontSize: '12px', 
                        textTransform: 'uppercase', 
                        letterSpacing: '2px', 
                        color: 'rgba(255, 255, 255, 0.6)',
                        fontWeight: '700'
                      }}>
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
