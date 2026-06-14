import React, { useEffect, useState, useRef } from 'react';
import { Menu, X, Moon, Sun, Sparkles, LogIn, ArrowRight } from 'lucide-react';
import { useTheme } from '@/lib/theme';
import { NAV } from '@/lib/data';

const slug = (s: string) => s.toLowerCase().replace(/\s+/g, '-');

export default function Navbar({ onDemo, onLogin, onPortal }: { onDemo: () => void; onLogin: () => void; onPortal: () => void }) {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  
  // Indicator states
  const [activeNav, setActiveNav] = useState('Home');
  const [tabStyle, setTabStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const [activeIndicatorStyle, setActiveIndicatorStyle] = useState({ left: 0, width: 0 });
  
  // Refs for navigation items
  const navRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const navContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll spy effect
// Scroll spy effect - FIXED to work with your actual page structure
useEffect(() => {
  const handleScroll = () => {
    // Get all sections that match NAV items
    const sections = NAV.map(navItem => ({
      id: navItem === 'Home' ? 'home' : slug(navItem),
      name: navItem
    }));
    
    const scrollPosition = window.scrollY + 200; // Offset for header

    let foundSection = null;

    // Find which section is currently in view
    for (const section of sections) {
      const element = document.getElementById(section.id);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetBottom = offsetTop + element.offsetHeight;
        
        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          foundSection = section.name;
          break;
        }
      }
    }
    
    // Update if a section was found and it's different from current
    if (foundSection && foundSection !== activeNav) {
      setActiveNav(foundSection);
      const activeRef = navRefs.current[foundSection];
      if (activeRef && navContainerRef.current) {
        setActiveIndicatorStyle({
          left: activeRef.offsetLeft,
          width: activeRef.offsetWidth,
        });
      }
    }
  };

  window.addEventListener('scroll', handleScroll);
  // Small delay to ensure DOM is fully loaded
  setTimeout(handleScroll, 100);
  
  return () => window.removeEventListener('scroll', handleScroll);
}, [activeNav]);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showModal]);

  const go = (label: string) => {
    setOpen(false);
    setActiveNav(label);
    const id = label === 'Home' ? 'home' : slug(label);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    
    // Update active indicator position
    const activeRef = navRefs.current[label];
    if (activeRef && navContainerRef.current) {
      setActiveIndicatorStyle({
        left: activeRef.offsetLeft,
        width: activeRef.offsetWidth,
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'backdrop-blur-xl bg-white/70 dark:bg-[#05070f]/70 border-b border-slate-200/60 dark:border-white/10 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 flex items-center justify-between gap-2">
          {/* Logo - takes enough space on mobile */}
          <button onClick={() => go('Home')} className="flex items-center gap-2 sm:gap-3 group flex-shrink-0">
            <span className="relative grid place-items-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg shadow-cyan-500/30 p-1.5">
              <img src="/mzatinova-logo.png" alt="Logo" className="w-12 h-8 sm:w-16 sm:h-10 object-contain transition-transform group-hover:scale-105" />
            </span>
            <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 dark:text-white whitespace-nowrap">
              <span className="text-cyan-500">Mzatinova</span>
            </span>
          </button>

          {/* Desktop Navigation with Indicators */}
          <div 
            ref={navContainerRef}
            className="hidden lg:flex items-center gap-1 relative flex-1 justify-center"
            onMouseLeave={() => setTabStyle(prev => ({ ...prev, opacity: 0 }))}
          >
            {/* Sliding Background Indicator (on hover) */}
            <div
              className="absolute h-10 bg-cyan-500/10 border border-cyan-400/30 rounded-lg transition-all duration-300 ease-out pointer-events-none"
              style={{
                left: `${tabStyle.left}px`,
                width: `${tabStyle.width}px`,
                opacity: tabStyle.opacity,
              }}
            />

            {/* Active Permanent Indicator (underline) */}
            <div
              className="absolute -bottom-0.5 h-0.5 bg-cyan-500 rounded-full transition-all duration-300 ease-out"
              style={{
                left: activeIndicatorStyle.left,
                width: activeIndicatorStyle.width,
              }}
            />

            {NAV.map((n) => (
              <button
                key={n}
                ref={(el) => { navRefs.current[n] = el; }}
                onMouseEnter={(e) => {
                  const target = e.currentTarget;
                  setTabStyle({
                    left: target.offsetLeft,
                    width: target.offsetWidth,
                    opacity: 1,
                  });
                }}
                onClick={() => go(n)}
                className={`px-4 py-2 text-base font-semibold transition-colors rounded-lg ${
                  activeNav === n
                    ? 'text-cyan-500 dark:text-cyan-400'
                    : 'text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400'
                }`}
              >
                {n}
              </button>
            ))}
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="grid place-items-center w-9 h-9 rounded-lg border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:border-cyan-400 transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => { setOpen(false); setShowModal(true); }}
              className="inline-flex items-center px-4 py-2 text-base font-semibold text-white rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-shadow"
            >
              Client Login
            </button>
          </div>

          {/* Mobile: Only Hamburger Menu button - Client Login will be INSIDE the hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="grid place-items-center w-9 h-9 rounded-lg border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:border-cyan-400 transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label="Menu"
              className="grid place-items-center w-9 h-9 rounded-lg border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer - Client Login button moved INSIDE the hamburger menu */}
        {open && (
          <div className="lg:hidden mt-3 mx-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-[#0a0e1f]/95 backdrop-blur-xl p-3 grid gap-2">
            {NAV.map((n) => (
              <button
                key={n}
                onClick={() => go(n)}
                className={`text-left px-4 py-3 rounded-lg text-base font-semibold transition-colors ${
                  activeNav === n
                    ? 'text-cyan-500 bg-cyan-500/10'
                    : 'text-slate-700 dark:text-slate-200 hover:bg-cyan-500/10 hover:text-cyan-500'
                }`}
              >
                {n}
              </button>
            ))}
            
            {/* Divider */}
            <div className="border-t border-slate-200 dark:border-white/10 my-2"></div>
            
            {/* CLIENT LOGIN BUTTON - inside hamburger menu */}
            <button
              onClick={() => { setOpen(false); setShowModal(true); }}
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-base font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/25 transition-all"
            >
              <LogIn className="w-4 h-4" />
              Client Login
            </button>
          </div>
        )}
      </header>

      {/* Modal remains the same */}
      {showModal && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 w-screen h-screen top-0 left-0">
          <div 
            className="fixed inset-0 bg-slate-950/60 dark:bg-black/80 backdrop-blur-md w-full h-full" 
            onClick={() => setShowModal(false)} 
          />
          
          <div className="relative w-full max-w-md rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#070b18] p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-200 z-10">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="text-center mb-6">
              <div className="mx-auto w-10 h-10 rounded-xl bg-cyan-500/15 text-cyan-500 flex items-center justify-center mb-3">
                <LogIn className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Choose Your Platform</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Select the ecosystem portal you wish to access.</p>
            </div>

            <div className="grid gap-3">
              <button
                onClick={() => { setShowModal(false); window.open("https://portal.mzatinova.com/login", "_blank"); }}
                className="group flex items-center justify-between p-4 rounded-xl border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-white/[0.02] hover:border-cyan-500/50 hover:bg-cyan-500/[0.04] text-left transition-all"
              >
                <div>
                  <div className="font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors">EduSpace Portal</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">School Management & Analytics System</div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-500 group-hover:translate-x-1 transition-all" />
              </button>

              {/* <button
                onClick={() => { setShowModal(false); onPortal(); }}
                className="group flex items-center justify-between p-4 rounded-xl border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-white/[0.02] hover:border-blue-500/50 hover:bg-blue-500/[0.04] text-left transition-all"
              >
                <div>
                  <div className="font-bold text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors">Annex Marketplace</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Digital Ecosystem Services Platform</div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
              </button> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// import React, { useEffect, useState } from 'react';
// import { Menu, X, Moon, Sun, Sparkles, LogIn, ArrowRight } from 'lucide-react';
// import { useTheme } from '@/lib/theme';
// import { NAV } from '@/lib/data';
// // import { useAuth } from '@/contexts/AuthContext';

// const slug = (s: string) => s.toLowerCase().replace(/\s+/g, '-');

// export default function Navbar({ onDemo, onLogin, onPortal }: { onDemo: () => void; onLogin: () => void; onPortal: () => void }) {
//   const { theme, toggle } = useTheme();
//   const [scrolled, setScrolled] = useState(false);
//   const [open, setOpen] = useState(false);
//   // const { user } = useAuth();
//   const [showModal, setShowModal] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 30);
//     window.addEventListener('scroll', onScroll);
//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);

//   // Prevent background scrolling when modal is open
//   useEffect(() => {
//     if (showModal) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }
//     return () => {
//       document.body.style.overflow = 'unset';
//     };
//   }, [showModal]);

//   const go = (label: string) => {
//     setOpen(false);
//     const id = label === 'Home' ? 'home' : slug(label);
//     document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <>
//       <header
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
//           scrolled
//             ? 'backdrop-blur-xl bg-white/70 dark:bg-[#05070f]/70 border-b border-slate-200/60 dark:border-white/10 py-3'
//             : 'bg-transparent py-5'
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
//           <button onClick={() => go('Home')} className="flex items-center gap-3 group">
//             <span className="relative grid place-items-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg shadow-cyan-500/30 p-1.5">
//               <img src="/mzatinova-logo.png" alt="Logo" className="w-16 h-10 object-contain transition-transform group-hover:scale-105" />
//             </span>
//             <span className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
//               <span className="text-cyan-500">Mzatinova</span>
//             </span>
//           </button>

//           <nav className="hidden lg:flex items-center gap-1">
//             {NAV.map((n) => (
//               <button
//                 key={n}
//                 onClick={() => go(n)}
//                 className="px-4 py-2 text-base font-semibold text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors rounded-lg"
//               >
//                 {n}
//               </button>
//             ))}
//           </nav>

//           <div className="flex items-center gap-2">
//             <button
//               onClick={toggle}
//               aria-label="Toggle theme"
//               className="grid place-items-center w-9 h-9 rounded-lg border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:border-cyan-400 transition-colors"
//             >
//               {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
//             </button>

//             {/* Client Login Button */}
//             <button
//               onClick={() => { setOpen(false); setShowModal(true); }}
//               className="inline-flex items-center px-4 py-2 text-base font-semibold text-white rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-shadow"
//             >
//               Client Login
//             </button>

//             <button
//               onClick={() => setOpen((o) => !o)}
//               aria-label="Menu"
//               className="lg:hidden grid place-items-center w-9 h-9 rounded-lg border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200"
//             >
//               {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Drawer Navigation Links */}
//         {open && (
//           <div className="lg:hidden mt-3 mx-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-[#0a0e1f]/95 backdrop-blur-xl p-3 grid gap-1">
//             {NAV.map((n) => (
//               <button
//                 key={n}
//                 onClick={() => go(n)}
//                 className="text-left px-4 py-3 rounded-lg text-base font-semibold text-slate-700 dark:text-slate-200 hover:bg-cyan-500/10 hover:text-cyan-500"
//               >
//                 {n}
//               </button>
//             ))}
//           </div>
//         )}
//       </header>

//       {/* --- GLOBAL PORTAL SELECTION MODAL (Moved completely outside of the header tree) --- */}
//       {showModal && (
//         <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 w-screen h-screen top-0 left-0">
//           {/* Backdrop Dark Filter */}
//           <div 
//             className="fixed inset-0 bg-slate-950/60 dark:bg-black/80 backdrop-blur-md w-full h-full" 
//             onClick={() => setShowModal(false)} 
//           />
          
//           {/* Modal Container */}
//           <div className="relative w-full max-w-md rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#070b18] p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-200 z-10">
//             {/* Close Button */}
//             <button 
//               onClick={() => setShowModal(false)}
//               className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
//             >
//               <X className="w-4 h-4" />
//             </button>

//             {/* Header Text */}
//             <div className="text-center mb-6">
//               <div className="mx-auto w-10 h-10 rounded-xl bg-cyan-500/15 text-cyan-500 flex items-center justify-center mb-3">
//                 <LogIn className="w-5 h-5" />
//               </div>
//               <h3 className="text-xl font-bold text-slate-900 dark:text-white">Choose Your Platform</h3>
//               <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Select the ecosystem portal you wish to access.</p>
//             </div>

//             {/* Option Selection Panel */}
//             <div className="grid gap-3">
//               <button
//                 onClick={() => { setShowModal(false); window.open("https://portal.mzatinova.com/login", "_blank"); }}
//                 className="group flex items-center justify-between p-4 rounded-xl border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-white/[0.02] hover:border-cyan-500/50 hover:bg-cyan-500/[0.04] text-left transition-all"
//               >
//                 <div>
//                   <div className="font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors">EduSpace Portal</div>
//                   <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">School Management & Analytics System</div>
//                 </div>
//                 <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-500 group-hover:translate-x-1 transition-all" />
//               </button>

//               <button
//                 onClick={() => { setShowModal(false); onPortal(); }}
//                 className="group flex items-center justify-between p-4 rounded-xl border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-white/[0.02] hover:border-blue-500/50 hover:bg-blue-500/[0.04] text-left transition-all"
//               >
//                 <div>
//                   <div className="font-bold text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors">Annex Marketplace</div>
//                   <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Digital Ecosystem Services Platform</div>
//                 </div>
//                 <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// // import React, { useEffect, useState } from 'react';
// // import { Menu, X, Moon, Sun, Sparkles, LogIn, ArrowRight } from 'lucide-react';
// // import { useTheme } from '@/lib/theme';
// // import { NAV } from '@/lib/data';
// // import { useAuth } from '@/contexts/AuthContext';

// // const slug = (s: string) => s.toLowerCase().replace(/\s+/g, '-');

// // export default function Navbar({ onDemo, onLogin, onPortal }: { onDemo: () => void; onLogin: () => void; onPortal: () => void }) {
// //   const { theme, toggle } = useTheme();
// //   const [scrolled, setScrolled] = useState(false);
// //   const [open, setOpen] = useState(false);
// //   const { user } = useAuth();
// //   const [showModal, setShowModal] = useState(false);

// //   useEffect(() => {
// //     const onScroll = () => setScrolled(window.scrollY > 30);
// //     window.addEventListener('scroll', onScroll);
// //     return () => window.removeEventListener('scroll', onScroll);
// //   }, []);

// //   const go = (label: string) => {
// //     setOpen(false);
// //     const id = label === 'Home' ? 'home' : slug(label);
// //     document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
// //   };

// //   return (
// //     <header
// //       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
// //         scrolled
// //           ? 'backdrop-blur-xl bg-white/70 dark:bg-[#05070f]/70 border-b border-slate-200/60 dark:border-white/10 py-3'
// //           : 'bg-transparent py-5'
// //       }`}
// //     >
// //       <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
// //        <button onClick={() => go('Home')} className="flex items-center gap-3 group">
// //   <span className="relative grid place-items-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg shadow-cyan-500/30 p-1.5">
// //     {/* Changed to w-16 for horizontal stretch/width, h-10 to keep height proportional */}
// //     <img src="/mzatinova-logo.png" alt="Logo" className="w-16 h-10 object-contain transition-transform group-hover:scale-105" />
// //   </span>
// //   {/* Changed from text-lg to text-2xl or text-3xl for larger text */}
// //   <span className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
// //     <span className="text-cyan-500">Mzatinova</span>
// //   </span>
// // </button>

// //         <nav className="hidden lg:flex items-center gap-1">
// //           {NAV.map((n) => (
// //          <button
// //   key={n}
// //   onClick={() => go(n)}
// //   className="px-4 py-2 text-base font-semibold text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors rounded-lg"
// // >
// //   {n}
// // </button>
// //           ))}
// //         </nav>

// //         <div className="flex items-center gap-2">
// //           <button
// //             onClick={toggle}
// //             aria-label="Toggle theme"
// //             className="grid place-items-center w-9 h-9 rounded-lg border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:border-cyan-400 transition-colors"
// //           >
// //             {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
// //           </button>

// //           {/* This button handles opening the login modal across all layouts */}
// //           <button
// //             onClick={() => { setOpen(false); setShowModal(true); }}
// //             className="inline-flex items-center px-4 py-2 text-base font-semibold text-white rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-shadow"
// //           >
// //             Client Login
// //           </button>

// //           <button
// //             onClick={() => setOpen((o) => !o)}
// //             aria-label="Menu"
// //             className="lg:hidden grid place-items-center w-9 h-9 rounded-lg border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200"
// //           >
// //             {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
// //           </button>
// //         </div>
// //       </div>

// //       {/* Mobile Drawer Navigation Links */}
// //       {open && (
// //       <div className="lg:hidden mt-3 mx-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-[#0a0e1f]/95 backdrop-blur-xl p-3 grid gap-1">
// //   {NAV.map((n) => (
// //     <button
// //       key={n}
// //       onClick={() => go(n)}
// //       className="text-left px-4 py-3 rounded-lg text-base font-semibold text-slate-700 dark:text-slate-200 hover:bg-cyan-500/10 hover:text-cyan-500"
// //     >
// //       {n}
// //     </button>
// //   ))}
// // </div>
// //       )}

// //       {/* --- GLOBAL PORTAL SELECTION MODAL --- */}
// //       {showModal && (
// //         <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
// //           {/* Backdrop Dark Filter */}
// //           <div 
// //             className="absolute inset-0 bg-slate-950/40 dark:bg-black/60 backdrop-blur-md" 
// //             onClick={() => setShowModal(false)} 
// //           />
          
// //           {/* Modal Container */}
// //           <div className="relative w-full max-w-md rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#070b18] p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
// //             {/* Close Button */}
// //             <button 
// //               onClick={() => setShowModal(false)}
// //               className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
// //             >
// //               <X className="w-4 h-4" />
// //             </button>

// //             {/* Header Text */}
// //             <div className="text-center mb-6">
// //               <div className="mx-auto w-10 h-10 rounded-xl bg-cyan-500/15 text-cyan-500 flex items-center justify-center mb-3">
// //                 <LogIn className="w-5 h-5" />
// //               </div>
// //               <h3 className="text-xl font-bold text-slate-900 dark:text-white">Choose Your Platform</h3>
// //               <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Select the ecosystem portal you wish to access.</p>
// //             </div>

// //             {/* Option Selection Panel */}
// //             <div className="grid gap-3">
// //             <button
// //   onClick={() => { setShowModal(false); window.open("https://portal.mzatinova.com/login", "_blank"); }}
// //   className="group flex items-center justify-between p-4 rounded-xl border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-white/[0.02] hover:border-cyan-500/50 hover:bg-cyan-500/[0.04] text-left transition-all"
// // >
// //   <div>
// //     <div className="font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors">EduSpace Portal</div>
// //     <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">School Management & Analytics System</div>
// //   </div>
// //   <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-500 group-hover:translate-x-1 transition-all" />
// // </button>

// //               <button
// //                 onClick={() => { setShowModal(false); onPortal(); }}
// //                 className="group flex items-center justify-between p-4 rounded-xl border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-white/[0.02] hover:border-blue-500/50 hover:bg-blue-500/[0.04] text-left transition-all"
// //               >
// //                 <div>
// //                   <div className="font-bold text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors">Annex Marketplace</div>
// //                   <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Digital Ecosystem Services Platform</div>
// //                 </div>
// //                 <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </header>
// //   );
// // }
