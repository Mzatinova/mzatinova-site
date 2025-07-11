import React from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from './ui/dropdown-menu';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const location = useLocation();

  // Common nav items for all pages
  const navItems = [
    { name: 'Institute', path: '/institute' },
    { name: 'Store', path: '/store' },
    { name: 'Studio', path: '/studio' },
    { name: 'Labs', path: '/labs' },
    { name: 'AI', path: '/ai' },
    { name: 'Support', path: '/support' }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* LEFT: Hamburger + Logo (ALWAYS shows "Mzatinova") */}
          <div className="flex items-center space-x-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white lg:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>

              <SheetContent side="left" className="bg-black border-gray-800 w-64">
                <div className="flex justify-center items-center py-4 border-b border-gray-700">
                  <Link to="/" className="flex items-center">
                    <img src="/logo.png" alt="Mzatinova Logo" className="h-10" />
                    <span className="ml-2 text-white text-xl font-bold">Mzatinova</span>
                  </Link>
                  <SheetClose asChild>
                    <button className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-red-500">
                      ×
                    </button>
                  </SheetClose>
                </div>

                <div className="flex flex-col mt-6 space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`relative px-4 py-2 text-lg font-medium transition-colors duration-200 ${location.pathname.startsWith(item.path)
                          ? 'text-white' // Active link
                          : 'text-gray-300 hover:text-white' // Inactive link
                        }`}
                    >
                      {item.name}
                      {location.pathname.startsWith(item.path) && (
                        <span className="absolute left-4 right-4 bottom-1 h-0.5 bg-blue-400 rounded-full"></span>
                      )}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>

            {/* Logo with FIXED "Mzatinova" text (no dynamic changes) */}
            <Link to="/" className="flex items-center">
              <img src="/logo.png" alt="Mzatinova Logo" className="h-10" />
              <span className="ml-2 text-white text-xl font-bold hidden sm:inline">
                Mzatinova
              </span>
            </Link>
          </div>

          {/* CENTER: Nav links with hover and active indicators */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative pb-2 text-sm font-medium transition-colors duration-200 ${location.pathname.startsWith(item.path)
                    ? 'text-blue-400' // Active link color
                    : 'text-gray-300 hover:text-white' // Inactive/hover color
                  } group`}
              >
                {item.name}
                {/* Active underline (permanent for current page) */}
                {location.pathname.startsWith(item.path) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 rounded-full"></span>
                )}
                {/* Hover underline (appears on hover for inactive links) */}
                {!location.pathname.startsWith(item.path) && (
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white rounded-full transition-all duration-300 group-hover:w-full"></span>
                )}
              </Link>
            ))}
          </div>

          {/* RIGHT: Action buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
              Sign In
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Explore
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white dark:bg-gray-900 text-black dark:text-white border border-gray-700">
                {navItems.slice(0, 3).map((item) => (
                  <DropdownMenuItem key={item.path} asChild>
                    <Link to={item.path} className="w-full block px-2 py-1 cursor-pointer">
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;