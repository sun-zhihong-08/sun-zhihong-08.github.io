import { loadJson, loadMarkdown } from '@/lib/data';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Timeline from '@/components/Timeline';
import Projects from '@/components/Projects';
import AIInsights from '@/components/AIInsights';
import Media from '@/components/Media';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const hero = loadJson('hero.json');
  const stats = hero.stats;
  const aboutText = loadMarkdown('about.md');
  const values = loadJson('values.json');
  const skills = loadJson('skills.json');
  const timeline = loadJson('timeline.json');
  const projects = loadJson('projects.json');
  const insights = loadJson('insights.json');
  const media = loadJson('media.json');
  const gallery = loadJson('gallery.json');
  const contact = loadJson('contact.json');

  return (
    <>
      <Navbar />
      <div className="grid-bg" />
      <div className="noise-overlay" />
      <main>
        <Hero data={hero.hero} />
        <Stats data={stats} />
        <div className="h-[1px] bg-gradient-to-r from-transparent via-border-default to-transparent max-w-4xl mx-auto" />
        <About aboutText={aboutText} values={values} />
        <div className="h-[1px] bg-gradient-to-r from-transparent via-border-default to-transparent max-w-4xl mx-auto" />
        <Skills data={skills} />
        <div className="h-[1px] bg-gradient-to-r from-transparent via-border-default to-transparent max-w-4xl mx-auto" />
        <Timeline data={timeline} />
        <div className="h-[1px] bg-gradient-to-r from-transparent via-border-default to-transparent max-w-4xl mx-auto" />
        <Projects data={projects} />
        <div className="h-[1px] bg-gradient-to-r from-transparent via-border-default to-transparent max-w-4xl mx-auto" />
        <AIInsights data={insights} />
        <div className="h-[1px] bg-gradient-to-r from-transparent via-border-default to-transparent max-w-4xl mx-auto" />
        <Media data={media} gallery={gallery} />
        <div className="h-[1px] bg-gradient-to-r from-transparent via-border-default to-transparent max-w-4xl mx-auto" />
        <Contact data={contact} />
      </main>
      <Footer />
    </>
  );
}
