import { MessageCircle, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background py-20">
      <div className="flex flex-col items-center text-center space-y-8">
        {/* Logo */}
        <div className="text-2xl font-sans font-medium tracking-tight">
          <span className="text-charcoal">Sehat</span>
          <span className="text-primary">Plus</span>
        </div>

        {/* Name & Location */}
        <div className="space-y-1">
          <p className="text-charcoal font-medium text-base">Ambika Nair</p>
          <p className="text-charcoal/50 text-sm">Pune, India</p>
        </div>

        {/* Tagline */}
        <p className="text-charcoal/40 text-sm italic">
          Medically guided nutrition. Lifestyle-led care.
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="w-11 h-11 rounded-full bg-charcoal/6 flex items-center justify-center text-charcoal/50 hover:text-primary hover:bg-primary/10 transition-all duration-300"
          >
            <MessageCircle size={18} />
          </a>
          <a
            href="#"
            className="w-11 h-11 rounded-full bg-charcoal/6 flex items-center justify-center text-charcoal/50 hover:text-primary hover:bg-primary/10 transition-all duration-300"
          >
            <Instagram size={18} />
          </a>
          <a
            href="#"
            className="w-11 h-11 rounded-full bg-charcoal/6 flex items-center justify-center text-charcoal/50 hover:text-primary hover:bg-primary/10 transition-all duration-300"
          >
            <Mail size={18} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-charcoal/35 text-xs pt-4">
          © 2026 Sehat Plus. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
