import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, Shield } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileView, setActiveMobileView] = useState('main');
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isExploreOpen, setIsExploreOpen] = useState(false);

  const [activeSection, setActiveSection] = useState('hero');
  const [tabStyle, setTabStyle] = useState({ left: 0, width: 0, opacity: 0 });

  const location = useLocation();
  const navigate = useNavigate();

  const isNavActive = (sectionId: string) => {
    return location.pathname === '/' && activeSection === sectionId;
  };

  // Add this function with your other handlers
  const handleNavigation = (path: string) => {
    setIsMobileMenuOpen(false);
    setActiveMobileView('main');
    navigate(path);
  };

  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection('');
      return;
    }

    const handleScrollSpy = () => {
      // 1. ADDED 'contact' TO THE ARRAY HERE
      const sections = ['hero', 'engines', 'solutions', 'labs', 'contact'];
      let currentSection = 'hero';
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentSection = section;
          }
        }
      }
      setActiveSection(currentSection);
    };

    handleScrollSpy();

    window.addEventListener('scroll', handleScrollSpy);
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, [location.pathname]);

  const handleScroll = (id: string) => {
    setIsMobileMenuOpen(false);

    if (location.pathname !== '/') {
      navigate(`/#${id}`);
      return;
    }

    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isActive = (path: string) => location.pathname === path;

  const solutionsData = [
    { title: 'EduSpace (Education)', path: '/solutions/eduspace' },
    { title: 'HealthSpace (Healthcare)', path: '/solutions/healthspace' },
    { title: 'AgriSpace (Agriculture)', path: '/solutions/agrispace' },
    { title: 'FinSpace (Finance)', path: '/solutions/finspace' },
    { title: 'TradeSpace (Commerce)', path: '/solutions/tradespace' },
    { title: 'GovSpace (Public Sector)', path: '/solutions/govspace' }
  ];

  const exploreData = {
    community: [
      { title: 'Blog', path: '/community/blog' },
      { title: 'Forums', path: '/community/forums' },
      { title: 'Partners', path: '/community/partners' }
    ],
    support: [
      { title: 'Help Center', path: '/support/help' },
      { title: 'Docs', path: '/support/docs' },
      { title: 'Status', path: '/support/status' }
    ]
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
    const target = e.currentTarget;
    setTabStyle({
      left: target.offsetLeft,
      width: target.offsetWidth,
      opacity: 1,
    });
  };

  return (
    <header className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-md z-50 border-b border-white/5 shadow-2xl">
      <nav className="container mx-auto px-4 sm:px-6 py-3">
        <div className="flex justify-between items-center">

          <div className="flex items-center gap-10 xl:gap-14">
            <div onClick={() => navigate('/')} className="flex items-center space-x-2 cursor-pointer group shrink-0">
              <img src="/mzatinova-logo.png" alt="Logo" className="w-10 h-10 transition-transform group-hover:scale-110" />
              <div className="text-2xl font-bold text-white">
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Mzatinova</span>
              </div>
            </div>

            <div
              className="hidden lg:flex items-center relative gap-1"
              onMouseLeave={() => setTabStyle(prev => ({ ...prev, opacity: 0 }))}
            >
              <div
                className="absolute h-10 bg-blue-500/10 border border-blue-400/20 rounded-lg transition-all duration-300 ease-out pointer-events-none shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                style={{
                  left: `${tabStyle.left}px`,
                  width: `${tabStyle.width}px`,
                  opacity: tabStyle.opacity,
                }}
              />

              <button
                onMouseEnter={handleMouseEnter}
                onClick={() => handleScroll('hero')}
                className={`px-4 py-2 text-[15px] font-medium border-b-2 transition-colors ${isNavActive('hero') ? 'border-blue-400 text-blue-400 rounded-t-lg' : 'border-transparent text-gray-400 hover:text-white rounded-lg'}`}
              >
                Home
              </button>

              <button
                onMouseEnter={handleMouseEnter}
                onClick={() => handleScroll('engines')}
                className={`px-4 py-2 text-[15px] font-medium border-b-2 transition-colors ${isNavActive('engines') ? 'border-blue-400 text-blue-400 rounded-t-lg' : 'border-transparent text-gray-400 hover:text-white rounded-lg'}`}
              >
                Our Engines
              </button>

              <div className="relative py-2" onMouseEnter={(e) => { handleMouseEnter(e); setIsSolutionsOpen(true); }} onMouseLeave={() => setIsSolutionsOpen(false)}>
                <button
                  onClick={() => handleScroll('solutions')}
                  className={`px-4 py-2 flex items-center gap-1 text-[15px] font-medium border-b-2 transition-colors ${isNavActive('solutions') ? 'border-blue-400 text-blue-400 rounded-t-lg' : 'border-transparent text-gray-400 hover:text-white rounded-lg'}`}
                >
                  Solutions <ChevronDown size={14} />
                </button>
                <div className={`absolute top-full left-0 w-64 pt-2 transition-all ${isSolutionsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                  <div className="bg-slate-900 border border-white/10 rounded-xl p-2 shadow-2xl backdrop-blur-xl">
                    {solutionsData.map((item, idx) => (
                      <div key={idx} onClick={() => navigate(item.path)} className="p-3 rounded-lg hover:bg-white/5 cursor-pointer text-sm text-gray-300 hover:text-white">
                        {item.title}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <button
                onMouseEnter={handleMouseEnter}
                onClick={() => handleScroll('labs')}
                className={`px-4 py-2 text-[15px] font-medium border-b-2 transition-colors ${isNavActive('labs') ? 'border-blue-400 text-blue-400 rounded-t-lg' : 'border-transparent text-gray-400 hover:text-white rounded-lg'}`}
              >
                Mzatinova Labs
              </button>

              {/* 2. UPDATED CONTACT BUTTON TO CHECK BOTH SCROLL AND PAGE URL */}
              <button
                onMouseEnter={handleMouseEnter}
                onClick={() => navigate('/contact')}
                className={`px-4 py-2 text-[15px] font-medium border-b-2 transition-colors ${isNavActive('contact') || isActive('/contact') ? 'border-blue-400 text-blue-400 rounded-t-lg' : 'border-transparent text-gray-400 hover:text-white rounded-lg'}`}
              >
                Contact
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4 xl:gap-8">
            <div className="hidden lg:block relative" onMouseEnter={() => setIsExploreOpen(true)} onMouseLeave={() => setIsExploreOpen(false)}>
              <button className={`py-2 text-[15px] font-medium transition-colors ${isExploreOpen ? 'text-blue-400' : 'text-white hover:text-blue-400'}`}>Explore</button>
              <div className={`absolute right-0 top-full pt-4 transition-all duration-300 origin-top-right ${isExploreOpen ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-95'}`}>
                <div className="w-[450px] bg-slate-900 border border-white/10 rounded-2xl shadow-2xl p-6 grid grid-cols-2 gap-8 backdrop-blur-xl">
                  <div>
                    <h3 className="text-blue-400 font-bold uppercase text-[10px] tracking-widest mb-4 border-b border-white/5 pb-2">Community</h3>
                    {exploreData.community.map((item, i) => (
                      <div key={i} onClick={() => navigate(item.path)} className="py-2 text-sm text-gray-400 hover:text-white cursor-pointer transition-colors">{item.title}</div>
                    ))}
                  </div>
                  <div>
                    <h3 className="text-blue-400 font-bold uppercase text-[10px] tracking-widest mb-4 border-b border-white/5 pb-2">Support</h3>
                    {exploreData.support.map((item, i) => (
                      <div key={i} onClick={() => navigate(item.path)} className="py-2 text-sm text-gray-400 hover:text-white cursor-pointer transition-colors">{item.title}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <button onClick={() => navigate('/login')} className="hidden lg:block text-sm font-semibold text-gray-400 hover:text-white">Sign In</button>

            <Button onClick={() => navigate('/signup')} className="hidden lg:flex bg-blue-600 hover:bg-blue-500 text-white rounded-full px-6 font-semibold shadow-[0_0_15px_rgba(37,99,235,0.4)]">
              <Shield size={16} className="mr-2" /> Sign Up
            </Button>

            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden text-white">
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
        {/* MOBILE MENU - Add this right before the closing </nav> tag */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 bg-slate-900/95 rounded-lg border border-slate-700 p-4 space-y-2 max-h-[80vh] overflow-y-auto">

            {/* Back button */}
            {activeMobileView !== 'main' && (
              <button
                onClick={() => setActiveMobileView('main')}
                className="flex items-center text-gray-400 hover:text-white mb-4"
              >
                ← Back
              </button>
            )}

            {/* MAIN MENU */}
            {activeMobileView === 'main' && (
              <>
                <div onClick={() => handleScroll('hero')} className="text-white text-lg py-3 border-b border-slate-800 cursor-pointer">Home</div>
                <div onClick={() => handleScroll('engines')} className="text-white text-lg py-3 border-b border-slate-800 cursor-pointer">Our Engines</div>

                <div onClick={() => setActiveMobileView('solutions')} className="flex justify-between items-center text-white text-lg py-3 border-b border-slate-800 cursor-pointer">
                  <span>Solutions</span> <ChevronDown size={20} />
                </div>

                <div onClick={() => handleScroll('labs')} className="text-white text-lg py-3 border-b border-slate-800 cursor-pointer">Mzatinova Labs</div>
                <div onClick={() => navigate('/contact')} className="text-white text-lg py-3 border-b border-slate-800 cursor-pointer">Contact</div>

                {/* Secondary menu */}
                <div className="mt-6 pt-4 border-t border-slate-800 space-y-2">
                  <div onClick={() => setActiveMobileView('explore')} className="flex justify-between items-center text-gray-300 py-2 cursor-pointer">
                    <span>Explore</span> <ChevronDown size={16} />
                  </div>
                  <div onClick={() => navigate('/login')} className="text-gray-300 py-2 cursor-pointer">Sign In</div>
                  <div onClick={() => navigate('/signup')} className="text-blue-400 py-2 font-semibold cursor-pointer">Sign Up</div>
                </div>
              </>
            )}

            {/* SOLUTIONS SUB-MENU */}
            {activeMobileView === 'solutions' && (
              <>
                {solutionsData.map((item, idx) => (
                  <div key={idx} onClick={() => handleNavigation(item.path)} className="py-3 border-b border-slate-800 text-gray-300 cursor-pointer">
                    {item.title}
                  </div>
                ))}
              </>
            )}

            {/* EXPLORE SUB-MENU */}
            {activeMobileView === 'explore' && (
              <>
                <div className="mb-4">
                  <h3 className="text-blue-400 font-bold uppercase text-xs mb-2">Community</h3>
                  {exploreData.community.map((item, idx) => (
                    <div key={idx} onClick={() => handleNavigation(item.path)} className="py-3 border-b border-slate-800 text-gray-300 cursor-pointer">
                      {item.title}
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <h3 className="text-blue-400 font-bold uppercase text-xs mb-2">Support</h3>
                  {exploreData.support.map((item, idx) => (
                    <div key={idx} onClick={() => handleNavigation(item.path)} className="py-3 border-b border-slate-800 text-gray-300 cursor-pointer">
                      {item.title}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

// import React, { useState, useEffect } from 'react';
// import { Button } from '@/components/ui/button';
// import { Menu, X, ChevronDown, Shield } from 'lucide-react';
// import { useLocation, useNavigate } from 'react-router-dom';

// const Header = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
//   const [isExploreOpen, setIsExploreOpen] = useState(false);

//   const [activeSection, setActiveSection] = useState('hero');
//   const [tabStyle, setTabStyle] = useState({ left: 0, width: 0, opacity: 0 });

//   const location = useLocation();
//   const navigate = useNavigate();

//   // THE FIX: Strictly check that we are actually on the Home page before showing any scroll underlines
//   const isNavActive = (sectionId: string) => {
//     return location.pathname === '/' && activeSection === sectionId;
//   };

//   useEffect(() => {
//     // If we are not on the homepage, immediately clear the scroll spy
//     if (location.pathname !== '/') {
//       setActiveSection('');
//       return;
//     }

//     const handleScrollSpy = () => {
//       const sections = ['hero', 'engines', 'solutions', 'labs'];
//       let currentSection = 'hero'; // Default fallback
//       const scrollPosition = window.scrollY + window.innerHeight / 3;

//       for (const section of sections) {
//         const element = document.getElementById(section);
//         if (element) {
//           const { offsetTop, offsetHeight } = element;
//           if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
//             currentSection = section;
//           }
//         }
//       }
//       setActiveSection(currentSection);
//     };

//     // Run once on mount to check initial position
//     handleScrollSpy();

//     window.addEventListener('scroll', handleScrollSpy);
//     return () => window.removeEventListener('scroll', handleScrollSpy);
//   }, [location.pathname]);

//   const handleScroll = (id: string) => {
//     setIsMobileMenuOpen(false);

//     if (location.pathname !== '/') {
//       navigate(`/#${id}`);
//       return;
//     }

//     setActiveSection(id);
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   const isActive = (path: string) => location.pathname === path;

//   const solutionsData = [
//     { title: 'EduSpace (Education)', path: '/solutions/eduspace' },
//     { title: 'HealthSpace (Healthcare)', path: '/solutions/healthspace' },
//     { title: 'AgriSpace (Agriculture)', path: '/solutions/agrispace' },
//     { title: 'FinSpace (Finance)', path: '/solutions/finspace' },
//     { title: 'TradeSpace (Commerce)', path: '/solutions/tradespace' },
//     { title: 'GovSpace (Public Sector)', path: '/solutions/govspace' }
//   ];

//   const exploreData = {
//     community: [
//       { title: 'Blog', path: '/community/blog' },
//       { title: 'Forums', path: '/community/forums' },
//       { title: 'Partners', path: '/community/partners' }
//     ],
//     support: [
//       { title: 'Help Center', path: '/support/help' },
//       { title: 'Docs', path: '/support/docs' },
//       { title: 'Status', path: '/support/status' }
//     ]
//   };

//   const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
//     const target = e.currentTarget;
//     setTabStyle({
//       left: target.offsetLeft,
//       width: target.offsetWidth,
//       opacity: 1,
//     });
//   };

//   return (
//     <header className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-md z-50 border-b border-white/5 shadow-2xl">
//       <nav className="container mx-auto px-4 sm:px-6 py-3">
//         <div className="flex justify-between items-center">

//           {/* LEFT SECTION: Logo */}
//           <div className="flex items-center gap-10 xl:gap-14">
//             <div onClick={() => navigate('/')} className="flex items-center space-x-2 cursor-pointer group shrink-0">
//               <img src="/mzatinova-logo.png" alt="Logo" className="w-10 h-10 transition-transform group-hover:scale-110" />
//               <div className="text-2xl font-bold text-white">
//                 <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Mzatinova</span>
//               </div>
//             </div>

//             {/* MAGNETIC NAV LINKS */}
//             <div
//               className="hidden lg:flex items-center relative gap-1"
//               onMouseLeave={() => setTabStyle(prev => ({ ...prev, opacity: 0 }))}
//             >
//               <div
//                 className="absolute h-10 bg-blue-500/10 border border-blue-400/20 rounded-lg transition-all duration-300 ease-out pointer-events-none shadow-[0_0_15px_rgba(59,130,246,0.2)]"
//                 style={{
//                   left: `${tabStyle.left}px`,
//                   width: `${tabStyle.width}px`,
//                   opacity: tabStyle.opacity,
//                 }}
//               />

//               {/* NAV BUTTONS USING THE STRICT isNavActive CHECK */}
//               <button
//                 onMouseEnter={handleMouseEnter}
//                 onClick={() => handleScroll('hero')}
//                 className={`px-4 py-2 text-[15px] font-medium border-b-2 transition-colors ${isNavActive('hero') ? 'border-blue-400 text-blue-400 rounded-t-lg' : 'border-transparent text-gray-400 hover:text-white rounded-lg'}`}
//               >
//                 Home
//               </button>

//               <button
//                 onMouseEnter={handleMouseEnter}
//                 onClick={() => handleScroll('engines')}
//                 className={`px-4 py-2 text-[15px] font-medium border-b-2 transition-colors ${isNavActive('engines') ? 'border-blue-400 text-blue-400 rounded-t-lg' : 'border-transparent text-gray-400 hover:text-white rounded-lg'}`}
//               >
//                 Our Engines
//               </button>

//               <div className="relative py-2" onMouseEnter={(e) => { handleMouseEnter(e); setIsSolutionsOpen(true); }} onMouseLeave={() => setIsSolutionsOpen(false)}>
//                 <button
//                   onClick={() => handleScroll('solutions')}
//                   className={`px-4 py-2 flex items-center gap-1 text-[15px] font-medium border-b-2 transition-colors ${isNavActive('solutions') ? 'border-blue-400 text-blue-400 rounded-t-lg' : 'border-transparent text-gray-400 hover:text-white rounded-lg'}`}
//                 >
//                   Solutions <ChevronDown size={14} />
//                 </button>
//                 <div className={`absolute top-full left-0 w-64 pt-2 transition-all ${isSolutionsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
//                   <div className="bg-slate-900 border border-white/10 rounded-xl p-2 shadow-2xl backdrop-blur-xl">
//                     {solutionsData.map((item, idx) => (
//                       <div key={idx} onClick={() => navigate(item.path)} className="p-3 rounded-lg hover:bg-white/5 cursor-pointer text-sm text-gray-300 hover:text-white">
//                         {item.title}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               <button
//                 onMouseEnter={handleMouseEnter}
//                 onClick={() => handleScroll('labs')}
//                 className={`px-4 py-2 text-[15px] font-medium border-b-2 transition-colors ${isNavActive('labs') ? 'border-blue-400 text-blue-400 rounded-t-lg' : 'border-transparent text-gray-400 hover:text-white rounded-lg'}`}
//               >
//                 Mzatinova Labs
//               </button>

//               <button
//                 onMouseEnter={handleMouseEnter}
//                 onClick={() => navigate('/contact')}
//                 className={`px-4 py-2 text-[15px] font-medium border-b-2 transition-colors ${isActive('/contact') ? 'border-blue-400 text-blue-400 rounded-t-lg' : 'border-transparent text-gray-400 hover:text-white rounded-lg'}`}
//               >
//                 Contact
//               </button>
//             </div>
//           </div>

//           {/* RIGHT SECTION: Explore & Auth */}
//           <div className="flex items-center gap-4 xl:gap-8">
//             <div className="hidden lg:block relative" onMouseEnter={() => setIsExploreOpen(true)} onMouseLeave={() => setIsExploreOpen(false)}>
//               <button className={`py-2 text-[15px] font-medium transition-colors ${isExploreOpen ? 'text-blue-400' : 'text-white hover:text-blue-400'}`}>Explore</button>
//               <div className={`absolute right-0 top-full pt-4 transition-all duration-300 origin-top-right ${isExploreOpen ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-95'}`}>
//                 <div className="w-[450px] bg-slate-900 border border-white/10 rounded-2xl shadow-2xl p-6 grid grid-cols-2 gap-8 backdrop-blur-xl">
//                   <div>
//                     <h3 className="text-blue-400 font-bold uppercase text-[10px] tracking-widest mb-4 border-b border-white/5 pb-2">Community</h3>
//                     {exploreData.community.map((item, i) => (
//                       <div key={i} onClick={() => navigate(item.path)} className="py-2 text-sm text-gray-400 hover:text-white cursor-pointer transition-colors">{item.title}</div>
//                     ))}
//                   </div>
//                   <div>
//                     <h3 className="text-blue-400 font-bold uppercase text-[10px] tracking-widest mb-4 border-b border-white/5 pb-2">Support</h3>
//                     {exploreData.support.map((item, i) => (
//                       <div key={i} onClick={() => navigate(item.path)} className="py-2 text-sm text-gray-400 hover:text-white cursor-pointer transition-colors">{item.title}</div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <button onClick={() => navigate('/login')} className="hidden lg:block text-sm font-semibold text-gray-400 hover:text-white">Sign In</button>

//             <Button onClick={() => navigate('/signup')} className="hidden lg:flex bg-blue-600 hover:bg-blue-500 text-white rounded-full px-6 font-semibold shadow-[0_0_15px_rgba(37,99,235,0.4)]">
//               <Shield size={16} className="mr-2" /> Sign Up
//             </Button>

//             <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden text-white">
//               {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
//             </button>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;

// import React, { useState, useRef, useEffect } from 'react'; // Added useEffect
// import { Button } from '@/components/ui/button';
// import { Menu, X, ChevronDown, Shield } from 'lucide-react';
// import { useLocation, useNavigate } from 'react-router-dom';

// const Header = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
//   const [isExploreOpen, setIsExploreOpen] = useState(false);

//   // NEW: Active Section State for the underline indicator
//   const [activeSection, setActiveSection] = useState('hero');

//   // Indicator State
//   const [tabStyle, setTabStyle] = useState({ left: 0, width: 0, opacity: 0 });
//   const location = useLocation();
//   const navigate = useNavigate();

//   // NEW: Scroll Spy logic to automatically detect which section is on screen
//   useEffect(() => {
//     const handleScrollSpy = () => {
//       const sections = ['hero', 'engines', 'solutions', 'labs'];
//       const scrollPosition = window.scrollY + window.innerHeight / 3;

//       for (const section of sections) {
//         const element = document.getElementById(section);
//         if (element) {
//           const { offsetTop, offsetHeight } = element;
//           if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
//             setActiveSection(section);
//           }
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScrollSpy);
//     return () => window.removeEventListener('scroll', handleScrollSpy);
//   }, []);

//   // 1. New Scroll Logic Function
//   const handleScroll = (id: string) => {
//     // Close mobile menu first if it's open
//     setIsMobileMenuOpen(false);

//     // Set active state immediately on click
//     setActiveSection(id);

//     // Find the element by the ID you set in your sections (e.g., id="engines")
//     const element = document.getElementById(id);

//     if (element) {
//       // Smoothly scroll to the element
//       element.scrollIntoView({ behavior: 'smooth' });
//     } else {
//       // If element isn't found, we might be on another page, so navigate to home + hash
//       navigate(`/#${id}`);
//     }
//   };

//   const isActive = (path: string) => location.pathname === path;
//   const isFolderActive = (prefix: string) => location.pathname.startsWith(prefix);

//   const solutionsData = [
//     { title: 'EduSpace (Education)', path: '/solutions/eduspace' },
//     { title: 'HealthSpace (Healthcare)', path: '/solutions/healthspace' },
//     { title: 'AgriSpace (Agriculture)', path: '/solutions/agrispace' },
//     { title: 'FinSpace (Finance)', path: '/solutions/finspace' },
//     { title: 'TradeSpace (Commerce)', path: '/solutions/tradespace' },
//     { title: 'GovSpace (Public Sector)', path: '/solutions/govspace' }
//   ];

//   const exploreData = {
//     community: [
//       { title: 'Blog', path: '/community/blog' },
//       { title: 'Forums', path: '/community/forums' },
//       { title: 'Partners', path: '/community/partners' }
//     ],
//     support: [
//       { title: 'Help Center', path: '/support/help' },
//       { title: 'Docs', path: '/support/docs' },
//       { title: 'Status', path: '/support/status' }
//     ]
//   };

//   // Logic to track mouse movement for the "Magnetic" feel
//   const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
//     const target = e.currentTarget;
//     setTabStyle({
//       left: target.offsetLeft,
//       width: target.offsetWidth,
//       opacity: 1,
//     });
//   };

//   return (
//     <header className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-md z-50 border-b border-white/5 shadow-2xl">
//       <nav className="container mx-auto px-4 sm:px-6 py-3">
//         <div className="flex justify-between items-center">

//           {/* LEFT SECTION: Logo + Main Nav (Left Aligned) */}
//           <div className="flex items-center gap-10 xl:gap-14">
//             <div onClick={() => navigate('/')} className="flex items-center space-x-2 cursor-pointer group shrink-0">
//               <img src="/mzatinova-logo.png" alt="Logo" className="w-10 h-10 transition-transform group-hover:scale-110" />
//               <div className="text-2xl font-bold text-white">
//                 <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Mzatinova</span>
//               </div>
//             </div>

//             {/* MAGNETIC NAV LINKS */}
//             <div
//               className="hidden lg:flex items-center relative gap-1"
//               onMouseLeave={() => setTabStyle(prev => ({ ...prev, opacity: 0 }))}
//             >
//               {/* THE NEON INDICATOR: Styled with Mzatinova Blue Glow */}
//               <div
//                 className="absolute h-10 bg-blue-500/10 border border-blue-400/20 rounded-lg transition-all duration-300 ease-out pointer-events-none shadow-[0_0_15px_rgba(59,130,246,0.2)]"
//                 style={{
//                   left: `${tabStyle.left}px`,
//                   width: `${tabStyle.width}px`,
//                   opacity: tabStyle.opacity,
//                 }}
//               />

//               {/* ==========================================
//                   4. CHANGE: NAV BUTTONS (Dynamic Underline Added via className)
//                   ========================================== */}
//               <button
//                 onMouseEnter={handleMouseEnter}
//                 onClick={() => handleScroll('hero')}
//                 className={`px-4 py-2 text-[15px] font-medium border-b-2 transition-colors ${activeSection === 'hero' ? 'border-blue-400 text-blue-400 rounded-t-lg' : 'border-transparent text-gray-400 hover:text-white rounded-lg'}`}
//               >
//                 Home
//               </button>

//               <button
//                 onMouseEnter={handleMouseEnter}
//                 onClick={() => handleScroll('engines')}
//                 className={`px-4 py-2 text-[15px] font-medium border-b-2 transition-colors ${activeSection === 'engines' ? 'border-blue-400 text-blue-400 rounded-t-lg' : 'border-transparent text-gray-400 hover:text-white rounded-lg'}`}
//               >
//                 Our Engines
//               </button>

//               {/* Solutions Dropdown */}
//               <div className="relative py-2" onMouseEnter={(e) => { handleMouseEnter(e); setIsSolutionsOpen(true); }} onMouseLeave={() => setIsSolutionsOpen(false)}>
//                 <button
//                   onClick={() => handleScroll('solutions')}
//                   className={`px-4 py-2 flex items-center gap-1 text-[15px] font-medium border-b-2 transition-colors ${activeSection === 'solutions' ? 'border-blue-400 text-blue-400 rounded-t-lg' : 'border-transparent text-gray-400 hover:text-white rounded-lg'}`}
//                 >
//                   Solutions <ChevronDown size={14} />
//                 </button>
//                 <div className={`absolute top-full left-0 w-64 pt-2 transition-all ${isSolutionsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
//                   <div className="bg-slate-900 border border-white/10 rounded-xl p-2 shadow-2xl backdrop-blur-xl">
//                     {solutionsData.map((item, idx) => (
//                       <div key={idx} onClick={() => navigate(item.path)} className="p-3 rounded-lg hover:bg-white/5 cursor-pointer text-sm text-gray-300 hover:text-white">
//                         {item.title}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               <button
//                 onMouseEnter={handleMouseEnter}
//                 onClick={() => handleScroll('labs')}
//                 className={`px-4 py-2 text-[15px] font-medium border-b-2 transition-colors ${activeSection === 'labs' ? 'border-blue-400 text-blue-400 rounded-t-lg' : 'border-transparent text-gray-400 hover:text-white rounded-lg'}`}
//               >
//                 Mzatinova Labs
//               </button>

//               <button
//                 onMouseEnter={handleMouseEnter}
//                 onClick={() => navigate('/contact')}
//                 className={`px-4 py-2 text-[15px] font-medium border-b-2 transition-colors ${isActive('/contact') ? 'border-blue-400 text-blue-400 rounded-t-lg' : 'border-transparent text-gray-400 hover:text-white rounded-lg'}`}
//               >
//                 Contact
//               </button>
//             </div>
//           </div>

//           {/* RIGHT SECTION: Explore & Auth */}
//           <div className="flex items-center gap-4 xl:gap-8">
//             <div className="hidden lg:block relative" onMouseEnter={() => setIsExploreOpen(true)} onMouseLeave={() => setIsExploreOpen(false)}>
//               <button className={`py-2 text-[15px] font-medium transition-colors ${isExploreOpen ? 'text-blue-400' : 'text-white hover:text-blue-400'}`}>Explore</button>
//               <div className={`absolute right-0 top-full pt-4 transition-all duration-300 origin-top-right ${isExploreOpen ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-95'}`}>
//                 <div className="w-[450px] bg-slate-900 border border-white/10 rounded-2xl shadow-2xl p-6 grid grid-cols-2 gap-8 backdrop-blur-xl">
//                   <div>
//                     <h3 className="text-blue-400 font-bold uppercase text-[10px] tracking-widest mb-4 border-b border-white/5 pb-2">Community</h3>
//                     {exploreData.community.map((item, i) => (
//                       <div key={i} onClick={() => navigate(item.path)} className="py-2 text-sm text-gray-400 hover:text-white cursor-pointer transition-colors">{item.title}</div>
//                     ))}
//                   </div>
//                   <div>
//                     <h3 className="text-blue-400 font-bold uppercase text-[10px] tracking-widest mb-4 border-b border-white/5 pb-2">Support</h3>
//                     {exploreData.support.map((item, i) => (
//                       <div key={i} onClick={() => navigate(item.path)} className="py-2 text-sm text-gray-400 hover:text-white cursor-pointer transition-colors">{item.title}</div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <button onClick={() => navigate('/login')} className="hidden lg:block text-sm font-semibold text-gray-400 hover:text-white">Sign In</button>

//             <Button onClick={() => navigate('/signup')} className="hidden lg:flex bg-blue-600 hover:bg-blue-500 text-white rounded-full px-6 font-semibold shadow-[0_0_15px_rgba(37,99,235,0.4)]">
//               <Shield size={16} className="mr-2" /> Sign Up
//             </Button>

//             <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden text-white">
//               {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
//             </button>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;

// import React, { useState, useRef } from 'react';
// import { Button } from '@/components/ui/button';
// import { Menu, X, ChevronDown, Shield } from 'lucide-react';
// import { useLocation, useNavigate } from 'react-router-dom';

// const Header = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
//   const [isExploreOpen, setIsExploreOpen] = useState(false);

//   // Indicator State
//   const [tabStyle, setTabStyle] = useState({ left: 0, width: 0, opacity: 0 });
//   const location = useLocation();
//   const navigate = useNavigate();

//   // 1. New Scroll Logic Function
//   const handleScroll = (id: string) => {
//     // Close mobile menu first if it's open
//     setIsMobileMenuOpen(false);

//     // Find the element by the ID you set in your sections (e.g., id="engines")
//     const element = document.getElementById(id);

//     if (element) {
//       // Smoothly scroll to the element
//       element.scrollIntoView({ behavior: 'smooth' });
//     } else {
//       // If element isn't found, we might be on another page, so navigate to home + hash
//       navigate(`/#${id}`);
//     }
//   };

//   const isActive = (path: string) => location.pathname === path;
//   const isFolderActive = (prefix: string) => location.pathname.startsWith(prefix);

//   const solutionsData = [
//     { title: 'EduSpace (Education)', path: '/solutions/eduspace' },
//     { title: 'HealthSpace (Healthcare)', path: '/solutions/healthspace' },
//     { title: 'AgriSpace (Agriculture)', path: '/solutions/agrispace' },
//     { title: 'FinSpace (Finance)', path: '/solutions/finspace' },
//     { title: 'TradeSpace (Commerce)', path: '/solutions/tradespace' },
//     { title: 'GovSpace (Public Sector)', path: '/solutions/govspace' }
//   ];

//   const exploreData = {
//     community: [
//       { title: 'Blog', path: '/community/blog' },
//       { title: 'Forums', path: '/community/forums' },
//       { title: 'Partners', path: '/community/partners' }
//     ],
//     support: [
//       { title: 'Help Center', path: '/support/help' },
//       { title: 'Docs', path: '/support/docs' },
//       { title: 'Status', path: '/support/status' }
//     ]
//   };

//   // Logic to track mouse movement for the "Magnetic" feel
//   const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
//     const target = e.currentTarget;
//     setTabStyle({
//       left: target.offsetLeft,
//       width: target.offsetWidth,
//       opacity: 1,
//     });
//   };

//   return (
//     <header className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-md z-50 border-b border-white/5 shadow-2xl">
//       <nav className="container mx-auto px-4 sm:px-6 py-3">
//         <div className="flex justify-between items-center">

//           {/* LEFT SECTION: Logo + Main Nav (Left Aligned) */}
//           <div className="flex items-center gap-10 xl:gap-14">
//             <div onClick={() => navigate('/')} className="flex items-center space-x-2 cursor-pointer group shrink-0">
//               <img src="/mzatinova-logo.png" alt="Logo" className="w-10 h-10 transition-transform group-hover:scale-110" />
//               <div className="text-2xl font-bold text-white">
//                 <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Mzatinova</span>
//               </div>
//             </div>

//             {/* MAGNETIC NAV LINKS */}
//             <div
//               className="hidden lg:flex items-center relative gap-1"
//               onMouseLeave={() => setTabStyle(prev => ({ ...prev, opacity: 0 }))}
//             >
//               {/* THE NEON INDICATOR: Styled with Mzatinova Blue Glow */}
//               <div
//                 className="absolute h-10 bg-blue-500/10 border border-blue-400/20 rounded-lg transition-all duration-300 ease-out pointer-events-none shadow-[0_0_15px_rgba(59,130,246,0.2)]"
//                 style={{
//                   left: `${tabStyle.left}px`,
//                   width: `${tabStyle.width}px`,
//                   opacity: tabStyle.opacity,
//                 }}
//               />

//               {/* <button onMouseEnter={handleMouseEnter} onClick={() => navigate('/')}
//                 className={`px-4 py-2 rounded-lg text-[15px] font-medium transition-colors ${isActive('/') ? 'text-blue-400' : 'text-gray-400 hover:text-white'}`}>Home</button> */}

//               {/* ==========================================
//                   4. CHANGE: NAV BUTTONS (onClick now uses handleScroll)
//                   ========================================== */}
//               <button
//                 onMouseEnter={handleMouseEnter}
//                 onClick={() => handleScroll('hero')} // Changed from navigate('/')
//                 className="px-4 py-2 rounded-lg text-[15px] font-medium text-gray-400 hover:text-white"
//               >
//                 Home
//               </button>

//               {/* <button onMouseEnter={handleMouseEnter} onClick={() => navigate('/engines')}
//                 className={`px-4 py-2 rounded-lg text-[15px] font-medium transition-colors ${isActive('/engines') ? 'text-blue-400' : 'text-gray-400 hover:text-white'}`}>Our Engines</button> */}
//               <button
//                 onMouseEnter={handleMouseEnter}
//                 onClick={() => handleScroll('engines')} // Changed from navigate('/engines')
//                 className="px-4 py-2 rounded-lg text-[15px] font-medium text-gray-400 hover:text-white"
//               >
//                 Our Engines
//               </button>

//               {/* Solutions Dropdown */}
//               <div className="relative py-2" onMouseEnter={(e) => { handleMouseEnter(e); setIsSolutionsOpen(true); }} onMouseLeave={() => setIsSolutionsOpen(false)}>
//                 {/* <button className={`px-4 py-2 rounded-lg text-[15px] font-medium flex items-center gap-1 transition-colors ${isFolderActive('/solutions') ? 'text-blue-400' : 'text-gray-400 hover:text-white'}`}>
//                   Solutions <ChevronDown size={14} className={`transition-transform duration-300 ${isSolutionsOpen ? 'rotate-180' : ''}`} />
//                 </button> */}
//                 <button
//                   onClick={() => handleScroll('solutions')} // Changed to scroll to solutions section
//                   className="px-4 py-2 rounded-lg text-[15px] font-medium flex items-center gap-1 text-gray-400 hover:text-white"
//                 >
//                   Solutions <ChevronDown size={14} />
//                 </button>
//                 <div className={`absolute top-full left-0 w-64 pt-2 transition-all ${isSolutionsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
//                   <div className="bg-slate-900 border border-white/10 rounded-xl p-2 shadow-2xl backdrop-blur-xl">
//                     {solutionsData.map((item, idx) => (
//                       <div key={idx} onClick={() => navigate(item.path)} className="p-3 rounded-lg hover:bg-white/5 cursor-pointer text-sm text-gray-300 hover:text-white">
//                         {item.title}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* <button onMouseEnter={handleMouseEnter} onClick={() => navigate('/labs')}
//                 className={`px-4 py-2 rounded-lg text-[15px] font-medium transition-colors ${isActive('/labs') ? 'text-blue-400' : 'text-gray-400 hover:text-white'}`}>Mzatinova Labs</button> */}
//               <button
//                 onMouseEnter={handleMouseEnter}
//                 onClick={() => handleScroll('labs')} // Changed from navigate('/labs')
//                 className="px-4 py-2 rounded-lg text-[15px] font-medium text-gray-400 hover:text-white"
//               >
//                 Mzatinova Labs
//               </button>

//               <button onMouseEnter={handleMouseEnter} onClick={() => navigate('/contact')}
//                 className={`px-4 py-2 rounded-lg text-[15px] font-medium transition-colors ${isActive('/contact') ? 'text-blue-400' : 'text-gray-400 hover:text-white'}`}>Contact</button>
//             </div>
//           </div>

//           {/* RIGHT SECTION: Explore & Auth */}
//           <div className="flex items-center gap-4 xl:gap-8">
//             <div className="hidden lg:block relative" onMouseEnter={() => setIsExploreOpen(true)} onMouseLeave={() => setIsExploreOpen(false)}>
//               <button className={`py-2 text-[15px] font-medium transition-colors ${isExploreOpen ? 'text-blue-400' : 'text-white hover:text-blue-400'}`}>Explore</button>
//               <div className={`absolute right-0 top-full pt-4 transition-all duration-300 origin-top-right ${isExploreOpen ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-95'}`}>
//                 <div className="w-[450px] bg-slate-900 border border-white/10 rounded-2xl shadow-2xl p-6 grid grid-cols-2 gap-8 backdrop-blur-xl">
//                   <div>
//                     <h3 className="text-blue-400 font-bold uppercase text-[10px] tracking-widest mb-4 border-b border-white/5 pb-2">Community</h3>
//                     {exploreData.community.map((item, i) => (
//                       <div key={i} onClick={() => navigate(item.path)} className="py-2 text-sm text-gray-400 hover:text-white cursor-pointer transition-colors">{item.title}</div>
//                     ))}
//                   </div>
//                   <div>
//                     <h3 className="text-blue-400 font-bold uppercase text-[10px] tracking-widest mb-4 border-b border-white/5 pb-2">Support</h3>
//                     {exploreData.support.map((item, i) => (
//                       <div key={i} onClick={() => navigate(item.path)} className="py-2 text-sm text-gray-400 hover:text-white cursor-pointer transition-colors">{item.title}</div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <button onClick={() => navigate('/login')} className="hidden lg:block text-sm font-semibold text-gray-400 hover:text-white">Sign In</button>

//             <Button onClick={() => navigate('/signup')} className="hidden lg:flex bg-blue-600 hover:bg-blue-500 text-white rounded-full px-6 font-semibold shadow-[0_0_15px_rgba(37,99,235,0.4)]">
//               <Shield size={16} className="mr-2" /> Sign Up
//             </Button>

//             <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden text-white">
//               {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
//             </button>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;


// import React, { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Menu, X, Grid, ChevronDown } from 'lucide-react';
// import { useLocation, useNavigate } from 'react-router-dom';

// const Header = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   // Dropdown States
//   const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
//   const [isCommunityOpen, setIsCommunityOpen] = useState(false);
//   const [isSupportOpen, setIsSupportOpen] = useState(false);
//   const [isAppTrayOpen, setIsAppTrayOpen] = useState(false);

//   // Mobile Menu View States
//   const [activeMobileView, setActiveMobileView] = useState('main'); // 'main', 'solutions', 'community', 'support', 'apps'

//   const location = useLocation();
//   const navigate = useNavigate();

//   // --- DATA DEFINITIONS ---

//   const mainNavLinks = [
//     { id: 'home', title: 'Home', path: '/' },
//     { id: 'engines', title: 'Our Engines', path: '/engines' },
//     { id: 'labs', title: 'Mzatinova Labs', path: '/labs' }
//   ];

//   const solutionsData = [
//     { title: 'EduSpace (Education)', path: '/solutions/eduspace', status: 'live' },
//     { title: 'HealthSpace (Healthcare)', path: '/solutions/healthspace', status: 'planned' },
//     { title: 'AgriSpace (Agriculture)', path: '/solutions/agrispace', status: 'planned' },
//     { title: 'FinSpace (Finance)', path: '/solutions/finspace', status: 'planned' },
//     { title: 'TradeSpace (Commerce)', path: '/solutions/tradespace', status: 'planned' },
//     { title: 'GovSpace (Public Sector)', path: '/solutions/govspace', status: 'planned' }
//   ];

//   const communityData = [
//     { title: 'Blog', path: '/community/blog' },
//     { title: 'Forums', path: '/community/forums' },
//     { title: 'Events', path: '/community/events' },
//     { title: 'Partners', path: '/community/partners' }
//   ];

//   const supportData = [
//     { title: 'Help Center', path: '/support/help' },
//     { title: 'Documentation', path: '/support/docs' },
//     { title: 'Contact Support', path: '/support/contact' },
//     { title: 'System Status', path: '/support/status' }
//   ];

//   const appTrayApps = [
//     { id: 'eduspace', name: 'EduSpace', image: '/apps-logo/eduspace-logo.png', url: 'https://edu.mzatinova.com', status: 'live' },
//     { id: 'store', name: 'Mz Store', image: '/apps-logo/store-logo.png', url: '#', status: 'soon' },
//     { id: 'healthspace', name: 'HealthSpace', image: '/apps-logo/healthspace-logo.png', url: '#', status: 'planned' },
//     { id: 'agrispace', name: 'AgriSpace', image: '/apps-logo/agrispace-logo.png', url: '#', status: 'planned' },
//     { id: 'finspace', name: 'FinSpace', image: '/apps-logo/finspace-logo.png', url: '#', status: 'planned' }
//   ];

//   // --- HELPER FUNCTIONS ---

//   const getStatusBadge = (status: string) => {
//     if (!status) return null;
//     const colors: any = {
//       live: 'bg-green-500/20 text-green-400 border border-green-500/30',
//       soon: 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30',
//       planned: 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
//     };
//     return (
//       <span className={`text-[9px] font-semibold tracking-wider ${colors[status]} px-2 py-0.5 rounded-full ml-auto uppercase`}>
//         {status}
//       </span>
//     );
//   };

//   const handleNavigation = (path: string) => {
//     setIsMobileMenuOpen(false);
//     setIsSolutionsOpen(false);
//     setIsCommunityOpen(false);
//     setIsSupportOpen(false);
//     setIsAppTrayOpen(false);
//     setActiveMobileView('main');
//     navigate(path);
//   };

//   const handleAppLaunch = (url: string, status?: string) => {
//     if (status === 'soon' || status === 'planned' || url === '#') return;
//     setIsAppTrayOpen(false);
//     window.open(url, '_blank');
//   };

//   // --- COMPONENTS ---

//   const SimpleNavItem = ({ link }: { link: any }) => {
//     const isActive = link.path === '/' ? location.pathname === '/' : location.pathname.startsWith(link.path);
//     return (
//       <button
//         onClick={() => handleNavigation(link.path)}
//         className={`relative py-2 text-base font-medium transition-colors duration-300 ${isActive ? 'text-blue-400' : 'text-gray-300 hover:text-white'
//           }`}
//       >
//         {link.title}
//       </button>
//     );
//   };

//   const DropdownMenu = ({ title, isOpen, setIsOpen, data, showBadges = false }: any) => (
//     <div
//       className="relative py-2"
//       onMouseEnter={() => setIsOpen(true)}
//       onMouseLeave={() => setIsOpen(false)}
//     >
//       <button className={`flex items-center gap-1 text-sm lg:text-base font-medium transition-colors ${isOpen ? 'text-blue-400' : 'text-gray-300 hover:text-white'
//         }`}>
//         {title} <ChevronDown size={14} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
//       </button>

//       <div className={`absolute top-full left-0 w-64 pt-2 transition-all duration-200 origin-top-left ${isOpen ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-95'
//         }`}>
//         <div className="bg-slate-900/95 backdrop-blur-xl border border-slate-700 rounded-xl shadow-2xl p-2 flex flex-col gap-1">
//           {data.map((item: any, idx: number) => (
//             <div
//               key={idx}
//               onClick={() => handleNavigation(item.path)}
//               className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-800 cursor-pointer transition-colors"
//             >
//               <span className="text-sm text-gray-200 font-medium">{item.title}</span>
//               {showBadges && getStatusBadge(item.status)}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <header className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-lg z-50 border-b border-slate-700 shadow-lg">
//       <nav className="container mx-auto px-4 sm:px-6 py-3">
//         <div className="flex justify-between items-center">

//           {/* LEFT SECTION: Logo + Core Product Links */}
//           <div className="flex items-center gap-8 xl:gap-12">
//             <div onClick={() => navigate('/')} className="flex items-center space-x-2 cursor-pointer group">
//               <img src="/mzatinova-logo.png" alt="Mzatinova Logo" className="w-10 h-10 transition-transform duration-300 group-hover:scale-110" />
//               <div className="text-2xl md:text-3xl font-bold text-white">
//                 <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//                   Mzatinova
//                 </span>
//               </div>
//             </div>

//             <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
//               <SimpleNavItem link={mainNavLinks[0]} /> {/* Home */}
//               <SimpleNavItem link={mainNavLinks[1]} /> {/* Engines */}
//               <DropdownMenu title="Solutions" isOpen={isSolutionsOpen} setIsOpen={setIsSolutionsOpen} data={solutionsData} showBadges={true} />
//               <SimpleNavItem link={mainNavLinks[2]} /> {/* Labs */}
//             </div>
//           </div>

//           {/* RIGHT SECTION: Utility Links + App Tray + Contact */}
//           <div className="flex items-center gap-4 xl:gap-6">

//             {/* Utility Dropdowns (Community & Support) */}
//             <div className="hidden lg:flex items-center space-x-6">
//               <DropdownMenu title="Community" isOpen={isCommunityOpen} setIsOpen={setIsCommunityOpen} data={communityData} />
//               <DropdownMenu title="Support" isOpen={isSupportOpen} setIsOpen={setIsSupportOpen} data={supportData} />
//             </div>

//             {/* 1. THE LOGIN BUTTON (The Bridge) */}
//             <button
//               onClick={() => navigate('/login')}
//               className="hidden lg:flex text-sm font-semibold text-gray-300 hover:text-white transition-colors"
//             >
//               Sign In
//             </button>

//             {/* APP TRAY (9-dots) */}
//             <div className="hidden lg:block relative">
//               <button
//                 onClick={() => setIsAppTrayOpen(!isAppTrayOpen)}
//                 onMouseEnter={() => setIsAppTrayOpen(true)}
//                 onMouseLeave={() => setIsAppTrayOpen(false)}
//                 className="p-2 rounded-lg hover:bg-slate-800/50 transition-colors"
//               >
//                 <Grid className="w-6 h-6 text-gray-400 hover:text-white transition-colors" />
//               </button>

//               <div
//                 className={`fixed right-4 top-16 w-80 bg-slate-900 border border-slate-700 rounded-lg shadow-2xl transition-all duration-200 origin-top-right ${isAppTrayOpen ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-95'
//                   }`}
//                 onMouseEnter={() => setIsAppTrayOpen(true)}
//                 onMouseLeave={() => setIsAppTrayOpen(false)}
//               >
//                 <div className="p-4 border-b border-slate-700">
//                   <h3 className="text-white font-medium">Mzatinova Core Engines</h3>
//                   <p className="text-gray-400 text-sm mt-1">One core. Any industry.</p>
//                 </div>
//                 <div className="p-4 grid grid-cols-3 gap-3">
//                   {appTrayApps.map((app) => (
//                     <div
//                       key={app.id}
//                       onClick={() => handleAppLaunch(app.url, app.status)}
//                       className={`flex flex-col items-center p-2 rounded-lg transition-all duration-200 ${app.status === 'live' ? 'hover:bg-slate-800/50 cursor-pointer' : 'opacity-60 cursor-not-allowed'
//                         }`}
//                     >
//                       <img
//                         src={app.image}
//                         alt={app.name}
//                         className={`w-10 h-10 rounded-full border border-slate-700 object-cover mb-2 ${app.status !== 'live' && 'grayscale'}`}
//                         onError={(e) => {
//                           const target = e.target as HTMLImageElement;
//                           target.onerror = null;
//                           target.src = "https://via.placeholder.com/40/1e293b/ffffff?text=" + app.name.charAt(0);
//                         }}
//                       />
//                       <span className="text-white text-xs text-center font-medium">{app.name}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Contact Button */}
//             <Button onClick={() => navigate('/contact')} className="hidden lg:flex px-6 py-2.5 bg-white/5 border border-white/10 hover:bg-white/10 rounded-full text-white font-semibold">
//               Get In <span className="text-rose-400 ml-1">Touch</span>
//             </Button>

//             {/* Mobile Menu Toggle */}
//             <div className="lg:hidden">
//               <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white p-2 hover:bg-slate-800 rounded-lg">
//                 {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <div className="lg:hidden mt-4 bg-slate-900/95 rounded-lg border border-slate-700 p-4 space-y-2">
//             {activeMobileView !== 'main' && (
//               <button onClick={() => setActiveMobileView('main')} className="flex items-center text-gray-400 hover:text-white mb-4">← Back</button>
//             )}

//             {activeMobileView === 'main' && (
//               <>
//                 <div onClick={() => handleNavigation('/')} className="text-white text-lg py-3 border-b border-slate-800">Home</div>
//                 <div onClick={() => handleNavigation('/engines')} className="text-white text-lg py-3 border-b border-slate-800">Our Engines</div>
//                 <div onClick={() => setActiveMobileView('solutions')} className="flex justify-between items-center text-white text-lg py-3 border-b border-slate-800">
//                   <span>Solutions</span> <ChevronDown size={20} />
//                 </div>
//                 <div onClick={() => handleNavigation('/labs')} className="text-white text-lg py-3 border-b border-slate-800">Mzatinova Labs</div>

//                 {/* Mobile Secondary Menu */}
//                 <div className="mt-6 pt-4 border-t border-slate-800 space-y-2">
//                   <div onClick={() => setActiveMobileView('community')} className="flex justify-between items-center text-gray-300 py-2">
//                     <span>Community</span> <ChevronDown size={16} />
//                   </div>
//                   <div onClick={() => setActiveMobileView('support')} className="flex justify-between items-center text-gray-300 py-2">
//                     <span>Support</span> <ChevronDown size={16} />
//                   </div>
//                   <div onClick={() => handleNavigation('/contact')} className="text-gray-300 py-2">Contact Us</div>
//                 </div>
//               </>
//             )}

//             {/* Mobile Sub-Views */}
//             {activeMobileView === 'solutions' && solutionsData.map((item, idx) => (
//               <div key={idx} onClick={() => handleNavigation(item.path)} className="flex items-center justify-between py-3 border-b border-slate-800 text-gray-300">
//                 {item.title} {getStatusBadge(item.status)}
//               </div>
//             ))}

//             {activeMobileView === 'community' && communityData.map((item, idx) => (
//               <div key={idx} onClick={() => handleNavigation(item.path)} className="py-3 border-b border-slate-800 text-gray-300">{item.title}</div>
//             ))}

//             {activeMobileView === 'support' && supportData.map((item, idx) => (
//               <div key={idx} onClick={() => handleNavigation(item.path)} className="py-3 border-b border-slate-800 text-gray-300">{item.title}</div>
//             ))}
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// };

// export default Header;

// import React, { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Menu, X, Grid, AppWindow, Store, GraduationCap, BookOpen, Users as UsersIcon, LayoutDashboard, Home, ShoppingBag, Book, Link, Database } from 'lucide-react';
// import { useLocation, useNavigate } from 'react-router-dom';

// const Header = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isExploreOpen, setIsExploreOpen] = useState(false);
//   const [showMobileExplore, setShowMobileExplore] = useState(false);
//   // NEW STATE: Add state for app tray
//   const [isAppTrayOpen, setIsAppTrayOpen] = useState(false);
//   const [showMobileApps, setShowMobileApps] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate();

//   // --- DATA DEFINITIONS ---

//   // 1. Main Navigation Links
//   const mainNavLinks = [
//     { id: 'home', title: 'Home', path: '/' },
//     { id: 'products', title: 'Products', path: '/products' },
//     // { id: 'industries', title: 'Industries', path: '/industries' },
//     { id: 'services', title: 'Services', path: '/services' },
//     // { id: 'company', title: 'Company', path: '/company' },
//     { id: 'contact', title: 'Contact', path: '/contact' }
//   ];

//   // 2. Data for the "Explore" Mega Menu
//   const exploreData = {
//     // products: [
//     //   { title: 'EduSpace Portal', path: 'https://portal.mzatinova.com', status: 'live' },
//     //   { title: 'Mzatinova Store', path: '/products/store', status: 'soon' },
//     //   { title: 'Zanga Social', path: '/products/zanga', status: 'dev' },
//     //   { title: 'Custom Solutions', path: '/products/custom' }
//     // ],
//     support: [
//       { title: 'Help Center', path: '/support/help' },
//       { title: 'Documentation', path: '/support/docs' },
//       { title: 'Contact Support', path: '/support/contact' },
//       { title: 'Status', path: '/support/status' }
//     ],
//     industries: [
//       { title: 'Education', path: '/industries' },
//       { title: 'Health', path: '/industries' },
//       { title: 'Finance', path: '/industries' },
//       { title: 'Agriculture', path: '/industries' },
//       { title: 'Retail', path: '/industries' },
//       { title: 'AI & Research', path: '/industries' }
//     ],

//     community: [
//       { title: 'Blog', path: '/community/blog' },
//       { title: 'Forums', path: '/community/forums' },
//       { title: 'Events', path: '/community/events' },
//       { title: 'Partners', path: '/community/partners' }
//     ],
//     // services: [
//     //   { title: 'Software Dev', path: '/services/development' },
//     //   { title: 'AI Solutions', path: '/services/ai-solutions' },
//     //   { title: 'E-commerce', path: '/services/ecommerce' },
//     //   { title: 'Integration', path: '/services/integration' },
//     //   { title: 'UI/UX Design', path: '/services/design' },
//     //   { title: 'Consultation', path: '/services/consultation' }
//     // ],
//     company: [
//       { title: 'About Us', path: '/company' },
//       { title: 'Mission & Values', path: '/company' },
//       { title: 'News & Updates', path: '/company' },
//       { title: 'Careers', path: '/company' }
//     ]
//   };

//   // NEW DATA: App Tray Configuration
//   const appTrayApps = [
//     // // Core Apps
//     // {
//     //   id: 'software',
//     //   name: 'Software',
//     //   icon: <AppWindow className="w-5 h-5" />,
//     //   url: 'https://software.mzatinova.com',
//     //   color: 'blue',
//     //   category: 'core'
//     // },
//     // {
//     //   id: 'store',
//     //   name: 'Store',
//     //   icon: <Store className="w-5 h-5" />,
//     //   url: 'https://store.mzatinova.com',
//     //   color: 'green',
//     //   category: 'core',
//     //   status: 'soon'
//     // },
//     // {
//     //   id: 'zanga',
//     //   name: 'Zanga',
//     //   icon: <UsersIcon className="w-5 h-5" />,
//     //   url: 'https://zanga.mzatinova.com',
//     //   color: 'purple',
//     //   category: 'core',
//     //   status: 'dev'
//     // },

//     // Eduspace Apps

//     // {
//     //   id: 'classroom',
//     //   name: 'Classroom',
//     //   icon: <GraduationCap className="w-5 h-5" />,
//     //   url: 'https://classroom.eduspace.mzatinova.com',
//     //   color: 'orange',
//     //   category: 'eduspace'
//     // },
//     {
//       id: 'connect',
//       name: 'EduPortal',
//       image: '/apps-logo/eduspace-logo.png',
//       url: 'https://portal.mzatinova.com',
//       color: 'orange',
//       category: 'eduspace'
//     },
//     {
//       id: 'marketplace',
//       name: 'EduMarketplace',
//       image: '/apps-logo/edumarketplace-logo.png',
//       url: 'https://edumarketplace.mzatinova.com',
//       color: 'orange',
//       category: 'eduspace'
//     },
//     // {
//     //   id: 'libra',
//     //   name: 'Libra',
//     //   icon: <Book className="w-5 h-5" />,
//     //   url: 'https://libra.eduspace.mzatinova.com',
//     //   color: 'orange',
//     //   category: 'eduspace'
//     // },
//     // {
//     //   id: 'lms',
//     //   name: 'LMS',
//     //   icon: <LayoutDashboard className="w-5 h-5" />,
//     //   url: 'https://lms.eduspace.mzatinova.com',
//     //   color: 'orange',
//     //   category: 'eduspace'
//     // }
//   ];

//   // --- HELPER FUNCTIONS ---

//   const getStatusBadge = (status: string) => {
//     if (!status) return null;
//     const colors: any = {
//       live: 'bg-green-500/20 text-green-400',
//       soon: 'bg-yellow-500/20 text-yellow-400',
//       dev: 'bg-blue-500/20 text-blue-400'
//     };
//     return <span className={`text-[10px] ${colors[status]} px-1.5 py-0.5 rounded-full ml-2`}>{status.toUpperCase()}</span>;
//   };

//   const handleNavigation = (path: string) => {
//     setIsMobileMenuOpen(false);
//     setIsExploreOpen(false);
//     setIsAppTrayOpen(false);
//     navigate(path);
//   };

//   // NEW FUNCTION: Handle app launch
//   const handleAppLaunch = (url: string) => {
//     setIsAppTrayOpen(false);
//     window.open(url, '_blank');
//   };

//   // --- COMPONENTS ---

//   // Simple Nav Item (No Dropdown)
//   const SimpleNavItem = ({ link }: { link: any }) => {
//     const [isHovered, setIsHovered] = useState(false);
//     const isActive = link.path === '/'
//       ? location.pathname === '/'
//       : location.pathname.startsWith(link.path);

//     return (
//       <button
//         onClick={() => handleNavigation(link.path)}
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//         className={`relative py-2 text-base font-medium transition-colors duration-300 ${isActive ? 'text-blue-400' : 'text-gray-300 hover:text-white'
//           }`}
//       >
//         {link.title}
//         <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform transition-transform duration-300 ${isHovered || isActive ? 'scale-x-100' : 'scale-x-0'
//           }`}></span>
//       </button>
//     );
//   };

//   // NEW COMPONENT: App Button for the tray
//   const AppButton = ({ app }: { app: any }) => {
//     const colorClasses: any = {
//       blue: 'bg-blue-500/10 border-blue-500/20 hover:bg-blue-500/20',
//       green: 'bg-green-500/10 border-green-500/20 hover:bg-green-500/20',
//       purple: 'bg-purple-500/10 border-purple-500/20 hover:bg-purple-500/20',
//       orange: 'bg-orange-500/10 border-orange-500/20 hover:bg-orange-500/20',
//     };

//     const iconColorClasses: any = {
//       blue: 'text-blue-400',
//       green: 'text-green-400',
//       purple: 'text-purple-400',
//       orange: 'text-orange-400',
//     };

//     const statusColors: any = {
//       live: 'bg-green-500/20 text-green-400',
//       soon: 'bg-yellow-500/20 text-yellow-400',
//       dev: 'bg-blue-500/20 text-blue-400',
//     };

//     return (
//       <button
//         onClick={() => handleAppLaunch(app.url)}
//         className="flex flex-col items-center p-2 rounded-lg hover:bg-slate-800/50 transition-all duration-200 group relative"
//       >
//         {/* <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${iconColorClasses[app.color]}`}>
//           {app.icon}
//         </div> */}

//         <div className="w-10 h-10 rounded-full flex items-center justify-center mb-2 overflow-hidden bg-slate-800">
//           <img
//             src={app.image}
//             alt={app.name}
//             className="w-10 h-10 object-cover"
//           />
//         </div>
//         <span className="text-white text-xs text-center">{app.name}</span>
//         {app.status && (
//           <span className={`absolute -top-1 -right-1 text-[8px] ${statusColors[app.status]} px-1.5 py-0.5 rounded-full`}>
//             {app.status}
//           </span>
//         )}
//         {app.category === 'eduspace' && (
//           <span className="text-gray-500 text-[10px] mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
//             Eduspace
//           </span>
//         )}
//       </button>
//     );
//   };

//   return (
//     <header className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-lg z-50 border-b border-slate-700 shadow-lg">
//       <nav className="container mx-auto px-4 sm:px-6 py-3">
//         <div className="flex justify-between items-center">

//           {/* LEFT SECTION: Logo + Main Links */}
//           <div className="flex items-center gap-10">
//             {/* Logo */}
//             <div
//               onClick={() => navigate('/')}
//               className="flex items-center space-x-2 cursor-pointer group"
//             >
//               <img
//                 src="/mzatinova-logo.png"
//                 alt="Mzatinova Logo"
//                 className="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
//               />
//               <div className="text-2xl md:text-3xl font-bold text-white">
//                 <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//                   Mzatinova
//                 </span>
//               </div>
//             </div>

//             {/* Desktop Navigation (Simple Links) */}
//             <div className="hidden lg:flex items-center space-x-6">
//               {mainNavLinks.map(link => (
//                 <SimpleNavItem key={link.id} link={link} />
//               ))}
//             </div>
//           </div>

//           {/* RIGHT SECTION: Explore + App Tray + Button */}
//           <div className="flex items-center gap-4">

//             {/* EXPLORE MEGA MENU */}
//             <div
//               className="hidden lg:block relative"
//               onMouseEnter={() => setIsExploreOpen(true)}
//               onMouseLeave={() => setIsExploreOpen(false)}
//             >
//               {/* Explore Trigger - No Arrow, Just Text, Increased Size */}
//               <button
//                 className={`py-2 text-base font-medium transition-colors ${isExploreOpen ? 'text-blue-400' : 'text-white hover:text-blue-400'
//                   }`}
//               >
//                 Explore
//               </button>

//               {/* The Mega Menu Dropdown */}
//               <div
//                 className={`absolute right-0 top-full pt-4 transition-all duration-300 origin-top-right ${isExploreOpen ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-95'
//                   }`}
//               >
//                 <div className="w-[850px] bg-slate-900/95 backdrop-blur-xl border border-slate-700 rounded-xl shadow-2xl p-6 grid grid-cols-4 gap-6">


//                   {/* Column 1: Company */}
//                   <div>
//                     <h3 className="text-orange-400 font-bold uppercase text-xs tracking-wider mb-4 border-b border-slate-800 pb-2">Company</h3>
//                     <div className="space-y-3">
//                       {exploreData.company.map((item, idx) => (
//                         <div key={idx} onClick={() => handleNavigation(item.path)} className="cursor-pointer text-gray-400 hover:text-white transition-colors text-sm">
//                           {item.title}
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Column 2: Industries */}
//                   <div>
//                     <h3 className="text-purple-400 font-bold uppercase text-xs tracking-wider mb-4 border-b border-slate-800 pb-2">Industries</h3>
//                     <div className="space-y-3">
//                       {exploreData.industries.map((item, idx) => (
//                         <div key={idx} onClick={() => handleNavigation(item.path)} className="cursor-pointer text-gray-400 hover:text-white transition-colors text-sm">
//                           {item.title}
//                         </div>
//                       ))}
//                     </div>
//                   </div>



//                   {/* Column 3: Community */}
//                   <div>
//                     <h3 className="text-green-400 font-bold uppercase text-xs tracking-wider mb-4 border-b border-slate-800 pb-2">Community</h3>
//                     <div className="space-y-3">
//                       {exploreData.community.map((item, idx) => (
//                         <div key={idx} onClick={() => handleNavigation(item.path)} className="cursor-pointer text-gray-400 hover:text-white transition-colors text-sm">

//                           {item.title}
//                         </div>
//                       ))}
//                     </div>
//                   </div>


//                   {/* Column 4: support */}
//                   <div>
//                     <h3 className="text-blue-400 font-bold uppercase text-xs tracking-wider mb-4 border-b border-slate-800 pb-2">Support</h3>
//                     <div className="space-y-3">
//                       {exploreData.support.map((item, idx) => (
//                         <div key={idx} onClick={() => handleNavigation(item.path)} className="group flex items-center justify-between cursor-pointer text-gray-400 hover:text-white transition-colors text-sm">

//                           {item.title}
//                         </div>
//                       ))}
//                     </div>
//                   </div>


//                 </div>
//               </div>
//             </div>

//             {/* ===== START OF NEW APP TRAY CODE ===== */}
//             {/* APP TRAY - Google-style 9-dot launcher */}
//             <div className="hidden lg:block relative">
//               <button
//                 onClick={() => setIsAppTrayOpen(!isAppTrayOpen)}
//                 onMouseEnter={() => setIsAppTrayOpen(true)}
//                 onMouseLeave={() => setIsAppTrayOpen(false)}
//                 className="p-2 rounded-lg hover:bg-slate-800/50 transition-colors relative"
//                 aria-label="Apps"
//               >
//                 {/* 9-dot grid icon */}
//                 <Grid className="w-6 h-6 text-gray-400 hover:text-white transition-colors" />
//               </button>

//               {/* App Tray Dropdown - Google-like */}
//               <div
//                 className={`fixed right-4 top-16 w-80 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-lg shadow-2xl transition-all duration-200 origin-top-right ${isAppTrayOpen ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-95'
//                   }`}
//                 onMouseEnter={() => setIsAppTrayOpen(true)}
//                 onMouseLeave={() => setIsAppTrayOpen(false)}
//               >
//                 {/* Header */}
//                 <div className="p-4 border-b border-gray-200 dark:border-slate-700">
//                   <h3 className="text-gray-900 dark:text-white font-medium">Mzatinova Apps</h3>
//                   <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">All your apps in one place</p>
//                 </div>

//                 {/* Apps Grid - 3x3 like Google */}
//                 <div className="p-4 grid grid-cols-3 gap-3">
//                   {appTrayApps.map((app) => (
//                     <AppButton key={app.id} app={app} />
//                   ))}

//                   {/* "More Apps" placeholder */}
//                   <button className="flex flex-col items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-all duration-200">
//                     <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-slate-800 flex items-center justify-center mb-2">
//                       <span className="text-gray-500 dark:text-gray-400 text-lg">+</span>
//                     </div>
//                     <span className="text-gray-500 dark:text-gray-400 text-xs">More Apps</span>
//                   </button>
//                 </div>

//                 {/* Footer */}
//                 <div className="p-4 border-t border-gray-200 dark:border-slate-700">
//                   <div className="flex justify-between items-center">
//                     {/* <span className="text-gray-500 dark:text-gray-400 text-sm">
//                       <span className="font-medium dark:text-white">user@example.com</span>
//                     </span> */}
//                     <button
//                       onClick={() => handleNavigation('/')}
//                       className="text-blue-600 dark:text-blue-400 text-sm hover:text-blue-700 dark:hover:text-blue-300"
//                     >
//                       Manage Apps
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* ===== END OF NEW APP TRAY CODE ===== */}

//             {/* Get In Touch Button */}
//             <Button
//               onClick={() => navigate('/contact')}
//               className="hidden lg:flex group relative px-6 py-2.5 bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/30 hover:bg-white/10 hover:scale-105 transition-all duration-300 shadow-xl active:scale-95 items-center justify-center rounded-full"
//             >
//               <span className="text-base font-semibold text-white flex items-center gap-1.5">
//                 Get In <span className="text-rose-400 group-hover:text-rose-300 transition-colors">Touch</span>
//               </span>
//             </Button>

//             {/* Mobile Menu Toggle */}
//             <div className="lg:hidden">
//               <button
//                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                 className="text-white p-2 hover:bg-purple-500/10 rounded-lg"
//               >
//                 {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Menu (Simplified for small screens) */}
//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <div className="lg:hidden mt-4 bg-slate-900/95 rounded-lg border border-slate-700 p-4 space-y-4 max-h-[80vh] overflow-y-auto">
//             {/* Show back button if explore is open */}
//             {showMobileExplore ? (
//               <>
//                 <button
//                   onClick={() => setShowMobileExplore(false)}
//                   className="flex items-center text-white mb-4"
//                 >
//                   ← Back to Menu
//                 </button>

//                 {/* Mobile Explore Content */}
//                 <div className="space-y-4">

//                   <h3 className="text-white font-bold text-lg mb-2 mt-4">Company</h3>
//                   {exploreData.company.map((item, idx) => (
//                     <div key={idx} onClick={() => handleNavigation(item.path)} className="text-gray-300 hover:text-white py-2 px-3">
//                       {item.title}
//                     </div>
//                   ))}

//                   <h3 className="text-white font-bold text-lg mb-2 mt-4">Industries</h3>
//                   {exploreData.industries.map((item, idx) => (
//                     <div key={idx} onClick={() => handleNavigation(item.path)} className="text-gray-300 hover:text-white py-2 px-3">
//                       {item.title}
//                     </div>
//                   ))}

//                   <h3 className="text-white font-bold text-lg mb-2 mt-4">Community</h3>
//                   {exploreData.community.map((item, idx) => (
//                     <div key={idx} onClick={() => handleNavigation(item.path)} className="text-gray-300 hover:text-white py-2 px-3">
//                       {item.title}
//                     </div>
//                   ))}

//                   <h3 className="text-white font-bold text-lg mb-2">Support</h3>
//                   {exploreData.support.map((item, idx) => (
//                     <div key={idx} onClick={() => handleNavigation(item.path)} className="text-gray-300 hover:text-white py-2 px-3">
//                       {item.title}
//                     </div>
//                   ))}






//                 </div>
//               </>
//             ) : showMobileApps ? ( // FIXED: Check if mobile apps is open
//               <>
//                 <button
//                   onClick={() => setShowMobileApps(false)}
//                   className="flex items-center text-white mb-4"
//                 >
//                   ← Back to Menu
//                 </button>

//                 {/* Mobile Apps Tray */}
//                 <div className="space-y-4">
//                   <h3 className="text-white font-bold text-lg mb-2">Mzatinova Apps</h3>
//                   <p className="text-gray-400 text-sm mb-4">All your apps in one place</p>

//                   {/* Apps Grid */}
//                   <div className="grid grid-cols-3 gap-3">
//                     {appTrayApps.map((app) => (
//                       <div
//                         key={app.id}
//                         onClick={() => handleAppLaunch(app.url)}
//                         className="flex flex-col items-center p-3 rounded-lg bg-slate-800/30 hover:bg-slate-800/60 transition-colors cursor-pointer"
//                       >
//                         {/* <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${app.color === 'blue' ? 'text-blue-400' :
//                           app.color === 'green' ? 'text-green-400' :
//                             app.color === 'purple' ? 'text-purple-400' :
//                               'text-orange-400'
//                           }`}>
//                           {app.icon==}
//                         </div> */}

//                         <div className="w-10 h-10 rounded-full flex items-center justify-center mb-2 overflow-hidden bg-slate-800">
//                           <img
//                             src={app.image}
//                             alt={app.name}
//                             className="w-10 h-10 object-cover"
//                           />
//                         </div>
//                         <span className="text-white text-xs text-center">{app.name}</span>

//                       </div>
//                     ))}
//                   </div>

//                   {/* Footer */}
//                   <div className="pt-4 border-t border-slate-800">
//                     <button
//                       onClick={() => handleNavigation('/')}
//                       className="text-blue-400 text-sm hover:text-blue-300"
//                     >
//                       Manage Apps →
//                     </button>
//                   </div>
//                 </div>
//               </>
//             ) : (
//               <>
//                 {/* Main links */}
//                 {mainNavLinks.map(link => (
//                   <div key={link.id} onClick={() => handleNavigation(link.path)} className="text-white text-lg py-2 border-b border-slate-800">
//                     {link.title}
//                   </div>
//                 ))}

//                 {/* Explore button for mobile */}
//                 <div
//                   onClick={() => setShowMobileExplore(true)}
//                   className="text-white text-lg py-2 border-b border-slate-800 cursor-pointer"
//                 >
//                   Explore
//                 </div>

//                 {/* Apps button for mobile */}
//                 <div
//                   onClick={() => setShowMobileApps(true)}
//                   className="text-white text-lg py-2 border-b border-slate-800 cursor-pointer"
//                 >
//                   Mzatinova Apps
//                 </div>
//               </>
//             )}
//           </div>
//         )}


//       </nav>
//     </header>
//   );
// };

// export default Header;