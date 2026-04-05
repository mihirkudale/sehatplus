import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Instagram, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Services', path: '/services' },
    { title: 'Method', path: '/#method' },
    { title: 'Academia', path: '/academia' },
    { title: 'Transformations', path: '/transformations' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-xl py-3 border-b border-charcoal/5 shadow-sm' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-sans font-medium tracking-tight">
          <span className="text-charcoal">Sehat</span>
          <span className="text-primary">Plus</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-10">
          <div className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                to={link.path}
                className={`text-[14px] font-medium tracking-wide transition-colors hover:text-charcoal ${location.pathname === link.path ? 'text-charcoal' : 'text-charcoal/70'}`}
              >
                {link.title}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            <button onClick={() => navigate('/contact')} className="h-9 px-4 rounded-[14px] text-[14px] font-medium border border-charcoal/20 text-charcoal hover:bg-charcoal/5 transition-all">
              Talk to Us
            </button>
            <button onClick={() => navigate('/services')} className="h-9 px-4 rounded-[14px] text-[14px] font-medium bg-primary text-[#FAF9F6] shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition-all">
              Begin Journey
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-charcoal" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl lg:hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.title}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-charcoal border-b border-gray-100 pb-2"
                >
                  {link.title}
                </Link>
              ))}
              <button className="bg-primary text-white w-full py-4 rounded-xl text-lg font-medium">
                Book Appointment
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
