import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from './ui/dropdown-menu';

const smartfiURL = import.meta.env.VITE_SMARTFI_URL;

const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('');

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

          {/* LEFT: Hamburger + Logo */}
          <div className="flex items-center space-x-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white lg:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>

              {/* Drawer sliding from left */}
              <SheetContent side="left" className="bg-black border-gray-800 w-64">

                {/* Centered logo in drawer */}
                <div className="flex justify-center items-center py-4 border-b border-gray-700">
                  <img src="/logo.png" alt="Mzatinova Logo" className="h-10" />
                  <SheetClose asChild>
                    <button
                      aria-label="Close menu"
                      className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-red-500 focus:outline-none focus:ring-0 z-50"
                    >
                      ×
                    </button>
                  </SheetClose>
                </div>

                {/* Drawer navigation links */}
                <div className="flex flex-col mt-6 space-y-4">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`text-gray-300 hover:text-white transition-colors duration-200 font-medium text-lg px-4 ${activeSection === item.href ? 'text-blue-400 underline underline-offset-4' : ''
                        }`}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>

                {/* Drawer buttons */}
                <div className="pt-6 space-y-4 px-4">
                  <Button variant="outline" className="w-full border-blue-400 text-blue-400">
                    Sign In
                  </Button>

                  {/* Explore dropdown in drawer */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
                        Explore
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-white dark:bg-gray-900 text-black dark:text-white border border-gray-700">
                      <DropdownMenuItem asChild>
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            alert('Mzatinova Eduspace is coming soon!');
                          }}
                          className="w-full block px-2 py-1 cursor-pointer"
                        >
                          Mzatinova Eduspace
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a
                          href={smartfiURL}

                          className="w-full block px-2 py-1 cursor-pointer"
                        >
                          Smartfielectronics
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            alert('Zanga Social is coming soon!');
                          }}
                          className="w-full block px-2 py-1 cursor-pointer"
                        >
                          Zanga Social
                        </a>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </SheetContent>
            </Sheet>

            {/* Logo right next to hamburger */}
            <img src="/logo.png" alt="Mzatinova Logo" className="h-10" />
          </div>

          {/* CENTER: Desktop nav links */}
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

          {/* RIGHT: Desktop buttons */}
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

        </div>
      </div>
    </nav>
  );
};

export default Navigation;
