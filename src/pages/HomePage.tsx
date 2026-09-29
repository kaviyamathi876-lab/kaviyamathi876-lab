import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Skills } from '../components/Skills';
import { Experiences } from '../components/Experiences';
import { ProtoSemSection } from '../components/ProtoSemSection';
import { Projects } from '../components/Projects';
import { Certifications } from '../components/Certifications';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export const HomePage: React.FC = () => {
  const location = useLocation();

  // Handle hash scrolling on initial load or navigation
  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.replace('#', '');
      const element = document.getElementById(elementId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    }
  }, [location.hash]);

  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Experiences />
      <ProtoSemSection />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
};
