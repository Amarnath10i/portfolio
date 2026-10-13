import { profile } from '@/data/profile';

export const Footer = () => (
  <footer className="footer">
    <div className="wrap">
      <span>© {new Date().getFullYear()} {profile.name}</span>
      <a className="link" href="https://github.com/Amarnath10i/portfolio" target="_blank" rel="noopener noreferrer">Source on GitHub</a>
    </div>
  </footer>
);
