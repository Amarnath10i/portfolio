'use client';
import { useEffect, useState } from 'react';
import { profile } from '@/data/profile';
import { GitHubIcon, MoonIcon, SunIcon } from '@/components/ui/Icons';

const links = [
  { href: '#projects', label: 'Projects' },
  { href: '#research', label: 'Research' },
  { href: '#background', label: 'Background' },
  { href: '#toolkit', label: 'Toolkit' },
  { href: '#contact', label: 'Contact' },
];

export const Navbar = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const explicit = document.documentElement.getAttribute('data-theme');
    setDark(explicit ? explicit === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches);
  }, []);

  const toggle = () => {
    const next = dark ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch {}
    setDark(!dark);
  };

  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a href="#top" className="nav-brand">madaka<span>.</span>amarnath</a>
        <nav className="nav-links" aria-label="Sections">
          {links.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
        </nav>
        <div className="nav-actions">
          <a className="icon-btn" href={profile.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GitHubIcon /></a>
          <button className="icon-btn" onClick={toggle} aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}>
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </div>
    </header>
  );
};
