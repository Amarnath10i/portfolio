'use client';
import { experience } from '@/data/experience';
import { motion } from 'framer-motion';
import { useState } from 'react';

export const Experience = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const bgColors = [
    'linear-gradient(135deg, #18181b 0%, #09090b 100%)', // Onyx
    'linear-gradient(135deg, #1e3a8a 0%, #172554 100%)', // Sapphire
    'linear-gradient(135deg, #7f1d1d 0%, #450a0a 100%)', // Ruby
  ];

  const borderColors = [
    '#FFD700', // Gold
    '#38bdf8', // Neon Blue
    '#f87171', // Neon Red
  ];

  const getCardY = (idx: number) => {
    if (hoveredIndex === null) return 0;
    if (idx === hoveredIndex) return -20; // Hovered card pops up slightly
    if (idx > hoveredIndex) return 220; // Cards below drop down to reveal the hovered card!
    if (idx < hoveredIndex) return -20; // Cards above move up with the hovered card
    return 0;
  };

  return (
    <section id="experience" style={{ padding: '40px 20px 20px 20px', position: 'relative', zIndex: 10 }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: '14px', letterSpacing: '4px', textTransform: 'uppercase', color: '#a1a1aa', marginBottom: '12px', fontWeight: '600' }}
          >
            Academic Journey
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', margin: 0, marginBottom: '16px' }}
          >
            My <span style={{ backgroundImage: 'linear-gradient(90deg, #FFD700, #fff)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent', color: 'transparent', display: 'inline-block' }}>Education</span>
          </motion.h2>
        </div>

        {/* The Wallet Container */}
        <div style={{ position: 'relative', paddingBottom: '20px' }} onMouseLeave={() => setHoveredIndex(null)}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {experience.map((item, idx) => {
              const isHovered = hoveredIndex === idx;
              
              return (
                <motion.div 
                  key={item.id}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  animate={{ 
                    y: getCardY(idx),
                    scale: isHovered ? 1.02 : 1,
                    boxShadow: isHovered 
                      ? `0 30px 60px rgba(0,0,0,0.8), 0 0 40px ${borderColors[idx % borderColors.length]}40` 
                      : '0 -15px 30px rgba(0,0,0,0.6)',
                  }}
                  transition={{ 
                    type: 'spring', 
                    stiffness: 300, 
                    damping: 25,
                    opacity: { duration: 0.6, delay: idx * 0.15 } 
                  }}
                  style={{
                    position: 'relative',
                    height: '280px', // Fixed height makes the wallet stack perfectly predictable
                    marginTop: idx === 0 ? '0' : '-200px', // MASSIVE overlap! Only the top 80px is visible normally
                    zIndex: isHovered ? 50 : idx, // Hovered card jumps to front to prevent clipping during animation
                    background: bgColors[idx % bgColors.length],
                    border: `1px solid ${borderColors[idx % borderColors.length]}40`,
                    borderTop: `2px solid ${borderColors[idx % borderColors.length]}90`, // Bright rim-light on top edge
                    borderRadius: '24px',
                    padding: '24px 30px',
                    cursor: 'pointer',
                    overflow: 'hidden'
                  }}
                >
                  {/* Header (Always Visible Tab) */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', height: '60px' }}>
                    <div style={{ fontSize: '18px', color: borderColors[idx % borderColors.length], fontWeight: '700', maxWidth: '65%' }}>
                      {item.organization}
                    </div>
                    <span style={{ 
                      padding: '6px 16px', 
                      background: `${borderColors[idx % borderColors.length]}20`,
                      border: `1px solid ${borderColors[idx % borderColors.length]}50`,
                      color: borderColors[idx % borderColors.length],
                      borderRadius: '12px',
                      fontSize: '11px',
                      fontWeight: '800',
                      textTransform: 'uppercase',
                    }}>
                      {item.period}
                    </span>
                  </div>

                  {/* Body (Revealed when popped out) */}
                  <div style={{ marginTop: '10px' }}>
                    <h3 style={{ fontSize: 'clamp(18px, 2.5vw, 24px)', fontWeight: '800', color: '#fff', margin: 0, marginBottom: '12px' }}>
                      {item.title}
                    </h3>
                    
                    {item.description && (
                      <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.6', margin: 0, fontWeight: '400', maxWidth: '90%' }}>
                        {item.description}
                      </p>
                    )}
                  </div>
                  
                  {/* Subtle watermark logo in background */}
                  <i className="ph-fill ph-student" style={{
                    position: 'absolute',
                    right: '-15px',
                    bottom: '-15px',
                    fontSize: '150px',
                    color: borderColors[idx % borderColors.length],
                    opacity: 0.05,
                    zIndex: 0
                  }}></i>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
