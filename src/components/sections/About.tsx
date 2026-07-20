'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Word = ({ children, progress, range }: { children: React.ReactNode, progress: any, range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span>
      <motion.span style={{ opacity, display: 'inline-block' }}>
        {children}
      </motion.span>
      {' '}
    </span>
  );
};

const TechPill = ({ icon, text }: { icon: string, text?: string }) => (
  <span style={{ 
    display: 'inline-flex', alignItems: 'center', gap: '8px',
    padding: '4px 16px', background: 'rgba(255,255,255,0.03)', 
    border: '1px solid rgba(255,255,255,0.1)', borderRadius: '100px',
    fontSize: '0.6em', verticalAlign: 'middle', margin: '0 2px',
    color: '#fff', transform: 'translateY(-2px)'
  }}>
    <i className={icon} style={{ color: 'var(--apple-green)' }}></i>
    {text && <span>{text}</span>}
  </span>
);

export const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const textArray = [
    "An", "AI", "researcher", <TechPill key="ai" icon="ph ph-brain" text="AI" />, 
    "and", "software", "engineer", <TechPill key="se" icon="ph ph-code" text="Dev" />, 
    "who", "builds", "intelligent", "systems", "and", "scalable", "platforms.", 
    "I", "bridge", "the", "gap", "between", "AI", "research", 
    "and", "real-world", "applications.", "I", "create", "modern", "web", "experiences", 
    "with", "Next.js", <TechPill key="next" icon="ph ph-triangle" text="Next.js" />, 
    "and", "React", <TechPill key="react" icon="ph ph-atom" text="React" />, 
    "and", "architect", "complex", "backend", "systems", "using", "Python", 
    <TechPill key="py" icon="ph ph-file-py" text="Python" />, "and", "Node.js", 
    <TechPill key="node" icon="ph ph-hexagon" text="Node.js" />, ".", 
    "I'm", "always", "solving", "complex", "technical", "challenges."
  ];

  return (
    <section id="about" ref={containerRef} style={{ minHeight: '180vh', position: 'relative', paddingTop: '20px', paddingBottom: '20px' }}>
      <div style={{ position: 'sticky', top: '10vh', width: '95vw', maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* The Card Container mimicking SHADES */}
        <div style={{
          background: 'rgba(10, 10, 10, 0.4)',
          border: '1px solid rgba(48, 209, 88, 0.2)',
          borderRadius: '32px',
          padding: '40px 60px',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
        }}>
            <p style={{ fontSize: '12px', letterSpacing: '6px', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '12px', fontWeight: '600' }}>
              KNOW ABOUT ME
            </p>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', color: 'var(--apple-green)', lineHeight: '1', marginBottom: '40px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '-0.03em', textShadow: '0 0 40px rgba(48, 209, 88, 0.1)' }}>
              MADAKA AMARNATH
            </h2>
            
            <div style={{ fontSize: 'clamp(20px, 2.5vw, 40px)', lineHeight: '1.6', color: '#fff', fontWeight: '600', letterSpacing: '-0.02em' }}>
                {textArray.map((item, i) => {
                    // Spread the animation precisely from 0% to 100% of the scroll window
                    const start = (i / textArray.length) * 0.85;
                    return (
                        <Word key={i} progress={scrollYProgress} range={[start, start + 0.15]}>
                            {item}
                        </Word>
                    )
                })}
            </div>
        </div>

      </div>
    </section>
  );
};
