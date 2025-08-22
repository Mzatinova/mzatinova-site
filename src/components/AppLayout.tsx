import React from 'react';
import Header from './Header';
import Hero from './Hero';
import BranchesShowcase from './BranchesShowcase';
import AboutSection from './AboutSection';
import SolutionsSection from './SolutionsSection';
import NewsSection from './NewsSection';
import CTASection from './CTASection';
import Footer from './Footer';

const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <BranchesShowcase />
      <AboutSection />
      <SolutionsSection />
      <NewsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default AppLayout;
