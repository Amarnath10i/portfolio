'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  details?: string[];
  tech: string[];
  github: string;
  demo?: string | null;
  image: string;
};

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="modal-overlay" onClick={onClose}>
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <button className="back-arrow-btn" onClick={onClose} aria-label="Go back">
                  <i className="ph ph-arrow-left"></i>
                </button>
                <div>
                  <h2 style={{ margin: 0, fontSize: '24px', letterSpacing: '-0.02em', textTransform: 'uppercase' }}>
                    {project.title}
                  </h2>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>{project.category}</span>
                </div>
              </div>

              <div className="modal-header-actions">
                <a href={project.github} className="btn ghost header-btn" target="_blank" rel="noopener noreferrer">
                  <i className="ph ph-github-logo"></i> GitHub
                </a>
                {project.demo && (
                  <a href={project.demo} className="btn solid header-btn" target="_blank" rel="noopener noreferrer">
                    <i className="ph ph-arrow-up-right"></i> View website
                  </a>
                )}
              </div>
            </div>

            <div className="modal-body">
              <div className="modal-image-container">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="modal-img" />
                ) : (
                  <div className="placeholder-image">
                    <i className="ph ph-image" style={{ fontSize: '48px', opacity: 0.2 }}></i>
                    <span>Preview Image coming soon</span>
                  </div>
                )}
              </div>
              
              <div className="modal-info">
                <p className="modal-description">{project.description}</p>
                
                {project.details && (
                  <ul className="modal-details">
                    {project.details.map((detail, idx) => (
                      <li key={idx}>
                        <i className="ph-fill ph-sparkle" style={{ color: 'var(--apple-green)', marginRight: '12px', fontSize: '14px', marginTop: '4px' }}></i> 
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="modal-tech">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="chip">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {project.image && (
              <div className="previews-section">
                <h3 className="previews-title">Previews</h3>
                <div className="previews-grid">
                  {[1, 2, 3, 4, 5].map((num) => {
                    const baseImageName = project.image.replace('/projects/', '').replace('.png', '');
                    return (
                      <img 
                        key={num}
                        src={`/projects/${baseImageName}-preview-${num}.png`} 
                        alt={`${project.title} Preview ${num}`} 
                        className="preview-thumb"
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      />
                    );
                  })}
                </div>
              </div>
            )}

            <div className="scroll-indicator">
              <i className="ph ph-arrow-down"></i>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
