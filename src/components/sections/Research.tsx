import { research } from '@/data/research';

export const Research = () => (
  <section className="section" id="research">
    <div className="wrap">
      <div className="section-head"><span className="section-num">02</span><h2>Research</h2></div>
      <p className="section-intro">Research studies, separate from the projects above.</p>
      <div className="papers">
        {research.map((r) => (
          <article className="paper" key={r.id}>
            <div>
              <div className="paper-meta"><span>{r.category}</span><span>·</span><span>{r.status}</span></div>
              <h3>{r.title}</h3>
              <p>{r.description}</p>
              <ul>{r.details.map((d) => <li key={d}>{d}</li>)}</ul>
              <p style={{ marginTop: 12 }}>
                {r.github
                  ? <a className="link" href={r.github} target="_blank" rel="noopener noreferrer">Repository →</a>
                  : <span className="mono" style={{ fontSize: 13, color: 'var(--ink-3)' }}>Code released on publication</span>}
              </p>
            </div>
            <div className="paper-side">
              {r.metrics.map((m) => (
                <div key={m.label}>
                  <div className="metric-value">{m.value}</div>
                  <div className="metric-label">{m.label}</div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
