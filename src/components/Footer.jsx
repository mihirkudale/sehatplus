import React from 'react';
import { Instagram, MessageCircle, Mail, MapPin, Youtube, Twitter, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 pt-24 pb-12 overflow-hidden">
      <div className="container px-6">
        {/* Top CTA Section */}
        <div className="bg-[#2D5A27] rounded-[3rem] p-12 md:p-20 text-center mb-24 relative overflow-hidden group">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 group-hover:scale-105 transition-transform duration-1000" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">
              Ready to Start Your <br />
              <span className="italic font-normal">Health Transformation?</span>
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
              Join 2500+ individuals who have redefined their health through evidence-based clinical nutrition.
            </p>
            <a href="#booking" className="btn-secondary py-5 px-12 text-lg inline-flex items-center gap-3">
              Begin Your Journey
              <ArrowRight size={20} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand Column */}
          <div className="space-y-8">
            <a href="/" className="flex flex-col group">
              <span className="text-3xl font-bold tracking-tighter text-[#1A1A1A]" style={{ fontFamily: "'Playfair Display', serif" }}>
                SEHAT<span className="text-[#2D5A27]">PLUS</span>
              </span>
              <span className="text-[10px] tracking-[0.2em] text-gray-500 uppercase -mt-1 group-hover:text-[#2D5A27] transition-colors">By Ambika Nair</span>
            </a>
            <p className="text-gray-600 leading-relaxed">
              Clinically guided nutrition. Lifestyle-led care. Transforming lives through evidence-based metabolic science and personalized care.
            </p>
            <div className="flex items-center gap-4">
               {[Instagram, Youtube, Twitter, MessageCircle].map((Icon, i) => (
                 <a key={i} href="#" className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#2D5A27] hover:border-[#2D5A27] transition-all bg-[#FAF9F6] shadow-sm">
                    <Icon size={18} />
                 </a>
               ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-8">
             <h4 className="text-sm font-bold uppercase tracking-widest text-[#1A1A1A]">Quick Links</h4>
             <ul className="space-y-4">
                {['About Us', 'Our Services', 'The Method', 'Academia', 'Transformations'].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-sm text-gray-500 hover:text-[#2D5A27] transition-colors font-medium">
                      {link}
                    </a>
                  </li>
                ))}
             </ul>
          </div>
          
          {/* Services */}
          <div className="space-y-8">
             <h4 className="text-sm font-bold uppercase tracking-widest text-[#1A1A1A]">Programs</h4>
             <ul className="space-y-4">
                {['Hormonal Wellness', 'Medical Nutrition', 'Precision Dieting', 'Weight Management', 'Family Wellness'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gray-500 hover:text-[#2D5A27] transition-colors font-medium">
                      {link}
                    </a>
                  </li>
                ))}
             </ul>
          </div>
          
          {/* Contact */}
          <div className="space-y-8">
             <h4 className="text-sm font-bold uppercase tracking-widest text-[#1A1A1A]">Get in Touch</h4>
             <ul className="space-y-6">
                <li className="flex gap-4">
                   <MapPin size={20} className="text-[#2D5A27] flex-shrink-0" />
                   <span className="text-sm text-gray-500 font-medium">102, Sterling Centre, Opposite Aurora Towers, Camp, Pune, India</span>
                </li>
                <li className="flex gap-4">
                   <Mail size={20} className="text-[#2D5A27] flex-shrink-0" />
                   <span className="text-sm text-gray-500 font-medium">care@sehatplus.com</span>
                </li>
                <li className="flex gap-4">
                   <MessageCircle size={20} className="text-[#2D5A27] flex-shrink-0" />
                   <span className="text-sm text-gray-500 font-medium">+91 98XXX XXXXX (WhatsApp)</span>
                </li>
             </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
           <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
              © {currentYear} SEHAT PLUS WELLNESS. ALL RIGHTS RESERVED.
           </p>
           <div className="flex gap-10">
              <a href="#" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-[#2D5A27] transition-colors">Privacy Policy</a>
              <a href="#" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-[#2D5A27] transition-colors">Terms of Service</a>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
