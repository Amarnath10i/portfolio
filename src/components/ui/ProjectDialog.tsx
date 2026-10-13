'use client';
import { useEffect, useRef, useState } from 'react';
import type { Project } from '@/data/projects';
import { ArrowIcon, CloseIcon, GitHubIcon } from '@/components/ui/Icons';

export const ProjectDialog = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  const [shot, setShot] = useState(0);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = overflow; };
  }, [onClose]);

  return (
    <div className="dialog-backdrop" onClick={onClose}>
      <div className="dialog" role="dialog" aria-modal="true" aria-labelledby="dialog-title" onClick={(e) => e.stopPropagation()}>
        <button ref={closeRef} className="icon-btn dialog-close" onClick={onClose} aria-label="Close"><CloseIcon /></button>
        <div className="card-top" style={{ justifyContent: 'flex-start' }}>
          <span className="card-cat">{project.category}</span>
          <span className="status" data-s={project.status}>{project.status}</span>
        </div>
        <h3 id="dialog-title">{project.title}</h3>
        <p className="lead">{project.summary}</p>

        {project.metrics.length > 0 && (
          <div className="metrics">
            {project.metrics.map((m) => (
              <div key={m.label}>
                <div className="metric-value">{m.value}</div>
                <div className="metric-label">{m.label}</div>
              </div>
            ))}
          </div>
        )}

        <ul>{project.details.map((d) => <li key={d}>{d}</li>)}</ul>

        {project.screenshots.length > 0 && (
          <>
            <div className="figure">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={project.screenshots[shot]} alt={`${project.title}, figure ${shot + 1}`} />
            </div>
            {project.screenshots.length > 1 && (
              <div className="figure-strip">
                {project.screenshots.map((s, i) => (
                  <button key={s} onClick={() => setShot(i)} aria-current={i === shot} aria-label={`Show figure ${i + 1}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={s} alt="" />
                  </button>
                ))}
              </div>
            )}
          </>
        )}

        <p className="tech" style={{ marginTop: 18 }}>{project.tech.join(' · ')}</p>
        <div className="dialog-links">
          <a className="btn btn-primary" href={project.github} target="_blank" rel="noopener noreferrer"><GitHubIcon /> Code</a>
          {project.demo && <a className="btn" href={project.demo} target="_blank" rel="noopener noreferrer"><ArrowIcon /> Live demo</a>}
        </div>
      </div>
    </div>
  );
};
