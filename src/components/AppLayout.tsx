import React, { useState } from 'react';
import { ThemeProvider } from '@/lib/theme';
import Navbar from './Navbar';
import Hero from './Hero';
import EduSpace from './EduSpace';
import Roadmap from './Roadmap';
import Services from './Services';
import AILab from './AILab';
import Portfolio from './Portfolio';
import About from './About';
import Blog from './Blog';
import Careers from './Careers';
import FinalCTA from './FinalCTA';
import Footer from './Footer';
import DemoModal from './DemoModal';
// import { useAuth } from '@/contexts/AuthContext';
import AuthModal from './AuthModal';
import Portal from './Portal';
import Contact from './Contact';

const AppLayout: React.FC = () => {
    // const { user } = useAuth();
  const [demo, setDemo] = useState(false);
  const [demoTitle, setDemoTitle] = useState('Request a Demo');
    const [auth, setAuth] = useState(false);
      const [showPortal, setShowPortal] = useState(false);
  const openDemo = (title = 'Request a Demo') => { setDemoTitle(title); setDemo(true); };
  const openTalk = () => { setDemoTitle('Talk to Us'); setDemo(true); };

  //   if (user && showPortal) {
  //   return <Portal onExit={() => setShowPortal(false)} />;
  // }
  
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-[#05070f] text-slate-900 dark:text-white selection:bg-cyan-500/30 antialiased">
        <Navbar
        onDemo={() => openDemo()}
        onLogin={() => setAuth(true)}
        onPortal={() => setShowPortal(true)}
      />
        <main>
          <Hero onDemo={() => openDemo()} onTalk={() => openTalk()} />
          <EduSpace />
          <Roadmap />
          <Services />
          <AILab />
          <Portfolio />
          <About />
          {/* <Blog /> */}
          {/* <Careers /> */}
          <Contact />
          <FinalCTA />
        </main>
        <Footer />
         <DemoModal open={demo} onClose={() => setDemo(false)} title={demoTitle} />
          <AuthModal open={auth} onClose={() => setAuth(false)} onSuccess={() => { setAuth(false); setShowPortal(true); }} />
      </div>
    </ThemeProvider>
  );
};

export default AppLayout;
