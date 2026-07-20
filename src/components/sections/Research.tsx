'use client';
import { research } from '@/data/research';

export const Research = () => {
  return (
    <section className="bordered" id="research">
      <div className="wrap">
        <div className="sec-head reveal">
          <h2>Selected <span className="grad">Research</span></h2>
          <div className="note">Academic studies and deep learning explorations.</div>
        </div>

        {research.map((item) => (
          <div className="project reveal" key={item.id}>
            <div>
              <div className="project-head">
                <h3>{item.title}</h3>
                <span className="tag research">{item.category}</span>
              </div>
              <p>{item.description}</p>
              {item.details && (
                <ul>
                  {item.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              )}
              <div className="project-links">
                <a href={item.github} target="_blank" rel="noopener noreferrer">
                  <i className="ph ph-github-logo"></i> GitHub
                </a>
              </div>
            </div>
            {item.metrics && (
              <div className="metrics">
                {item.metrics.map((metric, idx) => (
                  <div className="metric" key={idx}>
                    <div className="val">{metric.value}</div>
                    <div className="lbl">{metric.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
