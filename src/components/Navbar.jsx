import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Method', href: '#method' },
    { name: 'Academia', href: '#academia' },
    { name: 'Transformations', href: '#transformations' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 glass shadow-sm' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex flex-col group">
          <span className="text-2xl font-bold tracking-tighter text-[#1A1A1A]" style={{ fontFamily: "'Playfair Display', serif" }}>
            SEHAT<span className="text-[#2D5A27]">PLUS</span>
          </span>
          <span className="text-[10px] tracking-[0.2em] text-gray-500 uppercase -mt-1 group-hover:text-[#2D5A27] transition-colors">By Ambika Nair</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-semibold text-gray-600 hover:text-[#2D5A27] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="flex items-center gap-6 ml-4">
            <a href="#booking" className="btn-primary text-sm">
              Begin Journey
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-[#1A1A1A] hover:text-[#2D5A27] transition-colors" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass border-t border-gray-100 py-8 px-6 flex flex-col gap-6 animate-in slide-in-from-top-4 duration-300 shadow-xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-xl font-semibold text-[#1A1A1A] hover:text-[#2D5A27]"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-col gap-4 mt-4 pt-6 border-t border-gray-100">
            <a 
              href="#booking" 
              className="btn-primary text-center" 
              onClick={() => setIsMenuOpen(false)}
            >
              Begin Journey
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
