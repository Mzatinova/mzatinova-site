import React from 'react';
// import Link from 'next/link';
import { Code, Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { Link } from '@radix-ui/react-navigation-menu';

const Footer = () => {
    const sections = [
        {
            title: 'Products',
            links: [
                { name: 'Studio', href: '/studio' },
                { name: 'Labs', href: '/labs' },
                { name: 'AI', href: '/ai' },
                { name: 'Store', href: '/store' },
                { name: 'Institute', href: '/institute' }
            ]
        },
        {
            title: 'Resources',
            links: [
                { name: 'Documentation', href: '/docs' },
                { name: 'API Reference', href: '/api' },
                { name: 'Blog', href: '/blog' },
                { name: 'Support', href: '/support' }
            ]
        },
        {
            title: 'Company',
            links: [
                { name: 'About', href: '/about' },
                { name: 'Careers', href: '/careers' },
                { name: 'Contact', href: '/contact' },
                { name: 'Press', href: '/press' }
            ]
        }
    ];

    return (
        <footer className="bg-gray-900 border-t border-gray-800">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <Code className="h-8 w-8 text-red-500" />
                            <span className="text-xl font-bold text-white">Mzatinova</span>
                        </div>
                        <p className="text-gray-400 text-sm">
                            Building the future through innovative technology solutions.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-red-500">
                                <Github className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-red-500">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-red-500">
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-red-500">
                                <Mail className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Section Links */}
                    {sections.map((section) => (
                        <div key={section.title} className="space-y-4">
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
                                {section.title}
                            </h3>
                            <ul className="space-y-2">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-400 hover:text-red-500 text-sm transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Newsletter */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
                            Subscribe to our newsletter
                        </h3>
                        <p className="text-gray-400 text-sm">
                            The latest news, articles, and resources, sent to your inbox weekly.
                        </p>
                        <div className="flex space-x-2">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="flex-grow px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-1 focus:ring-red-500 text-sm text-white"
                            />
                            <button className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded-md text-sm">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} Mzatinova. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="text-gray-400 hover:text-red-500 text-sm">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-gray-400 hover:text-red-500 text-sm">
                            Terms of Service
                        </Link>
                        <Link href="/cookies" className="text-gray-400 hover:text-red-500 text-sm">
                            Cookie Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;