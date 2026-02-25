import React from 'react';
import { Facebook, Twitter, Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' }
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6">

        {/* MAIN FOOTER GRID: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* COLUMN 1: Brand & Mission */}
          <div className="flex flex-col">
            <div
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 cursor-pointer group mb-6"
            >
              <img
                src="/mzatinova-logo.png"
                alt="Mzatinova Logo"
                className="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
              />
              <div className="text-2xl font-bold text-white">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Mzatinova
                </span>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Building intelligent core engines that scale across any industry. Data intelligence and workflow automation, unified.
            </p>

            {/* Social Links */}
            <div className="flex space-x-3 mt-auto">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-700 hover:border-blue-500 hover:text-blue-400 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* COLUMN 2: Technology & Solutions */}
          <div>
            <h3 className="text-white font-semibold mb-6 tracking-wider text-sm uppercase">Technology</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/engines" className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  Core Engines
                </Link>
              </li>
              <li>
                <Link to="/labs" className="text-gray-400 hover:text-teal-400 transition-colors text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                  Mzatinova Labs
                </Link>
              </li>
            </ul>

            <h3 className="text-white font-semibold mt-8 mb-6 tracking-wider text-sm uppercase">Solutions</h3>
            <ul className="space-y-3">
              <li><Link to="/solutions/eduspace" className="text-gray-400 hover:text-white transition-colors text-sm">EduSpace</Link></li>
              <li><Link to="/solutions/healthspace" className="text-gray-400 hover:text-white transition-colors text-sm">HealthSpace</Link></li>
              <li><Link to="/solutions/agrispace" className="text-gray-400 hover:text-white transition-colors text-sm">AgriSpace</Link></li>
              <li><Link to="/solutions/finspace" className="text-gray-400 hover:text-white transition-colors text-sm">FinSpace</Link></li>
              <li><Link to="/solutions/tradepace" className="text-gray-400 hover:text-white transition-colors text-sm">TradeSpace</Link></li>
            </ul>
          </div>

          {/* COLUMN 3: Company (Moved from Header) */}
          <div>
            <h3 className="text-white font-semibold mb-6 tracking-wider text-sm uppercase">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/company/about" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link to="/company/mission" className="text-gray-400 hover:text-white transition-colors text-sm">Mission & Values</Link></li>
              <li><Link to="/company/careers" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2">
                Careers <span className="text-[10px] bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full">WE'RE HIRING</span>
              </Link></li>
              <li><Link to="/company/news" className="text-gray-400 hover:text-white transition-colors text-sm">News & Updates</Link></li>
              <li><Link to="/community/blog" className="text-gray-400 hover:text-white transition-colors text-sm">Blog</Link></li>
              <li><Link to="/community/partners" className="text-gray-400 hover:text-white transition-colors text-sm">Partner Program</Link></li>
            </ul>
          </div>

          {/* COLUMN 4: Contact & Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-6 tracking-wider text-sm uppercase">Connect</h3>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gray-500 mt-0.5" />
                <a href="mailto:info@mzatinova.com" className="text-gray-400 hover:text-white text-sm">info@mzatinova.com</a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gray-500 mt-0.5" />
                <span className="text-gray-400 text-sm">+265 (0) 888 44 71 22</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-500 mt-0.5" />
                <span className="text-gray-400 text-sm">Blantyre, Malawi</span>
              </div>
            </div>

            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
              <h4 className="text-white font-medium mb-2 text-sm">Stay Updated</h4>
              <p className="text-gray-400 text-xs mb-3">Get the latest news on our engine developments.</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 text-sm"
                />
                <button className="px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors text-sm font-medium">
                  →
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR: Copyright & Badges */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">

          <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Mzatinova. All rights reserved.</p>
            <div className="hidden md:block w-1 h-1 bg-gray-700 rounded-full"></div>
            <div className="flex items-center gap-4">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex items-center gap-3">
            <div className="px-3 py-1 bg-slate-800/50 border border-slate-700 rounded-full text-xs text-gray-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              All Systems Operational
            </div>
            <div className="px-3 py-1 bg-slate-800/50 border border-slate-700 rounded-full text-xs text-gray-400">
              🌍 Built in Malawi
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;


// import React from 'react';
// import { Facebook, Twitter, Linkedin, Github, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
// import { Link, useNavigate } from 'react-router-dom';

// const Footer: React.FC = () => {
//   const navigate = useNavigate();

//   const socialLinks = [
//     { icon: Facebook, href: '#', label: 'Facebook' },
//     { icon: Twitter, href: '#', label: 'Twitter' },
//     { icon: Linkedin, href: '#', label: 'LinkedIn' },
//     { icon: Github, href: '#', label: 'GitHub' }
//   ];

//   return (
//     <footer className="bg-slate-900 border-t border-slate-800">
//       <div className="container mx-auto px-6 py-12">
//         {/* Main Footer Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

//           {/* Brand Column - 3 cols */}
//           <div className="lg:col-span-3">
//             <div
//               onClick={() => navigate('/')}
//               className="flex items-center space-x-2 cursor-pointer group mb-4"
//             >
//               <img
//                 src="/mzatinova-logo.png"
//                 alt="Mzatinova Logo"
//                 className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
//               />
//               <div className="text-2xl md:text-2xl font-bold text-white">
//                 <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//                   Mzatinova
//                 </span>
//               </div>
//             </div>

//             <div className="mb-4">
//               <span className="text-blue-400 font-semibold">Data Intelligence</span>
//               <span className="text-gray-400"> + </span>
//               <span className="text-purple-400 font-semibold">Workflow Automation</span>
//             </div>

//             <p className="text-gray-300 mb-6 text-lg">One engine. Any industry. Infinite.</p>

//             {/* Social Links */}
//             <div className="flex space-x-3 mb-8">
//               {socialLinks.map((social) => {
//                 const IconComponent = social.icon;
//                 return (
//                   <a
//                     key={social.label}
//                     href={social.href}
//                     className="w-10 h-10 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 transition-all duration-300"
//                     aria-label={social.label}
//                   >
//                     <IconComponent className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
//                   </a>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Our Engines - 3 cols */}
//           <div className="lg:col-span-3">
//             <h3 className="text-white font-semibold mb-6 text-lg border-b border-slate-700 pb-2">OUR ENGINES</h3>
//             <ul className="space-y-4">
//               <li>
//                 <div className="text-blue-400 font-medium">📊 Data Intelligence Engine</div>
//                 <p className="text-gray-400 text-sm mt-1">Ingests, indexes, and learns from any data</p>
//               </li>
//               <li>
//                 <div className="text-purple-400 font-medium">⚙️ Workflow Automation Platform</div>
//                 <p className="text-gray-400 text-sm mt-1">Triggers actions, generates documents, connects to SMS/WhatsApp</p>
//               </li>
//             </ul>

//             {/* Innovation */}
//             <div className="mt-8">
//               <h4 className="text-white font-semibold mb-3 text-md border-b border-slate-700 pb-2">INNOVATION</h4>
//               <div className="flex items-start gap-2">
//                 <span className="text-2xl">🔬</span>
//                 <div>
//                   <div className="text-teal-400 font-medium">Mzatinova Labs</div>
//                   <p className="text-gray-400 text-sm">AI Research + Development</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Industry Applications - 3 cols */}
//           <div className="lg:col-span-3">
//             <h3 className="text-white font-semibold mb-6 text-lg border-b border-slate-700 pb-2">INDUSTRY APPLICATIONS</h3>
//             <ul className="space-y-3">
//               <li className="flex items-center justify-between">
//                 <span className="text-gray-300">EduSpace (Education)</span>
//                 <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">LIVE</span>
//               </li>
//               <li className="flex items-center justify-between">
//                 <span className="text-gray-300">HealthSpace (Healthcare)</span>
//                 <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-0.5 rounded-full">COMING 2026</span>
//               </li>
//               <li className="flex items-center justify-between">
//                 <span className="text-gray-300">AgriSpace (Agriculture)</span>
//                 <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full">PLANNED</span>
//               </li>
//               <li className="flex items-center justify-between">
//                 <span className="text-gray-300">FinSpace (Finance)</span>
//                 <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full">PLANNED</span>
//               </li>
//               <li className="flex items-center justify-between">
//                 <span className="text-gray-300">TradeSpace (Commerce)</span>
//                 <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full">PLANNED</span>
//               </li>
//               <li className="flex items-center justify-between">
//                 <span className="text-gray-300">Mzatinova Store (Retail)</span>
//                 <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-0.5 rounded-full">COMING SOON</span>
//               </li>
//             </ul>
//           </div>

//           {/* Contact & Quick Links - 3 cols */}
//           <div className="lg:col-span-3">
//             <h3 className="text-white font-semibold mb-6 text-lg border-b border-slate-700 pb-2">CONTACT</h3>
//             <div className="space-y-4 mb-6">
//               <div className="flex items-start">
//                 <Mail className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
//                 <div>
//                   <div className="text-gray-300">info@mzatinova.com</div>
//                 </div>
//               </div>

//               <div className="flex items-start">
//                 <Phone className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
//                 <div>
//                   <div className="text-gray-300">+265 (0) 888 44 71 22</div>
//                 </div>
//               </div>

//               <div className="flex items-start">
//                 <MapPin className="w-5 h-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" />
//                 <div>
//                   <div className="text-gray-300">Malawi, Africa</div>
//                 </div>
//               </div>
//             </div>

//             <h4 className="text-white font-semibold mb-3 text-md border-b border-slate-700 pb-2">QUICK LINKS</h4>
//             <div className="grid grid-cols-2 gap-2 mb-6">
//               <Link to="/engines" className="text-gray-400 hover:text-blue-400 text-sm">Our Engines</Link>
//               <Link to="/applications" className="text-gray-400 hover:text-blue-400 text-sm">Applications</Link>
//               <Link to="/labs" className="text-gray-400 hover:text-blue-400 text-sm">Mzatinova Labs</Link>
//               <Link to="/company" className="text-gray-400 hover:text-blue-400 text-sm">Company</Link>
//               <Link to="/contact" className="text-gray-400 hover:text-blue-400 text-sm">Contact</Link>
//             </div>

//             {/* Newsletter */}
//             <div>
//               <h4 className="text-white font-semibold mb-2 text-sm">Stay Updated</h4>
//               <div className="flex gap-2">
//                 <input
//                   type="email"
//                   placeholder="Your email"
//                   className="flex-1 px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 text-sm"
//                 />
//                 <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition-opacity text-sm whitespace-nowrap">
//                   Subscribe
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-slate-700 mt-12 pt-8">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//             <p className="text-gray-400 text-sm">
//               © {new Date().getFullYear()} Mzatinova. All rights reserved.
//             </p>

//             <div className="flex items-center gap-6">
//               <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
//                 Privacy
//               </Link>
//               <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
//                 Terms
//               </Link>
//               <span className="text-gray-400 text-sm">
//                 Made with ❤️ in Malawi
//               </span>
//             </div>
//           </div>

//           {/* Trust Badges */}
//           <div className="flex flex-wrap gap-4 justify-center mt-6">
//             <div className="px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-full text-xs text-gray-400">
//               🔒 SSL Secured
//             </div>
//             <div className="px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-full text-xs text-gray-400">
//               🌍 Built in Malawi · Ready for the world
//             </div>
//             <div className="px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-full text-xs text-gray-400">
//               ⚙️ One engine. Any industry.
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


// import React from 'react';
// import { Facebook, Twitter, Linkedin, Github, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
// import { Link, useNavigate } from 'react-router-dom';

// const Footer: React.FC = () => {
//   const navigate = useNavigate();
//   const quickLinks = [
//     { name: 'Products', path: '/products' },
//     { name: 'Industries', path: '/industries' },
//     { name: 'Services', path: '/services' },
//     { name: 'Company', path: '/company' },
//     { name: 'Contact', path: '/contact' }
//   ];

//   const ourProducts = [
//     { name: 'EduSpace Portal', path: '/products/eduspace', status: 'LIVE' },
//     { name: 'Mzatinova Store', path: '/products/store', status: 'COMING SOON' },
//     { name: 'Zanga Social', path: '/products/zanga', status: 'IN DEVELOPMENT' },
//     { name: 'Custom Solutions', path: '/products/custom', status: 'AVAILABLE' }
//   ];

//   const socialLinks = [
//     { icon: Facebook, href: '#', label: 'Facebook' },
//     { icon: Twitter, href: '#', label: 'Twitter' },
//     { icon: Linkedin, href: '#', label: 'LinkedIn' },
//     { icon: Github, href: '#', label: 'GitHub' }
//   ];

//   const getStatusBadge = (status: string) => {
//     switch (status) {
//       case 'LIVE':
//         return <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full ml-2">LIVE</span>;
//       case 'COMING SOON':
//         return <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-0.5 rounded-full ml-2">SOON</span>;
//       case 'IN DEVELOPMENT':
//         return <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full ml-2">DEV</span>;
//       case 'AVAILABLE':
//         return <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-0.5 rounded-full ml-2">AVAILABLE</span>;
//       default:
//         return null;
//     }
//   };

//   return (
//     <footer className="bg-slate-900 border-t border-slate-800">
//       <div className="container mx-auto px-6 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Brand & Social */}
//           <div>

//             {/* <div className="text-2xl font-bold text-white mb-4">

//               <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//                 Mzatinova
//               </span>
//             </div> */}
//             <div
//               onClick={() => navigate('/')}
//               className="flex items-center space-x-2 cursor-pointer group"
//             >
//               <img
//                 src="/mzatinova-logo.png"
//                 alt="Mzatinova Logo"
//                 className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
//               />
//               <div className="text-2xl md:text-2xl font-bold text-white">
//                 <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//                   Mzatinova
//                 </span>
//               </div>
//             </div>



//             <div className="mb-6">
//               <span>Modern Software. </span>
//               <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
//                 Built Right.
//               </span>
//             </div>


//             {/* Social Links */}
//             <div className="flex space-x-3 mb-8">
//               {socialLinks.map((social) => {
//                 const IconComponent = social.icon;
//                 return (
//                   <a
//                     key={social.label}
//                     href={social.href}
//                     className="w-10 h-10 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 transition-all duration-300"
//                     aria-label={social.label}
//                   >
//                     <IconComponent className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
//                   </a>
//                 );
//               })}
//             </div>

//             {/* Newsletter Signup */}
//             <div className="mb-8">
//               <h4 className="text-white font-semibold mb-3">Stay Updated</h4>
//               <div className="flex gap-2">
//                 <input
//                   type="email"
//                   placeholder="Your email"
//                   className="flex-1 px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 text-sm"
//                 />
//                 <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition-opacity text-sm">
//                   Subscribe
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-white font-semibold mb-6 text-lg">QUICK LINKS</h3>
//             <ul className="space-y-3">
//               {quickLinks.map((link) => (
//                 <li key={link.name}>
//                   <Link
//                     to={link.path}
//                     className="flex items-center text-gray-300 hover:text-blue-400 transition-colors group"
//                   >
//                     <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>

//             {/* Additional Links */}
//             <div className="mt-8 pt-6 border-t border-slate-700">
//               <ul className="space-y-2">
//                 <li>
//                   <Link to="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
//                     Privacy Policy
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
//                     Terms of Service
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/support" className="text-sm text-gray-400 hover:text-white transition-colors">
//                     Support Center
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* Our Products */}
//           <div>
//             <h3 className="text-white font-semibold mb-6 text-lg">OUR PRODUCTS</h3>
//             <ul className="space-y-3">
//               {ourProducts.map((product) => (
//                 <li key={product.name}>
//                   <Link
//                     to={product.path}
//                     className="flex items-center justify-between text-gray-300 hover:text-white transition-colors group"
//                   >
//                     <div className="flex items-center">
//                       <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 mr-3"></div>
//                       <span className="group-hover:text-blue-300 transition-colors">{product.name}</span>
//                     </div>
//                     {getStatusBadge(product.status)}
//                   </Link>
//                 </li>
//               ))}
//             </ul>

//             {/* View All Products */}
//             <div className="mt-8">
//               <Link to="/products">
//                 <button className="w-full py-2.5 border border-slate-700 text-gray-300 rounded-lg hover:border-blue-500 hover:text-blue-400 transition-colors text-sm">
//                   View All Products
//                 </button>
//               </Link>
//             </div>
//           </div>

//           {/* Contact */}
//           <div>
//             <h3 className="text-white font-semibold mb-6 text-lg">CONTACT</h3>
//             <div className="space-y-4">
//               <div className="flex items-start">
//                 <Mail className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
//                 <div>
//                   <div className="text-gray-300">info@mzatinova.com</div>
//                   <div className="text-gray-400 text-sm mt-1">General inquiries</div>
//                 </div>
//               </div>

//               <div className="flex items-start">
//                 <Phone className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
//                 <div>
//                   <div className="text-gray-300">+265 (0) 888 44 71 22</div>
//                   <div className="text-gray-400 text-sm mt-1">Business hours</div>
//                 </div>
//               </div>

//               <div className="flex items-start">
//                 <MapPin className="w-5 h-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" />
//                 <div>
//                   <div className="text-gray-300">Global Headquarters</div>
//                   <div className="text-gray-400 text-sm mt-1">Malawi, Africa</div>
//                 </div>
//               </div>
//             </div>

//             {/* Business Hours */}
//             <div className="mt-8 pt-6 border-t border-slate-700">
//               <h4 className="text-white font-semibold mb-2 text-sm">Business Hours</h4>
//               <p className="text-gray-400 text-sm">
//                 Mon - Fri: 8:00 AM - 6:00 PM<br />
//                 Sat: 9:00 AM - 1:00 PM<br />
//                 Sun: Closed
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-slate-700 mt-12 pt-8">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//             <p className="text-gray-400 text-sm">
//               © {new Date().getFullYear()} Mzatinova. All rights reserved.
//             </p>

//             <div className="flex items-center gap-6">
//               <Link to="/sitemap" className="text-gray-400 hover:text-white text-sm transition-colors">
//                 Sitemap
//               </Link>
//               <Link to="/accessibility" className="text-gray-400 hover:text-white text-sm transition-colors">
//                 Accessibility
//               </Link>
//               <span className="text-gray-400 text-sm">
//                 Made with ❤️ in Malawi
//               </span>
//             </div>
//           </div>

//           {/* Trust Badges */}
//           <div className="flex flex-wrap gap-4 justify-center mt-6">
//             <div className="px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-full text-xs text-gray-400">
//               🔒 SSL Secured
//             </div>
//             <div className="px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-full text-xs text-gray-400">
//               🌍 Global Service
//             </div>
//             <div className="px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-full text-xs text-gray-400">
//               ⭐ Quality Guaranteed
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


// import React from 'react';
// import { Facebook, Twitter, Linkedin, Github, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const Footer: React.FC = () => {
//   const quickLinks = [
//     { name: 'Products', path: '/products' },
//     { name: 'Industries', path: '/industries' },
//     { name: 'Services', path: '/services' },
//     { name: 'Company', path: '/company' },
//     { name: 'Contact', path: '/contact' }
//   ];

//   const ourProducts = [
//     { name: 'EduSpace Portal', path: '/products/eduspace', status: 'LIVE' },
//     { name: 'Mzatinova Store', path: '/products/store', status: 'COMING SOON' },
//     { name: 'Zanga Social', path: '/products/zanga', status: 'IN DEVELOPMENT' },
//     { name: 'Custom Solutions', path: '/products/custom', status: 'AVAILABLE' }
//   ];

//   const socialLinks = [
//     { icon: Facebook, href: '#', label: 'Facebook' },
//     { icon: Twitter, href: '#', label: 'Twitter' },
//     { icon: Linkedin, href: '#', label: 'LinkedIn' },
//     { icon: Github, href: '#', label: 'GitHub' }
//   ];

//   const getStatusBadge = (status: string) => {
//     switch (status) {
//       case 'LIVE':
//         return <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full ml-2">LIVE</span>;
//       case 'COMING SOON':
//         return <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-0.5 rounded-full ml-2">SOON</span>;
//       case 'IN DEVELOPMENT':
//         return <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full ml-2">DEV</span>;
//       case 'AVAILABLE':
//         return <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-0.5 rounded-full ml-2">AVAILABLE</span>;
//       default:
//         return null;
//     }
//   };

//   return (
//     <footer className="bg-black border-t border-purple-500/20">
//       <div className="container mx-auto px-6 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Brand & Social */}
//           <div>
//             <div className="text-2xl font-bold text-white mb-4">
//               <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//                 Mzatinova
//               </span>
//             </div>
//             <p className="text-gray-300 mb-6">
//               Building the future with integrated software solutions across industries.
//             </p>

//             {/* Social Links */}
//             <div className="flex space-x-3 mb-8">
//               {socialLinks.map((social) => {
//                 const IconComponent = social.icon;
//                 return (
//                   <a
//                     key={social.label}
//                     href={social.href}
//                     className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 transition-all duration-300"
//                     aria-label={social.label}
//                   >
//                     <IconComponent className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
//                   </a>
//                 );
//               })}
//             </div>

//             {/* Newsletter Signup */}
//             <div className="mb-8">
//               <h4 className="text-white font-semibold mb-3">Stay Updated</h4>
//               <div className="flex gap-2">
//                 <input
//                   type="email"
//                   placeholder="Your email"
//                   className="flex-1 px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 text-sm"
//                 />
//                 <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition-opacity text-sm">
//                   Subscribe
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-white font-semibold mb-6 text-lg">QUICK LINKS</h3>
//             <ul className="space-y-3">
//               {quickLinks.map((link) => (
//                 <li key={link.name}>
//                   <Link
//                     to={link.path}
//                     className="flex items-center text-gray-300 hover:text-blue-400 transition-colors group"
//                   >
//                     <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>

//             {/* Additional Links */}
//             <div className="mt-8 pt-6 border-t border-gray-800">
//               <ul className="space-y-2">
//                 <li>
//                   <Link to="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
//                     Privacy Policy
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
//                     Terms of Service
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/support" className="text-sm text-gray-400 hover:text-white transition-colors">
//                     Support Center
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* Our Products */}
//           <div>
//             <h3 className="text-white font-semibold mb-6 text-lg">OUR PRODUCTS</h3>
//             <ul className="space-y-3">
//               {ourProducts.map((product) => (
//                 <li key={product.name}>
//                   <Link
//                     to={product.path}
//                     className="flex items-center justify-between text-gray-300 hover:text-white transition-colors group"
//                   >
//                     <div className="flex items-center">
//                       <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 mr-3"></div>
//                       <span className="group-hover:text-blue-300 transition-colors">{product.name}</span>
//                     </div>
//                     {getStatusBadge(product.status)}
//                   </Link>
//                 </li>
//               ))}
//             </ul>

//             {/* View All Products */}
//             <div className="mt-8">
//               <Link to="/products">
//                 <button className="w-full py-2.5 border border-gray-800 text-gray-300 rounded-lg hover:border-blue-500 hover:text-blue-400 transition-colors text-sm">
//                   View All Products
//                 </button>
//               </Link>
//             </div>
//           </div>

//           {/* Contact */}
//           <div>
//             <h3 className="text-white font-semibold mb-6 text-lg">CONTACT</h3>
//             <div className="space-y-4">
//               <div className="flex items-start">
//                 <Mail className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
//                 <div>
//                   <div className="text-gray-300">info@mzatinova.com</div>
//                   <div className="text-gray-400 text-sm mt-1">General inquiries</div>
//                 </div>
//               </div>

//               <div className="flex items-start">
//                 <Phone className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
//                 <div>
//                   <div className="text-gray-300">+265 (0) 888 44 71 22</div>
//                   <div className="text-gray-400 text-sm mt-1">Business hours</div>
//                 </div>
//               </div>

//               <div className="flex items-start">
//                 <MapPin className="w-5 h-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" />
//                 <div>
//                   <div className="text-gray-300">Global Headquarters</div>
//                   <div className="text-gray-400 text-sm mt-1">Malawi, Africa</div>
//                 </div>
//               </div>
//             </div>

//             {/* Business Hours */}
//             <div className="mt-8 pt-6 border-t border-gray-800">
//               <h4 className="text-white font-semibold mb-2 text-sm">Business Hours</h4>
//               <p className="text-gray-400 text-sm">
//                 Mon - Fri: 8:00 AM - 6:00 PM<br />
//                 Sat: 9:00 AM - 1:00 PM<br />
//                 Sun: Closed
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-gray-800 mt-12 pt-8">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//             <p className="text-gray-400 text-sm">
//               © {new Date().getFullYear()} Mzatinova. All rights reserved.
//             </p>

//             <div className="flex items-center gap-6">
//               <Link to="/sitemap" className="text-gray-400 hover:text-white text-sm transition-colors">
//                 Sitemap
//               </Link>
//               <Link to="/accessibility" className="text-gray-400 hover:text-white text-sm transition-colors">
//                 Accessibility
//               </Link>
//               <span className="text-gray-400 text-sm">
//                 Made with ❤️ in Malawi
//               </span>
//             </div>
//           </div>

//           {/* Trust Badges */}
//           <div className="flex flex-wrap gap-4 justify-center mt-6">
//             <div className="px-3 py-1.5 bg-gray-900 rounded-full text-xs text-gray-400 border border-gray-800">
//               🔒 SSL Secured
//             </div>
//             <div className="px-3 py-1.5 bg-gray-900 rounded-full text-xs text-gray-400 border border-gray-800">
//               🌍 Global Service
//             </div>
//             <div className="px-3 py-1.5 bg-gray-900 rounded-full text-xs text-gray-400 border border-gray-800">
//               ⭐ Quality Guaranteed
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;