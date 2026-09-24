'use client';
import { useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { profile } from '@/data/profile';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Word = ({ children, progress, range }: { children: string, progress: any, range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span style={{ opacity, display: 'inline-block', marginRight: '16px', marginTop: '16px' }}>
      {children}
    </motion.span>
  );
};

export const AboutModal = ({ isOpen, onClose }: AboutModalProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: containerRef });

  if (!isOpen) return null;

  const text = profile.longBio;
  const words = text.split(" ");

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="modal-overlay" onClick={onClose} style={{ padding: '0', background: 'transparent', backdropFilter: 'none' }}>
          <motion.div
            ref={containerRef}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="about-modal-fullscreen"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="about-header-nav">
                <button className="back-arrow-btn" onClick={onClose}>
                  <i className="ph ph-arrow-left" style={{ color: 'var(--apple-green)' }}></i>
                </button>
            </div>

            <div className="about-content-wrapper">
                <p className="about-eyebrow">KNOW ABOUT ME</p>
                <h1 className="about-name">MADAKA AMARNATH</h1>
                
                <div className="about-huge-text">
                    {words.map((word, i) => {
                        const start = i / words.length;
                        return (
                            <Word key={i} progress={scrollYProgress} range={[start * 0.6, start * 0.6 + 0.15]}>
                                {word}
                            </Word>
                        )
                    })}
                </div>
                
                <div style={{ height: '40vh' }} />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
