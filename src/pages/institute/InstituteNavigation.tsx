import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Menu, X, BookOpen, Code, Smartphone, Laptop, Trophy, User, Search, ChevronDown, ChevronUp } from 'lucide-react';
// import HeroSection from './HeroSection';
// import { SignUpModal } from './SignUpModal';
// import { LoginModal } from './LoginModal';
// import { LoginModal } from './LogInModal';
// import { LoginModal } from './LoginModal';

interface NavigationProps {
    isOpen: boolean;
    onToggle: () => void;
}

const InstituteNavigation: React.FC<NavigationProps> = ({ isOpen, onToggle }) => {
    const [isSignUpOpen, setIsSignUpOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [searchVisible, setSearchVisible] = useState(false);
    const [searchFocused, setSearchFocused] = useState(false);
    const [exploreOpen, setExploreOpen] = useState(false);
    const searchRef = useRef<HTMLDivElement>(null);
    const exploreRef = useRef<HTMLDivElement>(null);

    // Navigation items
    const navItems = [
        // { name: 'Home', icon: HeroSection, href: '#hero' },
        { name: 'Learning Paths', icon: BookOpen, href: '#learning' },
        { name: 'AI Builder', icon: Code, href: '#ai-builder' },
        { name: 'Device Loans', icon: Laptop, href: '#devices' },
        { name: 'Certifications', icon: Trophy, href: '#certs' }
    ];

    const recentlyViewed = [
        { name: 'Meta Front-End Developer', provider: 'Meta' },
        { name: 'Meta Back-End Developer', provider: 'Meta' },
        { name: 'DeepLearning.AI TensorFlow Developer', provider: 'DeepLearning.AI' }
    ];

    const popularNow = [
        { name: 'machine learning' },
        { name: 'artificial intelligence' },
        { name: 'ai for everyone' }
    ];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setSearchFocused(false);
            }
            if (exploreRef.current && !exploreRef.current.contains(event.target as Node)) {
                setExploreOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    return (
        <>
            {/* Desktop Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
                <div className="container mx-auto px-4">
                    {/* Top Row with Logo, Nav Items, and Actions */}
                    <div className="flex items-center justify-between h-16">
                        {/* Logo - Split into two lines */}
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                                <Code className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">Mzatinova</span>
                                <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">Digital Institute</span>
                            </div>
                        </div>

                        {/* Navigation Items */}
                        <div className="hidden md:flex items-center space-x-6 mx-6">
                            {navItems.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    className="flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                                >
                                    <item.icon className="w-4 h-4 mr-2" />
                                    {item.name}
                                </a>
                            ))}
                        </div>

                        {/* Right Side Actions */}
                        <div className="hidden md:flex items-center space-x-4">
                            {/* Search Icon */}
                            <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-full"
                                onClick={() => {
                                    setSearchVisible(!searchVisible);
                                    setSearchFocused(false);
                                }}
                            >
                                <Search className="w-5 h-5 text-gray-600" />
                            </Button>

                            {/* Explore Button */}
                            <div className="relative" ref={exploreRef}>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="flex items-center whitespace-nowrap"
                                    onClick={() => setExploreOpen(!exploreOpen)}
                                >
                                    Explore
                                    {exploreOpen ? <ChevronUp className="w-4 h-4 ml-1" /> : <ChevronDown className="w-4 h-4 ml-1" />}
                                </Button>
                            </div>

                            <Button variant="ghost" size="sm"
                                onClick={() => setIsLoginOpen(true)}
                            >
                                <User className="w-4 h-4 mr-2" />
                                Sign In
                            </Button>
                            <Button variant="ghost" size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600"
                                onClick={() => setIsSignUpOpen(true)}
                            >

                                Sign Up
                            </Button>
                        </div>

                        {/* Mobile Menu Button */}
                        <Button
                            variant="ghost"
                            size="sm"
                            className="md:hidden"
                            onClick={onToggle}
                        >
                            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </Button>
                    </div>

                    {/* Search Bar (appears below when activated) */}
                    {searchVisible && (
                        <div className="pb-4 flex justify-center" ref={searchRef}>
                            <div className="w-full max-w-xl"> {/* Changed from max-w-md to max-w-xl to make search bar longer */}
                                <div
                                    className={`flex items-center w-full rounded-lg border ${searchFocused ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-300'} bg-white px-4 py-2 shadow-sm transition-all`}
                                    onClick={() => setSearchFocused(true)}
                                >
                                    <input
                                        type="text"
                                        placeholder="What do you want to learn?"
                                        className="w-full outline-none text-sm text-gray-700 placeholder-gray-400"
                                        onFocus={() => setSearchFocused(true)}
                                    />
                                    <Search className="w-4 h-4 text-gray-400 ml-2" />
                                </div>

                                {searchFocused && (
                                    <div className="absolute mt-1 w-full max-w-xl bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"> {/* Added absolute positioning */}
                                        <div className="px-4 py-2">
                                            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Recently viewed:</h3>
                                            {recentlyViewed.map((item, index) => (
                                                <div key={index} className="flex items-center py-2 hover:bg-gray-50 cursor-pointer">
                                                    <div className="w-8 h-8 bg-gray-100 rounded-md flex items-center justify-center mr-3">
                                                        <BookOpen className="w-4 h-4 text-gray-500" />
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-medium text-gray-900">{item.name}</p>
                                                        <p className="text-xs text-gray-500">{item.provider}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="border-t border-gray-200 px-4 py-2">
                                            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Popular right now</h3>
                                            {popularNow.map((item, index) => (
                                                <div key={index} className="flex items-center py-2 hover:bg-gray-50 cursor-pointer">
                                                    <div className="w-8 h-8 bg-gray-100 rounded-md flex items-center justify-center mr-3">
                                                        <Trophy className="w-4 h-4 text-gray-500" />
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-medium text-gray-900 capitalize">{item.name}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="border-t border-gray-200 px-4 py-2">
                                            <div className="flex items-center justify-between py-2 hover:bg-gray-50 cursor-pointer">
                                                <p className="text-sm font-medium text-gray-700">Not sure where to start?</p>
                                                <Button variant="outline" size="sm" className="ml-2">
                                                    Take short quiz <ChevronDown className="w-4 h-4 ml-1" />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="fixed inset-0 z-40 md:hidden">
                    <div className="fixed inset-0 bg-black/50" onClick={onToggle} />
                    <div className="fixed top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
                        <div className="px-4 py-6 space-y-4">
                            <div className="relative mb-4">
                                <div className="flex items-center w-full rounded-lg border border-gray-300 bg-white px-4 py-2 shadow-sm">
                                    <Search className="w-4 h-4 text-gray-400 mr-2" />
                                    <input
                                        type="text"
                                        placeholder="What do you want to learn?"
                                        className="w-full outline-none text-sm text-gray-700 placeholder-gray-400"
                                    />
                                </div>
                            </div>

                            {/* Mobile Navigation Items */}
                            <div className="space-y-2">
                                {navItems.map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.href}
                                        className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
                                    >
                                        <item.icon className="w-4 h-4 mr-3" />
                                        {item.name}
                                    </a>
                                ))}
                            </div>

                            <div className="pt-4 border-t border-gray-200 space-y-2">
                                <Button variant="ghost" size="sm" className="w-full justify-start"
                                    onClick={() => setIsLoginOpen(true)}
                                >
                                    <User className="w-4 h-4 mr-2" />
                                    Sign In
                                </Button>
                                <Button size="sm" className="w-full bg-gradient-to-r from-blue-600 to-purple-600"
                                    onClick={() => {
                                        onToggle(); // Close mobile menu
                                        setIsSignUpOpen(true);
                                    }}
                                >
                                    Sign Up
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {/* <SignUpModal isOpen={isSignUpOpen} onClose={() => setIsSignUpOpen(false)} />
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} /> */}
        </>
    );
};

export default InstituteNavigation;