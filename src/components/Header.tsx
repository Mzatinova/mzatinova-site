import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const samePageSections = ['home', 'about', 'solutions', 'news'];
  const navLinks = [
    { id: 'home', title: 'Home', path: '/' },
    { id: 'about', title: 'About Us', path: '/#about' },
    { id: 'solutions', title: 'Solutions', path: '/#solutions' },
    { id: 'news', title: 'News', path: '/#news' },
    { id: 'contact', title: 'Contact', path: '/#contact' },

  ];

  const branches = [
    'Eduspace', 'Health', 'Agriculture', 'Finance', 'Store', 'Zanga Social App', 'AI'
  ];

  // Update active link based on current route or hash
  useEffect(() => {
    if (location.pathname === '/contact') {
      setActiveLink('contact');
      return;
    }

    if (location.pathname === '/support') {
      setActiveLink('support');
      return;
    }

    // Handle hash changes on home page
    if (location.pathname === '/') {
      const hash = location.hash.replace('#', '');
      if (hash && samePageSections.includes(hash)) {
        setActiveLink(hash);
      } else {
        setActiveLink('home');
      }
    }
  }, [location]);

  // Scroll detection for section highlighting
  useEffect(() => {
    if (location.pathname !== '/') return; // Only run on home page

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      // Get all sections
      const sections = samePageSections.map(id => {
        const element = document.getElementById(id);
        return element ? { id, top: element.offsetTop, bottom: element.offsetTop + element.offsetHeight } : null;
      }).filter(Boolean);

      // Find the current section
      let currentSection = 'home';
      for (const section of sections) {
        if (scrollPosition >= section.top && scrollPosition < section.bottom) {
          currentSection = section.id;
          break;
        }
      }

      setActiveLink(currentSection);
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);

    // Initial check
    handleScroll();

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Handle navigation
  const handleNavigation = (id, path) => {
    setActiveLink(id);
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);

    if (path === '/contact' || path === '/support') {
      // Navigate to contact or support page
      navigate(path);
    } else if (path.startsWith('/#')) {
      // Handle same page section navigation
      if (location.pathname !== '/') {
        // If we're not on home page, navigate to home first
        navigate(path);
      } else {
        // If we're already on home page, scroll to section
        const sectionId = path.replace('/#', '');
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        // Update URL hash
        window.history.pushState(null, '', path);
      }
    } else {
      // For other navigations (like home)
      navigate(path);
    }
  };

  // For mobile menu links
  const MobileNavLink = ({ id, title, path }) => (
    <div
      onClick={() => handleNavigation(id, path)}
      className={`text-white text-lg py-2 cursor-pointer ${activeLink === id ? 'text-blue-400' : ''}`}
    >
      {title}
    </div>
  );

  return (
    <header className="fixed top-0 w-full bg-black/80 backdrop-blur-lg z-50 border-b border-purple-500/20 shadow-lg shadow-purple-500/5">
      <nav className="container mx-auto px-4 sm:px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logo and Brand Name */}
          <div
            onClick={() => handleNavigation('home', '/')}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <img src="/logo.png" alt="Mzatinova Logo" className="w-10 h-10" />
            <div className="text-2xl md:text-3xl font-bold text-white">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Mzatinova
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <div
                key={link.id}
                onClick={() => handleNavigation(link.id, link.path)}
                className={`relative text-white hover:text-blue-400 transition-colors duration-300 group py-2 cursor-pointer ${activeLink === link.id ? 'text-blue-400' : ''
                  }`}
              >
                {link.title}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out ${activeLink === link.id ? 'scale-x-100' : ''
                    }`}
                ></span>
              </div>
            ))}

            {/* Branches Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)}
                className="relative flex items-center text-white hover:text-blue-400 transition-colors duration-300 group py-2 cursor-pointer"
              >
                Branches <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
              </button>
              {isDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-black/95 backdrop-blur-md rounded-lg border border-purple-500/20 py-2 shadow-xl animate-fade-in-down">
                  {branches.map((branch) => (
                    <div
                      key={branch}
                      onClick={() => {
                        const branchId = branch.toLowerCase().replace(/\s+/g, '-');
                        handleNavigation(branchId, `/#${branchId}`);
                      }}
                      className="block px-4 py-2 text-sm text-white hover:text-blue-400 hover:bg-purple-500/10 transition-colors cursor-pointer"
                    >
                      {branch}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Support Link */}
            <div
              onClick={() => handleNavigation('support', '/support')}
              className="relative text-white hover:text-blue-400 transition-colors duration-300 group py-2 cursor-pointer"
            >
              Support
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" className="text-white border-purple-400 hover:bg-purple-500/20 hover:text-white transition-all">
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-black/90 rounded-lg p-4 animate-fade-in-down">
            <div className="flex flex-col space-y-4 items-center">
              {navLinks.map(link => (
                <MobileNavLink key={link.id} id={link.id} title={link.title} path={link.path} />
              ))}
              <MobileNavLink id="support" title="Support" path="/support" />
              <div className="flex gap-4 pt-4">
                <Button variant="outline" className="text-white border-purple-400 hover:bg-purple-500/20 hover:text-white transition-all">
                  Sign In
                </Button>
                <Button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;


// import React from 'react'; // Assuming you have this component
// import { Button } from '@/components/ui/button'; // Assuming you have this component
// import { ChevronDown, Menu, X } from 'lucide-react'; // Added Menu and X for mobile
// import { Link } from 'react-router-dom';

// // Mock Button component if you don't have one from shadcn/ui
// // const Button = ({ variant, className, children }) => (
// //   <button className={`${className} ${variant === 'outline' ? 'border' : ''} px-4 py-2 rounded-md`}>
// //     {children}
// //   </button>
// // );

// const Header = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
//   const [activeLink, setActiveLink] = React.useState('home');
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

//   const navLinks = [
//     { id: 'home', title: 'Home' },
//     { id: 'about', title: 'About Us' },
//     // Branches is handled separately
//     { id: 'solutions', title: 'Solutions' },
//     { id: 'news', title: 'News' },
//     { id: 'contact', title: 'Contact' },
//   ];

//   const branches = [
//     'Eduspace', 'Health', 'Agriculture', 'Finance', 'Store', 'Zanga Social App', 'AI'
//   ];

//   // This effect handles the scroll detection
//   React.useEffect(() => {
//     const handleScroll = () => {
//       const sections = navLinks.map(link => document.getElementById(link.id));
//       const scrollPosition = window.scrollY + 150; // Offset for better accuracy

//       for (let i = sections.length - 1; i >= 0; i--) {
//         const section = sections[i];
//         if (section && section.offsetTop <= scrollPosition) {
//           setActiveLink(section.id);
//           break;
//         }
//       }
//     };

//     // Add event listener when the component mounts
//     window.addEventListener('scroll', handleScroll);

//     // Clean up the event listener when the component unmounts
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [navLinks]); // Rerun effect if navLinks change

//   const handleLinkClick = (id) => {
//     setActiveLink(id);
//     setIsMobileMenuOpen(false); // Close mobile menu on click
//     const element = document.getElementById(id);
//     if (element) {
//       // Smooth scroll to the section
//       window.scrollTo({
//         top: element.offsetTop - 80, // Adjust offset for fixed header
//         behavior: 'smooth',
//       });
//     }
//   };

//   const NavLink = ({ id, title }) => (
//     <a
//       href={`#${id}`}
//       onClick={(e) => {
//         e.preventDefault();
//         handleLinkClick(id);
//       }}
//       className="relative text-white hover:text-blue-400 transition-colors duration-300 group py-2"
//     >
//       {title}
//       <span
//         className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out ${activeLink === id ? 'scale-x-100' : ''
//           }`}
//       ></span>
//     </a>
//   );

//   return (
//     <header className="fixed top-0 w-full bg-black/80 backdrop-blur-lg z-50 border-b border-purple-500/20 shadow-lg shadow-purple-500/5">
//       <nav className="container mx-auto px-4 sm:px-6 py-3">
//         <div className="flex justify-between items-center">
//           {/* Logo and Brand Name */}
//           <Link to="/" className="flex items-center space-x-2">
//             <img src="/logo.png" alt="Mzatinova Logo" className="w-10 h-10" />
//             <div className="text-2xl md:text-3xl font-bold text-white">
//               <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//                 Mzatinova
//               </span>
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navLinks.map(link => <NavLink key={link.id} {...link} />)}

//             {/* Branches Dropdown */}
//             <div className="relative">
//               <button
//                 onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                 onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)} // Close on blur
//                 className="relative flex items-center text-white hover:text-blue-400 transition-colors duration-300 group py-2"
//               >
//                 Branches <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
//                 <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
//               </button>
//               {isDropdownOpen && (
//                 <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-black/95 backdrop-blur-md rounded-lg border border-purple-500/20 py-2 shadow-xl animate-fade-in-down">
//                   {branches.map((branch) => (
//                     <a
//                       key={branch}
//                       href={`#${branch.toLowerCase().replace(/\s+/g, '-')}`}
//                       onClick={() => setIsDropdownOpen(false)}
//                       className="block px-4 py-2 text-sm text-white hover:text-blue-400 hover:bg-purple-500/10 transition-colors"
//                     >
//                       {branch}
//                     </a>
//                   ))}
//                 </div>
//               )}
//             </div>
//             {/* Support Link (External) */}
//             <a href="/support" className="relative text-white hover:text-blue-400 transition-colors duration-300 group py-2">
//               Support
//               <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
//             </a>
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
//               {navLinks.map(link => <NavLink key={link.id} {...link} />)}
//               <a href="/support" className="text-white">Support</a>
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


// import React, { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { ChevronDown } from 'lucide-react';

// const Header: React.FC = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const branches = [
//     'Eduspace', 'Health', 'Agriculture', 'Finance', 'Store', 'Zanga Social App', 'AI'
//   ];

//   return (
//     <header className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-purple-500/20">
//       <nav className="container mx-auto px-6 py-4">
//         <div className="flex justify-between">
//           <div className="flex items-center justify-start">
//             <img src="/logo.png" alt="Mzatinova Logo" className="w-10 h-10" />

//             <div className="text-3xl font-bold text-white ml-2">

//               <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//                 Mzatinova
//               </span>
//             </div>
//           </div>

//           <div className="hidden md:flex items-center space-x-8">
//             <a href="#home" className="text-white hover:text-blue-400 transition-colors">Home</a>


//             <div className="relative">
//               <button
//                 onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                 className="flex items-center text-white hover:text-blue-400 transition-colors"
//               >
//                 Branches <ChevronDown className="ml-1 h-4 w-4" />
//               </button>

//               {isDropdownOpen && (
//                 <div className="absolute top-full left-0 mt-2 w-48 bg-black/95 backdrop-blur-md rounded-lg border border-purple-500/20 py-2">
//                   {branches.map((branch) => (
//                     <a key={branch} href={`#${branch.toLowerCase().replace(' ', '-')}`}
//                       className="block px-4 py-2 text-white hover:text-blue-400 hover:bg-purple-500/10 transition-colors">
//                       {branch}
//                     </a>
//                   ))}
//                 </div>
//               )}
//             </div>
//             <a href="#about" className="text-white hover:text-blue-400 transition-colors">About Us</a>
//             <a href="#solutions" className="text-white hover:text-blue-400 transition-colors">Solutions</a>
//             <a href="#news" className="text-white hover:text-blue-400 transition-colors">News</a>
//             <a href="#contact" className="text-white hover:text-blue-400 transition-colors">Contact</a>
//             <a href="#solutions" className="text-white hover:text-blue-400 transition-colors">Support </a>
//           </div>

//           <div className="flex gap-4">
//             <Button variant="outline" className="text-white border-purple-400 hover:bg-purple-500/20">
//               Sign In
//             </Button>
//             <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
//               Get Started
//             </Button>
//           </div>

//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;