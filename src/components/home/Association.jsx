import React from 'react';
import { motion } from 'framer-motion';

const LOGOS = [
  { name: 'SNDT Women\'s University', city: '' },
  { name: 'Indira National School Pune', city: '' },
  { name: 'MMF - Joshi Hospital', city: '' },
  { name: 'Rasoi Club', city: '' },
  { name: 'Grant Medical Foundation - Ruby Hall Clinic', city: '' },
  { name: 'Jupiter Hospital', city: '' },
  { name: 'Indus Business School', city: '' },
  { name: 'Sandvik', city: '' },
];

export default function Association() {
  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="container mx-auto px-6 mb-16 relative z-10">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold text-black text-center mb-12">
            Our Associations
          </h2>
        </div>
      </div>

      <div className="relative flex overflow-hidden">
        {/* Gradient Mask */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

        <motion.div 
          className="flex whitespace-nowrap gap-12"
          animate={{ x: [0, -2000] }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 50,
            ease: 'linear'
          }}
        >
          {[...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS].map((logo, idx) => (
            <div 
              key={idx} 
              className="flex items-center justify-center min-w-[280px] h-32 bg-[#f7f7f7] rounded-xl border border-gray-100 p-8 grayscale hover:grayscale-0 transition-all duration-500"
            >
              <span className="text-lg font-bold text-gray-500 text-center whitespace-normal leading-tight">
                {logo.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
