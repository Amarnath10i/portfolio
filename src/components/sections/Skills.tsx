import { skills } from '@/data/skills';

export const Skills = () => (
  <section className="section" id="toolkit">
    <div className="wrap">
      <div className="section-head"><span className="section-num">04</span><h2>Toolkit</h2></div>
      <div className="skills" style={{ marginTop: 28 }}>
        {skills.map((g) => (
          <div className="skill-row" key={g.category}>
            <div className="skill-cat">{g.category}</div>
            <div className="skill-items">{g.items.map((i) => <span key={i}>{i}</span>)}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
