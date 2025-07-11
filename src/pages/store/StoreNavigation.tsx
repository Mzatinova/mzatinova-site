import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Menu, X, Search, ChevronDown, ChevronUp, ShoppingCart, Heart, Bell, Flame, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';

interface NavigationProps {
  isOpen: boolean;
  onToggle: () => void;
  cartCount: number;
}

const StoreNavigation: React.FC<NavigationProps> = ({
  isOpen,
  onToggle,
  cartCount,
}) => {
  const location = useLocation();
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const exploreRef = useRef<HTMLDivElement>(null);

  // Common nav items for all pages
  const navItems = [
    { name: 'Institute', path: '/institute' },
    { name: 'Store', path: '/store' },
    { name: 'Studio', path: '/studio' },
    { name: 'Labs', path: '/labs' },
    { name: 'AI', path: '/ai' },
    { name: 'Support', path: '/support' }
  ];

  const recentlyViewed = [
    { name: 'iPhone 15 Pro Max' },
    { name: 'MacBook Pro 16"' },
    { name: 'Sony WH-1000XM5' }
  ];

  const popularNow = [
    { name: 'smartphones' },
    { name: 'laptops' },
    { name: 'headphones' }
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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-4">
          {/* Top Row with Logo, Nav Items, and Actions */}
          <div className="flex items-center justify-between h-16">
            {/* Logo - Always shows "Mzatinova" */}
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="/logo.png"
                alt="Mzatinova Logo"
                className="w-10 h-10 object-contain"
              />
              <h1 className="text-xl font-bold text-white hidden sm:inline">
                Mzatinova
              </h1>
            </Link>

            {/* Navigation Links with hover and active indicators */}
            <div className="hidden md:flex items-center space-x-8 mx-6">
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

            {/* Right Side Actions */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Search Icon (replaces search bar) */}
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-gray-800"
                onClick={() => setShowSearch(!showSearch)}
              >
                <Search className="h-5 w-5" />
              </Button>

              {/* Deals */}
              <Link to="/deals">
                <Button variant="outline" size="sm" className="text-red-400 border-red-400 hover:bg-red-900/30 hover:text-red-300">
                  <Flame className="h-4 w-4 mr-1" />
                  Deals
                </Button>
              </Link>

              {/* Wishlist */}
              <Link to="/wishlist">
                <Button variant="ghost" size="sm" className="text-white hover:bg-gray-800">
                  <Heart className="h-5 w-5" />
                </Button>
              </Link>

              {/* Notifications */}
              <Button variant="ghost" size="sm" className="relative text-white hover:bg-gray-800">
                <Bell className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 text-[10px] bg-blue-600 text-white">
                  3
                </Badge>
              </Button>

              {/* Profile Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="text-white hover:bg-gray-800">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-gray-800 border-gray-700 text-white">
                  <DropdownMenuItem className="hover:bg-gray-700 focus:bg-gray-700">My Profile</DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-gray-700 focus:bg-gray-700">Orders</DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-gray-700 focus:bg-gray-700">Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Cart */}
              <Button variant="ghost" size="sm" className="relative text-white hover:bg-gray-800">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-red-500 text-white text-xs">
                    {cartCount > 99 ? '99+' : cartCount}
                  </Badge>
                )}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-white hover:bg-gray-800"
              onClick={onToggle}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>

          {/* Toggleable Search Bar (appears below header) */}
          {showSearch && (
            <div className="py-3 border-t border-gray-800" ref={searchRef}>
              <div className={`flex items-center w-full rounded-lg border ${searchFocused ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-600'} bg-gray-800 px-4 py-2 shadow-sm transition-all`}>
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full outline-none text-sm text-white placeholder-gray-400 bg-transparent"
                  onFocus={() => setSearchFocused(true)}
                />
                <Search className="w-4 h-4 text-gray-400 ml-2" />
              </div>

              {searchFocused && (
                <div className="mt-2 bg-gray-800 rounded-lg shadow-lg border border-gray-700 py-2 z-50">
                  <div className="px-4 py-2">
                    <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Recently viewed:</h3>
                    {recentlyViewed.map((item, index) => (
                      <div key={index} className="flex items-center py-2 hover:bg-gray-700 cursor-pointer">
                        <div className="w-8 h-8 bg-gray-700 rounded-md flex items-center justify-center mr-3">
                          <Search className="w-4 h-4 text-gray-400" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white">{item.name}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-gray-700 px-4 py-2">
                    <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Popular searches</h3>
                    {popularNow.map((item, index) => (
                      <div key={index} className="flex items-center py-2 hover:bg-gray-700 cursor-pointer">
                        <div className="w-8 h-8 bg-gray-700 rounded-md flex items-center justify-center mr-3">
                          <Flame className="w-4 h-4 text-gray-400" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white capitalize">{item.name}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={onToggle} />
          <div className="fixed top-16 left-0 right-0 bg-gray-900 border-b border-gray-800 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              <div className="relative mb-4">
                <div className="flex items-center w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 shadow-sm">
                  <Search className="w-4 h-4 text-gray-400 mr-2" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full outline-none text-sm text-white placeholder-gray-400 bg-transparent"
                  />
                </div>
              </div>

              {/* Mobile Navigation Links with active indicators */}
              <div className="space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`relative block px-3 py-2 rounded-md text-sm font-medium ${location.pathname.startsWith(item.path)
                        ? 'bg-gray-800 text-white'
                        : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                      }`}
                    onClick={onToggle}
                  >
                    {item.name}
                    {location.pathname.startsWith(item.path) && (
                      <span className="absolute left-3 right-3 bottom-1 h-0.5 bg-blue-400 rounded-full"></span>
                    )}
                  </Link>
                ))}
              </div>

              <div className="pt-4 border-t border-gray-800 space-y-2">
                <Link to="/wishlist" className="block" onClick={onToggle}>
                  <Button variant="ghost" size="sm" className="w-full justify-start text-white hover:bg-gray-800">
                    <Heart className="w-4 h-4 mr-2 text-white" />
                    Wishlist
                  </Button>
                </Link>
                <Link to="/deals" className="block" onClick={onToggle}>
                  <Button variant="outline" size="sm" className="w-full justify-start text-red-400 border-red-400 hover:bg-red-900/30 hover:text-red-300">
                    <Flame className="w-4 h-4 mr-2" />
                    Deals
                  </Button>
                </Link>
                <Button variant="ghost" size="sm" className="w-full justify-start text-white hover:bg-gray-800">
                  <User className="w-4 h-4 mr-2" />
                  Account
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StoreNavigation;