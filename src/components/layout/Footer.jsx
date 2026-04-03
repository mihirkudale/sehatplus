import React, { useState, useEffect } from 'react';
import sehatplusLogo from '@assets/sehatplus-logo.png';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Facebook, 
  Instagram, 
  Youtube, 
  Phone, 
  Mail, 
  MessageCircle,
  Calendar,
  ChevronUp
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showToTop, setShowToTop] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('idle'); // idle, sending, success

  useEffect(() => {
    const handleScroll = () => {
      setShowToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  const fruits = [
    { src: 'https://images.unsplash.com/photo-1590732159901-447990100f77?auto=format&fit=crop&q=80', pos: 'top-[10%] left-[5%]', size: 'w-24', delay: 0 },
    { src: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?auto=format&fit=crop&q=80', pos: 'top-[30%] right-[10%]', size: 'w-20', delay: 1 },
    { src: 'https://images.unsplash.com/photo-1615485242231-729938883626?auto=format&fit=crop&q=80', pos: 'bottom-[20%] left-[10%]', size: 'w-32', delay: 2 },
    { src: 'https://images.unsplash.com/photo-1528821128474-27f963b067b3?auto=format&fit=crop&q=80', pos: 'bottom-[10%] right-[15%]', size: 'w-28', delay: 3 },
  ];

  return (
    <footer className="relative bg-[#1a1a1a] text-white pt-32 pb-12 overflow-hidden font-sans">
      {/* Floating Fruit Layers (2026 depth trend) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {fruits.map((f, i) => (
          <motion.img
            key={i}
            src={f.src}
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: f.delay
            }}
            className={`absolute ${f.pos} ${f.size} opacity-30 blur-[2px] hover:blur-0 transition-all duration-700 pointer-events-auto cursor-help`}
          />
        ))}
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
          {/* Brand Info */}
          <div className="space-y-10">
            <Link to="/" className="inline-block group">
              <img 
                src={sehatplusLogo}
                alt="Sehat+"
                className="h-20 w-auto object-contain brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity"
              />

              <div className="text-[10px] font-black uppercase tracking-[3px] text-[var(--sp-gold)] mt-4">Nutrition | Health | Wellness</div>
            </Link>
            <p className="text-gray-400 text-[15px] leading-relaxed font-bold uppercase tracking-wider">
              305, Seasons Business Square,<br/>
              Aundh, Pune - 411007.<br/>
              Serving health since 1994.
            </p>
            <div className="space-y-6">
              <a href="tel:+919011256500" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-[var(--sp-brown)] transition-all duration-300 group-hover:rotate-12">
                  <Phone size={18} className="text-[var(--sp-gold)] group-hover:text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-black tracking-widest text-gray-300 group-hover:text-white transition-colors uppercase">+91 9011256500</span>
                  <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">+91 7666729164</span>
                </div>
              </a>
              <a href="mailto:info@sehatplus.in" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-[var(--sp-brown)] transition-all duration-300 group-hover:rotate-12">
                  <Mail size={18} className="text-[var(--sp-gold)] group-hover:text-white" />
                </div>
                <span className="text-sm font-black tracking-widest text-gray-300 group-hover:text-white transition-colors uppercase">info@sehatplus.in</span>
              </a>
            </div>
            <div className="flex gap-4">
              {[Facebook, Instagram, Youtube].map((Icon, idx) => (
                <a key={idx} href="#" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[var(--sp-gold)] hover:-translate-y-2 transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-[13px] font-black mb-10 uppercase tracking-[4px] text-[var(--sp-gold)]">Navigation</h4>
            <ul className="space-y-5">
              {['Home', 'About Us', 'Services', 'Success Stories', 'Blog', 'Media', 'FAQ'].map((link) => (
                <li key={link}>
                  <Link to={`/#${link.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-white transition-colors text-sm font-black uppercase tracking-widest">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services List */}
          <div>
            <h4 className="text-[13px] font-black mb-10 uppercase tracking-[4px] text-[var(--sp-gold)]">Services</h4>
            <ul className="space-y-5">
              {[
                'Wellness Nutrition',
                'Medical Nutrition Therapy',
                'Weight Management',
                'Corporate Nutrition Program',
                'Online Consultation',
                'My Life Coach'
              ].map((service) => (
                <li key={service}>
                  <Link to="#" className="text-gray-400 hover:text-white transition-colors text-sm font-black uppercase tracking-widest">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Reach Us Form (Exact Clone style) */}
          <div>
            <h4 className="text-[13px] font-black mb-10 uppercase tracking-[4px] text-[var(--sp-gold)]">Reach Us</h4>
            {formStatus === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-500/20 border border-green-500/50 p-6 rounded-xl text-center"
              >
                <p className="text-white font-bold text-sm">Message Sent Successfully!</p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="mt-4 text-[10px] uppercase tracking-widest text-[var(--sp-gold)] hover:text-white transition-colors"
                >
                  Send another
                </button>
              </motion.div>
            ) : (
              <form className="space-y-4" onSubmit={handleSendMessage}>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Full Name" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-white/5 border-2 border-white/10 rounded-xl px-5 py-4 text-sm font-bold text-white focus:outline-none focus:border-[var(--sp-gold)] transition-colors placeholder:text-gray-600"
                />
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email Address" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-white/5 border-2 border-white/10 rounded-xl px-5 py-4 text-sm font-bold text-white focus:outline-none focus:border-[var(--sp-gold)] transition-colors placeholder:text-gray-600"
                />
                <textarea 
                  name="message"
                  placeholder="How can we help?" 
                  rows={3}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-white/5 border-2 border-white/10 rounded-xl px-5 py-4 text-sm font-bold text-white focus:outline-none focus:border-[var(--sp-gold)] transition-colors placeholder:text-gray-600 resize-none"
                ></textarea>
                <button 
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="w-full bg-[var(--sp-brown)] hover:bg-[var(--sp-gold)] text-white font-black py-5 rounded-xl text-[12px] uppercase tracking-[4px] transition-all transform active:scale-95 shadow-xl disabled:opacity-50"
                >
                  {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] font-black uppercase tracking-[3px] text-gray-500">
          <p>© {currentYear} SEHAT PLUS. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Refunds</a>
          </div>
        </div>
      </div>

      {/* Sticky Elements (2026 Trend) */}
      <AnimatePresence>
        {showToTop && (
          <motion.button 
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-32 right-8 z-[60] w-14 h-14 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center text-white hover:bg-[var(--sp-gold)] transition-all shadow-2xl border border-white/20 group"
          >
            <ChevronUp size={28} className="group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>


      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[60] group hidden md:block">
        <button className="bg-[var(--sp-brown)] text-white flex flex-col items-center gap-6 py-10 px-4 rounded-l-3xl shadow-[0_30px_60px_-15px_rgba(139,115,103,0.5)] transform translate-x-2 group-hover:translate-x-0 transition-all duration-500 border border-white/10 hover:bg-[var(--sp-gold)]">
          <Calendar size={24} />
          <span className="[writing-mode:vertical-lr] rotate-180 font-black uppercase text-[11px] tracking-[5px]">
            Book Appointment
          </span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
