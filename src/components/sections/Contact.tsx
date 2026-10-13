import { profile } from '@/data/profile';

const rows = [
  { key: 'Email', value: profile.socials.email, href: `mailto:${profile.socials.email}` },
  { key: 'LinkedIn', value: 'linkedin.com/in/amar-nath-896232363', href: profile.socials.linkedin },
  { key: 'GitHub', value: 'github.com/Amarnath10i', href: profile.socials.github },
  { key: 'Kaggle', value: 'kaggle.com/amarnath10', href: profile.socials.kaggle },
];

export const Contact = () => (
  <section className="section" id="contact">
    <div className="wrap">
      <div className="section-head"><span className="section-num">05</span><h2>Contact</h2></div>
      <p className="section-intro">Open to machine learning, data science and applied research roles. Email is the fastest way to reach me.</p>
      <div className="contact">
        {rows.map((r) => (
          <a key={r.key} href={r.href} target={r.href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer">
            <span className="contact-key">{r.key}</span>
            <span className="contact-val">{r.value}</span>
          </a>
        ))}
      </div>
    </div>
  </section>
);
