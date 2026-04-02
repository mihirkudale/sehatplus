import React from 'react';
import { Facebook, Instagram, Youtube, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const TopBar = () => {
  return (
    <div className="bg-[#7d6356] py-2 hidden md:block">
      <div className="container mx-auto px-6 flex justify-between items-center text-[12px] font-medium uppercase tracking-[0.05em] text-white">
        {/* Left: phone numbers */}
        <div className="flex items-center gap-6">
          <a
            href="tel:+919011256500"
            className="flex items-center gap-1.5 hover:text-white/80 transition-colors"
          >
            <Phone size={12} fill="white" className="text-white" />
            +91 9011256500
          </a>
          <a
            href="tel:+917666729164"
            className="flex items-center gap-1.5 hover:text-white/80 transition-colors"
          >
            <Phone size={12} fill="white" className="text-white" />
            +91 7666729164
          </a>
        </div>

        {/* Right: subscription + socials */}
        <div className="flex items-center gap-6">
          <Link
            to="/contact"
            className="hover:text-white/80 transition-colors border-r border-white/20 pr-6"
          >
            Subscription
          </Link>
          <div className="flex items-center gap-3">
            <a
              href="https://facebook.com/sehatplus"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/80 transition-all"
            >
              <Facebook size={14} />
            </a>
            <a
              href="https://instagram.com/sehatplus"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/80 transition-all"
            >
              <Instagram size={14} />
            </a>
            <a
              href="https://youtube.com/sehatplus"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/80 transition-all"
            >
              <Youtube size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
