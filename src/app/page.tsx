import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Research } from '@/components/sections/Research';
import { Projects } from '@/components/sections/Projects';
import { Experience } from '@/components/sections/Experience';
import { Skills } from '@/components/sections/Skills';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Research />
      <Projects />
      
      {/* About Section */}
      <section id="about">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2><span className="grad">About Me</span></h2>
          </div>
          <div className="focus-grid" style={{ gridTemplateColumns: '1fr', maxWidth: '800px' }}>
            <div className="focus-card reveal" style={{ padding: '40px' }}>
              <p style={{ fontSize: '17px', lineHeight: '1.8', color: 'var(--text-primary)', marginBottom: '20px' }}>
                I am a B.Tech Computer Science student at NIT Andhra Pradesh with a strong foundation in building intelligent systems and scalable web platforms. I enjoy bridging the gap between cutting-edge AI research and practical, user-facing applications.
              </p>
              <p style={{ fontSize: '17px', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                My work spans analyzing deep neural networks to understand their confidence levels (calibration), designing multi-agent memory structures, and crafting modern web experiences using frameworks like Next.js and React. Whether it's training a model on a large dataset or architecting a real-time IoT dashboard, I love diving deep into complex technical challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Experience />
      <Skills />
      
      <section className="bordered" id="blog" style={{ padding: '120px 0' }}>
        <div className="wrap">
          <div className="ach reveal" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto', borderColor: 'var(--apple-blue)' }}>
            <i className="ph ph-notebook" style={{ fontSize: '48px', color: 'var(--apple-blue)', marginBottom: '20px' }}></i>
            <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '12px' }}>Blog <span className="grad">Coming Soon</span></h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '16px' }}>
              I'm currently writing articles on machine learning, web development, and my experiences building AI projects. Check back soon for deep dives and technical tutorials!
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
