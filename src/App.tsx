import { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import DataIntelligence from './components/DataIntelligence';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';
import FullStack from './components/FullStack';
import GitHubSection from './components/GitHubSection';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';
import ProjectCaseStudy from './components/ProjectCaseStudy';
import ProjectsLab from './components/ProjectsLab';

function HomePage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.replace('#', ''));
      if (target) {
        setTimeout(() => target.scrollIntoView({ behavior: 'smooth' }), 80);
      }
    }
  }, [hash]);

  return (
    <main>
      <Hero />
      <About />
      <DataIntelligence />
      <FullStack />
      <ProjectsLab />
      <Experience />
      <Education />
      <GitHubSection />
      <Contact />
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0a0e1a] text-zinc-200 relative selection:bg-violet-500/30 selection:text-white">
        <ParticleBackground />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<ProjectCaseStudy />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
