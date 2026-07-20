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
              <div>
                <h3 style={{ fontSize: '24px', fontWeight: '800' }}>{project.title}</h3>
                <span className="tag" style={{ marginTop: '8px', display: 'inline-block' }}>{project.category}</span>
              </div>
              <button className="close-btn" onClick={onClose}>
                <i className="ph ph-x"></i>
              </button>
            </div>

            <div className="modal-body">
              <div className="modal-image-container">
                {/* Fallback pattern if no image exists yet */}
                <div className="placeholder-image">
                  <i className="ph ph-image" style={{ fontSize: '48px', opacity: 0.2 }}></i>
                  <span>Preview Image coming soon</span>
                  <p style={{ fontSize: '12px', marginTop: '8px' }}>Add {project.image} to public folder</p>
                </div>
              </div>
              
              <div className="modal-info">
                <p className="modal-description">{project.description}</p>
                
                {project.details && (
                  <ul className="modal-details">
                    {project.details.map((detail, idx) => (
                      <li key={idx}><i className="ph-fill ph-check-circle" style={{ color: 'var(--apple-blue)', marginRight: '8px' }}></i> {detail}</li>
                    ))}
                  </ul>
                )}

                <div className="modal-tech">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="chip">{t}</span>
                  ))}
                </div>

                <div className="modal-actions">
                  <a href={project.github} className="btn ghost" target="_blank" rel="noopener noreferrer">
                    <i className="ph ph-github-logo"></i> GitHub
                  </a>
                  {project.demo && (
                    <a href={project.demo} className="btn solid" target="_blank" rel="noopener noreferrer">
                      <i className="ph ph-arrow-up-right"></i> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
