// import Link from 'next/link';
import { Code, Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from '@radix-ui/react-navigation-menu';

export const Footer = () => {
    const footerLinks = [
        {
            title: 'Learning Paths',
            links: [
                { name: 'Computer Users', href: '/institute#computer-users' },
                { name: 'Developers', href: '/institute#developers' },
                { name: 'Certifications', href: '/institute#certifications' },
                { name: 'Device Loans', href: '/institute#device-loans' }
            ]
        },
        {
            title: 'Resources',
            links: [
                { name: 'Documentation', href: '/docs' },
                { name: 'Tutorials', href: '/tutorials' },
                { name: 'Blog', href: '/blog' },
                { name: 'Community', href: '/community' }
            ]
        },
        {
            title: 'Company',
            links: [
                { name: 'About Us', href: '/about' },
                { name: 'Careers', href: '/careers' },
                { name: 'Contact', href: '/contact' },
                { name: 'Privacy Policy', href: '/privacy' }
            ]
        }
    ];

    const socialLinks = [
        { icon: <Github className="h-5 w-5" />, href: 'https://github.com' },
        { icon: <Twitter className="h-5 w-5" />, href: 'https://twitter.com' },
        { icon: <Linkedin className="h-5 w-5" />, href: 'https://linkedin.com' },
        { icon: <Mail className="h-5 w-5" />, href: 'mailto:info@digitalskills.org' }
    ];

    return (
        <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo and description */}
                    <div className="md:col-span-1">
                        <div className="flex items-center space-x-2 mb-4">
                            <Code className="h-6 w-6 text-blue-400" />
                            <span className="font-bold text-lg text-white">DigitalSkills</span>
                        </div>
                        <p className="text-sm mb-4">
                            Empowering individuals with digital skills for the modern world.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social, index) => (
                                <Link
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    {social.icon}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Footer links */}
                    {footerLinks.map((column, index) => (
                        <div key={index} className="mt-4 md:mt-0">
                            <h3 className="text-white font-semibold mb-4">{column.title}</h3>
                            <ul className="space-y-2">
                                {column.links.map((link, i) => (
                                    <li key={i}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-gray-400 hover:text-white transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
                        <p className="text-sm text-gray-400 mb-4">
                            Subscribe to our newsletter for the latest updates.
                        </p>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="px-4 py-2 rounded-l-md bg-gray-800 text-white text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                            />
                            <Button
                                variant="default"
                                size="sm"
                                className="rounded-l-none bg-blue-600 hover:bg-blue-500"
                            >
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Bottom copyright */}
                <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-gray-400">
                        © {new Date().getFullYear()} DigitalSkills Institute. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/terms" className="text-sm text-gray-400 hover:text-white">
                            Terms of Service
                        </Link>
                        <Link href="/privacy" className="text-sm text-gray-400 hover:text-white">
                            Privacy Policy
                        </Link>
                        <Link href="/cookies" className="text-sm text-gray-400 hover:text-white">
                            Cookie Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};