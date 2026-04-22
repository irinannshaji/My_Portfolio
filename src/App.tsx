import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import PersonalDevelopment from './components/PersonalDevelopment';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import ScrollProgress from './components/ScrollProgress';
import { updateMetaTags, defaultSEO } from './utils/seo';

function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    updateMetaTags(defaultSEO);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-hidden">
      <AnimatedBackground />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <PersonalDevelopment />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
