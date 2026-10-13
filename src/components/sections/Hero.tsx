import { profile } from '@/data/profile';
import { GitHubIcon, LinkedInIcon, MailIcon } from '@/components/ui/Icons';

// Headline results, each measured on held-out data in its project's repository.
const results = [
  { value: '0.992', label: 'PR-AUC on six later months of card transactions', source: 'fraud-sentinel' },
  { value: '0.141', label: 'NDCG@20 on a year the recommender never saw', source: 'CinemaTime' },
  { value: '0.742', label: 'AUC predicting 14,453 unseen students', source: 'Atom' },
  { value: '0.84 / 0.80', label: 'Hindi / Telugu retrieval Hit@5 over a 416-page manual', source: 'car_manual_assistant' },
];

export const Hero = () => (
  <section className="hero" id="top">
    <div className="wrap">
      <p className="eyebrow">{profile.role} · {profile.affiliation}</p>
      <h1>{profile.name}</h1>
      <p className="hero-role">{profile.bio}</p>
      <div className="hero-links">
        <a href={profile.socials.github} target="_blank" rel="noopener noreferrer"><GitHubIcon /> GitHub</a>
        <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer"><LinkedInIcon /> LinkedIn</a>
        <a href={`mailto:${profile.socials.email}`}><MailIcon /> {profile.socials.email}</a>
      </div>
      <div className="results" role="list" aria-label="Selected results">
        {results.map((r) => (
          <div className="result" role="listitem" key={r.source}>
            <div className="result-value">{r.value}</div>
            <div className="result-label">{r.label}</div>
            <div className="result-source">{r.source}</div>
          </div>
        ))}
      </div>
      <p className="results-note">Every number is on held-out data, with the protocol and intervals in the project&apos;s README.</p>
    </div>
  </section>
);
