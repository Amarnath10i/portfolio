import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Projects } from '@/components/sections/Projects';
import { Research } from '@/components/sections/Research';
import { Background } from '@/components/sections/Background';
import { Skills } from '@/components/sections/Skills';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Research />
        <Background />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
