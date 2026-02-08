import React from 'react';
import { Facebook, Twitter, Linkedin, Github, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const quickLinks = [
    { name: 'Products', path: '/products' },
    { name: 'Industries', path: '/industries' },
    { name: 'Services', path: '/services' },
    { name: 'Company', path: '/company' },
    { name: 'Contact', path: '/contact' }
  ];

  const ourProducts = [
    { name: 'EduSpace Portal', path: '/products/eduspace', status: 'LIVE' },
    { name: 'Mzatinova Store', path: '/products/store', status: 'COMING SOON' },
    { name: 'Zanga Social', path: '/products/zanga', status: 'IN DEVELOPMENT' },
    { name: 'Custom Solutions', path: '/products/custom', status: 'AVAILABLE' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'LIVE':
        return <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full ml-2">LIVE</span>;
      case 'COMING SOON':
        return <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-0.5 rounded-full ml-2">SOON</span>;
      case 'IN DEVELOPMENT':
        return <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full ml-2">DEV</span>;
      case 'AVAILABLE':
        return <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-0.5 rounded-full ml-2">AVAILABLE</span>;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Social */}
          <div>

            {/* <div className="text-2xl font-bold text-white mb-4">

              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Mzatinova
              </span>
            </div> */}
            <div
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 cursor-pointer group"
            >
              <img
                src="/mzatinova-logo.png"
                alt="Mzatinova Logo"
                className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
              />
              <div className="text-2xl md:text-2xl font-bold text-white">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Mzatinova
                </span>
              </div>
            </div>



            <div className="mb-6">
              <span>Modern Software. </span>
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
                Built Right.
              </span>
            </div>


            {/* Social Links */}
            <div className="flex space-x-3 mb-8">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>

            {/* Newsletter Signup */}
            <div className="mb-8">
              <h4 className="text-white font-semibold mb-3">Stay Updated</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 text-sm"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition-opacity text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">QUICK LINKS</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="flex items-center text-gray-300 hover:text-blue-400 transition-colors group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Additional Links */}
            <div className="mt-8 pt-6 border-t border-slate-700">
              <ul className="space-y-2">
                <li>
                  <Link to="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/support" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Support Center
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Our Products */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">OUR PRODUCTS</h3>
            <ul className="space-y-3">
              {ourProducts.map((product) => (
                <li key={product.name}>
                  <Link
                    to={product.path}
                    className="flex items-center justify-between text-gray-300 hover:text-white transition-colors group"
                  >
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 mr-3"></div>
                      <span className="group-hover:text-blue-300 transition-colors">{product.name}</span>
                    </div>
                    {getStatusBadge(product.status)}
                  </Link>
                </li>
              ))}
            </ul>

            {/* View All Products */}
            <div className="mt-8">
              <Link to="/products">
                <button className="w-full py-2.5 border border-slate-700 text-gray-300 rounded-lg hover:border-blue-500 hover:text-blue-400 transition-colors text-sm">
                  View All Products
                </button>
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">CONTACT</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-gray-300">info@mzatinova.com</div>
                  <div className="text-gray-400 text-sm mt-1">General inquiries</div>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-gray-300">+265 (0) 888 44 71 22</div>
                  <div className="text-gray-400 text-sm mt-1">Business hours</div>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-gray-300">Global Headquarters</div>
                  <div className="text-gray-400 text-sm mt-1">Malawi, Africa</div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-8 pt-6 border-t border-slate-700">
              <h4 className="text-white font-semibold mb-2 text-sm">Business Hours</h4>
              <p className="text-gray-400 text-sm">
                Mon - Fri: 8:00 AM - 6:00 PM<br />
                Sat: 9:00 AM - 1:00 PM<br />
                Sun: Closed
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Mzatinova. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              <Link to="/sitemap" className="text-gray-400 hover:text-white text-sm transition-colors">
                Sitemap
              </Link>
              <Link to="/accessibility" className="text-gray-400 hover:text-white text-sm transition-colors">
                Accessibility
              </Link>
              <span className="text-gray-400 text-sm">
                Made with ❤️ in Malawi
              </span>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-4 justify-center mt-6">
            <div className="px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-full text-xs text-gray-400">
              🔒 SSL Secured
            </div>
            <div className="px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-full text-xs text-gray-400">
              🌍 Global Service
            </div>
            <div className="px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-full text-xs text-gray-400">
              ⭐ Quality Guaranteed
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