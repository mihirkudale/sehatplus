import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  {
    title: 'Medical Nutrition Therapy',
    subtitle: "This is a therapeutic approach to treat a medical condition. It's an evidence based practice followed by expert nutritionists throughout the world.",
    image: 'https://www.sehatplus.in/wp-content/uploads/2022/12/medical-nutrition-therapy-banner-1.png',
    tag: 'Therapeutic | Evidence Based'
  },
  {
    title: 'Weight Management',
    subtitle: "The basic principle is to understand one's energy requirement and strike a balance between diet and exercise routine.",
    image: 'https://www.sehatplus.in/wp-content/uploads/2022/12/weight-management-banner.png',
    tag: 'Life Style | Energy Balance'
  },
  {
    title: 'Wellness Nutrition',
    subtitle: "Focuses on achieving optimal health through tailored nutritional plans that support overall well-being and energy levels.",
    image: 'https://www.sehatplus.in/wp-content/uploads/2022/12/wellness-nutrition-banner.png',
    tag: 'Wellness | Optimal Health'
  }
];

export default function HomeHero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[85vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#faf9f6]">
      {/* Abstract Background Shapes (Exact Clone Style) */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="absolute -top-20 -left-20 w-[600px] h-[600px]" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#c5a48d" d="M44,-76.2C58.3,-69.3,72.1,-59.5,80.1,-46.3C88.1,-33.1,90.4,-16.5,88.7,-0.9C87,14.6,81.4,29.3,72.7,42.2C64.1,55.1,52.4,66.4,38.8,72.9C25.2,79.4,9.6,81.1,-5.4,84.2C-20.4,87.4,-34.7,92,-47.9,88.2C-61,84.4,-72.9,72.2,-79.8,58.3C-86.7,44.4,-88.6,28.8,-87.3,13.8C-86,-1.2,-81.4,-15.6,-74.6,-28.9C-67.8,-42.2,-58.8,-54.3,-46.9,-62.5C-35.1,-70.7,-20.4,-75,-5.2,-72C10.1,-69.1,44,-76.2,44,-76.2Z" transform="translate(100 100)" />
        </svg>
        <div className="absolute top-1/2 right-[-5%] w-[400px] h-[400px] border-[40px] border-[#8b7367]/10 rounded-full" />
      </div>

      <div className="container px-6 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-[2px] w-12 bg-[var(--sp-gold)]" />
                  <span className="text-[12px] font-black uppercase tracking-[4px] text-[var(--sp-gold)]">
                    {slides[current].tag}
                  </span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-[#2e2e2e] leading-[1.1] mb-8 font-serif italic">
                  {slides[current].title}
                </h1>
                <p className="text-[17px] md:text-[19px] text-gray-500 leading-relaxed max-w-xl mb-12 font-medium">
                  {slides[current].subtitle}
                </p>
                <div className="flex">
                  <Link
                    to="/contact-us"
                    className="group bg-[var(--sp-brown)] hover:bg-[#7a655b] text-white px-10 py-4 rounded-md text-[13px] font-black uppercase tracking-widest transition-all duration-300 shadow-xl flex items-center gap-3"
                  >
                    Read More 
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Pagination Bullets */}
            <div className="mt-16 flex gap-4">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`h-2.5 transition-all duration-500 rounded-full ${
                    current === idx ? 'w-10 bg-[var(--sp-brown)]' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 1.1, rotate: 2 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative z-10 aspect-[16/11] rounded-[2rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border-[12px] border-white"
              >
                <img
                  alt={slides[current].title}
                  className="w-full h-full object-cover"
                  src={slides[current].image}
                />
              </motion.div>
            </AnimatePresence>
            
            {/* Decorative background elements */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[var(--sp-gold)] rounded-full opacity-10 blur-3xl" />
            <div className="absolute -top-10 -left-10 w-48 h-48 border border-[var(--sp-brown)]/20 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

