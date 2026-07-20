'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Word = ({ children, progress, range }: { children: React.ReactNode, progress: any, range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span style={{ opacity, display: 'inline-block', marginRight: '16px', marginTop: '16px' }}>
      {children}
    </motion.span>
  );
};

const TechPill = ({ icon, text }: { icon: string, text?: string }) => (
  <span style={{ 
    display: 'inline-flex', alignItems: 'center', gap: '8px',
    padding: '4px 16px', background: 'rgba(255,255,255,0.03)', 
    border: '1px solid rgba(255,255,255,0.1)', borderRadius: '100px',
    fontSize: '0.6em', verticalAlign: 'middle', margin: '0 8px',
    color: '#fff', transform: 'translateY(-4px)'
  }}>
    <i className={icon} style={{ color: 'var(--apple-green)' }}></i>
    {text && <span>{text}</span>}
  </span>
);

export const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const textArray = [
    "An", "AI", "researcher", <TechPill key="ai" icon="ph ph-brain" text="AI" />, 
    "and", "software", "engineer", <TechPill key="se" icon="ph ph-code" text="Dev" />, 
    "who", "builds", "intelligent", "systems", "and", "scalable", "platforms.", 
    "I", "bridge", "the", "gap", "between", "cutting-edge", "research", 
    "and", "real-world", "applications.", "I", "create", "modern", "web", "experiences", 
    "with", "Next.js", <TechPill key="next" icon="ph ph-triangle" text="Next.js" />, 
    "and", "React", <TechPill key="react" icon="ph ph-atom" text="React" />, 
    "and", "architect", "complex", "backend", "systems", "using", "Python", 
    <TechPill key="py" icon="ph ph-file-py" text="Python" />, "and", "Node.js", 
    <TechPill key="node" icon="ph ph-hexagon" text="Node.js" />, ".", 
    "Whether", "training", "deep", "neural", "networks", "or", "building", "real-time", 
    "IoT", "dashboards,", "I'm", "always", "solving", "complex", "technical", "challenges."
  ];

  return (
    <section id="about" ref={containerRef} style={{ minHeight: '200vh', position: 'relative', paddingTop: '100px', paddingBottom: '100px' }}>
      <div className="wrap" style={{ position: 'sticky', top: '150px' }}>
        
        {/* The Card Container mimicking SHADES */}
        <div style={{
          background: 'rgba(10, 10, 10, 0.4)',
          border: '1px solid rgba(48, 209, 88, 0.2)',
          borderRadius: '32px',
          padding: '80px 60px',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
        }}>
            <p style={{ fontSize: '14px', letterSpacing: '6px', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '16px', fontWeight: '600' }}>
              KNOW ABOUT ME
            </p>
            <h2 style={{ fontSize: 'clamp(40px, 6vw, 64px)', color: 'var(--apple-green)', lineHeight: '1', marginBottom: '60px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '-0.03em', textShadow: '0 0 40px rgba(48, 209, 88, 0.1)' }}>
              MADAKA AMARNATH
            </h2>
            
            <div style={{ fontSize: 'clamp(24px, 3.5vw, 48px)', lineHeight: '1.5', color: '#fff', fontWeight: '600', letterSpacing: '-0.02em', maxWidth: '1200px' }}>
                {textArray.map((item, i) => {
                    const start = i / textArray.length;
                    return (
                        <Word key={i} progress={scrollYProgress} range={[start * 0.9, start * 0.9 + 0.1]}>
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
