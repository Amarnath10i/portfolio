'use client';
import { useState } from 'react';
import { projects } from '@/data/projects';
import { ProjectModal } from '@/components/ui/ProjectModal';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const featured = projects.filter(p => p.featured);
  const small = projects.filter(p => !p.featured);

  return (
    <>
      <section className="bordered" id="projects">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2>Featured <span className="grad">Projects</span></h2>
            <div className="note">Software engineering, web platforms, and AI tools. Click to preview.</div>
          </div>

          {/* Featured Projects */}
          {featured.map((project) => (
            <div 
              className="project reveal interactive-card" 
              key={project.id}
              onClick={() => handleOpenModal(project)}
              style={{ cursor: 'pointer' }}
            >
              <div>
                <div className="project-head">
                  <h3>{project.title}</h3>
                  <span className="tag">{project.category}</span>
                </div>
                <p>{project.description}</p>
                <div className="project-links" onClick={(e) => e.stopPropagation()}>
                  <a href={project.github} target="_blank" rel="noopener noreferrer"><i className="ph ph-github-logo"></i> GitHub</a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer"><i className="ph ph-arrow-up-right"></i> Demo</a>
                  )}
                </div>
              </div>
              {project.tech && (
                <div className="metrics">
                  {project.tech.slice(0, 2).map((t, idx) => (
                    <div className="metric" key={idx}>
                      <div className="val">{t}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Small Grid Projects */}
          <div className="small-grid">
            {small.map((project, idx) => (
              <div 
                className={`project small reveal ${idx % 2 !== 0 ? 'reveal-delay-1' : ''} interactive-card`} 
                key={project.id}
                onClick={() => handleOpenModal(project)}
                style={{ cursor: 'pointer' }}
              >
                <div className="project-head">
                  <h3>{project.title}</h3>
                  <span className="tag">{project.category}</span>
                </div>
                <p>{project.description}</p>
                <div className="project-links" onClick={(e) => e.stopPropagation()}>
                  <a href={project.github} target="_blank" rel="noopener noreferrer"><i className="ph ph-github-logo"></i> GitHub</a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer"><i className="ph ph-arrow-up-right"></i> Demo</a>
                  )}
                </div>
              </div>
            ))}
          </div>
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
