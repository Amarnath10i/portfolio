'use client';
import { experience } from '@/data/experience';

export const Experience = () => {
  return (
    <section className="bordered" id="experience">
      <div className="wrap">
        <div className="sec-head reveal">
          <h2>Experience & <span className="grad">Education</span></h2>
        </div>

        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          {experience.map((item) => (
            <div className="tl-item reveal" key={item.id}>
              <div className="tl-date">{item.period}</div>
              <div className="tl-body">
                <h3>{item.title}</h3>
                <div className="org">{item.organization}</div>
                {item.description && <p>{item.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
