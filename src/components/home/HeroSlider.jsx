import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  {
    title: 'Wellness Nutrition',
    tag: 'Diet For All Age Groups',
    subtitle: "Nutrition is important for everyone. You don't have to be sick to visit a doctor; rather you can prevent sickness by being healthy.",
    image: 'https://www.sehatplus.in/wp-content/uploads/2022/12/Wellness-Nutrition-Banner.png',
    to: '/wellness-nutrition'
  },
  {
    title: 'Medical Nutrition Therapy',
    tag: 'Diet For All Diseases',
    subtitle: "This is a therapeutic approach to treat a medical condition. It's a evidence based practice followed by expert nutritionists throughout the world.",
    image: 'https://www.sehatplus.in/wp-content/uploads/2022/12/medical-nutrition-therapy-banner-1.png',
    to: '/medical-nutrition-therapy'
  },
  {
    title: 'Weight Management',
    tag: 'Focus On Progress Not Perfection',
    subtitle: "Weight management does not include only restrictive diets. It's a journey from Being Healthy to being Fit.",
    image: 'https://www.sehatplus.in/wp-content/uploads/2022/12/weight-management-banner.png',
    to: '/weight-management'
  },
  {
    title: 'My Life Coach',
    tag: 'Experience The Miraculous Difference',
    subtitle: "Specialized in NLP (Neuro-Linguistic Programming), Reiki, Crystal Healing, EFT, Inner child Matrix Reimprinting, BFT and REBT Therapy",
    image: 'https://www.sehatplus.in/wp-content/uploads/2022/12/my-life-coach-banner.png',
    to: '/my-life-coach'
  }
];


export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[65vh] md:h-[80vh] min-h-[500px] w-full overflow-hidden bg-[#faf9f6]">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Full-Width Banner Image */}
          <div className="relative w-full h-full">
            <img
              alt={slides[current].title}
              className="w-full h-full object-cover object-center md:object-[center_top]"
              src={slides[current].image}
            />
            {/* Subtle Gradient Overlay for consistency */}
            <div className="absolute inset-0 bg-black/5 pointer-events-none" />
          </div>

          {/* Interactive Overlay Content (Buttons Only) */}
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container mx-auto px-6 md:px-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mt-[45%] md:mt-[25%]"
              >
                <Link
                  to={slides[current].to}
                  className="group inline-flex items-center gap-3 bg-[#8a6d5f] hover:bg-black text-white px-10 py-4 rounded-sm text-[13px] font-black uppercase tracking-[3px] transition-all duration-500 shadow-2xl hover:gap-6"
                >
                  Read More 
                  <ArrowRight size={20} className="transition-all" />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Hero Navigation Controls */}
      <div className="absolute bottom-10 left-0 w-full z-30">
        <div className="container mx-auto px-6 md:px-12 flex justify-start gap-4">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-1.5 transition-all duration-700 rounded-full ${
                current === idx ? 'w-16 bg-[var(--sp-brown)] shadow-lg shadow-[var(--sp-brown)]/20' : 'w-4 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
