import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';

const Hero = () => {
  const navigate = useNavigate();

  const scrollToNext = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://sehatdemo.lovable.app/assets/hero-bg-CsGzs88x.jpg')",
          filter: "blur(0px)" 
        }}
      />
      <div className="absolute inset-0 z-1 w-full h-full bg-background/80" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-7xl lg:text-[96px] font-serif text-charcoal leading-[1.1] tracking-tight">
              Clinically guided <br className="hidden md:block" />
              nutrition designed <br className="hidden md:block" />
              for real life.
            </h1>
            
            <p className="text-base md:text-lg text-charcoal/80 max-w-2xl leading-relaxed font-sans font-medium">
              Personalised, medically safe nutrition plans for hormonal health, medical conditions, and sustainable lifestyle change.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-wrap gap-5 pt-4"
          >
            <button onClick={() => navigate('/services')} className="h-14 px-10 rounded-xl text-[18px] font-medium bg-primary text-[#FAF9F6] shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition-all duration-500">
              Begin Your Journey
            </button>
            <button onClick={() => navigate('/contact')} className="h-14 px-10 rounded-xl text-[18px] font-medium border border-charcoal/20 text-charcoal hover:bg-charcoal/5 hover:border-charcoal/30 transition-all duration-500">
              Talk to Us
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        onClick={scrollToNext}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 cursor-pointer"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-charcoal/50">Discover</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-charcoal/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
