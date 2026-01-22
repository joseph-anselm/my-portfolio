import React, { useState, useEffect } from 'react';
import { MessageSquare, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
  { label: 'Services', href: '/services' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const currentPath = router.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href) => {
    if (href === '/') {
      return currentPath === href;
    }
    return currentPath.startsWith(href);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
            <Link href="/" className="cursor-pointer">
              <img
                src="/images/logo1.png"   // your bold logo image
                alt="Joseph Anselm Logo"
                className="h-10 w-auto object-contain hover:scale-105 transition-transform"
              />
            </Link>


        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1 bg-gray-100/50 p-1.5 rounded-full border border-gray-200">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                isActive(item.href)
                ? 'bg-gray-900 text-white shadow-md' 
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Link href="/contact" className="hidden md:flex p-2.5 bg-white border border-gray-200 rounded-full text-gray-700 hover:text-blue-600 hover:border-blue-100 hover:bg-blue-50 transition-all shadow-sm">
            <MessageSquare size={20} />
          </Link>
          <div className="hidden md:block w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-md ring-1 ring-gray-100">
            <img src="https://picsum.photos/seed/joseph/100/100" alt="Profile" className="w-full h-full object-cover" />
          </div>
          
          <button 
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl p-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`text-lg font-medium transition-colors ${
                isActive(item.href) 
                ? 'text-blue-600' 
                : 'text-gray-700 hover:text-blue-600'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;