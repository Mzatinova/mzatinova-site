import React from 'react';
// import Link from 'next/link';
import { Code, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from '@radix-ui/react-navigation-menu';

const Navbar = ({ active }: { active: string }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    const links = [
        { name: 'Studio', path: '/studio' },
        { name: 'Labs', path: '/labs' },
        { name: 'AI', path: '/ai' },
        { name: 'Store', path: '/store' },
        { name: 'Institute', path: '/institute' }
    ];

    return (
        <nav className="bg-gray-900 border-b border-gray-800">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <Code className="h-8 w-8 text-red-500" />
                        <span className="text-xl font-bold text-white">Mzatinova</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                href={link.path}
                                className={`text-sm font-medium transition-colors hover:text-red-400 ${active === link.name.toLowerCase() ? 'text-red-500' : 'text-gray-300'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-900/30">
                            Contact Us
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? (
                                <X className="h-6 w-6 text-gray-300" />
                            ) : (
                                <Menu className="h-6 w-6 text-gray-300" />
                            )}
                        </Button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 space-y-4">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                href={link.path}
                                className={`block px-3 py-2 rounded-md text-base font-medium ${active === link.name.toLowerCase()
                                    ? 'bg-gray-800 text-red-500'
                                    : 'text-gray-300 hover:bg-gray-800'
                                    }`}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="px-3 pt-2">
                            <Button className="w-full bg-red-600 hover:bg-red-500">
                                Contact Us
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;