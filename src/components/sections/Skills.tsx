'use client';
import { skills } from '@/data/skills';
import { motion } from 'framer-motion';

const getSkillStyling = (skillName: string) => {
  const map: Record<string, { icon: string, color: string }> = {
    'Python': { icon: 'ph-fill ph-file-py', color: '#FFD43B' },
    'TypeScript': { icon: 'ph-fill ph-file-ts', color: '#3178C6' },
    'JavaScript': { icon: 'ph-fill ph-file-js', color: '#F7DF1E' },
    'C++': { icon: 'ph-fill ph-file-c', color: '#00599C' },
    'C': { icon: 'ph-fill ph-file-c', color: '#A8B9CC' },
    'Java': { icon: 'ph-fill ph-coffee', color: '#ED8B00' },
    
    'PyTorch': { icon: 'ph-fill ph-fire', color: '#EE4C2C' },
    'TensorFlow': { icon: 'ph-fill ph-polygon', color: '#FF6F00' },
    'Next.js': { icon: 'ph-fill ph-triangle', color: '#FFFFFF' },
    'React': { icon: 'ph-fill ph-atom', color: '#61DAFB' },
    'Flutter': { icon: 'ph-fill ph-butterfly', color: '#42A5F5' },
    'Flask': { icon: 'ph-fill ph-flask', color: '#FFFFFF' },
    'Streamlit': { icon: 'ph-fill ph-chart-line-up', color: '#FF4B4B' },
    'Docker': { icon: 'ph-fill ph-docker-logo', color: '#2496ED' },
    'Git': { icon: 'ph-fill ph-git-branch', color: '#F05032' },
    
    'NumPy': { icon: 'ph-fill ph-grid-four', color: '#4DABCF' },
    'Pandas': { icon: 'ph-fill ph-table', color: '#E6007A' },
    'Scikit-learn': { icon: 'ph-fill ph-brain', color: '#F7931E' },
    'Sentence-Transformers': { icon: 'ph-fill ph-text-aa', color: '#A855F7' },
    'FAISS': { icon: 'ph-fill ph-magnifying-glass', color: '#10B981' },
    'OpenCV': { icon: 'ph-fill ph-camera', color: '#5C3EE8' },
    
    'PostgreSQL': { icon: 'ph-fill ph-database', color: '#336791' },
    'SQLite': { icon: 'ph-fill ph-database', color: '#003B57' },
    'ChromaDB': { icon: 'ph-fill ph-database', color: '#EC4899' },
    'Firebase': { icon: 'ph-fill ph-flame', color: '#FFCA28' },
    'LLM APIs (Gemini)': { icon: 'ph-fill ph-sparkle', color: '#1A73E8' },
    'Hugging Face': { icon: 'ph-fill ph-smiley-wink', color: '#FFD21E' },
  };
  return map[skillName] || { icon: 'ph-fill ph-code', color: '#4ADE80' };
};

export const Skills = () => {
  return (
    <section id="skills" style={{ padding: '40px 20px 20px 20px', position: 'relative' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: '14px', letterSpacing: '4px', textTransform: 'uppercase', color: 'var(--apple-orange)', marginBottom: '16px', fontWeight: '600' }}
          >
            Capabilities
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', margin: 0 }}
          >
            Core <span style={{ background: 'linear-gradient(90deg, var(--apple-orange), var(--apple-pink))', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent', color: 'transparent', display: 'inline-block' }}>Skills</span>
          </motion.h2>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
          gap: '32px' 
        }}>
          {skills.map((group, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '24px',
                padding: '40px',
                transition: 'transform 0.3s ease, background 0.3s ease, border-color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.borderColor = 'rgba(255, 159, 10, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
              }}
            >
              <h4 style={{ color: '#fff', fontSize: '20px', fontWeight: '600', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--apple-orange)' }}></span>
                {group.category}
              </h4>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {group.items.map((item, i) => {
                  const style = getSkillStyling(item);
                  return (
                    <div 
                      key={i} 
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        background: 'rgba(0, 0, 0, 0.5)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        padding: '10px 16px',
                        borderRadius: '100px',
                        fontSize: '14px',
                        color: 'rgba(255, 255, 255, 0.9)',
                        transition: 'all 0.3s ease',
                        cursor: 'default'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = style.color;
                        e.currentTarget.style.boxShadow = `0 0 20px ${style.color}40`;
                        e.currentTarget.style.color = '#fff';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                        e.currentTarget.style.boxShadow = 'none';
                        e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)';
                      }}
                    >
                      <i className={style.icon} style={{ color: style.color, fontSize: '18px' }}></i>
                      {item}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};
