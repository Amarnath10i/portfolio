'use client';
import { useState } from 'react';
import { projects, type Project } from '@/data/projects';
import { ProjectDialog } from '@/components/ui/ProjectDialog';

export const Projects = () => {
  const [open, setOpen] = useState<Project | null>(null);
  const ml = projects.filter((p) => p.group === 'ml');
  const software = projects.filter((p) => p.group === 'software');

  return (
    <section className="section" id="projects">
      <div className="wrap">
        <div className="section-head"><span className="section-num">01</span><h2>Projects</h2></div>
        <p className="section-intro">
          Machine learning systems built end to end, each with its evaluation protocol, baselines and limitations in the
          repository. Select a project for details and figures.
        </p>

        <div className="cards">
          {ml.map((p) => (
            <button key={p.id} className="card" onClick={() => setOpen(p)} aria-haspopup="dialog">
              <div className="card-top">
                <span className="card-cat">{p.category}</span>
                <span className="status" data-s={p.status}>{p.status}</span>
              </div>
              <h3>{p.title}</h3>
              <p>{p.summary}</p>
              {p.metrics.length > 0 && (
                <div className="metrics">
                  {p.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="metric-value">{m.value}</div>
                      <div className="metric-label">{m.label}</div>
                    </div>
                  ))}
                </div>
              )}
              <div className="card-foot">
                <span className="tech">{p.tech.join(' · ')}</span>
                <span className="card-more">Details →</span>
              </div>
            </button>
          ))}
        </div>

        <p className="sub-head">Software</p>
        <div className="rows">
          {software.map((p) => (
            <div className="row" key={p.id}>
              <div className="row-title">{p.title}<small>{p.category}</small></div>
              <div className="row-desc">{p.summary}</div>
              <div className="row-links">
                <button className="link" onClick={() => setOpen(p)}>Details</button>
                <a className="link" href={p.github} target="_blank" rel="noopener noreferrer">Code</a>
                {p.demo && <a className="link" href={p.demo} target="_blank" rel="noopener noreferrer">Demo</a>}
              </div>
            </div>
          ))}
        </div>
      </div>
      {open && <ProjectDialog project={open} onClose={() => setOpen(null)} />}
    </section>
  );
};
