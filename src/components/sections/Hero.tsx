'use client';
import { profile } from '@/data/profile';

export const Hero = () => {
  return (
    <section className="hero wrap" id="home">
      <div className="hero-content reveal">
        <div className="eyebrow">
          <span>{profile.role}</span>
        </div>
        
        <p className="hero-greeting">{profile.greeting}</p>
        <h1>
          MADAKA <br />
          <em>AMARNATH</em>
        </h1>
        
        <p className="lede">
          {profile.bio}
        </p>
        
        <div className="hero-cta">
          <a className="btn solid" href="#projects">
            View My Work <i className="ph ph-arrow-right"></i>
          </a>
          <a className="btn ghost" href={profile.socials.github} target="_blank" rel="noopener noreferrer">
            <i className="ph ph-github-logo"></i> GitHub
          </a>
          <a className="btn ghost" href={profile.socials.kaggle} target="_blank" rel="noopener noreferrer">
            <i className="ph ph-kaggle-logo"></i> Kaggle
          </a>
        </div>
      </div>

      <div className="orbit-wrap reveal reveal-delay-2">
        <svg viewBox="0 0 600 600" width="360" height="360" role="img" aria-label="Diagram representing AI and interconnected systems">
          {/* Nucleus */}
          <circle className="nucleus-bg" cx="300" cy="300" r="32"/>
          <text className="nucleus-text" x="300" y="306" textAnchor="middle" fontSize="16">AI</text>

          {/* Orbital Rings */}
          <g className="ring r1">
            <ellipse cx="300" cy="300" rx="120" ry="60" fill="none" strokeWidth="1.5" transform="rotate(18 300 300)"/>
            <circle cx="420" cy="273" r="6" transform="rotate(18 300 300)"/>
            <text className="orbit-label" x="440" y="278" transform="rotate(18 300 300)">DATA</text>
          </g>

          <g className="ring r2">
            <ellipse cx="300" cy="300" rx="190" ry="95" fill="none" strokeWidth="1.5" transform="rotate(-24 300 300)"/>
            <circle cx="490" cy="300" r="6" transform="rotate(-24 300 300)"/>
            <text className="orbit-label" x="502" y="305" transform="rotate(-24 300 300)">LOGIC</text>
          </g>

          <g className="ring r3">
            <ellipse cx="300" cy="300" rx="255" ry="128" fill="none" strokeWidth="1.5" transform="rotate(8 300 300)"/>
            <circle cx="555" cy="317" r="6" transform="rotate(8 300 300)"/>
            <text className="orbit-label" x="500" y="345" transform="rotate(8 300 300)">SYSTEMS</text>
          </g>
        </svg>
      </div>
    </section>
  );
};
