'use client';
import { useState } from 'react';
import { projects } from '@/data/projects';
import { ProjectModal } from '@/components/ui/ProjectModal';
import { motion } from 'framer-motion';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <>
      <section id="projects" style={{ padding: '40px 0 20px 0', position: 'relative' }}>
        
        {/* Header - Constrained to center */}
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ fontSize: '14px', letterSpacing: '4px', textTransform: 'uppercase', color: 'var(--apple-orange)', marginBottom: '16px', fontWeight: '600' }}
            >
              Software & Tools
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              style={{ fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', margin: 0, marginBottom: '16px' }}
            >
              My <span style={{ backgroundImage: 'linear-gradient(90deg, #FFD700, #FF0000)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent', color: 'transparent', display: 'inline-block' }}>Projects</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              style={{ color: 'var(--text-secondary)', fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}
            >
              Building robust platforms and intelligent web applications.
            </motion.p>
          </div>
        </div>

        {/* Unified Horizontal Scrolling Carousel - Full Screen Width */}
        <div 
          className="hide-scrollbar"
          style={{ 
          display: 'flex', 
          gap: '20px', 
          overflowX: 'auto', 
          paddingBottom: '80px', // Extra padding for the massive hover shadows
          paddingLeft: '20px',
          paddingRight: '20px',
          scrollSnapType: 'x mandatory',
          scrollPadding: '0 20px',
          WebkitOverflowScrolling: 'touch',
          width: '100vw',
          perspective: '2000px' // ADDED PERSPECTIVE FOR 3D EFFECT
        }}>
          {projects.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ 
                scale: 0.94, 
                rotateY: -8, 
                rotateX: 4, 
                z: -50,
                backgroundColor: 'rgba(25, 5, 5, 0.9)',
                borderColor: 'rgba(255, 215, 0, 0.8)',
                boxShadow: '-40px 40px 80px rgba(0, 0, 0, 0.9), 0 0 60px rgba(255, 0, 0, 0.3)'
              }}
              onClick={() => handleOpenModal(project)}
              style={{
                flex: '0 0 calc(100vw - 40px)', // Exactly viewport width minus padding
                minHeight: '65vh', // Takes up most of the screen height
                scrollSnapAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                background: 'linear-gradient(135deg, #0a0a0a 60%, rgba(255, 0, 0, 0.15) 100%)',
                border: '1px solid rgba(255, 215, 0, 0.2)',
                borderRadius: '32px',
                padding: 'clamp(40px, 6vw, 80px)', // Massive padding
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                gap: '32px',
                boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                transition: 'background-color 0.4s ease, border-color 0.4s ease',
                justifyContent: 'space-between',
                transformStyle: 'preserve-3d'
              }}
            >
              
              {/* Massive Background Typography Tech Stack */}
              {project.tech && (
                <motion.div 
                  initial={{ x: 0 }}
                  whileHover={{ x: -100, z: 100, opacity: 1, scale: 1.2, color: 'rgba(255, 215, 0, 0.1)' }}
                  style={{
                    position: 'absolute',
                    top: '5%',
                    right: '2%',
                    fontSize: 'clamp(100px, 15vw, 250px)',
                    fontWeight: '900',
                    lineHeight: '0.8',
                    color: 'transparent',
                    WebkitTextStroke: '2px rgba(255, 0, 0, 0.2)',
                    pointerEvents: 'none',
                    userSelect: 'none',
                    opacity: 0.5,
                    zIndex: 0,
                    textTransform: 'uppercase',
                    textAlign: 'right',
                    transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}>
                  {project.tech[0]}<br/>{project.tech[1]}
                </motion.div>
              )}

              {/* Project Image Preview */}
              {project.image && (
                <div style={{
                  position: 'absolute',
                  right: '-5%',
                  bottom: '-10%',
                  width: '55%',
                  height: '80%',
                  zIndex: 0,
                  transform: 'rotate(-4deg) translateY(20px)',
                  borderRadius: '16px',
                  boxShadow: '-20px 20px 60px rgba(0,0,0,0.8)',
                  overflow: 'hidden',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  pointerEvents: 'none',
                  transition: 'transform 0.4s ease'
                }}>
                  {/* Fake Mac Window Header */}
                  <div style={{ height: '30px', background: 'rgba(30, 30, 30, 0.9)', display: 'flex', alignItems: 'center', padding: '0 12px', gap: '6px' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FF5F56' }}></div>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FFBD2E' }}></div>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27C93F' }}></div>
                  </div>
                  {/* The actual image */}
                  <div style={{ position: 'relative', width: '100%', height: 'calc(100% - 30px)' }}>
                    <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                </div>
              )}



              <div style={{ position: 'relative', zIndex: 1, flex: 1, display: 'flex', flexDirection: 'column' }}>
                
                <span style={{ 
                  alignSelf: 'flex-start',
                  padding: '8px 24px', 
                  background: 'rgba(255, 0, 0, 0.1)',
                  border: '1px solid rgba(255, 0, 0, 0.4)',
                  color: '#FFD700',
                  borderRadius: '12px',
                  fontSize: '14px',
                  fontWeight: '800',
                  textTransform: 'uppercase',
                  letterSpacing: '3px',
                  marginBottom: '32px'
                }}>
                  {project.category}
                </span>

                <h3 style={{ fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: '900', color: '#fff', margin: 0, letterSpacing: '-0.02em', marginBottom: '24px' }}>
                  {project.title}
                </h3>
                
                <p style={{ fontSize: 'clamp(20px, 2.5vw, 28px)', color: 'rgba(255,255,255,0.8)', lineHeight: '1.6', marginBottom: '40px', fontWeight: '400', maxWidth: '1200px' }}>
                  {project.description}
                </p>
                
                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginTop: 'auto' }} onClick={(e) => e.stopPropagation()}>
                  <motion.a href={project.github} target="_blank" rel="noopener noreferrer" 
                    whileHover={{ scale: 1.05, backgroundColor: '#FFD700', color: '#000' }}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '12px',
                      padding: '16px 32px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 215, 0, 0.3)',
                      borderRadius: '12px',
                      color: '#fff',
                      fontSize: '18px',
                      fontWeight: '700',
                      textDecoration: 'none',
                    }}
                  >
                    <i className="ph-fill ph-github-logo" style={{ fontSize: '26px' }}></i> Source Code
                  </motion.a>
                  
                  {project.demo && (
                    <motion.a href={project.demo} target="_blank" rel="noopener noreferrer" 
                      whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(255, 0, 0, 0.5)' }}
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: '12px',
                        padding: '16px 32px',
                        background: 'linear-gradient(90deg, #FFD700, #FF0000)',
                        border: 'none',
                        borderRadius: '12px',
                        color: '#fff',
                        fontSize: '18px',
                        fontWeight: '700',
                        textDecoration: 'none',
                      }}
                    >
                      <i className="ph-fill ph-arrow-up-right" style={{ fontSize: '26px' }}></i> Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <ProjectModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};
