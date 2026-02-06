import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react'; // Removed ChevronDown
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // --- DATA DEFINITIONS ---

  // 1. Main Navigation Links
  const mainNavLinks = [
    { id: 'home', title: 'Home', path: '/' },
    { id: 'products', title: 'Products', path: '/products' },
    { id: 'industries', title: 'Industries', path: '/industries' },
    { id: 'services', title: 'Services', path: '/services' },
    { id: 'company', title: 'Company', path: '/company' }, // Included Company here
    { id: 'contact', title: 'Contact', path: '/contact' }
  ];

  // 2. Data for the "Explore" Mega Menu
  const exploreData = {
    products: [
      { title: 'EduSpace Portal', path: '/products/eduspace', status: 'live' },
      { title: 'Mzatinova Store', path: '/products/store', status: 'soon' },
      { title: 'Zanga Social', path: '/products/zanga', status: 'dev' },
      { title: 'Custom Solutions', path: '/products/custom' }
    ],
    industries: [
      { title: 'Education', path: '/industries/education' },
      { title: 'Health', path: '/industries/health' },
      { title: 'Finance', path: '/industries/finance' },
      { title: 'Agriculture', path: '/industries/agriculture' },
      { title: 'Retail', path: '/industries/retail' },
      { title: 'AI & Research', path: '/industries/ai-research' }
    ],
    services: [
      { title: 'Software Dev', path: '/services/development' },
      { title: 'AI Solutions', path: '/services/ai-solutions' },
      { title: 'E-commerce', path: '/services/ecommerce' },
      { title: 'Integration', path: '/services/integration' },
      { title: 'UI/UX Design', path: '/services/design' },
      { title: 'Consultation', path: '/services/consultation' }
    ],
    company: [
      { title: 'About Us', path: '/company/about' },
      { title: 'Mission & Values', path: '/company/mission' },
      { title: 'News & Updates', path: '/company/news' },
      { title: 'Careers', path: '/company/careers' }
    ]
  };

  // --- HELPER FUNCTIONS ---

  const getStatusBadge = (status: string) => {
    if (!status) return null;
    const colors: any = {
      live: 'bg-green-500/20 text-green-400',
      soon: 'bg-yellow-500/20 text-yellow-400',
      dev: 'bg-blue-500/20 text-blue-400'
    };
    return <span className={`text-[10px] ${colors[status]} px-1.5 py-0.5 rounded-full ml-2`}>{status.toUpperCase()}</span>;
  };

  const handleNavigation = (path: string) => {
    setIsMobileMenuOpen(false);
    setIsExploreOpen(false);
    navigate(path);
  };

  // --- COMPONENTS ---

  // Simple Nav Item (No Dropdown)
  const SimpleNavItem = ({ link }: { link: any }) => {
    const [isHovered, setIsHovered] = useState(false);
    const isActive = link.path === '/'
      ? location.pathname === '/'
      : location.pathname.startsWith(link.path);

    return (
      <button
        onClick={() => handleNavigation(link.path)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        // CHANGED: text-sm to text-base (Increased size)
        className={`relative py-2 text-base font-medium transition-colors duration-300 ${isActive ? 'text-blue-400' : 'text-gray-300 hover:text-white'
          }`}
      >
        {link.title}
        <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform transition-transform duration-300 ${isHovered || isActive ? 'scale-x-100' : 'scale-x-0'
          }`}></span>
      </button>
    );
  };

  return (
    <header className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-lg z-50 border-b border-slate-700 shadow-lg">
      <nav className="container mx-auto px-4 sm:px-6 py-3">
        <div className="flex justify-between items-center">

          {/* LEFT SECTION: Logo + Main Links */}
          <div className="flex items-center gap-10">
            {/* Logo */}
            <div
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 cursor-pointer group"
            >
              <img
                src="/logo.png"
                alt="Mzatinova Logo"
                className="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
              />
              <div className="text-2xl md:text-3xl font-bold text-white">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Mzatinova
                </span>
              </div>
            </div>

            {/* Desktop Navigation (Simple Links) */}
            <div className="hidden lg:flex items-center space-x-6">
              {mainNavLinks.map(link => (
                <SimpleNavItem key={link.id} link={link} />
              ))}
            </div>
          </div>

          {/* RIGHT SECTION: Explore + Button */}
          <div className="flex items-center gap-6">

            {/* EXPLORE MEGA MENU */}
            <div
              className="hidden lg:block relative"
              onMouseEnter={() => setIsExploreOpen(true)}
              onMouseLeave={() => setIsExploreOpen(false)}
            >
              {/* Explore Trigger - No Arrow, Just Text, Increased Size */}
              <button
                // CHANGED: text-sm to text-base, removed icon and gap-1
                className={`py-2 text-base font-medium transition-colors ${isExploreOpen ? 'text-blue-400' : 'text-white hover:text-blue-400'
                  }`}
              >
                Explore
              </button>

              {/* The Mega Menu Dropdown */}
              <div
                className={`absolute right-0 top-full pt-4 transition-all duration-300 origin-top-right ${isExploreOpen ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-95'
                  }`}
              >
                <div className="w-[850px] bg-slate-900/95 backdrop-blur-xl border border-slate-700 rounded-xl shadow-2xl p-6 grid grid-cols-4 gap-6">

                  {/* Column 1: Products */}
                  <div>
                    <h3 className="text-blue-400 font-bold uppercase text-xs tracking-wider mb-4 border-b border-slate-800 pb-2">Products</h3>
                    <div className="space-y-3">
                      {exploreData.products.map((item, idx) => (
                        <div key={idx} onClick={() => handleNavigation(item.path)} className="group flex items-center justify-between cursor-pointer text-gray-400 hover:text-white transition-colors text-sm">
                          <span>{item.title}</span>
                          {getStatusBadge(item.status)}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Column 2: Industries */}
                  <div>
                    <h3 className="text-purple-400 font-bold uppercase text-xs tracking-wider mb-4 border-b border-slate-800 pb-2">Industries</h3>
                    <div className="space-y-3">
                      {exploreData.industries.map((item, idx) => (
                        <div key={idx} onClick={() => handleNavigation(item.path)} className="cursor-pointer text-gray-400 hover:text-white transition-colors text-sm">
                          {item.title}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Column 3: Services */}
                  <div>
                    <h3 className="text-green-400 font-bold uppercase text-xs tracking-wider mb-4 border-b border-slate-800 pb-2">Services</h3>
                    <div className="space-y-3">
                      {exploreData.services.map((item, idx) => (
                        <div key={idx} onClick={() => handleNavigation(item.path)} className="cursor-pointer text-gray-400 hover:text-white transition-colors text-sm">
                          {item.title}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Column 4: Company */}
                  <div>
                    <h3 className="text-orange-400 font-bold uppercase text-xs tracking-wider mb-4 border-b border-slate-800 pb-2">Company</h3>
                    <div className="space-y-3">
                      {exploreData.company.map((item, idx) => (
                        <div key={idx} onClick={() => handleNavigation(item.path)} className="cursor-pointer text-gray-400 hover:text-white transition-colors text-sm">
                          {item.title}
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Get Started Button */}
            {/* <div className="hidden lg:block">
              <Button
                onClick={() => navigate('/contact')}
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all shadow-lg shadow-blue-500/20"
              >
                <h2 className="text-2xl font-bold text-white mb-4">
                  Get In <span className="text-red-500">Touch</span>
                </h2>
              </Button>
            </div> */}

            <Button
              onClick={() => navigate('/contact')}
              className="hidden lg:flex group relative px-6 py-2.5 bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/30 hover:bg-white/10 hover:scale-105 transition-all duration-300 shadow-xl active:scale-95 items-center justify-center rounded-full"
            >
              <span className="text-base font-semibold text-white flex items-center gap-1.5">
                Get In <span className="text-rose-400 group-hover:text-rose-300 transition-colors">Touch</span>
              </span>
            </Button>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white p-2 hover:bg-purple-500/10 rounded-lg"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu (Simplified for small screens) */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 bg-slate-900/95 rounded-lg border border-slate-700 p-4 space-y-4 max-h-[80vh] overflow-y-auto">
            {mainNavLinks.map(link => (
              <div key={link.id} onClick={() => handleNavigation(link.path)} className="text-white text-lg py-2 border-b border-slate-800">
                {link.title}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

// import React, { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Menu, X } from 'lucide-react'; // Removed ChevronDown
// import { useLocation, useNavigate } from 'react-router-dom';

// const Header = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isExploreOpen, setIsExploreOpen] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate();

//   // --- DATA DEFINITIONS ---

//   // 1. Main Navigation Links
//   const mainNavLinks = [
//     { id: 'home', title: 'Home', path: '/' },
//     { id: 'products', title: 'Products', path: '/products' },
//     { id: 'industries', title: 'Industries', path: '/industries' },
//     { id: 'services', title: 'Services', path: '/services' },
//     { id: 'company', title: 'Company', path: '/company' }, // Included Company here
//     { id: 'contact', title: 'Contact', path: '/contact' }
//   ];

//   // 2. Data for the "Explore" Mega Menu
//   const exploreData = {
//     products: [
//       { title: 'EduSpace Portal', path: '/products/eduspace', status: 'live' },
//       { title: 'Mzatinova Store', path: '/products/store', status: 'soon' },
//       { title: 'Zanga Social', path: '/products/zanga', status: 'dev' },
//       { title: 'Custom Solutions', path: '/products/custom' }
//     ],
//     industries: [
//       { title: 'Education', path: '/industries/education' },
//       { title: 'Health', path: '/industries/health' },
//       { title: 'Finance', path: '/industries/finance' },
//       { title: 'Agriculture', path: '/industries/agriculture' },
//       { title: 'Retail', path: '/industries/retail' },
//       { title: 'AI & Research', path: '/industries/ai-research' }
//     ],
//     services: [
//       { title: 'Software Dev', path: '/services/development' },
//       { title: 'AI Solutions', path: '/services/ai-solutions' },
//       { title: 'E-commerce', path: '/services/ecommerce' },
//       { title: 'Integration', path: '/services/integration' },
//       { title: 'UI/UX Design', path: '/services/design' },
//       { title: 'Consultation', path: '/services/consultation' }
//     ],
//     company: [
//       { title: 'About Us', path: '/company/about' },
//       { title: 'Mission & Values', path: '/company/mission' },
//       { title: 'News & Updates', path: '/company/news' },
//       { title: 'Careers', path: '/company/careers' }
//     ]
//   };

//   // --- HELPER FUNCTIONS ---

//   const getStatusBadge = (status: string) => {
//     if (!status) return null;
//     const colors: any = {
//       live: 'bg-green-100 text-green-800',
//       soon: 'bg-yellow-100 text-yellow-800',
//       dev: 'bg-blue-100 text-blue-800'
//     };
//     return <span className={`text-[10px] ${colors[status]} px-1.5 py-0.5 rounded-full ml-2`}>{status.toUpperCase()}</span>;
//   };

//   const handleNavigation = (path: string) => {
//     setIsMobileMenuOpen(false);
//     setIsExploreOpen(false);
//     navigate(path);
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
//         // CHANGED: text-sm to text-base (Increased size)
//         className={`relative py-2 text-base font-medium transition-colors duration-300 ${isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
//           }`}
//       >
//         {link.title}
//         <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform transition-transform duration-300 ${isHovered || isActive ? 'scale-x-100' : 'scale-x-0'
//           }`}></span>
//       </button>
//     );
//   };

//   return (
//     <header className="fixed top-0 w-full bg-white/90 backdrop-blur-lg z-50 border-b border-gray-200 shadow-sm">
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
//                 src="/logo.png"
//                 alt="Mzatinova Logo"
//                 className="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
//               />
//               <div className="text-2xl md:text-3xl font-bold">
//                 <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
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

//           {/* RIGHT SECTION: Explore + Button */}
//           <div className="flex items-center gap-6">

//             {/* EXPLORE MEGA MENU */}
//             <div
//               className="hidden lg:block relative"
//               onMouseEnter={() => setIsExploreOpen(true)}
//               onMouseLeave={() => setIsExploreOpen(false)}
//             >
//               {/* Explore Trigger - No Arrow, Just Text, Increased Size */}
//               <button
//                 // CHANGED: text-sm to text-base, removed icon and gap-1
//                 className={`py-2 text-base font-medium transition-colors ${isExploreOpen ? 'text-blue-600' : 'text-gray-900 hover:text-blue-600'
//                   }`}
//               >
//                 Explore
//               </button>

//               {/* The Mega Menu Dropdown */}
//               <div
//                 className={`absolute right-0 top-full pt-4 transition-all duration-300 origin-top-right ${isExploreOpen ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-95'
//                   }`}
//               >
//                 <div className="w-[850px] bg-white/95 backdrop-blur-xl border border-gray-200 rounded-xl shadow-lg p-6 grid grid-cols-4 gap-6">

//                   {/* Column 1: Products */}
//                   <div>
//                     <h3 className="text-blue-600 font-bold uppercase text-xs tracking-wider mb-4 border-b border-gray-200 pb-2">Products</h3>
//                     <div className="space-y-3">
//                       {exploreData.products.map((item, idx) => (
//                         <div key={idx} onClick={() => handleNavigation(item.path)} className="group flex items-center justify-between cursor-pointer text-gray-600 hover:text-blue-600 transition-colors text-sm">
//                           <span>{item.title}</span>
//                           {getStatusBadge(item.status)}
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Column 2: Industries */}
//                   <div>
//                     <h3 className="text-purple-600 font-bold uppercase text-xs tracking-wider mb-4 border-b border-gray-200 pb-2">Industries</h3>
//                     <div className="space-y-3">
//                       {exploreData.industries.map((item, idx) => (
//                         <div key={idx} onClick={() => handleNavigation(item.path)} className="cursor-pointer text-gray-600 hover:text-purple-600 transition-colors text-sm">
//                           {item.title}
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Column 3: Services */}
//                   <div>
//                     <h3 className="text-green-600 font-bold uppercase text-xs tracking-wider mb-4 border-b border-gray-200 pb-2">Services</h3>
//                     <div className="space-y-3">
//                       {exploreData.services.map((item, idx) => (
//                         <div key={idx} onClick={() => handleNavigation(item.path)} className="cursor-pointer text-gray-600 hover:text-green-600 transition-colors text-sm">
//                           {item.title}
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Column 4: Company */}
//                   <div>
//                     <h3 className="text-orange-600 font-bold uppercase text-xs tracking-wider mb-4 border-b border-gray-200 pb-2">Company</h3>
//                     <div className="space-y-3">
//                       {exploreData.company.map((item, idx) => (
//                         <div key={idx} onClick={() => handleNavigation(item.path)} className="cursor-pointer text-gray-600 hover:text-orange-600 transition-colors text-sm">
//                           {item.title}
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                 </div>
//               </div>
//             </div>

//             {/* Get Started Button */}
//             <div className="hidden lg:block">
//               <Button
//                 onClick={() => navigate('/contact')}
//                 className="bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all shadow-md shadow-blue-500/20"
//               >
//                 Get Started
//               </Button>
//             </div>

//             {/* Mobile Menu Toggle */}
//             <div className="lg:hidden">
//               <button
//                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                 className="text-gray-700 p-2 hover:bg-blue-50 rounded-lg"
//               >
//                 {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Menu (Simplified for small screens) */}
//         {isMobileMenuOpen && (
//           <div className="lg:hidden mt-4 bg-white/95 rounded-lg border border-gray-200 p-4 space-y-4 max-h-[80vh] overflow-y-auto">
//             {mainNavLinks.map(link => (
//               <div key={link.id} onClick={() => handleNavigation(link.path)} className="text-gray-800 text-lg py-2 border-b border-gray-200">
//                 {link.title}
//               </div>
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
// import { Menu, X } from 'lucide-react'; // Removed ChevronDown
// import { useLocation, useNavigate } from 'react-router-dom';

// const Header = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isExploreOpen, setIsExploreOpen] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate();

//   // --- DATA DEFINITIONS ---

//   // 1. Main Navigation Links
//   const mainNavLinks = [
//     { id: 'home', title: 'Home', path: '/' },
//     { id: 'products', title: 'Products', path: '/products' },
//     { id: 'industries', title: 'Industries', path: '/industries' },
//     { id: 'services', title: 'Services', path: '/services' },
//     { id: 'company', title: 'Company', path: '/company' }, // Included Company here
//     { id: 'contact', title: 'Contact', path: '/contact' }
//   ];

//   // 2. Data for the "Explore" Mega Menu
//   const exploreData = {
//     products: [
//       { title: 'EduSpace Portal', path: '/products/eduspace', status: 'live' },
//       { title: 'Mzatinova Store', path: '/products/store', status: 'soon' },
//       { title: 'Zanga Social', path: '/products/zanga', status: 'dev' },
//       { title: 'Custom Solutions', path: '/products/custom' }
//     ],
//     industries: [
//       { title: 'Education', path: '/industries/education' },
//       { title: 'Health', path: '/industries/health' },
//       { title: 'Finance', path: '/industries/finance' },
//       { title: 'Agriculture', path: '/industries/agriculture' },
//       { title: 'Retail', path: '/industries/retail' },
//       { title: 'AI & Research', path: '/industries/ai-research' }
//     ],
//     services: [
//       { title: 'Software Dev', path: '/services/development' },
//       { title: 'AI Solutions', path: '/services/ai-solutions' },
//       { title: 'E-commerce', path: '/services/ecommerce' },
//       { title: 'Integration', path: '/services/integration' },
//       { title: 'UI/UX Design', path: '/services/design' },
//       { title: 'Consultation', path: '/services/consultation' }
//     ],
//     company: [
//       { title: 'About Us', path: '/company/about' },
//       { title: 'Mission & Values', path: '/company/mission' },
//       { title: 'News & Updates', path: '/company/news' },
//       { title: 'Careers', path: '/company/careers' }
//     ]
//   };

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
//     navigate(path);
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
//         // CHANGED: text-sm to text-base (Increased size)
//         className={`relative py-2 text-base font-medium transition-colors duration-300 ${isActive ? 'text-blue-400' : 'text-gray-300 hover:text-white'
//           }`}
//       >
//         {link.title}
//         <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform transition-transform duration-300 ${isHovered || isActive ? 'scale-x-100' : 'scale-x-0'
//           }`}></span>
//       </button>
//     );
//   };

//   return (
//     <header className="fixed top-0 w-full bg-black/80 backdrop-blur-lg z-50 border-b border-purple-500/20 shadow-lg">
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
//                 src="/logo.png"
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

//           {/* RIGHT SECTION: Explore + Button */}
//           <div className="flex items-center gap-6">

//             {/* EXPLORE MEGA MENU */}
//             <div
//               className="hidden lg:block relative"
//               onMouseEnter={() => setIsExploreOpen(true)}
//               onMouseLeave={() => setIsExploreOpen(false)}
//             >
//               {/* Explore Trigger - No Arrow, Just Text, Increased Size */}
//               <button
//                 // CHANGED: text-sm to text-base, removed icon and gap-1
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
//                 <div className="w-[850px] bg-black/95 backdrop-blur-xl border border-purple-500/20 rounded-xl shadow-2xl p-6 grid grid-cols-4 gap-6">

//                   {/* Column 1: Products */}
//                   <div>
//                     <h3 className="text-blue-400 font-bold uppercase text-xs tracking-wider mb-4 border-b border-gray-800 pb-2">Products</h3>
//                     <div className="space-y-3">
//                       {exploreData.products.map((item, idx) => (
//                         <div key={idx} onClick={() => handleNavigation(item.path)} className="group flex items-center justify-between cursor-pointer text-gray-400 hover:text-white transition-colors text-sm">
//                           <span>{item.title}</span>
//                           {getStatusBadge(item.status)}
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Column 2: Industries */}
//                   <div>
//                     <h3 className="text-purple-400 font-bold uppercase text-xs tracking-wider mb-4 border-b border-gray-800 pb-2">Industries</h3>
//                     <div className="space-y-3">
//                       {exploreData.industries.map((item, idx) => (
//                         <div key={idx} onClick={() => handleNavigation(item.path)} className="cursor-pointer text-gray-400 hover:text-white transition-colors text-sm">
//                           {item.title}
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Column 3: Services */}
//                   <div>
//                     <h3 className="text-green-400 font-bold uppercase text-xs tracking-wider mb-4 border-b border-gray-800 pb-2">Services</h3>
//                     <div className="space-y-3">
//                       {exploreData.services.map((item, idx) => (
//                         <div key={idx} onClick={() => handleNavigation(item.path)} className="cursor-pointer text-gray-400 hover:text-white transition-colors text-sm">
//                           {item.title}
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Column 4: Company */}
//                   <div>
//                     <h3 className="text-orange-400 font-bold uppercase text-xs tracking-wider mb-4 border-b border-gray-800 pb-2">Company</h3>
//                     <div className="space-y-3">
//                       {exploreData.company.map((item, idx) => (
//                         <div key={idx} onClick={() => handleNavigation(item.path)} className="cursor-pointer text-gray-400 hover:text-white transition-colors text-sm">
//                           {item.title}
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                 </div>
//               </div>
//             </div>

//             {/* Get Started Button */}
//             <div className="hidden lg:block">
//               <Button
//                 onClick={() => navigate('/contact')}
//                 className="bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all shadow-lg shadow-blue-500/20"
//               >
//                 Get Started
//               </Button>
//             </div>

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
//         {isMobileMenuOpen && (
//           <div className="lg:hidden mt-4 bg-black/95 rounded-lg border border-purple-500/20 p-4 space-y-4 max-h-[80vh] overflow-y-auto">
//             {mainNavLinks.map(link => (
//               <div key={link.id} onClick={() => handleNavigation(link.path)} className="text-white text-lg py-2 border-b border-gray-800">
//                 {link.title}
//               </div>
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
// import { Menu, X } from 'lucide-react'; // Removed 'Home' import
// import { useLocation, useNavigate } from 'react-router-dom';

// const Header = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate();

//   const navLinks = [
//     {
//       id: 'home',
//       title: 'Home',
//       path: '/',
//       // Icon removed
//     },
//     {
//       id: 'products', title: 'Products', path: '/products', dropdown: [
//         { id: 'eduspace', title: 'EduSpace Portal', path: '/products/eduspace', status: 'live' },
//         { id: 'store', title: 'Mzatinova Store', path: '/products/store', status: 'soon' },
//         { id: 'zanga', title: 'Zanga Social', path: '/products/zanga', status: 'dev' },
//         { id: 'custom', title: 'Custom Solutions', path: '/products/custom' }
//       ]
//     },
//     {
//       id: 'industries', title: 'Industries', path: '/industries', dropdown: [
//         { id: 'education', title: 'Education', path: '/industries/education' },
//         { id: 'health', title: 'Health', path: '/industries/health' },
//         { id: 'finance', title: 'Finance', path: '/industries/finance' },
//         { id: 'agriculture', title: 'Agriculture', path: '/industries/agriculture' },
//         { id: 'retail', title: 'Retail', path: '/industries/retail' },
//         { id: 'ai-research', title: 'AI & Research', path: '/industries/ai-research' }
//       ]
//     },
//     {
//       id: 'services', title: 'Services', path: '/services', dropdown: [
//         { id: 'development', title: 'Software Development', path: '/services/development' },
//         { id: 'ai-solutions', title: 'AI Solutions', path: '/services/ai-solutions' },
//         { id: 'ecommerce', title: 'E-commerce Platforms', path: '/services/ecommerce' },
//         { id: 'integration', title: 'System Integration', path: '/services/integration' },
//         { id: 'design', title: 'UI/UX Design', path: '/services/design' },
//         { id: 'consultation', title: 'Technical Consultation', path: '/services/consultation' }
//       ]
//     },
//     { id: 'company', title: 'Company', path: '/company' },
//     { id: 'contact', title: 'Contact', path: '/contact' }
//   ];

//   const leftLinks = navLinks.filter(l => ['home', 'products', 'industries', 'services', 'company', 'contact'].includes(l.id));
//   const rightLinks = navLinks.filter(l => ['explore'].includes(l.id));

//   const getStatusBadge = (status: string) => {
//     if (!status) return null;
//     const colors: any = {
//       live: 'bg-green-500/20 text-green-400',
//       soon: 'bg-yellow-500/20 text-yellow-400',
//       dev: 'bg-blue-500/20 text-blue-400'
//     };
//     return <span className={`text-xs ${colors[status]} px-2 py-1 rounded-full ml-2`}>{status.toUpperCase()}</span>;
//   };

//   const handleNavigation = (path: string) => {
//     setIsMobileMenuOpen(false);
//     navigate(path);
//   };

//   // Improved Hover Dropdown Component
//   const NavItem = ({ link }: { link: any }) => {
//     const [isHovered, setIsHovered] = useState(false);

//     // Logic: Only active if exact match for Home, or startsWith for others
//     const isActive = link.path === '/'
//       ? location.pathname === '/'
//       : location.pathname.startsWith(link.path);

//     return (
//       <div
//         className="relative group"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <button
//           onClick={() => handleNavigation(link.path)}
//           className={`relative py-2 text-white hover:text-blue-400 transition-colors duration-300 cursor-pointer flex items-center gap-2 ${isActive ? 'text-blue-400' : 'text-gray-300'
//             }`}
//         >
//           {link.title}

//           <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform transition-transform duration-300 ${isHovered || isActive ? 'scale-x-100' : 'scale-x-0'
//             }`}></span>
//         </button>

//         {link.dropdown && (
//           <div className={`absolute top-full left-0 pt-2 z-50 transition-all duration-300 ${isHovered ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
//             }`}>
//             <div className="min-w-[220px] bg-black/95 backdrop-blur-md rounded-lg border border-purple-500/20 py-2 shadow-xl">
//               {link.dropdown.map((item: any) => (
//                 <div
//                   key={item.id}
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     handleNavigation(item.path);
//                   }}
//                   className="flex items-center justify-between px-4 py-3 text-sm text-white hover:text-blue-400 hover:bg-purple-500/10 transition-colors cursor-pointer"
//                 >
//                   <span>{item.title}</span>
//                   {getStatusBadge(item.status)}
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     );
//   };

//   return (
//     <header className="fixed top-0 w-full bg-black/80 backdrop-blur-lg z-50 border-b border-purple-500/20 shadow-lg">
//       <nav className="container mx-auto px-4 sm:px-6 py-3">
//         <div className="flex justify-between items-center">

//           {/* LEFT SECTION: Logo + Left Links */}
//           <div className="flex items-center space-x-10">
//             <div
//               onClick={() => navigate('/')}
//               className="flex items-center space-x-2 cursor-pointer group"
//             >
//               <img
//                 src="/logo.png"
//                 alt="Mzatinova Logo"
//                 className="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
//               />
//               <div className="text-2xl md:text-3xl font-bold text-white">
//                 <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//                   Mzatinova
//                 </span>
//               </div>
//             </div>

//             <div className="hidden lg:flex items-center space-x-6">
//               {leftLinks.map(link => <NavItem key={link.id} link={link} />)}
//             </div>
//           </div>

//           {/* RIGHT SECTION: Right Links + Button */}
//           <div className="flex items-center space-x-6">
//             <div className="hidden lg:flex items-center space-x-6">
//               {rightLinks.map(link => <NavItem key={link.id} link={link} />)}
//             </div>

//             <div className="hidden lg:block">
//               <Button
//                 onClick={() => navigate('/contact')}
//                 className="bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all shadow-lg shadow-blue-500/20"
//               >
//                 Get Started
//               </Button>
//             </div>

//             {/* Mobile Menu Button */}
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

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <div className="lg:hidden mt-4 bg-black/95 rounded-lg border border-purple-500/20 p-4 space-y-4">
//             {navLinks.map(link => (
//               <div key={link.id} onClick={() => handleNavigation(link.path)} className="text-white text-lg py-2 border-b border-gray-800 last:border-0">
//                 {link.title}
//               </div>
//             ))}
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// };

// export default Header;

// import React, { useState, useEffect } from 'react';
// import { Button } from '@/components/ui/button';
// import { Menu, X, Home, Package, Building, Settings, Users, Mail } from 'lucide-react';
// import { useLocation, useNavigate } from 'react-router-dom';

// const Header = () => {
//   const [activeLink, setActiveLink] = useState('home');
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate();

//   const navLinks = [
//     {
//       id: 'home',
//       title: 'Home',
//       path: '/',
//       icon: <Home className="h-4 w-4" />
//     },
//     {
//       id: 'products', title: 'Products', path: '/products', dropdown: [
//         { id: 'eduspace', title: 'EduSpace Portal', path: '/products/eduspace', status: 'live' },
//         { id: 'store', title: 'Mzatinova Store', path: '/products/store', status: 'soon' },
//         { id: 'zanga', title: 'Zanga Social', path: '/products/zanga', status: 'dev' },
//         { id: 'custom', title: 'Custom Solutions', path: '/products/custom' }
//       ]
//     },
//     {
//       id: 'industries', title: 'Industries', path: '/industries', dropdown: [
//         { id: 'education', title: 'Education', path: '/industries/education' },
//         { id: 'health', title: 'Health', path: '/industries/health' },
//         { id: 'finance', title: 'Finance', path: '/industries/finance' },
//         { id: 'agriculture', title: 'Agriculture', path: '/industries/agriculture' },
//         { id: 'retail', title: 'Retail', path: '/industries/retail' },
//         { id: 'ai-research', title: 'AI & Research', path: '/industries/ai-research' }
//       ]
//     },
//     {
//       id: 'services', title: 'Services', path: '/services', dropdown: [
//         { id: 'development', title: 'Software Development', path: '/services/development' },
//         { id: 'ai-solutions', title: 'AI Solutions', path: '/services/ai-solutions' },
//         { id: 'ecommerce', title: 'E-commerce Platforms', path: '/services/ecommerce' },
//         { id: 'integration', title: 'System Integration', path: '/services/integration' },
//         { id: 'design', title: 'UI/UX Design', path: '/services/design' },
//         { id: 'consultation', title: 'Technical Consultation', path: '/services/consultation' }
//       ]
//     },
//     { id: 'company', title: 'Company', path: '/company' },
//     { id: 'contact', title: 'Contact', path: '/contact' }
//   ];

//   // Logic to separate the links
//   const leftLinks = navLinks.filter(l => ['home', 'products', 'industries', 'services'].includes(l.id));
//   const rightLinks = navLinks.filter(l => ['company', 'contact'].includes(l.id));

//   const getStatusBadge = (status) => {
//     if (!status) return null;
//     const colors = {
//       live: 'bg-green-500/20 text-green-400',
//       soon: 'bg-yellow-500/20 text-yellow-400',
//       dev: 'bg-blue-500/20 text-blue-400'
//     };
//     return <span className={`text-xs ${colors[status]} px-2 py-1 rounded-full ml-2`}>{status.toUpperCase()}</span>;
//   };

//   const handleNavigation = (path) => {
//     setIsMobileMenuOpen(false);
//     navigate(path);
//   };

//   // Improved Hover Dropdown Component
//   const NavItem = ({ link }) => {
//     const [isHovered, setIsHovered] = useState(false);

//     return (
//       <div
//         className="relative group"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <button
//           onClick={() => handleNavigation(link.path)}
//           className={`relative py-2 text-white hover:text-blue-400 transition-colors duration-300 cursor-pointer ${location.pathname.startsWith(link.path) ? 'text-blue-400' : ''
//             }`}
//         >
//           {link.title}
//           <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform transition-transform duration-300 ${isHovered || location.pathname.startsWith(link.path) ? 'scale-x-100' : 'scale-x-0'
//             }`}></span>
//         </button>

//         {link.dropdown && (
//           <div className={`absolute top-full left-0 pt-2 z-50 transition-all duration-300 ${isHovered ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
//             }`}>
//             <div className="min-w-[220px] bg-black/95 backdrop-blur-md rounded-lg border border-purple-500/20 py-2 shadow-xl">
//               {link.dropdown.map((item) => (
//                 <div
//                   key={item.id}
//                   onClick={() => handleNavigation(item.path)}
//                   className="flex items-center justify-between px-4 py-3 text-sm text-white hover:text-blue-400 hover:bg-purple-500/10 transition-colors cursor-pointer"
//                 >
//                   <span>{item.title}</span>
//                   {getStatusBadge(item.status)}
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     );
//   };

//   return (
//     <header className="fixed top-0 w-full bg-black/80 backdrop-blur-lg z-50 border-b border-purple-500/20 shadow-lg">
//       <nav className="container mx-auto px-4 sm:px-6 py-3">
//         <div className="flex justify-between items-center">

//           {/* LEFT SECTION: Logo + Left Links */}
//           <div className="flex items-center space-x-10">
//             {/* ORIGINAL LOGO & TEXT RESTORED */}
//             <div
//               onClick={() => navigate('/')}
//               className="flex items-center space-x-2 cursor-pointer group"
//             >
//               <img
//                 src="/logo.png"
//                 alt="Mzatinova Logo"
//                 className="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
//               />
//               <div className="text-2xl md:text-3xl font-bold text-white">
//                 <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//                   Mzatinova
//                 </span>
//               </div>
//             </div>

//             <div className="hidden lg:flex items-center space-x-6">
//               {leftLinks.map(link => <NavItem key={link.id} link={link} />)}
//             </div>
//           </div>

//           {/* RIGHT SECTION: Right Links + Button */}
//           <div className="flex items-center space-x-6">
//             <div className="hidden lg:flex items-center space-x-6">
//               {rightLinks.map(link => <NavItem key={link.id} link={link} />)}
//             </div>

//             <div className="hidden lg:block">
//               <Button
//                 onClick={() => navigate('/contact')}
//                 className="bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all shadow-lg shadow-blue-500/20"
//               >
//                 Get Started
//               </Button>
//             </div>

//             {/* Mobile Menu Button */}
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

//         {/* Mobile Menu (simplified) */}
//         {isMobileMenuOpen && (
//           <div className="lg:hidden mt-4 bg-black/95 rounded-lg border border-purple-500/20 p-4 space-y-4">
//             {navLinks.map(link => (
//               <div key={link.id} onClick={() => handleNavigation(link.path)} className="text-white text-lg">
//                 {link.title}
//               </div>
//             ))}
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// };

// export default Header;
// import React, { useState, useEffect } from 'react';
// import { Button } from '@/components/ui/button';
// import { ChevronDown, Menu, X, Home, Package, Building, Settings, Users, Mail } from 'lucide-react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';

// const Header = () => {
//   const [isProductsOpen, setIsProductsOpen] = useState(false);
//   const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
//   const [isServicesOpen, setIsServicesOpen] = useState(false);
//   const [activeLink, setActiveLink] = useState('home');
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate();

//   // Updated navigation structure
//   const navLinks = [
//     {
//       id: 'home',
//       title: '',
//       path: '/',
//       icon: <Home className="h-4 w-4" />
//     },
//     {
//       id: 'products',
//       title: 'Products',
//       path: '/products',
//       icon: <Package className="h-4 w-4" />,
//       dropdown: [
//         { id: 'eduspace', title: 'EduSpace Portal', path: '/products/eduspace', status: 'live' },
//         { id: 'store', title: 'Mzatinova Store', path: '/products/store', status: 'soon' },
//         { id: 'zanga', title: 'Zanga Social', path: '/products/zanga', status: 'dev' },
//         { id: 'custom', title: 'Custom Solutions', path: '/products/custom' }
//       ]
//     },
//     {
//       id: 'industries',
//       title: 'Industries',
//       path: '/industries',
//       icon: <Building className="h-4 w-4" />,
//       dropdown: [
//         { id: 'education', title: 'Education', path: '/industries/education' },
//         { id: 'health', title: 'Health', path: '/industries/health' },
//         { id: 'finance', title: 'Finance', path: '/industries/finance' },
//         { id: 'agriculture', title: 'Agriculture', path: '/industries/agriculture' },
//         { id: 'retail', title: 'Retail', path: '/industries/retail' },
//         { id: 'ai-research', title: 'AI & Research', path: '/industries/ai-research' }
//       ]
//     },
//     {
//       id: 'services',
//       title: 'Services',
//       path: '/services',
//       icon: <Settings className="h-4 w-4" />,
//       dropdown: [
//         { id: 'development', title: 'Software Development', path: '/services/development' },
//         { id: 'ai-solutions', title: 'AI Solutions', path: '/services/ai-solutions' },
//         { id: 'ecommerce', title: 'E-commerce Platforms', path: '/services/ecommerce' },
//         { id: 'integration', title: 'System Integration', path: '/services/integration' },
//         { id: 'design', title: 'UI/UX Design', path: '/services/design' },
//         { id: 'consultation', title: 'Technical Consultation', path: '/services/consultation' }
//       ]
//     },
//     {
//       id: 'company',
//       title: 'Company',
//       path: '/company',
//       icon: <Users className="h-4 w-4" />
//     },
//     {
//       id: 'contact',
//       title: 'Contact',
//       path: '/contact',
//       icon: <Mail className="h-4 w-4" />
//     }
//   ];

//   // Get status badge
//   const getStatusBadge = (status?: string) => {
//     if (!status) return null;

//     switch (status) {
//       case 'live':
//         return <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full ml-2">LIVE</span>;
//       case 'soon':
//         return <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-full ml-2">SOON</span>;
//       case 'dev':
//         return <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full ml-2">DEV</span>;
//       default:
//         return null;
//     }
//   };

//   // Update active link based on current route
//   useEffect(() => {
//     const currentPath = location.pathname;

//     // Find active link by matching paths
//     const findActiveLink = () => {
//       // Check main nav links
//       for (const link of navLinks) {
//         if (currentPath === link.path) {
//           return link.id;
//         }
//         // Check dropdown items
//         if (link.dropdown) {
//           for (const item of link.dropdown) {
//             if (currentPath === item.path) {
//               return link.id; // Return parent ID for dropdown items
//             }
//           }
//         }
//       }

//       // Default to home if on root
//       if (currentPath === '/') {
//         return 'home';
//       }

//       return '';
//     };

//     setActiveLink(findActiveLink());
//   }, [location]);

//   // Handle navigation
//   const handleNavigation = (id: string, path: string) => {
//     setActiveLink(id);
//     setIsMobileMenuOpen(false);
//     setIsProductsOpen(false);
//     setIsIndustriesOpen(false);
//     setIsServicesOpen(false);

//     // For dropdown items, close parent dropdowns
//     if (path === '/') {
//       // Scroll to top if already on home
//       if (location.pathname === '/') {
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//       } else {
//         navigate(path);
//       }
//     } else {
//       navigate(path);
//     }
//   };

//   // Type definitions for DesktopDropdown props
//   interface DropdownItem {
//     id: string;
//     title: string;
//     path: string;
//     status?: string;
//   }

//   interface DesktopDropdownProps {
//     title: string;
//     items: DropdownItem[];
//     isOpen: boolean;
//     setIsOpen: (value: boolean) => void;
//     leftAlign?: boolean; // Made optional with default value
//   }

//   // Desktop Dropdown Component with proper typing
//   const DesktopDropdown: React.FC<DesktopDropdownProps> = ({
//     title,
//     items,
//     isOpen,
//     setIsOpen,
//     leftAlign = false // Default to false if not provided
//   }) => {
//     return (
//       <div className="relative">
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           onMouseEnter={() => setIsOpen(true)}
//           onMouseLeave={() => setTimeout(() => setIsOpen(false), 300)}
//           className={`relative flex items-center text-white hover:text-blue-400 transition-colors duration-300 group py-2 cursor-pointer ${activeLink === title.toLowerCase() ? 'text-blue-400' : ''
//             }`}
//         >
//           {title}
//           <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
//           <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
//         </button>

//         {isOpen && (
//           <div
//             onMouseEnter={() => setIsOpen(true)}
//             onMouseLeave={() => setTimeout(() => setIsOpen(false), 300)}
//             className={`absolute top-full mt-2 min-w-[220px] bg-black/95 backdrop-blur-md rounded-lg border border-purple-500/20 py-2 shadow-xl animate-fade-in-down z-50 ${leftAlign ? 'left-0' : 'right-0'
//               }`}
//           >
//             {items.map(item => (
//               <div
//                 key={item.id}
//                 onClick={() => handleNavigation(item.id, item.path)}
//                 className="flex items-center justify-between px-4 py-3 text-sm text-white hover:text-blue-400 hover:bg-purple-500/10 transition-colors cursor-pointer"
//               >
//                 <span>{item.title}</span>
//                 {getStatusBadge(item.status)}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     );
//   };

//   // For mobile menu links
//   interface MobileNavLinkProps {
//     id: string;
//     title: string;
//     path: string;
//     icon: React.ReactNode;
//     dropdown?: DropdownItem[];
//   }

//   const MobileNavLink: React.FC<MobileNavLinkProps> = ({ id, title, path, icon, dropdown }) => {
//     const [isExpanded, setIsExpanded] = useState(false);

//     return (
//       <div className="w-full">
//         <div
//           onClick={() => {
//             if (dropdown) {
//               setIsExpanded(!isExpanded);
//             } else {
//               handleNavigation(id, path);
//             }
//           }}
//           className={`flex items-center justify-between text-white text-lg py-3 px-4 cursor-pointer rounded-lg hover:bg-purple-500/10 transition-colors ${activeLink === id ? 'bg-purple-500/20 text-blue-400' : ''
//             }`}
//         >
//           <div className="flex items-center space-x-2">
//             {icon}
//             <span>{title}</span>
//           </div>
//           {dropdown && (
//             <ChevronDown className={`h-4 w-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
//           )}
//         </div>

//         {dropdown && isExpanded && (
//           <div className="ml-6 mt-1 space-y-1">
//             {dropdown.map(item => (
//               <div
//                 key={item.id}
//                 onClick={() => handleNavigation(item.id, item.path)}
//                 className="flex items-center justify-between text-gray-300 text-base py-2 px-4 cursor-pointer rounded-lg hover:bg-purple-500/5 transition-colors"
//               >
//                 <span>{item.title}</span>
//                 {getStatusBadge(item.status)}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     );
//   };

//   return (
//     <header className="fixed top-0 w-full bg-black/80 backdrop-blur-lg z-50 border-b border-purple-500/20 shadow-lg shadow-purple-500/5">
//       <nav className="container mx-auto px-4 sm:px-6 py-3">
//         <div className="flex justify-between items-center">
//           {/* Logo and Brand Name */}
//           <div
//             onClick={() => handleNavigation('home', '/')}
//             className="flex items-center space-x-2 cursor-pointer group"
//           >
//             <img
//               src="/logo.png"
//               alt="Mzatinova Logo"
//               className="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
//             />
//             <div className="text-2xl md:text-3xl font-bold text-white">
//               <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//                 Mzatinova
//               </span>
//             </div>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center space-x-6">
//             {navLinks.map(link => {
//               if (link.dropdown) {
//                 switch (link.id) {
//                   case 'products':
//                     return (
//                       <DesktopDropdown
//                         key={link.id}
//                         title={link.title}
//                         items={link.dropdown}
//                         isOpen={isProductsOpen}
//                         setIsOpen={setIsProductsOpen}
//                         leftAlign={true} // Products dropdown aligns left
//                       />
//                     );
//                   case 'industries':
//                     return (
//                       <DesktopDropdown
//                         key={link.id}
//                         title={link.title}
//                         items={link.dropdown}
//                         isOpen={isIndustriesOpen}
//                         setIsOpen={setIsIndustriesOpen}
//                         leftAlign={false} // Industries dropdown aligns right
//                       />
//                     );
//                   case 'services':
//                     return (
//                       <DesktopDropdown
//                         key={link.id}
//                         title={link.title}
//                         items={link.dropdown}
//                         isOpen={isServicesOpen}
//                         setIsOpen={setIsServicesOpen}
//                         leftAlign={false} // Services dropdown aligns right
//                       />
//                     );
//                   default:
//                     return null;
//                 }
//               } else {
//                 return (
//                   <div
//                     key={link.id}
//                     onClick={() => handleNavigation(link.id, link.path)}
//                     className={`relative text-white hover:text-blue-400 transition-colors duration-300 group py-2 cursor-pointer ${activeLink === link.id ? 'text-blue-400' : ''
//                       }`}
//                   >
//                     {link.title}
//                     <span
//                       className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out ${activeLink === link.id ? 'scale-x-100' : ''
//                         }`}
//                     ></span>
//                   </div>
//                 );
//               }
//             })}
//           </div>

//           {/* Call to Action Buttons - Desktop */}
//           <div className="hidden lg:flex items-center gap-4">
//             <Button
//               onClick={() => navigate('/contact')}
//               className="bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all shadow-lg shadow-blue-500/20"
//             >
//               Get Started
//             </Button>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="lg:hidden">
//             <button
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="text-white p-2 hover:bg-purple-500/10 rounded-lg transition-colors"
//             >
//               {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <div className="lg:hidden mt-4 bg-black/95 backdrop-blur-md rounded-lg p-2 animate-fade-in-down border border-purple-500/20">
//             <div className="flex flex-col space-y-1">
//               {navLinks.map(link => (
//                 <MobileNavLink
//                   key={link.id}
//                   id={link.id}
//                   title={link.title}
//                   path={link.path}
//                   icon={link.icon}
//                   dropdown={link.dropdown}
//                 />
//               ))}

//               {/* Mobile CTA */}
//               <div className="pt-4 px-4">
//                 <Button
//                   onClick={() => {
//                     handleNavigation('contact', '/contact');
//                   }}
//                   className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all"
//                 >
//                   Get Started
//                 </Button>
//               </div>
//             </div>
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// };

// export default Header;
// import React, { useState, useEffect } from 'react';
// import { Button } from '@/components/ui/button';
// import { ChevronDown, Menu, X } from 'lucide-react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';

// const Header = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [activeLink, setActiveLink] = useState('home');
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate();

//   const samePageSections = ['home', 'about', 'solutions', 'news', 'contact'];
//   const navLinks = [
//     { id: 'home', title: 'Home', path: '/' },
//     { id: 'about', title: 'About Us', path: '/#about' },
//     { id: 'solutions', title: 'Solutions', path: '/#solutions' },
//     { id: 'news', title: 'News', path: '/#news' },
//     { id: 'contact', title: 'Contact', path: '/#contact' },

//   ];

//   const branches = [
//     'Eduspace', 'Health', 'Agriculture', 'Finance', 'Store', 'Zanga Social App', 'AI', 'Labs'
//   ];

//   // Update active link based on current route or hash
//   useEffect(() => {
//     if (location.pathname === '/contact') {
//       setActiveLink('contact');
//       return;
//     }

//     if (location.pathname === '/support') {
//       setActiveLink('support');
//       return;
//     }

//     // Handle hash changes on home page
//     if (location.pathname === '/') {
//       const hash = location.hash.replace('#', '');
//       if (hash && samePageSections.includes(hash)) {
//         setActiveLink(hash);
//       } else {
//         setActiveLink('home');
//       }
//     }
//   }, [location]);

//   // Scroll detection for section highlighting
//   useEffect(() => {
//     if (location.pathname !== '/') return; // Only run on home page

//     const handleScroll = () => {
//       const scrollPosition = window.scrollY + 100;

//       // Get all sections
//       const sections = samePageSections.map(id => {
//         const element = document.getElementById(id);
//         return element ? { id, top: element.offsetTop, bottom: element.offsetTop + element.offsetHeight } : null;
//       }).filter(Boolean);

//       // Find the current section
//       let currentSection = 'home';
//       for (const section of sections) {
//         if (scrollPosition >= section.top && scrollPosition < section.bottom) {
//           currentSection = section.id;
//           break;
//         }
//       }

//       setActiveLink(currentSection);
//     };

//     // Add scroll listener
//     window.addEventListener('scroll', handleScroll);

//     // Initial check
//     handleScroll();

//     // Cleanup
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [location.pathname]);

//   // Handle navigation
//   // const handleNavigation = (id, path) => {
//   //   setActiveLink(id);
//   //   setIsMobileMenuOpen(false);
//   //   setIsDropdownOpen(false);

//   //   if (path === '/contact' || path === '/support') {
//   //     // Navigate to contact or support page
//   //     navigate(path);
//   //   } else if (path.startsWith('/#')) {
//   //     // Handle same page section navigation
//   //     if (location.pathname !== '/') {
//   //       // If we're not on home page, navigate to home first
//   //       navigate(path);
//   //     } else {
//   //       // If we're already on home page, scroll to section
//   //       const sectionId = path.replace('/#', '');
//   //       const element = document.getElementById(sectionId);
//   //       if (element) {
//   //         element.scrollIntoView({ behavior: 'smooth' });
//   //       }
//   //       // Update URL hash
//   //       window.history.pushState(null, '', path);
//   //     }
//   //   } else {
//   //     // For other navigations (like home)
//   //     navigate(path);
//   //   }
//   // };

//   // Replace it with this updated function
//   const handleNavigation = (id, path) => {
//     setActiveLink(id);
//     setIsMobileMenuOpen(false);
//     setIsDropdownOpen(false);

//     // This part for scrolling to sections remains the same
//     if (path.startsWith('/#')) {
//       if (location.pathname !== '/') {
//         navigate(path);
//       } else {
//         const sectionId = path.replace('/#', '');
//         const element = document.getElementById(sectionId);
//         if (element) {
//           element.scrollIntoView({ behavior: 'smooth' });
//         }
//         window.history.pushState(null, '', path);
//       }
//     } else {
//       // This is the new, corrected part for the Home link and other pages
//       if (path === '/' && location.pathname === '/') {
//         // If clicking "Home" while already on the home page, just scroll to the top
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//       } else {
//         // Otherwise, navigate to the new page (e.g., /contact, /support, or back to /)
//         navigate(path);
//       }
//     }
//   };

//   // For mobile menu links
//   const MobileNavLink = ({ id, title, path }) => (
//     <div
//       onClick={() => handleNavigation(id, path)}
//       className={`text-white text-lg py-2 cursor-pointer ${activeLink === id ? 'text-blue-400' : ''}`}
//     >
//       {title}
//     </div>
//   );

//   return (
//     <header className="fixed top-0 w-full bg-black/80 backdrop-blur-lg z-50 border-b border-purple-500/20 shadow-lg shadow-purple-500/5">
//       <nav className="container mx-auto px-4 sm:px-6 py-3">
//         <div className="flex justify-between items-center">
//           {/* Logo and Brand Name */}
//           <div
//             onClick={() => handleNavigation('home', '/')}
//             className="flex items-center space-x-2 cursor-pointer"
//           >
//             <img src="/logo.png" alt="Mzatinova Logo" className="w-10 h-10" />
//             <div className="text-2xl md:text-3xl font-bold text-white">
//               <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//                 Mzatinova
//               </span>
//             </div>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navLinks.map(link => (
//               <div
//                 key={link.id}
//                 onClick={() => handleNavigation(link.id, link.path)}
//                 className={`relative text-white hover:text-blue-400 transition-colors duration-300 group py-2 cursor-pointer ${activeLink === link.id ? 'text-blue-400' : ''
//                   }`}
//               >
//                 {link.title}
//                 <span
//                   className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out ${activeLink === link.id ? 'scale-x-100' : ''
//                     }`}
//                 ></span>
//               </div>
//             ))}

//             {/* Branches Dropdown */}
//             <div className="relative">
//               <button
//                 onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                 onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)}
//                 className="relative flex items-center text-white hover:text-blue-400 transition-colors duration-300 group py-2 cursor-pointer"
//               >
//                 Branches <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
//                 <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
//               </button>
//               {isDropdownOpen && (
//                 <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-black/95 backdrop-blur-md rounded-lg border border-purple-500/20 py-2 shadow-xl animate-fade-in-down">
//                   {branches.map((branch) => (
//                     <div
//                       key={branch}
//                       onClick={() => {
//                         const branchId = branch.toLowerCase().replace(/\s+/g, '-');
//                         handleNavigation(branchId, `/#${branchId}`);
//                       }}
//                       className="block px-4 py-2 text-sm text-white hover:text-blue-400 hover:bg-purple-500/10 transition-colors cursor-pointer"
//                     >
//                       {branch}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Support Link */}
//             <div
//               onClick={() => handleNavigation('support', '/support')}
//               className="relative text-white hover:text-blue-400 transition-colors duration-300 group py-2 cursor-pointer"
//             >
//               Support
//               <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
//             </div>
//           </div>

//           {/* Call to Action Buttons */}
//           <div className="hidden md:flex items-center gap-4">
//             <Button variant="outline" className="text-white border-purple-400 hover:bg-purple-500/20 hover:text-white transition-all">
//               Sign In
//             </Button>
//             <Button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all">
//               Get Started
//             </Button>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
//               {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <div className="md:hidden mt-4 bg-black/90 rounded-lg p-4 animate-fade-in-down">
//             <div className="flex flex-col space-y-4 items-center">
//               {navLinks.map(link => (
//                 <MobileNavLink key={link.id} id={link.id} title={link.title} path={link.path} />
//               ))}
//               <MobileNavLink id="support" title="Support" path="/support" />
//               <div className="flex gap-4 pt-4">
//                 <Button variant="outline" className="text-white border-purple-400 hover:bg-purple-500/20 hover:text-white transition-all">
//                   Sign In
//                 </Button>
//                 <Button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all">
//                   Get Started
//                 </Button>
//               </div>
//             </div>
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// };

// export default Header;

