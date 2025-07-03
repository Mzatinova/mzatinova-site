import React from 'react';
import { useAppContext } from '@/contexts/AppContext';
import { useIsMobile } from '@/hooks/use-mobile';
import Navigation from './Navigation';
import Hero from './Hero';
import Features from './Features';
import Services from './Services';
import Store from './Projects';
import About from './About';
import Contact from './Contact';
import InteractiveDemo from './InteractiveDemo';
import Footer from './Footer';

const AppLayout: React.FC = () => {
  const { sidebarOpen, toggleSidebar } = useAppContext();
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />

      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="store">
          <Store />
        </section>
        <section id="features">
          <Features />
        </section>


        <section id="demo">
          <InteractiveDemo />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AppLayout;