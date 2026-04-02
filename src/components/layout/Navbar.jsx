import React, { useMemo, useRef, useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Plus, Minus } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import TopBar from './TopBar';
import sehatplusLogo from '@assets/sehatplus-logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const location = useLocation();
  const servicesWrapRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setActiveSubmenu(null);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const services = useMemo(() => ([
    { name: 'Wellness Nutrition', to: '/wellness-nutrition' },
    { name: 'Medical Nutrition Therapy', to: '/medical-nutrition-therapy' },
    { name: 'Weight Management', to: '/weight-management' },
    { name: 'Nutrition For Skin and Hair', to: '/nutrition-for-skin-and-hair' },
    { name: 'Sports Nutrition Services', to: '/sports-nutrition-services' },
    { name: 'Corporate Nutrition Program', to: '/corporate-nutrition-program' },
    { name: 'School Nutrition Program', to: '/school-nutrition-program' },
    { name: 'Online Consultation', to: '/online-consultation' },
    { name: 'Hospital Dietetic Department Setup', to: '/hospital-dietetic-department-setup' },
    { name: 'Sehat+ Academia', to: '/academics' },
    { name: 'My Life Coach', to: '/my-life-coach' },
  ]), []);

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'About Us', to: '/about' },
    { name: 'Services', to: '#', hasDropdown: true },
    { name: 'Success Stories', to: '/success-stories' },
    { name: 'Blog', to: '/blog' },
    { name: 'Achievements', to: '/achievements' },
    { name: 'Media', to: '/media' },
    { name: 'FAQ', to: '/faq' },
  ];

  return (
    <header className="fixed w-full z-[100] transition-all duration-300">
      {/* Top Bar - Hidden on Scroll */}
      {!isScrolled && <TopBar />}

      {/* Main Navbar */}
      <nav 
        className={`w-full transition-all duration-500 ${
          isScrolled 
            ? 'bg-white shadow-[0_2px_15px_rgba(0,0,0,0.08)] py-3' 
            : 'bg-white py-5'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 transition-transform duration-300 hover:scale-[1.02]">
            <div className="flex flex-col items-center">
              <img
                src={sehatplusLogo}
                alt="Sehat+"
                className={`transition-all duration-500 object-contain ${
                  isScrolled ? 'h-10 md:h-12' : 'h-14 md:h-16'
                }`}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              link.hasDropdown ? (
                <div 
                  key={link.name}
                  className="relative group px-1"
                  onMouseEnter={() => setActiveSubmenu('services')}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  <button className="flex items-center gap-1 px-3 py-2 text-[13px] font-bold uppercase tracking-wider text-gray-700 hover:text-[var(--sp-gold)] transition-colors">
                    {link.name} <ChevronDown size={14} className={`transition-transform duration-300 ${activeSubmenu === 'services' ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {/* Dropdown Menu */}
                  <div className={`absolute left-0 top-full pt-4 transition-all duration-300 ${activeSubmenu === 'services' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
                    <div className="w-[300px] bg-white shadow-2xl rounded-sm border-t-2 border-[var(--sp-gold)] py-3 px-1">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          to={service.to}
                          className="block px-5 py-2.5 text-[13px] font-semibold text-gray-700 hover:bg-gray-50 hover:text-[var(--sp-gold)] transition-colors border-b border-gray-50 last:border-0"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link 
                  key={link.name}
                  to={link.to}
                  className={`px-4 py-2 text-[14px] font-semibold uppercase tracking-wider transition-colors ${
                    location.pathname === link.to ? 'text-[#7d6356]' : 'text-[#7d6356] hover:text-[#9F7F52]'
                  }`}
                >
                  {link.name}
                </Link>
              )
            ))}

            {/* Contact Us Button */}
            <Link 
              to="/contact" 
              className="ml-4 px-6 py-3 bg-[var(--sp-gold)] text-white text-[13px] font-bold uppercase tracking-widest rounded-sm hover:bg-[#8a6e47] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-gray-800 hover:text-[var(--sp-gold)] transition-colors"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu size={30} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[110] transition-opacity duration-500 lg:hidden ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-[85%] max-w-[400px] bg-[#2d2d2d] z-[120] shadow-2xl transition-transform duration-500 transform lg:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Drawer Header */}
          <div className="flex justify-between items-center p-6 border-b border-white/10">
            <div className="bg-white p-2 rounded-sm">
              <img 
                src="https://www.sehatplus.in/wp-content/uploads/2022/11/Group-9682-1.png" 
                alt="Sehat+" 
                className="h-8 w-auto"
              />
            </div>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-white hover:text-[var(--sp-gold)] transition-colors"
            >
              <X size={30} />
            </button>
          </div>

          {/* Drawer Navigation */}
          <div className="flex-1 overflow-y-auto py-8 px-6">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col">
                  <div className="flex justify-between items-center py-3 border-b border-white/5">
                    {link.hasDropdown ? (
                      <>
                        <button 
                          onClick={() => setActiveSubmenu(activeSubmenu === link.name ? null : link.name)}
                          className={`text-lg font-bold uppercase tracking-widest text-left flex-1 transition-colors ${
                            activeSubmenu === link.name ? 'text-[var(--sp-gold)]' : 'text-white'
                          }`}
                        >
                          {link.name}
                        </button>
                        <button 
                          onClick={() => setActiveSubmenu(activeSubmenu === link.name ? null : link.name)}
                          className="p-1 text-white/50"
                        >
                          {activeSubmenu === link.name ? <Minus size={20} shade="#9F7F52" /> : <Plus size={20} />}
                        </button>
                      </>
                    ) : (
                      <Link 
                        to={link.to}
                        className="text-lg font-bold uppercase tracking-widest text-white hover:text-[var(--sp-gold)] transition-colors w-full"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                  
                  {/* Mobile Submenu */}
                  {link.hasDropdown && activeSubmenu === link.name && (
                    <div className="flex flex-col gap-4 py-4 pl-4 border-l border-[var(--sp-gold)]/30 mt-2 bg-white/5 rounded-r-md">
                      {services.map((service) => (
                        <Link 
                          key={service.name}
                          to={service.to}
                          className="text-sm font-medium text-gray-300 hover:text-[var(--sp-gold)] transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Drawer Footer */}
          <div className="p-8 border-t border-white/10 bg-black/20">
            <Link 
              to="/contact"
              className="block w-full py-4 bg-[var(--sp-gold)] text-white text-center font-bold uppercase tracking-[0.2em] rounded-sm hover:bg-[#8a6e47] transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
            <div className="mt-8 flex justify-center gap-6">
               {/* Socials can be added here if needed */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
