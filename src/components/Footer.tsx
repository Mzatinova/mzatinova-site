import React from 'react';
import { Facebook, Twitter, Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const solutions = [
    'Artificial Intelligence', 'Cloud Computing', 'Web & Mobile App Development', 'Enterprise Solutions', 'Digital Platforms', 'Cybersecurity', 'Consultancy & Strategy', 'Business Intelligence & Analytics', 'Project Management'
  ];
  const branches = [
    'Eduspace', 'Health', 'Agriculture', 'Finance', 'Store', 'Zanga Social', 'AI', 'Labs'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' }
  ];

  return (
    <footer className="bg-black border-t border-purple-500/20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Mzatinova
              </span>
            </div>
            <p className="text-gray-300 mb-4">
              Shaping the future with innovative technology solutions across multiple industries.
            </p>
            <div className="flex space-x-4 mb-8">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a key={social.label} href={social.href}
                    className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
                    <IconComponent className="w-5 h-5 text-white" />
                  </a>
                );
              })}
            </div>
            {/* Contact Info */}
            <div>
              <h3 className="text-white font-semibold mb-4">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <Mail className="w-5 h-5 mr-3 text-blue-400" />
                  info@mzatinova.com
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone className="w-5 h-5 mr-3 text-blue-400" />
                  +265 (0) 888 44 71 22
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-5 h-5 mr-3 text-blue-400" />
                  Global Headquarters
                </div>
              </div>
            </div>
          </div>

          {/* solutions */}
          <div>
            <h3 className="text-white font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              {solutions.map((branch) => (
                <li key={branch}>
                  <a href={`#${branch.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-300 hover:text-blue-400 transition-colors">
                    {branch}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Branches */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Branches</h3>
            <ul className="space-y-2">
              {branches.map((branch) => (
                <li key={branch}>
                  <a href={`#${branch.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-300 hover:text-blue-400 transition-colors">
                    {branch}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">Support</a></li>
              <li><a href="#news" className="text-gray-300 hover:text-blue-400 transition-colors">News</a></li>
              <li><a href="#careers" className="text-gray-300 hover:text-blue-400 transition-colors">Careers</a></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>


        </div>

        <div className="border-t border-purple-500/20 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Mzatinova. All rights reserved. | Privacy Policy | Terms of Service
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;