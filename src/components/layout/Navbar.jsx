import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
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

  // Define nav links inside or outside, they are static.
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
    <nav aria-label="Main navigation" className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-xl h-16 border-b border-charcoal/5 shadow-sm' : 'bg-transparent h-20'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center h-full">
        {/* Logo */}
        <Link to="/" aria-label="Sehat Plus – Home" className="flex items-center">
          <img 
            src="/logo.png" 
            alt="Sehat Plus Logo" 
            className="h-10 md:h-12 w-auto object-contain"
            loading="eager"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-10">
          <div className="flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = !link.path.includes('#') && location.pathname === link.path;
              return (
                <Link
                  key={link.title}
                  to={link.path}
                  className={`text-[14px] tracking-wide transition-all duration-300 relative py-1 ${isActive ? 'text-charcoal font-medium nav-link-active' : 'text-charcoal/70 hover:text-charcoal font-medium'}`}
                >
                  {link.title}
                </Link>
              );
            })}
          </div>
          
          <div className="flex items-center space-x-4">
            <button onClick={() => navigate('/contact')} className="h-10 px-4 rounded-[14px] text-[14px] font-medium border border-charcoal/20 text-charcoal hover:bg-charcoal/5 transition-all">
              Talk to Us
            </button>
            <button onClick={() => navigate('/services')} className="h-10 px-4 rounded-[14px] text-[14px] font-medium bg-primary text-[#FAF9F6] shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition-all">
              Begin Journey
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-charcoal"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
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
              <button onClick={() => { navigate('/contact'); setIsOpen(false); }} className="bg-primary text-white w-full py-4 rounded-xl text-lg font-medium">
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
