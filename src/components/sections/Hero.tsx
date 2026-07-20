'use client';
import { useState } from 'react';
import { profile } from '@/data/profile';
import { AboutModal } from '@/components/ui/AboutModal';
import { motion } from 'framer-motion';

export const Hero = () => {
  const [showAboutModal, setShowAboutModal] = useState(false);

  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', padding: '40px 5vw' }}>
      
      {/* Background glow specific to Hero for extra depth */}
      <div style={{ position: 'absolute', top: '10%', left: '0%', width: '40vw', height: '40vw', background: 'var(--apple-blue)', filter: 'blur(150px)', opacity: 0.15, borderRadius: '50%', pointerEvents: 'none' }}></div>
      <div style={{ position: 'absolute', bottom: '10%', right: '0%', width: '40vw', height: '40vw', background: 'var(--apple-green)', filter: 'blur(150px)', opacity: 0.1, borderRadius: '50%', pointerEvents: 'none' }}></div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%', zIndex: 10 }}>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '100px', marginBottom: '32px' }}
        >
          <span style={{ width: '8px', height: '8px', background: 'var(--apple-green)', borderRadius: '50%', boxShadow: '0 0 10px var(--apple-green)' }}></span>
          <span style={{ fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.7)', fontWeight: '600' }}>{profile.role}</span>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ fontSize: '28px', color: 'var(--text-secondary)', marginBottom: '16px', fontWeight: '500', letterSpacing: '-0.02em' }}
        >
          {profile.greeting}
        </motion.p>
        
        <h1 style={{ margin: 0, display: 'flex', flexDirection: 'column', lineHeight: '0.9', letterSpacing: '-0.04em' }}>
          <motion.span 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontSize: 'clamp(60px, 12vw, 160px)', fontWeight: '900', color: '#ffffff', textShadow: '0 10px 40px rgba(0,0,0,0.5)' }}
          >
            MADAKA
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ 
              fontSize: 'clamp(60px, 12vw, 160px)', 
              fontWeight: '900', 
              background: 'linear-gradient(90deg, #30d158, #0a84ff, #bf5af2)', 
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text', 
              WebkitTextFillColor: 'transparent',
              color: 'transparent',
              display: 'inline-block'
            }}
          >
            AMARNATH
          </motion.span>
        </h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ fontSize: 'clamp(18px, 2vw, 24px)', color: 'var(--text-secondary)', maxWidth: '750px', marginTop: '40px', lineHeight: '1.6', fontWeight: '400' }}
        >
          {profile.bio}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          style={{ display: 'flex', gap: '24px', marginTop: '48px', flexWrap: 'wrap' }}
        >
          <a href="#projects" style={{ 
            padding: '16px 36px', 
            background: '#fff', 
            color: '#000', 
            borderRadius: '100px', 
            fontSize: '16px', 
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none',
            transition: 'all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
            boxShadow: '0 10px 30px rgba(255, 255, 255, 0.2)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 15px 40px rgba(255, 255, 255, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(255, 255, 255, 0.2)';
          }}
          >
            View My Work <i className="ph ph-arrow-right" style={{ fontSize: '20px' }}></i>
          </a>
          <button 
            onClick={() => setShowAboutModal(true)}
            style={{ 
              padding: '16px 36px', 
              background: 'rgba(255, 255, 255, 0.05)', 
              color: '#fff', 
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '100px', 
              fontSize: '16px', 
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              cursor: 'pointer',
              transition: 'all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
              backdropFilter: 'blur(20px)'
            }}
            onMouseEnter={(e) => { 
              e.currentTarget.style.transform = 'scale(1.05)'; 
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'; 
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
            }}
            onMouseLeave={(e) => { 
              e.currentTarget.style.transform = 'scale(1)'; 
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'; 
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            }}
          >
            Know About Me <i className="ph ph-user" style={{ fontSize: '20px' }}></i>
          </button>
        </motion.div>
      </div>

      <AboutModal isOpen={showAboutModal} onClose={() => setShowAboutModal(false)} />

    </section>
  );
};
