import React, { useState, useEffect, useRef } from 'react';
import { ThemeProvider } from '@/lib/theme';
import Navbar from './Navbar';
import Hero from './Hero';
import Platforms from './Platforms';
import Services from './Services';
import AILab from './AILab';
import Portfolio from './Portfolio';
import About from './About';
import Blog from './Blog';
import Careers from './Careers';
import FinalCTA from './FinalCTA';
import Footer from './Footer';
import DemoModal from './DemoModal';
import AuthModal from './AuthModal';
import Portal from './Portal';
import Contact from './Contact';
import ResearchModal from './ResearchModal';
import BookingModal from './BookingModal';
import AIChatModal from './AIChatModal';

const AppLayout: React.FC = () => {
  const [demo, setDemo] = useState(false);
  const [demoTitle, setDemoTitle] = useState('Request a Demo');
  const [auth, setAuth] = useState(false);
  const [showPortal, setShowPortal] = useState(false);
  const [research, setResearch] = useState(false);
  const [booking, setBooking] = useState(false);
  const [showAIChat, setShowAIChat] = useState(false);
  const [buttonText, setButtonText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const fullText = "Chat with Mzati AI 💬";
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let index = 0;

    const startTyping = () => {
      if (isChatOpen) return;

      setButtonText('');
      setIsTypingComplete(false);
      index = 0;

      intervalRef.current = setInterval(() => {
        if (index < fullText.length) {
          setButtonText(fullText.slice(0, index + 1));
          index++;
        } else {
          setIsTypingComplete(true);
          if (intervalRef.current) clearInterval(intervalRef.current);
          
          timeoutRef.current = setTimeout(() => {
            startTyping();
          }, 20000);
        }
      }, 50);
    };

    startTyping();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isChatOpen]);

  const handleOpenChat = () => {
    setIsChatOpen(true);
    setShowAIChat(true);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setButtonText(fullText);
    setIsTypingComplete(true);
  };

  const handleCloseChat = () => {
    setShowAIChat(false);
    setIsChatOpen(false);
    setButtonText('');
    setIsTypingComplete(false);
  };

  const openDemo = (title = 'Request a Demo') => {
    setDemoTitle(title);
    setDemo(true);
  };

  const openTalk = () => {
    setDemoTitle('Talk to Us');
    setDemo(true);
  };

  const openBooking = () => {
    setBooking(true);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-[#05070f] text-slate-900 dark:text-white selection:bg-cyan-500/30 antialiased">
        <Navbar
          onDemo={() => openDemo()}
          onLogin={() => setAuth(true)}
          onPortal={() => setShowPortal(true)}
        />
        <main className="space-y-0 [&>*]:my-0 [&>*]:py-4">
          <Hero onDemo={() => openDemo()} onTalk={() => openTalk()} />
          <Platforms />
          <Services />
          <AILab onJoinResearch={() => setResearch(true)} />
          <Portfolio />
          <About />
          <Contact />
          <FinalCTA
            onDemo={() => openDemo()}
            onBooking={openBooking}
          />
        </main>
        <Footer />

        <button
          onClick={handleOpenChat}
          className="fixed bottom-32 right-6 z-50 px-5 py-3 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-full shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 transition-all hover:scale-105 flex items-center gap-2 font-medium"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
          </svg>
          <span className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span>
              {buttonText}
              {!isTypingComplete && !isChatOpen && (
                <span className="inline-block w-0.5 h-4 ml-0.5 bg-white animate-pulse" />
              )}
            </span>
          </span>
        </button>

        <DemoModal open={demo} onClose={() => setDemo(false)} title={demoTitle} />
        <BookingModal open={booking} onClose={() => setBooking(false)} title="Book Consultation" />
        <ResearchModal open={research} onClose={() => setResearch(false)} title="Join Our Research" />
        <AuthModal open={auth} onClose={() => setAuth(false)} onSuccess={() => { setAuth(false); setShowPortal(true); }} />
        <AIChatModal open={showAIChat} onClose={handleCloseChat} />
      </div>
    </ThemeProvider>
  );
};

export default AppLayout;

// import React, { useState, useEffect } from 'react';
// import { ThemeProvider } from '@/lib/theme';
// import Navbar from './Navbar';
// import Hero from './Hero';
// import Platforms from './Platforms';
// import Services from './Services';
// import AILab from './AILab';
// import Portfolio from './Portfolio';
// import About from './About';
// import Blog from './Blog';
// import Careers from './Careers';
// import FinalCTA from './FinalCTA';
// import Footer from './Footer';
// import DemoModal from './DemoModal';
// import AuthModal from './AuthModal';
// import Portal from './Portal';
// import Contact from './Contact';
// import ResearchModal from './ResearchModal';
// import BookingModal from './BookingModal';

// const AppLayout: React.FC = () => {
//   const [demo, setDemo] = useState(false);
//   const [demoTitle, setDemoTitle] = useState('Request a Demo');
//   const [auth, setAuth] = useState(false);
//   const [showPortal, setShowPortal] = useState(false);
//   const [research, setResearch] = useState(false);
//   const [booking, setBooking] = useState(false);
//   const [showFloatingButton, setShowFloatingButton] = useState(false);
//   const [showGoUp, setShowGoUp] = useState(false);

//   const openDemo = (title = 'Request a Demo') => {
//     setDemoTitle(title);
//     setDemo(true);
//   };

//   const openTalk = () => {
//     setDemoTitle('Talk to Us');
//     setDemo(true);
//   };

//   const openBooking = () => {
//     setBooking(true);
//   };

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 300) {
//         setShowFloatingButton(true);
//       } else {
//         setShowFloatingButton(false);
//       }

//       if (window.scrollY > 600) {
//         setShowGoUp(true);
//       } else {
//         setShowGoUp(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <ThemeProvider>
//       <div className="min-h-screen bg-white dark:bg-[#05070f] text-slate-900 dark:text-white selection:bg-cyan-500/30 antialiased">
//         <Navbar
//           onDemo={() => openDemo()}
//           onLogin={() => setAuth(true)}
//           onPortal={() => setShowPortal(true)}
//         />
//         <main className="space-y-0 [&>*]:my-0 [&>*]:py-4">
//           <Hero onDemo={() => openDemo()} onTalk={() => openTalk()} />
//           <Platforms />
//           <Services />
//           <AILab onJoinResearch={() => setResearch(true)} />
//           <Portfolio />
//           <About />
//           <Contact />
//           <FinalCTA
//             onDemo={() => openDemo()}
//             onBooking={openBooking}
//           />
//         </main>
//         <Footer />

//         {/* FAB BUTTON - OPENS DEMO MODAL (moved up to bottom-32) */}
//         {/* AI CHATBOT BUTTON - Opens AI chat */}
// {showFloatingButton && (
//   <button
//     onClick={() => openDemo()}
//     className="fixed bottom-32 right-6 z-50 px-5 py-3 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-full shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 transition-all hover:scale-105 flex items-center gap-2 font-medium"
//   >
//     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//       <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
//     </svg>
//     <span className="flex items-center gap-2">
//       <span className="relative flex h-2 w-2">
//         <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
//         <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
//       </span>
//       Chat with Mzati AI
//     </span>
//   </button>
// )}
//         {/* {showFloatingButton && (
//           <button
//             onClick={() => openDemo()}
//             className="fixed bottom-32 right-6 z-50 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all hover:scale-105 flex items-center gap-2 font-medium"
//           >
//             Request Demo
//             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//             </svg>
//           </button>
//         )} */}

//         {/* GO UP BUTTON - Sleek glassmorphism style */}
//         {/* GO UP BUTTON - Purple gradient (different from Request Demo) */}
//         {showGoUp && (
//           <button
//             onClick={scrollToTop}
//             className="fixed bottom-48 right-6 z-50 flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all hover:scale-105 hover:-translate-y-1 group"
//           >
//             <svg
//               className="w-4 h-4 transition-transform group-hover:-translate-y-1"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
//             </svg>
//             <span className="text-sm font-medium">Go Up</span>
//           </button>
//         )}

//         <DemoModal open={demo} onClose={() => setDemo(false)} title={demoTitle} />
//         <BookingModal open={booking} onClose={() => setBooking(false)} title="Book Consultation" />
//         <ResearchModal open={research} onClose={() => setResearch(false)} title="Join Our Research" />
//         <AuthModal open={auth} onClose={() => setAuth(false)} onSuccess={() => { setAuth(false); setShowPortal(true); }} />
//       </div>
//     </ThemeProvider>
//   );
// };

// export default AppLayout;

// import React, { useState } from 'react';
// import { ThemeProvider } from '@/lib/theme';
// import Navbar from './Navbar';
// import Hero from './Hero';
// import Platforms from './Platforms';
// import Services from './Services';
// import AILab from './AILab';
// import Portfolio from './Portfolio';
// import About from './About';
// import Blog from './Blog';
// import Careers from './Careers';
// import FinalCTA from './FinalCTA';
// import Footer from './Footer';
// import DemoModal from './DemoModal';
// // import { useAuth } from '@/contexts/AuthContext';
// import AuthModal from './AuthModal';
// import Portal from './Portal';
// import Contact from './Contact';
// import ResearchModal from './ResearchModal';
// import BookingModal from './BookingModal';


// const AppLayout: React.FC = () => {
//   // const { user } = useAuth();
//   const [demo, setDemo] = useState(false);
//   const [demoTitle, setDemoTitle] = useState('Request a Demo');
//   const [auth, setAuth] = useState(false);
//   const [showPortal, setShowPortal] = useState(false);
//   const openDemo = (title = 'Request a Demo') => { setDemoTitle(title); setDemo(true); };
//   const openTalk = () => { setDemoTitle('Talk to Us'); setDemo(true); };
//   const [research, setResearch] = useState(false);
//   const [booking, setBooking] = useState(false);
//   const openBooking = () => { setBooking(true); };
//   //   if (user && showPortal) {
//   //   return <Portal onExit={() => setShowPortal(false)} />;
//   // }

//   return (
//     <ThemeProvider>
//       <div className="min-h-screen bg-white dark:bg-[#05070f] text-slate-900 dark:text-white selection:bg-cyan-500/30 antialiased">
//         <Navbar
//           onDemo={() => openDemo()}
//           onLogin={() => setAuth(true)}
//           onPortal={() => setShowPortal(true)}
//         />
//         <main className="space-y-0 [&>*]:my-0 [&>*]:py-4">
//           <Hero onDemo={() => openDemo()} onTalk={() => openTalk()} />
//           {/* <EduSpace /> */}
//           <Platforms />
//           <Services />
//           <AILab onJoinResearch={() => setResearch(true)} />
//           <Portfolio />
//           <About />
//           {/* <Blog /> */}
//           {/* <Careers /> */}
//           <Contact />
//           <FinalCTA
//             onDemo={() => openDemo()}
//             onBooking={openBooking}
//           />
//         </main>
//         <Footer />
//         <DemoModal open={demo} onClose={() => setDemo(false)} title={demoTitle} />
//         <BookingModal open={booking} onClose={() => setBooking(false)} title="Book Consultation" />
//         <ResearchModal open={research} onClose={() => setResearch(false)} title="Join Our Research" />
//         <AuthModal open={auth} onClose={() => setAuth(false)} onSuccess={() => { setAuth(false); setShowPortal(true); }} />
//       </div>
//     </ThemeProvider>
//   );
// };

// export default AppLayout;
