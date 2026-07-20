'use client';
import { skills } from '@/data/skills';

export const Skills = () => {
  return (
    <section className="bordered" id="skills">
      <div className="wrap">
        <div className="sec-head reveal">
          <h2>Core <span className="grad">Skills</span></h2>
        </div>
        
        <div className="skills-container">
          {/* Split skills array into two columns for layout */}
          <div className="skills-col reveal">
            {skills.slice(0, 2).map((group, idx) => (
              <div className="skill-group" key={idx} style={{ marginTop: idx > 0 ? '32px' : '0' }}>
                <h4>{group.category}</h4>
                <div className="chips">
                  {group.items.map((item, i) => (
                    <span className="chip" key={i}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="skills-col reveal reveal-delay-1">
            {skills.slice(2, 4).map((group, idx) => (
              <div className="skill-group" key={idx} style={{ marginTop: idx > 0 ? '32px' : '0' }}>
                <h4>{group.category}</h4>
                <div className="chips">
                  {group.items.map((item, i) => (
                    <span className="chip" key={i}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
