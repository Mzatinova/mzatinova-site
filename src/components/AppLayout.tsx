import React from 'react';
import Header from './Header';
// import HeroSection from './HeroSection';
import EnginesSection from './EnginesSection';
import SolutionsSection from './SolutionsSection';
// import LabsSection from './LabsSection';
import CTASection from './CTASection';
import Footer from './Footer';
import Hero from './Hero';
import LabsSection from './LabsSection';

const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30">
      <Header />
      <main>
        <Hero />
        <EnginesSection />
        <SolutionsSection />
        <LabsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;

// import React from 'react';
// import Header from './Header';
// import Hero from './Hero';
// import BranchesShowcase from './FeaturedProducts';
// import AboutSection from './AboutSection';

// import NewsSection from './NewsSection';
// import CTASection from './CTASection';
// import Footer from './Footer';
// import FeaturedProducts from './FeaturedProducts';
// import IndustriesWeServe from './IndustriesWeServe';
// import OurServices from './OurServices';
// import RecentUpdates from './RecentUpdates';

// const AppLayout: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-black">
//       <Header />
//       <Hero />
//       <FeaturedProducts />
//       <IndustriesWeServe />
//       <OurServices />
//       <RecentUpdates />
//       <CTASection />
//       <Footer />
//     </div>
//   );
// };

// export default AppLayout;
