import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function AboutHero() {
  return (
    <section className="relative pt-48 pb-32 bg-white border-b border-gray-100 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[var(--sp-gold)]/5 rounded-l-[10rem] -mr-32 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[2px] w-12 bg-[var(--sp-gold)]" />
            <span className="text-[12px] font-black uppercase tracking-[5px] text-[var(--sp-gold)]">
              Since 1994
            </span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black text-[#2e2e2e] leading-none font-serif italic mb-10">
            About Sehat+
          </h1>
          
          <div className="flex items-center gap-3 text-[13px] font-bold uppercase tracking-[3px] text-gray-400">
            <Link to="/" className="hover:text-[var(--sp-brown)] transition-colors">Home</Link>
            <ChevronRight size={16} />
            <span className="text-[var(--sp-brown)]">About Us</span>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[var(--sp-brown)]/5 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
}
