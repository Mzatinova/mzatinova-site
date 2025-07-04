import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';


const smartfiURL = import.meta.env.VITE_SMARTFI_URL;

const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('');

  const handleComingSoonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    alert('This platform is coming soon!');
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Features', href: '#features' },
    { name: 'Demo', href: '#demo' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 100;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.querySelector(navItems[i].href) as HTMLElement;
        if (section && section.offsetTop <= scrollY) {
          setActiveSection(navItems[i].href);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/logo.png" alt="Mzatinova Logo" className="h-10 w-15 mr-2" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-gray-300 hover:text-white transition-colors duration-200 font-medium text-sm ${activeSection === item.href ? 'text-blue-400 underline underline-offset-4' : ''
                  }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
              Sign In
            </Button>
            <div className="relative inline-block group">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Explore
              </Button>
              <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-900 text-black dark:text-white border border-gray-700 rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                <ul className="py-2">
                  <li>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        alert('Mzatinova Eduspace is coming soon!');
                      }}
                      className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer text-gray-600"
                    >
                      Mzatinova Eduspace
                    </a>
                  </li>
                  <li>
                    <a
                      href={smartfiURL}
                      className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
                    >
                      Smartfielectronics
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        alert('Zanga Social is coming soon!');
                      }}
                      className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer text-gray-600"
                    >
                      Zanga Social
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-black border-gray-800">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`text-gray-300 hover:text-white transition-colors duration-200 font-medium text-lg ${activeSection === item.href ? 'text-blue-400 underline underline-offset-4' : ''
                        }`}
                    >
                      {item.name}
                    </a>
                  ))}
                  <div className="pt-4 space-y-2">
                    <Button variant="outline" className="w-full border-blue-400 text-blue-400">
                      Sign In
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
                          Explore
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="bg-white dark:bg-gray-900 text-black dark:text-white border border-gray-700">
                        <DropdownMenuItem asChild>
                          <a href="https://eduspace.mzatinova.com" target="_blank" className="w-full block px-2 py-1">
                            Mzatinova Eduspace
                          </a>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <a
                            href={smartfiURL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full block px-2 py-1 cursor-pointer"
                          >
                            Smartfielectronics
                          </a>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <a href="https://zanga.mzatinova.com" target="_blank" className="w-full block px-2 py-1">
                            Zanga Social
                          </a>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
