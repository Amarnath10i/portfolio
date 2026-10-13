import { experience } from '@/data/experience';
import { profile } from '@/data/profile';

export const Background = () => (
  <section className="section" id="background">
    <div className="wrap">
      <div className="section-head"><span className="section-num">03</span><h2>Background</h2></div>
      <div className="two-col" style={{ marginTop: 28 }}>
        <div className="prose">{profile.about.map((p) => <p key={p}>{p}</p>)}</div>
        <div>
          <p className="sub-head" style={{ marginTop: 0 }}>Education</p>
          <div className="timeline">
            {experience.map((e) => (
              <div className="tl-item" key={e.id}>
                <div className="tl-period">{e.period}</div>
                <div className="tl-title">{e.title}</div>
                <div className="tl-org">{e.organization}</div>
                {e.description && <div className="tl-desc">{e.description}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
