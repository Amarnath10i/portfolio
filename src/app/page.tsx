import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
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
      
      <About />

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
